#!/usr/bin/env python3
"""Render the three content reports (reports/*.md) into three separately designed HTML pages (reports/html/).
Minimal Markdown subset: headings, tables, lists, paragraphs, bold, italics, code, links, rules. Hook lists get copy buttons."""
import html, re
from pathlib import Path

HUB = Path(__file__).resolve().parent.parent
OUT = HUB / "reports/html"; OUT.mkdir(parents=True, exist_ok=True)

def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" target="_blank" rel="noopener">\1</a>', s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    s = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", s)
    return s

def slug(t): return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:40]

def convert(md):
    lines = md.splitlines(); out, toc, i = [], [], 0
    hook_mode = False
    while i < len(lines):
        ln = lines[i]
        if not ln.strip() or ln.strip() == "---": i += 1; continue
        m = re.match(r"^(#{1,3}) (.*)", ln)
        if m:
            lvl, txt = len(m.group(1)), m.group(2)
            if lvl == 1: i += 1; continue           # page title handled by the hero
            sid = slug(txt)
            if lvl == 2:
                toc.append((sid, re.sub(r"^\d+\.\s*", "", txt)))
                out.append(f'</section><section class="sec" id="{sid}"><h2>{inline(txt)}</h2>')
            else:
                out.append(f'<h3 id="{sid}">{inline(txt)}</h3>')
            hook_mode = lvl == 3 and "hook" in txt.lower()
            i += 1; continue
        if ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.fullmatch(r":?-{2,}:?", c) for c in cells): rows.append(cells)
                i += 1
            head, body = rows[0], rows[1:]
            t = '<div class="tw"><table><thead><tr>' + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr></thead><tbody>"
            t += "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body) + "</tbody></table></div>"
            out.append(t); continue
        if re.match(r"^(\d+)\. ", ln) or ln.startswith("- "):
            ordered = bool(re.match(r"^\d+\. ", ln)); items = []
            while i < len(lines) and (re.match(r"^\d+\. ", lines[i]) or lines[i].startswith("- ") or (lines[i].startswith("   ") and items)):
                if lines[i].startswith("   ") and items: items[-1] += " " + lines[i].strip()
                else: items.append(re.sub(r"^(\d+\. |- )", "", lines[i]))
                i += 1
            if hook_mode:
                out.append('<ol class="hooks">' + "".join(
                    f'<li><span class="ht">{inline(x)}</span><button class="cp" type="button" data-t="{html.escape(re.sub(r"[*`]", "", x))}">Copy</button></li>' for x in items) + "</ol>")
            else:
                tag = "ol" if ordered else "ul"
                out.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
            continue
        para = [ln.strip()]; i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r"^(#|\||- |\d+\. |---)", lines[i]):
            para.append(lines[i].strip()); i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
    body = "".join(out)
    body = body.replace("</section>", "", 1) + "</section>"
    return body, toc

JS = """<script>
document.querySelectorAll('.cp').forEach(b=>b.addEventListener('click',()=>{const t=b.dataset.t;
const done=()=>{b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1400)};
try{navigator.clipboard.writeText(t).then(done,()=>sel(b))}catch(e){sel(b)}}));
function sel(b){const r=document.createRange();r.selectNodeContents(b.previousElementSibling);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected';setTimeout(()=>b.textContent='Copy',1400)}
</script>"""

BASE_CSS = """
*{box-sizing:border-box}
body{background:var(--bg);color:var(--fg);font-family:var(--body);font-size:17px;line-height:1.6;margin:0}
.wrap{max-width:1040px;margin:0 auto;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
.sec{padding-block:44px;border-top:var(--rule)}
h2{font-family:var(--display);line-height:1.05;margin:0 0 20px;text-wrap:balance}
h3{font-family:var(--display);margin:30px 0 12px;text-wrap:balance}
p,li{max-width:68ch}
a{color:var(--accent)}
code{font-family:var(--mono);font-size:.86em;background:var(--chip);padding:.1em .35em;border-radius:4px;word-break:break-word}
.tw{overflow-x:auto;margin:10px 0 18px;border:var(--tborder)}
table{border-collapse:collapse;width:100%;min-width:640px;font-size:14.5px;font-variant-numeric:tabular-nums}
th,td{text-align:left;vertical-align:top;padding:10px 12px;border-bottom:1px solid var(--line)}
th{font-family:var(--mono);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);background:var(--chip)}
ol.hooks{list-style:none;padding:0;margin:8px 0 18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;counter-reset:h}
ol.hooks li{counter-increment:h;display:flex;gap:12px;align-items:flex-start;justify-content:space-between;padding:12px 14px;background:var(--card);border:var(--cborder);max-width:none;min-width:0}
ol.hooks li::before{content:counter(h,decimal-leading-zero);font-family:var(--mono);font-size:12px;color:var(--muted);padding-top:3px}
.ht{flex:1;min-width:0}
.cp{font:600 12px var(--mono);letter-spacing:.06em;text-transform:uppercase;background:transparent;color:var(--fg);border:1px solid var(--line);padding:5px 8px;cursor:pointer;flex:none}
.cp:hover{background:var(--fg);color:var(--bg)}
.cp:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
nav.toc{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;background:var(--bg);border-bottom:var(--rule)}
nav.toc .wrap{display:flex;gap:6px;overflow-x:auto;padding-block:10px;scrollbar-width:none}
nav.toc a{flex:none;font:600 12px var(--mono);letter-spacing:.06em;text-transform:uppercase;text-decoration:none;color:var(--muted);padding:6px 10px;border:1px solid var(--line)}
nav.toc a:hover{color:var(--fg);border-color:var(--fg)}
footer{padding-block:36px 60px;color:var(--muted);font:13px var(--mono)}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
"""

