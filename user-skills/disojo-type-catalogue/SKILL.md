---
name: disojo-type-catalogue
description: Website type "Catalogue", loaded from stage 1 of disojo-site-system when the buyer must see the range before trusting the business. Furniture lines, print shops, wholesalers, exporters, multi-product retailers, spec-led suppliers. Sets pages, proof, what to collect, tech and past failures. Never sets the look.
---

# Catalogue

The buyer knows roughly what they need and is checking whether this business has it, at the quality and spec they need. So the site has to answer: how much do you carry, can I find my thing fast, how do I order or ask.

Everything else comes from `disojo-site-system`. The look comes from the picked idea and nowhere else. If this file ever starts describing a layout, it has gone wrong.

## Where the idea usually hides
What the whole range has in common, the workshop or supply chain behind it, the one material everything comes back to, how the client actually describes and sorts their own stock, the oldest item still sold.

## Pages (minimum, never fewer)
1. Home
2. The whole range, findable (search or filters when there are enough items to need them)
3. One page per category
4. One page per item, generated from data, when the client has the data for it
5. About the business and how it works
6. Order, quote or contact: whatever the business really uses
7. Legal

## Proof that counts here
- The range itself, shown completely and correctly.
- Consistent real photography of the items.
- Certifications and client names only when the client states them and permits them.
- Specs, sizes and lead times the client confirmed.

## Collect at signing
- [ ] The full item list as data (spreadsheet or export), with who owns it and how often it changes
- [ ] A photo per item, or a shoot plan. Mixed-quality item photos are the usual blocker: count them now
- [ ] Categories in the client's own words
- [ ] Prices, or the decision not to show them
- [ ] How an order or quote really happens today and who answers it
- [ ] Any existing shop or ERP, and whether it feeds the site
- [ ] Certificates or licences they want shown, as documents
- [ ] Vector logo

## Allowed tech
Astro, multi-page, a static page per item built from the data so they are found in search. The client must be able to update the range without us: decide how at proposal. No 3D without Tejjomay's words in `brief/IDEA.md`. Footer carries the real location and a small live clock, plus the Disojo credit.

## Benchmarks
Open only after Tejjomay has picked the idea: `disojo-site-system/references/design-moves.md`, sheets in `research/walk-2026-11-10/sheets/`.
Sites of this type in the walk: Case, Flos, HAY, Kvadrat, Muuto, Ekomia, Halcyon, ZETR, Gufram, Monolith.
**Warning from the walk:** most of these are good at the first screen and ordinary below it. Take how they organise a range, never their page structure as a design. Gufram (a field of objects to pan) and Monolith (the wordmark cut like the furniture) are the ones with an idea of their own.
TFTL projects of this type (`disojo-site-system/research/tftl-portfolio/`): Moralia (furniture collections as a numbered list), Wood Systems, Ateliery (designed 404 on fabric), Cafe Society, Peresvit, The Label, Addendum Shop, Max Noah.

## Past failures on this type
None recorded yet. Add a row to `disojo-site-system/references/bottlenecks.md` the same day one happens, and note it here.
