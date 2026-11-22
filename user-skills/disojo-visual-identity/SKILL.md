---
name: disojo-visual-identity
description: START HERE for a whole branding job at Disojo - the flagship (the whole digital presence - brand, identity, website, enquiry pipeline, every channel and launch content, $12k to $20k) or Branding on its own ($4,000, no site). Runs the client journey step by step, from qualifying and signing through the questionnaire and founder workshop, strategy, the idea, identity, guidelines book, brand world, website, presence kit, launch content, launch and handover. Says which skill does each step and what the client sees. Use when Tejjo signs, scopes or runs a client for branding, identity, rebrand, or brand plus website. A website-only change goes straight to `websites`.
---

# The branding job (flagship and Branding)

What we sell, in the client's eyes: a business that looks as good as it really is, everywhere it shows up, made in one go and shown at every step.

**The spec is the source:** `~/Desktop/DISOJO SOLUTIONS/content-hub/brands/disojo/flagship-offer.md` (what each price buys, the journey, what is settled and what is open). Prices and terms: `offer.md` beside it. **Never quote a price, discount, timeline or term that is not marked settled there. Ask Tejjo.**

Read before the first step, every job: `taste-library` (identity and websites files), memory `reference-branding-flagship-refs` and `taste-library/studios.md` (what the market sells, taken apart, so we never ship the template floor). At steps 4 to 8, open the images listed for that decision in `identity-design/references/refs.md`.

## The two products
| | Branding, $4,000 | Flagship, $12k to $20k |
|---|---|---|
| Steps | 0 to 6, then 10 | 0 to 10 |
| Start | questionnaire + one call | questionnaire + founder workshop |
| Strategy | short, a page or two | full, one page signed off |
| Book | core, about 20 pages | full, made for the brand |
| Real things | 3 | brand world (5 at $12k, full at $20k: proposed) |
| Site, presence kit, launch content | no | yes |

## The floor and the bar
- **The floor** (what $280 to €5,000 already buys elsewhere): logo, palette, type, a guideline deck, mockups on stock billboards. Never present the floor as the flagship.
- **The bar:** an idea only this client could own, a book whose layout comes from the identity, the whole presence made together, a process the client can see. If a piece could have come out of the Softriver or Andrija template, it is not done.

## The journey
Every step ends with something the client can look at and, where marked, an approval. **Tejjo sees and picks first** at steps 4, 5, 6 and 7; the client never sees what Tejjo has not approved.

