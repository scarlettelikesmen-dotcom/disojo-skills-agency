---
name: project-ascender-site
description: "READ FIRST for ascendermedia.in (site and identity) - live multipage build kraq88wyv (2026-11-02), source rebuild-v6, how to deploy, logo picks, Shortscut lessons, open items"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T14:59:34.583Z
---

Merged 2026-11-16 from 4 notes (logo and identity, multipage, site iteration plan, Shortscut teardown). Originals: `memory/_archive/2026-11-16/`. The CRM and portal are a separate build: [[project-ascender-os-build]].

## Client facts (from their live site)
- Short-form video planned, edited and posted for founders, creators and agencies. 20 to 100+ videos a month; turnaround 24h to 5 days.
- Public prices: Starter $1,300, Growth $3,500, Scale $6,000 a month. Promise: "Send the footage. We handle the rest."
- No client video can be shown: the work is white label, under NDA (proof copy says so, Tejjo's request). Proof is six real client chats, quoted word for word. The "Beckett" label is unconfirmed (the screenshot only names Jash).
- Public figure on Disojo's site: $50,000 in deals in 4 months (Skye).

## What is live
- www.ascendermedia.in = Vercel deployment social-growth-agency-kraq88wyv (2026-11-02, on Tejjo's "deploy"). Rollback: social-growth-agency-3lp5vq93w (old single page).
- Source: `~/Desktop/websites ARCHIVE/ascender-media/rebuild-v6` (served :4490). `build.py` splits `src/index.src.html` into /, /process/, /services/, /proof/, /pricing/, /contact/, 404. CONCEPT.md and `_study/` there.
- Concept "The highlight": the logo-04 vector split into letters; a cobalt box walks the letters, follows the cursor, marks the active client.
- Hero: posting calendar "A month on Starter" (26 Reel/Short chips). Open: relabel Reel/Short or keep.
- Buttons: Monolog motion, cubic-bezier(.16,1,.35,1) .6s, label roll and twin arrows. Page change: the disojostudio.com shutter with an Ascender ink panel. Tejjo expects that level of smoothness without asking.
- Tokens: cobalt #2B45F5, paper #F3F3F0, ink #0E0E10, Hanken Grotesk. Nav logo says ASCENDER only, never "Media".
- Deploy recipe: the deploy folder was /tmp/asc-mp-deploy, built by copying rebuild-v6's index.html, 404.html, page folders and assets, plus favicon/img/og/robots and .vercel. /tmp is wiped on restart, so rebuild it. vercel.json: cleanUrls + trailingSlash; canonicals end in a slash; sitemap lists 6 pages.
- Before the next deploy: favicon.png, favicon.ico and img/apple-touch-icon.png were missing; add a .vercelignore for src/, backups, _qa, _study.

## Identity (2026-10-26, `~/Desktop/DISOJO SOLUTIONS/branding/ascender-media/`)
- Banned by Tejjo: ascending bars, growth or rise symbols, play buttons.
- Tejjo loved round-1 picks 01 (condensed caps, first A as a tall 9:16 block with a cobalt notch) and 04 (burned-in caption: white rounded caps on a black pill, D in cobalt). Plan was 04 as the wordmark system and 01's idea redrawn as the mark. Test sheet `picks/sheet.html` (:4462). Open: pill vs text nav, and whether the new mark replaces the hero A.

## Lessons from Tejjo on this site
- v5 "reads as AI slop": centred headline + subtext + two CTAs, and name tags laid over screenshots. Never either.
- Tejjo wants finished, decided work, not step-by-step check-ins (2026-10-28), but see [[feedback-dont-overbuild]] (2026-11-11) for the later balance.
- Shortscut teardown (`projects/ascender-portal/SHORTSCUT-TEARDOWN.md`): Webflow + GSAP + Lenis + Barba, Monolog-built; its strength is real work and proof as numbers. Ascender cannot borrow that without client reels, permissions and real numbers.
- Plans: `projects/ascender-portal/ASCENDER-REBUILD-PLAN-2026-10-28.md`. The no-footage prototype "The edit, built in code" is at `ascender-media/rebuild-hero` (:4480).
