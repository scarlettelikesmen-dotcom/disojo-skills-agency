// Exports the four template shapes as GLB (named meshes + named materials, label art NOT baked in).
// usage: npm run build && npx vite preview --port 4402 &   then   NODE_PATH=~/.disojo-tools/node_modules node scripts/export_glb.cjs http://localhost:4402 assets/templates
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [url, out] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const pg = await b.newPage(); pg.on('pageerror', (e) => console.log('pageerror', String(e)));
  await pg.goto(`${url}/export.html`, { waitUntil: 'load' }); await pg.waitForFunction('window.__done === true', { timeout: 60000 });
  const glb = await pg.evaluate(() => window.__glb);
  for (const [name, b64] of Object.entries(glb)) { const f = path.join(out, `${name}.glb`); fs.writeFileSync(f, Buffer.from(b64, 'base64')); console.log(name, fs.statSync(f).size, 'bytes'); }
  await b.close();
})();
