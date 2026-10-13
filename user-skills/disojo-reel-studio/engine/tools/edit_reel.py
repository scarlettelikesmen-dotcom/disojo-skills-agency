#!/usr/bin/env python3
"""Simple reel edit: transcribe -> cut dead air -> slow push + punch-ins -> animated captions + hook -> voice clean -> 1080x1920 mp4.

  .venv/bin/python tools/edit_reel.py INPUT.mov --out edits/name --hook "Line one\\nLine with *emphasis*" [--kicker "Label"]
Options: --no-sfx | --transcript-only | --no-zoom | --no-clean | --music track.mp3 [--music-db -22] | --retranscribe | --lang en | --model small
Captions/hook are rendered frame by frame in Chrome (tools/timeline.html) and overlaid; this ffmpeg has no libass/drawtext.
"""
import argparse, json, re, subprocess, sys
from pathlib import Path
import numpy as np

HUB = Path(__file__).resolve().parent.parent
FPS, W, H = 30, 1080, 1920
CAP_Y = 700           # top of the 880px caption layer (caption centre ~y1340, clear of Reels bottom UI)
GAP_KEEP = 0.28       # raw pauses between words longer than this are cut
PAD_IN, PAD_OUT = 0.06, 0.10
HOOK_AT, HOOK_CLAIM, HOOK_END = 0.15, 1.2, 2.9   # claim lands ~1.2s (going-viral rule)

VOICE_CLEAN = ("highpass=f=80,afftdn=nr=12:nf=-30:tn=1,equalizer=f=250:t=q:w=1:g=-2,equalizer=f=3200:t=q:w=1:g=2.5,"
               "deesser=i=0.3:m=0.5:f=0.5,acompressor=threshold=-21dB:ratio=3:attack=6:release=90:makeup=2")

def run(cmd):
    r = subprocess.run([str(c) for c in cmd], capture_output=True, text=True)
    if r.returncode: sys.exit(f"FAILED: {' '.join(map(str, cmd))[:300]}\n{r.stderr[-1800:]}")
    return r

def loudness(path):
    r = subprocess.run(["ffmpeg", "-nostats", "-i", str(path), "-vn", "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
    tail = r[r.rfind("Summary:"):]
    g = lambda k: (re.search(k + r":\s+(-?[\d.]+)", tail) or [None, "nan"])[1]
    return float(g("I")), float(g("LRA")), float(g("Peak"))

def transcribe(video, model="small", lang=None):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(video), "-f", "f32le", "-ac", "1", "-ar", "16000", "-"], capture_output=True).stdout
    audio = np.frombuffer(raw, dtype=np.float32)
    from faster_whisper import WhisperModel
    m = WhisperModel(model, device="cpu", compute_type="int8")
    segs, info = m.transcribe(audio, word_timestamps=True, vad_filter=True, language=lang)
    return [dict(s=w.start, e=w.end, w=w.word.strip()) for sg in segs for w in sg.words], info.language, len(audio) / 16000

FILLERS = {"um", "uh", "uhh", "umm", "erm", "hmm", "mm", "ah"}
norm = lambda w: re.sub(r"[^a-z0-9']", "", w.lower())

def _eq(x, y):
    from difflib import SequenceMatcher
    return x == y or (len(x) > 3 and len(y) > 3 and SequenceMatcher(None, x, y).ratio() >= 0.7)

