// Capture a read-in-code moment as a strip of frames, so every code note has pictures.
// Study only. Usage: node moments.cjs <slug> <url> <loader|close> [footerSelector] [waitMs]
// loader: a frame every 350 ms for 7 s from page load.
// close: wait for the loader, jump near the footer, then wheel down in small steps, a frame per step.
const puppeteer = require('puppeteer-core');
const fs = require('fs'), path = require('path');
const [slug, url, kind, sel = 'footer', waitMs = '9000'] = process.argv.slice(2);
const out = path.join(__dirname, 'moments', `${slug}-${kind}`); fs.mkdirSync(out, { recursive: true });
const wait = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'] });
  const p = await b.newPage(); await p.setViewport(process.env.PHONE ? { width: 390, height: 844, isMobile: true, hasTouch: false, deviceScaleFactor: 1 } : { width: 1512, height: 864 });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => {});
  let n = 0; const shot = () => p.screenshot({ path: `${out}/${String(n++).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 60 }).catch(() => {});
  if (kind === 'loader') {
    const t0 = Date.now();
    const N = +(process.env.FRAMES || 20), E = +(process.env.EVERY || 350);
    for (let i = 0; i < N; i++) { const left = i * E + 300 - (Date.now() - t0); if (left > 0) await wait(left); await shot(); }
  } else {
    await wait(+waitMs);
    // decline the cookie banner if there is one, so it does not cover the moment
    await p.evaluate(() => { const b = [...document.querySelectorAll('button, a, [role=button], div, span')].reverse().find(e => /^\s*(decline|reject( all)?|deny|only necessary|necessary only)\s*$/i.test(e.textContent)); if (b) b.click(); }).catch(() => {});
    await wait(600); await p.mouse.move(756, 432);
    // wheel to the very bottom (keeps smooth-scroll libraries in sync), then step back UP
    // with a frame per step; frames are renamed afterwards so they read top to bottom.
    let last = -1, same = 0;
    for (let k = 0; k < 500 && same < 4; k++) {
      await p.mouse.wheel({ deltaY: 900 }); await wait(70);
      const y = await p.evaluate(() => Math.round(scrollY || document.scrollingElement.scrollTop)).catch(() => last);
      if (y === last) same++; else same = 0; last = y;
    }
    await wait(2000);
    const step = +(process.env.STEP || 90);
    for (let i = 0; i < 20; i++) { await shot(); await p.mouse.wheel({ deltaY: -step }); await wait(900); }
    await shot();
  }
  if (kind !== 'loader') { const fsx = fs.readdirSync(out).filter(f => /^\d+\.jpg$/.test(f)).sort(); fsx.forEach(f => fs.renameSync(`${out}/${f}`, `${out}/r${f}`)); fsx.forEach((f, i) => fs.renameSync(`${out}/r${f}`, `${out}/${String(fsx.length - 1 - i).padStart(2, '0')}.jpg`)); }
  await b.close(); console.log(slug, kind, n, 'frames'); process.exit(0);
})();
