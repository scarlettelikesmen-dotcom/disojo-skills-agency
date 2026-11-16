---
name: project-our-work-rebuild-options
description: "Five localhost mock-ups of a rebuilt \"Our work\" section for the Disojo home page (built 2026-10-19), where they live and how to run them"
metadata:
  node_type: memory
  type: project
  originSessionId: 60ef3da9-acfc-4f23-89f1-e7c9ce0538c6
  modified: 2026-10-19T00:02:08.163Z
---

On 2026-10-19 Tejjo asked for a complete rebuild of the home "Our work" section (five projects: KDC, Postcards, Mentable, Ascender, Nature's Blend) as five distinct premium options on a localhost link, not Vercel. Built as static mock-ups in `~/Desktop/disojo-hybrid/_archive/work-options/` (index.html chooser + opt1..opt5.html, shared data.js/base.css/chrome.js; symlinks to `public/work`, `public/fonts`). `_archive` is excluded from the phone-preview and from git, so nothing deploys.

Run: `cd ~/Desktop/disojo-hybrid/_archive/work-options && python3 -m http.server 4455 --bind 127.0.0.1` then http://localhost:4455/ (port 4400 clashes with an Astro dev server on ::1).

Options: 1 Index (hover list with cursor-following preview), 2 Stack (sticky coloured cards), 3 Reel (pinned horizontal strip), 4 Ledger (metric-led accordion on dark), 5 Stage (sticky phone/browser device that morphs per project). Only already-verified figures from the site are used. Font Manrope (Playfair for Postcards in 2/3/5).

**Why:** Tejjo wants the Our work section replaced, premium, with distinct approaches (more or fewer screenshots, more or less text).
**How to apply:** Wait for Tejjo to pick one (or a mix), then port it into `src/pages/index.astro` + `src/styles/global.css` + `src/scripts/home.js`, self-hosting everything, keeping the Lenis script blocking, and remove the old chapter code (`.ch`, ticks, tile hover) at the same time. Preview first, deploy only on "deploy". See [[feedback-match-live-by-measuring]] and [[feedback-how-tejjo-iterates]].

**Decision 2026-10-19:** Tejjo picked Option 5 (Stage). It is now wired into the real home page: `src/components/WorkStage.astro`, `src/data/stage.js`, `src/scripts/stage.js` (imported by home.js), styles `.sg-*` at the end of `src/styles/global.css`. Chapters carry `data-world` so the page colours/nav follow each project; Ascender's world was changed to #F3F3F0/#121214 (was blue #2A45F0). The old `.ow` + five `.ch` sections and the `.ticks` nav were removed from index.astro (backups: `_archive/*.before-stage.*`); the CSS for them is still in global.css as dead code. Tejjo has a list of tweaks to give.
