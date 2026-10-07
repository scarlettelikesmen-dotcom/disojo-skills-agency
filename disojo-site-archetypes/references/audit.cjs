// usage: node audit.cjs <url> <slug> <outdir>
const p = require('puppeteer-core');
const fs = require('fs');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const [url, slug, out] = process.argv.slice(2);

(async () => {
  const b = await p.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--autoplay-policy=no-user-gesture-required', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const res = { url, slug };
  for (const mode of ['desktop', 'mobile']) {
    const pg = await b.newPage();
    if (mode === 'desktop') await pg.setViewport({ width: 1440, height: 900 });
    else await pg.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const reqs = [];
    const sizes = {};
    const cdp = await pg.createCDPSession();
    await cdp.send('Network.enable');
    cdp.on('Network.responseReceived', (e) => reqs.push({ url: e.response.url, type: e.type, id: e.requestId }));
    cdp.on('Network.loadingFinished', (e) => { sizes[e.requestId] = e.encodedDataLength; });
    const errs = [];
    pg.on('pageerror', (e) => errs.push(e.message.slice(0, 120)));
    try { await pg.goto(url, { waitUntil: 'load', timeout: 45000 }); } catch (e) { res[mode + '_goto'] = String(e.message).slice(0, 100); }
    await sleep(4500);
    const info = await pg.evaluate(() => {
      const w = window;
      const q = (s) => document.querySelectorAll(s).length;
      const libs = {
        gsap: !!w.gsap, ScrollTrigger: !!w.ScrollTrigger, Lenis: !!(w.Lenis || w.lenis), THREE: !!w.THREE,
        Webflow: !!w.Webflow, next: !!w.__NEXT_DATA__ || !!document.getElementById('__next'), nuxt: !!(w.__NUXT__ || w.$nuxt),
        shopify: !!w.Shopify, locomotive: !!document.querySelector('[data-scroll-container]'),
        swiper: !!w.Swiper || q('.swiper') > 0, lottie: !!w.lottie || q('lottie-player,dotlottie-player') > 0,
        spline: q('spline-viewer') > 0, modelviewer: q('model-viewer') > 0,
        framer: q('[data-framer-name],[data-framer-component-type]') > 0, astro: q('astro-island') > 0,
        wix: !!w.wixBiSession || q('[id^=comp-]') > 5, squarespace: !!w.Static && !!w.Static.SQUARESPACE_CONTEXT,
      };
      const gen = (document.querySelector('meta[name=generator]') || {}).content || '';
      const canv = [...document.querySelectorAll('canvas')].map((c) => {
        let gl = '';
        try { gl = c.getContext('webgl2') ? 'webgl2' : c.getContext('webgl') ? 'webgl' : '2d/other'; } catch (e) { gl = 'err'; }
        return { w: c.width, h: c.height, gl };
      });
      const vids = [...document.querySelectorAll('video')].map((v) => ({
        src: (v.currentSrc || v.src || '').slice(-60), loop: v.loop, muted: v.muted, autoplay: v.autoplay, dur: Math.round(v.duration || 0),
      }));
      const h = (s) => [...document.querySelectorAll(s)].map((e) => e.innerText.trim().replace(/\s+/g, ' ').slice(0, 80)).filter(Boolean).slice(0, 14);
      const cs = (el) => (el ? getComputedStyle(el) : null);
      const h1 = document.querySelector('h1');
      const bs = cs(document.body);
      const all = [...document.querySelectorAll('*')];
      return {
        title: document.title, gen, libs, canv, vids,
        pageH: document.documentElement.scrollHeight, imgs: q('img'), svgs: q('svg'), sections: q('section'),
        h1: h('h1'), h2: h('h2'), nav: h('nav a, header a').slice(0, 14), buttons: h('button, a[class*=btn], a[class*=button]').slice(0, 12),
        fonts: { h1: h1 ? cs(h1).fontFamily.slice(0, 60) : '', body: bs.fontFamily.slice(0, 60), h1size: h1 ? cs(h1).fontSize : '' },
        colors: { bodyBg: bs.backgroundColor, bodyColor: bs.color, h1Color: h1 ? cs(h1).color : '' },
        sticky: all.filter((e) => getComputedStyle(e).position === 'sticky').length,
        fixed: all.filter((e) => getComputedStyle(e).position === 'fixed').length,
        scripts: [...document.scripts].map((s) => s.src).filter(Boolean).map((u) => { try { return new URL(u).host + new URL(u).pathname.slice(0, 40); } catch (e) { return u; } }).slice(0, 30),
        htmlClass: document.documentElement.className.slice(0, 80),
      };
    }).catch((e) => ({ evalError: String(e).slice(0, 100) }));
    const tot = Object.values(sizes).reduce((a, c) => a + c, 0);
    const byType = {};
    reqs.forEach((r) => { byType[r.type] = (byType[r.type] || 0) + (sizes[r.id] || 0); });
    const big = reqs.map((r) => ({ u: r.url.slice(0, 110), type: r.type, kb: Math.round((sizes[r.id] || 0) / 1024) })).sort((a, c) => c.kb - a.kb).slice(0, 8);
    res[mode] = {
      info, errs: errs.slice(0, 3), totalKB: Math.round(tot / 1024),
      byTypeKB: Object.fromEntries(Object.entries(byType).map(([k, v]) => [k, Math.round(v / 1024)])), big, nReq: reqs.length,
    };
    const H = info.pageH || 5000;
    const vh = mode === 'desktop' ? 900 : 844;
    const n = Math.min(9, Math.max(5, Math.ceil(H / vh / 1.3)));
    const positions = Array.from({ length: n }, (_, i) => Math.round((i * (H - vh)) / (n - 1)));
    let i = 0;
    for (const y of positions) {
      const cur = await pg.evaluate(() => scrollY);
      for (let s = 1; s <= 8; s++) { await pg.evaluate((v) => window.scrollTo(0, v), cur + ((y - cur) * s) / 8); await sleep(90); }
      await sleep(900);
      await pg.screenshot({ path: `${out}/${slug}-${mode}-${String(i).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 70 });
      i++;
    }
    await pg.close();
  }
  fs.writeFileSync(`${out}/${slug}.json`, JSON.stringify(res, null, 1));
  await b.close();
  console.log('done', slug);
})().catch((e) => { console.log('FAIL', slug, e.message); process.exit(1); });
