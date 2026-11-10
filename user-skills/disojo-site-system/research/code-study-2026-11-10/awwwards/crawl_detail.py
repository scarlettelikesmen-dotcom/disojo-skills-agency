# Site pages: SOTD score, the four category scores, dev award scores, every juror's row.
# Usage: python3 crawl_detail.py <min_year> <threads>
import re, json, time, sys, os, urllib.request, threading, queue
from datetime import datetime
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
D = os.path.dirname(os.path.abspath(__file__))
miny = int(sys.argv[1]) if len(sys.argv) > 1 else 2018
th = int(sys.argv[2]) if len(sys.argv) > 2 else 3
out = f'{D}/detail.jsonl'
done = set()
if os.path.exists(out):
    for l in open(out): done.add(json.loads(l)['slug'])
recs = [json.loads(l) for l in open(f'{D}/sotd.jsonl')]
def year(r):
    try: return datetime.strptime(r['sotd'], '%b %d, %Y').year
    except Exception: return datetime.utcfromtimestamp(r.get('created') or 0).year
todo = [r for r in recs if year(r) >= miny and r['slug'] not in done]
print('todo', len(todo), flush=True)
q = queue.Queue(); [q.put(r) for r in todo]
lock = threading.Lock()
F = r'(\d+(?:\.\d+)?)'
def text(s):
    s = re.sub(r'<script.*?</script>|<style.*?</style>', '', s, flags=re.S)
    s = re.sub(r'<[^>]+>', ' ', s); return re.sub(r'\s+', ' ', s)
def parse(t):
    o = {}
    m = re.search(r'SOTD / SCORE → ' + F + r' / 10 Evaluation System Design 40% Usability 30% Creativity 20% Content 10% ' + ' / 10 '.join([F] * 4) + ' / 10', t)
    if not m:
        m2 = re.search(r'(?:HONORABLE MENTION|SCORE) → ' + F, t)
    if m: o['score'] = float(m.group(1)); o['design'], o['usability'], o['creativity'], o['content'] = map(float, m.group(2, 3, 4, 5))
    seg = t[t.find('Votes Jury'):t.find('DEV AWARD')] if 'Votes Jury' in t else ''
    o['jury'] = [dict(zip(['who', 'd', 'u', 'c', 'ct', 'o'], [x.group(1).strip()] + [float(v) for v in x.groups()[1:]]))
                 for x in re.finditer(r'([A-Z][^0-9]{3,140}?) (\d{1,2}) (\d{1,2}) (\d{1,2}) (\d{1,2}) (\d{1,2}\.\d{2})', seg)]
    d = re.search(r'DEV AWARD → ' + F + r' / 10 Evaluation System Semantics / SEO Animations / Transitions Accessibility WPO Responsive Design Markup / Meta-data ' + ' / 10 '.join([F] * 6), t)
    if d: o['dev'] = dict(zip(['score', 'seo', 'anim', 'a11y', 'wpo', 'resp', 'markup'], map(float, d.groups())))
    return o
def worker():
    while True:
        try: r = q.get_nowait()
        except queue.Empty: return
        o = {'slug': r['slug']}
        for a in range(3):
            try:
                req = urllib.request.Request(f"https://www.awwwards.com/sites/{r['slug']}", headers={'User-Agent': UA})
                o.update(parse(text(urllib.request.urlopen(req, timeout=40).read().decode('utf-8', 'replace')))); break
            except Exception as e:
                o['err'] = str(e)[:80]; time.sleep(4 * (a + 1))
        with lock:
            open(out, 'a').write(json.dumps(o) + '\n')
        time.sleep(0.8)
ts = [threading.Thread(target=worker) for _ in range(th)]
[t.start() for t in ts]; [t.join() for t in ts]
print('done', flush=True)
