// Measure how a page is COMPOSED, screen by screen (what the type/colour study does not see):
// how much of each screen is media, whether that media is a photograph or a flat UI screenshot,
// how many words, boxes, buttons and text sizes compete on one screen, and how big the biggest image is.
// node composition_probe.cjs <outDir> <url> [url...]   (NODE_PATH=$HOME/.disojo-tools/node_modules)
// Writes <outDir>/<name>.json per site (per-screen rows + summary) and <outDir>/<name>-s<N>.jpg screens.
// Photo vs screenshot: each big media crop is scored for "flatness" (share of 4x4 pixel blocks with ~zero
// variance) by flatness.py. Photos score under ~0.25, UI screenshots and flat graphics over ~0.45.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const { execFileSync } = require('child_process');
const [OUT, ...urls] = process.argv.slice(2);
const W = +(process.env.PW || 1512), H = +(process.env.PH || 864), SCREENS = +(process.env.SCREENS || 8);

const { SCREEN } = require('./lib/screen.cjs');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--hide-scrollbars'] });
  for (const url of urls) {
    const name = (process.env.NAME || new URL(url).hostname.replace(/^www\./, '').split('.')[0]);
    const p = await b.newPage(); await p.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
    const rows = [];
    try {
      await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      await new Promise(r => setTimeout(r, 3500));
      // dismiss obvious cookie bars so they do not count as boxes
      await p.evaluate(() => { for (const e of document.querySelectorAll('button,a')) if (/^(accept|agree|got it|ok|allow all|accept all)$/i.test((e.innerText || '').trim())) { try { e.click(); } catch (x) {} } });
      const docH = await p.evaluate(() => document.documentElement.scrollHeight);
      const stops = Math.min(SCREENS, Math.max(1, Math.ceil(docH / H)));
      for (let s = 0; s < stops; s++) {
        await p.evaluate(y => { window.lenis?.scrollTo?.(y, { immediate: true }); window.scrollTo(0, y); }, s * H);
        await new Promise(r => setTimeout(r, 1600));
        const shot = path.join(OUT, `${name}-s${s}.jpg`);
        await p.screenshot({ path: shot, type: 'jpeg', quality: 70 });
        const m = await p.evaluate(SCREEN);
        await p.evaluate(() => { for (const e of document.querySelectorAll('body *')) { const s = getComputedStyle(e), r = e.getBoundingClientRect(); if (s.position === 'fixed' && s.pointerEvents === 'none' && r.width * r.height >= innerWidth * innerHeight * 0.85) { e.dataset.gateHid = e.style.visibility || '-'; e.style.visibility = 'hidden'; } } });
        for (const [k, md] of m.media.entries()) {
          const crop = path.join(OUT, `.crop-${name}-${s}-${k}.png`);
          try { await p.screenshot({ path: crop, clip: { x: md.x, y: md.y + (await p.evaluate(() => scrollY)), width: md.w, height: md.h } }); md.flat = +execFileSync('python3', [path.join(__dirname, 'flatness.py'), crop]).toString().trim(); fs.unlinkSync(crop); } catch (e) { md.flat = null; }
          md.kind = md.flat == null ? '?' : md.flat < 0.3 ? 'photo' : md.flat > 0.45 ? 'flat/ui' : 'mixed';
        }
        await p.evaluate(() => { for (const e of document.querySelectorAll('[data-gate-hid]')) { e.style.visibility = e.dataset.gateHid === '-' ? '' : e.dataset.gateHid; delete e.dataset.gateHid; } });
        rows.push({ screen: s, ...m });
      }
    } catch (e) { rows.push({ error: String(e).slice(0, 200) }); }
    const ok = rows.filter(r => !r.error); const avg = k => +(ok.reduce((a, r) => a + r[k], 0) / Math.max(1, ok.length)).toFixed(2);
    const big = ok.flatMap(r => r.media.filter(m => m.share >= 0.08));
    const summary = {
      url, screens: ok.length,
      mediaCoverAvg: avg('mediaCover'), screensWithBigMedia: ok.filter(r => r.media.some(m => m.share >= 0.2)).length,
      photoShareOfBigMedia: big.length ? +(big.filter(m => m.kind === 'photo').length / big.length).toFixed(2) : 0,
      largestMedia: Math.max(0, ...ok.flatMap(r => r.media.map(m => m.share))),
      wordsAvg: avg('words'), wordsMax: Math.max(0, ...ok.map(r => r.words)), boxesAvg: avg('boxes'), buttonsAvg: avg('buttons'), textSizesAvg: avg('textSizes'),
      maxFontFirstScreen: ok[0]?.maxFont || 0,
    };
    fs.writeFileSync(path.join(OUT, `${name}.json`), JSON.stringify({ summary, rows }, null, 1));
    console.log(name, JSON.stringify(summary));
    await p.close();
  }
  await b.close();
})();
