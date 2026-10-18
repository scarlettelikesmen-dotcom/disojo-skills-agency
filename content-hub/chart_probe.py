#!/usr/bin/env python3
"""chart_probe.py CHART.mp4 [--t 3.0] [--crop x0,y0,x1,y1]: save a frame with a 0.1 grid of NORMALISED coordinates so overlay positions
(for ChartLayer: box/line/arrow/tag/tick) can be read off a real chart recording. Output: <chart>-probe.png next to the video."""
import argparse, subprocess
from pathlib import Path
from PIL import Image, ImageDraw
ap = argparse.ArgumentParser(); ap.add_argument("video"); ap.add_argument("--t", type=float, default=3.0); a = ap.parse_args()
v = Path(a.video).expanduser(); tmp = Path("/tmp/_probe.png")
subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(a.t), "-i", str(v), "-frames:v", "1", str(tmp)], check=True)
im = Image.open(tmp).convert("RGB"); W, H = im.size; d = ImageDraw.Draw(im)
for i in range(1, 10):
    x, y = int(W * i / 10), int(H * i / 10)
    d.line([(x, 0), (x, H)], fill=(232, 50, 28), width=1); d.line([(0, y), (W, y)], fill=(232, 50, 28), width=1)
    d.text((x + 4, 4), f"{i/10:.1f}", fill=(232, 50, 28)); d.text((4, y + 4), f"{i/10:.1f}", fill=(232, 50, 28))
out = v.with_name(v.stem + "-probe.png"); im.save(out); print(f"{out}  (frame {W}x{H}, aspect {W/H:.3f}: pass --aspect via spec 'aspect')")
