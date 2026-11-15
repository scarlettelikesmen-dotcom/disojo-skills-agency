---
name: project-site-state-2026-11-12-cases
description: Disojo site DEPLOYED 149daa8 (2026-11-12): case studies Print Elements, CSK Law, CTESCOA; Postcards updated; home Our work = KDC, Postcards, Mentable, Ascender, Print Elements, CTESCOA
metadata:
  type: project
---
Deployed 149daa8 from ~/Desktop/disojo-mix (branch mix-2026-11-01, pushed), `npx vercel --prod --yes`, verified live by curl on 2026-11-12.

- New case studies: /work/print-elements, /work/csk-law, /work/ctescoa (projects.json entries + v4case.mjs TAGS/COVER/ORDER/NAME). Case count is now dynamic ("06 of 08").
- Figures are Tejjo's, verified ([[reference-verified-claims]]): PE $850,000 new work, +18% enquiries; CSK 60% growth in organic conversions and new enquiries, $3M billables; CTESCOA +27% conversions, +30% enquiry rate from organic, 2,600 applications.
- No outbound links, no quotes, no team row on the three new cases (TEAM map only covers the old five; ask Tejjo for team names if wanted).
- Postcards: new shots pc3-* from the live postcardsperfumes.in (cover, phones, stage, /work), two scope items and fields for scent pages, story, combos/Rakhi. The stage still uses the old pc2-quiz-c2 shot for the quiz.
- Home Our work: Nature's Blend removed (case page and /work entry kept), Print Elements (id print) and CTESCOA added; counter reads / 06.
- /work lists 8 projects; tags fall back to a TAGS map in work/index.astro for slugs not on the home stage.
- Screens: 2000x1255 desktop, 690x1500 phone, captured from the live demo URLs with scratchpad cases.cjs.
- Later DEPLOYED 89a519f: favicon is the mark (74% size since 46123c3, was 62%) on a round #D8E2EC disc (home background), transparent corners; apple-touch icon is the same on a full square. Old icons in disojo-mix/_archive/favicon-before-2026-11-12.
- 2026-11-15 DEPLOYED 65d8d17: home Featured project is now Print Elements ($850,000, +18%, pe-hero-v2.jpg), replacing Mentable. Mentable still appears elsewhere on home (work list, Parag quote, analyst photo, $750,000 line).

## Case-study redo (started 2026-11-15, NOT committed, NOT deployed)
- Tejjo wants every case to read as authoritative. Plan approved: Print Elements first, then the other seven if the voice is right, deploy on their word.
- Done locally in disojo-mix: Print Elements story rewritten (projects.json), with hero figures beside the headline (`heroFigs`) and per-case section labels (`labels`) in v4case.mjs. Large result numbers with small labels and no hand-drawn box, in case-v4.css `.v4c .res` resets (global.css `.res` was leaking in). The results change applies to all 8 case pages.
- Waiting on: Tejjo's verdict on the voice; build weeks per project, before figures and client quotes (never invent these); /work order CSK, PE, Mentable, CTESCOA, then the rest (not done yet).
- 2026-11-15: Print Elements team row = Postcards team (Tejjo). Before sections added to CSK and CTESCOA from our crawls of their old sites (CSK: 0 forms, 43 of 54 pages without an image, WordPress + Divi; CTESCOA: 123 of 149 pages under 100 words, 170 in sitemap, no contact in header/footer). Tejjo asked to invent before data; refused, sent a client-questions message instead.
- FLAG raised 2026-11-15: csklawny.com and ctescoa.ac.in still serve the old WordPress sites, yet both case pages say "Status: Live". Awaiting Tejjo.
- I started :4700 myself on Tejjo's instruction ("just start the server yourself").
