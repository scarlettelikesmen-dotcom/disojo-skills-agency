"""Cut a bottle out of a studio photo and save a trimmed transparent WebP for the scent wheel.
usage: cutout.py photo.jpg out.webp [centre_x]   (centre_x defaults to the darkest column in the top third = the cap)
Needs: pip install rembg pillow onnxruntime  (use a venv: system pip is blocked by PEP 668)
Model: isnet-general-use. ALWAYS look at the result on the tint colour it will sit on:
speckles inside printed letters and a clipped bottom text line were the two defects seen."""
import sys
from PIL import Image
from rembg import remove, new_session

src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
w, h = im.size
if len(sys.argv) > 3:
    cx = int(sys.argv[3])
else:
    g = im.convert('L').crop((int(w * .3), 0, int(w * .7), int(h * .35)))
    cols = [sum(g.getpixel((x, y)) for y in range(0, g.height, 6)) for x in range(g.width)]
    cx = int(w * .3) + cols.index(min(cols))
half = int(h * 0.17)                     # bottle is ~1/3 as wide as it is tall
out = remove(im.crop((cx - half, 0, cx + half, h)), session=new_session('isnet-general-use'))
bb = out.getchannel('A').point(lambda v: 255 if v > 20 else 0).getbbox()
pad = 6
out = out.crop((max(0, bb[0] - pad), max(0, bb[1] - pad), min(out.width, bb[2] + pad), min(out.height, bb[3] + pad)))
out = out.resize((round(out.width * 1500 / out.height), 1500), Image.LANCZOS)
out.save(dst, quality=90, method=6)
print('saved', dst, out.size)
