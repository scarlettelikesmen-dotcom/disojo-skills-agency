---
name: high-ticket-flagship-3d
description: The master guidebook for Disojo's high-ticket flagship, a complete brand identity plus a bespoke scroll-driven website with 3D assets included, positioned in the USD 10-15k range. Maps the entire engagement from first call to launch and aftercare, says which skill to run at every step, lists the nine reference sites as quality benchmarks only, and enforces the no-copy law (nothing is taken from any reference: no copy, imagery, fonts, code, models, layouts or signature moves; the work must exceed their quality, not resemble it). Use for any flagship, premium brand + 3D, "10-15k project", branding-and-website engagement, or when Tejjomay asks how the whole process works, what the client gets, or what to do next on such a project.
---

# High-ticket flagship (brand + site + 3D)

This is the guidebook. Read this file fully, then the reference files as each phase starts.

**Facts, and what is still open.** Stated by Tejjomay on 2026-10-14: a high-ticket service, branding and website creation, redoing a client's identity and online appearance to an "insane" standard; working range **USD 10-15k**; **3D assets are included**; Postcards Perfumes and Ascender Media are never the design guide. **Still unresolved, ask, never assume:** target market (Bombay owner-run vs tier-1 abroad), timeline, whether pricing is public, the first client or concept brand, who helps with 3D or illustration, payment schedule for this tier, retainer terms in USD.

## What the client buys
One accountable lead (Tejjomay) turns a business into a brand that looks like it was made by a top studio:
1. **Strategy**: where the business leaks, who it is for, a one-sentence position, a name if needed.
2. **Identity**: logo suite, colour, type, voice, guidelines, one source-of-truth token file.
3. **3D assets** (included): a defined set of hero objects, lit and finished, in web-ready form with fallbacks.
4. **A bespoke scroll-driven site** that tells one story, loads fast, works on a phone, and turns visitors into qualified enquiries.
5. **Handover and aftercare**: guidelines, asset pack, licence log, rollback, and Disojo staying on after launch.
Full deliverables list: `references/06-deliverables.md`.

## The quality bar: better than the references, never like them
Benchmarks (quality only, see `references/03-reference-sites.md`): oharchitecture.com.au, mammothmurals.com, supersolid.agency, slik.com.au, hiss.sydney, backhouse.com, squiggle.sydney, plus the two 3D references ciaoenergy.com and palmo.co.in.
- They show the **level** of craft: confident type, one memorable idea per brand, real imagery, tight systems, purposeful motion.
- **We must beat them on the things they miss**: a visible first screen within about a second on desktop and phone, intros capped and skippable, no overlaps, licensed fonts only, reduced-motion and no-WebGL fallbacks, accessibility, measured performance. Their measured defects are the regression list in `disojo-premium-qa`.
- **We must not resemble them.** A client's site should never make a visitor think of one of these sites.
- Never use **Postcards Perfumes** or **Ascender Media** as a design guide, example or proof of quality for this tier, not even slightly.
Scorecard for "better": `references/05-exceed-standard.md`.

