---
name: project-ascender-site-iteration-plan
description: "Plan for iterating ascendermedia.in locally using Shortscut mechanics; moves, rules, inputs needed"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-26T07:05:10.555Z
---

Plan saved 2026-10-26 at `~/Desktop/DISOJO SOLUTIONS/projects/ascender-portal/ASCENDER-SITE-ITERATION-PLAN.md`. Site source `~/Desktop/websites ARCHIVE/ascender-media/site`. Nothing built yet; waiting on Tejjo to pick moves.

**Why:** Ascender shows no real video work; Shortscut's strength is the work itself, proof as numbers, per-client sections.
**How to apply:** local `npm run dev` only, preview deploy to a separate Vercel project, never production without a go; keep Lighthouse mobile >= 96; no invented numbers or clips. See [[reference-shortscut-teardown]] and [[project-ascender-os-build]].


**2026-10-28 superseded by full rebuild plan:** `projects/ascender-portal/ASCENDER-REBUILD-PLAN-2026-10-28.md`. Verdict: drop the AI monolith hero, no new AI photo, real reels as hero; concepts A 'Raw in, posted out' (recommended), B 'Burned in', C '9:16 frame'; blocked on footage + permissions + results from Ascender. Awaiting Tejjo's concept pick.

2026-10-28 (later): Tejjo asked for a no-footage route. Built HERO ONLY prototype "The edit, built in code" at `~/Desktop/websites ARCHIVE/ascender-media/rebuild-hero/index.html` (static HTML + Lenis, serve on 4480, QA script `_qa/shots.cjs`). Pinned scroll: raw 16:9 clip -> blades cut dead air -> crop to 9:16 -> grade -> captions burn in (cobalt box walks the headline words) -> export "Ready to post". Labelled "Illustration made in code. Not client footage." Display face Rubik 800 is a stand-in (not tested against the logo). Awaiting Tejjo's verdict; rest of page not built; live site untouched.
2026-10-28 (later still): Tejjo said "just show me something awesome, i dont wanna sit and do it" -> built the FULL no-footage home page in the same file (rebuild-hero/index.html, localhost 4480): edit hero, sticky Plan/Edit/Post, deliverables list, pinned real-chat proof (4 quotes word for word + Beckett/Anna), 3 plans with real prices, start steps with playhead, FAQ, cobalt CTA, footer. Copy only from content.js. QA: _qa/full.cjs at 1512/1280/390. Not deployed, live site untouched. Takeaway: Tejjo wants finished, decided work, not step-by-step check-ins.
2026-10-28 (v6): Tejjo disliked v5 ("reads as AI slop": headline + subtext + two CTAs stack; name tags covering the chat screenshots) and asked to leave it and do a fresh pass from Monolog's 9 sites (bymonolog.com + OH, Mammoth, Shortscut, Supersolid, SLIK, HISS, Backhouse, Squiggle). Built `~/Desktop/websites ARCHIVE/ascender-media/rebuild-v6` (src/index.src.html -> build.py -> index.html, serve :4490, CONCEPT.md, study captures in _study/). Concept "The highlight": real logo-04 vector split into 8 letters; the cobalt box walks the letters, follows the cursor, marks the last word read and the active client. Awaiting verdict. Lessons: never a centred hero stack; nothing laid over screenshots.
