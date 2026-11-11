// TFTL case pages are a modal with a sideways gallery of their own site screenshots.
// node gallery.cjs <list.json [{s,url}]> <outDir> [conc=3]  -> outDir/<s>/NN.jpg + meta.json (title, tags, text)
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [LIST, OUT, CONC = '3'] = process.argv.slice(2); fs.mkdirSync(OUT, { recursive: true });
const sites = JSON.parse(fs.readFileSync(LIST)); const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--mute-audio'], protocolTimeout: 180000 });
  let i = 0;
  async function worker() {
    while (i < sites.length) {
      const site = sites[i++]; const dir = path.join(OUT, site.s); if (fs.existsSync(path.join(dir, 'meta.json'))) continue;
      fs.mkdirSync(dir, { recursive: true }); const page = await browser.newPage(); await page.setViewport({ width: 1512, height: 864 });
      try {
        await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 90000 }); await sleep(3000);
        // pull the gallery sideways so lazy images load
        for (let k = 0; k < 25; k++) { await page.mouse.move(756, 430); await page.mouse.wheel({ deltaY: 500 }); await sleep(250); }
        await sleep(1500);
        const info = await page.evaluate(() => {
          const imgs = [...document.querySelectorAll('img, video')].map(e => ({ src: e.currentSrc || e.src || (e.querySelector && e.querySelector('source') || {}).src, w: e.naturalWidth || e.videoWidth || e.getBoundingClientRect().width, tag: e.tagName }))
            .filter(x => x.src && !/\.svg|data:/.test(x.src) && x.w >= 400);
          const txt = document.body.innerText.slice(0, 1500);
          return { title: document.title, imgs: [...new Map(imgs.map(x => [x.src, x])).values()], txt };
        });
        let n = 0;
        for (const im of info.imgs) {
          if (im.tag === 'VIDEO' || n >= 24) continue;
          try { const r = await page.evaluate(async u => { const b = await (await fetch(u)).arrayBuffer(); return Array.from(new Uint8Array(b)); }, im.src);
            const ext = (im.src.match(/\.(jpe?g|png|webp|avif|gif)/i) || ['', 'jpg'])[1]; fs.writeFileSync(path.join(dir, String(n).padStart(2, '0') + '.' + ext), Buffer.from(r)); n++; } catch (e) {}
        }
        fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ s: site.s, url: site.url, title: info.title, images: n, videos: info.imgs.filter(x => x.tag === 'VIDEO').length, txt: info.txt }));
        console.log('ok', site.s, n, 'images');
      } catch (e) { fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ s: site.s, err: String(e).slice(0, 120) })); console.log('fail', site.s); }
      await page.close();
    }
  }
  await Promise.all([...Array(+CONC)].map(worker)); await browser.close();
})();
