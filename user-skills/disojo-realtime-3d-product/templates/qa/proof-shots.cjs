// Screens of the 3D proof at each beat: node proof-shots.cjs <w> <h> <outPrefix> [query]
const p = require('puppeteer-core');
(async () => {
  const [w, h, out, qs] = [+process.argv[2], +process.argv[3], process.argv[4], process.argv[5] || ''];
  const b = await p.launch({ channel: 'chrome', headless: 'new', args: ['--enable-webgl', '--ignore-gpu-blocklist', '--use-angle=metal'] }); const g = await b.newPage();
  const errs = []; g.on('pageerror', e => errs.push(e.message)); g.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await g.setViewport({ width: w, height: h, isMobile: w < 700, hasTouch: w < 700 });
  await g.goto('http://127.0.0.1:4630/' + qs, { waitUntil: 'networkidle0' });
  await g.waitForFunction('window.__ready', { timeout: 30000 }).catch(() => errs.push('never ready'));
  for (const [i, f] of [[0, 0], [1, .25], [2, .5], [3, .75], [4, .9], [5, 1]]) {
    await g.evaluate(f => scrollTo(0, f * (document.documentElement.scrollHeight - innerHeight)), f);
    await new Promise(r => setTimeout(r, 2200));
    await g.screenshot({ path: `${out}-${i}.jpg`, type: 'jpeg', quality: 88 });
  }
  console.log(JSON.stringify({ errs }));
  await b.close();
})();
