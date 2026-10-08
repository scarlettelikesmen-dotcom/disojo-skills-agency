// Screenshots the home page at named scroll points. usage: node scripts/tour.cjs <url> <outdir> [desktop|phone]
const puppeteer = require('puppeteer-core');
const [url, out, dev = 'desktop'] = process.argv.slice(2);
require('fs').mkdirSync(out, { recursive: true });
const vp = dev === 'phone' ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { width: 1440, height: 900 };
const STOPS = [['hero0', '.hero', 0], ['hero1', '.hero', 0.2], ['hero2', '.hero', 0.45], ['hero3', '.hero', 0.7], ['hero4', '.hero', 1], ['c1', '.chapters', 0.0], ['c2', '.chapters', 0.2], ['c3', '.chapters', 0.4], ['c4', '.chapters', 0.6], ['c5', '.chapters', 0.8], ['c6', '.chapters', 1], ['hands', '.hands', 0.3], ['good', '.good', 0.05], ['visit', '.visit', 0.1], ['footer', '.foot', 0]];
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const pg = await b.newPage(); await pg.setViewport(vp);
  const errs = []; pg.on('console', (m) => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.goto(url, { waitUntil: 'networkidle0', timeout: 60000 }); await new Promise((r) => setTimeout(r, 3500));
  for (const [n, sel, f] of STOPS) {
    const y = await pg.evaluate((s, ff) => { const e = document.querySelector(s); if (!e) return null; const t = e.getBoundingClientRect().top + scrollY; const trav = Math.max(0, e.offsetHeight - innerHeight); return Math.round(trav ? t + trav * ff : t - 40); }, sel, f);
    if (y == null) { console.log('missing', n); continue; }
    await pg.evaluate((yy) => window.scrollTo(0, yy), y); await new Promise((r) => setTimeout(r, 1700));
    await pg.screenshot({ path: `${out}/${dev}-${n}.png` });
  }
  console.log('overflowX', await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth), 'errors', JSON.stringify(errs.slice(0, 5)));
  await b.close();
})();
