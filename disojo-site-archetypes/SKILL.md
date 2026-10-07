---
name: disojo-site-archetypes
description: Pick the right website archetype for a new Disojo client from nine audited reference sites (real-3D product, scrub-video product, illustrated carousel, sticker-collage food brand, cinematic property gallery, dark B2B video site, WooCommerce upgrade pitch, utility/SEO tool, flagship portfolio microsite). Gives the decision tree, stack, asset needs, weight budget and risks for each. Use at the start of any client project, right after intake, before choosing a hero or quoting scope.
---

# Disojo site archetypes

Audited 2026-10-07 from nine live sites (desktop 1440x900 headless Chrome, JS bundles scanned for library signatures, text and
screenshots reviewed; Everest also viewed in a real-GPU browser). Weights are what that run measured, not benchmarks. Raw data and per-site
notes: `references/research-notes.md`. We take techniques and structure only: never copy their code, copy, or images.

## The one thing they all share
Every audited site loads **GSAP + ScrollTrigger + Lenis** (bundle scan, 9/9 sites). That is the market-standard motion stack.
Our Postcards build uses CSS + rAF + Lenis instead (lighter, fewer moving parts). Either is fine: choose GSAP when the page needs many
timelines or SplitText-style reveals; choose our hand-rolled recipes (`disojo-scroll-site-rebuild`, `disojo-motion-recipes`) when it is
one hero plus a few scroll sections.

## Decision tree (ask these in order)
1. **Does the client sell one physical product with a real 3D model (GLB) or budget to make one?** -> A1 Real-3D hero.
2. **Physical product, only photos/video?** -> A2 Scrub-video hero (+ wheel/quiz). This is the Postcards build.
3. **Food / QSR / youth brand with personality, lots of photos and mascots?** -> A3 Sticker collage.
4. **Property, hospitality, architecture, interiors?** -> A4 Cinematic gallery.
5. **B2B / industrial / deep tech with render or film assets?** -> A5 Dark video-scroll.
6. **Existing WordPress/Woo store that is slow and cluttered?** -> A6 Upgrade pitch (rebuild lighter, keep their checkout).
7. **Client is a utility (calculator, tuner, converter) whose growth is search?** -> A7 Utility + programmatic SEO.
8. **Disojo's own proof piece, or a brand that wants a "feel it" showpiece?** -> A8 Flagship microsite.
If two fit, prefer the lighter one. If assets are missing, say which archetype the assets support, not which one is prettiest.

## A1 Real-3D hero (palmo.co.in, ciaoenergy.com)
- Stack seen: Palmo = Next.js + three/R3F/drei + Draco + KTX2 + custom shaders + audio (Howler) + GSAP/Lenis, 4 WebGL canvases
  (1 full-screen + 3 small). Ciao = Webflow + GSAP/SplitText + three from a CDN, one fixed full-screen canvas, `.webm` loader video.
- Weight: Palmo 9.5 MB / 63 req (model 3.1 MB, HDR 1.4 MB, images 3.9 MB, JS 0.7 MB). Ciao 5.1 MB / 76 req (model 0.6 MB, HDR 1.4 MB, loader 0.37 MB).
- Needs: clean GLB per product, 1k HDR, per-flavour theme config. Page recolours per product; loader tied to real progress.
- Risks: no model = no real 3D; mobile GPU; headless/software GL cannot test it. Follow `disojo-3d-product-site`.
- Tell: Palmo moves the scene colour cream -> brown per section and splits the object open; Ciao re-themes the whole scene per flavour.

## A2 Scrub-video hero (our Postcards build; Agrumea for the carousel idea)
- Stack: React + Vite + canvas frame sequence + Lenis. Agrumea (Nuxt + GSAP + Lenis; bundle also contains three.js and matter-js) is
  only 1.3 MB / 59 req and its homepage is not natively scrollable (document height = one screen; the wheel drives everything).
  Ours scrolls natively: better for SEO, accessibility and anchor links. Keep it native.
- Needs: turntable footage or 100-160 frames, studio stills per SKU, cut-outs. See `disojo-scroll-site-rebuild`.
- Weight to beat: Agrumea 1.3 MB. Ours: frames 3.4 MB + images. Budget the whole home page <= 8 MB.

## A3 Sticker collage (cravburgers.shop)
- Stack: Next.js + GSAP + ScrollTrigger + SplitText + Lenis. No canvas. 5.9 MB / 63 req, but two PNGs are 2.6 MB and 1.7 MB (should be WebP < 250 KB).
- Look: cream `#F5E3CD`, red `#F91814`, yellow; one ultra-condensed display face at ~430 px (Mouse Memoirs); outlined "sticker" cut-outs
  (white stroke), mascots, floating ingredients around headlines, SVG wave/scallop section dividers, dashed route line with a plane,
  huge cropped wordmark footer, small cookie card.
