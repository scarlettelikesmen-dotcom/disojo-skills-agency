---
name: disojo-realtime-3d-product
description: The proven handbook for a live, real-time 3D product on a website (Palmo/Ciao level), built by Claude alone with Blender over MCP plus Three.js. Reference sheet -> lathed model with bake-ready UVs -> procedural materials in object space -> baked colour/roughness/normal/AO maps -> Draco GLB + WebP -> MeshPhysicalMaterial lit by an HDRI and a soft raking key -> scroll beats with damped motion -> drag-to-spin 360 -> side by side against the reference. Includes the post-mortem of why VÆL failed three times before it worked (2026-11-03) so the same mistakes are not repeated, and working templates (Blender scripts, web app, QA scripts). Use whenever a client site needs its product in live 3D, when a 3D result looks flat, cheap, plastic or "like a tube", when someone suggests hiring a 3D artist or using renders instead, or before quoting 3D.
---

# Real-time 3D product, the way that worked (VÆL, 2026-11-03)

Tejjomay's verdict when it landed: "this is soooooo much better oh my god wow". Before that: "why the fuck is so disgusting". Same person, same day, same tools. The difference was the method below, not talent or a hired artist. Read `references/postmortem-vael.md` once before starting; it is short and it is the reason this skill exists.

`SK=~/.claude/skills/disojo-realtime-3d-product`. Working example: `~/Desktop/websites ARCHIVE/vael-site/` (`blender/v2/`, `proof3d/`, `qa/`).

## The five things that clicked
1. **A real reference sheet before any modelling.** Front/back/side views, close-ups of every surface (texture, print, cap top, threads, bottom), a cut view, an exploded view, dimensions in mm. Without it we modelled a guess from AI collages and got a tube. If the client has none, make one with them (or ask Tejjomay to generate one) and get it confirmed. Never model from mood images.
2. **Procedural Blender materials do not travel to the web. Bake them.** Detail authored in Cycles nodes (grain, print, brushing, engraving, perforation) exports to glTF as a flat colour. Every surface detail must be baked into textures on a proper UV layout: colour, roughness, tangent normal, AO (plus alpha for cut-outs). That single fact is the gap between "flat tube" and "real product".
3. **Surface design is the product.** Premium reads from micro detail: sandy grain on powder coat, a print sitting a hair proud, brushed cap side, spun cap top, a dark seal ring, polished threads, an engraved bottom. List every surface from the sheet and give each one a material and a detail before touching the web side.
4. **Light that rakes across the surface.** A big soft area light from the side at a low angle is what makes grain, print and brushing visible. Flat front light hides everything you baked. HDRI for reflections (metal must reflect something), one soft key, one thin rim, a soft shadow plus contact darkening under the base.
5. **Judge by eye against the reference, not by passing checks.** Side by side (`side_by_side.cjs` in disojo-site-system) before showing, with every lost row stated. Gates catch defects; they do not prove quality.

