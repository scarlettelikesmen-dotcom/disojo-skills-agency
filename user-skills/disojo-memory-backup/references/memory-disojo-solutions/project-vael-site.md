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
