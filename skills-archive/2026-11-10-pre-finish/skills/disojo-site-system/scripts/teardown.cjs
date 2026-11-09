// What a reference site actually ships: node teardown.cjs <outDir> <url> [url...]
// Loads the page at 1512x864, scrolls it, and logs every file it fetches (models, HDRIs, textures, video, scripts),
// the WebGL canvases, libraries on window and the generator. Writes <outDir>/<name>-teardown.md and .json.
// Records names and sizes only: nothing from the reference is saved (no-copy law).
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [OUT, ...urls] = process.argv.slice(2);
if (!OUT || !urls.length) { console.log('usage: node teardown.cjs <outDir> <url> [url...]'); process.exit(1); }
const KIND = [
  ['3d model', /\.(glb|gltf|drc|obj|fbx|usdz|splat|ply)(\?|$)/i], ['hdri / env', /\.(hdr|exr)(\?|$)|env|hdri/i],
  ['gpu texture', /\.(ktx2|basis|dds)(\?|$)/i], ['video', /\.(mp4|webm|mov|m3u8)(\?|$)/i],
  ['wasm / decoder', /\.wasm(\?|$)|draco|basis_transcoder|meshopt/i], ['data', /\.(bin|json)(\?|$)/i],
  ['image', /\.(avif|webp|png|jpe?g|svg|gif)(\?|$)/i], ['script', /\.m?js(\?|$)/i], ['font', /\.(woff2?|ttf|otf)(\?|$)/i],
];
const kind = (u, t) => (KIND.find(([, re]) => re.test(u)) || [t])[0];
const kb = n => (n / 1024).toFixed(0) + ' KB';
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  for (const url of urls) {
    const name = new URL(url).hostname.replace(/^www\./, '').split('.')[0];
    const g = await b.newPage(); await g.setViewport({ width: 1512, height: 864 });
    const files = [];
    g.on('response', async r => {
      const u = r.url(); if (u.startsWith('data:')) return;
      let size = +(r.headers()['content-length'] || 0);
      if (!size) { try { size = (await r.buffer()).length; } catch (e) {} }
      files.push({ kind: kind(u, r.request().resourceType()), size, url: u });
    });
    await g.goto(url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(e => console.log(name, 'load:', e.message));
    await new Promise(r => setTimeout(r, 4000));
    for (let i = 0; i < 10; i++) { await g.mouse.wheel({ deltaY: 864 }); await new Promise(r => setTimeout(r, 1000)); }
    await new Promise(r => setTimeout(r, 2000));
    const page = await g.evaluate(() => ({
      title: document.title, generator: document.querySelector('meta[name=generator]')?.content || null,
      canvases: [...document.querySelectorAll('canvas')].map(c => `${c.width}x${c.height}`),
      libs: ['THREE', '__THREE__', 'gsap', 'ScrollTrigger', 'Lenis', 'lenis', 'Spline', 'PIXI', 'BABYLON', 'Webflow', 'Swiper', 'lottie', 'barba'].filter(k => window[k] !== undefined).map(k => k === '__THREE__' ? 'three r' + window.__THREE__ : k),
      docH: document.documentElement.scrollHeight,
    }));
    await g.close();
    if (/deployment paused|not found|404|can.t be reached/i.test(page.title) || files.length < 5) console.log(`WARNING ${name}: looks offline ("${page.title}", ${files.length} files). Do not study it from this run.`);
    const libsFromUrls = [...new Set(files.filter(f => f.kind === 'script').map(f => (f.url.match(/(three|gsap|ScrollTrigger|SplitText|lenis|spline|pixi|babylon|draco|GLTFLoader|RGBELoader|EffectComposer|UnrealBloomPass|SMAAPass|FXAA|OutputPass|ShaderPass)[^/]*?(?=\.m?js)/i) || [])[0]).filter(Boolean))];
    const byKind = {}; files.forEach(f => { (byKind[f.kind] ||= []).push(f); });
    const total = files.reduce((s, f) => s + f.size, 0);
    const order = ['3d model', 'hdri / env', 'gpu texture', 'wasm / decoder', 'video', 'data', 'image', 'script', 'font'];
    let md = `# Teardown: ${url}\n\nTitle: ${page.title}\nGenerator: ${page.generator || '-'}\nCanvases: ${page.canvases.join(', ') || 'none'}\nLibraries on window: ${page.libs.join(', ') || '-'}\nLibraries / passes from file names: ${libsFromUrls.join(', ') || '-'}\nTotal fetched: ${kb(total)} in ${files.length} files (after 10 scroll steps)\n\n`;
    for (const k of [...order, ...Object.keys(byKind).filter(k => !order.includes(k))]) {
      if (!byKind[k]) continue; const list = byKind[k].sort((a, b) => b.size - a.size);
      md += `## ${k} (${list.length}, ${kb(list.reduce((s, f) => s + f.size, 0))})\n` + list.slice(0, k === 'image' || k === 'script' ? 15 : 40).map(f => `- ${kb(f.size)}  ${f.url.slice(0, 180)}`).join('\n') + '\n\n';
    }
    md += `## What this means (write it before building)\n- How is the hero object made (live model, frame sequence, video, still)?\n- Where does the realism come from (HDRI, textures, post-processing, the art itself)?\n- What would we need to match it (model, materials, light, budget in MB)?\n`;
    fs.writeFileSync(path.join(OUT, `${name}-teardown.md`), md);
    fs.writeFileSync(path.join(OUT, `${name}-teardown.json`), JSON.stringify({ url, ...page, libsFromUrls, total, files }, null, 1));
    console.log(`${name}: ${files.length} files, ${kb(total)}, 3d ${(byKind['3d model'] || []).length}, hdri ${(byKind['hdri / env'] || []).length}, canvases ${page.canvases.length} -> ${path.join(OUT, name + '-teardown.md')}`);
  }
  await b.close();
})();
