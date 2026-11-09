---
name: disojo-type-product
description: Website type "Product", loaded from stage 1 of disojo-site-system when the buyer must see the object before trusting the business. A physical product, a device, a packaged good, and real estate (a building or residences). Sets pages, proof, what to collect, tech and past failures. Never sets the look. The only type where 3D is allowed.
---

# Product

The buyer is deciding whether they want this exact object, or want to live in this exact building. So the site has to answer: what is it really, what is it like up close, how do I get one.

Everything else comes from `disojo-site-system`. The look comes from the picked idea and nowhere else. If this file ever starts describing a layout, it has gone wrong.

## Where the idea usually hides
The material, the one mechanism nobody else has, how it is made or where it comes from, what it does to the room or the day it sits in, the plot, the view, the walk to the nearest thing that matters.

## Pages (minimum, never fewer)
**A product:** Home. One page per product or colourway family, with real specs. How it is made or the story, only with real material. Shop or where to buy. Support (shipping, returns, care, contact). Legal.

**Real estate:** Home. Residences with real plans. Location, with real distances. The building (architecture, materials, amenities that exist). The developer. Enquire. Legal, including whatever the local regulator requires: ask the client, never guess.

## Proof that counts here
- Specs the client confirmed, word for word.
- Real photography, or 3D built true to the real object. A render is called a render.
- Real plans, real distances, real completion dates. No dates or availability the client has not stated.
- Reviews and press with a name and permission.

## Collect at signing
- [ ] Spec sheet, confirmed in writing, for every product or unit
- [ ] Real photography, or a shoot date, or CAD and dielines if 3D is planned
- [ ] Physical sample or material references, if 3D is planned
- [ ] Vector logo and any packaging artwork
- [ ] Prices, stock and variants, and who keeps them current
- [ ] Shop platform and access route (the client logs in themselves)
- [ ] Shipping, returns and warranty text
- [ ] Real estate: floor plans, registration numbers, legal disclaimers, the sales contact

## Allowed tech
Astro, multi-page. Checkout stays on the shop platform; link or connect to it, never rebuild it. Footer carries the real location and a small live clock, plus the Disojo credit.

**3D is allowed here, and only if the picked idea needs it.** It is not the premium signal. Order: `disojo-realtime-3d-product` first (the proven method, read its post-mortem), `disojo-packaged-product-3d` for cans, jars, bottles and boxes, `disojo-3d-lookdev` for light and material. `disojo-3d-product-site` and `disojo-scroll-3d-site-recipes` are older notes.

## Benchmarks
Open only after Tejjomay has picked the idea: `disojo-site-system/references/design-moves.md`, sheets in `research/walk-2026-11-10/sheets/`.
Sites of this type in the walk. Objects: Ciao Energy, FS 60P, Daylight, Teenage Engineering, Monolith, Gufram, Aevion, Girard-Perregaux. Real estate: ERA Residence (Tejjomay's favourite), era.estate, Ever, 111 West 57, 432 Park, Poklonnaya 9, Likova, Springs, Silver Pinewood, Belgrade Arbor, Sobha Privy.
Look there for how plans, location and specs are shown, not for a look to reuse.

## Past failures on this type
- **VÆL, 2026-11-03:** sent as finished, far under the references. A dark-luxury template with no concept, built from the starter.
- **VÆL 3D:** failed three times: rendered stills, a flat untextured model, then "needs a 3D artist". The method in `disojo-realtime-3d-product` came out of this.
- **3D offered to brands that did not need it:** it was treated as the premium signal.

More in `disojo-site-system/references/bottlenecks.md`.
