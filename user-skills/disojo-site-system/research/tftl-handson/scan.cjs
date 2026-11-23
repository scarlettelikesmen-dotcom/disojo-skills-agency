// Hands-on scanner for one site: intro frames, a real-wheel scroll through the page with a
// frame per stop, phone frames, and a code read (libraries, init functions, data attributes,
// shaders, media). Study only. Usage: node scan.cjs <slug> <url> [outDir]
const puppeteer = require('puppeteer-core');
const fs = require('fs'), path = require('path');
const [slug, url, outBase = path.join(__dirname, 'scan')] = process.argv.slice(2);
const out = path.join(outBase, slug); fs.mkdirSync(out, { recursive: true });
const wait = ms => new Promise(r => setTimeout(r, ms));
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--autoplay-policy=no-user-gesture-required', '--hide-scrollbars'] });
  const res = { slug, url, files: [], errors: [] };
  const bodies = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1512, height: 864 });
    page.on('response', async r => {
      const u = r.url(), t = (r.headers()['content-type'] || '');
      const size = +(r.headers()['content-length'] || 0);
      res.files.push({ u: u.slice(0, 200), t: t.split(';')[0], size });
      if (/javascript/.test(t) && !/googletagmanager|google-analytics|facebook|hotjar|clarity|doubleclick|recaptcha/.test(u)) {
        try { const b = await r.text(); if (b.length < 3e6) bodies.push({ u, b }); } catch {}
      }
    });
    page.on('pageerror', e => res.errors.push(String(e).slice(0, 160)));
    const t0 = Date.now();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(e => res.errors.push('goto ' + e.message));
    // intro: frames at 0.5, 1.5, 3, 5, 8 s after DOM ready
    for (const [i, at] of [[0, 500], [1, 1500], [2, 3000], [3, 5000], [4, 8000]].entries()) {
      const left = at[1] - (Date.now() - t0); if (left > 0) await wait(left);
      await page.screenshot({ path: `${out}/i${i}.jpg`, type: 'jpeg', quality: 60 }).catch(() => {});
    }
    // inline scripts too
    const inline = await page.evaluate(() => [...document.querySelectorAll('script:not([src])')].map(s => s.textContent).join('\n')).catch(() => '');
    bodies.push({ u: 'inline', b: inline });
    // page facts
    res.facts = await page.evaluate(() => {
      const attrs = {};
      document.querySelectorAll('*').forEach(el => { for (const a of el.attributes) if (a.name.startsWith('data-') && !/^data-(w-|wf-|v-|astro|nuxt|reactroot|n-head|hid|testid|gtm|framer)/.test(a.name)) attrs[a.name] = (attrs[a.name] || 0) + 1; });
      const fonts = [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')))];
      const libs = ['gsap', 'ScrollTrigger', 'Lenis', 'lenis', 'barba', 'THREE', 'PIXI', 'Swiper', 'Splide', 'Flickity', 'lottie', 'bodymovin', 'Webflow', '__NUXT__', '__NEXT_DATA__', 'jQuery', 'Vue', 'React', 'LocomotiveScroll', 'ScrollSmoother', 'SplitText', 'Matter', 'p5', 'OGL', 'Rive', 'spline'].filter(k => k in window);
      return {
        title: document.title, h: document.documentElement.scrollHeight, attrs, fonts, libs,
        canvases: document.querySelectorAll('canvas').length, videos: document.querySelectorAll('video').length,
        imgs: document.querySelectorAll('img').length, gen: document.querySelector('meta[name=generator]')?.content || '',
        lang: document.documentElement.lang,
      };
    }).catch(e => ({ err: e.message }));
    // real wheel through the page
    await page.mouse.move(756, 432);
    let lastY = -1, n = 0, same = 0;
    while (n < 26) {
      await page.screenshot({ path: `${out}/s${String(n).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 55 }).catch(() => {});
      n++;
      for (let k = 0; k < 6; k++) { await page.mouse.wheel({ deltaY: 120 }); await wait(70); }
      await wait(1100);
      const y = await page.evaluate(() => Math.round(scrollY || document.scrollingElement.scrollTop)).catch(() => lastY);
      if (y === lastY) { if (++same >= 2) break; } else same = 0;
      lastY = y;
    }
    res.wheelFrames = n; res.wheelEndY = lastY;
    if (lastY <= 0) {
      res.errors.push('wheel did not move the page (hijacked or blocked)');
      const H = await page.evaluate(() => document.documentElement.scrollHeight).catch(() => 864);
      if (H > 1500) { // fall back to script scrolling so we still see the page
        const steps = Math.min(16, Math.ceil(H / 864));
        for (let i = 1; i <= steps; i++) {
          await page.evaluate(y => { window.scrollTo(0, y); window.dispatchEvent(new Event('scroll')); }, Math.round(i * (H - 864) / steps)).catch(() => {});
          await wait(1300);
          await page.screenshot({ path: `${out}/s${String(n).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 55 }).catch(() => {});
          n++;
        }
        res.wheelFrames = n; res.fallbackScroll = true;
      }
    }
    // phone
    const ph = await browser.newPage();
    await ph.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
    await ph.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
    await ph.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {});
    await wait(6000);
    const phH = await ph.evaluate(() => document.documentElement.scrollHeight).catch(() => 3000);
    for (let i = 0; i < 4; i++) {
      await ph.evaluate(y => window.scrollTo(0, y), Math.round(i * (phH - 844) / 3)).catch(() => {});
      await wait(1300);
      await ph.screenshot({ path: `${out}/p${i}.jpg`, type: 'jpeg', quality: 55 }).catch(() => {});
    }
  } catch (e) { res.errors.push(String(e).slice(0, 200)); }
  // code read
  const all = bodies.map(x => x.b).join('\n');
  const uniq = re => [...new Set((all.match(re) || []))];
  res.code = {
    scripts: bodies.map(x => x.u.slice(0, 120) + ' ' + Math.round(x.b.length / 1024) + 'KB').slice(0, 30),
    inits: uniq(/\b(?:init|animate|setup|create)[A-Z]\w{2,40}\b/g).slice(0, 120),
    gsapPlugins: uniq(/\b(ScrollTrigger|SplitText|CustomEase|Flip|Draggable|InertiaPlugin|MorphSVGPlugin|DrawSVGPlugin|MotionPathPlugin|ScrollSmoother|Observer|ScrambleTextPlugin|Physics2DPlugin)\b/g),
    eases: uniq(/CustomEase\.create\([^)]{0,80}\)/g).slice(0, 20),
    webgl: uniq(/\b(gl_FragColor|gl_Position|ShaderMaterial|RawShaderMaterial|WebGLRenderer|EffectComposer|GLTFLoader|DRACOLoader|KTX2Loader|troika|globe\.gl|Curtains|OGL|PIXI\.|VideoDecoder|uniform sampler2D|MeshPhysicalMaterial|InstancedMesh|RGBELoader)\b/g),
    css: uniq(/\b(clip-?[pP]ath|mix-blend-mode|backdrop-filter|mask-image|mask-position|filter:\s*blur|scrub|pin(?:Spacing)?|containerAnimation|matchMedia|IntersectionObserver|requestVideoFrameCallback|getPointAtLength|Intl\.DateTimeFormat|sessionStorage|AudioContext|Howl)\b/g),
  };
  res.media = {
    video: res.files.filter(f => /video|\.mp4|\.webm|\.m3u8/.test(f.t + f.u)).map(f => f.u).slice(0, 12),
    models: res.files.filter(f => /\.(glb|gltf|fbx|obj|hdr|exr|ktx2|bin|riv|splat|json)(\?|$)/.test(f.u) && !/manifest|wp-json|api\./.test(f.u)).map(f => f.u).slice(0, 15),
    fontsFiles: res.files.filter(f => /font|\.woff2?/.test(f.t + f.u)).map(f => f.u.split('/').pop()).slice(0, 12),
    totalMB: +(res.files.reduce((a, f) => a + f.size, 0) / 1e6).toFixed(1),
  };
  delete res.files;
  fs.writeFileSync(`${out}/scan.json`, JSON.stringify(res, null, 1));
  await browser.close();
  console.log(slug, 'frames', res.wheelFrames, 'h', res.facts?.h, 'errors', res.errors.length);
  process.exit(0);
})();
