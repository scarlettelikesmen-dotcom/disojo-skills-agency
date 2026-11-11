---
name: project-postcards-redo
description: "READ FIRST for Postcards: Astro redo PARKED (slop); now improving the live Vite site lumina-store on :4613, 15-point plan in progress, scent pages done"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-11T08:40:57.420Z
---

**Postcards Perfumes redo, real client request** (Tejjo 2026-11-11: "client wants it"). Live site postcardsperfumes.in is the old Vite/React build (`~/Desktop/websites ARCHIVE/lumina-store`, branch 3d-rebuild); the redo is a new Astro project at `~/Desktop/websites ARCHIVE/postcards-site/`, dev server launch.json "postcards" on :4612.

- **Idea picked:** 1, "the site is a stack of postcards": every scent is a card, front the place, back the note, stamp the price, postmark the place; cart is "your stack". Tejjo: "ALRIGHT, you know what to do, go ahead, kill it". Written in brief/IDEA.md. Type: Product; 3D not asked.
- **Reviews are real** (Tejjo 2026-11-11): the five on the live site (Ananya Mehta, Rohan Desai, Priya Sundaram, Kabir Sharma, Ishita Nair).
- **Checkout stays Shopify**: permalink checkout.postcardsperfumes.in/cart/<variant>:<qty>, PACK3/PACK4 codes; variant ids in lumina-store/src/data/products.js.
- **Done:** brief/MESSAGE.md (pages, storyboard, missing list); font specimen at /first/type/. Tejjo picked pair 12 (Gloock + Figtree); hand La Belle Aurore is MY assumption, not picked.
- **First screens built 2026-11-11** (/first/a/ stack on the table, /b/ back of the card, /c/ four cards in hand), side-by-side sheets in qa/sbs/, sent to Tejjo with my pick B. Gate 13 FAIL (soft 640px images, single-screen footer/big-image checks). WAITING for their pick; build nothing more.
- **Facts:** Bengaluru (footer, Asia/Kolkata). AI place pictures are fine (Tejjo). Still open: bottle shots photo or render, Rakhi out of season, Instagram handle, hand font.

- **PIVOT 2026-11-11 (later):** A/B/C rejected as "that usual ai slop" ([[feedback-postcards-slop]]). Tejjo: "lets work with what we have". The Astro redo is PARKED. Work now happens in `lumina-store` itself, launch.json "postcards-live" on :4613. Nothing committed or deployed.
  - Done on lumina-store: the hero is one still with the window effect, the scrollbar is hidden, the sticky transparent nav hides on scroll down, a Menu sheet below 1080px, side up down (Wave.jsx) on every text button, the bag is "Your bag (n)" shifted right, and the closed cart drawer no longer shades the right edge.
  - Scent pages `/scents/:slug` (src/pages/Scent.jsx): the cards and the wheel link to them. Tejjo is happy with the home first section.
  - FULL PASS DONE 2026-11-11 (Tejjo: "finish the entire site"): scent page v2 (bottle in front of huge name on scent colour, postcard-back details), all pills now text actions, ticker removed, footer Bengaluru + live IST clock, Instagram -> @postcardsperfumes (handle read off the kraft-box image), reviews one at a time, scent wheel 420vh -> 220vh, story line over hero-postcards.jpg, B2B form 4 fields, Combos rebuilt as open kraft box filling with bottles (prices unchanged 899/1099), Rakhi = same builder with Rakhi header, Story rebuilt with client words verbatim, collection cards swap to place photo on hover. Shots in lumina-store-review/v2, v3.
  - OPEN for Tejjo/client: checkout discount bug (codes PACK3/PACK4 only fire on 198/297 savings, boxes save 298/497, so box buyers may pay full price on Shopify); newsletter still opens mailto; Rakhi out of season; are bottle-on-postcard shots real photos and larger files exist; Instagram handle confirm.
  - Was the old plan order: pill buttons to text, one heading style, cut ticker, collection hover + quick add, scent wheel shrink, "We don't bottle places" over photo, reviews one at a time, shorter B2B, footer Bengaluru + clock, Combos rebuild, Rakhi (ask), Story (needs client words).
  - The /postcards/*.jpg place pictures are soft (640px upscaled). Scent pages use /images/<slug>.png (682px styled bottle-on-postcard shots, origin unknown) instead.
  - Shots in `~/Desktop/websites ARCHIVE/lumina-store-review/`.
Related: [[feedback-fonts-research-first]], [[feedback-dont-overbuild]], [[feedback-idea-before-pixels]].

## 2026-11-11 later: full Astro build of idea 1 (the rack)
- Tejjo rejected the lumina-store pass as "not a full redo"; saw idea 1 as a real page (/first/rack/), said "Don't touch the hero, rest all go build".
- Built in postcards-site/site (:4612, launch "postcards"): / (hero exactly as /first/rack/), /<scent>/ x4, /combos/, /rakhi/, /find-your-scent/, /story/, /business/, /help/, 404. Layout src/layouts/Rack.astro (stack = cart in localStorage, Shopify permalink checkout with PACK3/PACK4), styles src/styles/rack.css, data src/data/scents.js. Old starter routes in postcards-site/_archive/pages-before-build.
- Not deployed, not committed. Open: soft 640px AI place pictures, Instagram handle, PACK3/PACK4 amounts on Shopify, business form is mailto, Rakhi out of season, 404 copy is mine.
