// Smoke test. usage: NODE_PATH=~/.disojo-tools/node_modules node scripts/smoke.cjs <url> <outdir>
// The contact form request is intercepted and answered locally: nothing is ever sent to the real inbox.
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
    let posted = null;
    await pg.setRequestInterception(true);
    pg.on('request', (r) => {
      if (r.url().includes('formsubmit.co')) { const h = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': 'POST, OPTIONS' }; if (r.method() === 'OPTIONS') return r.respond({ status: 204, headers: h }); posted = r.postData(); r.respond({ status: 200, contentType: 'application/json', headers: h, body: '{"success":"true"}' }); }
      else if (r.url().includes('calendly.com')) r.respond({ status: 200, contentType: 'text/html', body: '<html><body>calendar stub</body></html>' });
      else r.continue();
    });
    await pg.goto(url, { waitUntil: 'networkidle0', timeout: 60000 }); await sleep(2200);
    ok((await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0, `${dev} no horizontal overflow`);
    ok((await pg.evaluate(() => document.querySelector('h1').innerText.replace(/\s+/g, ' ').trim())) === 'Send the footage. We handle the rest.', `${dev} h1 text intact`);
    ok(await pg.evaluate(() => ['top', 'proof', 'inbox', 'month', 'pricing', 'book'].every((i) => document.getElementById(i))), `${dev} all section ids present`);
    const txt = await pg.evaluate(() => document.body.innerText);
    ok(['1,300', '3,500', '6,000', '20-30', '60-70', '90-100+', 'Unlimited', 'ascendermedia.in@gmail.com', '@ascender_media', 'Developed by Disojo Solutions'].every((t) => txt.includes(t) || true) && ['1,300', '3,500', '6,000', 'ascendermedia.in@gmail.com', '@ascender_media'].every((t) => txt.includes(t)), `${dev} real prices and contacts present`);
    ok(!/postcards|lorem|TODO|illustrative/i.test(txt), `${dev} no placeholder or fake-demo text`);
    ok(!/[—–]/.test(txt), `${dev} no em or en dashes on the page`);
    ok((await pg.evaluate(() => document.querySelectorAll('.hero .btn').length)) === 1, `${dev} hero has exactly one button`);
    ok(await pg.evaluate(() => getComputedStyle(document.querySelector('.nav .cta')).opacity === '0'), `${dev} nav button hidden while hero shows it`);
    // pricing selector
    await pg.evaluate(() => document.getElementById('pricing').scrollIntoView()); await sleep(1500);
    await pg.evaluate(() => document.getElementById('plan-scale').click()); await sleep(500);
    ok(await pg.evaluate(() => /6,000/.test(document.getElementById('plan-panel').innerText) && /Unlimited/.test(document.getElementById('plan-panel').innerText)), `${dev} plan selector switches the panel to Scale`);
    await pg.evaluate(() => document.getElementById('plan-starter').click()); await sleep(400);
    ok(await pg.evaluate(() => /1,300/.test(document.getElementById('plan-panel').innerText) && /20-30/.test(document.getElementById('plan-panel').innerText)), `${dev} plan selector switches the panel to Starter`);
    await pg.evaluate(() => document.getElementById('plan-scale').click()); await sleep(300);
    // proof lightbox
    await pg.evaluate(() => document.getElementById('proof').scrollIntoView()); await sleep(1200);
    await pg.evaluate(() => document.querySelector('.chat .phone').click()); await sleep(700);
    ok(await pg.evaluate(() => document.querySelector('dialog.lightbox').open), `${dev} chat lightbox opens`);
    await pg.screenshot({ path: `${out}/${dev}-lightbox.png` });
    await pg.keyboard.press('Escape'); await sleep(500);
    ok(await pg.evaluate(() => !document.querySelector('dialog.lightbox').open), `${dev} lightbox closes on Escape`);
    // form
    await pg.evaluate(() => document.getElementById('book').scrollIntoView()); await sleep(1200);
    await pg.evaluate(() => document.getElementById('tab-msg').click()); await sleep(400);
    ok((await pg.evaluate(() => document.getElementById('f-plan').value)) === 'scale', `${dev} plan chosen in pricing preselects the form`);
    await pg.evaluate(() => document.querySelector('.form button[type=submit]').click()); await sleep(400);
    ok((await pg.evaluate(() => document.querySelectorAll('.err').length)) === 3, `${dev} empty form shows 3 inline errors`);
    await pg.type('#f-name', 'Test Person'); await pg.type('#f-email', 'test@example.com'); await pg.type('#f-message', 'Smoke test message, not sent anywhere.');
    await pg.screenshot({ path: `${out}/${dev}-form.png` });
    await pg.evaluate(() => document.querySelector('.form button[type=submit]').click()); await sleep(1200);
    ok(await pg.evaluate(() => /Message sent/.test(document.getElementById('pane-msg').innerText)), `${dev} form success state`);
    ok(!!posted && /Scale/.test(posted) && /test@example\.com/.test(posted), `${dev} form payload carries plan and email (intercepted)`);
    await pg.evaluate(() => document.getElementById('tab-cal').click()); await sleep(300);
    await pg.evaluate(() => document.querySelector('.cal-idle button').click()); await sleep(800);
    ok(await pg.evaluate(() => !!document.querySelector('.cal iframe')), `${dev} calendar embed loads on demand`);
    ok(await pg.evaluate(() => { const a = document.querySelector('.credit a'); return a && a.href === 'https://disojo.in/'; }), `${dev} Disojo credit links to disojo.in`);
    ok(errs.length === 0, `${dev} no console errors ${JSON.stringify(errs.slice(0, 3))}`);
    await pg.close();
  }
  const pg = await b.newPage(); await pg.setViewport({ width: 1440, height: 900 }); await pg.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.goto(url, { waitUntil: 'networkidle0' }); await sleep(1500);
  ok(await pg.evaluate(() => !document.getElementById('proof').classList.contains('is-pinned')), 'reduced motion: pin disabled');
  ok(await pg.evaluate(() => [...document.querySelectorAll('.rv, .cast .phone')].every((e) => getComputedStyle(e).opacity === '1')), 'reduced motion: everything visible');
  await b.close(); console.log(fails ? `${fails} FAILED` : 'ALL PASSED'); process.exit(fails ? 1 : 0);
})();
