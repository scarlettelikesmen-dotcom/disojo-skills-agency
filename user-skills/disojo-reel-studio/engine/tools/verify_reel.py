#!/usr/bin/env python3
"""Verify a finished reel and make a contact sheet to LOOK at. Exit code 1 if a hard check fails.
  python verify_reel.py edits/name/reel.mp4 [--timeline edits/name/timeline.json] [--max 35]
Checks: 1080x1920, 30 fps, duration <= max, loudness -17..-14 LUFS, true peak <= -1 dBFS. Writes <reel dir>/_verify.png
(12 frames spread over the reel, plus card starts). Always open the sheet: numbers do not tell you the captions are readable."""
import argparse, json, subprocess, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from edit_reel import loudness

ap = argparse.ArgumentParser(); ap.add_argument("reel"); ap.add_argument("--timeline"); ap.add_argument("--max", type=float, default=35.0)
a = ap.parse_args(); reel = Path(a.reel); ok = True
pr = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,r_frame_rate:format=duration", "-of", "json", str(reel)], capture_output=True, text=True)
j = json.loads(pr.stdout); st = j["streams"][0]; dur = float(j["format"]["duration"])
num, den = st["r_frame_rate"].split("/"); fps = float(num) / float(den)
I, lra, peak = loudness(reel)
def check(name, cond, val):
    global ok; ok &= bool(cond); print(f"  [{'ok' if cond else 'FAIL'}] {name}: {val}")
print(f"{reel}")
check("size", (st["width"], st["height"]) == (1080, 1920), f'{st["width"]}x{st["height"]}')
check("fps", abs(fps - 30) < 0.5, f"{fps:.1f}")
check(f"duration <= {a.max:.0f}s", dur <= a.max, f"{dur:.1f}s")
check("loudness -17..-14 LUFS", -17 <= I <= -14, f"{I:.1f} LUFS (LRA {lra:.1f})")
check("true peak <= -1 dBFS", peak <= -1.0, f"{peak:.1f} dBFS")
times = [dur * (k + 0.5) / 12 for k in range(12)]
if a.timeline and Path(a.timeline).exists():
    tl = json.loads(Path(a.timeline).read_text())
    times = sorted(set(times[:8] + [c["t0"] + 1.0 for c in tl.get("cards", [])]))[:14]
    print("  captions:")
    for c in tl["captions"]: print(f"    {c['t0']:5.1f}-{c['t1']:5.1f}  " + " ".join(f"[{w['w']}]" if w.get("emph") else w["w"] for w in c["words"]))
from PIL import Image
tiles = []
for k, t in enumerate(times):
    f = reel.parent / f"_v{k}.png"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{min(t, dur - 0.1):.2f}", "-i", str(reel), "-frames:v", "1", "-vf", "scale=300:-1", str(f)])
    tiles.append(Image.open(f)); f.unlink()
w, h = tiles[0].size; cols = 7; rows = (len(tiles) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (w + 10) + 10, rows * (h + 10) + 10), (50, 50, 50))
for i, im in enumerate(tiles): sheet.paste(im, (10 + (i % cols) * (w + 10), 10 + (i // cols) * (h + 10)))
out = reel.parent / "_verify.png"; sheet.save(out); print(f"  contact sheet -> {out}")
sys.exit(0 if ok else 1)
