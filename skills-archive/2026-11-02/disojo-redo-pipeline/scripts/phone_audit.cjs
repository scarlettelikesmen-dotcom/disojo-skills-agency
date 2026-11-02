// Phone audit for any built site: node phone-audit.cjs <baseUrl> <distDir> <outJson>
// At 360 / 390 / 430 (touch, mobile UA): page errors, horizontal overflow, text smaller than 12px,
// tap targets under 40px, text clipped by its box, images wider than the screen, overlapping fixed bars.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [BASE, DIST, OUT] = process.argv.slice(2);
const routes = [];
(function walk(d, r) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (!f.startsWith('_') && f !== 'img' && f !== 'fonts') walk(p, r + f + '/'); } else if (f === 'index.html') routes.push('/' + r); } })(DIST, '');
(async () => {
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' });
  const res = [];
  for (const w of [390, 360, 430]) for (let i = 0; i < routes.length; i += 6) await Promise.all(routes.slice(i, i + 6).map(async r => {
    const p = await b.newPage();
    await p.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1');
    await p.setViewport({ width: w, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0, 120)));
    await p.goto(BASE + r, { waitUntil: 'networkidle2', timeout: 90000 }).catch(e => errs.push('goto ' + e.message));
    await p.addStyleTag({ content: '*,*::before,*::after{transition:none!important;animation:none!important}' });
    await p.evaluate(async () => { document.querySelectorAll('img[loading=lazy]').forEach(i => (i.loading = 'eager')); document.querySelectorAll('.rv,[data-lines],[data-reveal]').forEach(e => e.classList.add('in', 'on', 'is-in', 'shown')); const H = document.documentElement.scrollHeight; for (let y = 0; y < H; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } scrollTo(0, 0); });
    await p.waitForNetworkIdle({ idleTime: 600, timeout: 20000 }).catch(() => {});
    const r2 = await p.evaluate(() => {
      const cw = document.documentElement.clientWidth, out = { over: document.documentElement.scrollWidth - cw, wide: [], small: [], taps: [], clip: [], imgs: [] };
      const vis = e => { const s = getComputedStyle(e); const rc = e.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && rc.width > 0 && rc.height > 0 && !e.closest('[hidden],[aria-hidden="true"],.mega,.sx,.pm,.mmenu,.jl,dialog:not([open])'); };
      const label = e => (e.tagName + '.' + String(e.className).split(' ')[0] + ' "' + (e.innerText || e.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 28) + '"');
      for (const e of document.querySelectorAll('body *')) {
        if (!vis(e)) continue; const rc = e.getBoundingClientRect(); const s = getComputedStyle(e);
        const clipped = (() => { for (let a = e.parentElement; a && a !== document.body; a = a.parentElement) { const o = getComputedStyle(a).overflowX; if ((o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') && a.getBoundingClientRect().right <= cw + 1) return true; } return false; })();
        if (!clipped && rc.right > cw + 1 && s.position !== 'fixed' && !e.closest('[data-marquee],.marquee,.track,[class*=track],.subnav > div,.chips,.tools')) out.wide.push(label(e) + ' R' + Math.round(rc.right));
        const own = [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
        if (own && parseFloat(s.fontSize) < 12 && !e.closest('svg')) out.small.push(label(e) + ' ' + s.fontSize);
        if ((e.tagName === 'A' || e.tagName === 'BUTTON' || e.getAttribute('role') === 'button') && !e.closest('p, li.prose, .prose, .lede')) { if ((rc.height < 40 || rc.width < 40) && !(rc.height >= 24 && rc.width >= 80)) out.taps.push(label(e) + ` ${Math.round(rc.width)}x${Math.round(rc.height)}`); }
        if (/^H[1-4]$/.test(e.tagName) && (e.scrollWidth > e.clientWidth + 2)) out.clip.push(label(e));
      }
      for (const im of document.images) { const rc = im.getBoundingClientRect(); if (vis(im) && !im.naturalWidth) out.imgs.push('unloaded ' + im.src.slice(-50)); }
      for (const k of ['wide', 'small', 'taps', 'clip']) out[k] = [...new Set(out[k])].slice(0, 12);
      return out;
    });
    res.push({ w, r, errs, ...r2 }); await p.close();
  }));
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
  const agg = k => { const m = {}; res.forEach(x => x[k].forEach(v => { const key = v.replace(/ R\d+$| \d+x\d+$/, ''); (m[key] = m[key] || new Set()).add(x.w + x.r); })); return Object.entries(m).sort((a, b) => b[1].size - a[1].size).map(([k, v]) => `${v.size}x ${k}  e.g. ${[...v][0]}`); };
  console.log('routes', routes.length, '| overflow pages', res.filter(x => x.over > 0).map(x => x.w + x.r + ' +' + x.over).join(', ') || 'none');
  console.log('errors', res.filter(x => x.errs.length).map(x => x.w + x.r + ' ' + x.errs[0]).join(' | ') || 'none');
  for (const k of ['wide', 'clip', 'imgs', 'small', 'taps']) { const a = agg(k); console.log(`\n== ${k} (${a.length})`); a.slice(0, 25).forEach(l => console.log('  ' + l)); }
  await b.close();
})();
