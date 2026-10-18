#!/usr/bin/env python3
"""reel.py: one command per reel stage, every reel in its own job folder (no more overwriting a single base.mp4).

  .venv/bin/python reel.py prep CLIP --job NAME --brand disojo|trading|code [--keep 0-10,24-31] [--stab] [--energy]
        transcribe (cached), cut pauses, graded SDR base, all-intra copy for Remotion, word map, beat sheet printout
  .venv/bin/python reel.py spec NAME --plan plan.json
        plan.json (written by Claude/you) -> public/jobs/NAME/spec.json (captions, panels, punches, cutaways, hook, SFX events)
  .venv/bin/python reel.py render NAME [--comp Reel8|TradeLite|Trade]
        SFX -> Remotion render (one frame at a time, safe) -> QA gate -> small delivery copy (<30 MB)
  .venv/bin/python reel.py qa FILE [--job NAME]      QA gate only
  .venv/bin/python reel.py make CLIP --job NAME --brand B --plan plan.json     prep + spec + render in one go (plan written beforehand)

Brands: disojo (locked v9 style, comp Reel8), trading (comp TradeLite by default, Rulebook panels via --comp Trade), code (Coded by Abel: comp not built yet, falls back to Reel8).
Job layout: jobs/NAME/ (transcript.json, base.json, words_edit.json, beats.txt, plan.json) and remotion-lab/public/jobs/NAME/ (base.mp4 all-intra, spec.json, sfx.wav).
"""
import argparse, json, re, subprocess, sys, wave
from pathlib import Path
import numpy as np

HUB = Path(__file__).resolve().parent
LAB = HUB / "remotion-lab"
ENGINE = Path.home() / ".claude/skills/disojo-reel-studio/engine/tools"
sys.path.insert(0, str(ENGINE))
import edit_reel as E

BRANDS = {
    "disojo":  dict(comp="Reel8",     mode="words",  min_pause=0.28, leave=0.0,  captions="sentence", safe_caption_y=None, label="Disojo (locked v9)"),
    "trading": dict(comp="TradeLite", mode="energy", min_pause=0.60, leave=0.30, captions="upper",    safe_caption_y=1330, label="Trading (lite default)"),
    "code":    dict(comp="Reel8",     mode="words",  min_pause=0.28, leave=0.0,  captions="sentence", safe_caption_y=None, label="Coded by Abel (comp not built yet)"),
}
PROPER = {"i", "i'm", "i've", "i'll", "i'd", "disojo", "instagram", "bombay", "kdc", "ict", "nq", "es", "cisd", "smt", "fvg", "ascender", "postcards"}
SAFE_BOTTOM = 1420        # Instagram/TikTok draw their own UI below this line (see disojo-reel-export)

def run(cmd, **kw):
    r = subprocess.run([str(c) for c in cmd], capture_output=True, text=True, **kw)
    if r.returncode: sys.exit(f"FAILED: {' '.join(map(str, cmd))[:200]}\n{r.stderr[-1500:]}")
    return r

def jobdir(n): d = HUB / "jobs" / n; d.mkdir(parents=True, exist_ok=True); return d
def pubdir(n): d = LAB / "public/jobs" / n; d.mkdir(parents=True, exist_ok=True); return d

# ---------------------------------------------------------------- prep
def energy_ranges(clip, keep, min_pause, leave, thr=-33.5):
    wav = Path("/tmp/_reel_src.wav")
    run(["ffmpeg", "-v", "error", "-y", "-i", clip, "-vn", "-ac", "1", "-ar", "16000", wav])
    w = wave.open(str(wav)); x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(float) / 32768
    h = 800; n = len(x) // h
    db = np.array([20 * np.log10(np.sqrt(np.mean(x[i*h:(i+1)*h] ** 2)) + 1e-9) for i in range(n)])
    out = []
    for a, b in keep:
        i0, i1 = int(a / .05), min(int(b / .05), n); q = db[i0:i1] < thr; segs = []; s = None
        for k, v in enumerate(q):
            if v and s is None: s = k
            if (not v or k == len(q) - 1) and s is not None:
                e = k if not v else k + 1
                if (e - s) * .05 >= min_pause: segs.append((a + s * .05, a + e * .05))
                s = None
        cur = a
        for s, e in segs: out.append([round(cur, 2), round(s + leave / 2, 2)]); cur = e - leave / 2
        out.append([round(cur, 2), b])
    return [r for r in out if r[1] - r[0] > .3]