def clean_words(words, keep_retakes=False, windows=None, fix=None):
    """Drop fillers, drop outside-plan ranges, and drop false starts (keep the LAST attempt).
    A restart = a 4-word fuzzy match, or a 3-word match that begins right after a pause (>=0.4s), within ~16 words (or ~30 if a >=1.5s pause precedes the restart).
    Fuzzy so 'traders'/'shaders' (Whisper variance) still match. Always review take_report.py output: this is a heuristic."""
    ws = [w for w in words if norm(w["w"]) not in FILLERS]
    # Whisper sometimes stretches a short word across the pause before it ("to" 1.9-3.8s): clamp its start to its real onset
    ws = [dict(w, s=w["e"] - 0.4) if (w["e"] - w["s"] > 1.0 and len(norm(w["w"])) <= 4) else w for w in ws]
    if fix:
        ws = [dict(w, w=re.sub(r"[A-Za-z']+", lambda m: fix.get(norm(m.group(0)), m.group(0)), w["w"], count=1)) for w in ws]
    if windows: ws = [w for w in ws if any(a - 0.02 <= w["s"] and w["e"] <= b + 0.15 for a, b in windows)]
    if keep_retakes: return ws, []
    n, drop, dropped, i = [norm(w["w"]) for w in ws], set(), [], 0
    while i < len(ws) - 3:
        hit = None
        for j in range(i + 1, min(len(ws) - 2, i + 30)):
            if j > i + 17 and ws[j]["s"] - ws[j - 1]["e"] < 1.5: continue   # far restarts only count after a real pause
            m4 = j + 4 <= len(ws) and all(_eq(n[i + k], n[j + k]) for k in range(4))
            m3 = all(_eq(n[i + k], n[j + k]) for k in range(3)) and ws[j]["s"] - ws[j - 1]["e"] >= 0.4
            if m4 or m3: hit = j; break
        if hit:
            for k in range(i, hit): drop.add(k)
            dropped.append((ws[i]["s"], ws[hit - 1]["e"], " ".join(w["w"] for w in ws[i:hit])))
            i = hit
        else: i += 1
    return [w for k, w in enumerate(ws) if k not in drop], dropped

def keep_ranges(words, dur):
    rs, prev_e = [], None
    for w in words:
        s, e = max(0, w["s"] - PAD_IN), min(dur, w["e"] + PAD_OUT)
        if rs and w["s"] - prev_e <= GAP_KEEP: rs[-1][1] = max(rs[-1][1], e)
        else: rs.append([s, e])
        prev_e = w["e"]
    return rs

def chunk_words(words):
    """3-4 word caption chunks. Break at sentence punctuation (2+ words), at cut boundaries and at pauses (>0.45s);
    never leave a lone word when it can be merged or rebalanced within the same segment."""
    chunks, cur = [], []
    for w in words:
        if cur and (w["seg"] != cur[-1]["seg"] or w["gap"] > 0.45): chunks.append(cur); cur = []
        cur.append(w)
        if len(cur) >= 4 or (len(cur) >= 2 and re.search(r"[.?!,]$", w["w"])): chunks.append(cur); cur = []
    if cur: chunks.append(cur)
    merged = []
    for ch in chunks:
        same = merged and merged[-1][-1]["seg"] == ch[0]["seg"] and ch[0]["gap"] <= 0.45
        if len(ch) == 1 and same and len(merged[-1]) <= 3: merged[-1] += ch
        elif len(ch) == 1 and same and len(merged[-1]) == 4: ch = [merged[-1].pop()] + ch; merged.append(ch)
        else: merged.append(ch)
    return merged

