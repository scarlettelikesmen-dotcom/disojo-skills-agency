import json, glob, os, re, sys, statistics as st
from collections import Counter
S = os.path.dirname(os.path.abspath(__file__))
src = json.load(open(f'{S}/urls.json'))
rows = []
for f in sorted(glob.glob(f'{S}/out/sites/*.json')):
    d = json.load(open(f))
    if d.get('err'): rows.append(d); continue
    d['group'] = src.get(d['url'], src.get(d['url'].rstrip('/') + '/', '?'))
    rows.append(d)
ok = [r for r in rows if not r.get('err')]
N = len(ok)
def pct(n): return f'{n}/{N} ({round(100*n/N)}%)' if N else '0'
out = {}
libs = Counter(); used = Counter(); fw = Counter(); fonts = Counter(); groups = Counter()
for r in ok:
    groups[r['group']] += 1
    L = set(r.get('libs') or [])
    for l in L:
        if l.startswith('use_'): used[l[4:]] += 1
        else: libs[l] += 1
    for x in r.get('fw') or []: fw[x] += 1
    for x in r.get('fonts') or []: fonts[x] += 1
def has(r, *names): return any(n in (r.get('libs') or []) for n in names)
smooth = [r for r in ok if r.get('smooth') or has(r, 'lenis', 'ScrollSmoother', 'locomotive') or 'lenis' in (r.get('hcls') or '')]
spa = [r for r in ok if (r.get('nav') or {}).get('spa')]
webgl = [r for r in ok if r.get('ctx')]
three = [r for r in ok if has(r, 'three', 'r3f')]
shader = [r for r in ok if (r.get('shaderCount') or 0) > 0]
cursor = [r for r in ok if (r.get('cursor') or {}).get('custom')]
split = [r for r in ok if (r.get('splitSpans') or 0) > 50]
gsap = [r for r in ok if has(r, 'gsap')]
video = [r for r in ok if r.get('vids')]
eases = Counter()
for r in ok:
    for k in (r.get('beziers') or {}):
        if k.startswith('custom:') or k.startswith('css:'):
            eases[k.split(':', 1)[1]] += 1
feat = Counter()
for r in ok:
    for k, v in (r.get('cssFeat') or {}).items():
        if v: feat[k] += 1
js = sorted(r.get('jsKB') or 0 for r in ok)
words = sorted(r.get('words') or 0 for r in ok)
lines = []
P = lines.append
P(f'# Study aggregate: {N} sites loaded, {len(rows)-N} failed')
P(f'groups: {dict(groups)}')
P(f'GSAP: {pct(len(gsap))} | smooth scroll: {pct(len(smooth))} | SPA page transitions: {pct(len(spa))} | custom cursor: {pct(len(cursor))} | split text (>50 spans): {pct(len(split))}')
P(f'WebGL context: {pct(len(webgl))} | three/r3f: {pct(len(three))} | shaders captured: {pct(len(shader))} | video: {pct(len(video))}')
P(f'JS KB median {st.median(js) if js else 0}, p25 {js[len(js)//4] if js else 0}, p75 {js[3*len(js)//4] if js else 0}')
P(f'words median {st.median(words) if words else 0}')
P('frameworks: ' + ', '.join(f'{k} {v}' for k, v in fw.most_common()))
P('libs present: ' + ', '.join(f'{k} {v}' for k, v in libs.most_common(40)))
P('libs used: ' + ', '.join(f'{k} {v}' for k, v in used.most_common(20)))
P('css features: ' + ', '.join(f'{k} {v}' for k, v in feat.most_common()))
P('custom eases (sites using): ' + ', '.join(f'[{k}] {v}' for k, v in eases.most_common(25)))
P('fonts: ' + ', '.join(f'{k} {v}' for k, v in fonts.most_common(40)))
P('\n## per site')
for r in sorted(ok, key=lambda r: r['name']):
    P(f"- {r['name']} [{r['group']}] fw={','.join(r.get('fw') or [])} gl={'Y' if r.get('ctx') else '-'} sh={r.get('shaderCount') or 0} three={r.get('threeRev') or '-'} smooth={'Y' if r in smooth else '-'} spa={'Y' if r in spa else '-'} cur={'Y' if r in cursor else '-'} split={r.get('splitSpans') or 0} js={r.get('jsKB')} words={r.get('words')} libs={','.join(l for l in (r.get('libs') or []) if not l.startswith('use_'))}")
P('\n## failed')
for r in rows:
    if r.get('err'): P(f"- {r.get('url')}: {str(r['err'])[:100]}")
open(f'{S}/aggregate.md', 'w').write('\n'.join(lines))
print('\n'.join(lines[:12]))
