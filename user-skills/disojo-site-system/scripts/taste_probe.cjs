// Design taste probe: measures what a page is made of, screen by screen.
// node taste_probe.cjs <outDir> <url> [maxPages=12]   (WIDTH=390 for phone)
// Visits the url plus its internal pages (nav and footer links), scrolls with the wheel
// (so Lenis and reveals run), and for every page writes:
//   text runs (family, weight, size, line height, tracking, case, colour, chars, box)
//   media boxes (kind, aspect, size vs viewport, radius, fit)
//   block boxes for spacing (top, bottom, left, right of every visible leaf block)
//   buttons and links with their resting style, then hovers each and records what changed
//   screenshots at every screen stop, hover crops before and after
// Study only: nothing measured here is copied into client work.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [OUT, START, MAXP = '12'] = process.argv.slice(2);
const W = +(process.env.WIDTH || 1512), H = W < 700 ? 844 : 864;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sleep = ms => new Promise(r => setTimeout(r, ms));
fs.mkdirSync(OUT, { recursive: true });

const MEASURE = () => {
  const vw = innerWidth, vh = innerHeight, sy = scrollY;
  const vis = el => { const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  const box = el => { const r = el.getBoundingClientRect(); return { x: Math.round(r.left), y: Math.round(r.top + sy), w: Math.round(r.width), h: Math.round(r.height) }; };
  const text = [], media = [], blocks = [], ctl = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (walker.nextNode()) {
    const n = walker.currentNode, t = n.textContent.replace(/\s+/g, ' ').trim();
    if (!t) continue;
    let el = n.parentElement;
    // climb past split-text spans to the element that owns the run
    while (el && el.parentElement && /^(SPAN|EM|STRONG|B|I)$/.test(el.tagName) && el.parentElement.textContent.trim().length < 400 && getComputedStyle(el).display.startsWith('inline') ) el = el.parentElement;
    if (!el || seen.has(el)) continue; seen.add(el);
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) continue;
    const s = getComputedStyle(el), fs_ = parseFloat(s.fontSize);
    text.push({ tag: el.tagName, t: el.textContent.replace(/\s+/g, ' ').trim().slice(0, 80), chars: el.textContent.replace(/\s+/g, ' ').trim().length,
      fam: s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), wt: s.fontWeight, style: s.fontStyle, size: fs_,
      lh: s.lineHeight === 'normal' ? null : +(parseFloat(s.lineHeight) / fs_).toFixed(3),
      ls: s.letterSpacing === 'normal' ? 0 : +(parseFloat(s.letterSpacing) / fs_).toFixed(3),
      tt: s.textTransform, col: s.color, align: s.textAlign, ...box(el), measure: Math.round(r.width / (fs_ * 0.5)) });
  }
  document.querySelectorAll('img,video,canvas,picture,svg,[style*="background-image"]').forEach(el => {
    if (el.tagName === 'IMG' && el.closest('picture')) return;
    if (el.tagName === 'svg' && el.getBoundingClientRect().width < 120) return;
    if (!vis(el)) return; const r = el.getBoundingClientRect(); if (r.width < 60 || r.height < 60) return;
    const s = getComputedStyle(el);
    media.push({ kind: el.tagName.toLowerCase(), src: (el.currentSrc || el.src || '').split('/').pop().slice(0, 60), ...box(el),
      ar: +(r.width / r.height).toFixed(2), wv: +(r.width / vw).toFixed(2), hv: +(r.height / vh).toFixed(2), radius: s.borderRadius, fit: s.objectFit });
  });
  document.querySelectorAll('body *').forEach(el => {
    if (!vis(el) || el.children.length > 0 && [...el.children].some(c => c.getBoundingClientRect().height > 4 && !/^(SPAN|EM|STRONG|B|I|BR|A)$/.test(c.tagName))) return;
    const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 6) return;
    blocks.push({ tag: el.tagName, ...box(el) });
  });
  const secs = [...document.querySelectorAll('section, main > *, footer, header')].filter(vis).map(el => {
    const s = getComputedStyle(el); return { tag: el.tagName, cls: (el.className + '').slice(0, 40), ...box(el), bg: s.backgroundColor, pt: s.paddingTop, pb: s.paddingBottom, pl: s.paddingLeft }; });
  document.querySelectorAll('a,button,[role=button]').forEach((el, i) => {
    if (!vis(el)) return; const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 8) return;
    el.setAttribute('data-tp', i);
    const s = getComputedStyle(el);
    ctl.push({ i, tag: el.tagName, t: el.textContent.replace(/\s+/g, ' ').trim().slice(0, 50), href: el.getAttribute('href'), ...box(el),
      fam: s.fontFamily.split(',')[0].replace(/["']/g, ''), size: parseFloat(s.fontSize), wt: s.fontWeight, tt: s.textTransform,
      pad: s.padding, radius: s.borderRadius, border: s.borderTopWidth + ' ' + s.borderTopStyle + ' ' + s.borderTopColor,
      bg: s.backgroundColor, col: s.color, cursor: s.cursor, trans: (s.transition || '').slice(0, 160) });
  });
  const root = getComputedStyle(document.documentElement), body = getComputedStyle(document.body);
  const vars = {}; for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) if (r.selectorText === ':root' && r.style) for (const p of r.style) if (p.startsWith('--')) vars[p] = r.style.getPropertyValue(p).trim(); } catch (e) {} }
  return { url: location.href, title: document.title, vw, vh, docH: document.documentElement.scrollHeight, bodyBg: body.backgroundColor, rootBg: root.backgroundColor,
    text, media, blocks: blocks.slice(0, 4000), secs, ctl, vars: Object.fromEntries(Object.entries(vars).slice(0, 300)),
    fonts: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight + ' ' + f.style) };
};

