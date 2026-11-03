---
name: project-vael-site
description: "VÆL hydration brand site, started 2026-11-03 via disojo-site-system; state, confirmed facts, decisions, paths"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-02T22:41:45.122Z
---

Client: VÆL, a REAL premium hydration brand (Tejjo 2026-11-03). Product VÆL ONE bottle.
Confirmed specs (Tejjo: "specs are confirmed"): 750 ml, 316L stainless steel, double-wall vacuum insulation, machined aluminium cap with magnetic close, The Core = mineral cartridge (a mineral filter), anti-slip base. Colourways Mineral, Carbon, Slate.
Scope: a few pages plus a proper e-com shop built like a real store; Tejjo connects the Shopify API later.
Logo: redraw the VÆL wordmark properly as a constructed wordmark (same idea). Prices NOT given: never invent, use TODO(client).
Assets: only two ChatGPT collages (1536x1024, low-res, product proportions inconsistent). Tejjo: do NOT use their fonts or colours ("it sucks").
Tejjo's working rule for this build: keep working without stopping, post short updates, show only when finished and audited ("don't show me bullshit").
Project: ~/Desktop/websites ARCHIVE/vael-site (site/ = starter, blender/ = bl.py socket sender + model/look/stage/render scripts, brand/wordmark/build_wordmark.py constructs the wordmark with shapely in ~/claudeskillsthrureels/.venv).
Plan: bottle modelled in Blender (lathe profiles, real cm scale), all product imagery rendered from that one model (consistent); signature = exploded assembly frame sequence (technique B). Checkpoint = one direction (stage 2) only.
Related: [[project-blender-autonomous-setup]], [[project-premium-3d-research-2026-11-03]]

## State 2026-11-03 (evening)
- Look: black studio, bottle standing in still water with ripples + reflection (plinth dropped). Renders from Blender 5.2 over the MCP socket (blender/bl.py, shots.py SHOT=..., queue.sh). Cap has a real boolean-engraved Æ; body has a debossed wordmark.
- Tokens: Geist + Geist Mono, ink #0A0B0B / page #000, paper #E6E7E2, ferric accent #C4552F (only The Core band, bag count, add-to-bag).
- Site at vael-site/site (Astro 5), dev port 4620 (4600 is the KDC redo server; launch.json entry "vael"). Pages: /, /shop/, /products/vael-one/ (?c=mineral|carbon|slate), /the-core/, /cart/, 404.
- Commerce: src/lib/commerce.js, Local (localStorage) provider now; Shopify Storefront cart provider switches on with PUBLIC_SHOPIFY_DOMAIN + PUBLIC_SHOPIFY_STOREFRONT_TOKEN (written to spec, untested). products.js has price:null, shopifyVariantId:null.
- Signature: pinned exploded sequence (blender/explode.py -> public/seq/f000-f060.webp, scripts/explode.js).
- Copy flagged to Tejjo: "Water, considered." and "Begin with better water." are from the ChatGPT board (unconfirmed); "Inside the bottle" placement of The Core is as modelled (unconfirmed); engraved Æ cap is my design.
- Demo deploy authorised by Tejjo ("send me the Vercel link"): own noindex project.
- 2026-11-03 Tejjo feedback: Geist + spec-sheet copy rejected ("what the fuck is this font", "what is that copywriting"). Chosen: editorial serif (Sentient + Switzer, Fontshare) and the "spare and certain" voice. Then: "this is very okay, not good. I want insane, like a $1 billion startup": keep researching premium e-com, Monolog micro-interactions, kits 1-32 3D (how products split/move), pick a 3D creative direction and keep building without prompting; back in ~2 h.

