---
name: project-csk
description: "READ FIRST for CSK Law (Cohen Stine Kapoor LLP, csklawny.com) - the approved build is csk-law-demo.vercel.app (Brygada 1918), source and deploy recipe, the v2 attempt stopped, the lesson from it"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T14:59:42.671Z
---

Merged 2026-11-16 from 2 notes (first concept, v2). Originals: `memory/_archive/2026-11-16/`.

## The firm
- Cohen Stine Kapoor LLP, matrimonial and family law, 11 Times Square, New York. csklawny.com still serves their old WordPress site (checked 2026-11-15), while Disojo's case page says "Status: Live": flagged to Tejjo, open.
- Public figures on Disojo's case page: 60% growth in organic conversions and new enquiries, $3M billables ([[reference-verified-claims]]).

## The build Tejjo is happy with
- https://csk-law-demo.vercel.app (noindex). Tejjo 2026-11-12: "pretty satisfied with the current CSK Law website. Let's forget it."
- Source `~/Desktop/websites ARCHIVE/csk-lawny/v2` (Astro, :4562, launch config "csk-law-demo"). Deploy: build v2, rsync v2/dist into `csk-lawny/deploy/csk-law-demo` (keep .vercel and vercel.json), `npx vercel@latest deploy --prod` there, only on Tejjo's word.
- Font: Brygada 1918 everywhere (Tejjo picked it from a 28-font specimen, 2026-11-11, "every single thing"). Ivory and the firm's navy. Full-bleed team photo carries their own headline. Every word is theirs, crawled (`csk-lawny/research/`).
- The team photo may be AI-made (the firm publishes it): say so if it comes up.

## Stopped
- `~/Desktop/websites ARCHIVE/csk-v2-site` (:4568) and `csk-fresh-site` (rounds A to F, :4566/:4567): rejected or stopped 2026-11-11/12. Do not resume unless Tejjo asks.

## The lesson (2026-11-11 dissection with Tejjo)
The four sites Tejjo calls good (printelements-demo, csk-law-demo, lilt-demo, mentable.space) share one huge full-bleed visual, one confident line in the client's own words, an ordinary structure, and care on the details. The rules written 9 to 11 Nov (idea gate, option counts, taste gates) pushed clever concepts and text-first pages instead. Input for the 2026-11-16 setup cleanup ([[project-disojo-business]]).
