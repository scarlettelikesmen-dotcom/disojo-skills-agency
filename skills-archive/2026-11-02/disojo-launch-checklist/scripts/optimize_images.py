#!/usr/bin/env python3
"""Shrink a folder of photos for the web without touching the originals.
usage: optimize_images.py <src_dir> <out_dir> [--max 2000] [--quality 82] [--webp]
- Resizes anything wider/taller than --max (default 2000 px long side).
- JPEG -> optimised progressive JPEG (or WebP with --webp). PNG with transparency -> WebP (alpha kept). Opaque PNG -> JPEG/WebP.
- Prints before/after sizes and flags any file still over the budget (250 KB; hero 400 KB).
Budget rationale: audited sites ranged from 1.3 MB (lean) to 44.8 MB (unoptimised property site) per home page; see disojo-site-archetypes."""
import os, sys
from PIL import Image, ImageOps

src, out = sys.argv[1], sys.argv[2]
mx = int(sys.argv[sys.argv.index('--max') + 1]) if '--max' in sys.argv else 2000
q = int(sys.argv[sys.argv.index('--quality') + 1]) if '--quality' in sys.argv else 82
webp = '--webp' in sys.argv
BUDGET = 250 * 1024
tot_b = tot_a = 0
os.makedirs(out, exist_ok=True)
for dp, _, fs in os.walk(src):
    for f in sorted(fs):
        ext = os.path.splitext(f)[1].lower()
        if ext not in ('.jpg', '.jpeg', '.png', '.webp'): continue
        p = os.path.join(dp, f)
        rel = os.path.relpath(dp, src)
        od = os.path.join(out, rel) if rel != '.' else out
        os.makedirs(od, exist_ok=True)
        im = ImageOps.exif_transpose(Image.open(p))
        alpha = im.mode in ('RGBA', 'LA') or 'transparency' in im.info
        if max(im.size) > mx:
            r = mx / max(im.size); im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
        base = os.path.splitext(f)[0]
        if alpha or webp or ext == '.webp':
            dst = os.path.join(od, base + '.webp'); im.save(dst, 'WEBP', quality=q, method=6)
        else:
            dst = os.path.join(od, base + '.jpg'); im.convert('RGB').save(dst, 'JPEG', quality=q, optimize=True, progressive=True)
        b, a = os.path.getsize(p), os.path.getsize(dst)
        tot_b += b; tot_a += a
        flag = '  OVER BUDGET' if a > BUDGET else ''
        print(f'{os.path.join(rel, f):50s} {b/1024:8.0f} KB -> {a/1024:6.0f} KB{flag}')
print(f'\nTOTAL {tot_b/1024/1024:.1f} MB -> {tot_a/1024/1024:.1f} MB')
