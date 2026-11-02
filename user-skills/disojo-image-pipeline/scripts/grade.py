"""Grade any photo into one house look so a set of images reads as one studio's work.

python3 grade.py <in> <out_basename> [--look graphite|mono|warm|none] [--grain 0.06] [--vignette 0.25]
                 [--crop 16:10] [--focus 0.5,0.5] [--width 2400]

Writes <out_basename>-<width>.webp and <out_basename>-<width//2>.webp (for srcset) and prints both paths.
Looks:
  graphite  black and white, tinted between the Disojo ink #0D1318 and paper #D8E2EC (the site palette)
  mono      neutral black and white, slightly lifted blacks (film)
  warm      colour kept, desaturated 25%, warm highlights, lifted blacks (the Monolog family)
  none      colour untouched (still cropped, grained, resized)
Grain is monochrome, sized for the output width, applied after the grade so it reads as film, not noise.
Pillow only (no numpy). Never upscale: if the source is smaller than --width, the output stays at source width
and the script says so (a soft full-bleed photo is worse than a smaller sharp one).
"""
import argparse
import sys
from PIL import Image, ImageOps, ImageEnhance, ImageFilter, ImageChops


def hexrgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def crop_to(im, ratio, focus):
    if not ratio:
        return im
    a, b = (float(x) for x in ratio.split(':'))
    want = a / b
    w, h = im.size
    fx, fy = focus
    if w / h > want:
        nw = int(h * want)
        x = int(min(max(fx * w - nw / 2, 0), w - nw))
        return im.crop((x, 0, x + nw, h))
    nh = int(w / want)
    y = int(min(max(fy * h - nh / 2, 0), h - nh))
    return im.crop((0, y, w, y + nh))


def curve(im, lift=0, gamma=1.0, crush=255):
    lut = []
    for i in range(256):
        v = (i / 255) ** gamma
        lut.append(int(lift + v * (crush - lift)))
    return im.point(lut * (3 if im.mode == 'RGB' else 1))


def grade(im, look):
    if look == 'graphite':
        g = ImageOps.grayscale(im)
        g = ImageOps.autocontrast(g, cutoff=0.6)
        g = curve(g, lift=10, gamma=1.08, crush=246)
        return ImageOps.colorize(g, black=hexrgb('#0D1318'), white=hexrgb('#D8E2EC'), mid=hexrgb('#6B7681'))
    if look == 'mono':
        g = ImageOps.grayscale(im)
        g = ImageOps.autocontrast(g, cutoff=0.6)
        return curve(g, lift=14, gamma=1.05, crush=245).convert('RGB')
    if look == 'warm':
        c = ImageEnhance.Color(im).enhance(0.75)
        c = curve(c, lift=12, gamma=1.03, crush=248)
        r, g, b = c.split()
        r = r.point(lambda v: min(255, int(v * 1.035)))
        b = b.point(lambda v: int(v * 0.96))
        return Image.merge('RGB', (r, g, b))
    return im


def vignette(im, amount):
    if amount <= 0:
        return im
    w, h = im.size
    m = Image.new('L', (w // 8 or 1, h // 8 or 1), 0)
    mw, mh = m.size
    px = m.load()
    for y in range(mh):
        for x in range(mw):
            dx, dy = (x / mw - .5) * 2, (y / mh - .5) * 2
            d = min(1.0, (dx * dx + dy * dy) ** .5 / 1.25)
            px[x, y] = int(255 * (d ** 2.2) * amount)
    m = m.resize((w, h), Image.BILINEAR).filter(ImageFilter.GaussianBlur(w / 60))
    dark = Image.new('RGB', (w, h), (0, 0, 0))
    return Image.composite(dark, im, m)


def grain(im, amount):
    if amount <= 0:
        return im
    w, h = im.size
    scale = 1.6 if w >= 1600 else 1.2  # grain grain-size relative to output
    n = Image.effect_noise((int(w / scale), int(h / scale)), 64).resize((w, h), Image.BILINEAR)
    n = n.point(lambda v: 128 + (v - 128))
    n = Image.merge('RGB', (n, n, n))
    return ImageChops.blend(im, ImageChops.overlay(im, n), amount * 4)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src')
    ap.add_argument('out')
    ap.add_argument('--look', default='graphite', choices=['graphite', 'mono', 'warm', 'none'])
    ap.add_argument('--grain', type=float, default=0.06)
    ap.add_argument('--vignette', type=float, default=0.25)
    ap.add_argument('--crop', default='')
    ap.add_argument('--focus', default='0.5,0.5')
    ap.add_argument('--width', type=int, default=2400)
    ap.add_argument('--quality', type=int, default=82)
    a = ap.parse_args()
    im = ImageOps.exif_transpose(Image.open(a.src)).convert('RGB')
    im = crop_to(im, a.crop, tuple(float(x) for x in a.focus.split(',')))
    if im.width < a.width:
        print(f'note: source is {im.width}px wide, smaller than {a.width}; not upscaling. '
              f'Full-bleed on a 1512 Retina screen needs about 3000px.', file=sys.stderr)
    W = min(a.width, im.width)
    im = im.resize((W, int(im.height * W / im.width)), Image.LANCZOS) if im.width != W else im
    im = grade(im, a.look)
    im = vignette(im, a.vignette)
    outs = []
    for w in (W, W // 2):
        v = im if w == W else im.resize((w, int(im.height * w / W)), Image.LANCZOS)
        v = grain(v, a.grain)
        p = f'{a.out}-{w}.webp'
        v.save(p, 'WEBP', quality=a.quality, method=6)
        outs.append(p)
    print('\n'.join(outs))


if __name__ == '__main__':
    main()
