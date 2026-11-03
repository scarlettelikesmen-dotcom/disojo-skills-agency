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
