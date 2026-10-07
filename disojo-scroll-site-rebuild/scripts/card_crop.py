"""Turn a 16:9 studio bottle photo into the 4:5 product-card / popup image (1000x1250 JPEG).
usage: card_crop.py photo.jpg out.jpg
Centres on the bottle (darkest column in the top third), full height, so the Gemini watermark
(bottom-right corner) falls outside the crop. Check that it does."""
import sys
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB'); w, h = im.size
cw = int(h * 0.8)
g = im.convert('L').crop((int(w * .3), 0, int(w * .7), int(h * .35)))
cols = [sum(g.getpixel((x, y)) for y in range(0, g.height, 6)) for x in range(g.width)]
cx = int(w * .3) + cols.index(min(cols))
x0 = min(max(0, cx - cw // 2), w - cw)
im.crop((x0, 0, x0 + cw, h)).resize((1000, 1250), Image.LANCZOS).save(dst, quality=84, optimize=True, progressive=True)
print('saved', dst, 'crop x0', x0, 'of', w)
