"""Sheet of a captured moment, frames in order, 4 across. python3 strip.py moments/<slug>-<kind>"""
import sys, glob, os
from PIL import Image, ImageDraw
d = sys.argv[1].rstrip('/'); fs = sorted(glob.glob(f'{d}/[0-9]*.jpg')); W, H, C = 378, 216, 4
R = (len(fs) + C - 1) // C; s = Image.new('RGB', (C * W, R * (H + 14) + 18), 'white'); dr = ImageDraw.Draw(s)
dr.text((4, 3), os.path.basename(d), fill='black')
for i, f in enumerate(fs):
    r, c = divmod(i, C); s.paste(Image.open(f).convert('RGB').resize((W, H)), (c * W, 18 + r * (H + 14) + 12)); dr.text((c * W + 3, 18 + r * (H + 14)), str(i), fill='black')
s.save(f'{d}.jpg', quality=70); print(f'{d}.jpg', len(fs))
