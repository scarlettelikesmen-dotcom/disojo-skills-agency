---
name: project-redo-pipeline
description: "Plug-and-play redo system (skill disojo-redo-pipeline) built 2026-11-01; first full run Movement First PT Direction A, local only, not deployed"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-01T13:34:39.588Z
---

Skill `~/.claude/skills/disojo-redo-pipeline` (built 2026-11-01 at Tejjo's request): URL or assets in -> intake (crawl word for word, WebP images, inventory) -> THREE direction briefs with rendered previews (Tejjo picks one or several) -> build on the Astro token starter -> gates (system_check, audit with content parity, phone_audit, Lighthouse) -> noindex demo at <client>-demo.vercel.app only after Tejjo says go.
Design rules come from a measured study of bymonolog.com and its 8 work sites (Tejjo's chosen reference set, not our own builds): `references/design-system-rules.md`.

First run: Movement First PT (movementfirstpt.com, Dr. Saransh Kapoor, Deer Park NY; Tejjo's test project). Folder `~/Desktop/websites ARCHIVE/movementfirst-redo`. Tejjo picked Direction A ("One doctor, the whole hour"); built in full 2026-11-01: 27 pages, all gates pass, Lighthouse mobile 100/100/100 (SEO 66 only from demo noindex). Preview: `npx astro preview --port 4620` in site/. NOT deployed; demo would be movementfirst-demo.vercel.app.

**Why:** make every client redo same-day and consistent, with a system that fails drift.
**How to apply:** for any "redo this site" start with the skill; stop at the three-brief checkpoint; never deploy without Tejjo's word. Related: [[project-csk-lawny-concept]], [[feedback-unique-design-per-client]].
