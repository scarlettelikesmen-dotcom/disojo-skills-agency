const puppeteer = require('puppeteer-core'); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const p = await b.newPage(); await p.setViewport({ width: 1512, height: 864 });
  await p.goto('https://thefirstthelast.agency/work', { waitUntil: 'load', timeout: 60000 }); await sleep(5000);
  let n = 0, last = -1;
  for (let i = 0; i < 200; i++) { await p.mouse.wheel({ deltaY: 900 }); await sleep(250); if (i % 10 == 9) { n = await p.evaluate(() => new Set([...document.querySelectorAll('a[href*="/work/"]')].map(a => a.href)).size); if (n === last) break; last = n; } }
  const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href*="/work/"]')].map(a => a.href.split('?')[0]))]);
  console.log(JSON.stringify(links)); await b.close();
})();