- Needs: cut-out ingredient/mascot PNGs with a white outline, 4-6 lifestyle photos, a bold display font.
- Risk: legibility and weight. Compress every sticker; respect reduced motion; keep the CTA obvious.
- Fit: restaurants, snacks, drinks, D2C food. Recipes: floating stickers parallax, wave dividers, giant type (`disojo-motion-recipes`).

## A4 Cinematic gallery (eraresidence.mk)
- Stack: Next.js + GSAP/ScrollTrigger/Lenis, no canvas, no video. Dark `#0A0A0A`, serif-italic taglines, stat counters (97%, 7),
  horizontal gallery strips, floor-plan toggles, one cream section as a pause, trilingual navigation, booking CTA.
- **44.8 MB / 49 req: images of 2.9-3.4 MB each, unoptimised.** This is the cautionary tale and a sales point: we ship the same look at a
  fraction of the weight (AVIF/WebP, responsive sizes, lazy). Budget: hero <= 400 KB, gallery images <= 250 KB, whole page <= 6 MB.
- Needs: renders/photography at 2400px+ originals, floor plans (vector if possible), copy in each language, a booking form target.
- Fit: real estate, hotels, architecture, interior studios, restaurants.

## A5 Dark video-scroll B2B (on.energy)
- Stack: Nuxt + Storyblok CMS + GSAP/ScrollTrigger/Lenis + a WebGL canvas, two autoplay muted looping videos (hero 7.4 MB, trail 8.7 MB).
  20.7 MB / 414 req, ten marketing/analytics scripts (HubSpot, Clarity, LinkedIn, GTM, Ahrefs).
- Look: black `#000`, yellow accent, grotesque (Univers Next), mega-nav with dropdowns, large product renders, text that fades on scroll,
  a yellow footer card with the huge logo, testimonials on a pale band.
- Needs: render or film of the product, credible proof (certifications, projects), a lead form.
- Risk: 16 MB of video. Encode to <= 3 MB per clip (H.264/AV1, 1080p, 24 fps, no audio), add a poster, lazy-start off-screen, load analytics after consent/idle.

## A6 WooCommerce upgrade pitch (ethicallifeworld.com)
- WordPress + WooCommerce + GSAP/ScrollTrigger/Lenis/Barba. 497 requests, 434 images, 20.9 MB. A 10%-off email popup covers the page on first load.
- Palette: acid lime + white, Sora + Inter, rounded pills. Product photography is strong; the page weight and the instant popup are not.
- Pitch angle (verify with a real Lighthouse run before promising numbers): lighter pages, popup only after engagement, keep their Woo/Shopify
  checkout. Never promise a conversion lift you have not measured.

## A7 Utility + programmatic SEO (stringtune.com)
- Static Hugo, vanilla JS (Web Audio + 2D canvas), AdSense + GA. 0.54 MB. System font, dark UI. The tool is the hero; below it sit how-to steps,
  reference tables, one page per instrument ("Violin tuner", "Bass tuner"...), 15+ language links, install-as-app prompt.
- Lesson: for a tool, ship the tool above the fold, then long-tail pages generated from a data file. Fit: calculators, converters, trackers.

## A8 Flagship microsite (everest.suraj.work)
- One 120 KB script (Lenis + audio + shaders), real terrain/imagery tiles, a HUD (altitude, oxygen, temperature, trail km, time), six-act
  score, free-flight and film ("Experience") modes, adaptive quality, text that recolours to stay readable. 119-124 fps in a real browser.
  Headless software GL stalls at 98% loading: test heavy WebGL only in a real-GPU browser.
- It doubles as a lead-gen page: an epilogue with services ("bring a brand that needs to be felt") and a "Start a project" button.
- Lessons for Disojo's own showpiece: one continuous scroll story, a "just watch" mode for people who do not want to scroll, a live data HUD,
  a loader that doubles as the brand moment, and the services pitch at the END, after the wow.

## Weight budgets (recommended, derived from the audited set; not a standard)
| Page | Budget |
|---|---|
| Whole home page, first load | <= 6-8 MB (lightest rich site audited: 1.3 MB; heaviest sane: ~9 MB) |
| Single image | <= 250 KB (hero <= 400 KB) |
| Video clip | <= 3 MB, muted, poster, lazy-started |
| 3D model | <= 600 KB (audited 0.6-3.1 MB), HDR <= 1.5 MB |
| Third-party scripts | load after interaction/idle |
| Popups | never at t=0 |

## Next step after choosing
Hand the choice and the client's assets to `disojo-client-intake` (brand config), then build from `disojo-site-starter`.