## State 2026-11-03 (late, "Still water" pass)
- Fixed: slotted `<script slot="scripts" src>` were never bundled (404): explode.js and ripple.js now plain `<script src>` in index.astro.
- Hero live water: src/scripts/ripple.js (WebGL, pointer/tap rings in perspective, bottle masked, refraction never samples the bottle). Tuned soft; verified desktop + 390 phone headless.
- fx.js: cursor ("View" on shop cards), magnetic buttons, bag count roll, fly-to-bag, card->PDP View Transition (named 'bottle'; Safari untested). PDP sticky buy bar.
- Tejjo 2026-11-03 on return: square orange CTA, boxed qty, run-on description, bordered spec lists = "template". Redone: pill bone buttons everywhere (no orange block, no boxed arrow), hairline pill qty, serif title + italic lede, accordions Details/Specifications/The Core, home spec wall = 6 cells with serif values. Sent screenshots qa/v2-*.jpg.
- Renders V='b' (old -a files moved to vael-site/_old-img). macro frames now 3:2 (were cropped 4:5 -> soft). Cart got a lineup band.
- In progress: explode 61 frames (blender/explode.sh, chunks of 8), then after2.sh: explode_track.py -> public/seq/track.json (per-frame part edge positions for desktop callouts in explode.js) and shots core-phone (portrait for /the-core/ phone hero, needs wiring with a <source>). Then tools/seq.sh converts frames.
- Skipped on purpose: 360 turntable (a round bottle barely changes when spun), preloader.
- DEMO LIVE 2026-11-03: https://vael-demo-topaz.vercel.app (own Vercel project vael-demo, noindex). NOTE: vael-demo.vercel.app is SOMEONE ELSE's site; deploy_demo.sh's 200 check passed on it falsely. Always use the -topaz alias and check <title>.
- Done in this pass: explode 61 frames + Blender-tracked callouts (desktop), phone frame fit; core-phone portrait; ink token now #000000 (page black, renders black-pointed to match, V='c'); easings unified; gates: system_check PASS, phone_audit clean, premium_gate 2 known false FAILs (gate reads <img> srcset not <source>).

