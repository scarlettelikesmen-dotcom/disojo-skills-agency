---
name: disojo-brand-site-playbook
description: START HERE for Disojo's high-ticket offer, a full brand identity plus a bespoke scroll-driven website with included 3D assets (working range USD 10-15k, stated by Tejjomay 2026-10-14). The ordered phases, approval gates, which skill runs each phase, the stack decision (custom code default, Webflow only as a hybrid shell), scope limits for the 3D, and the quality bar (the nine reference sites, never Postcards or Ascender). Use when Tejjomay says "branding project", "the premium offer", "identity and site", "3D site", or starts or scopes any client at this tier.
---

# Disojo brand + site playbook (premium offer)

> The long-form guidebook for this offer is `high-ticket-flagship-3d` (full process map, skills map, the nine references, the no-copy law, the exceed standard, deliverables, commercials, 3D pipeline, templates). This file is the short operational checklist.

## The offer
Identity (strategy, name if needed, logo, colour, type, voice, guidelines) + a bespoke scroll-driven site + **3D assets included** (decided 2026-10-14). Founder-led. Owner-run businesses. Working range **USD 10-15k**; not public. Timeline: **unresolved, ask Tejjomay**. Market (Bombay vs tier-1 abroad): **unresolved, ask**.
Pricing rule (from `~/Desktop/DISOJO SOLUTIONS/AGENTS.md`, an older document, confirm it still applies): scope adjusts, rates do not. Never quote a price or currency to a client without Tejjomay's say.

## The quality bar (hard rule from Tejjomay)
Bar = oharchitecture.com.au, mammothmurals.com, supersolid.agency, slik.com.au, hiss.sydney, backhouse.com, squiggle.sydney, ciaoenergy.com, palmo.co.in. Measured notes: `disojo-art-direction/references/reference-sites.md`.
**Never use Postcards Perfumes or Ascender Media as a design guide, example or proof of quality for this offer**, not even slightly. They are groundwork only. Other skills (`disojo-premium-site-method`, `disojo-client-playbook`) still name them as reference builds: ignore that for this tier.

## Phases and gates
| # | Phase | Output (in the project folder) | Skill |
|---|---|---|---|
| 0 | Qualify + scope | Scope sheet: deliverables, 3D scope (see below), what the client supplies, revisions | this file |
| 1 | Discovery | Assets inventoried, brand context file, "where does the work leak" notes | `disojo-client-intake`, `brand-context`, `brand-discovery`, `brand-strategy` |
| 2 | Positioning | Competitor read, audience, one-sentence position, name if needed | `brand-positioning`, `competitor-branding`, `target-audience`, `brand-naming` |
| 3 | **Art direction brief** | One-page brief: concept, hero object, story beats, palette, type, signature move, voice | `disojo-art-direction` |
| **Gate 1** | Tejjomay + client approve the brief before any design | | |
| 4 | Identity | Logo, palette, type, voice, brand board, `brand/tokens.json` | `disojo-brand-system`, `brand-identity`, `brand-voice`, `disojo-logo-design`, `brandkit` |
| **Gate 2** | Identity approved | | |
| 5 | 3D look-dev | One test scene, side by side with a reference frame | `disojo-3d-lookdev` |
| **Gate 3** | Test scene approved (kills "flat and bland" early) | | |
| 6 | Site flow | Site map, scroll storyboard, enquiry flow, mobile + load plan | `disojo-site-flow` |
| **Gate 4** | Storyboard approved | | |
| 7 | Build | Running site; starter used for plumbing only, never its look | `disojo-site-starter`, `disojo-motion-recipes`, `disojo-3d-product-site`, `disojo-packaged-product-3d` |
| 8 | QA | Report with numbers and screenshots | `disojo-premium-qa` |
| 9 | Launch + handover | Guidelines doc, launch checklist, rollback, credit line | `disojo-launch-checklist`, `brand-guidelines` |
Two revision rounds per stage (AGENTS.md). Anything new is a change order.

## Stack decision (evidence, 2026-10-14)
- **Default: custom code** (Astro or Next + Three.js + GSAP + Lenis). Palmo is Next.js, no Webflow. Ciao is a Webflow page whose 3D is a 39.7 KB hand-written Three.js module. So Webflow never made the 3D good; lighting, materials and art direction did.
- **Webflow only as a hybrid shell** when the client must edit content themselves. Build the 3D as one portable Three.js module that runs in either.
- Webflow cannot make or render 3D natively; a GLB and Three.js (or a Spline embed) is always needed. Spline embeds ship heavier runtimes (sources suggest 3-5 MB is acceptable; unmeasured by us).
- Framer has no native 3D either.

## 3D scope (define before quoting; scope creep lives here)
State in the scope sheet: number of hero objects, variants (e.g. flavours), scenes/chapters, camera moves, who supplies the model or print files, mobile treatment. Routes: `disojo-packaged-product-3d` (cans, jars, bottles, boxes), real GLB supplied (`disojo-3d-product-site`), code-built 3D for abstract/brand-mark objects (see `disojo-3d-lookdev`), hired 3D artist for hero objects we cannot build. **No model, no print files and no artist budget = do not promise real 3D.** AI-generated 3D is rough: check every detail and disclose it.

## Working agreements
Never invent facts, reviews, stats or contact details. Disclose AI-generated media (invisible SynthID mark). Take the system from a reference, never its code, copy, images or fonts (PP Neue Montreal is commercial; use licensed or open fonts and record the licence). Finish a whole section, verify, then show with screenshots. Test the real window sizes and phones (`disojo-premium-qa`). Deploy to live only when Tejjomay says "deploy". Credit line "Developed by Disojo Solutions" in the footer.

## Open decisions (ask, do not assume)
Market, timeline, public vs private pricing, first client or concept brand, who helps with 3D or illustration (Divyansh was mentioned as team).
