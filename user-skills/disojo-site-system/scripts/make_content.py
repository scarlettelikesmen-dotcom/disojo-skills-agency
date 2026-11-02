#!/usr/bin/env python3
"""Stage 1b: turn research/pages/*.json (from intake.cjs) into the site's content, word for word.
  python3 make_content.py <projectDir> [--no-images]
Writes, inside <project>/site:
  src/data/pages/<slug>.json   {route, title, desc, h1, body:[blocks]}  (links made local, li grouped into ul)
  src/data/site.json           {name, origin, nav, footer, tel, mail, social, address, logo}
  src/data/images.json         original URL -> {n, w, h}; files in public/img/<n>.webp (2000px) and <n>-s.webp (720px)
  src/data/redirects.json      old path -> new route (identity by default; edit when routes change)
and <project>/research/inventory.md: pages, word counts, forms, embeds, images, contacts, and GAPS.
Nothing is rewritten or invented: strings are copied as published; this script only sorts them."""
import json, re, os, sys, glob, hashlib, subprocess, urllib.request
from urllib.parse import urlparse
PROJ = os.path.abspath(sys.argv[1]); NOIMG = '--no-images' in sys.argv
R = os.path.join(PROJ, 'research'); SITE = os.path.join(PROJ, 'site')
DATA = os.path.join(SITE, 'src', 'data'); PDIR = os.path.join(DATA, 'pages'); IMG = os.path.join(SITE, 'public', 'img'); RAW = os.path.join(R, 'img-raw')
for d in (PDIR, IMG, RAW): os.makedirs(d, exist_ok=True)
crawl = json.load(open(os.path.join(R, 'crawl.json'))); chrome = json.load(open(os.path.join(R, 'chrome.json'))) if os.path.exists(os.path.join(R, 'chrome.json')) else {}
origin = '{0.scheme}://{0.netloc}'.format(urlparse(crawl['start'])); host = urlparse(origin).netloc.replace('www.', '')
pages = {os.path.basename(f)[:-5]: json.load(open(f)) for f in glob.glob(os.path.join(R, 'pages', '*.json'))}
route_of = lambda slug: '/' if slug == 'home' else '/' + slug.replace('__', '/') + '/'
ROUTES = {route_of(s) for s in pages}

def local(u):
    """Links to crawled pages become local routes; everything else (files, other sites) stays as published."""
    if not u: return u
    p = urlparse(u)
    if not p.netloc and p.path.startswith('/'): p = urlparse(origin + u)  # relative links in body copy
    elif p.netloc.replace('www.', '') != host: return u
    path = p.path if p.path.endswith('/') or re.search(r'\.\w{2,5}$', p.path) else p.path + '/'
    path = re.sub(r'/index\.html?/$', '/', path)
    return (path if path in ROUTES else u) + (('#' + p.fragment) if p.fragment else '')

def fix_html(h): return re.sub(r'href="([^"]+)"', lambda m: 'href="%s"' % local(m.group(1).replace('&amp;', '&')).replace('&', '&amp;'), h or '')

# chrome text repeated on most pages (cookie bars, newsletter boxes) is dropped from bodies, listed in the inventory
from collections import Counter
rep = Counter(); [rep.update({(b.get('x') or '').strip() for b in d['blocks'] if b['t'] in ('p', 'tx', 'h2', 'h3', 'h4', 'li')}) for d in pages.values()]
REPEATED = {x for x, n in rep.items() if x and len(pages) >= 6 and n >= max(4, int(len(pages) * .6))}

def body(blocks):
    out, seen = [], set()
    for b in blocks:
        t, x = b['t'], (b.get('x') or '').strip()
        if x in REPEATED: continue
        key = (t, x, b.get('src'));
        if key in seen and t != 'li': continue
        seen.add(key)
        if t in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'): out.append({'t': 'h1' if t == 'h1' else ('h4' if t in ('h5', 'h6') else t), 'x': x, **({'href': local(b['href'])} if b.get('href') else {})})
        elif t in ('p', 'quote'): out.append({'t': t, 'h': fix_html(b.get('h') or x)})
        elif t == 'li':
            item = fix_html(b.get('h') or x)
            if out and out[-1]['t'] == 'ul': out[-1]['items'].append(item)
            else: out.append({'t': 'ul', 'items': [item]})
        elif t == 'tx' and len(x) > 2: out.append({'t': 'tx', 'x': x})
        elif t == 'a': out.append({'t': 'link', 'x': x, 'href': local(b['href'])})
        elif t == 'img': out.append({'t': 'img', 'src': b['src'], 'alt': b.get('alt', ''), **({'bg': True} if b.get('bg') else {})})
        elif t in ('embed', 'form', 'table'): out.append({k: v for k, v in b.items()})
    return out

all_imgs = []
for slug, d in pages.items():
    bd = body(d['blocks']); all_imgs += [b['src'] for b in bd if b['t'] == 'img']
    if d.get('ogImage'): all_imgs.append(d['ogImage'])
    json.dump({'route': route_of(slug), 'source': d['url'], 'title': d['title'], 'desc': d.get('desc', ''), 'h1': d.get('h1', ''), 'ogImage': d.get('ogImage', ''), 'body': bd},
              open(os.path.join(PDIR, slug + '.json'), 'w'), indent=1, ensure_ascii=False)

for l in chrome.get('logo', []):
    if l.get('img'): all_imgs.append(l['img'])

