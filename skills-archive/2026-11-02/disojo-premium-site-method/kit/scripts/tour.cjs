// Screenshots the page at named scroll points. usage: NODE_PATH=~/.disojo-tools/node_modules node scripts/tour.cjs <url> <outdir> [desktop|phone]
const puppeteer = require('puppeteer-core');
const [url, out, dev = 'desktop'] = process.argv.slice(2);
require('fs').mkdirSync(out, { recursive: true });
const vp = dev === 'phone' ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { width: 1440, height: 900 };
// [name, selector, fraction of its own scroll travel (pinned) or offset below its top]
const STOPS = [['hero', '#top', 0], ['proof0', '#proof', 0], ['proof1', '#proof', 0.5], ['proof2', '#proof', 1], ['inbox', '#inbox', 0], ['month', '#month', 0], ['pricing', '#pricing', 0], ['book', '#book', 0], ['footer', '.foot', 0]];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const pg = await b.newPage(); await pg.setViewport(vp);
  const errs = []; pg.on('console', (m) => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.goto(url, { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(2500);
  for (const [n, sel, f] of STOPS) {
    const y = await pg.evaluate((s, ff) => { const e = document.querySelector(s); if (!e) return null; const t = e.getBoundingClientRect().top + scrollY; const trav = Math.max(0, e.offsetHeight - innerHeight); return Math.round(trav > 200 ? t + trav * ff : t + (ff ? e.offsetHeight * ff - innerHeight * 0.2 : -10)); }, sel, f);
    if (y == null) { console.log('missing', n); continue; }
    await pg.evaluate((yy) => window.scrollTo(0, yy), y); await sleep(1500);
    await pg.screenshot({ path: `${out}/${dev}-${n}.png` });
  }
  console.log('overflowX', await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth), 'errors', JSON.stringify(errs.slice(0, 5)));
  await b.close();
})();
