"""Trace a picked AI/sketch image into a clean one-colour SVG (potrace), ready to redraw or ship.

Usage:
  python3 trace_mark.py IN.png OUT.svg [--crop x,y,w,h] [--thresh 128] [--scale 4]
                         [--invert] [--minarea 40] [--turd 20] [--alpha 1.0] [--opt 0.4] [--fill #111111]

- crop is in source pixels; scale upsamples (LANCZOS) before thresholding so curves come out smooth
- --invert for light marks on dark backgrounds
- --minarea drops specks smaller than N source pixels (needs numpy+scipy: run with ~/claudeskillsthrureels/.venv/bin/python)
- output: absolute-coordinate path, viewBox tight to the ink, plus a sidecar OUT.json with the ink bbox
An auto-trace is a starting point: straighten stems, even the radii and fix spacing before anything is final,
and tell the client the mark started from an AI image.
"""
import argparse, json, os, re, subprocess, tempfile
from PIL import Image, ImageOps

ap = argparse.ArgumentParser()
ap.add_argument('src'); ap.add_argument('out')
ap.add_argument('--crop'); ap.add_argument('--thresh', type=int, default=128)
ap.add_argument('--scale', type=int, default=4); ap.add_argument('--invert', action='store_true')
ap.add_argument('--minarea', type=int, default=0); ap.add_argument('--turd', type=int, default=20)
ap.add_argument('--alpha', type=float, default=1.0); ap.add_argument('--opt', type=float, default=0.4)
ap.add_argument('--fill', default='#111111')
a = ap.parse_args()

im = Image.open(a.src)
if im.mode in ('RGBA', 'LA'):  # transparent PNG: composite on white so empty = paper
    bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im.convert('RGBA')); im = bg
im = im.convert('L')
if a.crop:
    x, y, w, h = map(int, a.crop.split(',')); im = im.crop((x, y, x + w, y + h))
if a.invert: im = ImageOps.invert(im)
im = im.resize((im.width * a.scale, im.height * a.scale), Image.LANCZOS)
bw = im.point(lambda v: 0 if v < a.thresh else 255, '1')  # ink = black

if a.minarea:
    import numpy as np
    from scipy import ndimage
    arr = np.array(bw) == 0
    lab, n = ndimage.label(arr)
    sizes = ndimage.sum(arr, lab, range(1, n + 1))
    keep = np.isin(lab, [i + 1 for i, s in enumerate(sizes) if s >= a.minarea * a.scale * a.scale])
    bw = Image.fromarray(np.where(keep, 0, 255).astype('uint8')).convert('1')

tmp = tempfile.mkdtemp()
pbm, raw = os.path.join(tmp, 'in.pbm'), os.path.join(tmp, 'raw.svg')
bw.save(pbm)
subprocess.run(['potrace', pbm, '--svg', '-o', raw, '-t', str(a.turd), '-a', str(a.alpha), '-O', str(a.opt), '--flat'], check=True)

t = open(raw).read()
H = float(re.search(r'viewBox="0 0 [\d.]+ ([\d.]+)"', t).group(1))
d = ' '.join(re.findall(r'<path d="([^"]+)"', t, re.S))
toks = re.findall(r'[MmCcLlZz]|-?\d+(?:\.\d+)?', d)

# potrace writes relative coords in a 10x, y-flipped space; convert to absolute, y-down
pts_all, segs = [], []
cx = cy = sx = sy = 0.0; i = 0; cmd = None
P = lambda x, y: (x * 0.1, H - y * 0.1)
while i < len(toks):
    if toks[i] in 'MmCcLlZz': cmd = toks[i]; i += 1
    if cmd in 'zZ':
        segs.append(('Z',)); cx, cy = sx, sy; cmd = None; continue
    if cmd == 'M':
        cx, cy = float(toks[i]), float(toks[i + 1]); i += 2; sx, sy = cx, cy; segs.append(('M', P(cx, cy))); cmd = 'L'
    elif cmd == 'm':
        cx += float(toks[i]); cy += float(toks[i + 1]); i += 2; sx, sy = cx, cy; segs.append(('M', P(cx, cy))); cmd = 'l'
    elif cmd == 'L':
        cx, cy = float(toks[i]), float(toks[i + 1]); i += 2; segs.append(('L', P(cx, cy)))
    elif cmd == 'l':
        cx += float(toks[i]); cy += float(toks[i + 1]); i += 2; segs.append(('L', P(cx, cy)))
    elif cmd == 'C':
        v = [float(x) for x in toks[i:i + 6]]; i += 6
        segs.append(('C', P(v[0], v[1]), P(v[2], v[3]), P(v[4], v[5]))); cx, cy = v[4], v[5]
    elif cmd == 'c':
        v = [float(x) for x in toks[i:i + 6]]; i += 6
        segs.append(('C', P(cx + v[0], cy + v[1]), P(cx + v[2], cy + v[3]), P(cx + v[4], cy + v[5]))); cx += v[4]; cy += v[5]
    else:
        raise SystemExit('unhandled path command ' + str(cmd))

for s in segs:
    for p in s[1:]: pts_all.append(p)
if not pts_all: raise SystemExit('nothing traced: check --thresh / --invert / --crop')
x0 = min(p[0] for p in pts_all); y0 = min(p[1] for p in pts_all)
x1 = max(p[0] for p in pts_all); y1 = max(p[1] for p in pts_all)
pad = (x1 - x0) * 0.02
ox, oy = x0 - pad, y0 - pad; W, Hh = x1 - x0 + 2 * pad, y1 - y0 + 2 * pad
f = lambda p: f'{p[0] - ox:.1f} {p[1] - oy:.1f}'
out = ''.join('Z' if s[0] == 'Z' else s[0] + ' '.join(f(p) for p in s[1:]) for s in segs)

svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} {Hh:.1f}">'
       f'<path fill="{a.fill}" fill-rule="nonzero" d="{out}"/></svg>\n')
open(a.out, 'w').write(svg)
json.dump({'viewBox': [round(W, 1), round(Hh, 1)], 'scale': a.scale, 'crop': a.crop,
           'ink_bbox_scaled': [round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)]},
          open(os.path.splitext(a.out)[0] + '.json', 'w'))
print(f'{a.out}: {len(segs)} segments, viewBox {W:.0f}x{Hh:.0f}')
