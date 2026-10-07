---
name: disojo-scroll-site-rebuild
description: Rebuild a small brand's store site as an editorial, scroll-driven React + Vite site - scroll-scrubbed 360° video hero, transparent nav over the hero, scent/product wheel, pinned horizontal testimonials, product quiz with a staged reveal, Lenis smooth scroll - then deploy a public demo. Use when Disojo is pitching or building a "free rebuild" or premium D2C site for an owner-run product brand and wants the proven pipeline from the Postcards Perfumes build instead of starting over. For real GLB/three.js hero models use disojo-3d-product-site instead.
---

# Disojo scroll-site rebuild (the Postcards recipe)

Built and verified end to end on the Postcards Perfumes rebuild (Oct 2026), live demo at postcards-rebuild-demo.vercel.app, codebase
`~/Desktop/websites ARCHIVE/lumina-store` (branch `3d-rebuild`). Everything here is the version that worked; the dead ends are in
`references/gotchas.md` so the next project skips them. No WebGL: a video sliced into JPEG frames, drawn to `<canvas>`, frame
index driven by scroll. Robust on phones and cheap to host.

START WITH `disojo-client-playbook` for a new client. The maintained, config-driven version of the code below is `disojo-site-starter`
(copy from there); this skill keeps the asset scripts, prompts, gotchas and the original Postcards-specific templates for reference.

Pairs with: `anti-slop-design`, `ui-ux-pro-max`, `disojo-guardrails`, `browser-qa`, `verification-loop`.

## What you get
1. **Hero** - 320vh section, sticky 100vh stage, 160-frame 360° bottle, copy overlay row + one CTA, transparent nav that turns solid after the hero.
2. **Collection** - 4:5 studio shots, no badges/clutter, name + price + one line.
3. **Scent wheel** - bottles on a big wheel below the screen, scroll turns it, tint changes per scent, stamp plinth with turning postmark ring.
4. **Pinned reviews** - section locks, vertical scroll slides the quotes sideways, then releases.
5. **Quiz** - 4 questions, fluid exits, dark "blend" beat, colour-wipe grand reveal, add to cart.
6. Editorial FAQ, B2B form, footer with oversized wordmark, ticker. Lenis smooth scroll under all of it.
7. **Page-transition curtain** - two panels close from the sides, route swaps while hidden, destination name holds, panels part.

## Pipeline (in order; do not reorder)
0. **Pitch only if the brand has real products to photograph.** Offer the free rebuild as proof of capability; agree what is real
   vs placeholder up front. Read `references/client-checklist.md` and send the asset request immediately (assets are the long pole).
1. **Audit the existing site** (screenshots at hero/mid/end, desktop + phone). List every product, price, claim, testimonial, policy.
   Do not copy their copy blindly; do not invent anything.
2. **Scaffold**: Vite + React + react-router-dom, `lenis`, `lucide-react`. Copy `templates/` into `src/` (map below), then
   `templates/tokens.example.css` + `templates/design-primitives.css` into `index.css`. Replace brand values.
3. **Hero footage** (`references/prompts.md`): start/end-frame turntable in Gemini Omni 1.1 Flash from a straight-on real bottle.
   Review frame 1, side, back against the real product BEFORE continuing. Then
   `scripts/extract_frames.sh in.mp4 public/hero-frames "W:H:X:Y" 160` (crop also removes the watermark) and set `FRAME_COUNT`.
4. **Product stills**: one generation per SKU (same prompt, change brackets, attach previous as reference). Then per SKU
   `scripts/card_crop.py` -> `public/images/<slug>.jpg` and `scripts/cutout.py` -> `public/bottles/<slug>.webp`. Set `image`, `cutout`,
   and the tint triple (`gradientFrom/To`, `textColor`) in `data/products.js`. Missing cut-out falls back to a drawn SVG placeholder:
   say so out loud, never leave it unflagged.
