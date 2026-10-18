---
name: feedback-match-live-by-measuring
description: "When Tejjo says restore/copy/match the live site, reproduce it exactly and measure the preview against live before claiming it matches"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 60ef3da9-acfc-4f23-89f1-e7c9ce0538c6
  modified: 2026-10-17T16:41:00.710Z
---

On 2026-10-17 the hero emblem ("background brackets") on the Disojo site shifted after the hero tiles row was removed (the hero got shorter, the emblem is centred on it). I first "improved" it by shrinking it, then said the CSS was identical without comparing the pages, and Tejjo got very angry.

**Why:** a visible visual regression, claimed fixed three times without a side-by-side check against www.disojostudio.com.
**How to apply:**
- When told to restore, copy or "make it like live", reproduce live exactly. Do not substitute a cleverer fix; offer alternatives in words only.
- Before saying it matches: measure element rects on live and on local/preview at the same viewport (1920x1090, 1512x864, 1440x790, 1280x720, 390x844, 360x740) and compare numbers, not just the CSS text.
- Removing or resizing a section changes layout of anything centred or sized relative to its container (emblem is `top:50%` of the hero, drift `--p` uses hero height); check those dependants.
- Related: [[feedback-how-tejjo-iterates]], [[disojo-site-state-2026-10-13]].
