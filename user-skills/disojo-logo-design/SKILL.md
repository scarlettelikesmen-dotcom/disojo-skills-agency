---
name: disojo-logo-design
description: How Disojo designs client logos (wordmark, monogram, mark) that look like a studio made them, not AI. Use whenever Tejjomay asks for a logo, rebrand, monogram or "redo their logo". Covers the concept-first process, principles, banned cliches, small-size tests, the code pipeline (outlined type + custom geometry to SVG) and how to present directions in the in-app browser.
---

# Disojo logo design

## Process (do it in this order; take the time each step needs)
1. **One idea from the client's real craft, not a symbol of "growth".** Write it in one line before drawing ("the A is cut and lifted: an edit cut and an ascent"). The best marks come from the name or the product, not from stock metaphors. Look at what competitors in the niche use and avoid it.
2. **Type first.** Most premium studios (OH Architecture, Pentagram work) lead with a confident wordmark in one well-chosen grotesque, tight tracking, one weight. A custom detail in ONE letter beats an added icon.
3. **Black and white first**, colour last. One accent colour at most, used on the single detail.
4. **Check the shape's meaning in the client's own domain.** A shape can carry a meaning in that industry that fights the brand (Mentable logo-05, 2026-10-27: a downward triangle is the 'price falling' marker in trading UIs, and in green it reads as a mixed signal). Arrows, triangles, ticks, crosses and colours all mean something to traders, doctors, drivers.
5. **If a direction started from an AI image, rebuild it as clean geometry** (straight stems, consistent corner radii, optical spacing) before it is final; an auto-trace leaves soft corners and uneven spacing. Disclose the AI origin.
6. **Test at 24 px, 48 px and billboard size** before showing. If the idea dies at favicon size, simplify.
7. **Show 3 genuinely different directions**, each with: light, dark, on brand colour, small sizes, nav pill + favicon mockup. Say in one line what each one means. Be honest about which is weakest.

## Principles (from research, 2026-10-13)
Simplicity (every element earns its place; simple takes more thought, not less), one clear entry point, originality, versatility, scalability, balance, timelessness. Must work in one colour and tiny. Vector only.

## Banned (instant rejection from Tejjomay)
- Bar charts / ascending bars / signal-strength shapes ("Rise" direction was called "disgusting"), growth arrows, swooshes, globes, lightbulbs, generic play buttons, gradients, glows, 3D bevels, several stacked icons, clip-art, trendy effects.
- Literal metaphors drawn badly (camera tripods, film reels) and anything that reads as a stock icon.
- Random serif accent words, mixed fonts.

## What landed / what to try (Ascender Media, 2026-10-13)
- Tejjomay wants logos that use the client's craft vocabulary creatively, the way the Ascender site used editing UI (timeline, playhead, captions, in/out points, keyframes, cuts), in an OH Architecture level of restraint.
- Directions made so far (in `~/Desktop/websites ARCHIVE/ascender-media/branding/`): cut-and-lifted A (first concept), A Ascenders (blue stretched d ascenders), B Rise (REJECTED), C Period (stacked wordmark + blue full stop), D Playhead A, E In/out brackets [A], F Keyframe diamond as i-dot. Awaiting his pick; none applied to the site.

## Pipeline (works, reuse it)
- Fonts: open-licence only (fontsource packages). Never lift commercial fonts (e.g. PP Neue Montreal from oharchitecture) off a client's site.
- `~/claudeskillsthrureels/.venv` has fonttools + uharfbuzz. Instance the variable font at a weight, shape with HarfBuzz (kerning on), draw glyphs to SVG paths with `SVGPathPen`, add custom geometry (polygons) for the one special letter. Examples: `branding/build_logo.py`, `build_logo2.py`, `build_logo3.py`.
- Measure glyphs with `BoundsPen` (stem width from `I`, cap height from OS/2) so custom strokes match the font's weight. Check for glyphs with tails (Hanken `l` has one) before using their width.
- Present: write an HTML page of all directions, serve with `python3 -m http.server <port> --directory branding`, open it in the Claude browser pane (`preview_start` with the localhost URL). Tejjomay prefers seeing it there. Screenshot it yourself first and fix clipping before telling him.
- Export: SVGs (ink, colour, white) + transparent PNGs rendered with puppeteer (`omitBackground: true`).
