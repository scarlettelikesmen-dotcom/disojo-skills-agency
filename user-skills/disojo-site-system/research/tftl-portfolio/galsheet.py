"""One row per case: up to 7 gallery images. python3 galsheet.py -> sheets/case-N.jpg"""
import glob, os, json
from PIL import Image, ImageDraw
TH, W, ROWS, N = 180, 2000, 6, 7
rows = []
for d in sorted(glob.glob('gallery/*/')):
    s = os.path.basename(d.rstrip('/'))
    try: meta = json.load(open(d + 'meta.json'))
    except Exception: continue
    fs = sorted(f for f in glob.glob(d + '*') if not f.endswith('.json'))
    ims = []
    for f in fs:
        try:
            im = Image.open(f).convert('RGB'); ims.append(im.resize((max(1, round(im.width * TH / im.height)), TH)))
        except Exception: pass
    if len(ims) > N: ims = [ims[round(i * (len(ims) - 1) / (N - 1))] for i in range(N)]
    rows.append((s, meta.get('err') or f"{meta.get('images', 0)} images, {meta.get('videos', 0)} videos", ims))
for k in range(0, len(rows), ROWS):
    ch = rows[k:k + ROWS]; sheet = Image.new('RGB', (W, len(ch) * (TH + 20)), 'white'); d = ImageDraw.Draw(sheet)
    for r, (s, info, ims) in enumerate(ch):
        y = r * (TH + 20); d.text((4, y + 4), f'{s}  ({info})', fill='black'); x = 0
        for im in ims:
            if x >= W: break
            sheet.paste(im, (x, y + 20)); x += im.width + 4
    out = f'sheets/case-{k // ROWS + 1}.jpg'; sheet.save(out, quality=78); print(out, [c[0] for c in ch])
