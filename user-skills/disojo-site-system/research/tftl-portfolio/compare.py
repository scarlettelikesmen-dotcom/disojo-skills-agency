"""Template or unique? python3 compare.py  (reads fp/*.json, live/*/1512/*/measure.json) -> compare.md
Shared own-script hashes = same code shipped twice. Jaccard on data attributes, CSS variables, classes and eases
= same naming system. Plus per-site design numbers (fonts, sizes, ground colour) to show how the look differs."""
import json, glob, os, itertools, collections, statistics as st
D = os.path.dirname(os.path.abspath(__file__)); out = []; P = out.append
fps = {}
for f in glob.glob(f'{D}/fp/*.json'):
    o = json.load(open(f))
    if not o.get('err'): fps[o['s']] = o
def J(a, b): a, b = set(a), set(b); return len(a & b) / max(1, len(a | b))
GENERIC = {'w-inline-block', 'w-embed', 'w-richtext', 'w-dyn-list', 'w-dyn-items', 'w-dyn-item', 'w-condition-invisible', 'w-script', 'w-mod-js', 'w-mod-ix', 'w-form', 'w-button', 'w-nav', 'w-container', 'w-layout-grid', 'w-variant', 'w--current', 'w-background-video', 'w-webflow-badge', 'container', 'wrapper', 'section', 'active', 'is-active', 'hidden', 'visible', 'img', 'image', 'link', 'button', 'btn', 'title', 'text'}
def cls(o): return [c for c in o.get('cls', []) if c not in GENERIC and not c.startswith(('w-', 'wf-', 'lenis', 'data-v-'))]
def dat(o): return [a for a in o.get('dattr', []) if not a.startswith(('data-wf', 'data-w-', 'data-v-', 'data-n-', 'data-gtm', 'data-astro', 'data-framer'))]
P(f'# TFTL portfolio: template or unique? ({len(fps)} live sites fingerprinted)\n')
plat = collections.Counter(','.join(sorted(o.get('platform') or ['other'])) for o in fps.values())
P('## Platforms\n' + ', '.join(f'{k} x{n}' for k, n in plat.most_common()))
sha = collections.defaultdict(set)
for s, o in fps.items():
    for sc in o.get('own', []):
        if sc['kb'] >= 3: sha[sc['sha']].add((s, sc['u'], sc['kb']))
shared = {k: v for k, v in sha.items() if len({x[0] for x in v}) > 1}
P(f'\n## Identical own scripts shipped on more than one site: {len(shared)}')
for k, v in sorted(shared.items(), key=lambda x: -len(x[1]))[:25]:
    P(f'- `{k}` {sorted(v)[0][1]} ({sorted(v)[0][2]}KB) on: ' + ', '.join(sorted({x[0] for x in v})))
names = sorted(fps)
pairs = []
for a, b in itertools.combinations(names, 2):
    A, B = fps[a], fps[b]
    pairs.append((round(J(dat(A), dat(B)), 2), round(J(A.get('vars', []), B.get('vars', [])), 2), round(J(cls(A), cls(B)), 2), a, b))
P('\n## Most similar pairs (data attributes / CSS variables / classes, Jaccard 0 to 1)')
for d, v, c, a, b in sorted(pairs, key=lambda x: -(x[0] + x[1] + x[2]))[:30]: P(f'- {a} + {b}: data {d}, vars {v}, classes {c}')
P(f'\nMedian over all {len(pairs)} pairs: data {st.median(p[0] for p in pairs)}, vars {st.median(p[1] for p in pairs)}, classes {st.median(p[2] for p in pairs)}')
# shared vocabulary across many sites
for label, fn in [('data attributes', dat), ('CSS variables', lambda o: o.get('vars', [])), ('classes', cls)]:
    cnt = collections.Counter(x for o in fps.values() for x in set(fn(o)))
    P(f'\n## {label} found on 5+ sites\n' + ', '.join(f'`{k}` {n}' for k, n in cnt.most_common(60) if n >= 5))
ease = collections.Counter(e for o in fps.values() for e in set(x for sc in o.get('own', []) for x in sc.get('eases', []) + sc.get('beziers', [])))
P('\n## Eases written in their own code, by number of sites\n' + '\n'.join(f'- `{k}` {n}' for k, n in ease.most_common(25)))
fonts = collections.Counter(f for o in fps.values() for f in set(o.get('fonts', [])))
P(f'\n## Fonts ({len(fonts)} different families across {len(fps)} sites)\n' + ', '.join(f'{k} x{n}' for k, n in fonts.most_common(40)))
# design numbers per site from the walk
P('\n## Per site: platform, fonts, ground, display max, body, sizes, words a screen, media a screen, radius of media')
P('| site | platform | fonts | ground | max px | body px | sizes | words/scr | media/scr | media radius |\n|---|---|---|---|---|---|---|---|---|---|')
for s in names:
    ms = [json.load(open(f)) for f in glob.glob(f'{D}/live/{s}/1512/*/measure.json')]
    if not ms: P(f'| {s} | {",".join(fps[s].get("platform") or [])} | {", ".join(fps[s].get("fonts", [])[:3])} | {fps[s].get("bodyBg")} | - | - | - | - | - | - |'); continue
    T = [t for m in ms for t in m['text']]; M = [x for m in ms for x in m['media']]
    ch = collections.Counter()
    for t in T: ch[round(t['size'])] += t['chars']
    scr = sum(max(1, m['docH'] / m['vh']) for m in ms)
    words = sum(len(t['t'].split()) if t['chars'] <= 80 else t['chars'] / 6 for t in T)
    rad = collections.Counter(x['radius'] for x in M).most_common(1)
    P(f"| {s} | {','.join(fps[s].get('platform') or [])} | {', '.join(fps[s].get('fonts', [])[:3])} | {ms[0]['bodyBg']} | {max(ch) if ch else '-'} | {max(ch, key=ch.get) if ch else '-'} | {sum(1 for k in ch if ch[k] >= 20)} | {words/scr:.0f} | {len(M)/scr:.1f} | {rad[0][0] if rad else '-'} |")
open(f'{D}/compare.md', 'w').write('\n'.join(out)); print('\n'.join(out[:60]))
