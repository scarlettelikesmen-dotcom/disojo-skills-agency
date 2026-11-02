"""Print how 'flat' an image crop is: share of 4x4 pixel blocks whose luminance barely varies.
Photographs (grain, light falloff, texture) score low, UI screenshots and flat graphics score high.
python3 flatness.py <image>   ->  0.000 .. 1.000
"""
import sys
from PIL import Image

im = Image.open(sys.argv[1]).convert('L')
w, h = im.size
if w > 640:
    im = im.resize((640, max(1, int(h * 640 / w))))
    w, h = im.size
px = im.load()
flat = total = 0
for by in range(0, h - 3, 4):
    for bx in range(0, w - 3, 4):
        vals = [px[bx + i, by + j] for i in range(4) for j in range(4)]
        total += 1
        if max(vals) - min(vals) <= 3:
            flat += 1
print(f"{flat / total:.3f}" if total else "1.000")