def make_sfx(events, total, out_wav):
    """Original synthesised sounds (no licensing): soft pop, marker swipe, whoosh. events: [(kind, seconds)]. Quiet by design."""
    SND = {
        "pop": ("aevalsrc=exprs='0.8*sin(2*PI*(620-420*t/0.12)*t)*exp(-t*34)':d=0.16:s=48000", 0.10),
        "swipe": ("anoisesrc=d=0.22:c=white:r=48000:a=0.5,highpass=f=3200,afade=t=in:d=0.05,afade=t=out:st=0.10:d=0.12", 0.07),
        "whoosh": ("anoisesrc=d=0.5:c=pink:r=48000:a=0.6,highpass=f=250,lowpass=f=2600,afade=t=in:d=0.22,afade=t=out:st=0.26:d=0.24", 0.09),
    }
    ev = [(k, t) for k, t in sorted(events, key=lambda e: e[1]) if 0 <= t < total - 0.1]
    if not ev: return False
    cmd, fc = ["ffmpeg", "-v", "error", "-y"], []
    for i, (k, t) in enumerate(ev):
        src, vol = SND[k]; cmd += ["-f", "lavfi", "-i", src]
        m = int(t * 1000); fc.append(f"[{i}:a]volume={vol},aresample=48000,aformat=channel_layouts=stereo,adelay={m}|{m},apad=whole_dur={total:.3f}[s{i}]")
    fc.append("".join(f"[s{i}]" for i in range(len(ev))) + f"amix=inputs={len(ev)}:normalize=0:duration=longest,atrim=0:{total:.3f}[o]")
    run(cmd + ["-filter_complex", ";".join(fc), "-map", "[o]", out_wav])
    return True

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input"); ap.add_argument("--out", required=True)
    ap.add_argument("--hook"); ap.add_argument("--kicker", default="")
    ap.add_argument("--lang"); ap.add_argument("--model", default="small")
    ap.add_argument("--transcript-only", action="store_true"); ap.add_argument("--no-zoom", action="store_true")
    ap.add_argument("--no-clean", action="store_true"); ap.add_argument("--retranscribe", action="store_true")
    ap.add_argument("--music"); ap.add_argument("--music-db", type=float, default=-22.0)
    ap.add_argument("--no-sfx", action="store_true"); ap.add_argument("--plan"); ap.add_argument("--keep-retakes", action="store_true"); ap.add_argument("--caption-style", default="marker")
    a = ap.parse_args()
    out = Path(a.out); out.mkdir(parents=True, exist_ok=True)

    tj = out / "transcript.json"
    if tj.exists() and not a.retranscribe:
        c = json.loads(tj.read_text()); words, lang, dur = c["words"], c["lang"], c["dur"]
    else:
        words, lang, dur = transcribe(a.input, a.model, a.lang)
        tj.write_text(json.dumps(dict(words=words, lang=lang, dur=dur), indent=1))
    print(f"language={lang} source={dur:.1f}s words={len(words)}")
    print(" ".join(w["w"] for w in words))
    if a.transcript_only or not words: return

    plan = json.loads(Path(a.plan).read_text()) if a.plan else {}
    words, dropped = clean_words(words, a.keep_retakes, plan.get("keep"), plan.get("fix"))
    for d0, d1, txt in dropped: print(f"  retake removed {d0:.1f}-{d1:.1f}s: {txt}")
    if not words: sys.exit("no words left after cleaning/plan")
    ranges = keep_ranges(words, dur)
    offs, t = [], 0.0
    for s, e in ranges: offs.append(t); t += e - s
    total = t
    def mp(x):
        for (s, e), o in zip(ranges, offs):
            if s - 1e-6 <= x <= e + 1e-6: return o + (x - s)
        return None
    print(f"cut {dur:.1f}s -> {total:.1f}s in {len(ranges)} segments")

    # caption chunks on the edited timeline
    def seg_of(x):
        for k, (a0, b0) in enumerate(ranges):
            if a0 - 1e-6 <= x <= b0 + 1e-6: return k
        return -1
    mw = [dict(s=mp(w["s"]), e=mp(w["e"]), raw=w["w"], ss=w["s"], se=w["e"], seg=seg_of(w["s"])) for w in words]
    mw = [w for w in mw if w["s"] is not None and w["e"] is not None]
    PROPER = {"i", "i'm", "i've", "i'll", "i'd", "disojo", "instagram", "india", "mumbai", "sebi"}
    for k, w in enumerate(mw):
        core = re.sub(r"[.,;:?!]+$", "", w["raw"])
        w["gap"] = w["ss"] - mw[k - 1]["se"] if k else 0
        if k == 0 or re.search(r"[.?!]$", mw[k - 1]["raw"]): w["disp"] = core[:1].upper() + core[1:]
        elif core.lower() in PROPER: w["disp"] = core[:1].upper() + core[1:]
        elif core.isupper() and len(core) > 1: w["disp"] = core
        else: w["disp"] = core[:1].lower() + core[1:]
    chunks = []
    for ch in chunk_words([dict(w, w=w["raw"]) for w in mw]):   # chunk on raw punctuation
        chunks.append(dict(t0=max(0, ch[0]["s"] - 0.05), t1=ch[-1]["e"] + 0.14,
                           words=[dict(w=x["disp"], s=x["s"], e=x["e"], ss=x["ss"]) for x in ch]))
    # hold each chunk until the next one starts (captions must not vanish in the breath between phrases)
    for i, c in enumerate(chunks):
        end = c["words"][-1]["e"]
        nxt = chunks[i + 1]["t0"] - 0.02 if i + 1 < len(chunks) else total
        c["t1"] = max(c["t0"] + .7, min(nxt, end + .45)) if i + 1 == len(chunks) or nxt - end <= .7 else end + .45
        c["t1"] = min(c["t1"], nxt, total)
    # emphasis entries: "word" (every occurrence) or "word@12.4" (only the one spoken near source time 12.4s)
    em_all = {norm(x) for x in plan.get("emphasis", []) if "@" not in x}
    em_at = [(norm(x.split("@")[0]), float(x.split("@")[1])) for x in plan.get("emphasis", []) if "@" in x]
    for c in chunks:
        for x in c["words"]:
            x["emph"] = norm(x["w"]) in em_all or any(norm(x["w"]) == k and abs(x["ss"] - t) < 0.7 for k, t in em_at)
    hook = None
    hk = a.hook or plan.get("hook")
    if hk:
        hook = dict(kicker=a.kicker or plan.get("kicker", ""), text=hk.replace("\\n", "\n"), t0=HOOK_AT, claimAt=HOOK_CLAIM, t1=min(HOOK_END, total))
    def mp_near(x):   # nearest kept time at or after source time x
        for (s0, e0), o in zip(ranges, offs):
            if x <= e0: return o + max(0.0, x - s0)
        return None
    cards = []
    for k in plan.get("cards", []):
        t0 = mp_near(k["at"])
        if t0 is None: continue
        if hook: t0 = max(t0, hook["t1"] + 0.05)
        t1 = min(t0 + k.get("dur", 2.6), total - 0.05)
        if t1 - t0 >= 1.2: cards.append(dict(k, t0=t0, t1=t1))
    callouts = []   # big fact pops; "at"/"dur" in SOURCE seconds (like cards); legacy "t0"/"t1" are edited-timeline seconds
    for k in plan.get("callouts", []):
        if "at" in k:
            t0 = mp_near(k["at"])
            if t0 is not None: callouts.append(dict(k, t0=t0, t1=min(t0 + k.get("dur", 2.0), total - 0.05)))
        elif "t0" in k: callouts.append(k)
    (out / "timeline.json").write_text(json.dumps(dict(fps=FPS, duration=total, captions=chunks, hook=hook, captionStyle=a.caption_style, callouts=callouts, cards=cards)))
    run(["node", HUB / "tools/render-timeline.mjs", out / "timeline.json", out / "tl"])

    # source geometry: non-9:16 sources are cover-cropped first
    pr = run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height:stream_side_data=rotation", "-of", "default=nw=1", a.input]).stdout
    kv = dict(l.split("=", 1) for l in pr.strip().splitlines() if "=" in l)
    sw, sh = int(kv["width"]), int(kv["height"])
    if abs(int(float(kv.get("rotation", 0)))) % 180 == 90: sw, sh = sh, sw   # ffmpeg autorotates; use displayed size
    base = "" if abs(sw / sh - W / H) < 0.01 else f"scale={W}:{H}:force_original_aspect_ratio=increase:flags=lanczos,crop={W}:{H},"

    # camera: slow push per cut + a quick zoom pulse on every emphasised word and every card
    pulses = sorted([x["s"] for c in chunks for x in c["words"] if x["emph"]] + [c["t0"] for c in cards])
    events = [("whoosh", c["t0"] - 0.06) for c in cards] + [("swipe", x["s"] - 0.03) for c in chunks for x in c["words"] if x["emph"]]
    if hook: events += [("pop", hook["t0"] + 0.22), ("swipe", hook["claimAt"] - 0.02)]
    events += [("pop", k["t0"]) for k in callouts]
    sfx_wav = out / "sfx.wav"
    has_sfx = (not a.no_sfx) and make_sfx(events, total, sfx_wav)
    fc, vs, as_ = [], [], []
    for i, (s, e) in enumerate(ranges):
        d = e - s
        z0, z1 = (1.10, 1.145) if (i % 2 == 1 and not a.no_zoom) else (1.0, 1.0 if a.no_zoom else 1.045)
        pz = "" if a.no_zoom else "".join(f"+gte(t,{tp - offs[i]:.3f})*0.03*exp(-9*(t-{tp - offs[i]:.3f}))" for tp in pulses if offs[i] <= tp < offs[i] + d)
        zexpr = f"({z0}+({z1 - z0})*t/{d:.3f}{pz})"
        fc.append(f"[0:v]trim={s:.3f}:{e:.3f},setpts=PTS-STARTPTS,fps={FPS},{base}"
                  f"scale=w='trunc({W}*{zexpr}/2)*2':h='trunc({H}*{zexpr}/2)*2':eval=frame:flags=lanczos,crop={W}:{H},setsar=1[v{i}]")
        fc.append(f"[0:a]atrim={s:.3f}:{e:.3f},asetpts=PTS-STARTPTS,afade=t=in:d=0.02,afade=t=out:st={max(0, d - .04):.3f}:d=0.04[a{i}]")
        vs.append(f"[v{i}]"); as_.append(f"[a{i}]")
    fc.append("".join(f"{v}{x}" for v, x in zip(vs, as_)) + f"concat=n={len(ranges)}:v=1:a=1[vc][ac]")
    fc.append(f"[vc][1:v]overlay=0:{CAP_Y}:format=auto[v1]")
    cmd = ["ffmpeg", "-v", "error", "-y", "-i", a.input, "-framerate", FPS, "-i", out / "tl/cap/%05d.png"]
    nxt = 2
    if hook or cards:
        cmd += ["-framerate", FPS, "-i", out / "tl/top/%05d.png"]
        fc.append(f"[v1][{nxt}:v]overlay=0:0:eof_action=pass[vout]"); nxt += 1
    else:
        fc.append("[v1]null[vout]")
    voice = "[ac]" + (VOICE_CLEAN + "," if not a.no_clean else "") + "aresample=48000,aformat=channel_layouts=stereo[vo0]"
    fc.append(voice)
    if has_sfx:
        cmd += ["-i", sfx_wav]
        fc.append(f"[vo0][{nxt}:a]amix=inputs=2:duration=first:normalize=0[vo]"); nxt += 1
    else:
        fc.append("[vo0]anull[vo]")
    if a.music:
        cmd += ["-stream_loop", "-1", "-i", a.music]
        fc.append(f"[vo]asplit=2[v1a][v2a]")
        fc.append(f"[{nxt}:a]aresample=48000,volume={a.music_db}dB,afade=t=in:d=0.6,atrim=0:{total:.3f},afade=t=out:st={max(0, total - 0.8):.3f}:d=0.8[mus]")
        fc.append("[mus][v2a]sidechaincompress=threshold=0.03:ratio=10:attack=15:release=400:makeup=1[duck]")
        fc.append("[v1a][duck]amix=inputs=2:duration=first:normalize=0[mix]")
        fc.append("[mix]loudnorm=I=-16:TP=-1.5:LRA=9[aout]")
    else:
        fc.append("[vo]loudnorm=I=-16:TP=-1.5:LRA=9[aout]")
    cmd += ["-filter_complex", ";".join(fc), "-map", "[vout]", "-map", "[aout]", "-t", f"{total:.3f}", "-c:v", "libx264", "-crf", "18", "-preset", "medium",
            "-pix_fmt", "yuv420p", "-r", FPS, "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out / "reel.mp4"]
    run(cmd)
    p = run(["ffprobe", "-v", "error", "-show_entries", "format=duration,size", "-of", "csv=p=0", out / "reel.mp4"]).stdout.strip()
    li, ll, lp = loudness(a.input); lo, lol, lop = loudness(out / "reel.mp4")
    print(f"reel.mp4 -> {p}")
    print(f"loudness  source: {li:.1f} LUFS, LRA {ll:.1f}, peak {lp:.1f} dBFS   |   output: {lo:.1f} LUFS, LRA {lol:.1f}, peak {lop:.1f} dBFS")

if __name__ == "__main__":
    main()
