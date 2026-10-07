#!/usr/bin/env python3
"""Inventory a folder of client assets and flag what will cause trouble.
usage: inventory_assets.py <folder> [--md out.md]
Reports for every image: size, dimensions, orientation, transparency, and flags (too small, too big, wrong format, looks like a screenshot).
For video: duration, fps, resolution, size (needs ffprobe). Lists documents and unknown files. Ends with a hero/products readiness summary.
It cannot judge content (is the label readable? is it the real product?): open the files and look. Needs: pip install pillow."""
import os, sys, json, subprocess
from PIL import Image

IMG = {'.jpg', '.jpeg', '.png', '.webp', '.avif', '.heic', '.tif', '.tiff'}
VID = {'.mp4', '.mov', '.webm', '.m4v', '.avi', '.mkv'}
DOC = {'.pdf', '.doc', '.docx', '.txt', '.md', '.xls', '.xlsx', '.csv', '.ai', '.psd', '.fig', '.svg', '.eps'}

def kb(n): return f"{n/1024:.0f} KB" if n < 1024*1024 else f"{n/1024/1024:.1f} MB"

def probe_video(p):
    try:
        out = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height,r_frame_rate,duration:format=duration',
                              '-of', 'json', p], capture_output=True, text=True, timeout=30).stdout
        j = json.loads(out); s = j['streams'][0]
        n, d = s['r_frame_rate'].split('/'); fps = float(n) / float(d or 1)
        dur = float(s.get('duration') or j['format'].get('duration') or 0)
        return s['width'], s['height'], fps, dur
    except Exception:
        return None

def main():
    root = sys.argv[1]
    md = sys.argv[sys.argv.index('--md') + 1] if '--md' in sys.argv else None
    rows, flags = [], []
    counts = {'img': 0, 'vid': 0, 'doc': 0, 'other': 0}
    hero_img = hero_vid = 0
    for dp, _, fs in os.walk(root):
        for f in sorted(fs):
            if f.startswith('.'): continue
            p = os.path.join(dp, f); rel = os.path.relpath(p, root); ext = os.path.splitext(f)[1].lower(); size = os.path.getsize(p)
            if ext in IMG:
                counts['img'] += 1
                try:
                    im = Image.open(p); w, h = im.size
                    alpha = im.mode in ('RGBA', 'LA') or 'transparency' in im.info
                except Exception:
                    rows.append((rel, 'image', 'unreadable (HEIC/AVIF? convert first)', kb(size))); flags.append(f"{rel}: could not open"); continue
                short = min(w, h); ori = 'landscape' if w > h * 1.15 else 'portrait' if h > w * 1.15 else 'square'
                note = []
                if (ori != 'portrait' and short < 1000) or (ori == 'portrait' and max(w, h) < 1200): note.append('LOW-RES (too small for a full-width photo)')
                if size > 3 * 1024 * 1024: note.append('HEAVY (>3 MB, will be compressed)')
                if ext == '.png' and not alpha and size > 1024 * 1024: note.append('opaque PNG: convert to JPG/WebP')
                if ext in ('.heic', '.avif'): note.append('convert to JPG')
                if (w, h) in {(1170, 2532), (1179, 2556), (1284, 2778), (1290, 2796), (1080, 2340), (1080, 1920), (1440, 900), (2880, 1800), (1512, 982)}: note.append('looks like a SCREENSHOT')
                if ori == 'landscape' and w >= 1920: hero_img += 1
                rows.append((rel, f'image {ori}' + (' +alpha' if alpha else ''), f'{w}x{h}', kb(size) + ('  ' + '; '.join(note) if note else '')))
                flags += [f'{rel}: {n}' for n in note]
            elif ext in VID:
                counts['vid'] += 1
                v = probe_video(p)
                if v:
                    w, h, fps, dur = v; note = []
                    if h < 1080 and w < 1920: note.append('under 1080p')
                    if size > 40 * 1024 * 1024: note.append('HEAVY (>40 MB)')
                    if 4 <= dur <= 20: hero_vid += 1
                    rows.append((rel, 'video', f'{w}x{h} {fps:.0f}fps {dur:.1f}s', kb(size) + ('  ' + '; '.join(note) if note else '')))
                    flags += [f'{rel}: {n}' for n in note]
                else:
                    rows.append((rel, 'video', 'ffprobe unavailable', kb(size)))
            elif ext in DOC:
                counts['doc'] += 1; rows.append((rel, 'document', ext, kb(size)))
            else:
                counts['other'] += 1; rows.append((rel, 'other', ext or '-', kb(size)))
    lines = [f'# Asset inventory: {root}', '', f"{counts['img']} images, {counts['vid']} videos, {counts['doc']} documents, {counts['other']} other", '',
             '| file | type | dimensions | size / notes |', '|---|---|---|---|']
    lines += [f'| {r[0]} | {r[1]} | {r[2]} | {r[3]} |' for r in rows]
    lines += ['', '## Flags', *(['- ' + f for f in flags] or ['- none']), '', '## Readiness (heuristic)',
              f'- Hero still candidates (landscape, 1920px+): {hero_img}', f'- Hero video candidates (4-20 s): {hero_vid}',
              '- Products: count the product photos by eye and match them to the product list; one clean straight-on shot per product is the minimum.']
    out = '\n'.join(lines)
    print(out)
    if md: open(md, 'w').write(out + '\n')

if __name__ == '__main__': main()