5. **Build sections top to bottom**, verify each with `scripts/check_site.cjs` (errors, overflow at 1440/390, idle CPU, screenshots) before the next.
6. **Quiz**: edit `data/quiz.js` questions/answers (each answer = one product + a near neighbour). Keep the 4 files
   (`ScentQuiz`, `QuizQuestion`, `QuizBlend`, `QuizResult`) and both CSS files together.
7. **Performance pass** (`references/performance.md`) - loops idle, nothing always-running. Measure old vs new; do not trust theory.
8. **Deploy a public demo** with `scripts/deploy_public.sh <project>`. Preview deploys under a team project return 302 to visitors.
9. **Commit, add a remote, push.** Then run `references/client-checklist.md` "Do not ship until".

## Template map (`templates/` -> `src/`)
| File | Change per brand |
|---|---|
| `components/ScrollVideoHero.jsx/.css` | `FRAME_COUNT`, frame path, which product is "featured", statement copy, hero heights |
| `components/ScentWheel.jsx/.css` | nothing structural; `SLOTS` repeats the product list to fill 8 slots (4 products x2). For N != 4, re-tune `STEP`/section height |
| `components/TestimonialsSection.jsx/.css` | the quotes (real ones only) |
| `components/ScentQuiz.jsx`, `QuizQuestion/Blend/Result.jsx`, `ScentQuiz.css`, `QuizReveal.css`, `data/quiz.js` | questions, ids, ring text in QuizResult, copy |
| `components/Navbar.jsx/.css` | links, wordmark; keep `id="cart-btn"` and the `.scroll-video-hero` overlay check |
| `components/BottleArt.jsx`, `three/scentLook.js` | placeholder bottle colours (per product id) |
| `components/Loader.jsx/.css`, `three/loadStore.js` | brand mark; progress comes from the hero's frame preload |
| `components/Curtain.jsx/.css` | `TITLES` map (route -> name shown while closed), kicker text; mount once inside `<BrowserRouter>` |
| `lib/smoothScroll.js` | wire `startSmoothScroll()` in App; route all page scrolls through its helpers |
| `data/products.example.js` | real products (the file contains Postcards' real Shopify ids: do not reuse) |
| `vercelignore.txt` | copy to `.vercelignore` (keeps `.env*`, raw footage out of uploads) |

## Key numbers that were tuned (start here, then adjust by eye)
- Hero: section 320vh (260vh portrait); bottle at 0.8 of canvas height (0.6 portrait), edge pixels stretched outward to fill the canvas;
  eased 0.18 per frame; canvas DPR capped at 2.
- Wheel: section 420vh; `R = min(h*1.15, w*0.62)`, hub at `cy = h*0.45 + R`; centre bottle 15.5vh wide; scale `0.42 + 0.58*near^2`; ease 0.12.
- Pinned reviews: section height = viewport height + horizontal overflow; stop one gutter in from the edge; reduced-motion = plain swipe row.
- Lenis: `lerp 0.07`, `wheelMultiplier 0.85` (the "heavy" feel). One number to retune.
- Quiz: leave 560 ms; blend 13 flicks easing 150 -> ~480 ms (+850 ms hold); reveal staged 0-2 s off CSS delays.

## Design rules held throughout
Editorial Luxury archetype, Fraunces + Plus Jakarta Sans, one shared gutter `clamp(20px, 3.4vw, 56px)`, one CTA per section, pill + text
links only, no emoji icons, no badge clutter, no dense note lists, anti-slop copy (short, specific, no "unlock/elevate"). One dark
band on the page (reviews) as a pause. Checklist: `anti-slop-design`.

## Verification
- `scripts/check_site.cjs` before every "done": zero console errors, no horizontal overflow, idle ~0%.
- Pixel-diff before/after for any "invisible" optimisation (PIL `ImageChops`).
- State what was not tested (real phone, trackpad feel, real checkout).

## Anti-patterns
- Showing the client AI footage that does not match their real bottle.
- Placeholder content presented as real (reviews, products, offers, "Discovery Set").
- Always-running rAF loops. Remounting a whole card per step (twitch). Performance "fixes" without measuring.
- Making the client wait on small check-ins: finish the whole section, verify, then show.
