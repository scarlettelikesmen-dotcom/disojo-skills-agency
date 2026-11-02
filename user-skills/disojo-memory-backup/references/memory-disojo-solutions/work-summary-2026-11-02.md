---
name: work-summary-2026-11-02
description: Disojo site session 2026-11-02 - featured Mentable section, 8,750 fix, analyst hand photo, image-direction talk, compaction settings; nothing deployed
metadata:
  type: project
---

**Done on localhost (~/Desktop/disojo-hybrid), NOT deployed (waits for "deploy"):**
- Featured project section `#featured` under the hero (src/pages/index.astro, styles appended to src/styles/global.css): Mentable, "We helped Mentable raise $750,000 in pre-seed funding.", stats $750,000 / 8,750, "Read the success story" button, image /work/mentable/site-home-2611.webp.
- Pre-registrations corrected to **8,750** everywhere (hero work lists, src/data/v4case.mjs result text + new `results`).
- "We build it in stages" figure: /work/mt-analyst-hand-v3.jpg (1122x1192, cropped 15% from bottom per Tejjo, AI-generated hand from ~/Desktop/orderbro.png, watermarked; clean copy in _archive/originals-prewatermark).
- Verified at 1512 desktop and phone with screenshots.

**Pending / open:**
- Deploy when Tejjo says "deploy".
- Nav text vanishes over the dark Mentable image (fix idea: data-nav-bg / data-nav-ink like About). Offered, not answered.
- Positioning open items: see [[project-disojo-positioning-2026-11-02]].
- Image direction (Monolog-style big aesthetic photos): recommended photos of client worlds (KDC room, Postcards bottles, turmeric) graded to one look, licensed stock only as mood, no AI image next to a client result. Offered a grade script + 3-photo localhost test; asked which clients would allow a shoot. Awaiting answer.

**Claude config changed:** ~/.claude/settings.json env CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=30 (300k on a 1M window, variable name unverified against docs); CLAUDE.md "Compact instructions" section (write memory note + work summary before compacting, drop anything unnecessary). Pre-compact hook offered, not added.
