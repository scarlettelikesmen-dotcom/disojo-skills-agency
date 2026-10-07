// End-to-end smoke test for a built site. usage: node scripts/smoke.cjs <url> <outdir>
//   one-time: mkdir -p /tmp/smoke && cd /tmp/smoke && npm init -y && npm i puppeteer-core ; run with NODE_PATH=/tmp/smoke/node_modules
// Checks every route for console/page errors and horizontal overflow, opens a product popup, runs the quiz
// to the reveal, adds to cart, and screenshots each step. Exits non-zero on any failure.
const p = require('puppeteer-core');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const [url, out = '.'] = process.argv.slice(2);
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
let failed = 0;
const check = (ok, msg) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`); if (!ok) failed++; };

(async () => {
  const b = await p.launch({ executablePath: CHROME, headless: 'new' });
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const pg = await b.newPage();
    await pg.setViewport({ width: w, height: h, isMobile: w < 500, hasTouch: w < 500 });
    const errs = [];
    pg.on('pageerror', (e) => errs.push(e.message));
    pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    for (const route of ['/', '/shop', '/about', '/contact']) {
      await pg.goto(url + route, { waitUntil: 'networkidle0' });
      await sleep(1500);
      const overflow = await pg.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      check(!overflow, `${w}px ${route} no horizontal overflow`);
      await pg.screenshot({ path: `${out}/smoke-${w}${route.replace(/\//g, '_') || '_home'}.png` });
    }
    // home: popup, quiz
    await pg.goto(url + '/', { waitUntil: 'networkidle0' });
    await sleep(1500);
    const scrollTo = async (sel, off = 0) => {
      for (let k = 0; k < 3; k++) {
        await pg.evaluate((s, o) => { const e = document.querySelector(s); scrollTo(0, e.getBoundingClientRect().top + scrollY + o); }, sel, off);
        await sleep(700);
      }
    };
    await scrollTo('.collection', 60);
    await pg.evaluate(() => document.querySelector('.pcard-open')?.click());
    await sleep(700);
    check(await pg.evaluate(() => !!document.querySelector('.pm-box')), `${w}px product popup opens`);
    await pg.screenshot({ path: `${out}/smoke-${w}-popup.png` });
    await pg.keyboard.press('Escape');
    await sleep(400);
    check(await pg.evaluate(() => !document.querySelector('.pm-box')), `${w}px popup closes on Esc`);
    if (await pg.evaluate(() => !!document.querySelector('.quiz'))) {
      await scrollTo('.quiz', -70);
      for (let q = 0; q < 4; q++) {
        await pg.click('.quiz-options li:nth-child(2) button');
        await sleep(q < 3 ? 1300 : 600);
      }
      await sleep(5600);
      check(await pg.evaluate(() => !!document.querySelector('.quiz-result')), `${w}px quiz reaches the reveal`);
      await scrollTo('.quiz', -70);
      await sleep(2800);
      await pg.screenshot({ path: `${out}/smoke-${w}-quiz-result.png` });
      await pg.click('.qr-actions .pill-link');
      await sleep(600);
      check(await pg.evaluate(() => document.querySelector('.cart-drawer')?.classList.contains('open')), `${w}px quiz add-to-cart opens the cart`);
    }
    check(errs.length === 0, `${w}px no console/page errors ${errs.length ? JSON.stringify(errs.slice(0, 3)) : ''}`);
    await pg.close();
  }
  await b.close();
  console.log(failed ? `\n${failed} FAILED` : '\nALL PASSED');
  process.exit(failed ? 1 : 0);
})();
