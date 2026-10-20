---
name: project-site-background-test
description: Five background ideas wired into the Disojo site behind a localhost-only selector (2026-10-20); how to remove or promote one
metadata:
  type: project
---

Tejjo asked (2026-10-20) for five whole-site background ideas to test live against the content, instead of the monolog-style grain. Built in `src/scripts/bgfx.js` (imported from `src/layouts/Base.astro`) with CSS at the end of `src/styles/global.css` (`.bgfx`, `.bgdoc`, `.bg-*`, `.bgsel`). Selector panel shows only on localhost or after `?bgtest` (stored in localStorage `dsj-bgtest`); choice stored in `dsj-bg`. With nothing chosen the site is unchanged, so it is safe in a deploy, but the selector code still ships (small) until removed.

Modes: grid (blueprint grid), dots (cursor spotlight), flow (line that draws down the page), daylight (tint follows Bombay time, slider to preview), echo (emblem shapes repeated behind sections). Layers live inside `<main>` because `main` has an opaque background and `z-index:1`.

**How to apply:** once Tejjo picks one, make it the permanent default (apply without the selector), delete the other four and the panel, and remove `bgfx.js`'s dev gate. Backups: `_archive/*.before-bgfx.*`. Iterate on localhost; deploy only on "deploy". Related: [[feedback-how-tejjo-iterates]].
