"""Montage a folder of images (ChatGPT results, research grabs) into one numbered sheet, so picks and refs
can be compared at a glance and named by number.

Usage: python3 contact_sheet.py IN_DIR OUT.jpg [cols=5] [cell=400]
"""
import sys, glob
from PIL import Image, ImageDraw

src, out = sys.argv[1], sys.argv[2]
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 5
C = int(sys.argv[4]) if len(sys.argv) > 4 else 400
fs = [f for f in sorted(glob.glob(src + '/*')) if f.lower().rsplit('.', 1)[-1] in ('png', 'jpg', 'jpeg', 'webp', 'gif')]
rows = (len(fs) + cols - 1) // cols
m = Image.new('RGB', (cols * C, rows * (C + 22)), 'white'); d = ImageDraw.Draw(m)
for i, f in enumerate(fs):
    try:
        im = Image.open(f).convert('RGBA'); bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im); im = bg.convert('RGB')
    except Exception:
        continue
    im.thumbnail((C - 8, C - 8))
    x, y = (i % cols) * C, (i // cols) * (C + 22)
    m.paste(im, (x + (C - im.width) // 2, y + (C - im.height) // 2))
    d.text((x + 6, y + C + 4), f'{i:02d}  {f.rsplit("/", 1)[-1][:44]}', fill='black')
m.save(out, quality=88)
print(out, len(fs), 'images')
