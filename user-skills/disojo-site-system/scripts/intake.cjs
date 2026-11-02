// Stage 1, intake from a live URL: node intake.cjs <url> <projectDir> [maxPages=150]
// Finds every page (sitemap.xml / sitemap_index, then same-origin links), and for each page saves the
// main content as ordered blocks, word for word, to <project>/research/pages/<slug>.json.
// Also writes research/site.json (nav, footer links, contacts, socials, logo candidates, forms, the source
// site's measured design system) and screenshots of the original (research/source-shots).
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [START, PROJ, MAXS] = process.argv.slice(2); const MAX = +(MAXS || 150);
if (!START || !PROJ) { console.error('usage: node intake.cjs <url> <projectDir> [maxPages]'); process.exit(1); }
const R = path.join(PROJ, 'research'); const PAGES = path.join(R, 'pages'); const SHOTS = path.join(R, 'source-shots');
[R, PAGES, SHOTS].forEach(d => fs.mkdirSync(d, { recursive: true }));
const origin = new URL(START).origin; const host = new URL(START).hostname.replace(/^www\./, '');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
const SKIP = /\.(pdf|jpe?g|png|webp|gif|svg|zip|docx?|xlsx?|mp4|mp3)(\?|$)|\/(wp-admin|wp-json|feed|cart|checkout|my-account|login|tag|author)\/|[?&](replytocom|share|s)=/i;
const norm = u => { try { const x = new URL(u, origin); if (x.hostname.replace(/^www\./, '') !== host) return null; x.hash = ''; x.search = ''; let p = x.pathname.replace(/\/index\.html?$/, '/'); if (!p.endsWith('/') && !/\.\w{2,5}$/.test(p)) p += '/'; return origin + p; } catch { return null; } };
const slugOf = u => new URL(u).pathname.replace(/^\/|\/$/g, '').replace(/\//g, '__') || 'home';

async function sitemap() {
  const out = new Set(); const seen = new Set();
  const get = async u => { if (seen.has(u) || seen.size > 40) return; seen.add(u); try { const t = await (await fetch(u, { headers: { 'User-Agent': UA } })).text(); for (const m of t.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) { const l = m[1].replace(/&amp;/g, '&'); if (/sitemap[^/]*\.xml/i.test(l)) await get(l); else { const n = norm(l); if (n && !SKIP.test(n)) out.add(n); } } } catch {} };
  for (const s of ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml', '/page-sitemap.xml']) await get(origin + s);
  return [...out];
}

const EXTRACT = () => {
  const m = document.querySelector('main') || document.querySelector('[role=main]') || document.body; const blocks = [];
  const chrome = e => e.closest('header,nav,footer,[role=navigation],[role=banner],[role=contentinfo],.cookie,#cookie,[class*=cookie],[aria-hidden=true]');
  const san = el => { const c = el.cloneNode(true); c.querySelectorAll('*').forEach(n => { if (!/^(A|STRONG|B|EM|I|BR)$/.test(n.tagName)) n.replaceWith(...n.childNodes); else [...n.attributes].forEach(a => { if (!(n.tagName === 'A' && a.name === 'href')) n.removeAttribute(a.name); }); }); return c.innerHTML.replace(/\s+/g, ' ').trim(); };
  const txt = el => (el.innerText || '').trim() || (el.textContent || '').replace(/\s+/g, ' ').trim();
  const walk = el => {
    if (m !== document.body ? false : chrome(el)) return;
    const t = el.tagName; const st = getComputedStyle(el);
    // hidden tab panes and accordion answers are real content; other hidden things (menus, modals) are not
    if (st.display === 'none' && !el.matches('[role=tabpanel],[class*=tab-pane],[class*=tab_pane],[class*=tabs-content] > *,[class*=accordion] *,[class*=answer],[class*=faq] *,details *')) return;
    if (/^(SCRIPT|STYLE|NOSCRIPT|SVG|BUTTON|TEMPLATE)$/.test(t)) return;
    if (t === 'FORM') { blocks.push({ t: 'form', action: el.getAttribute('action') || '', fields: [...el.querySelectorAll('input,textarea,select')].filter(f => f.type !== 'hidden').map(f => ({ name: f.name || f.id, type: f.type || f.tagName.toLowerCase(), label: (f.labels?.[0]?.innerText || f.placeholder || f.getAttribute('aria-label') || '').trim(), required: f.required })) }); return; }
    if (/^H[1-6]$/.test(t)) { const a = el.querySelector('a') || el.closest('a'); const x = txt(el); if (x) blocks.push({ t: t.toLowerCase(), x, ...(a ? { href: a.href } : {}) }); return; }
    if (t === 'P' || t === 'BLOCKQUOTE') { const x = txt(el); if (x) blocks.push({ t: t === 'P' ? 'p' : 'quote', x, h: san(el) }); el.querySelectorAll('img').forEach(i => blocks.push({ t: 'img', src: i.currentSrc || i.src, alt: i.alt || '' })); return; }
    if (t === 'LI') { if (el.querySelector('li,h2,h3,p')) { [...el.children].forEach(walk); return; } const x = txt(el); const a = el.querySelector('a'); if (x) blocks.push({ t: 'li', x, h: san(el), ...(a ? { href: a.href } : {}) }); return; }
    if (t === 'TABLE') { blocks.push({ t: 'table', rows: [...el.rows].map(r => [...r.cells].map(c => txt(c))) }); return; }
    if (t === 'IMG') { const s = el.currentSrc || el.src || el.getAttribute('src'); if (s && !s.startsWith('data:') && (el.naturalWidth > 40 || !el.naturalWidth)) blocks.push({ t: 'img', src: s, alt: el.alt || '', w: el.naturalWidth, h: el.naturalHeight }); return; }
    if (t === 'IFRAME' || t === 'VIDEO') { blocks.push({ t: 'embed', src: el.src || el.querySelector('source')?.src || '', title: el.title || '' }); return; }
    if (t === 'A' && !el.querySelector('h1,h2,h3,h4,p,img,li')) { const x = txt(el); if (x) blocks.push({ t: 'a', x, href: el.href }); return; }
    const kids = [...el.children];
    if (!kids.length || ([...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2) && !el.querySelector('h1,h2,h3,h4,p,li,img,div'))) { const x = txt(el); if (x) blocks.push({ t: 'tx', x }); return; }
    const bg = st.backgroundImage; if (bg && bg.startsWith('url(') && !bg.includes('data:')) blocks.push({ t: 'img', src: bg.slice(5, -2).replace(/^"|"$/g, ''), alt: '', bg: true });
    kids.forEach(walk);
  };
  walk(m);
  const og = n => document.querySelector(`meta[property="${n}"]`)?.content || '';
  return { title: document.title, desc: document.querySelector('meta[name=description]')?.content || og('og:description'), ogImage: og('og:image'), h1: document.querySelector('h1')?.innerText.trim() || '', blocks, links: [...document.querySelectorAll('a[href]')].map(a => a.href) };
};

const CHROME = () => {
  const L = sel => [...document.querySelectorAll(sel)].map(a => ({ x: (a.innerText || a.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' '), href: a.href })).filter(l => l.x || l.href);
  const all = [...document.querySelectorAll('a[href]')].map(a => a.href);
  const text = document.body.innerText;
  const logo = [...document.querySelectorAll('header img, header svg, a[href="/"] img, [class*=logo] img, img[alt*=logo i], img[class*=logo i]')].slice(0, 4).map(e => e.tagName === 'IMG' ? { img: e.currentSrc || e.src, alt: e.alt } : { svg: e.outerHTML.slice(0, 20000) });
  return {
    nav: L('header nav a, header a, [role=navigation] a').slice(0, 60), footer: L('footer a').slice(0, 80), footerText: document.querySelector('footer')?.innerText.trim().slice(0, 3000) || '',
    tel: [...new Set(all.filter(h => h.startsWith('tel:')))], mail: [...new Set(all.filter(h => h.startsWith('mailto:')).map(h => h.split('?')[0]))],
    social: [...new Set(all.filter(h => /instagram|facebook|linkedin|youtube|tiktok|x\.com|twitter|pinterest|wa\.me|whatsapp|threads|yelp|google\.com\/maps|g\.page/i.test(h)))],
    address: ((document.querySelector('footer')?.innerText || '').match(/\d{1,5}[A-Z]?\s[^\n]{3,60}(Street|St\.?|Road|Rd\.?|Avenue|Ave\.?|Boulevard|Blvd|Lane|Ln\.?|Drive|Dr\.?|Floor|Suite|Marg|Nagar)[^\n]{0,60}/i) || text.match(/\d{1,5}[^\n]{3,60}(Street|St\.?|Road|Rd\.?|Avenue|Ave\.?|Boulevard|Blvd|Lane|Floor|Suite|Marg|Nagar)[^\n]{0,60}/i) || [''])[0],
    logo, icons: [...document.querySelectorAll('link[rel*=icon]')].map(l => l.href), lang: document.documentElement.lang,
    ld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => s.textContent.slice(0, 4000)),
  };
};

(async () => {
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' });
  let urls = await sitemap(); const fromSitemap = urls.length;
  const queue = [norm(START), ...urls].filter(Boolean); const done = new Set(); const results = [];
  const visit = async url => {
    const p = await b.newPage(); await p.setUserAgent(UA); await p.setViewport({ width: 1512, height: 864 });
    const resp = await p.goto(url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => null);
    const status = resp ? resp.status() : 0; const finalUrl = norm(p.url()) || url;
    if (status >= 400 || !resp) { results.push({ url, status }); await p.close(); return; }
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < Math.min(H, 30000); y += 700) { await p.evaluate(y => scrollTo(0, y), y); await new Promise(r => setTimeout(r, 90)); }
    await new Promise(r => setTimeout(r, 700));
    const d = await p.evaluate(EXTRACT);
    const slug = slugOf(finalUrl);
    fs.writeFileSync(path.join(PAGES, slug + '.json'), JSON.stringify({ url: finalUrl, requested: url, status, ...d, links: undefined }, null, 1));
    results.push({ url: finalUrl, slug, status, words: d.blocks.reduce((n, x) => n + (x.x || '').split(/\s+/).length, 0), title: d.title });
    for (const l of d.links) { const n = norm(l); if (n && !SKIP.test(n) && !done.has(n) && !queue.includes(n)) queue.push(n); }
    if (slug === 'home') {
      fs.writeFileSync(path.join(R, 'chrome.json'), JSON.stringify(await p.evaluate(CHROME), null, 1));
      await p.screenshot({ path: path.join(SHOTS, 'home-1512.jpg'), type: 'jpeg', quality: 60, fullPage: true, captureBeyondViewport: true }).catch(() => {});
    } else if (results.length < 12) await p.screenshot({ path: path.join(SHOTS, slug.slice(0, 60) + '-1512.jpg'), type: 'jpeg', quality: 55 }).catch(() => {});
    await p.close();
  };
  while (queue.length && done.size < MAX) {
    const batch = []; while (queue.length && batch.length < 5) { const u = queue.shift(); if (!done.has(u)) { done.add(u); batch.push(u); } }
    await Promise.all(batch.map(visit)); process.stdout.write(`\r${done.size} pages`);
  }
  const ph = await b.newPage(); await ph.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await ph.goto(START, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {}); await new Promise(r => setTimeout(r, 2000));
  await ph.screenshot({ path: path.join(SHOTS, 'home-390.jpg'), type: 'jpeg', quality: 60, fullPage: true, captureBeyondViewport: true }).catch(() => {});
  await b.close();
  fs.writeFileSync(path.join(R, 'crawl.json'), JSON.stringify({ start: START, at: new Date().toISOString(), fromSitemap, capped: done.size >= MAX, pages: results }, null, 1));
  console.log(`\npages saved ${results.filter(r => r.slug).length}, failed ${results.filter(r => !r.slug).length}, sitemap urls ${fromSitemap}${done.size >= MAX ? ' (CAPPED: raise maxPages)' : ''}`);
})();