async function wheelThrough(page, dir) {
  let last = -1, stop = 0;
  for (let i = 0; i < 80; i++) {
    const y = await page.evaluate(() => scrollY);
    await page.screenshot({ path: path.join(dir, `s${String(stop).padStart(2, '0')}.jpg`), type: 'jpeg', quality: 72 }); stop++;
    for (let k = 0; k < 6; k++) { await page.mouse.wheel({ deltaY: H / 6 }); await sleep(90); }
    await sleep(900);
    const ny = await page.evaluate(() => scrollY);
    if (ny <= y + 4) { if (++last > 1) break; } else last = 0;
  }
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--hide-scrollbars', '--mute-audio'] });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1, isMobile: W < 700, hasTouch: W < 700 });
  const origin = new URL(START).origin, queue = [START], done = new Set(), pages = [], tplCount = {};
  while (queue.length && done.size < +MAXP) {
    const url = queue.shift(); const key = url.replace(/[#?].*$/, '').replace(/\/$/, ''); if (done.has(key)) continue;
    // one template, two samples: /apartments/a and /apartments/b, then skip the rest
    const tpl = new URL(key).pathname.split('/').filter(Boolean).slice(0, -1).join('/');
    if (tpl) { tplCount[tpl] = (tplCount[tpl] || 0) + 1; if (tplCount[tpl] > 2) continue; }
    done.add(key);
    const slug = (new URL(url).pathname.replace(/\//g, '_') || '_') .replace(/^_$/, 'home').replace(/^_|_$/g, '') || 'home';
    const dir = path.join(OUT, `${W}`, slug); fs.mkdirSync(dir, { recursive: true });
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 60000 }); await sleep(4500);
      // accept cookie banners so they do not sit on every screen
      await page.evaluate(() => { const re = /^(accept( all)?( cookies)?|agree|i agree|ok|okay|got it|allow( all)?|decline|reject( all)?)$/i;
        const b = [...document.querySelectorAll('button,a,[role=button],span,div')].filter(e => e.children.length <= 1 && re.test(e.textContent.trim()) && e.getBoundingClientRect().width > 0)
          .sort((x, y) => /accept|agree|allow|ok|got/i.test(y.textContent) - /accept|agree|allow|ok|got/i.test(x.textContent))[0];
        if (b) { b.click(); b.dispatchEvent(new MouseEvent('click', { bubbles: true })); } }); await sleep(1200);
      await page.mouse.move(W / 2, H / 2);
      await wheelThrough(page, dir);
      const m = await page.evaluate(MEASURE);
      // hover pass: each visible control near the current scroll is brought into view, hovered, diffed
      const hov = [];
      if (W >= 700) for (const c of m.ctl.slice(0, +(process.env.HOVERMAX || 60))) {
        try {
          const h = await page.$(`[data-tp="${c.i}"]`); if (!h) continue;
          // smooth-scroll sites ignore scrollIntoView: drive Lenis if present, then native, then check
          await h.evaluate(e => { const y = e.getBoundingClientRect().top + scrollY - innerHeight / 2; if (window.lenis && window.lenis.scrollTo) window.lenis.scrollTo(y, { immediate: true }); else { e.scrollIntoView({ block: 'center' }); } }); await sleep(700);
          const r = await h.boundingBox(); if (!r || r.width < 8 || r.y < 0 || r.y + r.height > H) continue;
          const onTop = await h.evaluate((e, x, y) => { const t = document.elementFromPoint(x, y); return !!t && (e === t || e.contains(t)); }, r.x + r.width / 2, r.y + r.height / 2);
          if (!onTop) continue;
          const pad = 24, clip = { x: Math.max(0, r.x - pad), y: Math.max(0, r.y - pad), width: Math.min(W, r.width + pad * 2), height: Math.min(H, r.height + pad * 2) };
          const before = await h.evaluate(e => { const s = getComputedStyle(e); return { bg: s.backgroundColor, col: s.color, tf: s.transform, op: s.opacity, br: s.borderRadius, bd: s.borderColor }; });
          await page.mouse.move(0, 0); await sleep(250);
          await page.screenshot({ path: path.join(dir, `h${c.i}-0.jpg`), clip, type: 'jpeg', quality: 80 });
          await page.mouse.move(r.x + r.width / 2, r.y + r.height / 2, { steps: 6 }); await sleep(800);
          await page.screenshot({ path: path.join(dir, `h${c.i}-1.jpg`), clip, type: 'jpeg', quality: 80 });
          const after = await h.evaluate(e => { const s = getComputedStyle(e); const kids = [...e.querySelectorAll('*')].slice(0, 30).map(k => getComputedStyle(k).transform).filter(t => t !== 'none').length; return { bg: s.backgroundColor, col: s.color, tf: s.transform, op: s.opacity, br: s.borderRadius, bd: s.borderColor, movedKids: kids }; });
          const cur = await page.evaluate(() => { const c = [...document.querySelectorAll('body *')].find(e => { const s = getComputedStyle(e); return s.position === 'fixed' && s.pointerEvents === 'none' && e.getBoundingClientRect().width < 200 && e.getBoundingClientRect().width > 4; }); return c ? { w: Math.round(c.getBoundingClientRect().width), txt: c.textContent.trim().slice(0, 30) } : null; });
          hov.push({ i: c.i, t: c.t, before, after, cursor: cur });
        } catch (e) {}
      }
      m.hover = hov; pages.push(m.url);
      fs.writeFileSync(path.join(dir, 'measure.json'), JSON.stringify(m));
      console.log('ok', url, 'text', m.text.length, 'media', m.media.length, 'ctl', m.ctl.length, 'hov', hov.length, 'docH', m.docH);
      for (const c of m.ctl) { if (!c.href) continue; try { const u = new URL(c.href, url); if (u.origin === origin && !/\.(pdf|jpg|png|zip)$/i.test(u.pathname)) queue.push(u.href.replace(/#.*$/, '')); } catch (e) {} }
    } catch (e) { console.log('fail', url, String(e).slice(0, 100)); }
  }
  fs.writeFileSync(path.join(OUT, `pages-${W}.json`), JSON.stringify(pages, null, 1));
  await browser.close();
})();
