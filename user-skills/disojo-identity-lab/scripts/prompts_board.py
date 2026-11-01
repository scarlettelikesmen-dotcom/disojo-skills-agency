"""Turn a prompts-roundN.md into a one-page board with copy buttons (and optional image strip).

Usage: python3 prompts_board.py prompts-round6.md round6.html [--imgs a.jpg,b.png] [--title "Disojo round 6"]

Markdown shape it expects (what the lab writes):
  intro text ... '---' ... '## CODE. NAME  ·  tag' sections with '**Idea:** ...', '**Motion:** ...',
  then '**X1-W ...**' / '**X1-S ...**' headers each followed by a ``` fenced prompt; an optional final '---' block
  with one more fenced prompt (FINISH). Image paths are relative to the HTML file.
"""
import argparse, html, re

ap = argparse.ArgumentParser()
ap.add_argument('md'); ap.add_argument('out'); ap.add_argument('--imgs', default=''); ap.add_argument('--title', default='')
a = ap.parse_args()
md = open(a.md).read()
parts = md.split('\n---\n')
head, body = parts[0], parts[1]
tail = parts[2] if len(parts) > 2 else ''
title = a.title or re.search(r'^# (.+)', head, re.M).group(1)

def inline(s):
    s = html.escape(s); s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s); return re.sub(r'`([^`]+)`', r'<code>\1</code>', s)

def lead(block):
    out = []
    for l in block.strip().split('\n'):
        t = l.strip()
        if not t or t.startswith('# '): continue
        if t.startswith('- '): out.append(f'<li class="{"sub" if l.startswith("  ") else ""}">{inline(t[2:])}</li>')
        elif re.match(r'\d\.\s', t): out.append(f'<li class="num"><span>{t[0]}</span>{inline(t[3:])}</li>')
        else: out.append(f'<p>{inline(t)}</p>')
    return '\n'.join(out)

def card_prompt(code, label, text):
    return (f'<div class="p"><div class="ph"><span>{html.escape(code)} · {html.escape(label)}</span>'
            f'<button onclick="cp(this)">Copy</button></div><pre>{html.escape(text)}</pre></div>')

cards = []
for sec in re.split(r'\n## ', body)[1:]:
    ttl, _, txt = sec.partition('\n')
    name, _, tag = ttl.partition('·')
    idea = re.search(r'\*\*Idea:\*\* (.+)', txt); mot = re.search(r'\*\*Motion:\*\* (.+)', txt)
    ps = re.findall(r'\*\*([A-Z]\d+-[A-Z])\s*([^*]*)\*\*\n```\n(.+?)\n```', txt, re.S)
    pr = ''.join(card_prompt(c, (l.strip(' ()') or ('WORLD' if c.endswith('W') else 'SHEET')), t) for c, l, t in ps)
    cards.append(f'<section class="t"><h2>{html.escape(name.strip())}<em>{html.escape(tag.strip())}</em></h2>'
                 + (f'<p class="idea"><b>Idea</b>{inline(idea.group(1))}</p>' if idea else '')
                 + (f'<p class="mot"><b>Motion</b>{inline(mot.group(1))}</p>' if mot else '') + pr + '</section>')
fin = re.search(r'```\n(.+?)\n```', tail, re.S)
if fin: cards.append(f'<section class="t">{lead(tail.split("```")[0])}{card_prompt("FINISH", "same chat", fin.group(1))}</section>')
imgs = ''.join(f'<img src="{html.escape(i)}" alt="">' for i in a.imgs.split(',') if i)

page = f'''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(title)}</title>
<style>
:root{{--bg:#F1EFEA;--ink:#121211;--mut:#6b6a66;--line:#d9d6cf;--card:#fff;--acc:#2A45F0}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 -apple-system,"Helvetica Neue",Arial,sans-serif}}
main{{max-width:1180px;margin:0 auto;padding:48px 24px 96px}}h1{{font-size:44px;line-height:1;letter-spacing:-.03em;margin:0 0 18px}}
.lead{{max-width:860px}}.lead li{{margin:4px 0 4px 20px}}.lead li.sub{{margin-left:42px}}.lead li.num{{list-style:none;margin-left:0}}.lead li.num span{{display:inline-block;width:22px;font-weight:600}}
.imgs{{display:flex;gap:12px;margin:28px 0;flex-wrap:wrap}}.imgs img{{width:calc(50% - 6px);min-width:280px;flex:1;border-radius:12px;border:1px solid var(--line);display:block}}
.grid{{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:28px}}
.t{{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:22px}}
.t h2{{font-size:24px;letter-spacing:-.02em;margin:0 0 12px;display:flex;justify-content:space-between;gap:10px;align-items:baseline}}
.t h2 em{{font-style:normal;font-size:12px;color:var(--mut);font-weight:500;text-align:right}}
.idea,.mot{{margin:0 0 8px;font-size:14px}}.idea b,.mot b{{display:inline-block;width:60px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--acc)}}
.p{{margin-top:14px;border:1px solid var(--line);border-radius:10px;overflow:hidden}}
.ph{{display:flex;justify-content:space-between;align-items:center;background:#f6f5f2;padding:7px 10px;font-size:12px;font-weight:600}}
button{{font:inherit;font-size:12px;border:0;background:var(--ink);color:#fff;border-radius:999px;padding:5px 12px;cursor:pointer}}
pre{{margin:0;padding:12px;white-space:pre-wrap;font:12.5px/1.5 ui-monospace,Menlo,monospace;color:#2b2b29}}
code{{font-size:.9em;background:#e7e4dd;padding:1px 5px;border-radius:4px}}
@media (max-width:820px){{.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}
</style><main><h1>{html.escape(title)}</h1><div class="lead">{lead(head)}</div>
{f'<div class="imgs">{imgs}</div>' if imgs else ''}<div class="grid">{''.join(cards)}</div></main>
<script>function cp(b){{navigator.clipboard.writeText(b.closest('.p').querySelector('pre').innerText);b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1200)}}</script></html>'''
open(a.out, 'w').write(page)
print(a.out, len(cards), 'cards')