def cmd_prep(a):
    br = BRANDS[a.brand]; jd = jobdir(a.job); pd = pubdir(a.job)
    clip = str(Path(a.clip).expanduser())
    tj = jd / "transcript.json"
    if tj.exists() and not a.retranscribe: c = json.loads(tj.read_text())
    else:
        words, lang, dur = E.transcribe(clip, a.model); c = dict(words=words, lang=lang, dur=dur); tj.write_text(json.dumps(c, indent=1))
    keep = [[float(p.split("-")[0]), float(p.split("-")[1])] for p in a.keep.split(",")] if a.keep else [[0.0, c["dur"]]]
    plan = dict(keep=keep)
    if a.energy or br["mode"] == "energy": plan["ranges"] = energy_ranges(clip, keep, br["min_pause"], br["leave"])
    (jd / "prep-plan.json").write_text(json.dumps(plan))
    run([sys.executable, ENGINE / "make_base.py", clip, "--out", jd, "--plan", jd / "prep-plan.json"])
    b = json.loads((jd / "base.json").read_text()); R, O = b["ranges"], b["offsets"]
    words, _ = E.clean_words(c["words"], False, [[k0 - 0.3, k1 + 0.3] for k0, k1 in keep], None)
    res = []
    for wd in words:
        best = None
        for (s, e), o in zip(R, O):
            ov = min(e, wd["e"]) - max(s, wd["s"])
            if ov >= .07 and (best is None or ov > best[0]): best = (ov, s, e, o)
        if not best:       # a word the cut just clipped: snap it to the start of the next kept range if it is within 0.4 s
            nxt = [(s, o) for (s, e), o in zip(R, O) if 0 <= s - wd["e"] <= .4]
            if nxt: res.append(dict(w=wd["w"].strip(), s=round(nxt[0][1], 2), e=round(nxt[0][1] + .15, 2), snapped=True))
            continue
        ov, s, e, o = best; res.append(dict(w=wd["w"].strip(), s=round(o + max(0, wd["s"] - s), 2), e=round(o + min(e, wd["e"]) - s, 2)))
    (jd / "words_edit.json").write_text(json.dumps(res))
    # all-intra copy for Remotion (long-GOP seeking produced corrupt frames); local only, not backed up
    run(["ffmpeg", "-v", "error", "-y", "-i", jd / "base.mp4", "-c:v", "libx264", "-crf", "14", "-g", "1", "-bf", "0", "-pix_fmt", "yuv420p",
         "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-c:a", "copy", pd / "base.mp4"])
    if a.stab: stab(jd, pd, b)
    lines, cur = [], []
    for i, w in enumerate(res):
        cur.append(f"{i}:{w['w']}@{w['s']}")
        if len(cur) == 8 or i == len(res) - 1: lines.append("  ".join(cur)); cur = []
    (jd / "beats.txt").write_text("\n".join(lines))
    print(f"base {b['duration']:.1f}s, {len(R)} segments, {len(res)} words\nBEAT SHEET (word:time, edited timeline):\n" + "\n".join(lines))
    print(f"\nnext: write jobs/{a.job}/plan.json, then: reel.py spec {a.job} --plan jobs/{a.job}/plan.json")

