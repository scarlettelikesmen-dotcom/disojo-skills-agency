"""Project log: the three numbers that say whether the system works.
  python3 log.py <slug> start [source]        material is in (new_site.sh calls this)
  python3 log.py <slug> show [note]           something was shown to Tejjo (first-screen render, demo link)
  python3 log.py <slug> verdict yes|no [note] Tejjo's first-look verdict on what was shown
  python3 log.py <slug> fix [note]            one round of fixes asked for after a show
  python3 log.py <slug> demo [url]            the demo link is up
  python3 log.py summary                      every project: hours material->demo, first look approved, fix rounds
Log lives in ~/Desktop/DISOJO SOLUTIONS/site-system-log/<slug>.jsonl. Record verdicts in Tejjo's words, never guessed.
"""
import json, os, sys, time, glob
D = os.path.expanduser('~/Desktop/DISOJO SOLUTIONS/site-system-log'); os.makedirs(D, exist_ok=True)
a = sys.argv[1:]
if not a: print(__doc__); sys.exit(1)
if a[0] == 'summary':
    print(f"{'project':24} {'hrs to demo':>11} {'first look':>11} {'fix rounds':>10}")
    for f in sorted(glob.glob(os.path.join(D, '*.jsonl'))):
        ev = [json.loads(l) for l in open(f) if l.strip()]
        t0 = next((e['t'] for e in ev if e['ev'] == 'start'), None); td = next((e['t'] for e in ev if e['ev'] == 'demo'), None)
        v = next((e['arg'] for e in ev if e['ev'] == 'verdict'), '-')
        print(f"{os.path.basename(f)[:-6]:24} {('%.1f' % ((td - t0) / 3600)) if t0 and td else '-':>11} {v:>11} {sum(e['ev'] == 'fix' for e in ev):>10}")
    sys.exit(0)
slug, ev = a[0], a[1]; rest = a[2:]
assert ev in ('start', 'show', 'verdict', 'fix', 'demo'), 'event: start|show|verdict|fix|demo'
rec = {'t': time.time(), 'when': time.strftime('%Y-%m-%d %H:%M'), 'ev': ev, 'arg': rest[0] if rest else '', 'note': ' '.join(rest[1:])}
open(os.path.join(D, slug + '.jsonl'), 'a').write(json.dumps(rec) + '\n'); print('logged', slug, ev, rec['arg'])
