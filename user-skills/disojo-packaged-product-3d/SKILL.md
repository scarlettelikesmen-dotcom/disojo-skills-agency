---
name: disojo-packaged-product-3d
description: How to get clean, convincing 3D product assets for brand sites, and a runnable kit for packaged goods (cans, jars, bottles, boxes) built the way ciaoenergy.com and palmo.co.in do it - one generic template model plus the client's flat label artwork, lit with environment reflections. Includes a React/three.js ProductStage (label swap with spin, scroll-driven rotation, per-flavour theme colour, no-WebGL fallback), GLB export of the templates, a dieline request to send the client, and a decision guide for food and other non-packaged products (photoreal stills + cut-outs, AI video, photogrammetry, AI image-to-3D, hired 3D artist). Use when a client sells a packaged product, when asked "how do we get good 3D assets", before quoting any 3D hero, or when a site needs flavour/variant switching.
---

# Disojo packaged-product 3D

**The one idea:** the sharpest reference sites do not model every product. They ship **one small generic model** and swap **flat label art** onto it,
lit by an HDR environment. Verified on 2026-10-08 by downloading the files (details and sources in `references/research.md`):
ciaoenergy.com and palmo.co.in load the **byte-identical** `can.glb` (about 160 KB, 3,918 vertices, a "label" material with no baked texture);
Ciao's six flavours are six flat AVIF label images (190-250 KB each) swapped at runtime. Realism comes from lighting, materials and label quality, not polygons.

## Decide first (60 seconds)
| The client sells | Route | Skill / section |
|---|---|---|
| Cans, jars, bottles, boxes, tubes with printed labels | **Template + label art (this skill's kit)** | below |
| Food that is not in a pack (bakery, produce, ready meals) | Photoreal stills + cut-outs, AI video turntable, or hired 3D artist | `references/food-and-other-routes.md` |
| A product with a real GLB supplied | Real 3D hero | `disojo-3d-product-site` |
| Jewellery, electronics, furniture | Hired 3D artist or CAD export; do not promise AI | `references/food-and-other-routes.md` |
If the client has no print files and no budget: do not fake 3D. Use photoreal stills (`disojo-scroll-site-rebuild`).

## Packaged goods: the 1-day path (estimate, not yet measured on a client)
1. **Ask for print files, not photos**: send `templates/dieline-request.md` (dieline PDF, dimensions, finishes, colours, closure, variants).
2. **Copy the kit**: `cp -R ~/.claude/skills/disojo-packaged-product-3d/kit ~/Desktop/<client>-product3d && cd` then `npm install` (puppeteer-core in `~/.disojo-tools`).
3. **Pick the shape** (`can | jar | bottle | box`) and set real proportions in `src/product3d/shapes.js` (`SPECS`). `labelSize(shape)` returns the pixel size the flat art must
   be (1000 px per unit; ask the designer for 2x). If the client's pack does not match a template, edit the lathe profile (a list of `[radius, height]` points) or buy a model (see licences).
4. **Drop the artwork in** `public/labels/` (one image per variant; the middle of the image sits on the FRONT of the pack; the left/right edges meet at the back).
5. **Wire the page**: `<ProductStage shape label rotation tilt lift content />` (see `src/App.jsx` for scroll-driven rotation, flavour swap with spin, background colour per flavour). The host drives everything; the stage only renders on demand.
6. **Look-dev** (this is where quality comes from): set `content` (liquid colour), `metal` (cap/lid), exposure and the environment in `src/product3d/stage.js`; for a signature look load an HDR (`RGBELoader`, 1k, about 1.4 MB like Ciao) instead of `RoomEnvironment`.
7. **Verify**: `npm run build`, `npx vite preview`, `node scripts/smoke.cjs <url>`, then real screenshots at desktop and phone width. Compare against the real pack (cap, lid, label scale).
8. **Export GLBs** if the client or another tool needs them: `node scripts/export_glb.cjs <url> assets/templates` (named meshes and materials, label not baked in).

## What the kit gives you (all tested in headless Chrome; real phones untested)
- `shapes.js` can, jar, bottle, box (about 2.8-3.3k vertices, 120-140 KB as GLB, comparable to Ciao's can). Named meshes: Shell, Label, Top / Glass, Content, Lid / Cap, LabelBack / Box.
- `materials.js` PBR: aluminium, printed label with clearcoat, glass (transmission on desktop, plain transparency in low mode), content colour, paper back-face for labels seen through glass.
- `stage.js` renderer on demand, contact shadow, RoomEnvironment reflections, label swap with a 0.9 s spin, reduced-motion respected, fits the camera to height and width.
- `ProductStage.jsx` lazy-loads three.js, falls back to an image without WebGL, low mode on small screens.
- `scripts/` placeholder label generator, GLB exporter, screenshot and smoke tests.

## Known limits (say them to the client)
- Templates are generic. A distinctive pack (embossing, odd shoulder, pump, pouch) needs an edited profile or a bought/modelled mesh.
- Placeholder labels in the kit are a made-up brand and marked as such; never ship them.
- Glass uses transmission (heavier). Phones use the transparent fallback; test on a real phone before promising it.
- Not covered yet: pouches, tubes, tins with embossing, multi-material labels (foil/emboss maps), Draco/KTX2 compression in the build (use `references/blender-and-compression.md`).
- No client has used this yet. Treat the first real build as validation and note what broke.

## Never
Promise real 3D without print files or a model; bake the label into the mesh; ship AI image-to-3D output of a pack without checking every letter of the label against the real label; reuse another brand's can file without checking its licence; copy a reference site's assets or code (use the technique).

## More
`references/research.md` (how the reference sites do it, evidence, sources) | `references/food-and-other-routes.md` (food, non-packaged, quoting) |
`references/sourcing-and-licences.md` (where to get models/HDRIs, what to check) | `references/blender-and-compression.md` (hand-made models, GLB optimisation) | `references/qa-checklist.md`.
