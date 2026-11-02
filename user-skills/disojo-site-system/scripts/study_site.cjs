// Measure a site's design system: node study_site.cjs <outDir> <url> [url...]
// Per URL at 1512x864 and 390x844: screenshots (first screen + 4 scroll stops), and system.json with
// fonts by role, the type scale (size/weight/tracking/leading per tag), palette by area, radii, section rhythm,
// content width, nav height, buttons, easings/durations, libraries. Uses the art-direction inspector logic.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [OUT, ...urls] = process.argv.slice(2);
const MEASURE = () => {
  const hex = c => { const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/); if (!m) return c; if (m[4] !== undefined && +m[4] < 0.05) return null; return '#' + [m[1], m[2], m[3]].map(v => (+v).toString(16).padStart(2, '0')).join('').toUpperCase() + (m[4] !== undefined && +m[4] < 1 ? '@' + (+m[4]).toFixed(2) : ''); };
  const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  const top = (o, n = 8) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
  const own = e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
  const area = {}, ink = {}, fam = {}, scale = {}, radii = {}, btn = [];
  for (const e of document.querySelectorAll('body *')) {
    if (!vis(e)) continue; const s = getComputedStyle(e); const r = e.getBoundingClientRect();
    const bg = hex(s.backgroundColor); if (bg) area[bg] = (area[bg] || 0) + Math.round(r.width * r.height / 1000);
    if (own(e)) {
      const c = hex(s.color); if (c) ink[c] = (ink[c] || 0) + (e.innerText || '').length;
      const f = s.fontFamily.split(',')[0].replace(/["']/g, '').trim(); fam[f] = (fam[f] || 0) + (e.innerText || '').length;
      const tag = /^H[1-6]$/.test(e.tagName) ? e.tagName : (parseFloat(s.fontSize) >= 28 ? 'display' : e.tagName === 'P' ? 'P' : (s.textTransform === 'uppercase' || parseFloat(s.fontSize) <= 13) ? 'label' : 'other');
      const k = `${tag} ${f} ${Math.round(parseFloat(s.fontSize))}px w${s.fontWeight} ls${s.letterSpacing === 'normal' ? 0 : (parseFloat(s.letterSpacing) / parseFloat(s.fontSize)).toFixed(3) + 'em'} lh${s.lineHeight === 'normal' ? 'n' : (parseFloat(s.lineHeight) / parseFloat(s.fontSize)).toFixed(2)}${s.textTransform === 'uppercase' ? ' UC' : ''}${s.fontStyle === 'italic' ? ' it' : ''}`;
      scale[k] = (scale[k] || 0) + 1;
    }
    if (s.borderRadius && s.borderRadius !== '0px') radii[s.borderRadius] = (radii[s.borderRadius] || 0) + 1;
    if ((e.tagName === 'A' || e.tagName === 'BUTTON') && (hex(s.backgroundColor) || s.borderStyle !== 'none' && parseFloat(s.borderWidth) > 0) && r.height >= 30 && r.height <= 80 && btn.length < 6) btn.push(`${(e.innerText || '').trim().slice(0, 24)} | ${Math.round(r.height)}h r${s.borderRadius} bg${hex(s.backgroundColor)} ${Math.round(parseFloat(s.fontSize))}px w${s.fontWeight} pad ${s.padding}`);
  }
  const secs = [...document.querySelectorAll('section, main > *, footer')].filter(vis).slice(0, 30).map(e => { const s = getComputedStyle(e); return `${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} h${Math.round(e.getBoundingClientRect().height)} pt${s.paddingTop} bg${hex(s.backgroundColor) || '-'}`; });
  const widths = {}; for (const e of document.querySelectorAll('body *')) { const s = getComputedStyle(e); if (s.maxWidth !== 'none' && s.maxWidth.endsWith('px') && vis(e)) widths[s.maxWidth] = (widths[s.maxWidth] || 0) + 1; }
  const nav = document.querySelector('header, nav'); let css = '';
  for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) css += r.cssText + ' '; } catch (e) {} }
  const ease = {}, dur = {}; (css.match(/cubic-bezier\([^)]+\)/g) || []).forEach(x => (ease[x] = (ease[x] || 0) + 1));
  (css.match(/transition[^;{}]*?[\d.]+m?s/g) || []).slice(0, 400).forEach(x => (x.match(/[\d.]+m?s/g) || []).forEach(d => (dur[d] = (dur[d] || 0) + 1)));
  const libs = ['gsap', 'ScrollTrigger', 'Lenis', 'lenis', 'THREE', 'Swiper', 'lottie'].filter(k => window[k] !== undefined);
  return { title: document.title, vp: innerWidth + 'x' + innerHeight, docH: document.documentElement.scrollHeight, families: top(fam, 5), scale: top(scale, 22), ink: top(ink, 6), surfaces: top(area, 8), radii: top(radii, 6), maxWidths: top(widths, 5), buttons: btn, nav: nav ? Math.round(nav.getBoundingClientRect().height) + 'px ' + getComputedStyle(nav).position : null, sections: secs, easings: top(ease, 5), durations: top(dur, 6), libs, rootVars: Object.fromEntries([...css.matchAll(/:root\s*\{([^}]*)\}/g)].flatMap(m => m[1].split(';').map(x => x.split(':').map(y => y.trim())).filter(x => x[0]?.startsWith('--') && x[1])).slice(0, 40)) };
};
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' });
  for (const url of urls) {
    const name = new URL(url).hostname.replace(/^www\./, '').split('.')[0]; const res = {};
    for (const [w, h] of [[1512, 864], [390, 844]]) {
      const p = await b.newPage(); await p.setViewport({ width: w, height: h, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 });
      await p.goto(url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {}); await new Promise(r => setTimeout(r, 3500));
      await p.screenshot({ path: path.join(OUT, `${name}-${w}-0.jpg`), type: 'jpeg', quality: 60 });
      const H = await p.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await new Promise(r => setTimeout(r, 120)); }
      for (let i = 1; i <= 4; i++) { await p.evaluate(y => scrollTo(0, y), Math.round(H * i / 5)); await new Promise(r => setTimeout(r, 1400)); await p.screenshot({ path: path.join(OUT, `${name}-${w}-${i}.jpg`), type: 'jpeg', quality: 60 }); }
      await p.evaluate(() => scrollTo(0, 0)); await new Promise(r => setTimeout(r, 600));
      res[w] = await p.evaluate(MEASURE).catch(e => ({ err: e.message })); await p.close();
    }
    fs.writeFileSync(path.join(OUT, name + '.json'), JSON.stringify({ url, ...res }, null, 1)); console.log('done', name);
  }
  await b.close();
})();
