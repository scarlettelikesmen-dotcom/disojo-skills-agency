// Design-system gate: does the built site obey its own tokens.json?
// node system_check.cjs <baseUrl> <tokens.json> [route ...]   (default routes: / plus up to 5 from sitemap.xml)
// FAIL: font family not in tokens, text under 12px at phone width, body tracking tighter than -0.03em,
//       colour far from the palette, more than 2 easings in CSS, tap targets under 40px on phone, horizontal overflow.
// WARN: more than 10 distinct text sizes on a page, radius outside the family, display/body ratio under 6.
const puppeteer = require('puppeteer-core'); const fs = require('fs');
const [BASE, TOK, ...argRoutes] = process.argv.slice(2);
const T = JSON.parse(fs.readFileSync(TOK, 'utf8'));
const fams = new Set(Object.values(T.fonts).filter(Boolean).map(f => f.family.toLowerCase()));
const pal = Object.values(T.colors).filter(Boolean).map(c => c.hex);
const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const dist = (a, b) => Math.sqrt(a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0));
// a colour passes if it is a palette colour, or a mix of two palette colours (alpha or color-mix), within tolerance
const near = c => { for (const p of pal.map(rgb)) if (dist(c, p) < 18) return true; for (const a of pal.map(rgb)) for (const b of pal.map(rgb)) for (let t = .05; t < 1; t += .05) if (dist(c, a.map((v, i) => v * t + b[i] * (1 - t))) < 10) return true; return false; };
(async () => {
  let routes = argRoutes;
  if (!routes.length) { routes = ['/']; try { const x = await (await fetch(BASE + '/sitemap.xml')).text(); routes.push(...[...x.matchAll(/<loc>[^<]*?(\/[^<]*)<\/loc>/g)].map(m => new URL(m[1], 'http://x').pathname).filter(r => r !== '/').slice(0, 5)); } catch {} }
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' });
  const fail = [], warn = [];
  for (const r of routes) for (const w of [1512, 390]) {
    const p = await b.newPage(); await p.setViewport({ width: w, height: w > 500 ? 864 : 844, isMobile: w < 500, hasTouch: w < 500 });
    await p.goto(BASE + r, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {});
    await p.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(e => e.classList.add('in')));
    const d = await p.evaluate(() => {
      const vis = e => { const s = getComputedStyle(e), rc = e.getBoundingClientRect(); return rc.width > 0 && rc.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > .05 && !e.closest('[hidden],.skip,[aria-hidden=true]'); };
      const own = e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
      const toRGB = c => { const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/); return m && !(m[4] !== undefined && +m[4] < .9) ? [+m[1], +m[2], +m[3]] : null; };
      const out = { fams: {}, sizes: {}, small: [], track: [], cols: [], radii: {}, taps: [], over: document.documentElement.scrollWidth - innerWidth, maxSize: 0, bodySize: 0 };
      for (const e of document.querySelectorAll('body *')) {
        if (!vis(e)) continue; const s = getComputedStyle(e); const rc = e.getBoundingClientRect(); const fs = parseFloat(s.fontSize);
        if (own(e)) {
          const f = s.fontFamily.split(',')[0].replace(/["']/g, '').trim().toLowerCase(); out.fams[f] = (out.fams[f] || 0) + 1;
          out.sizes[Math.round(fs)] = (out.sizes[Math.round(fs)] || 0) + 1; out.maxSize = Math.max(out.maxSize, fs);
          const lbl = (e.tagName + ' "' + e.innerText.trim().slice(0, 24) + '"');
          if (fs < 11.5) out.small.push(lbl + ' ' + fs.toFixed(1) + 'px');
          const ls = s.letterSpacing === 'normal' ? 0 : parseFloat(s.letterSpacing) / fs;
          if (fs <= 20 && ls < -0.031) out.track.push(lbl + ' ' + ls.toFixed(3) + 'em');
          const c = toRGB(s.color); if (c) out.cols.push(['text', c, lbl]);
        }
        const bg = toRGB(s.backgroundColor); if (bg && rc.width * rc.height > 4000) out.cols.push(['bg', bg, e.tagName + '.' + String(e.className).split(' ')[0]]);
        if (s.borderRadius !== '0px') out.radii[s.borderRadius] = (out.radii[s.borderRadius] || 0) + 1;
        if ((e.tagName === 'A' || e.tagName === 'BUTTON') && !e.closest('p,li,.prose,td') && (rc.height < 40 || rc.width < 40) && !(rc.height >= 24 && rc.width >= 80)) out.taps.push(e.tagName + ' "' + (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 20) + `" ${Math.round(rc.width)}x${Math.round(rc.height)}`);
      }
      out.bodySize = parseFloat(getComputedStyle(document.body).fontSize);
      let css = ''; for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) css += r.cssText; } catch {} }
      out.eases = [...new Set((css.match(/cubic-bezier\([^)]+\)/g) || []).map(x => x.replace(/\s/g, '')))];
      return out;
    });
    const tag = `${r} @${w}`;
    const badF = Object.keys(d.fams).filter(f => !fams.has(f) && !/system-ui|ui-monospace|monospace|sans-serif/.test(f)); if (badF.length) fail.push(`${tag} fonts not in tokens: ${badF.join(', ')}`);
    if (w === 390 && d.small.length) fail.push(`${tag} text under 12px: ${[...new Set(d.small)].slice(0, 5).join(' | ')}`);
    if (d.track.length) fail.push(`${tag} body/label tracking tighter than -0.03em: ${[...new Set(d.track)].slice(0, 4).join(' | ')}`);
    const offPal = [...new Map(d.cols.filter(([, c]) => !near(c)).map(([k, c, l]) => [c.join(','), `${k} rgb(${c}) on ${l}`])).values()]; if (offPal.length) fail.push(`${tag} colours off the palette: ${offPal.slice(0, 5).join(' | ')}`);
    if (d.eases.length > 2) fail.push(`${tag} ${d.eases.length} easings in CSS (max 2): ${d.eases.slice(0, 4).join(' ')}`);
    if (w === 390 && d.taps.length) fail.push(`${tag} tap targets under 40px: ${[...new Set(d.taps)].slice(0, 5).join(' | ')}`);
    if (d.over > 0) fail.push(`${tag} horizontal overflow ${d.over}px`);
    const nSizes = Object.keys(d.sizes).length; if (nSizes > 10) warn.push(`${tag} ${nSizes} distinct text sizes (aim 6-9): ${Object.keys(d.sizes).sort((a, b) => a - b).join(',')}`);
    if (w === 1512 && r === '/' && d.maxSize / d.bodySize < 6) warn.push(`${tag} display/body ratio ${(d.maxSize / d.bodySize).toFixed(1)}x (aim 6x+ unless the brief says quiet)`);
    const rk = Object.keys(d.radii).filter(x => x !== '50%'); if (rk.length > 3) warn.push(`${tag} ${rk.length} radius values: ${rk.slice(0, 6).join(', ')}`);
    await p.close();
  }
  await b.close();
  console.log(`system_check ${BASE} against ${TOK} (${routes.length} routes x 2 widths)`);
  fail.forEach(f => console.log('FAIL ' + f)); warn.forEach(x => console.log('warn ' + x));
  console.log(fail.length ? `\nRESULT: FAIL (${fail.length})` : '\nRESULT: PASS' + (warn.length ? ` with ${warn.length} warnings` : ''));
  process.exit(fail.length ? 1 : 0);
})();
