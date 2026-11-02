// A-to-Z gate for a built redo: node audit.cjs <project> <baseUrl>
// 1) every route in site/dist at 1512 and 390: JS errors, failed requests, overflow, one h1, title, description, broken images, empty links, missing alt
// 2) every internal link and #anchor resolves; every external link answers (bot blocks are listed, not hidden)
// 3) parity: every heading, paragraph and list item from research/pages appears on the matching route
// 4) every old route from the crawl exists on the new site or has a redirect in site/src/data/redirects.json
// Writes <project>/qa/audit.json and prints a summary. Exit 1 on any problem in 1, 3 or 4.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [PROJ, BASE] = process.argv.slice(2);
const dist = path.join(PROJ, 'site', 'dist'); const QA = path.join(PROJ, 'qa'); fs.mkdirSync(QA, { recursive: true });
const routes = []; (function walk(d, r) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (!['img', '_astro', 'fonts'].includes(f)) walk(p, r + f + '/'); } else if (f === 'index.html') routes.push('/' + r); } })(dist, '');
const norm = s => (s || '').replace(/<[^>]+>/g, ' ').replace(/[“”"’'‘]/g, '').replace(/[–—-]/g, '-').replace(/&amp;/g, '&').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const out = { problems: [], internal: {}, external: {}, parity: {}, missingRoutes: [], pages: {} };
(async () => {
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' });
  const visit = async (r, w) => {
    const p = await b.newPage(); await p.setViewport({ width: w, height: w > 500 ? 864 : 844, isMobile: w < 500, hasTouch: w < 500 });
    const errs = []; p.on('pageerror', e => errs.push('JS: ' + e.message.slice(0, 140)));
    p.on('requestfailed', q => { if (!/youtube|google|gstatic|doubleclick|cloudflare/.test(q.url())) errs.push('request failed: ' + q.url().slice(0, 120)); });
    p.on('response', q => { if (q.status() >= 400 && !/youtube|google|gstatic|cloudflare/.test(q.url())) errs.push(`HTTP ${q.status()}: ${q.url().slice(0, 120)}`); });
    await p.goto(BASE + r, { waitUntil: 'networkidle2', timeout: 90000 }).catch(e => errs.push('goto ' + e.message));
    await p.evaluate(async () => { document.querySelectorAll('img[loading=lazy]').forEach(i => (i.loading = 'eager')); document.querySelectorAll('[data-reveal],[data-lines]').forEach(e => e.classList.add('in')); document.querySelectorAll('details').forEach(d => (d.open = true)); const H = document.documentElement.scrollHeight; for (let y = 0; y < H; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } scrollTo(0, 0); });
    await p.waitForNetworkIdle({ idleTime: 600, timeout: 20000 }).catch(() => {});
    const res = await p.evaluate(() => ({
      over: document.documentElement.scrollWidth - document.documentElement.clientWidth, h1: document.querySelectorAll('h1').length, title: document.title,
      desc: document.querySelector('meta[name=description]')?.content || '', links: [...document.querySelectorAll('a')].map(a => ({ href: a.getAttribute('href'), text: (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0, 40) })),
      broken: [...document.images].filter(i => !i.naturalWidth).map(i => i.currentSrc || i.src), ids: [...document.querySelectorAll('[id]')].map(e => e.id),
      text: document.body.innerText, noAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
    }));
    await p.close(); return { errs, ...res };
  };
  for (const w of [1512, 390]) for (let i = 0; i < routes.length; i += 5) await Promise.all(routes.slice(i, i + 5).map(async r => {
    const v = await visit(r, w); if (w === 1512) out.pages[r] = v;
    const is = [...v.errs]; if (v.over > 0) is.push(`overflow ${v.over}px`); if (v.h1 !== 1) is.push(`h1 count ${v.h1}`); if (!v.desc) is.push('no meta description');
    if (v.broken.length) is.push('broken images: ' + v.broken.slice(0, 3).join(' | ')); const empty = v.links.filter(l => !l.href || l.href === '#').length; if (empty) is.push(`${empty} empty links`); if (v.noAlt) is.push(`${v.noAlt} images without alt`);
    if (is.length) out.problems.push({ r, w, is });
  }));
  // links
  const ext = new Map();
  for (const [r, pg] of Object.entries(out.pages)) for (const l of pg.links) {
    const h = l.href; if (!h || /^(tel|mailto|data|javascript):/.test(h)) continue;
    if (h.startsWith('/') || h.startsWith('#')) { const [p0, a] = h.split('#'); const t = p0 || r; const ok = routes.includes(t) || /\.(xml|json|pdf|png|jpe?g|webp|svg|ico|txt)$/.test(t); const aOk = !a || (out.pages[t]?.ids || []).includes(a); if (!ok || !aOk) (out.internal[r] ||= []).push(`${h} ${!ok ? '(no page)' : '(no anchor)'} "${l.text}"`); }
    else if (/^https?:/.test(h)) { if (!ext.has(h)) ext.set(h, new Set()); ext.get(h).add(r); }
  }
  const list = [...ext.keys()]; let k = 0;
  const check = async u => { for (const m of ['HEAD', 'GET']) { try { const c = new AbortController(); const t = setTimeout(() => c.abort(), 15000); const res = await fetch(u, { method: m, redirect: 'follow', signal: c.signal, headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/130 Safari/537.36' } }); clearTimeout(t); if (res.status < 400 || m === 'GET') return res.status; } catch (e) { if (m === 'GET') return 'ERR'; } } };
  await Promise.all(Array.from({ length: 8 }, async () => { while (k < list.length) { const u = list[k++]; const s = await check(u); if (!(typeof s === 'number' && s < 400)) out.external[u] = { status: s, on: [...ext.get(u)].slice(0, 3) }; } }));
  // parity
  const src = path.join(PROJ, 'research', 'pages'); const rOf = s => s === 'home' ? '/' : '/' + s.replace(/__/g, '/') + '/';
  const redirects = fs.existsSync(path.join(PROJ, 'site', 'src', 'data', 'redirects.json')) ? JSON.parse(fs.readFileSync(path.join(PROJ, 'site', 'src', 'data', 'redirects.json'))) : {};
  const chromeTxt = new Set(); try { const c = JSON.parse(fs.readFileSync(path.join(PROJ, 'research', 'chrome.json'))); [...c.nav, ...c.footer].forEach(l => chromeTxt.add(norm(l.x))); } catch {}
  for (const f of fs.readdirSync(src)) {
    const slug = f.replace(/\.json$/, ''); let r = rOf(slug); if (!routes.includes(r) && redirects[r] && routes.includes(redirects[r])) r = redirects[r];
    if (!routes.includes(r)) { out.missingRoutes.push(rOf(slug)); continue; }
    const mine = norm(out.pages[r].text); const d = JSON.parse(fs.readFileSync(path.join(src, f))); const miss = [];
    for (const bl of d.blocks) { if (!['p', 'li', 'h1', 'h2', 'h3', 'h4', 'quote'].includes(bl.t)) continue; const t = norm(bl.x); if (t.length < 4 || chromeTxt.has(t)) continue; if (!mine.includes(t.slice(0, 90))) miss.push(`[${bl.t}] ${t.slice(0, 100)}`); }
    if (miss.length) out.parity[r] = miss;
  }
  await b.close();
  for (const r in out.pages) out.pages[r] = { title: out.pages[r].title };
  fs.writeFileSync(path.join(QA, 'audit.json'), JSON.stringify(out, null, 1));
  console.log(`routes ${routes.length} | page problems ${out.problems.length} | pages with bad internal links ${Object.keys(out.internal).length} | external links ${list.length}, not answering ${Object.keys(out.external).length} | parity gaps on ${Object.keys(out.parity).length} pages | old routes missing ${out.missingRoutes.length}`);
  out.problems.slice(0, 15).forEach(p => console.log(`  ${p.r} @${p.w}: ${p.is.join('; ')}`));
  Object.entries(out.internal).slice(0, 10).forEach(([r, l]) => console.log(`  link ${r}: ${l.slice(0, 3).join('; ')}`));
  Object.entries(out.parity).slice(0, 10).forEach(([r, l]) => console.log(`  parity ${r} (${l.length}): ${l[0]}`));
  out.missingRoutes.slice(0, 10).forEach(r => console.log(`  missing route ${r}`));
  Object.entries(out.external).slice(0, 10).forEach(([u, v]) => console.log(`  external ${v.status} ${u.slice(0, 90)}`));
  process.exit(out.problems.length || Object.keys(out.internal).length || Object.keys(out.parity).length || out.missingRoutes.length ? 1 : 0);
})();
