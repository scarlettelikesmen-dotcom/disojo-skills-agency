"""Per-site scroll strips: one row per site, 8 screens sampled across the main page. python3 strips.py <live|caseonly> <prefix>"""
import sys, glob, os
from PIL import Image, ImageDraw
src, pre = sys.argv[1], sys.argv[2]
sites = sorted(d for d in os.listdir(src) if os.path.isdir(f'{src}/{d}'))
TW, TH, N, ROWS = 250, 143, 8, 7
def page(s):
    ps = [p for p in glob.glob(f'{src}/{s}/1512/*') if glob.glob(p + '/s*.jpg')]
    ps.sort(key=lambda p: (os.path.basename(p) not in ('home', 'index'), -len(glob.glob(p + '/s*.jpg'))))
    return ps[0] if ps else None
rows = []
for s in sites:
    p = page(s)
    if not p: continue
    shots = sorted(glob.glob(p + '/s*.jpg'))
    pick = [shots[round(i * (len(shots) - 1) / (N - 1))] for i in range(N)] if len(shots) >= N else shots
    rows.append((s, len(shots), len(glob.glob(f'{src}/{s}/1512/*/')), pick))
for k in range(0, len(rows), ROWS):
    ch = rows[k:k + ROWS]
    im = Image.new('RGB', (N * TW, len(ch) * (TH + 20)), 'white'); d = ImageDraw.Draw(im)
    for r, (s, n, np_, pick) in enumerate(ch):
        y = r * (TH + 20); d.text((4, y + 4), f'{s}  ({n} screens, {np_} pages)', fill='black')
        for i, f in enumerate(pick): im.paste(Image.open(f).convert('RGB').resize((TW, TH)), (i * TW, y + 20))
    out = f'sheets/{pre}-{k // ROWS + 1}.jpg'; im.save(out, quality=78); print(out, [c[0] for c in ch])
