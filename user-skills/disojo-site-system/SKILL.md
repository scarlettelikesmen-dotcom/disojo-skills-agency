---
name: disojo-site-system
description: START HERE for any Disojo website, new or redo, client or our own (disojostudio.com). One pipeline from material to live site - intake (crawl a URL word for word or inventory an asset folder, photo contact sheet with honesty tiers), message (section jobs and copy, about 80 words a screen), one direction (tokens, photo grade, one signature move, a rendered first screen; Tejjomay's only checkpoint), build from the section library in the Astro starter, gates enforced by the site-guard hook (premium composition gate, system check, content parity, phone audit, Lighthouse), demo link, launch checklist, production on "deploy". Logs time from material to demo, first-look verdict and fix rounds. Use when Tejjomay says new client, redo this site, here are their assets, build or change a site, or a page "doesn't land".
---

# Disojo site system

One skill, six stages, one starter. Replaces the old playbook, intake, archetypes, React starter, scroll rebuild, premium method, redo pipeline, art direction, site flow, premium QA, premium look and launch checklist (archived 2026-11-02 in `~/.claude/skills-archive/2026-11-02/`, not deleted).
Separate skills it calls, each with its own job: `disojo-image-pipeline` (find, tier and grade photos), `disojo-brand-system` / `disojo-logo-design` (only when identity is in scope), `disojo-3d-product-site` and `disojo-packaged-product-3d` (only for a real 3D hero).

`SK=~/.claude/skills/disojo-site-system`. Node scripts run with `NODE_PATH=$HOME/.disojo-tools/node_modules` (puppeteer-core on system Chrome).

## Why it is built this way (measured 2026-11-02, `references/composition-bands.md`)
Three full redo directions passed every technical check and still did not land. The gap was composition: reference sites carry a big photograph on 3 to 8 of their first 8 screens (median 5), we carried 0 to 2; they run about 50 words and 4 text sizes a screen, we ran 135-151 words and 8.6 sizes. So the order is: words cut first, photos found first, one direction not three, and a gate that measures composition while building.

## The stages
| # | Stage | Do | Output | Stop? |
|---|---|---|---|---|
| 0 | **Intake** | `bash $SK/scripts/new_site.sh <slug> [url]`. URL = redo: crawls every page word for word, self-hosts images, writes `research/inventory.md`. No URL = new: put the client's files in `assets/`, run `python3 $SK/scripts/inventory_assets.py assets --md research/inventory.md`, send `templates/asset-request.md` for what is missing. Then the photo pass: `disojo-image-pipeline` contact sheet, every image marked tier A/B/C and a job. | `~/Desktop/websites ARCHIVE/<slug>-site/`, inventory, contact sheet, gap list. Log started. | no |
| 1 | **Message** | `references/message.md`: one job per section, the visitor's question it answers, its copy (client's words or Tejjomay's, verified numbers only), its one photo. About 80 words a screen, 120 max. Cut before designing. | `brief/MESSAGE.md` (template) | no |
| 2 | **Direction** | `references/direction.md`: ONE direction. Tokens (`templates/tokens.example.json`), the photo grade, one signature move, nav and type. Render the first screen and one proof section with real copy and real photos: `preview.html` + `node $SK/scripts/render_directions.cjs <project>/brief`. | `brief/BRIEF.md`, `brief/A/`, desk + phone PNGs | **YES: the only checkpoint.** Send the PNGs, `log.py <slug> show`, then `log.py <slug> verdict yes/no "<their words>"`. |
| 3 | **Build** | `python3 $SK/scripts/tokens_to_css.py brief/A/tokens.json site/src/styles/tokens.css`, fill `site/src/data/brand.js`. Compose pages from the section library (`references/sections.md`, components in `site/src/components/sections/`). Build exactly ONE bespoke signature section for this client. Redo: run `src/lib/sections.js` over crawled pages first; every page renders from content via `[...route].astro`. | the site, section by section | no |
| 4 | **Gates** | Per section while building, enforced by the hook: `node $SK/scripts/premium_gate.cjs site http://localhost:<port> [/paths]`. Before showing: `system_check.cjs <url> site/tokens.json`, `audit.cjs <project> <url>` (redo parity), `phone_audit.cjs <url> site/dist qa/phone.json`, `references/first-look.md` on every screen. | `~/Desktop/DISOJO SOLUTIONS/qa-gate/<project>/<time>/` | fix every FAIL, explain every WARN |
| 5 | **Ship** | Demo: `bash $SK/scripts/deploy_demo.sh <project> <slug>` only after Tejjomay's go (`log.py <slug> demo <url>`). Launch: `references/launch.md` + `bash $SK/scripts/prelaunch_scan.sh site` + `scripts/lighthouse_summary.sh <deployed-url>`. Production only on the word "deploy". | `<slug>-demo.vercel.app`, then the client's domain | on their word |

After each round of changes Tejjomay asks for: `python3 $SK/scripts/log.py <slug> fix "<what>"`. `log.py summary` prints the three numbers per project: hours from material to demo, first-look approved, fix rounds. Those numbers say whether this system works; nothing else does.

## The site guard (gates while working, not after)
`hooks/site_guard.cjs` is installed in `~/.claude/settings.json`: after any edit to a site file (astro, css, js, html, json) under `~/Desktop/disojo-mix`, `~/Desktop/disojo-hybrid` or `~/Desktop/websites ARCHIVE/*`, ending the turn is blocked until `premium_gate.cjs` has run for that project. When the gate truly does not apply (a non-visual change, an edit already verified with screenshots this turn), stamp it and say so to Tejjomay: `node $SK/scripts/premium_gate.cjs --skip <root> "<reason>"`. Never skip to save time.

What the gate fails: overflow, broken images, images shown soft (real file pixels under 75% of what the screen needs at 2x; reads the srcset file actually chosen), placeholders, em dashes, banned hype words, phone text under 12px, a first screen with neither a photo nor type at scale, fewer than 3 in 8 screens with a big image. It warns outside the reference bands for words, boxes, buttons and text sizes per screen, no image ever covering half a screen, and under half the big images reading as photographs.

## Hard rules
- **Never invent content.** Copy is the client's word for word or Tejjomay's; numbers only when verified; missing facts become `TODO(client)` and go on the gap list. No stock or AI photo next to a client name, result or quote (tiers in `disojo-image-pipeline`).
- **Every client gets its own look**: tokens, the photo grade and the one signature section. The library is plumbing and proven mechanisms; never ship a past client's look (memory `feedback-unique-design-per-client`).
- **One direction, one checkpoint.** Three directions on 2026-11-01 each carried a trick and none landed.
- Free fonts only (Google Fonts, Fontshare), licence recorded in tokens.json. Never lift a reference's commercial font, copy, images or code.
- The one button (`components/Btn.astro`): label roll and twin arrows on `cubic-bezier(.16,1,.35,1)` about 0.7s, springy press. "Feels dead" means change the curve, not the speed.
- Demos are noindex and in their own Vercel project. Deploying is publishing: wait for the word.
- Footer credit stays (Base.astro): "Design & Systems · © Disojo Studio" linking to https://disojostudio.com.
- Test 1512x864 (plus 1440x790, 1920x1080, 1280x720) and phones 390/360/430 by measurement. Real phones and Safari are untested unless someone checks them: say so.
- Do only what was asked; finish a whole section, verify, then show with screens; say what is placeholder, stock, AI or untested.

## Files
- `starter/`: Astro 5 + Lenis. Base layout (nav, phone menu, skip link, SEO, grain, credit), `Btn`, `Pic` (srcset, in-frame parallax), 17 section components, `sections.css`, `main.js` (smooth scroll, nav, menu, reveals, parallax), content renderer and catch-all route, sitemap, 404. `src/pages/library.astro` shows every section on one page (run the starter: `npm i && npx astro dev`, open /library/); new_site.sh leaves it out of client projects.
- `scripts/`: new_site.sh, intake.cjs, make_content.py, inventory_assets.py, tokens_to_css.py, render_directions.cjs, premium_gate.cjs (+ lib/screen.cjs, flatness.py), system_check.cjs, audit.cjs, phone_audit.cjs, qa_probe.js, inspect_site.js, study_site.cjs, composition_probe.cjs, design_lint.py, lighthouse_summary.sh, prelaunch_scan.sh, deploy_demo.sh, log.py, og/ (share image from the site's fonts).
- `references/`: message.md, direction.md, sections.md, launch.md, lessons.md, first-look.md, composition-bands.md, design-system-rules.md, direction-families.md, reference-measurements.md, reference-sites.md, example-movementfirst-A/ (a full redo build), shots/.
- `research/desk/`: the composition study screens of the 15 measured sites.
- `templates/`: MESSAGE.md, BRIEF.md, tokens.example.json, preview-skeleton.html, asset-request.md.
