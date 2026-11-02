// Checkpoint renderer: node render_directions.cjs <project>/brief
// For each direction folder (brief/A, brief/B, brief/C ...) holding tokens.json + preview.html (the hero and one
// section, real content only), it builds tokens.css, screenshots desktop 1512x864 (first screen and full) and
// phone 390x844, and writes brief/compare.html: the three side by side with their one-line concepts, for Tejjomay to pick.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const BRIEF = path.resolve(process.argv[2]); const SK = path.join(__dirname);
const dirs = fs.readdirSync(BRIEF).filter(d => fs.existsSync(path.join(BRIEF, d, 'tokens.json')) && fs.existsSync(path.join(BRIEF, d, 'preview.html'))).sort();
(async () => {
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new' }); const cards = [];
  for (const d of dirs) {
    const D = path.join(BRIEF, d); const tok = JSON.parse(fs.readFileSync(path.join(D, 'tokens.json'), 'utf8'));
    const href = execFileSync('python3', [path.join(SK, 'tokens_to_css.py'), path.join(D, 'tokens.json'), path.join(D, 'tokens.css')]).toString().trim();
    fs.writeFileSync(path.join(D, 'fonts.txt'), href);
    fs.writeFileSync(path.join(D, '_preview.html'), fs.readFileSync(path.join(D, 'preview.html'), 'utf8').replace(/FONTS_HREF/g, href));
    for (const [w, h, tag] of [[1512, 864, 'desk'], [390, 844, 'phone']]) {
      const p = await b.newPage(); await p.setViewport({ width: w, height: h, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: w < 500 ? 2 : 1 });
      const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('requestfailed', r => errs.push('failed ' + r.url().slice(0, 100)));
      await p.goto('file://' + path.join(D, '_preview.html'), { waitUntil: 'networkidle0', timeout: 60000 });
      await p.evaluate(() => document.fonts.ready); await new Promise(r => setTimeout(r, 1200));
      await p.screenshot({ path: path.join(D, `${tag}.png`) });
      if (tag === 'desk') await p.screenshot({ path: path.join(D, 'desk-full.jpg'), fullPage: true, type: 'jpeg', quality: 70 });
      const over = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      if (over > 0) errs.push(`horizontal overflow ${over}px at ${w}`);
      if (errs.length) console.log(d, tag, errs.join(' | '));
      await p.close();
    }
    const concept = (fs.existsSync(path.join(D, 'concept.txt')) ? fs.readFileSync(path.join(D, 'concept.txt'), 'utf8') : '').trim();
    cards.push({ d, name: tok.name, family: tok.family, concept, fonts: Object.values(tok.fonts).filter(Boolean).map(f => f.family).filter((v, i, a) => a.indexOf(v) === i).join(' + '), colors: Object.entries(tok.colors).filter(([, c]) => c) });
  }
  await b.close();
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  fs.writeFileSync(path.join(BRIEF, 'compare.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Directions</title>
<style>body{margin:0;background:#EDECE8;color:#111;font:500 15px/1.4 system-ui,sans-serif}h1{font-size:15px;padding:20px 24px 0;margin:0}.g{display:grid;gap:24px;padding:24px}
.c{background:#fff;border-radius:6px;overflow:hidden}.c header{padding:16px 18px;display:flex;gap:12px;align-items:baseline;flex-wrap:wrap}.c b{font-size:20px}.c small{color:#6b6862}
.shots{display:grid;grid-template-columns:1fr 200px;gap:12px;padding:0 18px 18px;align-items:start}.shots img{width:100%;border:1px solid #e3e1dc;border-radius:4px}
.sw{display:flex;gap:6px;padding:0 18px 14px;flex-wrap:wrap}.sw span{display:inline-flex;gap:6px;align-items:center;font-size:12px;color:#6b6862}.sw i{width:16px;height:16px;border-radius:3px;border:1px solid #0002}
a{color:inherit}@media(max-width:700px){.shots{grid-template-columns:1fr}}</style></head><body><h1>Pick one or more. Full page: open each desk-full.jpg.</h1><div class="g">
${cards.map(c => `<section class="c"><header><b>${esc(c.d)}. ${esc(c.name)}</b><small>${esc(c.family)} · ${esc(c.fonts)}</small><span style="flex-basis:100%">${esc(c.concept)}</span></header>
<div class="sw">${c.colors.map(([k, v]) => `<span><i style="background:${v.hex}"></i>${k} ${v.hex}</span>`).join('')}</div>
<div class="shots"><a href="${c.d}/desk-full.jpg"><img src="${c.d}/desk.png" alt="${esc(c.name)} desktop"></a><img src="${c.d}/phone.png" alt="${esc(c.name)} phone"></div></section>`).join('')}
</div></body></html>`);
  console.log(`rendered ${cards.length} directions -> ${path.join(BRIEF, 'compare.html')}`);
})();