| # | Step | We do | Tools | Output (in the job folder) | Client sees | Stop |
|---|---|---|---|---|---|---|
| 0 | **Qualify and sign** | Revenue band, what they need, what they have. Proposal with the product and price Tejjo gives. Then fill the signing check; anything missing becomes a date or a scope change before work starts. | `offer.md`, `templates/SIGNING.md` | `brief/SIGNING.md` | proposal | Tejjo sends; gaps to Tejjo |
| 1 | **Portal** | Add the client in the Disojo portal admin, send their private link. Every later step is delivered, reviewed and approved there (Tejjo, 2026-11-22: "the whole process has to be so seamless it feels so good"). | Disojo client portal: `~/Desktop/disojo-mix` (`src/pages/portal/`, Supabase `portal_*` tables), live at clientportal.disojostudio.com. See `references/portal.md` | private portal link | the portal | no |
| 2 | **Questionnaire and workshop** | Send `templates/QUESTIONNAIRE.md`. Flagship: then the founder workshop, run as rounds (see `references/strategy.md`). Branding: one call. | `references/strategy.md` | `strategy/interview.md` (their words) | the questionnaire | no |
| 3 | **Strategy** | One page from their answers only: who it speaks to, the problem in their words, the promise true on day one, voice, feel (a finish, not the subject), what the name holds. My lines marked "mine". | `references/strategy.md` | `strategy/summary.md` | one page | **client signs off** |
| 4 | **The idea** | What only this client has, three directions in one sentence each, each with its nearest lookalike, then my pick and why. Tejjo picks or redirects. Then boards for the client. | `identity-design` steps 1 to 3 | `brand/IDEA.md`, boards | three directions | **Tejjo, then client picks** |
| 5 | **Identity** | Mark, type (specimen of 15 to 20 free fonts in their words), colour from the subject, the one device. Test sheet and my verdict before Tejjo sees it. Then the mark on their real things. | `identity-design` 4 to 7, `disojo-identity-lab`, `disojo-logo-design` | `brand/logo/`, `brand/type/`, `brand/tokens.json` | identity on their things | **Tejjo, then client approves** |
| 6 | **Guidelines book** | The book, laid out from the identity's own device, never a template. Brand world on real things (flagship). | `references/book.md` | `brand/book/` (PDF + source) | the book, page by page | **Tejjo, then client approves** |
| 7 | **Website** (flagship) | The site starts from the identity's idea. Whole `websites` process: first screen, then the build in pieces, enquiry pipeline tested end to end. | `websites` | demo link, noindex | first screen, then full site | **Tejjo, then client, each** |
| 8 | **Presence kit and launch content** (flagship) | Profiles, templates, a 9-post grid and 3 reels in the new brand. We make them; the client posts. | `references/presence-kit.md`, `disojo-carousel-studio`, `disojo-reel-studio` | `presence/` | profiles, grid, reels | **client approves** |
| 9 | **Launch** (flagship) | Site live on Tejjo's "deploy". Profiles switched by the client (they log in, we never type credentials). Launch posts ready to go. | `websites` launch, `brand-launch` | live site | live | **Tejjo's word** |
| 10 | **Handover** | Final files (SVG, PNG, PDF; colour, ink, white), the book, fonts and licences, a short walkthrough, the retainer offer from `offer.md`. Then the case study: Tejjo's verdict, the client's words, figures only once verified and allowed. | `references/book.md` (files), `launch-retrospective` | `handover/`, case study draft | the files | Tejjo |

Branding ($4,000) skips 7 to 9 and hands over after 6.

## Job folder
`~/Desktop/DISOJO SOLUTIONS/clients/<client>/` (create on signing):
`brief/` signing, material · `strategy/` interview, summary · `brand/` IDEA, logo, type, tokens.json, book · `site/` the Astro project · `presence/` profiles, templates, grid, reels · `handover/` · `shots/` every screenshot shown.

## Which skill wins
- This file sets the order and what the client sees. `flagship-offer.md` sets what is included.
- `identity-design` owns the idea and the mark; its toolbox is `disojo-identity-lab` (explore) and `disojo-logo-design` (finish). Its `references/` hold the craft positions for marks, type (free and paid), colour, voice and labels, and the book.
- Hard rule (2026-11-22): think like a senior designer. Lead with my recommendation and reason; say when Tejjo's pick is weaker and show the better option.
- `websites` owns the site; its toolbox is `disojo-site-system`.
- `disojo-brand-system` owns `tokens.json` and the colour check.
- The generic `brand-*` skills are reading, never the output format. Their consultant-report templates are not our strategy page.

## Hard rules
- Facts only from the client. Never invent years, numbers, reviews, meanings or coordinates.
- On a redo, ask which part is wrong before starting over.
- Disclose any AI origin of a mark or image, in the README and to the client.
- Own verdict, in writing, before Tejjo sees anything. Gate passes are not quality.
- Footer credit, location and live clock, Astro only: as in `websites`.
- Posting and account changes are the client's or Tejjo's, never ours.

## Honest status
Rewritten 2026-11-22 from the spec. Steps 2, 3 and 5 are proven on Level (Tejjo's own product, not a client). Steps 1, 6, 8 and the whole run on a paying client are untested: no Disojo book, brand world or presence kit exists yet. Log each real run in `~/Desktop/DISOJO SOLUTIONS/_system/proof-log.md`. Previous version: `~/Desktop/DISOJO SOLUTIONS/_archive/2026-11-22-visual-identity-skill/`.
