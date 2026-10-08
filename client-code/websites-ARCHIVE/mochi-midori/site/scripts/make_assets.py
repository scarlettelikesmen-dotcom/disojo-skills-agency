"""Mochi & Midori: turn assets-original into web assets. Crops the bottom 8% of every image (Gemini's visible sparkle mark sits there;
the invisible SynthID mark stays and is disclosed). Run with the venv python:  ~/claudeskillsthrureels/.venv/bin/python scripts/make_assets.py"""
import glob, os
from PIL import Image
SRC = os.path.abspath('../assets-original')
OUT = os.path.abspath('public')
def find(prefix):
    m = sorted(glob.glob(os.path.join(SRC, prefix + '*')))
    assert m, prefix
    return m[0]
def load(prefix):
    im = Image.open(find(prefix)).convert('RGB')
    w, h = im.size
    return im.crop((0, 0, w, int(h * 0.92)))      # drop watermark strip
def card(prefix, cx, name, w=1000):
    im = load(prefix); W, H = im.size
    cw = int(H * 0.8)                                # 4:5
    x0 = int(min(max(cx * W - cw / 2, 0), W - cw))
    im.crop((x0, 0, x0 + cw, H)).resize((w, int(w * 1.25)), Image.LANCZOS).save(f'{OUT}/images/{name}.jpg', quality=82, optimize=True, progressive=True)
def wide(prefix, name, w=2000, folder='process'):
    im = load(prefix); im = im.resize((w, int(im.size[1] * w / im.size[0])), Image.LANCZOS)
    im.save(f'{OUT}/{folder}/{name}.jpg', quality=78, optimize=True, progressive=True)
# product cards: (file prefix, subject centre x, slug)
for prefix, cx, slug in [('Matcha_mille_crêpe_cake_2K_20261008012851', 0.40, 'matcha-mille-crepe'),
                         ('Black_sesame_mochi_donut', 0.31, 'black-sesame-mochi-donut'),
                         ('Yuzu_cloud_tart', 0.66, 'yuzu-cloud-tart'),
                         ('Hojicha_tea_brownie', 0.46, 'hojicha-brownie'),
                         ('Sakura_blossom_macarons', 0.43, 'sakura-macarons'),
                         ('Shokupan_bread_loaf', 0.65, 'shokupan')]:
    card(prefix, cx, slug)
# wide shots
for prefix, name in [('Baker_dusting_matcha', 'dusting-matcha'), ('Baker_scoring_Shokupan_dough_2K_20261008013712', 'scoring-shokupan'),
                     ('Baker_smoothing_cream_on_crêpe_2K_20261008013709', 'smoothing-cream'), ('Baker_decorating_pink_macaron', 'decorating-macaron'),
                     ('Baker_sifting_matcha_over_cake_2K_20261008013704', 'sifting-matcha'), ('Baking_tools', 'tools'),
                     ('Matcha_crepe_cake_texture', 'layers-macro'), ('Matcha_mille_crêpe_cake_slice', 'slice-cutaway'),
                     ('Matcha_mille_crêpe_cake_top', 'slice-hero'), ('Matcha_crepe_cake_and_whisk', 'slice-whisk')]:
    wide(prefix, name)
wide('Mochi_&_Midori_exterior', 'shopfront', folder='images')
# logo: green-on-white JPG -> transparent PNG (alpha from luminance), trimmed
lg = Image.open(find('Minimalist_bakery_logo')).convert('RGB')
px = lg.load(); w, h = lg.size
rgba = Image.new('RGBA', (w, h)); rp = rgba.load()
G = (63, 97, 72)
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]; lum = (r + g + b) / 3
        a = max(0, min(255, int((250 - lum) * 255 / 120)))
        rp[x, y] = (*G, a)
bbox = rgba.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
pad = 20; bbox = (bbox[0]-pad, bbox[1]-pad, bbox[2]+pad, bbox[3]+pad)
logo = rgba.crop(bbox); logo.save(f'{OUT}/images/logo.png', optimize=True)
print('logo', logo.size)
# leaf mark only (top part) for favicon / loader
lw, lh = logo.size
mark = logo.crop((int(lw*0.34), 0, int(lw*0.66), int(lh*0.46)))
mb = mark.getchannel('A').getbbox(); mark = mark.crop(mb)
side = max(mark.size) + 40; sq = Image.new('RGBA', (side, side), (0,0,0,0)); sq.paste(mark, ((side-mark.size[0])//2, (side-mark.size[1])//2))
sq.resize((512, 512), Image.LANCZOS).save(f'{OUT}/images/mark.png', optimize=True)
sq.resize((64, 64), Image.LANCZOS).save(f'{OUT}/favicon.png')
print('done')
