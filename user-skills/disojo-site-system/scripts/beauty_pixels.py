#!/usr/bin/env python3
"""Measure how a still frame FEELS, from pixels only (works on any screenshot, ours or theirs).
python3 beauty_pixels.py <out.json> <group>=<glob> [<group>=<glob> ...]
Per frame (scaled to 1512 wide):
  quiet  share of 24px blocks that are flat (luminance std < 4): truly empty ground
  calm   share of blocks with std < 12: empty ground plus soft photo areas (sky, wall, blur)
  loud   share of blocks with std > 45: hard high-contrast detail (big black-on-white type, harsh edges)
  edges  share of pixels with gradient > 40: how busy the frame is
  colour Hasler-Susstrunk colourfulness (0 grey, ~30 moderate, 60+ loud)
  range  luminance p95 - p5 (tonal spread), mean = mean luminance
Prints group medians."""
import sys, glob, json, statistics as st
import numpy as np
from PIL import Image
def measure(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    if w != 1512: im = im.resize((1512, round(h * 1512 / w)))
    im = im.crop((0, 0, 1512, min(im.size[1], 864)))
    a = np.asarray(im).astype(np.float32)
    L = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    H, W = L.shape; B = 24
    bl = L[:H // B * B, :W // B * B].reshape(H // B, B, W // B, B).std(axis=(1, 3))
    gx = np.abs(np.diff(L, axis=1))[:-1]; gy = np.abs(np.diff(L, axis=0))[:, :-1]
    g = np.maximum(gx, gy)
    rg = a[..., 0] - a[..., 1]; yb = 0.5 * (a[..., 0] + a[..., 1]) - a[..., 2]
    col = float(np.sqrt(rg.std() ** 2 + yb.std() ** 2) + 0.3 * np.sqrt(rg.mean() ** 2 + yb.mean() ** 2))
    p5, p95 = np.percentile(L, [5, 95])
    return dict(quiet=float((bl < 4).mean()), calm=float((bl < 12).mean()), loud=float((bl > 45).mean()),
                edges=float((g > 40).mean()), colour=col, range=float(p95 - p5), mean=float(L.mean()))
out, *groups = sys.argv[1:]
res = {}
for gspec in groups:
    name, pat = gspec.split('=', 1)
    files = sorted(sum([glob.glob(p) for p in pat.split(',')], []))
    res.setdefault(name, {})
    for f in files:
        try: res[name][f] = measure(f)
        except Exception as e: print('skip', f, e)
json.dump(res, open(out, 'w'), indent=1)
keys = ['quiet', 'calm', 'loud', 'edges', 'colour', 'range', 'mean']
print(f"{'group':12} {'n':>4} " + ' '.join(f'{k:>7}' for k in keys))
for name, rows in res.items():
    if not rows: continue
    meds = [st.median([r[k] for r in rows.values()]) for k in keys]
    print(f"{name:12} {len(rows):>4} " + ' '.join(f'{m:7.3f}' if m < 2 else f'{m:7.1f}' for m in meds))
