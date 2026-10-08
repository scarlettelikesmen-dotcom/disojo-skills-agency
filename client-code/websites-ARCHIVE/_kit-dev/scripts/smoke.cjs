// Kit smoke test: every shape renders (non-blank), flavour swap changes the pixels, scroll rotation changes the pixels, no console errors.
// usage: NODE_PATH=~/.disojo-tools/node_modules node scripts/smoke.cjs http://localhost:4402
const puppeteer = require('puppeteer-core');
const url = process.argv[2]; const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const sig = async (el) => { const buf = await el.screenshot({ type: 'jpeg', quality: 40 }); return buf; };
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const pg = await b.newPage(); await pg.setViewport({ width: 1200, height: 800 });
  const errs = []; pg.on('console', (m) => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.goto(url, { waitUntil: 'networkidle0' }); await sleep(2200);
  const click = (t) => pg.evaluate((t) => [...document.querySelectorAll('.controls button')].find((x) => x.textContent === t).click(), t);
  const stage = await pg.$('.stage canvas');
    const shots = {};
  for (const s of ['can', 'jar', 'bottle', 'box']) { await click(s); await sleep(2000); shots[s] = await sig(stage); ok(shots[s].length > 6000, `${s} renders something (jpeg ${shots[s].length} bytes)`); }
  await click('can'); await sleep(1500); const a = await sig(stage); await click('berry'); await sleep(2200); const b2 = await sig(stage);
  ok(!a.equals(b2), 'flavour swap changes the picture');
  await pg.evaluate(() => window.scrollTo(0, 1200)); await sleep(1200); const s1 = await pg.screenshot({ type: 'jpeg', quality: 40 });
  await pg.evaluate(() => window.scrollTo(0, 2000)); await sleep(1200); const s2 = await pg.screenshot({ type: 'jpeg', quality: 40 });
  ok(!s1.equals(s2), 'scroll changes rotation and flavour');
  ok(errs.length === 0, `no console errors ${JSON.stringify(errs.slice(0, 3))}`);
  await b.close(); console.log(fails ? `${fails} FAILED` : 'ALL PASSED'); process.exit(fails ? 1 : 0);
})();
