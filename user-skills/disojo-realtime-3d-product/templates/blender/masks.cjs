// Masks for the v2 bake: white = ink/metal, black = background. Run: node masks.cjs
const p = require('puppeteer-core'); const fs = require('fs');
const V = 'M40.00 100.00 L52.28 100.00 L92.28 0.00 L80.00 0.00 L46.14 84.65 L12.28 0.00 L0.00 0.00 Z';
const AE = 'M131.05 0.00 L118.77 0.00 L78.77 100.00 L91.05 100.00 L103.45 69.00 L146.05 69.00 L146.05 90.00 L146.05 100.00 L157.05 100.00 L204.05 100.00 L204.05 90.00 L157.05 90.00 L157.05 56.00 L198.05 56.00 L198.05 46.00 L157.05 46.00 L157.05 10.00 L204.05 10.00 L204.05 0.00 L157.05 0.00 L146.05 0.00 Z M146.05 46.00 L146.05 56.00 L146.05 58.00 L107.85 58.00 L127.05 10.00 L146.05 10.00 Z';
const L = 'M228.05 90.00 L228.05 100.00 L239.05 100.00 L280.05 100.00 L280.05 90.00 L239.05 90.00 L239.05 0.00 L228.05 0.00 Z';
// spaced wordmark as on the reference sheet: about one letter width between letters
const mark = (fill) => `<path fill="${fill}" d="${V}"/><path fill="${fill}" transform="translate(73.5 0)" d="${AE}"/><path fill="${fill}" transform="translate(109.5 0)" d="${L}"/>`;
const pages = {
  // 390 x 100 units, rendered with a margin
  'wm-spaced.png': [4200, 1200, `<svg xmlns="http://www.w3.org/2000/svg" width="4200" height="1200" viewBox="-30 -10 450 120"><rect x="-30" y="-10" width="450" height="120" fill="#000"/>${mark('#fff')}</svg>`],
  // bottom disc, 56 mm square, centre = bottle axis; arc text on r = 21 mm, small spaced wordmark in the middle
  'bottom.png': [2048, 2048, `<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="-28 -28 56 56">
    <rect x="-28" y="-28" width="56" height="56" fill="#000"/>
    <defs><path id="top" d="M -20.5 0 A 20.5 20.5 0 0 1 20.5 0"/><path id="bot" d="M -22.3 0 A 22.3 22.3 0 0 0 22.3 0"/></defs>
    <style>text{font-family:'Inter';font-weight:500;font-size:2.1px;letter-spacing:.42px;fill:#fff}</style>
    <text><textPath href="#top" startOffset="50%" text-anchor="middle">750 ML  |  316L STAINLESS STEEL</textPath></text>
    <text><textPath href="#bot" startOffset="50%" text-anchor="middle">VACUUM INSULATED</textPath></text>
    <g transform="translate(-9.75 -2.5) scale(0.05)">${mark('#fff')}</g></svg>`],
};
(async () => {
  const b = await p.launch({ channel: 'chrome', headless: 'new' }); const g = await b.newPage();
  for (const [f, [w, h, svg]] of Object.entries(pages)) {
    await g.setViewport({ width: w, height: h });
    await g.setContent(`<html><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=block" rel="stylesheet"><style>body{margin:0;background:#000}</style></head><body>${svg}</body></html>`, { waitUntil: 'domcontentloaded' });
    console.log(f, await g.evaluate(async () => { await document.fonts.load('500 10px Inter'); await document.fonts.ready; return document.fonts.check('500 10px Inter'); }));
    await g.screenshot({ path: 'tex/' + f, clip: { x: 0, y: 0, width: w, height: h } }); console.log('wrote', f);
  }
  await b.close();
})();
