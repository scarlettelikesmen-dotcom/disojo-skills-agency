#!/usr/bin/env python3
"""Verify a finished reel and make a contact sheet to LOOK at. Exit code 1 if a hard check fails.
  python verify_reel.py edits/name/reel.mp4 [--timeline edits/name/timeline.json] [--max 35]
Hard checks: 1080x1920, 30 fps, h264 high, yuv420p, BT.709 tv-range tags, <= max s, loudness -17..-14 LUFS, true peak <= -1 dBFS,
first frame is a real image (not black). Writes <reel dir>/_verify.png: 12 frames across the reel plus one frame 1.0 s into every
panel/card (phone-size tiles, so readability is judged at the size viewers see). Numbers never prove captions are readable: open the sheet."""
import argparse, json, subprocess, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from edit_reel import loudness

ap = argparse.ArgumentParser(); ap.add_argument("reel"); ap.add_argument("--timeline"); ap.add_argument("--max", type=float, default=35.0)
a = ap.parse_args(); reel = Path(a.reel); ok = True
pr = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
                     "stream=codec_name,profile,pix_fmt,width,height,r_frame_rate,color_range,color_space,color_transfer,color_primaries:format=duration", "-of", "json", str(reel)], capture_output=True, text=True)
j = json.loads(pr.stdout); st = j["streams"][0]; dur = float(j["format"]["duration"])
num, den = st["r_frame_rate"].split("/"); fps = float(num) / float(den)
I, lra, peak = loudness(reel)
def check(name, cond, val):
    global ok; ok &= bool(cond); print(f"  [{'ok' if cond else 'FAIL'}] {name}: {val}")
print(f"{reel}")
check("size", (st["width"], st["height"]) == (1080, 1920), f'{st["width"]}x{st["height"]}')
check("fps", abs(fps - 30) < 0.5, f"{fps:.1f}")
check("codec h264 high yuv420p", (st["codec_name"], st.get("profile"), st["pix_fmt"]) == ("h264", "High", "yuv420p"), f'{st["codec_name"]} {st.get("profile")} {st["pix_fmt"]}')
check("colour tags BT.709 tv (SDR)", (st.get("color_space"), st.get("color_transfer"), st.get("color_primaries"), st.get("color_range")) == ("bt709",) * 3 + ("tv",),
      f'{st.get("color_space")}/{st.get("color_transfer")}/{st.get("color_primaries")}/{st.get("color_range")}')
check(f"duration <= {a.max:.0f}s", dur <= a.max, f"{dur:.1f}s")
check("loudness -17..-14 LUFS", -17 <= I <= -14, f"{I:.1f} LUFS (LRA {lra:.1f})")
check("true peak <= -1 dBFS", peak <= -1.0, f"{peak:.1f} dBFS")
f0 = reel.parent / "_f0.png"
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(reel), "-frames:v", "1", "-vf", "scale=64:-1,format=gray", str(f0)])
from PIL import Image
import numpy as np
arr = np.asarray(Image.open(f0)); lum, sd = float(arr.mean()), float(arr.std()); f0.unlink()
check("frame 0 is a real image (not black/empty)", lum > 20 or sd > 12, f"mean {lum:.0f}, std {sd:.0f}")
times = [dur * (k + 0.5) / 12 for k in range(12)]
if a.timeline and Path(a.timeline).exists():
    tl = json.loads(Path(a.timeline).read_text())
    extra = [c["t0"] + 1.0 for c in tl.get("cards", [])] + [p["t0"] + 1.0 for p in tl.get("panels", []) if p["type"] != "hook"]
    times = sorted(set([round(t, 2) for t in times[:9]] + extra))[:16]
    print("  captions:")
    for c in tl["captions"]: print(f"    {c['t0']:5.1f}-{c['t1']:5.1f}  " + " ".join(f"[{w['w']}]" if w.get("emph") else w["w"] for w in c["words"]))
    if tl.get("panels"): print("  panels: " + ", ".join(f"{p['type']}@{p['t0']:.1f}-{p['t1']:.1f}" for p in tl["panels"]))
tiles = []
for k, t in enumerate(times):
    f = reel.parent / f"_v{k}.png"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{min(t, dur - 0.1):.2f}", "-i", str(reel), "-frames:v", "1", "-vf", "scale=300:-1", str(f)])
    tiles.append(Image.open(f)); f.unlink()
w, h = tiles[0].size; cols = 8; rows = (len(tiles) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (w + 10) + 10, rows * (h + 10) + 10), (50, 50, 50))
for i, im in enumerate(tiles): sheet.paste(im, (10 + (i % cols) * (w + 10), 10 + (i // cols) * (h + 10)))
out = reel.parent / "_verify.png"; sheet.save(out); print(f"  contact sheet -> {out}")
sys.exit(0 if ok else 1)
