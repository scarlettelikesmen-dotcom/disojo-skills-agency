"""Die-cut sticker pipeline. usage: ~/claudeskillsthrureels/.venv/bin/python tools/cutouts.py
Reads originals downloaded from printelements.ca (assets-src/live-site-originals), removes the white or grey studio
background with rembg, adds a white die-cut outline, writes small WebP with alpha to public/img/s/.
Nothing here redraws or alters a product: it only cuts it out."""
import json, os, sys
from PIL import Image, ImageFilter, ImageChops
from rembg import remove, new_session

SRC = os.path.join(os.path.dirname(__file__), '..', 'assets-src', 'live-site-originals')
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'img', 's')
M = '623ea7_'
# key: (file, long edge px, extra)
ITEMS = {
  'hoodie': (M+'59c64d4a859745f0adaa3956e96f65b0.jpg', 620, {}),
  'polo': (M+'4e3d1c67532b4e35aa76ad3b4929b224.png', 700, {}),
  'mousepad': (M+'2116e41d82e74bc387ec7ef5ff496db3.jpg', 520, {'crop': True}),
  'mug-logo': (M+'55dcfb70a3e44a2b883541cc245a3cdb.jpg', 460, {}),
  'tumblers': (M+'563fb590dfd94c9eb58d129b4b669380.jpg', 500, {}),
  'wine-tumblers': (M+'d20b8fc0b39f41b8aa22b4da649093f6.jpg', 460, {'box': (0.36, 0, 1, 1)}),
  'water-bottles': (M+'f2699944e61d479fb9e0d003f0aee72e.jpg', 640, {}),
  'travel-mugs': (M+'d56ae3214fee4de68f0fe58436dd60a0.jpg', 600, {}),
  'mug-red': (M+'641cc770758342d0a8474385d1995b4f.jpg', 520, {'box': (0, 0, 0.62, 1)}),
  'mug-blue': (M+'66dc71f5375043c38cc7e9fce7936589.jpg', 520, {'box': (0, 0, 0.62, 1)}),
  'mug-black': (M+'70831ae90ecf4bc5bbb5bcad3b60b503.jpg', 520, {'box': (0, 0, 0.62, 1)}),
  'mug-pink': (M+'66760024793b4dedb991bafac4d98fa4.jpg', 520, {'box': (0, 0, 0.62, 1)}),
  'roller-banner': (M+'29dad4aff3154662940af853abd5401d.jpeg', 700, {}),
  'flags': (M+'29278dc4b3a647f19a476625b90bf19b.jpg', 700, {}),
  'car': (M+'22d0a7e564a2448996fdbc868af27f8b.jpg', 920, {'crop': True, 'box': (0, 0, 1, 0.8)}),
  'a-frame': (M+'a66e30078e1f4e209437e1c91901927b.png', 460, {}),
  'canvas': (M+'e772cfc3890142d4a17aeb697aff69e3.png', 500, {}),
  'business-cards': (M+'51856c9920bf48578a911b16e01a8eab.jpg', 560, {}),
  'door-hangers': (M+'b157c13ab561482b8e9852fb49a10fb3.jpg', 360, {}),
  'notepad': (M+'ce2447c9a4bd423a8f20a089913f8ed8.jpg', 700, {}),
  'invoice-books': (M+'9ff9dd01ffe542bca1f0253cb6b0fbb4.jpg', 600, {}),
  'rack-cards': (M+'4df1dee7403447518ef0aef60add8b3d.jpg', 700, {}),
  'brochure': (M+'cbf1231201204582a22b8dd48b7e11ae.png', 600, {'frac': 0.3}),
  'forms': (M+'8a527fab017a4730ab83ce4928815e48.jpg', 640, {}),
  'flyers': (M+'ef1c7f932dac4f61a61e623dfab41e74.jpg', 560, {}),
  'postcards': (M+'9cddc2fb93954374bc8c9cdfbc0730f1.png', 620, {}),
  'folders': (M+'36602893f55545379ddc198db357df09.png', 560, {}),
  'stickers': (M+'b6831b10b6fa4bdc930b3ea220ecaea3.jpg', 520, {}),
  'fridge-magnets': (M+'a5a35977724844e7847afb4cee85adeb.jpg', 560, {}),
  'coroplast': (M+'d36e45168b5947cab9e124cc23b8b2b4.png', 520, {}),
  'banners': (M+'8740281815be4ed9bfff6c822502f705.png', 640, {}),
  'mesh-banners': (M+'878e98b4ae97460ebfe5e8ea2c4ec9cd.jpg', 700, {}),
  'footsteps': (M+'acb8772682e34d758dde821fef9161b8.jpg', 360, {}),
  'floor-decal': (M+'0b56070558984fec8a8e748bf2c3ac57.jpeg', 272, {}),
  'mask': (M+'b013c1f448e445d7be4acdcc2e98051a.jpg', 620, {}),
  'small-posters': (M+'a36ae6d3dcff4ab880bbe5a4114baf2f.jpg', 560, {}),
}
sess = new_session('u2net')