def stab(jd, pd, b, K=8):
    """Virtual tripod: phase-correlation shift per frame inside each segment, subtract a +-K frame moving average, translate the video layer."""
    W, H = 216, 384; win = np.outer(np.hanning(H), np.hanning(W))
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", jd / "base.mp4", "-vf", f"scale={W}:{H},format=gray", "-f", "rawvideo", "-"], capture_output=True).stdout
    f = np.frombuffer(raw, np.uint8).reshape(-1, H, W).astype(float); n = len(f)
    def shift(x, y):
        A = np.fft.fft2((x - x.mean()) * win); B = np.fft.fft2((y - y.mean()) * win); R = A * np.conj(B); R /= np.abs(R) + 1e-9; r = np.fft.ifft2(R).real
        yy, xx = np.unravel_index(np.argmax(r), r.shape); return (xx - W if xx > W // 2 else xx), (yy - H if yy > H // 2 else yy)
    d = np.array([shift(f[i + 1], f[i]) for i in range(n - 1)], float)
    cuts = [int(round(o * 30)) for o in b["offsets"]] + [n]; out = np.zeros((n, 2))
    sm = lambda v, k: np.convolve(np.pad(v, (k, k), mode="edge"), np.ones(2 * k + 1) / (2 * k + 1), mode="valid")
    for s0, s1 in zip(cuts[:-1], cuts[1:]):
        seg = np.zeros((s1 - s0, 2))
        for i in range(s0 + 1, s1): seg[i - s0] = seg[i - s0 - 1] + d[i - 1]
        for c in range(2): out[s0:s1, c] = -(seg[:, c] - sm(seg[:, c], K)) * 5
    (jd / "stab.json").write_text(json.dumps([[round(x, 1), round(y, 1)] for x, y in np.clip(out, -50, 50)]))
    print("stabilisation data written (apply with plan.stab = true)")

# ---------------------------------------------------------------- spec
def display(raw, first, upper):
    core = re.sub(r"[.,;:?!]+$", "", raw)
    if upper: return core.upper()
    if first or core.lower() in PROPER: return core[:1].upper() + core[1:]
    return core[:1].lower() + core[1:]

def cmd_spec(a):
    jd = jobdir(a.name); pd = pubdir(a.name); plan = json.loads(Path(a.plan).read_text())
    brand = plan.get("brand") or "disojo"; br = BRANDS[brand]
    b = json.loads((jd / "base.json").read_text()); words = json.loads((jd / "words_edit.json").read_text()); dur = b["duration"]
    em = {re.sub(r"[^a-z0-9'-]", "", x.lower()) for x in plan.get("emphasis", [])}
    brk = set(plan.get("breaks", []))
    merged = []
    for w in words:                                  # "self" + "-beliefs" -> "self-beliefs"
        if merged and w["w"].startswith("-"): merged[-1] = dict(merged[-1], w=merged[-1]["w"] + w["w"], e=w["e"])
        else: merged.append(dict(w))
    words = merged
    groups, cur = [], []
    for i, w in enumerate(words):
        if cur and (len(cur) >= 4 or round(w["s"], 2) in brk or w["s"] - cur[-1]["e"] > .5 or re.search(r"[.?!]$", cur[-1]["raw"])): groups.append(cur); cur = []
        cur.append(dict(raw=w["w"], s=w["s"], e=w["e"], i=i))
    if cur: groups.append(cur)
    caps = []
    for gi, g in enumerate(groups):
        t0 = g[0]["s"]; nxt = groups[gi + 1][0]["s"] if gi + 1 < len(groups) else dur
        first = gi == 0 or bool(re.search(r"[.?!]$", groups[gi - 1][-1]["raw"]))
        ws = [dict(w=display(x["raw"], first and k == 0, br["captions"] == "upper"), s=x["s"], emph=re.sub(r"[^a-z0-9'-]", "", x["raw"].lower()) in em) for k, x in enumerate(g)]
        caps.append(dict(t0=max(0, t0 - .05), t1=min(nxt, t0 + 3.0), words=ws))
    spec = dict(duration=dur, brand=brand, captions=caps)
    for k in ("panels", "punches", "pushes", "cutaways", "lowerThird", "hook"):
        if k in plan: spec[k] = plan[k]
    spec.setdefault("punches", []); spec.setdefault("pushes", []); spec.setdefault("cutaways", []); spec.setdefault("panels", [])
    spec.setdefault("lowerThird", dict(t0=0, t1=0, name="", role=""))
    spec["cuts"] = b["offsets"]
    if plan.get("stab") and (jd / "stab.json").exists():
        spec["stab"] = json.loads((jd / "stab.json").read_text()); spec["stabScale"] = plan.get("stabScale", 1.10)
    (pd / "spec.json").write_text(json.dumps(spec)); (jd / "plan.json").write_text(json.dumps(plan, indent=1))
    ev = [("tick", p[0] - .03) for p in spec["punches"]] + [("pop", c["t0"]) for c in spec["cutaways"]]
    ev += [("whoosh", p["t0"]) for p in spec["panels"] if p["t0"] > 0] + [("whoosh", p["t1"]) for p in spec["panels"] if p["t1"] < dur]
    ev += [("impact", p["stamp"][1]) for p in spec["panels"] if p.get("stamp")]
    (jd / "sfx-events.json").write_text(json.dumps(ev if plan.get("sfx", brand != "trading" or plan.get("comp") == "Trade") else []))
    print(f"spec written: {len(caps)} caption groups, {len(spec['panels'])} panels, {len(spec['cutaways'])} cutaways, {len(spec['punches'])} punches, {dur:.1f}s")

# ---------------------------------------------------------------- render + qa
def cmd_render(a):
    jd = jobdir(a.name); pd = pubdir(a.name); spec = json.loads((pd / "spec.json").read_text())
    comp = a.comp or BRANDS[spec["brand"]]["comp"]
    ev = json.loads((jd / "sfx-events.json").read_text()) if (jd / "sfx-events.json").exists() else []
    sfx = pd / "sfx.wav"
    if ev: E.make_sfx(ev, spec["duration"], sfx)
    elif sfx.exists(): sfx.unlink()
    if comp != "TradeLite" and not sfx.exists():   # comps that mount <Audio> need a file: silent placeholder
        run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", f"{spec['duration']:.2f}", sfx])
    n = 1
    while (HUB / "edits" / f"{a.name}-{comp}-v{n}.mp4").exists(): n += 1
    out = HUB / "edits" / f"{a.name}-{comp}-v{n}.mp4"
    print(f"rendering {comp} -> {out.name} (about 3-4 min per 35 s)")
    r = subprocess.run(["npx", "remotion", "render", "src/index.ts", comp, str(out), f"--props={json.dumps({'job': a.name})}", "--concurrency=1"], cwd=LAB, capture_output=True, text=True)
    if r.returncode: sys.exit("render failed:\n" + r.stderr[-1500:])
    ok = cmd_qa(argparse.Namespace(file=str(out), job=a.name, quiet=False))
    small = out.with_name(out.stem + "-small.mp4")
    run(["ffmpeg", "-v", "error", "-y", "-i", out, "-c:v", "libx264", "-b:v", "5M", "-maxrate", "6M", "-bufsize", "8M", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", small])
    print(f"delivery copy: {small} ({small.stat().st_size / 1048576:.1f} MB)  QA {'PASS' if ok else 'FAIL: read the lines above'}")

def frames_gray(path, W=108, H=192):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(path), "-vf", f"scale={W}:{H},format=gray", "-f", "rawvideo", "-"], capture_output=True).stdout
    return np.frombuffer(raw, np.uint8).reshape(-1, H, W).astype(float)

def cmd_qa(a):
    path = Path(a.file); ok = True
    def chk(name, cond, val, hard=True):
        nonlocal ok
        if hard: ok &= bool(cond)
        print(f"  [{'ok' if cond else ('FAIL' if hard else 'WARN')}] {name}: {val}")
    pr = json.loads(run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=codec_name,profile,pix_fmt,width,height,r_frame_rate,color_space,color_transfer,color_primaries,color_range:format=duration", "-of", "json", path]).stdout)
    st = pr["streams"][0]; dur = float(pr["format"]["duration"]); num, den = st["r_frame_rate"].split("/")
    print(path.name)
    chk("size 1080x1920", (st["width"], st["height"]) == (1080, 1920), f"{st['width']}x{st['height']}")
    chk("30 fps h264 yuv420p", abs(float(num) / float(den) - 30) < .5 and st["codec_name"] == "h264" and st["pix_fmt"] == "yuv420p", f"{st['codec_name']} {st['pix_fmt']}")
    chk("colour tags bt709 tv", (st.get("color_space"), st.get("color_transfer"), st.get("color_primaries")) == ("bt709",) * 3, f"{st.get('color_space')}/{st.get('color_transfer')}/{st.get('color_primaries')}")
    chk("duration 15-60 s", 15 <= dur <= 60, f"{dur:.1f}s", hard=False)
    I, lra, peak = E.loudness(path)
    chk("loudness -17..-14 LUFS", -17 <= I <= -14, f"{I:.1f} LUFS (LRA {lra:.1f})"); chk("true peak <= -1 dBFS", peak <= -1.0, f"{peak:.1f} dBFS")
    m = subprocess.run(["ffmpeg", "-nostats", "-i", str(path), "-vn", "-ac", "1", "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
    mi = re.search(r"I:\s+(-?[\d.]+) LUFS", m[m.rfind("Summary:"):]); chk("mono fold-down within 3 dB of stereo", mi and abs(float(mi.group(1)) - I) < 3, f"mono {mi.group(1) if mi else '?'} LUFS", hard=False)
    f = frames_gray(path); n = len(f); bad = []
    for i in range(1, n - 2):                       # corrupt-frame signature: a single garbled frame, or a garbled pair, that snaps back
        d1 = np.abs(f[i] - f[i-1]).mean(); d2 = np.abs(f[i+1] - f[i]).mean(); d3 = np.abs(f[i+1] - f[i-1]).mean(); d4 = np.abs(f[i+2] - f[i-1]).mean(); d5 = np.abs(f[i+2] - f[i+1]).mean()
        if (d1 > 10 and d2 > 10 and d3 < .4 * min(d1, d2)) or (d1 > 10 and d5 > 10 and d4 < .4 * d1): bad.append(i)
    chk("no corrupt frames (single/paired garbled frames)", not bad, "none" if not bad else f"suspect frames {bad[:10]}")
    if a.job and (HUB / "remotion-lab/public/jobs" / a.job / "spec.json").exists():
        spec = json.loads((HUB / "remotion-lab/public/jobs" / a.job / "spec.json").read_text()); br = BRANDS.get(spec.get("brand", ""), {})
        y = br.get("safe_caption_y"); has_panels = bool(spec.get("panels"))
        low = (y or (1710 if has_panels else 1380)) + 60
        chk(f"captions inside the safe zone (<= {SAFE_BOTTOM})", low <= SAFE_BOTTOM, f"caption bottom about y {low}" + (" (panel layout puts them over the shirt, below the app UI line)" if low > SAFE_BOTTOM else ""), hard=False)
        for p in spec.get("panels", []):
            if p.get("img") and p.get("ih") and 440 + p["ih"] > 880: chk("panel image ends above the seam (y 880)", False, f"image bottom {440 + p['ih']}")
    sheet = path.with_name(path.stem + "-qa.png"); from PIL import Image
    ts = [dur * (k + .5) / 12 for k in range(12)]; tiles = []
    for t in ts:
        run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", path, "-frames:v", "1", "-vf", "scale=240:-1", "/tmp/_qa.png"]); tiles.append(Image.open("/tmp/_qa.png").copy())
    w, h = tiles[0].size; sh = Image.new("RGB", (6 * (w + 6) + 6, 2 * (h + 6) + 6), (40, 40, 40))
    for i, im in enumerate(tiles): sh.paste(im, (6 + (i % 6) * (w + 6), 6 + (i // 6) * (h + 6)))
    sh.save(sheet); print(f"  contact sheet (LOOK at it): {sheet}")
    return ok

def cmd_make(a):
    cmd_prep(argparse.Namespace(clip=a.clip, job=a.job, brand=a.brand, keep=a.keep, stab=a.stab, energy=a.energy, retranscribe=False, model="small"))
    cmd_spec(argparse.Namespace(name=a.job, plan=a.plan)); cmd_render(argparse.Namespace(name=a.job, comp=a.comp))

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter); sp = ap.add_subparsers(dest="cmd", required=True)
    p = sp.add_parser("prep"); p.add_argument("clip"); p.add_argument("--job", required=True); p.add_argument("--brand", choices=BRANDS, required=True)
    p.add_argument("--keep"); p.add_argument("--stab", action="store_true"); p.add_argument("--energy", action="store_true"); p.add_argument("--retranscribe", action="store_true"); p.add_argument("--model", default="small")
    p = sp.add_parser("spec"); p.add_argument("name"); p.add_argument("--plan", required=True)
    p = sp.add_parser("render"); p.add_argument("name"); p.add_argument("--comp")
    p = sp.add_parser("qa"); p.add_argument("file"); p.add_argument("--job")
    p = sp.add_parser("make"); p.add_argument("clip"); p.add_argument("--job", required=True); p.add_argument("--brand", choices=BRANDS, required=True); p.add_argument("--plan", required=True)
    p.add_argument("--keep"); p.add_argument("--stab", action="store_true"); p.add_argument("--energy", action="store_true"); p.add_argument("--comp")
    a = ap.parse_args()
    {"prep": cmd_prep, "spec": cmd_spec, "render": cmd_render, "qa": lambda x: sys.exit(0 if cmd_qa(x) else 1), "make": cmd_make}[a.cmd](a)

if __name__ == "__main__":
    main()
