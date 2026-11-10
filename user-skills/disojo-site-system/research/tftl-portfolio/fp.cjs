// Template fingerprint: node fp.cjs <list.json [{s,url}]> <outDir> [conc=3]
// Per site: platform, own scripts (name + sha1 of body), data-attribute names, CSS custom property names,
// class vocabulary, CustomEase / cubic-bezier strings, fonts. Compared later by Jaccard to find shared templates.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path'); const crypto = require('crypto');
const [LIST, OUT, CONC = '3'] = process.argv.slice(2); fs.mkdirSync(OUT, { recursive: true });
const sites = JSON.parse(fs.readFileSync(LIST)); const sleep = ms => new Promise(r => setTimeout(r, ms));
const LIBS = /gsap|ScrollTrigger|SplitText|CustomEase|lenis|barba|jquery|three|lottie|swiper|splide|webflow\.|gtm|gtag|analytics|fbevents|hotjar|clarity|recaptcha|cookie|consent|polyfill|vimeo|youtube|hls|swup|locomotive|howler|pixi|ogl|matter|rapier|draggable|flip|observer|intercom|hubspot|klaviyo|shopify|stripe|sentry|onetrust|cookiebot|termly|tiktok|linkedin|pinterest|twitter|doubleclick|googletag/i;
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--mute-audio'] });
  let i = 0;
  async function worker() {
    while (i < sites.length) {
      const site = sites[i++]; const file = path.join(OUT, site.s + '.json'); if (fs.existsSync(file)) continue;
      const page = await browser.newPage(); await page.setViewport({ width: 1512, height: 864 });
      const bodies = {};
      page.on('response', async r => { try { const u = r.url(); if (r.request().resourceType() === 'script' && !LIBS.test(u)) { const t = await r.text(); bodies[u] = { kb: Math.round(t.length / 1024), sha: crypto.createHash('sha1').update(t).digest('hex').slice(0, 12), eases: [...new Set((t.match(/CustomEase\.create\(\s*["'][^"']+["']\s*,\s*["'][^"']{4,80}["']/g) || []).map(x => x.replace(/\s+/g, '')))].slice(0, 20), beziers: [...new Set(t.match(/cubic-bezier\([^)]{6,40}\)/g) || [])].slice(0, 20), dattrs: [...new Set(t.match(/\[data-[a-z0-9-]+/g) || [])].slice(0, 200) }; } } catch (e) {} });
      const o = { s: site.s, url: site.url };
      try {
        await page.goto(site.url, { waitUntil: 'load', timeout: 60000 }); await sleep(5000);
        for (let k = 0; k < 8; k++) { await page.mouse.wheel({ deltaY: 700 }); await sleep(300); }
        Object.assign(o, await page.evaluate(() => {
          const all = [...document.querySelectorAll('*')];
          const dattr = new Set(), cls = new Set(); all.forEach(e => { for (const a of e.getAttributeNames()) if (a.startsWith('data-')) dattr.add(a); e.classList && e.classList.forEach(c => cls.add(c)); });
          const vars = new Set(), css = []; for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) { if (r.style) for (const p of r.style) if (p.startsWith('--')) vars.add(p); } } catch (e) {} }
          const meta = n => (document.querySelector(`meta[name="${n}"]`) || {}).content || null;
          return { finalUrl: location.href, title: document.title, generator: meta('generator'),
            platform: [window.__NUXT__ || document.querySelector('#__nuxt') ? 'nuxt' : '', document.documentElement.dataset.wfSite ? 'webflow' : '', window.__NEXT_DATA__ || document.querySelector('#__next') ? 'next' : '', document.querySelector('[data-framer-name],#__framer-badge-container') ? 'framer' : '', window.Shopify ? 'shopify' : '', document.querySelector('astro-island,[data-astro-cid]') || /astro/i.test(meta('generator') || '') ? 'astro' : '', /wp-content/.test(document.documentElement.innerHTML.slice(0, 200000)) ? 'wordpress' : '', window.Vue || document.querySelector('[data-v-app],[data-server-rendered]') ? 'vue' : ''].filter(Boolean),
            wfSite: document.documentElement.dataset.wfSite || null,
            dattr: [...dattr].slice(0, 400), cls: [...cls].slice(0, 1500), vars: [...vars].slice(0, 600),
            fonts: [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/["']/g, '')))],
            scripts: [...document.scripts].map(s => s.src).filter(Boolean).map(s => s.split('?')[0].split('/').slice(-2).join('/')),
            bodyBg: getComputedStyle(document.body).backgroundColor, htmlCls: document.documentElement.className.slice(0, 200) };
        }));
        o.own = Object.entries(bodies).map(([u, b]) => ({ u: u.split('?')[0].split('/').slice(-2).join('/'), ...b }));
        await page.screenshot({ path: path.join(OUT, site.s + '.jpg'), type: 'jpeg', quality: 70 });
      } catch (e) { o.err = String(e).slice(0, 120); }
      fs.writeFileSync(file, JSON.stringify(o)); console.log(o.err ? 'fail' : 'ok', site.s, (o.platform || []).join(','), (o.own || []).length + ' own scripts');
      await page.close();
    }
  }
  await Promise.all([...Array(+CONC)].map(worker)); await browser.close();
})();
