// Smoke test for the Mochi & Midori build. usage: NODE_PATH=~/.disojo-tools/node_modules node scripts/smoke.cjs <url> <outdir>
const puppeteer = require('puppeteer-core');
const [url, out] = process.argv.slice(2);
require('fs').mkdirSync(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  for (const [dev, vp] of [['desktop', { width: 1440, height: 900 }], ['phone', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
    const pg = await b.newPage(); await pg.setViewport(vp);
    const errs = []; pg.on('console', (m) => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', (e) => errs.push(String(e)));
    for (const route of ['/', '/about', '/visit']) {
      await pg.goto(url + route, { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(2200);
      ok((await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0, `${dev} ${route} no horizontal overflow`);
    }
    await pg.goto(url + '/', { waitUntil: 'networkidle0' }); await sleep(2500);
    ok(await pg.evaluate(() => !document.querySelector('.loader')), `${dev} loader dismissed`);
    ok((await pg.evaluate(() => document.querySelectorAll('.ch').length)) === 6, `${dev} six counter chapters`);
    ok(await pg.evaluate(() => /gluten/i.test(document.querySelector(".good").innerText) && /Keeps/i.test(document.querySelector('.good').innerText)), `${dev} allergen chart present`);
    ok(!(await pg.evaluate(() => /\$\d|add to cart/i.test(document.body.innerText))), `${dev} no prices or cart`);
    await pg.evaluate(() => document.querySelector('.cnav-btn').click()); await sleep(1000);
    ok(await pg.evaluate(() => document.querySelector('.menu').classList.contains('is-open')), `${dev} menu opens`);
    await pg.screenshot({ path: `${out}/${dev}-menu.png` });
    await pg.evaluate(() => [...document.querySelectorAll('.menu-link')].find((a) => /story/i.test(a.textContent)).click()); await sleep(2600);
    ok((await pg.evaluate(() => location.pathname)) === '/about', `${dev} circle-wipe navigates to /about`);
    ok(errs.length === 0, `${dev} no console errors ${JSON.stringify(errs.slice(0, 3))}`);
    await pg.close();
  }
  await b.close(); console.log(fails ? `${fails} FAILED` : 'ALL PASSED'); process.exit(fails ? 1 : 0);
})();
