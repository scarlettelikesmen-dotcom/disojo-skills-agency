---
name: disojo-client-playbook
description: START HERE for any new Disojo website client. The ordered playbook that chains the other Disojo skills - intake, archetype choice, starter scaffold, assets, build, motion add-ons, verification, launch gate, handover. Use the moment Tejjomay says "new client", "I got a client", "send assets", or asks to build/rebuild a brand site, and follow it step by step instead of improvising.
---

# Disojo client playbook

> **Premium brand + 3D tier (USD 10-15k offer): use `disojo-brand-site-playbook` instead.** Tejjomay's rule (2026-10-14): Postcards Perfumes and Ascender Media, named below as reference builds, are groundwork only. Never use them as a design guide, quality example or proof of quality for that tier, not even slightly. The quality bar there is the nine sites in `disojo-art-direction/references/reference-sites.md`. This playbook still holds for plumbing and the general client flow.

One rule above all: **the first demo comes from real assets, not placeholders passed off as real.** Everything below exists so that when
Tejjomay sends assets, work starts immediately and nothing gets invented.

| Step | Do | Skill / tool |
|---|---|---|
| 0 | If assets are not in yet, send the asset request; ask for the client's current site | `disojo-client-intake/templates/asset-request.md` |
| 1 | Inventory the files, look at the key ones, flag problems | `disojo-client-intake/scripts/inventory_assets.py` |
| 2 | Choose the archetype and hero route; say why in one line | `disojo-site-archetypes` |
| 3 | Scaffold: copy the starter, fill `brand.config.js` + `products.js` (+ `quiz.js`) from the brief | `disojo-site-starter` |
| 4 | Make the assets: hero frames or still, card crops, cut-outs, optimised images | `disojo-scroll-site-rebuild/scripts`, `disojo-launch-checklist/scripts/optimize_images.py` |
| 5 | Add archetype-specific patterns if needed (stickers, dividers, scrubbed film, pinned gallery, counters) | `disojo-motion-recipes` |
| 6 | Build the whole page, then verify: build + `scripts/smoke.cjs` + screenshots at desktop and phone. Show the running demo, not a plan. **Exception: any premium or flagship site** gets a concept agreed in words first (`disojo-art-direction`), because a fast build without one comes out generic (Mentable v1, 2026-10-27) | `disojo-site-starter`, `browser-qa` |
| 7 | Performance + a11y pass with numbers (Lighthouse), fix what it finds | `disojo-launch-checklist` |
| 8 | Launch gate, checkout and form wiring, real-device test, handover | `disojo-launch-checklist` |
| 9 | Push to a remote, deploy a public demo or the client's domain | `disojo-scroll-site-rebuild/scripts/deploy_public.sh` |

## Product 3D? Pick the route first
Packaged goods (cans, jars, bottles, boxes) -> `disojo-packaged-product-3d` (template model + the client's flat label art, kit included, dieline request to send). Food/organic -> same skill's `references/food-and-other-routes.md`. A real GLB supplied -> `disojo-3d-product-site`.

## Working agreements (learned the hard way on Postcards)
- Re-read the client's and Tejjomay's details before generating anything (label wording, camera move, sizes). Wrong outputs cost more than slow ones.
- Do a whole section, verify it, then show it. No stream of small check-ins.
- State plainly what is placeholder, AI-generated, or untested.
- Never invent reviews, stats, offers, products or contact details. Switch the section off instead.
- Measure before and after any "optimisation"; one theory (decoded-frame memory) was wrong and was reverted.
- Keep secrets out of chat and out of git. Put a git remote on the project on day one.
- Mark unknowns `TODO(client)` and list them for the handover; `prelaunch_scan.sh` will refuse to pass until they are gone.

## What this stack cannot do yet (be upfront in proposals)
Real 3D/GLB hero (use `disojo-3d-product-site`), a real checkout for non-Shopify stores, a form backend, a CMS for the client to edit content.
Tested only in headless Chrome and a desktop browser so far: plan a real-phone check before launch.

## Design must be new for every client (hard rule, learned on Mochi & Midori)
The starter is Postcards generalised: use it for plumbing (Lenis, loader store, build + meta scripts, smoke test) and **never ship its look**. Before writing UI, decide and state in one line: palette, type pairing, nav pattern, hero choreography, section set, page transition, footer. Reference build with a deliberately different identity: `~/Desktop/websites ARCHIVE/mochi-midori/site` (circle opens onto the film, full-screen colour chapters with plated cut-outs via rembg, corner nav + full-screen menu, allergen chart instead of FAQ, ticket footer, circle-wipe transition). Do not copy that one either. Measured lessons: a 200 KB Google Fonts CSS (Japanese font) dropped mobile Lighthouse to 57; subset with `&text=` and preload the LCP poster to reach 96. Procedural 3D food looked cheap; prefer real photography.

## Premium non-3D brand/agency site? Use `disojo-premium-site-method`
For its process, gates and plumbing (hands-on reference study, concept agreed in words, hero first, taste gate, then mechanical gates, preview then production). Its `kit/` (Ascender) is plumbing, never the look or the quality bar.
