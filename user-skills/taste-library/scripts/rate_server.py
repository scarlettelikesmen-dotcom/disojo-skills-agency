"""Rating board for taste-library/studios. Serves the studios folder and saves ratings.json.
Run: python3 rate_server.py [port]   (default 4811)"""
import json, os, sys, glob
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

ROOT = os.path.expanduser('~/.claude/skills/taste-library/studios')
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, 'ratings.json')

GROUPS = [
  ('nonstop', 'Nonstop', [('riverflow','Riverflow'),('remono','Remono'),('tvg','TVG'),('smash','Smash'),('bloom','Bloom Ventures'),('dive-process','DIVE process post'),('testimonials','Testimonials post')]),
  ('andrija', 'Andrija', [('rooted','Rooted'),('kernal','Kernal'),('perimeter','Perimeter'),('meridian','Meridian Growth'),('graticule','Graticule'),('shift','Shift'),('cortexa','Cortexa'),('pacerace','PaceRace'),('footvaerk','Footvaerk'),('strand','Strand'),('orvexa','Orvexa'),('sanora','Sanora Health')]),
  ('softriver', 'Softriver', [('c1','Carousel: SaaS feel safer'),('c2','Carousel: fix a boring design'),('c3','Carousel: business vs brand')]),
]

def first_line(p):
    try:
        for l in open(p, encoding='utf-8'):
            l = l.strip()
            if l: return l[:90]
    except Exception: pass
    return ''

def manifest():
    items = []
    for sdir, sname, projs in GROUPS:
        for key, title in projs:
            imgs = sorted(f for f in glob.glob(os.path.join(ROOT, sdir, key + '*.jpg')) if os.path.basename(f)[len(key)] in '-')
            imgs = [os.path.relpath(f, ROOT) for f in imgs]
            if imgs: items.append({'id': f'{sdir}/{key}', 'studio': sname, 'title': title, 'kind': 'images', 'media': imgs})
    for sdir, sname, _ in GROUPS:
        for v in sorted(glob.glob(os.path.join(ROOT, sdir, 'reels', '*.mp4'))):
            n = os.path.basename(v)[:-4]
            t = first_line(v[:-4] + '.description') or 'Reel ' + n
            if n == 'DfLAmr2O6ve': t = 'Femora guidelines flip-through'
            items.append({'id': f'{sdir}/reel/{n}', 'studio': sname, 'title': t, 'kind': 'reel', 'media': [os.path.relpath(v, ROOT)]})
    return items

class H(SimpleHTTPRequestHandler):
    def __init__(self, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def log_message(self, *a): pass
    def send_json(self, obj, code=200):
        b = json.dumps(obj).encode()
        self.send_response(code); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(b))); self.end_headers(); self.wfile.write(b)
    def do_GET(self):
        if self.path in ('/', '/index.html'):
            b = open(os.path.join(HERE, 'rate.html'), 'rb').read()
            self.send_response(200); self.send_header('Content-Type','text/html; charset=utf-8'); self.send_header('Content-Length',str(len(b))); self.end_headers(); self.wfile.write(b); return
        if self.path == '/manifest': return self.send_json(manifest())
        if self.path == '/ratings':
            return self.send_json(json.load(open(OUT)) if os.path.exists(OUT) else {})
        return super().do_GET()
    def do_POST(self):
        if self.path != '/ratings': return self.send_json({'error':'no'}, 404)
        data = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))) or b'{}')
        data['_saved'] = datetime.now().isoformat(timespec='seconds')
        json.dump(data, open(OUT, 'w'), indent=1)
        self.send_json({'ok': True, 'saved': data['_saved']})

port = int(sys.argv[1]) if len(sys.argv) > 1 else 4811
print(f'rating board on http://127.0.0.1:{port}', flush=True)
ThreadingHTTPServer(('127.0.0.1', port), H).serve_forever()
