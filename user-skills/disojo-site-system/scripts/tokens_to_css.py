#!/usr/bin/env python3
"""Turn a direction's tokens.json into tokens.css: fluid type and spacing (clamp between viewport min and max),
named palette with alpha steps, colour roles, units, radius family, named eases, the 12-column grid,
and the Google Fonts <link> href. Old tokens.json files (colors with hex, no palette) still work.
usage: python3 tokens_to_css.py tokens.json out.css   (prints the fonts href)"""
import json, sys, urllib.parse
t = json.load(open(sys.argv[1])); out = sys.argv[2]
vmin, vmax = t['viewport']['min'], t['viewport']['max']
def fluid(a, b):  # px at vmin -> px at vmax, expressed in rem + vw
    if a == b: return f'{a/16:.4g}rem'
    slope = (b - a) / (vmax - vmin); inter = a - slope * vmin
    return f'clamp({a/16:.4g}rem, {inter/16:.4g}rem + {slope*100:.4g}vw, {b/16:.4g}rem)'
fam = {k: f"'{v['family']}', {'ui-monospace, monospace' if k == 'mono' else 'system-ui, sans-serif'}" for k, v in t['fonts'].items() if v}
L = [':root {']
for k, v in fam.items(): L.append(f'  --f-{k}: {v};')
for role, s in t['scale'].items():
    L += [f'  --t-{role}: {fluid(s["min"], s["max"])};', f'  --t-{role}-w: {s["weight"]};', f'  --t-{role}-ls: {s["tracking"]}em;', f'  --t-{role}-lh: {s["leading"]};', f'  --t-{role}-f: var(--f-{s["font"]});']
# named palette, each with alpha steps (greys are the ink at lower alpha, never new colours)
pal = {k: v for k, v in (t.get('palette') or {}).items() if not k.startswith('_') and v}
steps = t.get('alpha_steps', [60, 30, 10, 5])
for k, c in pal.items():
    L.append(f'  --c-{k}: {c["hex"]};')
    for a in steps: L.append(f'  --c-{k}-{a}: color-mix(in srgb, {c["hex"]} {a}%, transparent);')
for k, c in t['colors'].items():
    if k.startswith('_') or not c: continue
    if 'use' in c:
        ref = f'var(--c-{c["use"]}-{c["alpha"]})' if c.get('alpha') else f'var(--c-{c["use"]})'
        if k != c['use'] or c.get('alpha'): L.append(f'  --c-{k}: {ref};')
    elif 'hex' in c: L.append(f'  --c-{k}: {c["hex"]};')
for u in t.get('units', []): L.append(f'  --u-{u}: {fluid(max(16, round(u * .5)), u) if u > 16 else f"{u/16:.4g}rem"};')  # phone keeps half, never under 16
# spacing: the reference framework's steps (rem min-max), and section rhythm
for i, (a, b) in enumerate([(.375, .5), (.625, .75), (.875, 1), (1.25, 1.5), (1.75, 2), (2, 2.5), (2.25, 3), (3, 4.5)], 1):
    L.append(f'  --s-{i}: {fluid(a*16, b*16)};')
for k, (a, b) in {'sm': (3, 5), 'md': (4, 7), 'lg': (5.5, 10), 'top': (7, 14)}.items():
    L.append(f'  --sec-{k}: {fluid(a*16, b*16)};')
L += ['  --gutter: ' + fluid(16, 24) + ';', '  --cols: 12;', '  --wrap: min(100% - 2 * var(--gutter), 1760px);',
      '  --col: calc((var(--wrap) - (var(--cols) - 1) * var(--gutter)) / var(--cols));']
R = {'sharp': ('3px', '3px'), 'soft': ('8px', '16px'), 'round': ('20px', '32px'), 'pill': ('999px', '20px')}.get(t['radius'], ('3px', '3px'))
L += [f'  --r-ctl: {R[0]};', f'  --r-card: {R[1]};']
m = t['motion']
L += [f'  --e-io: {m["easeInOut"]};', f'  --e-out: {m["easeOut"]};', f'  --d-fast: {m["fast"]}s;', f'  --d-base: {m["base"]}s;', f'  --d-slow: {m["slow"]}s;']
for k, v in (m.get('eases') or {}).items(): L.append(f'  --e-{k}: cubic-bezier({v});')
if 'stagger' in m: L.append(f'  --d-stagger: {m["stagger"]}s;')
L.append('}')
for role in t['scale']:
    upper = 'text-transform:uppercase;' if t['scale'][role].get('upper') else ''
    L.append(f'.t-{role}{{font-family:var(--t-{role}-f);font-size:var(--t-{role});font-weight:var(--t-{role}-w);letter-spacing:var(--t-{role}-ls);line-height:var(--t-{role}-lh);{upper}}}')
open(out, 'w').write('\n'.join(L) + '\n')
W = {}
for k, v in t['fonts'].items():
    if v and v.get('source') == 'google': W.setdefault(v['family'], set()).update(v['weights'])
q = [f"family={urllib.parse.quote_plus(f)}:wght@{';'.join(str(w) for w in sorted(ws))}" for f, ws in W.items()]
print('https://fonts.googleapis.com/css2?' + '&'.join(q) + '&display=swap' if q else '')
