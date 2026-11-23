// Save every script, stylesheet and JSON (Lottie) a site ships, plus the rendered HTML,
// so moments can be read in code. Study only. Usage: node grab.cjs <slug> <url>
// Writes code/<slug>/{js,css,json}/ and page.html, beautified for reading.
const puppeteer = require('puppeteer-core');
const fs = require('fs'), path = require('path');
const { js: bjs, css: bcss } = require('js-beautify');
const [slug, url] = process.argv.slice(2);
const out = path.join(__dirname, 'code', slug);
['js', 'css', 'json'].forEach(d => fs.mkdirSync(path.join(out, d), { recursive: true }));
const wait = ms => new Promise(r => setTimeout(r, ms));
const skip = /googletagmanager|google-analytics|facebook|hotjar|clarity|doubleclick|recaptcha|cookiebot|cookieyes|gstatic|intercom|tawk|youtube|vimeo|cloudflareinsights|sentry|hubspot|linkedin|tiktok/;
const safe = u => decodeURIComponent(u.split('?')[0].split('/').pop() || 'index').replace(/[^\w.-]/g, '_').slice(0, 90);

(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1512, height: 864 });
  const seen = new Set(); const list = [];
  page.on('response', async r => {
    const u = r.url(), t = r.headers()['content-type'] || '';
    if (seen.has(u) || skip.test(u)) return; seen.add(u);
    const kind = /javascript/.test(t) ? 'js' : /css/.test(t) ? 'css' : /json/.test(t) && !/manifest/.test(u) ? 'json' : null;
    if (!kind) return;
    try {
      let b = await r.text(); if (b.length > 4e6) return;
      if (kind === 'js') b = bjs(b, { indent_size: 2 });
      if (kind === 'css') b = bcss(b, { indent_size: 2 });
      let f = safe(u); if (!f.endsWith('.' + kind)) f += '.' + kind;
      fs.writeFileSync(path.join(out, kind, f), `/* ${u} */\n` + b);
      list.push(`${kind} ${Math.round(b.length / 1024)}KB ${u.slice(0, 160)}`);
    } catch {}
  });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
  await wait(4000);
  // scroll through so lazy chunks load
  const H = await page.evaluate(() => document.documentElement.scrollHeight).catch(() => 0);
  for (let i = 0; i < 20; i++) { await page.mouse.wheel({ deltaY: 900 }); await wait(500); }
  if (H > 1500) for (let y = 0; y <= H; y += 1500) { await page.evaluate(y => window.scrollTo(0, y), y).catch(() => {}); await wait(300); }
  await wait(2000);
  const html = await page.content().catch(() => '');
  fs.writeFileSync(path.join(out, 'page.html'), require('js-beautify').html(html, { indent_size: 1, max_preserve_newlines: 1 }));
  const inline = await page.evaluate(() => [...document.querySelectorAll('script:not([src])')].map(s => s.textContent).filter(t => t.length > 200 && !/__NUXT__=|gtag|dataLayer/.test(t.slice(0, 300))).join('\n/* ---- */\n')).catch(() => '');
  if (inline) fs.writeFileSync(path.join(out, 'js', 'inline.js'), bjs(inline, { indent_size: 2 }));
  fs.writeFileSync(path.join(out, 'files.txt'), list.join('\n'));
  await browser.close();
  console.log(slug, list.length, 'files');
  process.exit(0);
})();
