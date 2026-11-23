"""One overview sheet per kind: a row per site, the last N frames (closes) or every other frame (loaders).
python3 overview.py close|loader"""
import sys, glob, os
from PIL import Image, ImageDraw
kind = sys.argv[1]; W, H = 240, 137
dirs = sorted(d for d in glob.glob(f'moments/*-{kind}') if os.path.isdir(d))
rows = []
for d in dirs:
    fs = sorted(glob.glob(f'{d}/[0-9]*.jpg'))
    fs = fs[-10:] if kind == 'close' else fs[::2]
    rows.append((os.path.basename(d).replace(f'-{kind}', ''), fs))
C = max(len(f) for _, f in rows)
s = Image.new('RGB', (C * W, len(rows) * (H + 16)), 'white'); dr = ImageDraw.Draw(s)
for r, (name, fs) in enumerate(rows):
    y = r * (H + 16); dr.text((3, y + 2), name, fill='black')
    for c, f in enumerate(fs): s.paste(Image.open(f).convert('RGB').resize((W - 2, H)), (c * W, y + 15))
s.save(f'moments/overview-{kind}s.jpg', quality=72); print(f'moments/overview-{kind}s.jpg', len(rows), 'rows')