## Pipeline (each step has a template in `templates/`)
| # | Step | How | Done when |
|---|---|---|---|
| 0 | Teardown | `node ~/.claude/skills/disojo-site-system/scripts/teardown.cjs <out> <ref-url>`: record what the reference ships (model KB, HDRI, textures, post FX). Ciao: can.glb 163 KB, 6 label AVIFs ~200 KB, one 1.4 MB HDR. The look is maps + light, not polygons. | numbers written down |
| 1 | Reference sheet | saved under `assets/client/`, every surface listed with its finish, dimensions noted. Unclear dimension or finish = ask in one line. | Tejjomay confirmed the sheet |
| 2 | Masks | `templates/blender/masks.cjs` (puppeteer): wordmark, bottom engraving, cap emblem, perforation as high-res PNG masks. Real font loaded with `document.fonts.load`, never a fallback. | masks viewed at 100% |
| 3 | Model | `templates/blender/model_v2.py`: every round part is a lathed profile in mm, spun by `spin()` with u = angle, v = arc length (bake-ready UVs, no unwrap needed), seam and axis welded, sharp edges from angle 38°. Separate objects for parts that move (cap, Core, O-ring, seal). Real metres in Blender (MM = 0.001). | dimensions printed match the sheet |
| 4 | Materials | `templates/blender/materials_v2.py`: procedural, but every mask is projected in object space (angle/height or planar XY), so it bakes cleanly onto any UV layout. Colourways via a global (`COLOURWAY`). | Cycles preview looks like the sheet |
| 5 | Preview | `templates/blender/preview_v2.py` (VIEW = front/close/cap/bottom): HDRI lighting, flat grey to camera, restores the scene after. Compare each view to the sheet close-up. Fix here, not in the browser. | each close-up matches the sheet |
| 6 | Bake | `templates/blender/bake_v2.py`: EMIT via the rewire-to-Emission trick for colour and alpha, ROUGHNESS, NORMAL (tangent), AO. GPU, margin 16 EXTEND, other objects hidden from render. Body colour/normal 2048x4096, the rest 1024-2048. About a minute in all. | maps viewed as a contact sheet |
| 7 | Export | `templates/blender/export_glb.py` (Draco level 7, `export_image_format='NONE'`, tangents on), maps to WebP with `templates/blender/convert_maps.sh`. | GLB under ~300 KB, maps listed with sizes |
| 8 | Web | `templates/web/` (Vite + three r170): MeshPhysicalMaterial per part, assigned by material name, textures `flipY = false`, sRGB only on colour maps, NeutralToneMapping, RectAreaLight soft key + rim, VSM shadow on a ShadowMaterial floor, radial contact disc, HDRI as environment only. | loads with `window.__ready`, no console errors |
| 9 | Motion | scroll beats (camera, look-at, spin, part offsets, env rotation) eased in-beat with holds at both ends, damped `1 - exp(-dt*4.2)`; drag-to-spin with inertia; reduced-motion respected. See `references/web.md`. | screenshots at every beat, drag test passes |
| 10 | Prove | `templates/qa/proof-shots.cjs`, `spin-test.cjs`, `spin-touch.cjs`, then side by side vs the reference at 1512x864 and phone 390. Send the sheet with the honest first line. | Tejjomay sees it at http://127.0.0.1:<port>, never file:// |

Blender is driven over the MCP socket: `python3 templates/blender/bl.py script.py`, globals by prefixing code: `(echo "COLOURWAY='Carbon'"; cat materials_v2.py) | python3 bl.py`. Keep telemetry off; never combine `--factory-startup` with `save_userpref` (memory `project-blender-autonomous-setup`).

## Hard rules (each one is a past failure)
- No live 3D without a confirmed reference sheet. No modelling from AI collages.
- No procedural-only detail: if it is not in a baked map, the browser will not show it.
- Never show a 3D proof with a placeholder font. Type is half the luxury (VÆL: Inter Tight → rejected; Sentient → "not luxury"; Instrument Serif chosen). Use the client's chosen pair from the first screenshot.
- Do not apply baked AO to parts that were enclosed while baking (neck under the cap, Core inside the body): it bakes black. Bake those parts with neighbours hidden, or skip AO on them.
- Texture orientation: glTF UVs need `flipY = false`. A mirrored or upside-down print is a UV/flip bug, fix it at the source (mask u direction), never by mirroring the artwork.
- Normal map strength is tuned in the browser (`normalScale`), not by re-baking: VÆL powder 1.0 was orange peel, 0.26 reads as sand.
- Never say "it needs a pro 3D artist" or fall back to rendered stills/frame sequences for a hero that should be live. Teardown the reference first; the assets are small and reachable.
- Never call it audited or premium because gates pass. Side by side, state every row lost.
- Real phones and Safari are untested until someone checks them: say so every time.

## Budgets (VÆL actuals)
GLB 233 KB Draco. Maps WebP: body normal 1.7 MB (largest, candidate for KTX2 or 1024x2048), colour per colourway ~200-400 KB. HDRI 2k ~6 MB (Poly Haven CC0; one is enough, try 1k for production). Target total first load under 5 MB, 60 fps at 1512 on an M-series Mac.

## Files
- `references/postmortem-vael.md`: why it failed three times, what changed. Read first.
- `references/blender.md`: lathe profiles, `spin()`, masks, material patterns, the bake rewire trick, export settings.
- `references/web.md`: material mapping, light rig numbers, scroll beats, damping, drag-to-spin, type settings, QA.
- `templates/blender/`: bl.py, masks.cjs, model_v2.py, materials_v2.py, preview_v2.py, bake_v2.py, export_glb.py, convert_maps.sh (VÆL paths inside: change OUT/TEX paths per project).
- `templates/web/`: index.html, main.js, package.json (VÆL copy and colourways inside: replace with the client's confirmed words).
- `templates/qa/`: proof-shots.cjs, spin-test.cjs, spin-touch.cjs.

Related skills: `disojo-site-system` (teardown, side by side, gates), `high-ticket-flagship-3d` (Gate 3 = this proof), `disojo-3d-lookdev` (light and post references), `disojo-packaged-product-3d` (label-swap kit for cans/jars).
