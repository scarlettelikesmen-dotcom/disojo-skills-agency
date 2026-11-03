---
name: disojo-3d-product-site
description: Build scroll-driven 3D product-hero websites (one hero object, camera and theme change per section, branded preloader, mobile fallback), in the style of palmo.co.in, ciaoenergy.com and agrumeafarm.it. Use when Disojo is scoping or building a 3D marketing site for a product brand. Pairs with 3d-web-experience, review-animations, browser-qa and verification-loop.
---

# Disojo 3D Product Site

> Packaged goods (can/jar/bottle/box) have a faster, tested route: see `disojo-packaged-product-3d` (template + label art, runnable kit). Use this skill when a real GLB is supplied or being modelled.

How to build the "one hero object, scroll tells the story" site. Written from observing three live sites on 2026-10-03. Observations are marked as such; nothing here is a measured benchmark. Read `3d-web-experience` first for R3F, GLB compression and its performance targets; this skill is the page-level recipe on top.

## What the reference sites do (observed)

| Site | Stack seen in loaded JS and network | Technique |
|---|---|---|
| palmo.co.in | Next.js, three.js, React Three Fiber, drei, GSAP ScrollTrigger, Lenis, custom shaders, `.glb` models, `.hdr` lighting | Real 3D model split open on scroll; tab title changes per section; counting-percent preloader; cursor-reactive canvas |
| ciaoenergy.com | Webflow, GSAP + ScrollTrigger + SplitText, `.glb` models, `.hdr`, `.webm` loader, one full-screen canvas | 3D can on a fixed canvas; whole scene re-colours per flavour; video preloader. three.js was not confirmed by name |
| agrumeafarm.it | Nuxt, GSAP, Lenis, ten 2D canvases for jar labels | Jars look 3D but are tilted and blurred 2D art. No 3D models or three.js found |

### Measured asset sizes (fetched 2026-10-03, bytes as served after decoding)

| File | Size |
|---|---|
| palmo `can1.glb` | 159 KB |
| palmo `coconut.glb` | 4.5 MB |
| palmo `empty_warehouse_01_1k.hdr` | 1.6 MB |
| ciao `can.glb` | 159 KB |
| ciao `base.glb` | 607 KB |
| ciao `hdri2.hdr` | 1.4 MB |

Takeaways: a hero can model can be tiny (about 160 KB); the HDR lighting file is often the biggest item, so use a 1k HDR; one site shipped a 4.5 MB organic model. Ciao's loader video (`.webm`, hosted on a separate CDN) could not be measured. Both can models are exactly 159 KB; I did not compare contents, so I cannot say whether they are the same file.

Shared pattern: one hero object per product, scroll drives camera or object, theme colours change per section, branded preloader, restrained palette.

## Decide the depth before quoting the client

1. **Faked depth (agrumea style):** 2D product renders, CSS 3D transforms, GSAP. Cheapest, safest on phones. Use when the client only has flat packshots.
2. **Real 3D (palmo, ciao style):** needs a clean GLB of the product. Ask the client for the model or budget for modelling. Without a model, do not promise real 3D.
3. Default to option 1 unless the client has or pays for a model. Say which one you chose in the proposal.

## Build recipe (real 3D)
**Start with `disojo-realtime-3d-product`** (2026-11-03): the proven pipeline and templates for a live product (bake every Blender detail into maps; procedural nodes do not export). The notes below are older context.


1. **Stack:** Next.js + React Three Fiber + drei + GSAP ScrollTrigger + Lenis. Webflow + GSAP is viable for lighter work.
2. **Assets:** model in Blender, one baked material set, export GLB, compress with gltf-transform (Draco, webp textures), one HDR for lighting. Follow `3d-web-experience` for the pipeline and its size targets. Reference sizes are in the table above; record your own measured sizes in the project README.
3. **Scene:** one fixed full-screen canvas behind the page. Sections are normal DOM on top. Scroll progress (ScrollTrigger) drives object rotation, position and camera. Keep lights few.
4. **Per-product theme:** one config object per product (background, accent, text colour, copy). Scroll or hover swaps the config; animate colour with GSAP, not by remounting the scene.
5. **Preloader:** tie it to real asset progress (drei `useProgress`), show the brand mark and a percent. It must never block longer than loading takes; cap it and reveal the page anyway.
6. **Small details that lift it:** section-aware document title, cursor reaction on the hero, reduced-motion path, text split reveals used sparingly.

## Must-haves before it ships

- **Mobile:** lower DPR, simpler scene or the faked-depth version. Test on a real phone.
- **No-WebGL fallback:** static image of the product with the same copy.
- **`prefers-reduced-motion`:** disable scroll-jacking and big camera moves.
- **Accessibility:** all text in the DOM, not in the canvas. Visible focus, keyboard navigation, real alt text on fallback images.
- **Performance:** lazy-load the model, load below-the-fold scenes on demand, pause rendering when the canvas is off-screen.
- **Honesty:** only real product facts, real claims, real testimonials. No invented stats or reviews.

## Verification (do not claim it works without these)

1. Run `browser-qa` on the deployed preview: console errors, three breakpoints, accessibility audit.
2. Run `review-animations` on the motion code.
3. Run `verification-loop` before handing over.
4. Screenshot desktop and a real phone at hero, mid-scroll and end. Show the client those, not a description.
5. State plainly what was not tested.

## Anti-patterns

- Promising real 3D with no model.
- Heavy scene on mobile with no fallback.
- Preloader that hides a slow page instead of loading it faster.
- Copying a reference site's layout, assets or copy. Use the technique, not the content.
- Scroll-jacking with no way to skip or reduce it.
