---
name: project-disojo-site
description: "READ FIRST for disojostudio.com - where the code lives, what is live (bd371e8, 2026-11-15), the look, verified figures, case-study redo in progress, open items and reminders"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T14:58:21.319Z
---

Merged 2026-11-16 from 17 older notes (site states 10-20 to 11-12, palette, redo, v4, options, background test, reminders, positioning). Originals: `memory/_archive/2026-11-16/`. Read an original only when a past detail is needed.

## Where it lives
- Working copy: `~/Desktop/disojo-mix`, branch `mix-2026-11-01`, pushed to origin. Tejjo's localhost is :4700 ([[feedback-disojo-site-working-copy]]). `~/Desktop/disojo-hybrid` and `disojo-hybrid-v3` are old; do not edit them.
- Vercel project `leadvix-website`, domain www.disojostudio.com. Deploy with `npx vercel --prod --yes` from disojo-mix, only on Tejjo's "deploy". Verify live by curl after.
- Older rollback notes: `~/Desktop/disojo-hybrid/HANDOFF.md`.

## What is live (checked in git 2026-11-16: HEAD bd371e8, 2026-11-15)
- Home: v4-concept hero line + scribble mark, "What we fix" list, Our work stage (`WorkStage.astro`, `data-world` colours per project, plain prev/next arrows; since 2026-11-18 the device sits on a picture from each project, `public/work/stage-bg/<id>.webp`, `.sg-pic` block at the end of global.css, left column 1.35fr, browser 39vw capped to clear the index, phone 76svh, phone group 2vw right, picture corners 18px; DEPLOYED 2026-11-18 on Tejjo's "deploy", uncommitted), Featured project = Print Elements ($850,000, +18%), testimonials as one screen (Skye, Lopamudra, Akansha, Parag), FAQ, contact option buttons.
- FAQ is public on price: $5,000 start, most $8,000 to $20,000, USD; "Most projects run 8 to 12 weeks end to end."
- /work lists 8 projects. Case pages: KDC, Postcards, Mentable, Ascender, Nature's Blend, Print Elements, CSK Law, CTESCOA. Nature's Blend is off the home stage but keeps its case page.
- Team rows (Tejjo's): kdc Marine, Rehla, Rudra, Reena; natures-blend Divyansh, Aastha, Marine; ascender Rehla, Tehlia, Divyansh, Janice, Reena; postcards and print-elements Rehla, Rudra, Tehlia, Aarush, Janice; mentable Embre, Rudra, Tehlia, Aarush, Shina, Lee, Janice. Always "Led by Tejjo". CSK and CTESCOA have no team row.
- Figures are only those in [[reference-verified-claims]]: Mentable 8,750 pre-registrations and $750,000 pre-seed; Ascender $50,000 deals in 4 months (Skye); Postcards 0.6x to 3.7x; Akansha $20,000 staffing saved; Nature's Blend 78,000+; PE, CSK, CTESCOA figures as listed there.
- Screenshots: desktop 2000x1255, phone 690x1500. Ascender shots are asc5-*. Mentable shots must show the icon-only tab bar (Tejjo rejects the old text tab bar).

## The look
- Palette Graphite (2026-11-02): paper #D8E2EC, raised #E6EDF4, sunk #CCD6E0, line #C1CAD4, label #89929A, secondary #5D646B, ink #091016, dark sections #0D1318. No accent. Client colour worlds unchanged.
- Moving grain overlay (`.grain` in Base.astro, own tile `public/fx/grain.png`, steps(6) every 0.5s, off under reduced motion).
- Type: Bricolage Grotesque (the $ stays Bricolage; Tejjo tried Helvetica Neue and Inter and reverted).
- Logo: the "hoflik" redraw (blob O), live since ee29f78. Exports in `logo-exports/hoflik-2026-11-02/`. `public/brand/wordmark-large.svg` is an OLD logo, never export from it.
- Favicon: the mark at 74% on a round #D8E2EC disc. Corner watermarks: one size, 7 css px tall, bottom-right (watermark_new.py).
- Buttons: up down roll, strong ease-out ([[feedback-button-motion]], [[feedback-text-button-roll]]). CTA "Book a strategy consultation". Every CTA an underlined text link or the site .btn.

## In progress, not deployed
- Case-study redo (started 2026-11-15): Print Elements rewrite, hero figures and larger results are deployed (6557763). The other six cases still have old wording; /work reorder (CSK, PE, Mentable, CTESCOA, then the rest) not done. Waiting on Tejjo's verdict on the voice, build weeks per project, before figures and client quotes. Never invent these; Tejjo once asked to invent before data and I refused.

## Open
- FLAG: csklawny.com and ctescoa.ac.in still serve their old WordPress sites, but both case pages say "Status: Live". Awaiting Tejjo.
- og share image still old.
- Skye and Parag photos flag as AI in detectors: get original camera files, never launder. Portraits soft on retina.
- Mentable home caption "Desk is closed" sits on the wrong screen; Nature's Blend screenshot shows 78,904 inside the image.
- The old booking link cal.com/disojo-solutions/discovery-call returned 404 (2026-11-01). Current public link is cal.com/disojo-studio/discovery-call; not checked whether the site uses it.
- Real phones and Safari untested.
- Older open items, status unknown: Telegram token in git history, Resend + DMARC, projects@ mailbox, analytics.

## Reminders Tejjo asked for (raise at the next site session, build nothing until they say)
1. Service detail inside each "What we fix" answer, plus a short hook brief per service; then redo the /services detail page from scratch (Tejjo hates its visuals, layout and em dashes). Ask what can actually be built per service before writing lists.
2. Location-based sitemap, one page per service, and "copy parallel hq a to z" (unclear: ask which site and what copy means; structure only, never their text or assets).
3. From the Ascender comparison (2026-10-19): copy what makes ascendermedia.in look better (font, background, details). Light brief section and Ascender hover motion were done 2026-10-20; the rest folded into later passes, ask if anything is still wanted.

## Positioning (2026-11-02, draft in content-hub/brands/disojo/positioning.md)
- Decided: diagnosis is free; audience founder-led and owner-run businesses, India and abroad; visual identity stays a headline service; hero reads "Visual identities & digital systems that match your reputation" (order swapped by Tejjo, deployed 2026-11-17, uncommitted). 2026-11-17 positioning: one story, front (identity, website: bring the right enquiries) and back (CRM, systems: keep track, run the work); never promise "more leads" alone, we do not run traffic. Hero paragraph and the statement section under it rewritten on that line and deployed same day (uncommitted); "It costs trust" dropped. Open: one package price or two ways in (offer.md still has Offer A and B). Tejjo wants me to challenge them, not agree.
- Use "where the work leaks", not Monolog's "gap".
- Still open from then: real photos of client businesses, logos and awards, "the two doors" idea.

## Past directions (history only, not live)
- Redo A/B/C (2026-11-01, `~/Desktop/websites ARCHIVE/disojo-redo`): disojo-redo-demo, disojo-redo-b-demo, disojo-redo-c-demo .vercel.app.
- v4 "Two O's" concept (2026-10-28, `~/Desktop/websites ARCHIVE/disojo-v4`): pieces ported to live on 2026-10-28 ([[feedback-port-elements-only]]).
- Mock-ups for Our work, What we do, CTAs, case studies: `~/Desktop/disojo-hybrid/_archive/work-options/` (port 4455).
- CTESCOA was a test redo by Tejjo (not a client build) but is now a case study here.

## 2026-11-23: new logo swapped into the current site (not a new site)
Tejjo: "we are updating the branding on the current site, not making a new site". Fonts stay as on the site (Bricolage); the brand kit PDF says Hanken Grotesk and that is WRONG per Tejjo. Swapped in disojo-mix (DEPLOYED 2026-11-23 on "deploy", uncommitted): `.lg-w` mask (nav, hero, footer) -> `/brand/disojo-wordmark-26.svg`; `.hero-mark` -> `disojo-mark-26.svg`; hero `.emb` inline SVG -> new wordmark; favicons `fav26.*`, `apple-touch-26.png`, `icon26-512.png`; share image `og-26.png` (cut from on-blue 4K). Old files left in public/brand. Still old: client portrait watermarks (`-v2.jpg`, stamped hoflik).
- 2026-11-23 also deployed: footer line "Visual identities & digital systems for founder-led businesses.", Company "Disojo Studio" (footer, privacy, portal; contract and proforma keep "Disojo Solutions" as signed), separator line `.xp-sep` above "The business grew". LinkedIn files with new logo: `logo-exports/linkedin-2026-11-23/` (old banner layout, Tejjo rejected new banner ideas: "hell nah, stick with the old banner").