def bbox_crop(im):
    rgb = im.convert('RGB'); bg = Image.new('RGB', im.size, (255, 255, 255))
    d = ImageChops.difference(rgb, bg).convert('L').point(lambda v: 255 if v > 14 else 0)
    b = d.getbbox(); return im.crop(b) if b else im

def outline(rgba, r):
    a = rgba.getchannel('A')
    a = a.point(lambda v: 255 if v > 150 else 0).filter(ImageFilter.MinFilter(3))   # shave the matte fringe
    a = a.filter(ImageFilter.GaussianBlur(0.8)).point(lambda v: 255 if v > 128 else 0)
    pad = r * 2 + 4
    big = Image.new('L', (a.width + pad * 2, a.height + pad * 2), 0); big.paste(a, (pad, pad))
    grown = big.filter(ImageFilter.GaussianBlur(r * 0.9)).point(lambda v: 255 if v > 14 else 0)
    grown = grown.filter(ImageFilter.GaussianBlur(1.1))
    obj = Image.new('RGBA', big.size, (0, 0, 0, 0)); obj.paste(rgba, (pad, pad), a.filter(ImageFilter.GaussianBlur(0.6)))
    white = Image.new('RGBA', big.size, (255, 255, 255, 255)); white.putalpha(grown)
    white.alpha_composite(obj)
    return white.crop(white.getbbox())

import numpy as np
from scipy import ndimage
def keep_main(rgba, frac=0.04):
    a = np.array(rgba.getchannel('A')) > 40
    lab, n = ndimage.label(ndimage.binary_dilation(a, iterations=6))
    if n <= 1: return rgba
    sizes = ndimage.sum(a, lab, range(1, n + 1)); keep = [i + 1 for i, v in enumerate(sizes) if v >= frac * sizes.max()]
    m = np.isin(lab, keep); arr = np.array(rgba); arr[..., 3] = np.where(m, arr[..., 3], 0)
    return Image.fromarray(arr)

manifest = {}
only = sys.argv[1:]
for key, (fn, edge, o) in ITEMS.items():
    if only and key not in only: continue
    if o.get('skip'): continue
    p = os.path.join(SRC, fn)
    if not os.path.exists(p): print('MISSING', key, fn); continue
    im = Image.open(p).convert('RGBA')
    if o.get('crop'): im = bbox_crop(im)
    if o.get('box'):
        b = o['box']; im = im.crop((round(b[0]*im.width), round(b[1]*im.height), round(b[2]*im.width), round(b[3]*im.height)))
    s = 1400 / max(im.size)
    if s < 1: im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    cut = remove(im, session=sess)
    cut = keep_main(cut, o.get('frac', 0.04))
    cut = cut.crop(cut.getchannel('A').point(lambda v: 255 if v > 20 else 0).getbbox())
    fs = edge / max(cut.size); cut = cut.resize((max(1, round(cut.width * fs)), max(1, round(cut.height * fs))), Image.LANCZOS)
    st = outline(cut, max(5, round(edge * 0.012)))
    path = os.path.join(OUT, key + '.webp')
    st.save(path, 'WEBP', quality=76, method=6)
    manifest[key] = {'w': st.width, 'h': st.height, 'kb': os.path.getsize(path) // 1024}
    print(key, st.size, os.path.getsize(path) // 1024, 'KB')
mp = os.path.join(OUT, '..', 'stickers.json')
old = json.load(open(mp)) if os.path.exists(mp) else {}
old.update(manifest); json.dump(old, open(mp, 'w'), indent=1)
