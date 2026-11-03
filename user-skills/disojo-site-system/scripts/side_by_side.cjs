// Ours next to a reference, same size, same scroll points: node side_by_side.cjs <outDir> <ourUrl> <refUrl> [refUrl...]
// Options (env): VP=1512x864 (viewport), STOPS=0,1,2,3,5 (scroll stops in screens), PHONE=1 adds a 390x844 pass.
// Writes one sheet per reference and viewport: <outDir>/sbs-<ref>-<w>.jpg (rows = scroll stops, ours left, reference right),
// and a scores.md to fill in. Nothing is shown to Tejjomay until every row is scored and ours wins or the loss is stated.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [OUT, ours, ...refs] = process.argv.slice(2);
if (!OUT || !ours || !refs.length) { console.log('usage: node side_by_side.cjs <outDir> <ourUrl> <refUrl> [refUrl...]'); process.exit(1); }
const STOPS = (process.env.STOPS || '0,1,2,3,5').split(',').map(Number);
const VPS = [(process.env.VP || '1512x864').split('x').map(Number)]; if (process.env.PHONE) VPS.push([390, 844]);
const host = u => new URL(u).hostname.replace(/^www\./, '').split('.')[0] || 'local';
async function shots(b, url, w, h) {
  const g = await b.newPage(); await g.setViewport({ width: w, height: h, isMobile: w < 700, hasTouch: w < 700 });
  // a dead server or an error page must stop the run, never become a sheet that looks like a comparison
  const res = await g.goto(url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(e => { throw new Error(`${url} did not load: ${e.message}`); });
  if (!res || !res.ok()) throw new Error(`${url} answered ${res ? res.status() : 'nothing'}`);
  await new Promise(r => setTimeout(r, 4000));
  const t0 = await g.title(); if (/can.t be reached|not found|404|deployment paused|error/i.test(t0)) throw new Error(`${url} shows "${t0}"`);
  const out = []; let at = 0;
  for (const s of STOPS) {
    // wheel, not scrollTo, so smooth-scroll and scroll-driven 3D run as they do for a visitor
    while (at < s) { for (let i = 0; i < 4; i++) { await g.mouse.wheel({ deltaY: h / 4 }); await new Promise(r => setTimeout(r, 250)); } at++; }
    await new Promise(r => setTimeout(r, 1500));
    out.push('data:image/jpeg;base64,' + (await g.screenshot({ type: 'jpeg', quality: 80, encoding: 'base64' })));
  }
  const title = await g.title(); await g.close(); return { title, imgs: out };
}
(async () => {
  process.on('unhandledRejection', e => { console.error('STOPPED:', e.message); process.exit(2); });
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  let scores = `# Side by side: ${ours}\n\nFor every row: who wins, and the one thing the reference does that we do not. Any row we lose is fixed, or stated plainly in the first line to Tejjomay.\n\n`;
  for (const [w, h] of VPS) {
    const a = await shots(b, ours, w, h);
    for (const ref of refs) {
      const r = await shots(b, ref, w, h); const name = host(ref);
      const cw = w > 700 ? 900 : 360, ch = Math.round(cw * h / w);
      const rows = STOPS.map((s, i) => `<div class=row><div class=lab>screen ${s}</div><img src="${a.imgs[i]}"><img src="${r.imgs[i]}"></div>`).join('');
      const html = `<html><body style="margin:0;background:#111;color:#ddd;font:14px system-ui"><style>.row{display:flex;gap:12px;padding:8px 12px;align-items:flex-start}.row img{width:${cw}px;height:${ch}px;object-fit:cover}.lab{width:70px}.hd{display:flex;gap:12px;padding:12px 12px 0 94px}.hd div{width:${cw}px}</style><div class=hd><div>OURS: ${a.title}</div><div>REFERENCE: ${r.title} (${ref})</div></div>${rows}</body></html>`;
      const p = await b.newPage(); await p.setViewport({ width: 94 + cw * 2 + 24, height: 400 }); await p.setContent(html, { waitUntil: 'load' });
      const file = path.join(OUT, `sbs-${name}-${w}.jpg`); await p.screenshot({ path: file, type: 'jpeg', quality: 82, fullPage: true }); await p.close();
      scores += `## vs ${name} at ${w}x${h} (${path.basename(file)})\n` + STOPS.map(s => `- screen ${s}: winner ___ | they do, we don't: ___`).join('\n') + '\n\n';
      console.log('wrote', file);
    }
  }
  fs.writeFileSync(path.join(OUT, 'scores.md'), scores); console.log('wrote', path.join(OUT, 'scores.md'));
  await b.close();
})();