BRANDS = {
 "trading": dict(
  md="trading-content-report-2026-10-18.md", title="The Trust Rulebook",
  fonts="family=Big+Shoulders+Display:wght@700;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;600",
  css="""
/* Layout: a printed rulebook. Black tab, giant condensed caps, one red mark per section. */
:root{--bg:#F1EEE6;--fg:#0D0D0D;--accent:#E8321C;--muted:#5F5A50;--line:#0D0D0D33;--chip:#E6E1D5;--card:#F7F5EF;
--display:"Big Shoulders Display",Impact,"Arial Narrow",sans-serif;--body:"Newsreader",Georgia,serif;--mono:"JetBrains Mono",ui-monospace,monospace;
--rule:2px solid var(--fg);--tborder:2px solid var(--fg);--cborder:1.5px solid var(--fg)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121110;--fg:#EDE9DF;--accent:#FF5A43;--muted:#A8A294;--line:#EDE9DF33;--chip:#1D1B19;--card:#181715;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#121110;--fg:#EDE9DF;--accent:#FF5A43;--muted:#A8A294;--line:#EDE9DF33;--chip:#1D1B19;--card:#181715;color-scheme:dark}
h2{font-size:clamp(40px,7vw,72px);text-transform:uppercase;font-weight:900;letter-spacing:-.005em}
h2::after{content:"";display:block;width:120px;height:7px;background:var(--accent);margin-top:12px;border-radius:2px}
h3{font-size:30px;text-transform:uppercase;font-weight:900}
.hero{padding-block:34px 40px}
.tab{display:inline-block;background:var(--fg);color:var(--bg);font:600 13px var(--mono);letter-spacing:.14em;padding:8px 14px}
.no{float:right;font:600 13px var(--mono);letter-spacing:.14em;padding-top:8px}
.hero h1{font-family:var(--display);font-weight:900;text-transform:uppercase;font-size:clamp(64px,13vw,150px);line-height:.88;margin:36px 0 18px;letter-spacing:-.01em}
.hero h1 span{color:var(--accent);text-decoration:underline;text-decoration-thickness:.07em;text-underline-offset:.08em}
.lede{font-size:clamp(20px,2.6vw,26px);font-style:italic;max-width:30ch;line-height:1.3}
.facts{display:flex;flex-wrap:wrap;gap:0;margin-top:26px;border:2px solid var(--fg)}
.facts div{flex:1 1 160px;padding:12px 14px;border-right:2px solid var(--fg)}
.facts div:last-child{border-right:0}
.facts b{display:block;font-family:var(--display);font-size:40px;line-height:1}
.facts small{font:12px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.disc{margin-top:18px;font:12px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
""",
  hero="""<header class="hero wrap"><span class="tab">THE RULEBOOK</span><span class="no">@ABELKAPOOR · 2026-10-18</span>
<h1>Trust before <span>the offer.</span></h1>
<p class="lede">How @abelkapoor becomes the account people trust with their trading, by teaching The Wall Model so well that they ask why it's free.</p>
<div class="facts"><div><b>15+</b><small>creators studied</small></div><div><b>207</b><small>Evan reels measured</small></div><div><b>40</b><small>hooks ready</small></div><div><b>12</b><small>scripts ready</small></div><div><b>6</b><small>months mapped</small></div></div>
<p class="disc">Education only. Not financial advice. Trading involves risk.</p></header>"""),

 "codewithabel": dict(
  md="codewithabel-content-report-2026-10-18.md", title="Build Log Playbook",
  fonts="family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=JetBrains+Mono:wght@400;600",
  css="""
/* Layout: a loud dev-log. Cobalt slab hero, outlined giant number, acid highlights, mono labels. */
:root{--bg:#F5F6FB;--fg:#0B0B14;--accent:#2338FF;--acid:#D9FF3F;--muted:#55586E;--line:#0B0B1426;--chip:#E8EAF6;--card:#FFFFFF;
--display:"Bricolage Grotesque",system-ui,sans-serif;--body:"Bricolage Grotesque",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,monospace;
--rule:1px solid var(--line);--tborder:1px solid var(--line);--cborder:1px solid var(--line)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0B0B14;--fg:#EEF0FF;--accent:#7C8BFF;--acid:#D9FF3F;--muted:#9EA2C2;--line:#EEF0FF24;--chip:#151626;--card:#11121E;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#0B0B14;--fg:#EEF0FF;--accent:#7C8BFF;--acid:#D9FF3F;--muted:#9EA2C2;--line:#EEF0FF24;--chip:#151626;--card:#11121E;color-scheme:dark}
h2{font-size:clamp(34px,5.5vw,56px);font-weight:800;letter-spacing:-.035em}
h3{font-size:24px;font-weight:800;letter-spacing:-.02em}
.hero{background:#2338FF;color:#F5F6FB}
.hero .wrap{padding-block:40px 46px;position:relative;overflow:hidden}
.big{font-family:var(--display);font-weight:800;font-size:clamp(120px,26vw,300px);line-height:.8;letter-spacing:-.06em;color:transparent;-webkit-text-stroke:2px #D9FF3F;position:absolute;right:-10px;bottom:-30px;opacity:.9;pointer-events:none}
.kick{font:600 13px var(--mono);letter-spacing:.12em;text-transform:uppercase}
.hero h1{font-family:var(--display);font-weight:800;font-size:clamp(52px,10vw,112px);line-height:.9;letter-spacing:-.05em;margin:22px 0 16px;max-width:9ch;position:relative}
.hero h1 mark{background:#D9FF3F;color:#0B0B14;padding:0 .08em}
.hero p{max-width:40ch;font-size:20px;position:relative}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px;position:relative}
.chips span{font:600 12px var(--mono);letter-spacing:.06em;background:#0B0B14;color:#D9FF3F;padding:7px 10px}
.sec h2 em{font-style:normal;background:var(--acid);color:#0B0B14;padding:0 .1em}
""",
  hero="""<header class="hero"><div class="wrap"><div class="big" aria-hidden="true">06</div><div class="kick">@codewithabel · build log · 2026-10-18</div>
<h1>Show it <mark>working.</mark> Then the mess.</h1>
<p>A six-month plan to make @codewithabel the developer account people follow for real AI-built tools from a working studio.</p>
<div class="chips"><span>10+ creators studied</span><span>30 hooks</span><span>10 scripts</span><span>5 series</span><span>6 months</span></div></div></header>"""),

 "launch": dict(
  md="launch-plan-2026-10-18.md", title="Community Launch Gates",
  fonts="family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Figtree:wght@400;600&family=JetBrains+Mono:wght@400;600",
  css="""
/* Layout: a decision memo. Neutral paper, one green 'gate open' accent, gates table as the hero object. */
:root{--bg:#F3F2EE;--fg:#16161A;--accent:#1F7A4D;--muted:#5D5C63;--line:#16161A22;--chip:#E7E6E0;--card:#FBFAF7;
--display:"Fraunces",Georgia,serif;--body:"Figtree",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,monospace;
--rule:1px solid var(--line);--tborder:1px solid var(--line);--cborder:1px solid var(--line)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121215;--fg:#ECEBF0;--accent:#4CC38A;--muted:#A3A2AB;--line:#ECEBF024;--chip:#1C1C21;--card:#1A1A1F;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#121215;--fg:#ECEBF0;--accent:#4CC38A;--muted:#A3A2AB;--line:#ECEBF024;--chip:#1C1C21;--card:#1A1A1F;color-scheme:dark}
h2{font-size:clamp(30px,5vw,46px);font-weight:800;letter-spacing:-.02em}
h3{font-size:22px;font-weight:800}
.hero{padding-block:40px 30px}
.kick{font:600 12px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.hero h1{font:800 clamp(44px,8vw,84px)/1 var(--display);letter-spacing:-.025em;margin:14px 0 14px;max-width:14ch}
.hero h1 span{color:var(--accent)}
.hero p{max-width:58ch;color:var(--muted);font-size:19px}
.pill{display:inline-flex;gap:8px;align-items:center;margin-top:16px;font:600 13px var(--mono);color:var(--accent);border:1px solid var(--accent);padding:7px 12px;border-radius:999px}
""",
  hero="""<header class="hero wrap"><div class="kick">Trading + coding communities · 2026-10-18</div>
<h1>Open on <span>signals</span>, not on a date.</h1>
<p>Amber King and Evan Krutchik both had a small community running long before their Instagram took off. Start the free community now, and open the paid tier when three of four gates hold for two weeks.</p>
<span class="pill">Gates: demand · free members · activity · reach</span></header>"""),

 "disojo": dict(
  md="disojo-content-report-2026-10-18.md", title="Where Work Leaks",
  fonts="family=Host+Grotesk:wght@300;400;600;800&family=JetBrains+Mono:wght@400;600",
  css="""
/* Layout: calm studio editorial. Ink and cream, hairlines, one large statement, generous air. */
:root{--bg:#E8E8E3;--fg:#131311;--accent:#131311;--cream:#E6DDD6;--muted:#5E5C57;--line:#13131124;--chip:#DEDDD6;--card:#F0F0EC;
--display:"Host Grotesk",system-ui,sans-serif;--body:"Host Grotesk",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,monospace;
--rule:1px solid var(--line);--tborder:1px solid var(--line);--cborder:1px solid var(--line)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#131311;--fg:#E6DDD6;--accent:#E6DDD6;--muted:#A39C95;--line:#E6DDD626;--chip:#1C1C1A;--card:#191917;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#131311;--fg:#E6DDD6;--accent:#E6DDD6;--muted:#A39C95;--line:#E6DDD626;--chip:#1C1C1A;--card:#191917;color-scheme:dark}
h2{font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-.045em}
h3{font-size:22px;font-weight:800;letter-spacing:-.02em}
.hero{padding-block:30px 52px}
.top{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:16px;font:600 12px var(--mono);letter-spacing:.12em;text-transform:uppercase}
.wm{font-family:var(--display);font-weight:800;font-size:22px;letter-spacing:.08em}
.hero h1{font-family:var(--display);font-weight:800;font-size:clamp(48px,9vw,104px);line-height:.95;letter-spacing:-.055em;margin:56px 0 22px;max-width:12ch}
.hero h1 span{background:var(--fg);color:var(--bg);padding:0 .1em;border-radius:.12em}
.hero p{font-size:21px;max-width:44ch;color:var(--muted)}
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);margin-top:34px}
.facts div{background:var(--bg);padding:14px 16px}
.facts b{display:block;font-family:var(--display);font-weight:800;font-size:34px;letter-spacing:-.04em}
.facts small{font:12px var(--mono);color:var(--muted);letter-spacing:.04em}
""",
  hero="""<header class="hero wrap"><div class="top"><span class="wm">DISOJO</span><span>@disojo.solutions · 2026-10-18</span></div>
<h1>Talk to the <span>owner.</span></h1>
<p>Most automation content on Instagram sells the dream to would-be agency owners. This plan speaks to the owner of the drum school, the clinic and the perfume brand about their own week, and turns that into discovery calls.</p>
<div class="facts"><div><b>40+</b><small>posts analysed</small></div><div><b>30</b><small>hooks ready</small></div><div><b>10</b><small>scripts ready</small></div><div><b>4</b><small>series</small></div><div><b>6</b><small>months mapped</small></div></div></header>"""),
}

for key, b in BRANDS.items():
    md = (HUB / "reports" / b["md"]).read_text()
    body, toc = convert(md)
    nav = '<nav class="toc" aria-label="Sections"><div class="wrap">' + "".join(f'<a href="#{s}">{html.escape(t)}</a>' for s, t in toc) + "</div></nav>"
    page = (f'<title>{b["title"]}</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n'
            f'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?{b["fonts"]}&display=swap">\n'
            f"<style>{b['css']}{BASE_CSS}</style>\n{b['hero']}\n{nav}\n<main class=\"wrap\">{body}</main>\n"
            f'<footer class="wrap">Source report: content-hub/reports/{b["md"]}. Research notes: content-hub/research/copy-2026-10-18/.</footer>\n{JS}')
    (OUT / f"{key}.html").write_text(page)
    print(key, len(page), "bytes,", len(toc), "sections")
