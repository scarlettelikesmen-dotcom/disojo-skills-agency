---
name: project-print-elements-v4
description: "Print Elements v4 (2026-10-28) - owner gave full creative freedom, keep existing logo, ~$25k; live-ink WebGL hero, Blender product renders, real price builder; localhost only"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-28T16:30:17.025Z
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
