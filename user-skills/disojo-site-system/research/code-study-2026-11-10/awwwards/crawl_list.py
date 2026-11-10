import re, json, time, html, sys, urllib.request, os
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
D = os.path.dirname(os.path.abspath(__file__))
out = f'{D}/sotd.jsonl'
seen = set()
if os.path.exists(out):
    for l in open(out): seen.add(json.loads(l)['slug'])
start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
def get(url):
    for a in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'en'})
            return urllib.request.urlopen(req, timeout=40).read().decode('utf-8', 'replace')
        except Exception as e:
            print('retry', url, e, flush=True); time.sleep(5 * (a + 1))
    return ''
page = start
empty = 0
with open(out, 'a') as f:
    while True:
        s = get(f'https://www.awwwards.com/websites/sites_of_the_day/?page={page}')
        items = s.split('data-collectable-model-value="')[1:]
        n = 0
        for chunk in items:
            m = json.loads(html.unescape(chunk.split('"', 1)[0]))
            if m.get('type') != 'submission' or m['slug'] in seen: continue
            card = chunk
            url = re.search(r'figure-rollover__bt"\s*href="([^"]+)"', card)
            date = re.search(r'Site Of The Day\s*</strong>.*?<span[^>]*>([A-Z][a-z]{2} \d{1,2}, \d{4})</span>', card, re.S)
            awards = re.findall(r'budget-tag--([a-z]+)', card)
            by = re.search(r'avatar-name__title">([^<]+)<', card)
            rec = {'slug': m['slug'], 'title': m['title'], 'tags': m.get('tags', []), 'url': url.group(1) if url else None,
                   'sotd': date.group(1) if date else None, 'awards': sorted(set(awards)), 'by': by.group(1).strip() if by else None,
                   'created': m.get('createdAt'), 'page': page}
            seen.add(m['slug']); f.write(json.dumps(rec) + '\n'); n += 1
        f.flush()
        print(page, len(items), n, flush=True)
        empty = empty + 1 if not items else 0
        if empty >= 2: break
        page += 1
        time.sleep(1.0)
