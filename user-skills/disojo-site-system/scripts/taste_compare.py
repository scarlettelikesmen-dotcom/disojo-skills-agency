"""Put one site's taste numbers beside the walked references.
python3 taste_compare.py <ourProbeDir> [ref ...]   refs are folder names in $SK/taste/raw (default: era monolog)
Prints one table per factor. A row where ours sits outside every reference is marked '?' :
a question to answer from the idea, never an automatic fail, never a quality verdict."""
import json, glob, os, sys, collections, statistics as st
SK = os.path.expanduser('~/.claude/skills/disojo-site-system')
ours = sys.argv[1]; refs = sys.argv[2:] or ['era', 'monolog']
W = os.environ.get('W', '1512')
def rgb(c):
    try: return tuple(int(float(x)) for x in c[c.index('(') + 1:c.index(')')].split(',')[:3])
    except Exception: return None
def sat(c): mx, mn = max(c), min(c); return 0 if mx == 0 else (mx - mn) / mx
def square(r):
    r = (r or '0px').split()[0]
    if r.endswith('%'): return float(r[:-1]) == 0
    try: return float(r.replace('px', '') or 0) <= 3
    except ValueError: return False
def families95(T, tot):
    fam = collections.Counter()
    for t in T: fam[t['fam']] += t['chars']
    run = 0
    for i, (_, n) in enumerate(fam.most_common()):
        run += n
        if run >= .95 * tot: return i + 1
    return len(fam)
def stats(d):
    T, M, C, gaps, words, screens = [], [], [], [], 0, 0
    for f in glob.glob(f'{d}/{W}/*/measure.json'):
        m = json.load(open(f)); T += m['text']; M += m['media']; C += m['ctl']
        screens += max(1, m['docH'] / m['vh'])
        words += sum(len(t['t'].split()) if t['chars'] <= 80 else t['chars'] / 6 for t in m['text'])
        it = sorted([(b['y'], b['y'] + b['h'], b['x']) for b in m['text'] + m['media']])
        gaps += [b0 - a1 for (a0, a1, ax), (b0, b1, bx) in zip(it, it[1:]) if 4 <= b0 - a1 <= 400 and abs(ax - bx) < 40]
    if not T: return None
    ch = collections.Counter(); [ch.__setitem__(round(t['size']), ch[round(t['size'])] + t['chars']) for t in T]
    tot = sum(ch.values()); body = max(ch, key=ch.get)
    sizes = [k for k in ch if ch[k] >= 20]
    disp = [t for t in T if t['size'] >= 48]
    btn_fill = [rgb(c['bg']) for c in C if rgb(c['bg']) and not c['bg'].endswith(', 0)')]
    return {
        'pages': len(glob.glob(f'{d}/{W}/*/measure.json')),
        'words a screen': round(words / screens),
        'text sizes (20+ chars)': len(sizes),
        'largest / body': round(max(sizes) / body, 1),
        'share of chars at 20-47px %': round(100 * sum(n for k, n in ch.items() if 20 <= k < 48) / tot),
        'display leading (median)': round(st.median([t['lh'] for t in disp if t['lh']]), 2) if disp else None,
        'display tracking em (median)': round(st.median([t['ls'] for t in disp]), 3) if disp else None,
        'families carrying 95% of chars': families95(T, tot),
        'media with 0-3px corners %': round(100 * sum(1 for m in M if square(m['radius'])) / max(1, len(M))),
        'media a screen': round(len(M) / screens, 1),
        'saturated filled buttons': sum(1 for c in btn_fill if sat(c) > .35),
        'gaps 40-64px %': round(100 * sum(1 for g in gaps if 40 <= g <= 64) / max(1, len(gaps))),
        'gaps <=32px %': round(100 * sum(1 for g in gaps if g <= 32) / max(1, len(gaps))),
        'pure white or black ground': any(m in ('rgb(255, 255, 255)', 'rgb(0, 0, 0)') for m in [json.load(open(f))['bodyBg'] for f in glob.glob(f'{d}/{W}/*/measure.json')]),
    }
cols = {'ours': stats(ours)}
for r in refs: cols[r] = stats(f'{SK}/taste/raw/{r}')
if not cols['ours']: sys.exit(f'no probe data in {ours}/{W}')
keys = list(cols['ours'].keys())
print(f'| factor at {W} | ' + ' | '.join(cols) + ' | |'); print('|---' * (len(cols) + 2) + '|')
for k in keys:
    vals = [cols[c][k] if cols[c] else None for c in cols]
    refv = [v for v in vals[1:] if isinstance(v, (int, float)) and not isinstance(v, bool)]
    o = vals[0]; flag = ''
    if isinstance(o, (int, float)) and not isinstance(o, bool) and refv and (o < min(refv) * 0.9 - 0.01 or o > max(refv) * 1.1 + 0.01): flag = '?'
    if isinstance(o, bool) and o and not any(vals[1:]): flag = '?'
    print(f'| {k} | ' + ' | '.join(str(v) for v in vals) + f' | {flag} |')
