"""Hojicha brownie cut-out: rembg outline for the crust + colour mask and hull for the bottom edge (the dark side blends into the plate shadow).
usage: ~/claudeskillsthrureels/.venv/bin/python scripts/cut_brownie.py   (run from site/)"""
import glob, os, numpy as np
from PIL import Image, ImageFilter, ImageDraw
from scipy import ndimage as ndi
from scipy.spatial import ConvexHull
from rembg import remove, new_session
SRC = os.path.abspath('../assets-original'); OUT = os.path.abspath('public/cut/hojicha-brownie.webp')
f = sorted(glob.glob(os.path.join(SRC, 'Hojicha_tea_brownie*')))[0]
im = Image.open(f).convert('RGB'); w, h = im.size; im = im.crop((0, 0, w, int(h * 0.92)))
S = 2.5; x0, y0, x1, y1 = [int(v * S) for v in (360, 100, 870, 500)]
roi = im.crop((x0, y0, x1, y1))
a = np.array(roi).astype(float); L = a.mean(2); chroma = a[..., 0] - a[..., 2]
def largest(m):
    lab, n = ndi.label(m); sizes = ndi.sum(m, lab, range(1, n + 1)); return lab == (1 + int(np.argmax(sizes)))
alpha = np.array(remove(roi, session=new_session('isnet-general-use')).getchannel('A'))
Mr = largest(ndi.binary_fill_holes(ndi.binary_closing(alpha > 110, iterations=4)))
strict = largest(ndi.binary_fill_holes(ndi.binary_closing(ndi.binary_opening((L < 88) | (chroma > 46), iterations=6), iterations=10)))
U = Mr | strict
ys, xs = np.nonzero(U)
pts = np.stack([xs, ys], 1); hull = ConvexHull(pts); poly = [tuple(pts[i]) for i in hull.vertices]
Hm = Image.new('L', roi.size, 0); ImageDraw.Draw(Hm).polygon(poly, fill=255); H = np.array(Hm) > 0
ycut = ys.min() + 0.58 * (ys.max() - ys.min())
rows = np.arange(roi.size[1])[:, None] * np.ones((1, roi.size[0]))
final = Mr | (H & (rows > ycut))
plateish = (chroma < 33) & (L > 70)   # plate and its grey cast shadow; the brownie is warm, chocolate chunks are very dark
final = final & ~(plateish & (rows > ycut * 0.92))
final = ndi.binary_opening(final, iterations=5); final = ndi.binary_closing(final, iterations=4); final = largest(ndi.binary_fill_holes(final))
final = ndi.binary_erosion(final, iterations=2)                      # drop the light fringe
m = Image.fromarray((final * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(1.4))
out = roi.convert('RGBA'); out.putalpha(m)
bb = m.point(lambda v: 255 if v > 24 else 0).getbbox(); out = out.crop(bb)
out = out.resize((1400, round(out.height * 1400 / out.width)), Image.LANCZOS)
# the plate's cast shadow still clings to the lower right; trim everything beyond the brownie's right-hand base edge (output coordinates)
yy, xx = np.mgrid[0:out.height, 0:out.width]
cutm = ((xx + yy) > 1974) & (yy > 630)
al = np.array(out.getchannel('A')).astype(float); al[cutm] = 0
alim = Image.fromarray(al.astype('uint8')).filter(ImageFilter.GaussianBlur(1.2)); out.putalpha(alim)
out.save(OUT, quality=90, method=6); print('saved', out.size)
bg = Image.new('RGB', out.size, '#6E4129'); bg.paste(out, (0, 0), out); bg.save('../notes/sheets/brown_final.png')
