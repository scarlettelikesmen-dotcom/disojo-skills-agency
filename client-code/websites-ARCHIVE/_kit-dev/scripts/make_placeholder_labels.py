"""Flat PLACEHOLDER label artwork for the kit demo (a made-up brand, clearly marked). Real clients supply a print-ready dieline instead:
see templates/dieline-request.md. Sizes come from SPECS in src/product3d/shapes.js (1000 px per unit).
usage: python3 scripts/make_placeholder_labels.py   (needs Pillow; use the venv python)"""
import os
from PIL import Image, ImageDraw, ImageFont
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'labels'); os.makedirs(OUT, exist_ok=True)
FONTS = ['/System/Library/Fonts/Supplemental/Arial Bold.ttf', '/System/Library/Fonts/Helvetica.ttc', '/Library/Fonts/Arial Bold.ttf']
def font(size):
    for f in FONTS:
        if os.path.exists(f):
            try: return ImageFont.truetype(f, size)
            except Exception: pass
    return ImageFont.load_default()
FLAV = [('MANGO', '#F2A81D', '#3B1E00'), ('BERRY', '#7B2D8E', '#FFE9FF'), ('LIME', '#2E9B4B', '#F3FFE0')]
SIZES = {'can': (2073, 1030), 'jar': (3141, 480), 'bottle': (2262, 780)}

def band(shape, name, bg, fg, w, h):
    im = Image.new('RGB', (w, h), bg); d = ImageDraw.Draw(im)
    for i in range(-h, w, 140): d.line([(i, h), (i + h, 0)], fill=tuple(min(255, int(c * 1.06)) for c in Image.new('RGB', (1, 1), bg).getpixel((0, 0))), width=46)
    cx = w // 2   # centre of the artwork = front of the product
    big = font(int(h * 0.20 if w / h < 3 else h * 0.30)); small = font(int(h * 0.075))
    d.text((cx, h * 0.40), name, font=big, fill=fg, anchor='mm')
    d.text((cx, h * 0.62), 'DEMO FIZZ', font=font(int(h * 0.075)), fill=fg, anchor='mm')
    d.text((cx, h * 0.90), 'PLACEHOLDER LABEL', font=small, fill=fg, anchor='mm')
    d.rectangle([0, 0, w - 1, int(h * 0.05)], fill=fg); d.rectangle([0, h - int(h * 0.05), w - 1, h - 1], fill=fg)
    for x in (0, w - 1): d.line([(x, 0), (x, h)], fill=fg, width=6)
    im.save(os.path.join(OUT, f'{shape}-{name.lower()}.png'), optimize=True)

for shape, (w, h) in SIZES.items():
    for name, bg, fg in FLAV: band(shape, name, bg, fg, w, h)
# box: front/back/left/right/top/bottom
bw, bh, bd = 800, 1300, 400
name, bg, fg = FLAV[0]
for face, (w, h) in {'front': (bw, bh), 'back': (bw, bh), 'left': (bd, bh), 'right': (bd, bh), 'top': (bw, bd), 'bottom': (bw, bd)}.items():
    im = Image.new('RGB', (w, h), bg); d = ImageDraw.Draw(im)
    d.rectangle([0, 0, w - 1, h - 1], outline=fg, width=10)
    d.text((w / 2, h * 0.42), name if face == 'front' else face.upper(), font=font(int(min(w, h) * 0.2)), fill=fg, anchor='mm')
    d.text((w / 2, h * 0.9), 'PLACEHOLDER - NOT A REAL PRODUCT', font=font(max(14, int(min(w, h) * 0.04))), fill=fg, anchor='mm')
    im.save(os.path.join(OUT, f'box-{face}.png'), optimize=True)
print('labels written to', os.path.abspath(OUT))
