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
    ok(await pg.evaluate(() => ['top', 'edit', 'system', 'pricing', 'proof', 'details', 'book'].every((i) => document.getElementById(i))), `${dev} all section ids present`);
    // prices and facts
    const txt = await pg.evaluate(() => document.body.innerText);
    ok(['1,300', '3,500', '6,000', '20-30', '60-70', '90-100+', 'Unlimited', 'ascendermedia.in@gmail.com', '@ascender_media'].every((t) => txt.includes(t)), `${dev} real prices and contacts present`);
    ok(!/postcards|lorem|TODO/i.test(txt), `${dev} no placeholder text`);
    // nav
    await pg.evaluate(() => document.querySelector('.cur').click()); await sleep(500);
    ok(await pg.evaluate(() => !document.getElementById('clip-list').hidden), `${dev} clip list opens`);
    await pg.evaluate(() => [...document.querySelectorAll('#clip-list button')].find((x) => /Pricing/.test(x.textContent)).click()); await sleep(2600);
    ok(await pg.evaluate(() => document.getElementById('pricing').getBoundingClientRect().top < innerHeight * 0.4), `${dev} nav scrolls to pricing`);
    ok((await pg.evaluate(() => document.querySelector('.cur .lab').textContent)) === 'Pricing', `${dev} dock shows current section`);
    // demos
    await pg.evaluate(() => document.getElementById('edit').scrollIntoView()); await sleep(1500);
    await pg.evaluate(() => document.getElementById('tab-hooks').click()); await sleep(500);
    ok(await pg.evaluate(() => /Raw opener/.test(document.querySelector('.hook-card').innerText)), `${dev} hooks demo shows before`);
    await pg.evaluate(() => [...document.querySelectorAll('.seg button')].find((x) => x.textContent === 'After').click()); await sleep(500);
    ok(await pg.evaluate(() => /Rewritten hook/.test(document.querySelector('.hook-card').innerText)), `${dev} hooks toggle works`);
    await pg.evaluate(() => document.getElementById('tab-pacing').click()); await sleep(500);
    await pg.evaluate(() => { const i = document.getElementById('shots'); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(i, '8'); i.dispatchEvent(new Event('input', { bubbles: true })); }); await sleep(500);
    ok(await pg.evaluate(() => /8 shots/.test(document.querySelector('.pace-read').innerText)), `${dev} pacing slider works`);
    await pg.screenshot({ path: `${out}/${dev}-pacing.png` });
    // proof lightbox
    await pg.evaluate(() => document.getElementById('proof').scrollIntoView()); await sleep(1200);
    await pg.evaluate(() => document.querySelector('.chat .bezel').click()); await sleep(700);
    ok(await pg.evaluate(() => document.querySelector('dialog.lightbox').open), `${dev} chat lightbox opens`);
    await pg.screenshot({ path: `${out}/${dev}-lightbox.png` });
    await pg.keyboard.press('Escape'); await sleep(500);
    ok(await pg.evaluate(() => !document.querySelector('dialog.lightbox').open), `${dev} lightbox closes on Escape`);
    // pricing -> plan preselect (click handler fires; Calendly opens in a new tab, which we block)
    await pg.evaluate(() => document.getElementById('pricing').scrollIntoView()); await sleep(800);
    await pg.evaluate(() => { document.querySelectorAll('.preset a')[2].addEventListener('click', (e) => e.preventDefault(), { once: true }); document.querySelectorAll('.preset a')[2].click(); });
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
    // calendar embed
    await pg.evaluate(() => document.getElementById('tab-cal').click()); await sleep(300);
    await pg.evaluate(() => document.querySelector('.cal-idle button').click()); await sleep(800);
    ok(await pg.evaluate(() => !!document.querySelector('.cal iframe')), `${dev} calendar embed loads on demand`);
    ok(errs.length === 0, `${dev} no console errors ${JSON.stringify(errs.slice(0, 3))}`);
    await pg.close();
  }
  // reduced motion: static layout, all visible
  const pg = await b.newPage(); await pg.setViewport({ width: 1440, height: 900 }); await pg.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.goto(url, { waitUntil: 'networkidle0' }); await sleep(1500);
  ok(await pg.evaluate(() => document.getElementById('system').classList.contains('is-static') && !document.getElementById('proof').classList.contains('is-pinned')), 'reduced motion: pins disabled');
  ok(await pg.evaluate(() => [...document.querySelectorAll('.rv')].every((e) => getComputedStyle(e).opacity === '1')), 'reduced motion: everything visible');
  await b.close(); console.log(fails ? `${fails} FAILED` : 'ALL PASSED'); process.exit(fails ? 1 : 0);
})();
