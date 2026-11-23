"""One look sheet per scanned site: intro row, scroll grid, phone row. python3 sheet.py <scanDir/slug>"""
import sys, glob, os
from PIL import Image, ImageDraw
d = sys.argv[1]; slug = os.path.basename(d.rstrip('/'))
W, H = 300, 171  # desktop thumb
PW, PH = 120, 260
intro = sorted(glob.glob(f'{d}/i*.jpg')); scroll = sorted(glob.glob(f'{d}/s[0-9]*.jpg')); phone = sorted(glob.glob(f'{d}/p*.jpg'))
cols = 5
rows = 1 + (len(scroll) + cols - 1) // cols
sheet = Image.new('RGB', (cols * W, rows * (H + 16) + PH + 34), 'white'); dr = ImageDraw.Draw(sheet)
def put(f, x, y, w, h, label):
    try: sheet.paste(Image.open(f).convert('RGB').resize((w, h)), (x, y + 14))
    except Exception: pass
    dr.text((x + 2, y), label, fill='black')
for i, f in enumerate(intro): put(f, i * W, 0, W, H, f'{slug} intro {i}')
for i, f in enumerate(scroll):
    r, c = divmod(i, cols); put(f, c * W, (r + 1) * (H + 16), W, H, f'scroll {i}')
y = rows * (H + 16) + 4
for i, f in enumerate(phone): put(f, i * (PW + 8), y, PW, PH, f'phone {i}')
sheet.save(f'{d}/sheet.jpg', quality=72)
print(f'{d}/sheet.jpg', len(intro), len(scroll), len(phone))
