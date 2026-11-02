// Headless-Chrome checks used on the Postcards build. No dev tooling needed beyond puppeteer-core:
//   mkdir -p /tmp/chk && cd /tmp/chk && npm init -y && npm i puppeteer-core
//   node check_site.cjs <url> <outdir> [selector-of-a-tall-scroll-section ...]
// Reports: console/page errors, horizontal overflow at 1440 and 390 wide, idle main-thread %
// (should be ~0 when parked mid-page), and writes screenshots at 0/25/50/75/100% through each
// given section. Layout above a section keeps shifting after load, so positions are re-measured
// before each scroll. Headless output is a guide, not a substitute for a real phone.
const p = require('puppeteer-core');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const [url, out, ...sections] = process.argv.slice(2);
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
(async () => {
  const b = await p.launch({ executablePath: CHROME, headless: 'new' });
  for (const [w, h] of [[1440, 900], [390, 844]]) {
    const pg = await b.newPage();
    await pg.setViewport({ width: w, height: h, isMobile: w < 500, deviceScaleFactor: 1 });
    const errs = [];
    pg.on('pageerror', (e) => errs.push(e.message));
    pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    await pg.goto(url, { waitUntil: 'networkidle0' });
    await sleep(2500);
    for (const sel of sections) {
      for (const f of [0, 0.25, 0.5, 0.75, 1]) {
        for (let k = 0; k < 3; k++) {
          await pg.evaluate((s, f) => {
            const e = document.querySelector(s); const r = e.getBoundingClientRect();
            scrollTo(0, r.top + scrollY + f * Math.max(0, e.offsetHeight - innerHeight));
          }, sel, f);
          await sleep(700);
        }
        await pg.screenshot({ path: `${out}/${w}-${sel.replace(/\W/g, '')}-${f * 100}.png` });
      }
    }
    const cdp = await pg.createCDPSession(); await cdp.send('Performance.enable');
    const busy = async () => (await cdp.send('Performance.getMetrics')).metrics.find((x) => x.name === 'TaskDuration').value;
    const a = await busy(); await sleep(3000); const idle = ((await busy() - a) / 3) * 100;
    const overflow = await pg.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    console.log(`${w}px  errors=${JSON.stringify(errs)}  horizontalOverflow=${overflow}  idleMainThread=${idle.toFixed(2)}%`);
    await pg.close();
  }
  await b.close();
})();
