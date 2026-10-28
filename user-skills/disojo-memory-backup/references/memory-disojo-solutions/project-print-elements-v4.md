---
name: project-print-elements-v4
description: "Print Elements v4 (2026-10-28) - owner gave full creative freedom, keep existing logo, ~$25k; live-ink WebGL hero, Blender product renders, real price builder; localhost only"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-28T21:27:49.093Z
---

2026-10-28 Tejjo: green light from the owner (Vijay) to rebuild printelements.ca A to Z, full creative freedom. **Keep the existing round CMYK badge logo, no rebrand** (reasons undisclosed). Tejjo called the value about $25,000 (earlier memory said CAD 19,500 signed; I don't quote either). Tejjo dislikes bland 3D: it has to be photoreal or "insane". Supersedes the multipage/ascender-style builds ([[project-print-elements-multipage]], [[project-print-elements-flagship]]).

**Build:**
- Folder `~/Desktop/websites ARCHIVE/print-elements-v4`. Read CONCEPT.md and NOTES.md there; NOTES.md has run commands, what is real and the owner questions.
- Site in `site/`: Astro 5, 37 static pages. Serve with `npx astro preview --port 4511` after a build.
- Research in `research/` (full crawl of all 41 pages, `products.json` with every option and price) and `research/refs` (6 print references).

**Concept "Four inks":**
- Hero: a custom WebGL2 stable-fluids sim (`site/src/scripts/ink.js`). Four CMYK pours fall onto the tagline letters (the letters are obstacles), with subtractive ink mixing, a wet highlight and cursor stirring.
- Each part of the catalogue gets one process colour: cyan everyday print, magenta wide format, yellow promo, key design and signs.
- Live price builder from the real 2021 Wix price table: 31 products. Pandemic items are left out.

**Imagery:**
- 11 photoreal Blender Cycles product renders (`3d/studio.py`, art from `3d/art.py`), each carrying Print Elements' own artwork. Labelled on the site.
- Products without a render get typographic ink plates.

**QA 2026-10-28:**
- 1280, 1512, 1920 and 390 checked: no overflow, no console errors.
- Lighthouse product page 100/98/100. Home 96/96/100. SEO reads 63 only because the build is noindex.
- Not deployed. No git yet.

**Open:** prices current?, primary phone (604 vs 778 on logo), wraps and window/storefront graphics offered?, testimonial permission, real order backend, real job photos.

**v5 (2026-10-28):** polishing pass in a separate copy, `print-elements-v4/site-v5`, served on :4521. v4 is unchanged on :4511 for comparison. Commit 2b66538.

Added:
- All 31 products rendered (15 new Blender scenes).
- Four-ink buttons, rolling links, a price cursor, and the ink-wipe page transition.
- A full-screen phone menu and a job list (several products in one email).
- An odometer price with per-piece price and a savings tag.
- A zoom lens and a sticky phone price bar.
- Hero drips.

Self-audit report: `AUDIT-v5.md`. 17 issues fixed. Lighthouse 100/100/100 on home, catalogue and a product page.

Lesson: never use "open" as a state class, because `.open` is the open-now indicator.

**2026-10-29:**
- Nav: hides after 24px of scroll down, shows after 12px up (v4 + v5). Font is now Geist (Jost was "ugly"), with sentence case everywhere; all renders redone. Commit 4bb94f3.
- Tejjo loves the hero. Below it, they called the v5 home copy ("31 products you can price right here, 4 inks, 6 days a week") disgusting, the steps sloppy, and the rest not clean like the 8 Monolog sites.
- v6 is in `site-v6`, served on :4531 (v5 stays on :4521). Home below the hero is rebuilt: one paper colour, thin rules instead of boxes, big section titles, a staggered 6-product gallery, a 4-row index whose hover brings the name into CMYK register, flat price builder, 3-line steps, one quote at a time, a full-bleed banner, the visit block, and a giant footer wordmark. Commit 3cc03eb.
- Study data: `research/clean/` (sheets plus measurements; we used 15 text sizes and 56 mono blocks, the refs 8-12 sizes).
- Footer redone as a press sheet: crop marks, closing line, live Delta clock, and a CMYK wordmark that comes into register on scroll (6cda86f).
- Full audit `AUDIT-v6.md` (190e2d1): crawl clean, Lighthouse 100/100/100 on every page type.
- The plan in that audit: A) inner pages to v6, B) five new renders, C) owner answers, D) launch with Wix 301s.
- Inner pages are not restyled to v6 yet; waiting for Tejjo's verdict. Ascender talk comes after Print Elements.
