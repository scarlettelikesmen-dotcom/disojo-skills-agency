"""Generate neutral placeholder assets so a fresh clone runs and looks intentional before real assets arrive.
Writes: public/images/<slug>.jpg (4:5 product shots), public/images/bundle.jpg, public/hero-frames/frame-001.jpg, public/og.jpg
Never ship these: replace each with the client's real asset (see the intake skill's asset list)."""
import os, re
from PIL import Image, ImageDraw, ImageFont

root = os.path.join(os.path.dirname(__file__), '..')
src = open(os.path.join(root, 'src/data/products.js')).read()
items = re.findall(r"name: '([^']+)'.*?image: '/images/([^']+)\.jpg'.*?gradientFrom: '(#[0-9A-Fa-f]{6})', gradientTo: '(#[0-9A-Fa-f]{6})'", src, re.S)

def font(size):
    for f in ['/System/Library/Fonts/Supplemental/Georgia.ttf', '/System/Library/Fonts/Helvetica.ttc', 'DejaVuSerif.ttf']:
        try: return ImageFont.truetype(f, size)
        except Exception: pass
    return ImageFont.load_default()

def hexrgb(h): return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))

def gradient(w, h, a, b):
    a, b = hexrgb(a), hexrgb(b)
    im = Image.new('RGB', (w, h))
    px = im.load()
    for y in range(h):
        t = y / (h - 1) * 0.35
        row = tuple(int(a[k] + (b[k] - a[k]) * t) for k in range(3))
        for x in range(w): px[x, y] = row
    return im

def label(im, text, size, dy=0, fill=(30, 30, 28)):
    d = ImageDraw.Draw(im)
    f = font(size)
    w = d.textlength(text, font=f)
    d.text(((im.width - w) / 2, im.height / 2 + dy), text, font=f, fill=fill)

os.makedirs(os.path.join(root, 'public/images'), exist_ok=True)
os.makedirs(os.path.join(root, 'public/hero-frames'), exist_ok=True)
for name, slug, a, b in items:
    im = gradient(1000, 1250, a, b)
    label(im, name, 64)
    label(im, 'PLACEHOLDER PHOTO', 22, dy=70)
    im.save(os.path.join(root, f'public/images/{slug}.jpg'), quality=82)
bundle = gradient(1000, 1000, '#E9E1D5', '#C7BBA9'); label(bundle, 'Bundle photo', 54); bundle.save(os.path.join(root, 'public/images/bundle.jpg'), quality=82)
hero = gradient(1360, 1080, '#F4EBDD', '#E6D5BC'); label(hero, 'HERO PLACEHOLDER', 48); label(hero, 'Replace /public/hero-frames with your frames', 26, dy=60); hero.save(os.path.join(root, 'public/hero-frames/frame-001.jpg'), quality=82)
og = gradient(1200, 630, '#F7F4EF', '#E9E1D5'); label(og, 'OG image 1200x630', 44); og.save(os.path.join(root, 'public/og.jpg'), quality=82)
print('placeholders written for', [i[0] for i in items])
