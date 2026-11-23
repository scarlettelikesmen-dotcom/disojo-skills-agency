// Type against the screen, from the DOM. node beauty_type.cjs <out.json> <name>=<url> ...
// Per screen (first 4 at 1512x864): biggest text (px and share of screen width it spans), how many lines
// of text sit at 64px+, smallest visible text, distinct sizes, share of the screen covered by text boxes,
// smallest left/right text margin, and the contrast of the biggest text against its nearest solid background
// (null when it sits on an image). Study only.
const puppeteer = require('puppeteer-core'); const fs = require('fs');
const [OUT, ...specs] = process.argv.slice(2);
const wait = ms => new Promise(r => setTimeout(r, ms));
const probe = () => {
  const lum = c => { const m = c.match(/[\d.]+/g); if (!m) return null; const [r, g, b] = m.slice(0, 3).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return { L: .2126 * r + .7152 * g + .0722 * b, a: m[3] == null ? 1 : +m[3] }; };
  const bgOf = e => { for (let n = e; n && n !== document.documentElement; n = n.parentElement) { const s = getComputedStyle(n); if (s.backgroundImage !== 'none' && !/gradient/.test(s.backgroundImage)) return null; const c = lum(s.backgroundColor); if (c && c.a > .9) return c.L; } const c = lum(getComputedStyle(document.body).backgroundColor); return c && c.a > .9 ? c.L : 1; };
  const W = innerWidth, H = innerHeight, runs = [];
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t; (t = tw.nextNode());) {
    if (!t.textContent.trim()) continue; const e = t.parentElement; const s = getComputedStyle(e);
    if (s.visibility === 'hidden' || +s.opacity === 0) continue;
    const rg = document.createRange(); rg.selectNodeContents(t); const r = rg.getBoundingClientRect();
    if (r.width < 2 || r.bottom < 0 || r.top > H || r.right < 0 || r.left > W) continue;
    // under something covering it (a solid layer on top)? sample the centre
    const hit = document.elementFromPoint(Math.min(W - 1, Math.max(0, r.left + r.width / 2)), Math.min(H - 1, Math.max(0, r.top + r.height / 2)));
    if (hit && !e.contains(hit) && !hit.contains(e)) continue;
    const fs = parseFloat(s.fontSize); const c = lum(s.color); const bg = bgOf(e);
    const cr = c && bg != null ? (Math.max(c.L, bg) + .05) / (Math.min(c.L, bg) + .05) : null;
    runs.push({ fs, x: r.left, y: r.top, w: Math.min(r.right, W) - Math.max(r.left, 0), h: Math.min(r.bottom, H) - Math.max(r.top, 0), cr, a: c ? c.a * +s.opacity : 1, txt: t.textContent.trim().slice(0, 40) });
  }
  if (!runs.length) return null;
  const big = runs.reduce((m, r) => r.fs > m.fs ? r : m);
  const bigRuns = runs.filter(r => r.fs >= big.fs * .95);
  const span = Math.max(...bigRuns.map(r => r.x + r.w)) - Math.min(...bigRuns.map(r => r.x));
  const area = runs.reduce((s, r) => s + Math.max(0, r.w) * Math.max(0, r.h), 0) / (W * H);
  const display = runs.filter(r => r.fs >= 64);
  return { big: big.fs, bigVw: +(big.fs / W * 100).toFixed(2), bigSpan: +(span / W).toFixed(2), bigText: big.txt, bigContrast: big.cr && +big.cr.toFixed(1), bigAlpha: +big.a.toFixed(2),
    displayArea: +(display.reduce((s, r) => s + r.w * r.h, 0) / (W * H)).toFixed(3), small: Math.min(...runs.map(r => r.fs)), sizes: new Set(runs.map(r => Math.round(r.fs))).size,
    textArea: +area.toFixed(3), marginL: Math.round(Math.min(...runs.map(r => r.x)).valueOf()), marginR: Math.round(W - Math.max(...runs.map(r => r.x + r.w))) };
};
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--hide-scrollbars'] });
  const res = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT)) : {};
  for (const spec of specs) {
    const [name, url] = [spec.slice(0, spec.indexOf('=')), spec.slice(spec.indexOf('=') + 1)];
    const p = await b.newPage(); await p.setViewport({ width: 1512, height: 864 });
    const rows = [];
    try {
      await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); await wait(9000);
      await p.evaluate(() => { const b = [...document.querySelectorAll('button, a, [role=button]')].reverse().find(e => /^\s*(decline|reject( all)?|deny|only necessary|necessary only|accept( all)?|agree|ok|got it)\s*$/i.test(e.textContent)); if (b) b.click(); }).catch(() => {});
      await wait(800); await p.mouse.move(756, 432);
      for (let s = 0; s < 4; s++) {
        if (s) { for (let k = 0; k < 8; k++) { await p.mouse.wheel({ deltaY: 108 }); await wait(60); } await wait(1800); }
        rows.push(await p.evaluate(probe).catch(e => ({ err: String(e).slice(0, 80) })));
      }
    } catch (e) { rows.push({ err: String(e).slice(0, 80) }); }
    res[name] = { url, rows }; console.log(name, JSON.stringify(rows[0]));
    await p.close(); fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
  }
  await b.close(); process.exit(0);
})();
