"""Contact sheet of every image in a folder, labelled with file name and pixel size, so tiers and uses can be marked.
python3 contact_sheet.py <folder> [out.jpg]
"""
import os
import sys
from PIL import Image, ImageDraw

folder = sys.argv[1]
out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(folder, '_contact-sheet.jpg')
files = sorted(f for f in os.listdir(folder) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')) and not f.startswith('_contact'))
W, H, COLS = 360, 240, 4
rows = (len(files) + COLS - 1) // COLS
sheet = Image.new('RGB', (W * COLS, (H + 28) * max(rows, 1)), 'white')
d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    try:
        im = Image.open(os.path.join(folder, f))
        size = im.size
        im = im.convert('RGB')
        im.thumbnail((W - 10, H - 10))
    except Exception:
        continue
    x, y = (i % COLS) * W, (i // COLS) * (H + 28)
    sheet.paste(im, (x + 5, y + 5))
    d.text((x + 6, y + H + 4), f'{f[:34]}  {size[0]}x{size[1]}', fill=(30, 30, 30))
sheet.save(out, quality=85)
print(out)
