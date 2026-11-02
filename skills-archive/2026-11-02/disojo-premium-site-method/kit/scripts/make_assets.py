# Builds web assets from the client's originals in ../ (WhatsApp screenshots, logo).
# usage: ~/claudeskillsthrureels/.venv/bin/python scripts/make_assets.py
from PIL import Image
import numpy as np, os
SRC = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'img'))
os.makedirs(OUT, exist_ok=True)

# Screenshots: keep readable (max 960 px on the long side), WebP.
for n in ['jaylen', 'nasir', 'beckett', 'amrou', 'dillon', 'anna']:
    f = 'jash' if n == 'beckett' else n
    im = Image.open(f'{SRC}/testi-{f}.png').convert('RGB')
    im.thumbnail((960, 960), Image.LANCZOS)
    im.save(f'{OUT}/chat-{n}.webp', 'WEBP', quality=82, method=6)
    print(n, im.size, os.path.getsize(f'{OUT}/chat-{n}.webp') // 1024, 'KB')

# Logo: white mark on black with a glow. Luminance becomes alpha so it sits on any dark surface.
lg = Image.open(f'{SRC}/logo.png').convert('RGB')
a = np.asarray(lg).astype(float) / 255.0
lum = a.max(axis=2)
alpha = np.clip((lum - 0.35) / 0.55, 0, 1)          # drops the soft glow, keeps the crisp white shapes
ys, xs = np.where(alpha > 0.5)
pad = 24
box = (max(xs.min() - pad, 0), max(ys.min() - pad, 0), min(xs.max() + pad, lg.width), min(ys.max() + pad, lg.height))
rgba = np.dstack([np.full(lum.shape, 255), np.full(lum.shape, 255), np.full(lum.shape, 255), (alpha * 255)]).astype('uint8')
mark = Image.fromarray(rgba, 'RGBA').crop(box)
print('mark', mark.size)
side = max(mark.size)
sq = Image.new('RGBA', (side, side), (0, 0, 0, 0)); sq.paste(mark, ((side - mark.width) // 2, (side - mark.height) // 2))
sq.resize((256, 256), Image.LANCZOS).save(f'{OUT}/mark.png', optimize=True)
# favicon: mark on film black
fav = Image.new('RGBA', (256, 256), (10, 10, 11, 255)); m = sq.resize((200, 200), Image.LANCZOS); fav.alpha_composite(m, (28, 28))
fav.save(f'{OUT}/favicon-256.png', optimize=True); fav.resize((180, 180), Image.LANCZOS).save(f'{OUT}/apple-touch-icon.png', optimize=True)
fav.resize((48, 48), Image.LANCZOS).save(f'{OUT}/favicon-48.png', optimize=True)
