---
name: project-site-state-2026-10-20
description: Disojo site state after the 2026-10-20 session (home rebuild done, what is on localhost/preview/git, what is still to do). Read this first when Tejjo comes back to the site.
metadata:
  type: project
---

State at end of the 2026-10-20 session. Repo `~/Desktop/disojo-hybrid`, branch `site-rebuild-astro-v2`. **Not deployed to www.disojostudio.com** (only on the noindex preview https://dsj-preview-k7q.vercel.app and in git: commits 4ebe94c home rebuild, 77f9b9c portal chat-delete WIP that was not mine). Deploy only when Tejjo says "deploy".

**Home order now:** hero, explanation (`#what`), "Different projects. The same way of working." (`#how`, zigzag, `HowWorks.astro`), Our work stage (`#work`) + View all, What we do (Directory + "Where it hurts", `WhatWeDo.astro`), merged KDC story + operations (`#flow`, "How operations run at KDC", 4 real screens, 10 hrs, "Read the success story"), founder letter (`#note`, serious/strong wording, "we sit down", Tejjo writes the copy and gives exact edits: wire only what they say), testimonials stage (`Testimonials.astro`, small label heading), FAQ, contact.

**Decisions:** MVPs for startups no longer offered (removed from services, process, contact form, org, meta); sounds dropped completely; scroll is plain Lenis glide in Our work (my snap/hold/brake attempts felt bad: never auto-move the page; only the 150 ms activation debounce remains); Hanken Grotesk is the new type (650/500), Host Grotesk is still on old sections.

**Still to do (Tejjo's list):**
1. **Phone optimisation** of everything (new sections never checked on a real phone; only overflow/console checked at 390).
2. Bring the old-style sections into the new design language with the same method (10 layouts on localhost:4455 in `_archive/work-options`, pick one, wire it): FAQ, contact block, footer, About, Process, case study pages. Hero may also need it.
3. Real copy for "Where it hurts" heading and What we do labels (placeholders).
4. Dead CSS/JS cleanup (old `.fn`, `.fl`, `.kn`, `.hw`, `.tm`, `.br` blocks, `ServicesOptions` and `components/svc/*`).
5. Older open items: Instagram services slides, nav colour on case-study/contact pages, academy price, Telegram token in git history, Resend + DMARC, projects@ mailbox, KDC portal DB row, analytics.

**Also:** Tejjo is moving to a new MacBook Pro 14" M4 / 24 GB / 1 TB (French Canadian QWERTY, bought via their uncle, shipping to India). Keep username `tejjo`, use Migration Assistant, push repos with no remote first (print-elements-flagship, ascender-media, sudha-mahesh-thakkar, lumina-store, TradeMind, DISOJO, skills). Current Mac: M1 Pro 14-core GPU, 16 GB, 512 GB with only ~16 GB free.

**Why:** lets the next session resume without re-deriving the flow. **How to apply:** see [[feedback-how-tejjo-iterates]], [[feedback-match-live-by-measuring]], [[project-what-we-do-options]]; start by asking which of the to-do items Tejjo wants first.
