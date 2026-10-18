// node render-stills.mjs  -> renders every mockup html here to PNGs (reel frames full page, carousels per .s slide)
import { createRequire } from "node:module";
const puppeteer = createRequire("/Users/tejjo/.claude/skills/disojo-reel-studio/engine/tools/")("puppeteer-core");
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath, pathToFileURL } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
for (const f of fs.readdirSync(here).filter((x) => x.endsWith(".html"))) {
  const name = f.replace(".html", ""); const p = await b.newPage();
  const reel = name.endsWith("-reel");
  await p.setViewport({ width: reel ? 1080 : 2184, height: reel ? 1920 : 1350, deviceScaleFactor: 1 });
  await p.goto(pathToFileURL(path.join(here, f)).href, { waitUntil: "networkidle0" }); await p.evaluate(() => document.fonts.ready);
  if (reel) await p.screenshot({ path: path.join(here, name + ".png") });
  else { const els = await p.$$(".s"); for (let i = 0; i < els.length; i++) await els[i].screenshot({ path: path.join(here, `${name}-${i + 1}.png`) }); }
  console.log("rendered", name); await p.close();
}
await b.close();
