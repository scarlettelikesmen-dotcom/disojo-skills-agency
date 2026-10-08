// Screenshots the kit demo. usage: NODE_PATH=~/.disojo-tools/node_modules node scripts/shots.cjs <url> <outdir>
const puppeteer = require('puppeteer-core');
const [url, out] = process.argv.slice(2); require('fs').mkdirSync(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const pg = await b.newPage(); await pg.setViewport({ width: 1200, height: 800 });
  const errs = []; pg.on('console', (m) => m.type() === 'error' && errs.push(m.text())); pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.goto(url, { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(2500);
  for (const shape of ['can', 'jar', 'bottle', 'box']) {
    await pg.evaluate((s) => [...document.querySelectorAll('.controls button')].find((x) => x.textContent === s).click(), shape); await sleep(2200);
    await pg.screenshot({ path: `${out}/${shape}.png` });
  }
  await pg.evaluate(() => [...document.querySelectorAll('.controls button')].find((x) => x.textContent === 'can').click()); await sleep(1500);
  await pg.evaluate(() => [...document.querySelectorAll('.controls button')].find((x) => x.textContent === 'berry').click()); await sleep(2500);
  await pg.screenshot({ path: `${out}/can-berry.png` });
  console.log('errors', JSON.stringify(errs.slice(0, 6))); await b.close();
})();
