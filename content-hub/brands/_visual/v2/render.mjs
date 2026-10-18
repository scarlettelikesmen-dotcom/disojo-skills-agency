import { createRequire } from "node:module";
const puppeteer = createRequire("/Users/tejjo/.claude/skills/disojo-reel-studio/engine/tools/")("puppeteer-core");
import path from "node:path"; import { fileURLToPath, pathToFileURL } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const names = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
for (const n of names) { const p = await b.newPage(); await p.setViewport({ width: 1080, height: 1920 });
  await p.goto(pathToFileURL(path.join(here, n + ".html")).href, { waitUntil: "networkidle0" }); await p.evaluate(() => document.fonts.ready);
  const els = await p.$$(".s"); for (let i = 0; i < els.length; i++) await els[i].screenshot({ path: path.join(here, `${n}-${i + 1}.png`) });
  console.log("rendered", n, els.length); await p.close(); }
await b.close();
