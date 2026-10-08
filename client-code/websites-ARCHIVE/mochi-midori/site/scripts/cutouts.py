"""Cut each plated bake out of its photo (plate included) -> transparent WebP. Sparkle strip cropped first.
usage: ~/claudeskillsthrureels/.venv/bin/python scripts/cutouts.py   (run from site/)"""
import glob, os
from PIL import Image
from rembg import remove, new_session
SRC = os.path.abspath('../assets-original'); OUT = os.path.abspath('public/cut')
JOBS = [('Matcha_Mille_Crêpe_cake_on_2K_20261008012900', 'matcha-mille-crepe'), ('Black_sesame_mochi_donut', 'black-sesame-mochi-donut'),
        ('Yuzu_cloud_tart', 'yuzu-cloud-tart'), ('Hojicha_tea_brownie', 'hojicha-brownie'), ('Sakura_blossom_macarons', 'sakura-macarons'), ('Shokupan_bread_loaf', 'shokupan')]
sess = new_session('isnet-general-use')
for prefix, slug in JOBS:
    f = sorted(glob.glob(os.path.join(SRC, prefix + '*')))[0]
    im = Image.open(f).convert('RGB'); w, h = im.size; im = im.crop((0, 0, w, int(h * 0.92)))
    out = remove(im, session=sess)
    bb = out.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
    out = out.crop(bb); out = out.resize((1400, round(out.height * 1400 / out.width)), Image.LANCZOS)
    out.save(f'{OUT}/{slug}.webp', quality=88, method=6); print(slug, out.size, os.path.getsize(f'{OUT}/{slug}.webp') // 1024, 'KB')
