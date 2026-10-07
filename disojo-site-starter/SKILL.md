---
name: disojo-site-starter
description: Runnable Vite + React starter for a Disojo client site (scroll-scrubbed hero, collection, product wheel, product quiz with staged reveal, pinned reviews, FAQ, business form, shop/about/contact pages, page-transition curtain, Lenis smooth scroll), driven by ONE brand config file. Use right after client intake to scaffold the project, fill src/brand.config.js, drop in the client's assets, and have a working demo the same day. Includes a smoke test and placeholder assets so a fresh copy builds and looks intentional before real assets arrive.
---

# Disojo site starter

The Postcards Perfumes rebuild, generalised. Copy it, fill **one file** (`src/brand.config.js`), add the client's products and images, run
the smoke test, deploy. Verified 2026-10-07: fresh copy builds, and `scripts/smoke.cjs` passes 18/18 checks on the neutral demo brand
(4 routes x 2 widths for overflow, product popup open/close, full quiz to reveal, add to cart, zero console errors).

Pairs with: `disojo-client-intake` (before), `disojo-site-archetypes` (which hero to use), `disojo-scroll-site-rebuild` (asset scripts, prompts,
gotchas), `disojo-launch-checklist` (after).

## Start a client project (about 10 minutes to a running demo)
```bash
cp -R ~/.claude/skills/disojo-site-starter/starter ~/Desktop/<client>-site && cd ~/Desktop/<client>-site
git init && npm install
# 1. fill src/brand.config.js and src/data/products.js (see "What to edit")
# 2. python3 scripts/make_placeholders.py   (only if you want placeholders for missing images)
npm run dev          # localhost:5173
# 3. before showing anything:
npm run build && npx vite preview --port 4301 &
NODE_PATH=<dir with puppeteer-core>/node_modules node scripts/smoke.cjs http://localhost:4301 /tmp/smoke-out
```
Puppeteer setup (one time, survives reboots only if kept outside /tmp): `mkdir -p ~/.disojo-tools && cd ~/.disojo-tools && npm init -y && npm i puppeteer-core`.

## What to edit (in this order)
1. `src/brand.config.js`: name, contact, nav, hero statement, section switches (`enabled`), copy, FAQ, footer, checkout mode, SEO.
   Worked example of a full fill-in: `src/brand.config.postcards.example.js` (reference only; never copy its content).
2. `src/data/products.js`: one object per product (schema in the file's header comment). `facts` = the 2-3 rows shown in popup and quiz result.
3. `src/data/quiz.js`: 4 questions in the client's voice (rules in the file). Delete the section with `brand.quiz.enabled = false` if the
   product does not suit a quiz. Reference: `quiz.postcards.example.js`.
4. Assets in `public/`: `images/<slug>.jpg` (4:5 cards/popup), `bottles/<slug>.webp` (transparent cut-outs, optional), `hero-frames/frame-001..N.jpg`
   (N = `brand.hero.frameCount`; 1 = a single still), `og.jpg` (1200x630), `images/bundle.jpg`, favicon. Scripts that make them live in
   `disojo-scroll-site-rebuild/scripts` (`extract_frames.sh`, `cutout.py`, `card_crop.py`).
5. Colours/fonts: tokens at the top of `src/index.css` (`--cream`, `--ink`, `--font-serif`, `--font-sans`). Change them to the client's palette
   and fonts; the whole site follows.

## Switches (all in brand.config.js)
| Switch | Effect |
|---|---|
| `hero.frameCount: 1` | Single still instead of a scrubbed sequence (client has no video) |
| `bundle.enabled`, `wheel.enabled`, `quiz.enabled`, `business.enabled`, `testimonials.enabled` | Drop a section |
| `testimonials` | Keep `enabled:false` until the client supplies real, permissioned quotes. Never invent them |
| `checkout.mode` | `demo` (default, sells nothing) / `shopify` (cart permalink using `shopifyVariantId`) / `whatsapp` / `mailto` |

## What the starter does for you
- `npm run build` runs `scripts/sync-meta.mjs`: title, description, Open Graph, Twitter card, canonical, theme colour, `robots.txt`,
  `sitemap.xml` all come from `brand.seo`. Set `seo.siteUrl` to the real domain before launch.
- Every page change plays the curtain; page scrolls go through Lenis helpers (`src/lib/smoothScroll.js`): never call `window.scrollTo` directly.
- All animation loops stop when idle or off-screen (idle CPU about 0%); respects `prefers-reduced-motion`.

## Motion kit
`src/fx/*` (SplitWords, Counter, WaveDivider, Floaters, VideoScrub, PinnedRow, ConsentCard) with a bench at `/__fx` and `scripts/smoke-fx.cjs`.
Docs: `disojo-motion-recipes`. Delete `public/fx-demo` and the `/__fx` route before launch (the pre-launch scan flags them).

## Known limits (be honest with the client)
- Forms (newsletter, business, contact) use `mailto:` until a backend is wired. Say so on handover.
- Wheel and quiz are tuned for about 4 products. For 3-8, retune `STEP`/section height in `ProductWheel.jsx`; for 1-2 products drop wheel and quiz.
- Placeholder bottle art is a roll-on bottle. Non-bottle products need real transparent cut-outs, or `wheel.enabled=false`.
- Not tested on a real iPhone. iOS Safari limits memory for image-heavy canvases; verify the hero on a device before launch (see launch checklist).
- Only the home hero is scroll-scrubbed. Inner pages (shop, about, contact) are deliberately plain and fast.

## Files
`src/brand.config.js` the one file | `src/data/*` products and quiz | `src/components/*` sections | `src/pages/*` routes | `src/lib/*` smooth scroll,
checkout, loader store | `scripts/` sync-meta, placeholders, smoke test.
