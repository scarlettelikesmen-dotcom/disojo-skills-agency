---
name: disojo-redo-pipeline
description: Plug-and-play website redo. Tejjomay pastes a client URL (or drops an asset folder) and this runs intake (crawl every page word for word, self-host images, inventory with gaps), produces THREE design-direction briefs with rendered previews for them to pick one or several, builds the chosen direction on a shared Astro token framework, gates it (system check against its own tokens, A-to-Z audit with content parity, phone audit), and ships a public noindex demo at <client>-demo.vercel.app. Use when they say "redo this site", "rebuild <url>", "here are their assets, make a site", or paste a URL to redo. Design-system rules come from a measured study of bymonolog.com and its 8 work sites.
---

# Disojo redo pipeline

One command per stage; each writes files the next reads. **Stop at the checkpoint (stage 2) and wait for their pick.** Everything else runs straight through.
Run node scripts with `NODE_PATH=$HOME/.disojo-tools/node_modules` (puppeteer-core with system Chrome). `SK=~/.claude/skills/disojo-redo-pipeline`.

| Stage | Command | Output |
|---|---|---|
| 0. Scaffold + intake | `bash $SK/scripts/new_redo.sh <slug> <url>` (URL optional) | `~/Desktop/websites ARCHIVE/<slug>-redo/` with research/, brief/, site/ (starter), qa/, assets/ |
| 1a. Crawl (if run alone) | `node $SK/scripts/intake.cjs <url> <project> [maxPages]` | research/pages/*.json (every block word for word), chrome.json (nav, footer, contacts, socials, logo), crawl.json, source-shots/ |
| 1b. Content | `python3 $SK/scripts/make_content.py <project>` | site/src/data/pages/*.json, site.json, images.json + public/img WebP (2000 and 720px), redirects.json, research/inventory.md |
| 1c. Assets only (no site) | `disojo-client-intake/scripts/inventory_assets.py`, then write site/src/data/pages/*.json by hand from their documents, same schema | same |
| **2. Checkpoint: three briefs** | Write brief/BRIEF.md (template) + brief/A, B, C each with tokens.json, concept.txt, preview.html; then `node $SK/scripts/render_directions.cjs <project>/brief` | brief/compare.html + desk.png, phone.png, desk-full.jpg per direction. **Send compare.html and the PNGs; wait.** |
| 3. Build | **First run** `starter/src/lib/sections.js` over every page (it groups the crawled blocks into typed sections: hero, rows, panes, points, steps, reviews, faq, contact, areas, checklist, profile, videos, widget, cta, prose; add the client's proper nouns to PROPER). Then write ONE designed renderer per kind for this direction (reference: `references/example-movementfirst-A/`, Movement First, Direction A, 27 pages from one template) plus the home hero and an article layout for blog/legal. | |
| 3b. Build (detail) | Copy the chosen tokens to site/tokens.json, `python3 $SK/scripts/tokens_to_css.py site/tokens.json site/src/styles/tokens.css` (put the printed fonts href in brand.js), fill brand.js, design the home and each template; every other page already renders from content via `[...route].astro` | the site |
| 4. Gates | `astro build && astro preview --port 4601`, then `system_check.cjs http://localhost:4601 site/tokens.json`, `audit.cjs <project> http://localhost:4601`, `phone_audit.cjs http://localhost:4601 site/dist qa/phone.json`, Lighthouse (`disojo-premium-site-method/scripts/lighthouse_summary.sh`), screenshots at 1512 and 390 looked at by eye | qa/*.json; all must PASS |
| 5. Ship | `bash $SK/scripts/deploy_demo.sh <project> <slug>`, **only after their go-ahead** | https://<slug>-demo.vercel.app (noindex, open, no login wall) + a 3-line summary they can forward |

If they pick several directions, build each as its own site folder (site-A, site-B) from the same content, and ship each as `<slug>-<letter>-demo`.

## Stage 2 in detail (where the quality comes from)
1. Read `references/design-system-rules.md` (the measured system of the 9 reference sites and our drift) and `references/direction-families.md` (nine families; pick safe, bold, wildcard). Look at `references/shots/grid-*.jpg` for the families you pick.
2. Read research/inventory.md and the source screenshots. Find the client's truth. List what is missing.
3. For each direction write `tokens.json` (schema: `templates/tokens.example.json`, every rule of the token contract in design-system-rules.md), `concept.txt` (one line), and `preview.html` from `templates/preview-skeleton.html`: nav, the full first screen and one section that proves the system, **with their real copy and their real images** from site/public/img. No lorem, no invented stats, reviews or prices.
4. The three must differ on at least four of: concept, type pairing, palette logic, layout skeleton, signature move, motion character. If two previews look like siblings, redo one.
5. Render, look at every PNG yourself (desktop and phone), fix overflow and weak screens, then send `compare.html` plus the PNGs with SendUserFile. Say plainly what each needs that the client has not supplied.

## Hard rules
- **Never invent content.** Copy is the client's, word for word, or written by Tejjomay. Missing facts are marked `TODO(client)` and listed. Forms are listed in the inventory and wired or replaced before launch.
- **Every redo gets its own look.** The starter is plumbing (base.css, main.js, Blocks.astro); the direction's look goes in its own CSS and components. Never reuse a past client's look (memory `feedback-unique-design-per-client`).
- **Free fonts only** (Google Fonts or Fontshare), licence recorded in tokens.json. Never lift a reference's commercial font, curves, copy or layout.
- Demos are noindex and in their own Vercel project. Deploying is publishing: wait for their word.
- The footer credit is the starter's: "Design & Systems · © Disojo Studio 2026" linking to https://disojostudio.com.
- Desktop and phone are the same system scaled, verified at 1512x864 and 390/360/430 by measurement, not a glance. Real phones and Safari are untested unless they check them: say so.

## Lessons from the first full run (Movement First PT, 2026-11-01, Direction A)
- Webflow tab panes and accordion answers are display:none: intake now reads them (and their not-yet-loaded images). Check word counts against source screenshots anyway.
- Body links are often relative (`/services`): make_content now localises them. Anchor targets (`#differentiators`, `#how-it-works`) come from the source's section ids: map kicker slugs to them (ALIAS in Section.astro) and let audit.cjs prove every anchor resolves.
- Text the content step drops as "repeated chrome" can be real ("Still have questions?"): the parity audit catches it; restore it in the renderer.
- Hero headlines must be visible without JS (CSS rise, no opacity reveal): an opacity reveal cost 1.7 s of LCP (93 -> 100 mobile).
- Keep the client's words exact, including punctuation; only re-case ALL CAPS. The audit flags any rewording.
- **Motion is part of the build, not a polish pass** (Tejjo, 2026-11-01: 'not fluid and smooth at all, very rigid'). Every direction ships a motion layer: Lenis on the GSAP ticker, SplitText line masks on headings, clip/scale reveals and in-frame parallax on photos, staggered flow-in for copy and lists, animated FAQ height and menu, two-part arrow hovers, draggable carousels, cross-document view transitions. Reference: `references/example-movementfirst-A/main.js`. First-screen headings, copy and photos must never be hidden (glide only), or LCP jumps from 1.5 s to 3-4 s; verify with Lighthouse after motion.
- Third-party widgets (booking, forms) run Cloudflare checks that fail headless; verify them in the real browser pane.

## Known limits (be upfront)
- JS-heavy sites (some Wix and Framer builds, single-page apps that load text late) may crawl thin: check word counts in the inventory against the source screenshots. Bot walls (403/Cloudflare) block the crawl: ask for an export or the assets.
- `make_content.py` drops text repeated on 60%+ of pages (cookie bars, newsletter boxes); the dropped lines are listed in the inventory. Check none of it was real content.
- No CMS: the client edits through us. Forms need a backend chosen per client.

## Files
- scripts/: study_site.cjs (measure any site's system), intake.cjs, make_content.py, tokens_to_css.py, render_directions.cjs, system_check.cjs, audit.cjs, phone_audit.cjs, deploy_demo.sh, new_redo.sh
- starter/: Astro 5 plumbing (Base layout with nav, phone menu, skip link, SEO, credit; Blocks renderer; catch-all route; sitemap; 404)
- templates/: tokens.example.json, preview-skeleton.html, BRIEF.md
- references/: design-system-rules.md, direction-families.md, reference-measurements.md, shots/
