const puppeteer = require('puppeteer-core'); const fs = require('fs'); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const cases = JSON.parse(fs.readFileSync('cases.json')); const todo = cases.filter(c => !c.ext || !c.ext.length);
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const p = await b.newPage(); await p.setViewport({ width: 1512, height: 864 });
  for (const c of todo) {
    try {
      await p.goto(c.u, { waitUntil: 'load', timeout: 45000 }); await sleep(3500);
      const r = await p.evaluate(() => ({ links: [...document.querySelectorAll('a')].filter(a => /visit|website|live|launch/i.test(a.textContent) && /^https?:/.test(a.href) && !/thefirstthelast/.test(a.href)).map(a => a.href),
        live: /\(\s*LIVE\s*\)/i.test(document.body.innerText), text: document.body.innerText.slice(0, 1200) }));
      c.ext = [...new Set(r.links)]; c.liveTag = r.live; c.text = r.text;
      console.log(c.s, c.ext.join(' ') || '-', r.live ? 'LIVE' : '');
    } catch (e) { console.log(c.s, 'fail'); }
  }
  fs.writeFileSync('cases.json', JSON.stringify(cases, null, 1)); await b.close();
})();
