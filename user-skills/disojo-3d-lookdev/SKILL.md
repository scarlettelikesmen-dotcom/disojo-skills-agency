---
name: disojo-3d-lookdev
description: The look-dev step for Disojo's included 3D assets, so 3D reads premium instead of flat or plastic. Gives the lighting, material, post-processing and camera recipe observed on ciaoenergy.com and palmo.co.in, the one-test-scene-before-anything protocol (Gate 3), the 3D scope sheet that stops scope creep, asset routes by object type, budgets, and mobile and fallback rules. Use after the identity is approved and before building the site's 3D section, when a 3D result looks flat, cheap or plastic, when scoping the 3D in a quote, or when comparing a scene to a reference.
---

# Disojo 3D look-dev

Premium 3D is **light, material and camera**, not polygons. The reference can on Ciao is a 0.16 MB model; its look comes from an HDRI environment, filmic tone mapping, bloom and a restrained scene. Do look-dev on ONE test scene and get it approved before building anything around it (Gate 3).

## What the references do (measured 2026-10-14, desktop)
| Item | Ciao (Webflow shell + inline Three.js, 39.7 KB) | Palmo (Next.js) |
|---|---|---|
| Models | `can.glb` 0.16 MB, `base.glb` 0.59 MB | `can1.glb`, `coconut.glb` |
| Lighting | HDRI `hdri2.hdr` 1.36 MB | `empty_warehouse_01_1k.hdr` |
| Tone mapping | ACESFilmic | not captured |
| Post | EffectComposer: UnrealBloomPass(resolution, 0.1, 0.1, 1), SMAA, FXAA | not captured |
| Canvas | one fixed canvas behind the DOM | several (7 seen) |
| Mobile | branches at `innerWidth < 1024` | not checked |
| Background | dark, scene recolours per flavour | flat cream, objects on it |
Takeaway: dark and glossy (Ciao) or flat and warm (Palmo) both work. What both share: one hero object, strong materials, few lights, a story beat per section.

## Recipe (Three.js)
1. **Renderer:** `toneMapping = ACESFilmicToneMapping`, `outputColorSpace = SRGBColorSpace`, cap pixel ratio (start at 2, drop to 1.5 or 1 on weak devices; measure), antialias on or SMAA.
2. **Light with an HDRI:** `RGBELoader`, 1k size, `<= 1.5 MB`, set as `scene.environment` (and background only if the art direction wants it). Add at most one key light for a highlight. Many lights = flat or muddy.
3. **Materials:** metals `metalness` high, `roughness` 0.15 to 0.35; printed or painted parts with `clearcoat`; labels as separate materials (see `disojo-packaged-product-3d`). Avoid default grey `MeshStandardMaterial` on everything.
4. **Bloom:** subtle (strength around 0.1 as Ciao uses; raise only for emissive parts). If it hazes the whole frame, lower it.
5. **Camera and story:** one move per beat, eased with the brand's ease from `brand/tokens.json`. Scroll progress 0 to 1 drives rotation, position and camera; sections are normal DOM on top (text stays in the DOM).
6. **Scene colour from tokens:** background, accent light and fog read `brand/tokens.json`; no new hex in scene code.
7. **Contact shadow or base** so the object sits somewhere. A floating object with no ground looks cut out.

## Test scene protocol (Gate 3)
1. Build a single scene: the hero object, the HDRI, the tokens' colours, one camera move.
2. Screenshot at 1512x864 and 390 wide, and a second at the end of the move.
3. Put it beside a reference frame from the nine sites (same size) and list three honest differences.
4. Fix the biggest difference (usually light, material or contrast), re-shoot, then show Tejjomay. Say plainly what is placeholder or AI-generated.
Heavy WebGL must be tested in a real-GPU browser; headless software GL stalls.

## Asset routes by object
| Object | Route |
|---|---|
| Cans, jars, bottles, boxes | `disojo-packaged-product-3d` kit (template + client label art) |
| Real GLB supplied | `disojo-3d-product-site` |
| Abstract or brand-mark 3D (type, shapes, particles, glass) | Code-built in Three.js. Not yet validated on a Disojo project: treat the first one as a test and note what broke |
| Hero object we cannot build well | Licensed model, scan, or a hired 3D artist (price it into the quote) |
| Food, jewellery, electronics, furniture | See `disojo-packaged-product-3d/references/food-and-other-routes.md`; do not promise AI output |
AI image-to-3D and Spline AI give rough meshes (Spline's docs say single simple objects; output needs review). Check every detail, disclose AI, never ship an unchecked pack or logo.

## 3D scope sheet (put in the quote; this is where scope creeps)
Hero objects: N. Variants: N (flavours, colours). Scenes or chapters: N. Camera moves: N. Who supplies the model or print files. Mobile treatment (simplified scene or static fallback). Revisions: two rounds per stage. Extras are change orders.

## Budgets and must-haves
Model <= 600 KB, HDR <= 1.5 MB, whole home page first load <= 6-8 MB (from `disojo-site-system`). Lazy-load the model, pause rendering off-screen, a visible poster while loading, a no-WebGL fallback image with the same copy, `prefers-reduced-motion` path (Ciao's script has none, so add it), a loader tied to real progress with a cap, and a skip.