## State 2026-11-03 (night, live 3D proof v2) READ THIS FIRST
- Tejjo rejected the render-based site look and the v1 live 3D ("disgusting": a flat tube with no surface design). Chose route 1: build real-time 3D ourselves (Blender + baked maps + Three.js), no hiring.
- Client reference sheet saved: vael-site/assets/client/vael-one-reference-sheet.webp (front/back, sandy powder coat, spaced "V Æ L" low on front, brushed cap with spun top + engraved Æ, dark seal ring, threaded steel mouth, perforated Core with 2 rims + O-ring, engraved bottom "750 ML | 316L STAINLESS STEEL / VACUUM INSULATED", 275 x 74 mm).
- v2 pipeline: blender/v2/{masks.cjs, model_v2.py, materials_v2.py, preview_v2.py, bake_v2.py} (collection V2 in vael.blend), maps -> proof3d/public/tex/v2/*.webp, GLB proof3d/public/model/vael-one-v2.glb (233 KB, Draco).
- Live proof: vael-site/proof3d (vite, http://127.0.0.1:4630, 5 scroll beats hero/cap/core/base/colourways, all 3 colourways). Do not apply AO to the neck steel or Core (baked while enclosed = black).
- Side by side vs ciaoenergy.com: qa/sbs/sbs-ciaoenergy-1512.jpg + scores.md. Object quality gap closed; Ciao wins every scene row (stage, light drama, colour, scale moves). Next = art direction in words for Tejjo to pick.
- Open: proportions (built 275x74; sheet drawing looks fatter), anti-slip base treatment (sheet shows powder bottom, no rubber foot added), 1.7 MB normal map, real phones + Safari untested, no favicon.
- Later 2026-11-03: drag-to-spin 360 with inertia added (touch pan-y keeps vertical scroll); type = Instrument Serif display + Switzer (Tejjo chose option B over Bodoni Moda); Tejjo: "soooooo much better". Method written up as skill disojo-realtime-3d-product (post-mortem inside).
- 2026-11-03: client sent the full brand/product doc (prices INR, Core facts, shipping, returns, warranty, story, voice, hex colours, cap 52 mm, 385 g, ceramic coating, black silicone anti-slip ring). Saved word for word as vael-site/brief/CLIENT-FACTS.md = single source of truth for copy. Plan in brief/SITE-PLAN.md awaiting 3 decisions. Open: magnetic close not in the doc; founder name Ares Sharma also appears as Mentable's founder in our case studies (asked Tejjo).

## State 2026-11-03 (late night): full site built, READ THIS FIRST NOW
- New Astro site vael-site/web (dev http://127.0.0.1:4640, nohup log $TMPDIR/vael4640.log). The older vael-site/site (:4620) and proof3d (:4630) are superseded.
- Plan brief/SITE-PLAN.md ("Stone, then night"; Tejjo: "do whatever you want"). Copy only from brief/CLIENT-FACTS.md (magnetic close yes; silicone base = anti-slip ring; founder Ares Sharma confirmed).
- One persistent WebGL stage (src/scripts/stage.js) across pages via view transitions; sections set data-beat presets; presets take `m: {}` phone overrides.
- Pages: / (film), /vael-one/ (buy panel, details, specs, sticky bar), /the-core/ (night, #buy), /shop/, /story/, /support/ (#shipping #returns #warranty #care #contact), 404 (line "This page is not here." is a DRAFT for Tejjo).
- Stills: node qa/render-stills.cjs (3x) then venv python qa/stills.py -> web/public/img (1500x1875).
- QA: qa/web-beats.cjs <path> <w> <h> <prefix>, qa/web-nav.cjs (transitions + bag). Bug fixed: Astro swap dropped html.seen so the loader blocked all clicks after the first navigation.
- Gate: only FAILs left are big-image share on /shop/ (transparent cutouts read small) and /support/ (reading page, no image by design).
- Not done: perf (6 MB HDRI, 1.3 MB normal map, poster for LCP, render pause), no-WebGL and reduced-motion fallbacks, og.jpg, Shopify wiring, legal pages; real phones + Safari untested. Not deployed.

## 2026-11-03 section fix (shown, not deployed)
- The home "Double-wall vacuum" beat now uses true cut faces: web/src/scripts/section.js builds flat faces from the lathe profiles (outer wall, 1 mm vacuum up the shoulder, inner wall, ceramic coat line in the colourway hex, hollow cap with a threaded bore, seal, Core, O-ring, foot). The backface fills are gone.
- The cut uses two planes with clipIntersection: the front half comes away from the top down as you scroll, with a hairline at the sweep.
- Section beat is a close-up on the shoulder with 4 layer labels (data-sec-anchor, hidden on phones). Wall and gap thicknesses are ILLUSTRATIVE (the client gave no gauges).
- Phone framing was fixed for the section and core beats. qa/sweep.cjs captures the sweep frames; qa/section-svg.mjs draws the profiles.
- The rest of the AUDIT next pass (set/water, poster type, compositions, signatures, per-page interactions) has NOT started.
- RULE (Tejjo 2026-11-03): ONE background colour on every page, beat and colourway, never changes. Locked to the Carbon grey: centre #a3a19d, edge #6c6a66, ink #0f0f0f (stage.js BG, global.css :root, loader). Night beats change only the light on the bottle. The lighter shop/Core card fills are removed.
- Tejjo: "skip the aluminium part": the cap now lifts out of frame in the section beat (cap: 0.32). Their verdict on the site overall: "still the same, raw, nothing premium".

## Launch study (2026-11-03)
- Study of about 26 launch/e-com sites, CRAV and kits 1-28: `vael-site/brief/LAUNCH-STUDY-2026-11-03.md` (sent to Tejjo). Frames in `research/launch/`, kit sheets in `research/kits/`.
- Diagnosis: no anticipation. The whole product is shown at once, standing still, at the same size on every screen.
- Plan:
  - 0 the loader assembles the bottle
  - 1 poster type with a huge tilted bottle
  - 2 the cap closes with a magnetic click
  - 3 24 h / 12 h at poster scale with the section cut
  - 4 the Core in water
  - 5 parts fly through the type
  - 6 three colours
  - 7 buy, with a sticky bar
  - 8 a wordmark footer on a water line
- Open question to Tejjo: does the background rule also forbid full-bleed photo and video panels?
- Next: the three checkpoint stills, shown before any build.
- 2026-11-03 Tejjo: "you can do anything you want, dont be limited to me". Full creative freedom on the VÆL web design. Full-bleed photo and video panels are allowed. The grey page colour stays the default.
- 2026-11-03: checkpoint stills built on the live engine at http://127.0.0.1:4640/draft/.
  - Files: `web/src/pages/draft/index.astro`, plus presets d-hero, d-close and d-numbers in stage.js.
  - Base.astro has a new `behind` slot: poster type sits under the canvas.
  - Sheets are in `qa/stills/stills-desktop-1512.jpg` and `stills-phone-390.jpg`.
  - Phone hero and close still overlap the copy. Awaiting Tejjo's verdict. Backup in `_backup/src-2026-11-03-pre-stills`.
- 2026-11-03: Tejjo said the cap was too shiny. It is now satin (stage.js capM: roughness lifted in the shader, envMapIntensity 0.75) and the coating normalScale went from 0.26 to 0.12. Both apply site-wide. The full-site 'make it better' pass is still to do: the image/set pass, then the home rebuilt in the draft direction.

## 2026-11-04 concept B (/concept/)
- After "tf is this" / "it's not just the 3D": built web/src/pages/concept/index.astro, a standalone design-led home (no live 3D canvas). Inter Tight + Instrument Serif italic + JetBrains Mono, client hexes as section colours, technical drawing motif, Æ loader, client lines only. Renders as cut-out stills in public/img/c/ (core-hi.webp from qa/render-core-hi.cjs).
- Gate 0 FAIL, 2 WARN (no image covers half a screen; no photographs). Sheets qa/concept/sheet-d.jpg, sheet-m.jpg sent. Awaiting Tejjo verdict and which transition they disliked. Not deployed.
