"""Summarise taste_probe output into numbers a designer can read.
python3 taste_summary.py <probeDir> [width=1512]  -> <probeDir>/summary-<w>.md and sheet-<w>.jpg
Type scale, families, weights, leading and tracking per size, colour by painted area (from the screens),
side margins and column lines, vertical gaps between blocks, media shapes and coverage, buttons and hovers."""
import json, sys, os, glob, collections, statistics as st
from PIL import Image
D = sys.argv[1]; W = sys.argv[2] if len(sys.argv) > 2 else '1512'
pages = sorted(glob.glob(f'{D}/{W}/*/measure.json'))
out = []; P = out.append
def rgb(c):
    try: return tuple(int(float(x)) for x in c[c.index('(') + 1:c.index(')')].split(',')[:3])
    except Exception: return None
def hexc(t): return '#%02x%02x%02x' % t
allT, allM, allC, allH = [], [], [], []
for f in pages:
    m = json.load(open(f)); slug = os.path.basename(os.path.dirname(f))
    for t in m['text']: t['page'] = slug
    allT += m['text']; allM += [dict(x, page=slug) for x in m['media']]; allC += [dict(x, page=slug) for x in m['ctl']]; allH += [dict(x, page=slug) for x in m.get('hover', [])]
P(f'# Taste summary: {D} at {W} ({len(pages)} pages)\n')
P('Pages: ' + ', '.join(os.path.basename(os.path.dirname(f)) for f in pages) + '\n')

# fonts
fam = collections.Counter();
for t in allT: fam[(t['fam'], t['wt'], t['style'])] += t['chars']
tot = sum(fam.values()) or 1
P('## Families and weights (share of all characters)')
for (f, w, s), n in fam.most_common(12): P(f'- {f} {w}{" italic" if s=="italic" else ""}: {100*n/tot:.1f}%')

# type scale
sz = collections.defaultdict(lambda: {'chars': 0, 'lh': [], 'ls': [], 'tt': collections.Counter(), 'wt': collections.Counter(), 'ex': [], 'measure': [], 'n': 0})
for t in allT:
    k = round(t['size']); d = sz[k]; d['chars'] += t['chars']; d['n'] += 1
    if t['lh']: d['lh'].append(t['lh'])
    d['ls'].append(t['ls']); d['tt'][t['tt']] += 1; d['wt'][t['wt']] += 1
    if t['chars'] > 60: d['measure'].append(t['measure'])
    if len(d['ex']) < 2 and t['chars'] > 3: d['ex'].append(t['t'][:40])
P('\n## Type scale (px at this width): runs, chars, leading, tracking (em), case, weight, measure, example')
P('| size | runs | chars | leading | tracking | case | weight | chars/line | example |\n|---|---|---|---|---|---|---|---|---|')
for k in sorted(sz, reverse=True):
    d = sz[k]
    if d['chars'] < 4: continue
    P(f"| {k} | {d['n']} | {d['chars']} | {st.median(d['lh']) if d['lh'] else '-'} | {st.median(d['ls'])} | {d['tt'].most_common(1)[0][0]} | {d['wt'].most_common(1)[0][0]} | {int(st.median(d['measure'])) if d['measure'] else '-'} | {' / '.join(d['ex'])} |")
sizes = sorted([k for k in sz if sz[k]['chars'] >= 20])
if len(sizes) > 1: P(f'\nDistinct sizes carrying 20+ chars: {len(sizes)}. Ratio largest/body: {sizes[-1]/max(1,sz and max(sz, key=lambda k: sz[k]["chars"])):.1f}. Body size (most chars): {max(sz, key=lambda k: sz[k]["chars"])}px.')

# text colours
tc = collections.Counter()
for t in allT:
    c = rgb(t['col'])
    if c: tc[hexc(c)] += t['chars']
P('\n## Text colours (share of characters)')
for c, n in tc.most_common(8): P(f'- {c}: {100*n/tot:.1f}%')

