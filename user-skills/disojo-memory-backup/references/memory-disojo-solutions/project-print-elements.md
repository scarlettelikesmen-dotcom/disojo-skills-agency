---
name: project-print-elements
description: "READ FIRST for Print Elements (Vijay Kapoor, Delta BC print shop) - v8 approved 2026-10-29, review link pe-review-chi.vercel.app, where the code is, the look, open owner questions, past builds"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T14:59:15.490Z
---

Merged 2026-11-16 from 5 notes (flagship, Ascender-style, multi-page, rebrand concept, v4). Originals: `memory/_archive/2026-11-16/`.

## Client
- Vijay Kapoor, Print Elements, printelements.ca (Wix today), Instagram @printelements. Delta BC (the old site title says Surrey: confirm).
- Signed 2026-10-14, CAD 19,500, 4,000 received upfront (currency presumed CAD). Tejjo later called it about $25,000. Never quote either.
- 2026-10-28: owner gave full creative freedom for an A to Z rebuild. **Keep the existing round CMYK badge logo, no rebrand.**
- Public figures on Disojo's case page: $850,000 new work, +18% enquiries ([[reference-verified-claims]]).

## Current build: v8, approved by Tejjo 2026-10-29
- Folder `~/Desktop/websites ARCHIVE/print-elements-v4/v8`, served on :4551. Astro. Read CONCEPT.md, NOTES.md, V7-THREE-DIRECTIONS.md in print-elements-v4.
- Client review link: https://pe-review-chi.vercel.app (Vercel project `pe-review`, noindex). Deploy folder `print-elements-v4/deploy/pe-review` (copy of v8/dist); redeploy with `vercel --prod --yes` from there, only on Tejjo's word.
- Built from the v7 "counter" direction: white, the price list with dot leaders, Archivo (Display width 78, Text, Narrow), bracket labels, centred nav, a sentence with inline product pictures, staggered six-product grid, Price it builder (31 products from the real 2021 Wix price table), one quote at a time, giant footer wordmark, live "in Delta, we are open" line.
- Hero: WebGL2 stable-fluids ink sim (four CMYK pours onto the tagline letters). Tejjo loves it.
- Imagery: photoreal Blender Cycles product renders carrying PE's own artwork, labelled on the site. Renders in `print-elements-v4/3d/renders/` (v7-neutral, v7-ink).
- Text buttons: "side up down", each letter rolls to its twin ([[feedback-text-button-roll]]).
- Tejjo's verdicts that still apply: out-of-register effects read as a glitch, never bring them back; the poster wall was "most disgusting"; Geist was "kiddish", Jost "ugly"; Tejjo loves OH Architecture most, then Shortscut and Mammoth, and wants that clean without copying.
- Not checked since 2026-10-29: whether the new site is live on printelements.ca. Ask before saying so.

## Open (ask Vijay through Tejjo, never assume)
- Prices current? Primary phone (604 vs 778 on the logo)? Vehicle wraps and window graphics offered? Real hours (the AI hero image from earlier builds showed different hours)? Founding year (use "20+ years", never "Since 2005")?
- Testimonial permission (Randy Mann, Sanjay Gupta, Jasmine S of Jus Sage; Jasmine's "photo" is a company logo).
- Real order backend; real photos of finished jobs; legal copy review; 301 redirects from the old Wix URLs (list in `print-elements-flagship/01-discovery/redirects.txt`).
- Payment schedule and the GitHub account for a remote.

## Past builds (history, not current)
- `print-elements-flagship` (2026-10-14 to 10-18): Vite + Three.js, Blender storefront scroll, my "pe" rebrand, then reversed. Preview print-elements-preview.vercel.app. Blender scripts and renders still in its `3d/`.
- `print-elements-ascender-style` (2026-10-22): one page, called slop. pe-857fd6.vercel.app.
- `print-elements-multipage` (2026-10-22): OH-style React site, 64 routes, pe-d4edb3.vercel.app. Tejjo sensitive to anything that reads as copied from OH.
- Rebrand concept (2026-10-23, `branding/print-elements/`): A1, A4, B3, B4 liked; parked because the owner keeps the badge logo.
- v4 to v7 (2026-10-28 to 10-29): v4 :4511, v5 :4521, v6 :4531, v7 press :4541 and counter :4543.
