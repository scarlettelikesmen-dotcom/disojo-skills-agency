---
name: disojo-site-flow
description: Plans the site before it is built for Disojo's premium offer. Produces the site map, a scroll storyboard (each section's purpose, visitor question, visual, copy, motion beat, mobile behaviour), the enquiry flow, and a load plan with a hard rule that the first screen shows real content fast. Use at phase 6 of the brand + site playbook after identity and the 3D test scene are approved, when Tejjomay asks to "plan the site flow", "storyboard the scroll", "map the pages", or before choosing sections for any premium site.
---

# Disojo site flow

A premium site is a **sequence with a point**, not stacked sections. Plan it on paper first, get Gate 4, then build. Save as `plan/site-flow.md` in the project. Inputs: the art direction brief, `brand/tokens.json`, the approved 3D test scene.

## 1. Site map
List every page with its one job. Default for a premium brand site: Home, Work or Story (one page per piece if real), Process, About (founder-led), Contact (enquiry). Add pages only for a reason. Each page: purpose, primary action, who lands there.

## 2. Scroll storyboard (home)
One row per section. All columns filled before building:
| # | Section | Visitor's question | Visual (real, built or sourced) | Copy (real) | Motion beat | Phone behaviour |
Pattern seen across the reference sites (not a rule): a clear first screen, a proof strip, the work or story, how it works, who is behind it, a qualified enquiry. Each section uses a different layout family; no run of equal cards. The concept's story beats (from the brief) map to sections in order.

## 3. First-screen rule (non-negotiable, from the reference defects)
- The first screen shows **real content within about one second**: headline, one line, one action, one picture. No blank hero while an animation waits.
- A preloader or intro is capped (about 3 s), tied to real asset progress, has a **skip**, and never locks scrolling past the cap. Never leave the body `overflow: hidden` on a timer. (Squiggle stayed locked 35 s; OH's phone preloader ran about 10 s.)
- Text is never gated behind a font or transition delay beyond the cap. Reduced-motion users get everything visible.

## 4. Enquiry flow
Premium clients self-qualify. Model: OH Architecture's stepped form (progress "01/08", asks type, location, timeline, budget band, brief, source; states the response time and what the wait and minimum fee are). For Disojo: draft the steps, the budget bands and the stated response time **and ask Tejjomay for the real values** (price, wait, minimums are unresolved). One CTA label everywhere. Forms: labels above, inline errors, honeypot, success only when the endpoint confirms, mailto fallback.

## 5. Navigation
Small and consistent: wordmark, Menu/Close toggle, one Contact action. The nav must not overlap content on a phone (SLIK's logo did): reserve space or switch contrast with the section.

## 6. Mobile plan
For each section: the same story in a simpler layout. Heavy 3D gets the simplified scene or a static poster below 1024 px (Ciao branches at that width). Tap targets and no hover-only meaning. Test widths: 343/360/390/430.

## 7. Load plan
Budgets (from `disojo-site-archetypes`): home first load <= 6-8 MB, image <= 250 KB (hero <= 400 KB), video clip <= 3 MB, model <= 600 KB, HDR <= 1.5 MB. Third-party scripts after interaction or idle; no popups at t=0; cookie and prompt UI never covers the hero.

## 8. Handoff
Gate 4: storyboard approved. Then build (`disojo-site-starter` for plumbing, `disojo-motion-recipes`), then `disojo-premium-qa`.