# painted colour from the screens: quantise every screen stop
cnt = collections.Counter(); px = 0
shots = sorted(glob.glob(f'{D}/{W}/*/s*.jpg'))
for s in shots:
    im = Image.open(s).convert('RGB').resize((151, 86))
    q = im.quantize(colors=8, method=Image.Quantize.MEDIANCUT).convert('RGB')
    for n, c in q.getcolors(151 * 86): cnt[tuple(v // 8 * 8 for v in c)] += n; px += n
P(f'\n## Painted colour across {len(shots)} screens (share of pixels, rounded)')
for c, n in cnt.most_common(12): P(f'- {hexc(c)}: {100*n/px:.1f}%')

# margins and columns
lefts = collections.Counter(round(t['x'] / 4) * 4 for t in allT if t['w'] > 20)
P('\n## Where text starts (left edge, px; column lines)')
P(', '.join(f'{x}px x{n}' for x, n in lefts.most_common(10)))
rights = collections.Counter(round((int(W) - t['x'] - t['w']) / 4) * 4 for t in allT if t['w'] > 200)
P('Right margins of wide text: ' + ', '.join(f'{x}px x{n}' for x, n in rights.most_common(6)))

# vertical gaps between consecutive text/media blocks in the same column
gaps = collections.Counter()
for f in pages:
    m = json.load(open(f))
    items = sorted([(b['y'], b['y'] + b['h'], b['x']) for b in m['text']] + [(b['y'], b['y'] + b['h'], b['x']) for b in m['media']])
    for (a0, a1, ax), (b0, b1, bx) in zip(items, items[1:]):
        g = b0 - a1
        if 4 <= g <= 400 and abs(ax - bx) < 40: gaps[round(g / 4) * 4] += 1
P('\n## Vertical gaps between stacked blocks in one column (px, most common)')
P(', '.join(f'{g} x{n}' for g, n in gaps.most_common(16)))

# media
P(f'\n## Media ({len(allM)} boxes)')
ars = collections.Counter(round(m['ar'], 1) for m in allM)
P('Aspect ratios: ' + ', '.join(f'{a} x{n}' for a, n in ars.most_common(10)))
wv = collections.Counter(round(m['wv'], 1) for m in allM)
P('Width as share of viewport: ' + ', '.join(f'{a} x{n}' for a, n in sorted(wv.items())))
rad = collections.Counter(m['radius'] for m in allM); P('Corner radius: ' + ', '.join(f'{a} x{n}' for a, n in rad.most_common(5)))
full = [m for m in allM if m['wv'] >= .95]; P(f'Full-bleed media: {len(full)}; kinds: {collections.Counter(m["kind"] for m in allM).most_common()}')

# controls
P(f'\n## Buttons and links ({len(allC)})')
anat = collections.Counter((round(c['size']), c['wt'], c['tt'], c['radius'], 'filled' if rgb(c['bg']) and not c['bg'].endswith(', 0)') else 'bare', c['pad']) for c in allC)
P('| size | weight | case | radius | fill | padding | count |\n|---|---|---|---|---|---|---|')
for (s_, w_, t_, r_, f_, p_), n in anat.most_common(12): P(f'| {s_} | {w_} | {t_} | {r_} | {f_} | {p_} | {n} |')
tr = collections.Counter(c['trans'][:90] for c in allC if c['trans'] and 'all 0s' not in c['trans']); P('\nTransitions on controls: ' + '; '.join(f'`{t}` x{n}' for t, n in tr.most_common(5)))
ch = collections.Counter()
for h in allH:
    b, a = h['before'], h['after']; k = []
    if b['bg'] != a['bg']: k.append('fill')
    if b['col'] != a['col']: k.append('colour')
    if b['tf'] != a['tf']: k.append('moves')
    if b['op'] != a['op']: k.append('opacity')
    if a.get('movedKids'): k.append('inner parts move')
    if h.get('cursor'): k.append('cursor ' + (h['cursor']['txt'] or 'dot'))
    ch['+'.join(k) or 'nothing measurable'] += 1
P('Hover changes (crops in each page folder, h<i>-0/1.jpg): ' + ', '.join(f'{k} x{n}' for k, n in ch.most_common()))

# words per screen
for f in pages:
    m = json.load(open(f)); vh = m['vh']; screens = max(1, m['docH'] / vh)
    words = sum(len(t['t'].split()) if t['chars'] <= 80 else t['chars'] / 6 for t in m['text'])
    P(f"\n{os.path.basename(os.path.dirname(f))}: {screens:.1f} screens, about {words/screens:.0f} words a screen, {len(m['media'])/screens:.1f} media a screen, ground {m['bodyBg']}")
open(f'{D}/summary-{W}.md', 'w').write('\n'.join(out))

# contact sheet of every stop
th = []
for d in sorted(glob.glob(f'{D}/{W}/*/')):
    for s in sorted(glob.glob(d + 's*.jpg')): th.append(Image.open(s).convert('RGB').resize((378, int(378 * Image.open(s).height / Image.open(s).width))))
if th:
    cols = 6; h = th[0].height; rows = (len(th) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * 382, rows * (h + 4)), 'white')
    for i, t in enumerate(th): sheet.paste(t, ((i % cols) * 382, (i // cols) * (h + 4)))
    sheet.save(f'{D}/sheet-{W}.jpg', quality=70)
print('\n'.join(out))
