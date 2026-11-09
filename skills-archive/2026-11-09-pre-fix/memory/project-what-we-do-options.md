---
name: project-what-we-do-options
description: Ten layout mock-ups for the home "What we do" section (2026-10-20), where they live, and what is next (pick one, then write the copy)
metadata:
  type: project
---

Tejjo asked (2026-10-20) for 10 distinct ways to show the "What we do" content on localhost first, then to write the real copy together. Built as static pages in `~/Desktop/disojo-hybrid/_archive/work-options/`: `svc-index.html` + `svc1..svc10.html`, shared `svc-data.js`, `svc-base.css`, `svc-chrome.js`. Serve with `python3 -m http.server 4455 --bind 127.0.0.1` from that folder, open http://localhost:4455/svc-index.html. Options: 1 Directory, 2 Folders, 3 Triptych, 4 Chapters, 5 Spotlight, 6 Bento, 7 Switch, 8 Sentence, 9 Symptoms, 10 Blueprint.

Content is the CURRENT site copy for 3 services (Branding and websites, Internal business tools, Digital systems and automation); MVPs for startups left out because Tejjo said it is no longer offered. Copy is placeholder for layout judging only.

**How to apply:** after Tejjo picks a layout (or mix), draft the new copy with them in chat (not straight into the site), then port into the home page replacing `ServicesOptions` in `src/pages/index.astro`. Also still to remove MVPs elsewhere (services page, process, contact form kinds, meta). Deploy only on "deploy". See [[feedback-how-tejjo-iterates]].
