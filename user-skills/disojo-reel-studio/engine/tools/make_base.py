#!/usr/bin/env python3
"""Cut + HDR->SDR + voice clean + loudnorm, NO overlays: the base video for Remotion comps.
  .venv/bin/python tools/make_base.py INPUT.mov --out edits/name --plan scripts/plan-x.json
Reads edits/name/transcript.json (run edit_reel.py --transcript-only first). Writes base.mp4 and base.json (cut ranges + words on the edited timeline)."""
import argparse, json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import edit_reel as E

GRADE = ("eq=gamma=1.12:contrast=1.07:saturation=0.92,colorbalance=rs=-.05:rm=-.07:rh=-.03:bs=.03:bm=.05:bh=.02,"
         "curves=all='0/0.02 0.5/0.52 1/0.99',unsharp=5:5:0.5:5:5:0")   # lifts shadows, calms the orange cast, slight clarity
ap = argparse.ArgumentParser(); ap.add_argument("input"); ap.add_argument("--out", required=True); ap.add_argument("--plan")
a = ap.parse_args(); out = Path(a.out)
c = json.loads((out / "transcript.json").read_text()); words, dur = c["words"], c["dur"]
plan = json.loads(Path(a.plan).read_text()) if a.plan else {}
words, _ = E.clean_words(words, False, plan.get("keep"), plan.get("fix"))
ranges = plan.get("ranges") or E.keep_ranges(words, dur)   # plan.ranges = explicit source-time cuts (e.g. from an energy-based pause pass)
W, H, FPS = E.W, E.H, E.FPS
pr = E.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height:stream_side_data=rotation", "-of", "default=nw=1", a.input]).stdout
kv = dict(l.split("=", 1) for l in pr.strip().splitlines() if "=" in l)
sw, sh = int(kv["width"]), int(kv["height"])
if abs(int(float(kv.get("rotation", 0)))) % 180 == 90: sw, sh = sh, sw
base = "" if abs(sw / sh - W / H) < 0.01 else f"scale={W}:{H}:force_original_aspect_ratio=increase:flags=lanczos,crop={W}:{H},"
tr = E.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=color_transfer", "-of", "csv=p=0", a.input]).stdout.strip().split(",")[0]
sdr = E.sdr_chain(tr)
fc, vs, as_ = [], [], []
for i, (s, e) in enumerate(ranges):
    d = e - s
    fc.append(f"[0:v]trim={s:.3f}:{e:.3f},setpts=PTS-STARTPTS,fps={FPS},{base}scale={W}:{H}:flags=lanczos,{sdr},{GRADE},setsar=1[v{i}]")
    fc.append(f"[0:a]atrim={s:.3f}:{e:.3f},asetpts=PTS-STARTPTS,afade=t=in:d=0.02,afade=t=out:st={max(0, d - .04):.3f}:d=0.04[a{i}]")
    vs.append(f"[v{i}]"); as_.append(f"[a{i}]")
fc.append("".join(f"{v}{x}" for v, x in zip(vs, as_)) + f"concat=n={len(ranges)}:v=1:a=1[vc][ac]")
fc.append("[vc]setparams=colorspace=bt709:color_primaries=bt709:color_trc=bt709:range=tv[vout]")
fc.append("[ac]" + E.VOICE_CLEAN + ",aresample=48000,aformat=channel_layouts=stereo,loudnorm=I=-16:TP=-1.5:LRA=9[aout]")
total = sum(e - s for s, e in ranges)
E.run(["ffmpeg", "-v", "error", "-y", "-i", a.input, "-filter_complex", ";".join(fc), "-map", "[vout]", "-map", "[aout]", "-t", f"{total:.3f}",
       "-c:v", "libx264", "-profile:v", "high", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv",
       "-r", FPS, "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", out / "base.mp4"])
offs, t = [], 0.0
for s, e in ranges: offs.append(t); t += e - s
(out / "base.json").write_text(json.dumps(dict(duration=total, fps=FPS, ranges=ranges, offsets=offs)))
print(f"base.mp4 {total:.2f}s, {len(ranges)} segments, transfer={tr}")
