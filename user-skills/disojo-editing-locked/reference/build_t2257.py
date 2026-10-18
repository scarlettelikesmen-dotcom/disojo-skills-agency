#!/usr/bin/env python3
"""Rebuild the IMG_2257 trading reels: gentle pause cuts (no micro-cuts) -> base.mp4 -> word map -> spec-trade.json -> SFX."""
import sys, json, subprocess, wave
import numpy as np
sys.path.insert(0, '/Users/tejjo/.claude/skills/disojo-reel-studio/engine/tools')
import edit_reel as E
HUB = '/Users/tejjo/Desktop/DISOJO SOLUTIONS/content-hub/'
SRC = HUB + 'inbox/IMG_2257.MOV'; OUT = HUB + 'edits/t2257/'; LAB = HUB + 'remotion-lab/'
KEEP = [[0.0, 1.7], [6.9, 17.3], [24.2, 31.2], [33.7, 43.12], [44.5, 49.6], [65.2, 75.35]]
MINQ, LEAVE, THR = 0.60, 0.30, -33.5      # only cut pauses >= 0.6 s, and leave 0.3 s of natural pause
w = wave.open('/tmp/src.wav'); x = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(float) / 32768
h = 800; n = len(x) // h
db = np.array([20 * np.log10(np.sqrt(np.mean(x[i*h:(i+1)*h]**2)) + 1e-9) for i in range(n)])
ranges = []
for a, b in KEEP:
    i0, i1 = int(a / .05), int(b / .05); q = db[i0:i1] < THR; segs = []; s = None
    for k, v in enumerate(q):
        if v and s is None: s = k
        if (not v or k == len(q) - 1) and s is not None:
            e = k if not v else k + 1
            if (e - s) * .05 >= MINQ: segs.append((a + s * .05, a + e * .05))
            s = None
    cur = a
    for s, e in segs: ranges.append([round(cur, 2), round(s + LEAVE / 2, 2)]); cur = e - LEAVE / 2
    ranges.append([round(cur, 2), b])
ranges = [r for r in ranges if r[1] - r[0] > .3]
json.dump({"keep": KEEP, "ranges": ranges}, open(HUB + 'scripts/plan-t2257.json', 'w'))
print(len(ranges), 'segments', round(sum(r[1] - r[0] for r in ranges), 1), 's')
subprocess.run([HUB + '.venv/bin/python', '/Users/tejjo/.claude/skills/disojo-reel-studio/engine/tools/make_base.py', SRC, '--out', OUT, '--plan', HUB + 'scripts/plan-t2257.json'], check=True)
b = json.load(open(OUT + 'base.json')); R = b['ranges']; O = b['offsets']; dur = b['duration']
c = json.load(open(OUT + 'transcript.json'))
words, _ = E.clean_words(c['words'], False, [[0, 200]], None)
res = []
for wd in words:
    best = None
    for (s, e), o in zip(R, O):
        ov = min(e, wd['e']) - max(s, wd['s'])
        if ov >= .07 and (best is None or ov > best[0]): best = (ov, s, e, o)
    if best:
        ov, s, e, o = best; res.append(dict(w=wd['w'].strip(), s=round(o + max(0, wd['s'] - s), 2), e=round(o + min(e, wd['e']) - s, 2)))
ws = [r for r in res if not (r['w'] == 'right')]
# words the aligner drops at a cut: "If you think" before the second "you can do things"
k = next(i for i, r in enumerate(ws) if r['w'] == 'you' and ws[i+1]['w'] == 'can')
t = ws[k]['s']; ws = ws[:k] + [dict(w='If', s=round(t - .72, 2), e=round(t - .55, 2)), dict(w='you', s=round(t - .52, 2), e=round(t - .3, 2)), dict(w='think', s=round(t - .28, 2), e=round(t - .04, 2))] + ws[k:]
ws = [r for i, r in enumerate(ws) if not (r['w'] == 'you' and i + 1 < len(ws) and ws[i+1]['w'] == 'understand')]
out = []
for r in ws:
    if r['w'] == '-beliefs' and out and out[-1]['w'] == 'self': out[-1]['w'] = 'self-beliefs'; out[-1]['e'] = r['e']; continue
    out.append(r)
ws = out
def A(text, nth=1):
    m = [r['s'] for r in ws if r['w'].lower().strip('.,') == text]
    return m[nth - 1]
EM = {'self-beliefs', 'skill', 'secondary', 'truly', 'believe', 'never', 'change'}
brk = {A('trading', 2), A('if', 1), A('understand'), [r for i, r in enumerate(ws) if i + 1 < len(ws) and ws[i+1]['w'] == 'main'][0]['s'], A("if", 2) if len([r for r in ws if r['w'].lower() == 'if']) > 1 else -1, A('all'), A('no', 1), A('no', 2), A('no', 3)}
brk |= {r['s'] for i, r in enumerate(ws) if r['w'] == "that's"}
groups = []; cur = []
for r in ws:
    if cur and (len(cur) >= 4 or r['s'] in brk or r['s'] - cur[-1]['e'] > .5): groups.append(cur); cur = []
    cur.append(r)
groups.append(cur)
caps = [dict(t0=g[0]['s'], t1=min((groups[i+1][0]['s'] if i + 1 < len(groups) else dur), g[0]['s'] + 3.0), words=[dict(w=x['w'].upper(), s=x['s'], emph=x['w'] in EM) for x in g]) for i, g in enumerate(groups)]
mainw = [r for i, r in enumerate(ws) if i + 1 < len(ws) and ws[i+1]['w'] == 'main'][0]['s']
spec = dict(duration=dur, base="base-trade.mp4", cuts=O, caps=caps, punches=[[A('never'), 1.0, 0.0]],
 panels=[
  dict(type="title", no="01", t0=A('trading', 2), t1=A('if', 1) - .15, lines=["TRADING IS JUST", "A COMBINATION OF", "YOUR *SELF-BELIEFS.*"], size=124),
  dict(type="title", no="02", t0=A('if', 1) + .1, t1=A('impossible') + .4, lines=["IF YOU THINK YOU CAN,", "TRADING IS JUST", "ANOTHER *SKILL.*"], size=112),
  dict(type="list", no="03", t0=A('understand') - .15, t1=A('secondary') + 1.1, items=[["UNDERSTAND THE MARKET", A('understand')], ["EVALUATE THINGS", A('evaluate')], ["BUY ACCOUNTS", A('buy')], ["PASS ACCOUNTS", A('pass')]], stamp=["SECONDARY.", A('secondary')]),
  dict(type="title", no="04", t0=mainw - .4, t1=A('not') + .25, lines=["THE MAIN THING IS", "WHETHER YOU", "*TRULY BELIEVE.*"], size=118),
  dict(type="stack", no="05", t0=A('strategy') - .5, t1=99, lines=[["NO STRATEGY.", A('strategy') - .05], ["NO PROP FIRM.", A('prop') - .15], ["CAN'T CHANGE THAT.", A('change') - .25]])])
json.dump(spec, open(LAB + 'src/spec-trade.json', 'w'), indent=1)
subprocess.run(['cp', OUT + 'base.mp4', LAB + 'public/base-trade.mp4'], check=True)
ev = [("tick", p['t0']) for p in spec['panels'] if p['t0'] > 0] + [("impact", A('secondary'))] + [("tick", l[1]) for l in spec['panels'][-1]['lines']]
E.make_sfx(ev, dur, LAB + 'public/sfx-trade.wav')
print('duration', dur, 'cuts', len(O)); [print(round(c['t0'], 2), ' '.join(x['w'] for x in c['words'])) for c in caps]
