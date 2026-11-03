// drags the bottle on the hero and screenshots after each drag, plus a flick to check inertia
const p = require('puppeteer-core');
(async () => {
  const [w, h, pre] = [+process.argv[2], +process.argv[3], process.argv[4]];
  const b = await p.launch({ channel: 'chrome', args: ['--use-angle=metal'] }); const pg = await b.newPage();
  await pg.setViewport({ width: w, height: h, hasTouch: w < 700, isMobile: w < 700 });
  const errs = []; pg.on('pageerror', e => errs.push(e.message));
  await pg.goto('http://127.0.0.1:4630/', { waitUntil: 'networkidle0' }); await pg.waitForFunction('window.__ready', { timeout: 30000 }).catch(() => errs.push('no __ready'));
  await new Promise(r => setTimeout(r, 1200));
  const x0 = w * 0.6, y0 = h * 0.5;
  for (let i = 1; i <= 3; i++) {
    await pg.mouse.move(x0, y0); await pg.mouse.down();
    for (let s = 1; s <= 20; s++) { await pg.mouse.move(x0 + s * 12, y0); await new Promise(r => setTimeout(r, 16)); }
    await new Promise(r => setTimeout(r, 120)); await pg.mouse.up(); await new Promise(r => setTimeout(r, 900));
    await pg.screenshot({ path: `${pre}-${i}.jpg`, quality: 85 });
  }
  // flick: fast drag then release, measure rotation keeps going
  await pg.mouse.move(x0, y0); await pg.mouse.down();
  for (let s = 1; s <= 6; s++) { await pg.mouse.move(x0 + s * 30, y0); await new Promise(r => setTimeout(r, 16)); }
  await pg.mouse.up(); await pg.screenshot({ path: `${pre}-flick0.jpg`, quality: 85 }); await new Promise(r => setTimeout(r, 400)); await pg.screenshot({ path: `${pre}-flick1.jpg`, quality: 85 });
  // after spinning, scroll to the cap beat still works
  await pg.mouse.wheel({ deltaY: h * 1.4 }); await new Promise(r => setTimeout(r, 1800)); await pg.screenshot({ path: `${pre}-scroll.jpg`, quality: 85 });
  console.log(JSON.stringify({ errs })); await b.close();
})();
