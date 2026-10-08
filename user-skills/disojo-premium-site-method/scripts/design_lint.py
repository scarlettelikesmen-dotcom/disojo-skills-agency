#!/usr/bin/env python3
"""Mechanical anti-slop / quality lint for a Vite+React site. usage: python3 design_lint.py <project-dir>
Checks what the design skills say can be checked by grep (see references/quality-gates.md for the human checks).
Exit 1 if any FAIL. WARN items need a conscious, written decision (list them in the README 'deliberate deviations')."""
import re, sys, os, collections
root = sys.argv[1] if len(sys.argv) > 1 else '.'
src = os.path.join(root, 'src')
files = [os.path.join(d, f) for d, _, fs in os.walk(src) for f in fs if f.endswith(('.jsx', '.js', '.css', '.html'))]
files.append(os.path.join(root, 'index.html'))
fails, warns = [], []
def add(lst, f, i, msg, line): lst.append(f'{os.path.relpath(f, root)}:{i}: {msg}  | {line.strip()[:90]}')
cls_def = collections.defaultdict(set)
upper_tracking = 0
for f in files:
    if not os.path.exists(f): continue
    for i, line in enumerate(open(f, encoding='utf8', errors='ignore'), 1):
        is_css = f.endswith('.css'); is_code = f.endswith(('.jsx', '.js'))
        if re.search('[—–]', line): add(fails, f, i, 'em/en dash (banned everywhere visible; use hyphen)', line)
        if re.search(r'transition:\s*all\b|transition-property:\s*all', line): add(fails, f, i, 'transition: all', line)
        if re.search(r'will-change:\s*all', line): add(fails, f, i, 'will-change: all', line)
        if re.search(r'(transition|animation)[^;{]*\b(ease-in-out|ease-in)\b', line): add(fails, f, i, 'ease-in / ease-in-out on UI motion', line)
        if re.search(r'(transition|animation)[^;{]*\blinear\b', line): add(warns, f, i, 'linear easing (ok only for marquee/constant-velocity)', line)
        if re.search(r"font-family:[^;]*\b(Inter|Roboto|Arial|Open Sans|Helvetica)\b", line) and 'system-ui' not in line.split('Inter')[0]: add(fails, f, i, 'banned font', line)
        if re.search(r'Instrument|Fraunces', line): add(fails, f, i, 'banned default serif', line)
        if re.search(r'\b100vh\b', line): add(fails, f, i, '100vh (use 100dvh)', line)
        if re.search(r'outline:\s*none', line) and 'focus' not in line and 'box-shadow' not in line: add(warns, f, i, 'outline:none without visible replacement?', line)
        if re.search(r'#000(000)?\b(?![0-9a-f])', line, re.I): add(warns, f, i, 'pure black #000 (use off-black)', line)
        if re.search(r'#fff(fff)?\b(?![0-9a-f])', line, re.I) and is_css: add(warns, f, i, 'pure white #fff (use off-white)', line)
        if is_code and re.search(r"addEventListener\(\s*['\"]scroll['\"]", line) and 'passive' not in line: add(fails, f, i, 'scroll listener without passive', line)
        if is_code and re.search(r"addEventListener\(\s*['\"]scroll['\"]", line): add(warns, f, i, "scroll listener: allowed only rAF-throttled + passive (document as deliberate deviation)", line)
        if is_code and re.search(r'lucide', line, re.I): add(warns, f, i, 'lucide icons (prefer Phosphor Light)', line)
        if re.search('[\U0001F300-\U0001FAFF☀-➿]', line): add(fails, f, i, 'emoji', line)
        if re.search(r'·', line) and is_code: add(warns, f, i, 'middle dot separator (rationed: max 1 per line)', line)
        if is_css and re.search(r'text-transform:\s*uppercase', line): upper_tracking += 1
        if is_code and re.search(r'\b(Scroll to explore|Scroll down|scroll cue)\b', line, re.I): add(fails, f, i, 'scroll cue text', line)
        if is_code and re.search(r'\b(Stage|Step|Phase) ?0?[123]\b', line): add(warns, f, i, 'generic step label (use verb-noun)', line)
        if is_code and re.search(r'\b(elevate|seamless|unleash|next-gen|revolutioni[sz]e|leverage|supercharge|cutting-edge|game.?changer)\b', line, re.I): add(fails, f, i, 'filler marketing verb', line)
        if is_css and not f.endswith('index.css'):
            for m in re.finditer(r'(?m)^\.([a-zA-Z][\w-]*)\b', line): cls_def[m.group(1)].add(os.path.basename(f))
if upper_tracking: warns.append(f'uppercase text-transform used {upper_tracking}x (eyebrows: max 1 per 3 sections)')
for c, fs in cls_def.items():
    if len(fs) > 1: add(fails, os.path.join(root, 'src'), 0, f'class .{c} defined at top level in several CSS files: {sorted(fs)} (namespace it)', '')
    elif len(c) <= 2: add(warns, os.path.join(root, 'src'), 0, f'very short class .{c} ({sorted(fs)}); collision risk', '')
txt = ''.join(open(f, encoding='utf8', errors='ignore').read() for f in files if os.path.exists(f) and f.endswith('.css'))
if 'prefers-reduced-motion' not in txt: fails.append('no prefers-reduced-motion handling in CSS')
if '(hover: hover)' not in txt: warns.append('no (hover: hover) gating found')
if 'focus-visible' not in txt: fails.append('no :focus-visible styles')
if 'text-wrap: balance' not in txt: warns.append('no text-wrap: balance on headings')
if 'tabular-nums' not in txt: warns.append('no tabular-nums for numbers')
print('FAIL' if fails else 'OK', len(fails), 'fails,', len(warns), 'warnings')
for x in fails: print(' FAIL', x)
for x in warns: print(' warn', x)
sys.exit(1 if fails else 0)
