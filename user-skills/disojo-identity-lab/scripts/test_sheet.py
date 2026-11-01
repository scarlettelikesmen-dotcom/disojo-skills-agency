"""Stress-test one or more marks the way a real identity gets used, and screenshot it.

Usage:
  python3 test_sheet.py OUT_DIR mark1.svg [mark2.svg ...] [--name "Disojo"] [--brand "#2A45F0"] [--refs ref1.png,ref2.png]

Writes OUT_DIR/test.html and OUT_DIR/test.png (headless Chrome, 1600 wide).
Each mark row: 16/24/32/48/96/240 px on paper, ink and brand colour; a browser tab with favicon; an avatar
circle; a nav bar; a jacket-back-size crop. --refs puts reference marks in the same rows at the same size,
so ours is judged next to the work it has to beat (rule: if ours looks weaker, do not show it).
SVGs are inlined and recoloured with currentColor, so give one-colour marks (the trace output is fine).
"""
import argparse, os, re, subprocess, base64

ap = argparse.ArgumentParser()
ap.add_argument('outdir'); ap.add_argument('marks', nargs='+')
ap.add_argument('--name', default='Studio'); ap.add_argument('--brand', default='#2A45F0')
ap.add_argument('--refs', default='')
a = ap.parse_args()
os.makedirs(a.outdir, exist_ok=True)

def inline(fn):
    s = open(fn).read()
    s = re.sub(r'<\?xml.*?\?>', '', s)
    s = re.sub(r'fill="(?!none)[^"]*"', 'fill="currentColor"', s)
    s = re.sub(r'<svg ', '<svg preserveAspectRatio="xMidYMid meet" ', s, count=1)
    return s

def img(fn):
    ext = fn.rsplit('.', 1)[-1].lower().replace('jpg', 'jpeg')
    return f'<img src="data:image/{ext};base64,{base64.b64encode(open(fn, "rb").read()).decode()}">'

sizes = [16, 24, 32, 48, 96, 200]
rows = []
items = [(os.path.basename(m), inline(m)) for m in a.marks]
items += [('REF ' + os.path.basename(r), img(r)) for r in a.refs.split(',') if r]
for label, art in items:
    cells = ''.join(f'<div class="sz" style="--s:{s}px"><div class="m">{art}</div><i>{s}</i></div>' for s in sizes)
    rows.append(f'''<section><h2>{label}</h2>
<div class="strip paper">{cells}</div>
<div class="strip ink">{cells}</div>
<div class="strip brand">{cells}</div>
<div class="ctx">
  <div class="tab"><span class="fav">{art}</span>{a.name} | Home<b>×</b></div>
  <div class="ava"><div class="m">{art}</div></div>
  <div class="ava inv"><div class="m">{art}</div></div>
  <div class="nav"><span class="nm">{art}</span><span>Work</span><span>Services</span><span>About</span><em>Book a call</em></div>
  <div class="big"><div class="m">{art}</div></div>
</div></section>''')

html = f'''<!doctype html><meta charset="utf-8"><title>Mark test</title><style>
:root{{--paper:#EDEBE6;--ink:#111110;--brand:{a.brand}}}
*{{box-sizing:border-box}}body{{margin:0;background:#fff;font:13px/1.3 -apple-system,Helvetica,Arial,sans-serif;color:#222;width:1600px}}
section{{padding:28px 32px;border-bottom:1px solid #ddd}}h2{{font-size:13px;font-weight:600;margin:0 0 12px;letter-spacing:.02em}}
.strip{{display:flex;align-items:flex-end;gap:36px;padding:18px 22px;border-radius:10px;margin-bottom:8px}}
.paper{{background:var(--paper);color:var(--ink)}}.ink{{background:var(--ink);color:#F4F2EE}}.brand{{background:var(--brand);color:#fff}}
.sz{{display:flex;flex-direction:column;align-items:center;gap:6px}}.sz i{{font-size:10px;opacity:.5;font-style:normal}}
.m{{display:flex;align-items:center;justify-content:center}}.m svg,.m img{{display:block;max-width:100%;max-height:100%}}
.sz .m{{height:var(--s);width:calc(var(--s)*2.4)}}
.ctx{{display:flex;gap:18px;align-items:center;margin-top:12px;flex-wrap:wrap}}
.tab{{display:flex;align-items:center;gap:8px;background:#DEE1E6;padding:9px 14px;border-radius:9px 9px 0 0;width:240px;color:#333}}
.tab b{{margin-left:auto;font-weight:400;opacity:.5}}.fav{{width:16px;height:16px;display:flex}}.fav svg,.fav img{{width:16px;height:16px}}
.ava{{width:110px;height:110px;border-radius:50%;background:var(--ink);color:#F4F2EE;display:flex;align-items:center;justify-content:center;padding:24px}}
.ava.inv{{background:var(--brand);color:#fff}}.ava .m{{width:100%;height:100%}}
.nav{{display:flex;align-items:center;gap:26px;background:var(--paper);padding:14px 22px;border-radius:999px;width:620px;color:var(--ink)}}
.nav .nm{{height:24px;width:120px;display:flex}}.nav .nm svg,.nav .nm img{{height:24px;width:auto;max-width:120px}}
.nav em{{margin-left:auto;font-style:normal;background:var(--ink);color:#fff;padding:8px 14px;border-radius:999px}}
.big{{width:320px;height:200px;background:#2B2B2B;border-radius:12px;color:#F4F2EE;display:flex;align-items:center;justify-content:center;padding:30px}}
.big .m{{width:100%;height:100%}}
</style>{''.join(rows)}'''
hp = os.path.abspath(os.path.join(a.outdir, 'test.html'))
open(hp, 'w').write(html)
png = os.path.abspath(os.path.join(a.outdir, 'test.png'))
h = 160 + 1000 * len(items)
subprocess.run(['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '--headless=new', '--disable-gpu',
                '--hide-scrollbars', f'--window-size=1600,{h}', f'--screenshot={png}', 'file://' + hp],
               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print(hp); print(png)
