// phone: horizontal touch drag should spin, vertical touch drag should still scroll the page
const p = require('puppeteer-core');
(async () => {
  const b = await p.launch({ channel: 'chrome' }); const pg = await b.newPage();
  await pg.setViewport({ width: 390, height: 844, hasTouch: true, isMobile: true });
  await pg.goto('http://127.0.0.1:4630/', { waitUntil: 'networkidle0' }); await pg.waitForFunction('window.__ready'); await new Promise(r => setTimeout(r, 1000));
  const t = pg.touchscreen;
  await t.touchStart(150, 400); for (let s = 1; s <= 15; s++) { await t.touchMove(150 + s * 12, 402); await new Promise(r => setTimeout(r, 16)); } await t.touchEnd();
  await new Promise(r => setTimeout(r, 1200)); await pg.screenshot({ path: 'qa/spin-ph-h.jpg' });
  const y0 = await pg.evaluate(() => scrollY);
  await t.touchStart(200, 600); for (let s = 1; s <= 15; s++) { await t.touchMove(201, 600 - s * 25); await new Promise(r => setTimeout(r, 16)); } await t.touchEnd();
  await new Promise(r => setTimeout(r, 800)); console.log(JSON.stringify({ scrollBefore: y0, scrollAfter: await pg.evaluate(() => scrollY) })); await b.close();
})();