## THE NO-COPY LAW (hard rule, applies to every phase)
**Nothing is to be copied from any reference site. They set the quality level. They are not a source.**
- No copy or wording. No images, illustrations, icons, video or 3D files. No fonts or font files (PP Neue Montreal, Obviously, Rand, Queens, Roobert and others are commercial or trial; never lift them). No code, markup, class names or minified bundles pasted or lightly reworded. No models (GLB), HDRIs, textures or loader videos downloaded from their servers. No layout composition that mirrors a specific page. No signature move reproduced (Squiggle's self-drawing line, Palmo's coconut-to-can story, Ciao's can carousel and "ZERO BULLSHIT" burst, SLIK's cycling words and bolt, Mammoth's overlaid "OUR WORK", HISS's word-by-word serif hero, Backhouse's floating labelled boxes, Supersolid's extended wordmark, OH's rolling "OH" preloader).
- Their **hex values, ease curves and timings are recorded for analysis only**. Our palette comes from the client's brand and the art direction. If our palette matches a reference's, change it.
- Allowed: public, general technique (smooth scroll, easing, text-split reveals, pinned sections, HDRI lighting, tone mapping, lazy loading), taken as knowledge and rebuilt from scratch for this client's concept.
- Process guards: study a reference, write the **principle** in `brief/references.md`, close the reference, then design from the brief. Never build with a reference open beside the editor. Never download their files.
- Test before every gate: could someone who knows the reference say "that's the X site" within five seconds? If yes, it fails and gets redesigned.
Full law, per-category rules and the distinctness test: `references/04-no-copy-law.md`.

## The map (one line per phase; detail in `references/01-process-map.md`)
| # | Phase | Gate | Core skills |
|---|---|---|---|
| 0 | Fit and qualify | go / no-go | this skill |
| 1 | Scope and proposal | client signs scope | `references/08-commercials.md` |
| 2 | Kickoff and intake | assets and access in | `disojo-client-intake`, `brand-context` |
| 3 | Discovery | findings approved | `brand-discovery`, `brand-strategy`, `positioning-audit`, `social-proof-mining` |
| 4 | Positioning and name | position approved | `brand-positioning`, `competitor-branding`, `target-audience`, `brand-naming` |
| 5 | Art direction | **Gate 1** brief | `disojo-art-direction` |
| 6 | Identity | **Gate 2** identity | `disojo-brand-system`, `brand-identity`, `brand-voice`, `disojo-logo-design`, `brandkit` |
| 7 | 3D look-dev | **Gate 3** test scene | `disojo-3d-lookdev`, `disojo-packaged-product-3d`, `3d-web-experience` |
| 8 | Site flow and copy | **Gate 4** storyboard | `disojo-site-flow`, `brand-messaging`, `brand-story` |
| 9 | Build | working preview shown in stages | `disojo-site-starter` (plumbing only), `disojo-motion-recipes`, `disojo-3d-product-site` |
| 10 | QA and polish | QA report all PASS | `disojo-premium-qa`, `review-animations`, `browser-qa`, `verification-loop` |
| 11 | Launch and handover | final payment, then IP release | `disojo-launch-checklist`, `brand-guidelines` |
| 12 | Aftercare | 30-day check | retainer decision |
How to use every installed skill, and which to ignore: `references/02-skills-map.md`.

## Stack and 3D decisions (evidence 2026-10-14)
- **Default custom code** (Astro or Next, Three.js, GSAP, Lenis). Palmo is Next.js (no Webflow). Ciao is a Webflow page with a 39.7 KB hand-written Three.js module inside it. So **Webflow never made the 3D good: lighting, materials and art direction did.**
- **Webflow only as a hybrid shell** when the client must edit content themselves. Build the 3D as one portable Three.js module that runs in either. Webflow and Framer cannot make or natively render 3D; a GLB plus Three.js (or a Spline embed, heavier) is always needed.
- 3D routes by object, the 3D scope sheet and look-dev recipe: `references/09-3d-pipeline.md` and `disojo-3d-lookdev`.

## Project folder (create on day one; put a git remote on it the same day)
```
<client>-flagship/
  00-admin/        scope.md, decisions.md, licences.md   (contracts and money stay private, never in a public repo)
  01-discovery/    asset inventory, interview notes, current-site audit
  brand/           context, strategy, positioning, identity, voice, logo/, board.html, tokens.json, guidelines.md
  brief/           art-direction.md, references.md
  3d/              source files, exports (.glb), look-dev screenshots, licence log
  plan/            site-flow.md
  site/            code
  qa/              probe results, screenshots, Lighthouse, report.md
  handover/        README, asset pack, licence log, rollback
```
Templates for each file: `templates/`.

## Non-negotiables (carry through every phase)
Never invent facts, reviews, stats, prices or contact details; ask in one line. Disclose AI-generated media (invisible SynthID mark) to the client. Only licensed or open fonts and assets, each recorded in `00-admin/licences.md`. Finish a whole section, verify it yourself, then show with screenshots; say plainly what is placeholder or untested (real phones and Safari are untested so far). Deploy to live only when Tejjomay says "deploy". Never quote a price or currency without Tejjomay's say. Never type credentials; keep keys in gitignored env files. Footer credit "Developed by Disojo Solutions" linking to https://disojostudio.com. Tone: calm, structured, no subservient phrasing (AGENTS.md).

## Reading order
`references/01-process-map.md` (the whole engagement) then `02` (skills), `03` (the nine references), `04` (no-copy law, read before every design phase), `05` (exceed standard), `06` (deliverables), `07` (templates index), `08` (commercials and risks), `09` (3D pipeline).
