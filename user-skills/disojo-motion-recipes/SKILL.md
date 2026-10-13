---
name: disojo-motion-recipes
description: Tested, copy-ready motion components for Disojo client sites beyond the core scrub-video hero - words-rise-from-masks headlines, count-up stats, wave/scallop/zigzag section dividers, drifting sticker parallax, scroll-scrubbed product film, pinned horizontal gallery, and a one-card consent banner. Use when the chosen archetype (sticker collage, cinematic gallery, dark B2B video) needs a pattern the starter's home page does not already have, or when a client asks for "that effect from <site>".
---

# Disojo motion recipes

All live in `~/.claude/skills/disojo-site-starter/starter/src/fx/` with a working bench at route `/__fx`
(`npm run dev` then open `/__fx`). Verified 2026-10-07 by `scripts/smoke-fx.cjs`: 10/10 checks (effects measurably move, zero console errors,
no overflow). Stack: React + CSS + rAF, no GSAP dependency (the audited reference sites all use GSAP + ScrollTrigger + Lenis; use GSAP instead only when a
page needs many chained timelines).

Rules for every recipe: start work only when visible (IntersectionObserver), stop loops when idle, animate `transform`/`opacity` only,
respect `prefers-reduced-motion`, never let motion hide content or the primary CTA.

| Component | What it does | Seen on | Use for |
|---|---|---|---|
| `SplitWords` | Headline words rise out of masks on view (`text` with `\n` for lines) | most reference sites (GSAP SplitText) | any big headline |
| `Counter` | Counts up to a real number on view | ERA Residence stats | real stats only; never animate an invented figure |
| `WaveDivider` | `wave` / `scallop` / `zigzag` SVG edge between two section colours | Crav, Palmo footer | colour-block brands (food, drinks, kids) |
| `Floaters` | Cut-out stickers drift at different speeds (parallax), paused off-screen | Crav ingredients, Palmo fruit | ingredient/mascot collage hero or section |
| `VideoScrub` | Pinned section; scroll scrubs a `<video>`; copy overlays | On.energy equipment film | technical/B2B product film, 8-15 s clips |
| `PinnedRow` | Section locks, vertical scroll slides children sideways, then releases | ERA gallery strips, our reviews | galleries, process steps, timelines |
| `ConsentCard` | One small bottom-left card; analytics load only after Accept | Crav cookie card | EU/UK traffic or analytics needs |

## Usage
```jsx
import SplitWords from '../fx/SplitWords';
<SplitWords as="h2" className="ed-title" text={'Smashed fresh.\nEvery order.'} />
<WaveDivider from="#F5E3CD" to="#F91814" variant="scallop" />
<Floaters items={[{ src:'/stickers/lettuce.webp', x:'6%', y:'12%', size:130, speed:0.25, rotate:-10 }]} />   {/* inside position:relative; overflow:clip */}
<VideoScrub src="/film.mp4" height="300vh"><h2 className="ed-title">Built to survive the grid.</h2></VideoScrub>
<PinnedRow title="Inside">{photos.map(p => <img key={p} src={p} alt="..." />)}</PinnedRow>
```

## Asset rules that decide whether it feels good
- **VideoScrub**: encode every frame as a keyframe or it stutters: `ffmpeg -i in.mp4 -an -vf scale=1280:-2,fps=24 -c:v libx264 -g 1 -crf 26 -pix_fmt yuv420p -movflags +faststart out.mp4`.
  Budget <= 3 MB (the audited site shipped two videos of 7-9 MB). The demo clip is a bigger test pattern (0.8 MB); real footage compresses differently,
  so check the size. Always supply a poster for slow connections.
- **Floaters**: WebP/PNG cut-outs under 60 KB each, 3-6 per section. White outline gives the sticker look (add in the cut-out, not CSS).
- **PinnedRow**: images need explicit heights (the CSS sets `min(52vh, 480px)`) so measuring is right before they load; it re-measures on load.
- **WaveDivider**: pass the exact background colours of the section above and below, or a hairline shows.

## Not included (ask before promising)
Real 3D scenes (see `disojo-3d-product-site`), page transitions beyond the curtain, cursor effects (the Postcards cursor glow was removed:
a full-page blend layer costs GPU), audio/score (Palmo and Everest use it; needs a user gesture and a mute control), WebGL shaders.
Not yet checked on a real phone.

## Die-cut sticker pipeline (Print Elements v3, 2026-10-13)
`scripts/die_cut_stickers.py`: rembg background removal + white die-cut outline + small WebP. Copy it into the project, edit `ITEMS` (key: file, long edge px, options `crop`, `box`, `frac`, `skip`) and run with the repo venv (`~/claudeskillsthrureels/.venv/bin/python`, rembg model downloads ~176 MB once). Findings: white products on white studio backgrounds lose their body (white mugs, envelopes, hats, billboards): crop to one object with `box`, or fall back to a plain photo with a white print border. Remove stray islands (`keep_main`). Whole hero collage of 8 stickers ~170 KB. Style them with CSS `drop-shadow`, `container-type: size` and widths in `cqw` so a collage scales as one picture. Draggable stickers: fine pointers only; on touch give a tap-pop and leave scrolling alone. A sticky chapter taller than the screen needs `top: min(0px, 100svh - height)` (set in JS) or its bottom is never seen.