# images: self-host as WebP (no hotlinking: some CDNs block it), never upscale
imap = {}
if not NOIMG:
    try: from PIL import Image
    except ImportError: Image = None
    for u in dict.fromkeys(all_imgs):
        if not u or u.startswith('data:') or not u.startswith('http'): continue
        if u.lower().split('?')[0].endswith('.svg'):  # vector: copy as-is (logos, icons)
            n = re.sub(r'[^a-z0-9]+', '-', os.path.splitext(urlparse(u).path.split('/')[-1])[0].lower()).strip('-')[:50] + '-' + hashlib.md5(u.encode()).hexdigest()[:5]
            dst = os.path.join(IMG, n + '.svg')
            if not os.path.exists(dst):
                try: open(dst, 'wb').write(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read())
                except Exception as e: print('svg FAIL', u[:90], e); continue
            imap[u] = {'n': n, 'w': 0, 'h': 0, 'svg': True}; continue
        base = re.sub(r'[^a-z0-9]+', '-', os.path.splitext(urlparse(u).path.split('/')[-1])[0].lower()).strip('-')[:50] or 'img'
        n = base + '-' + hashlib.md5(u.encode()).hexdigest()[:5]
        raw = os.path.join(RAW, n)
        if not os.path.exists(raw):
            try: open(raw, 'wb').write(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read())
            except Exception as e: print('image FAIL', u[:90], e); continue
        w0 = Image.open(raw).width if Image else 9999
        for suf, w in (('', 2000), ('-s', 720)):
            dst = os.path.join(IMG, n + suf + '.webp')
            if not os.path.exists(dst):
                args = ['cwebp', '-quiet', '-q', '80'] + (['-resize', str(w), '0'] if w0 > w else []) + [raw, '-o', dst]
                subprocess.run(args, check=False)
        if os.path.exists(os.path.join(IMG, n + '.webp')):
            im = Image.open(os.path.join(IMG, n + '.webp')) if Image else None
            imap[u] = {'n': n, 'w': im.width if im else 0, 'h': im.height if im else 0}
    for i, l in enumerate(chrome.get('logo', [])):
        if l.get('svg'): open(os.path.join(IMG, f'logo-inline-{i}.svg'), 'w').write(l['svg'] if 'xmlns' in l['svg'] else l['svg'].replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"', 1))
    json.dump(imap, open(os.path.join(DATA, 'images.json'), 'w'), indent=1)

home = pages.get('home', {})
name = (re.split(r'\s[|\-–—·:]\s', home.get('title', '')) or [''])[-1].strip() or host
json.dump({'name': name, 'origin': origin, 'nav': chrome.get('nav', []), 'footer': chrome.get('footer', []), 'footerText': chrome.get('footerText', ''),
           'tel': chrome.get('tel', []), 'mail': chrome.get('mail', []), 'social': chrome.get('social', []), 'address': chrome.get('address', ''),
           'logo': chrome.get('logo', []), 'icons': chrome.get('icons', [])}, open(os.path.join(DATA, 'site.json'), 'w'), indent=1, ensure_ascii=False)
json.dump({route_of(s): route_of(s) for s in pages if s != 'home'}, open(os.path.join(DATA, 'redirects.json'), 'w'), indent=1)

# inventory with gaps
L = [f'# Inventory: {name}', '', f'Source {origin}, crawled {crawl["at"][:10]}. Pages saved: {len(pages)}' + (' (CAPPED, raise maxPages)' if crawl.get('capped') else '') + f'. Sitemap URLs: {crawl["fromSitemap"]}.', '']
fails = [p for p in crawl['pages'] if not p.get('slug')]
if fails: L += ['**Pages that failed to load:** ' + ', '.join(f"{p['url']} ({p['status']})" for p in fails), '']
L += ['## Contacts and links (from the header and footer)', f'- Phone: {chrome.get("tel") or "NONE FOUND"}', f'- Email: {chrome.get("mail") or "NONE FOUND"}', f'- Address guess: {chrome.get("address") or "NONE FOUND"} (verify)', f'- Social: {chrome.get("social") or "none"}', f'- Logo candidates: {len(chrome.get("logo", []))} (check research/source-shots)', '']
L += ['## Pages', '| Route | Words | Imgs | Forms | Embeds | Title |', '|---|---|---|---|---|---|']
tw = 0
for s in sorted(pages, key=lambda s: (s != 'home', s)):
    b = json.load(open(os.path.join(PDIR, s + '.json')))['body']
    w = sum(len(re.sub('<[^>]+>', '', x.get('h') or x.get('x') or ' '.join(x.get('items', []))).split()) for x in b); tw += w
    L.append(f"| {route_of(s)} | {w} | {sum(x['t']=='img' for x in b)} | {sum(x['t']=='form' for x in b)} | {sum(x['t']=='embed' for x in b)} | {pages[s]['title'][:60]} |")
L += ['', f'Total words: {tw}. Images self-hosted: {len(imap)}.', '', '## Forms (must be wired or replaced before launch)']
for s, d in pages.items():
    for b in d['blocks']:
        if b['t'] == 'form': L.append(f"- {route_of(s)}: action `{b.get('action','')}` fields {[f.get('label') or f.get('name') for f in b['fields']]}")
L += ['', '## Repeated text dropped from bodies (site chrome)'] + [f'- {x[:120]}' for x in sorted(REPEATED)]
L += ['', '## GAPS (ask, never invent)', '- Real photography quality: check source-shots; list any page that has no image of its own.', '- Proof numbers, reviews, prices: only what is published above.', '- Anything the directions need that is not in this file goes in the brief under "Missing".']
open(os.path.join(R, 'inventory.md'), 'w').write('\n'.join(L) + '\n')
print(f'{len(pages)} pages, {tw} words, {len(imap)} images -> {SITE}; inventory at research/inventory.md')
