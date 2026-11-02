---
name: disojo-scroll-3d-site-recipes
description: The end-to-end recipe for building "insane" scroll-driven 3D websites (one hero object, page colour per section, giant type behind the object, branded loader, camera-driven scroll, physical transitions, tactile proof, clean buy moment), distilled from frame-by-frame study of 13 screen recordings (watch, Porsche, burger, football shirts, katana, 3D showroom, Spider-Man, vegan gummies, Nike shoe, factory fly-in, Everest, Shopify). Use when scoping, storyboarding or building any 3D or heavy-motion brand/product site, especially food, packaged goods and product brands. Chains the Disojo skills in order. Study for level only: never copy a reference.
---

# Scroll-3D site recipes (A to Z)

Source: 13 phone recordings of laptop screens, reviewed at 2 frames per second with timestamps (2026-10-17). Per-site notes: `references/recordings.md`. **NO-COPY LAW applies** (`high-ticket-flagship-3d/references/04-no-copy-law.md`): copy the system and the craft level, never a layout, copy, asset or signature move.

Honesty: everything below is **observed on screen** unless marked (inferred). Stack, code and file sizes were not visible in recordings; verify with `disojo-site-system/scripts/inspect_site.js` on the live site before claiming anything.

## The 10 patterns every one of them uses
1. **One real hero object**, never decoration (bottle, shoe, watch, car, shirt, terrain).
2. **Page colour = brand colour and it changes per section** (Nike shoe re-colours the page; CRAV cream/red/yellow; Dembele per club; Ethical Life white to lime).
3. **Giant type behind or around the object**, the object overlapping the letters.
4. **Short branded loader (about 3 s)** where the logo or product builds with real progress (Nike, CRAV).
5. **Scroll drives camera and object**; text pins and swaps (watch rotates and explodes; camera flies through a room, city or valley).
6. **Physical section transitions**: wavy edges, torn paper, pixel dissolve, blur-to-sharp type, glitch.
7. **Small 3D extras for atmosphere**: floating gummies, falling toppings, dust, particles.
8. **Tactile proof**: tilted review cards, video testimonials, photo strips.
9. **A clean commerce moment**: plan picker, price, add to cart (Ethical Life), or configurator (FAERS, watch variants).
10. **A big-wordmark footer**, never a generic one.

## The pipeline
| Step | What | Skill to use |
|---|---|---|
| 0 | Qualify and scope the 3D (one hero object only; cap the rest) | `disojo-site-system`, `high-ticket-flagship-3d` |
| 1 | Concept and 5-beat story, one signature move | `disojo-site-system` |
| 2 | Identity: logo, palette (hero colour per section), 2 fonts | `disojo-brand-system`, `disojo-logo-design`, `brand-identity` |
| 3 | Scroll storyboard: per section purpose, object state, page colour, type, transition, mobile | `disojo-site-system` |
| 4 | Hero asset: real GLB (modelled, scanned or licensed) or packaged-goods kit | `disojo-packaged-product-3d`, `disojo-3d-product-site` |
| 5 | Look-dev: HDRI 1k, ACES, one key light, contact shadow, subtle bloom | `disojo-3d-lookdev` |
| 6 | Build: Three.js or R3F + GSAP ScrollTrigger + Lenis; loader; transitions; hover and sound | `3d-web-experience`, `disojo-site-system`, `disojo-motion-craft` |
| 7 | Fallbacks: phone scene (DPR 1, fewer objects), no-WebGL stills, reduced motion | `disojo-site-system` |
| 8 | QA: first screen under 1 s, no scroll lock, Lighthouse, real phone, console clean | `disojo-site-system` |
| 9 | Handover | `high-ticket-flagship-3d` |

## Rules of thumb (from what worked and what failed on screen)
- Scene budgets: model 0.6 MB or less, HDRI 1.5 MB or less, home page 6-8 MB first load. Phone gets a simplified scene.
- **Defects seen to avoid:** blank first frames (several), blank white flashes between scenes (FAERS), text unreadable over busy imagery (Kryntix, Nike body copy), tiny low-contrast body text, loader longer than the value it gives, scroll sections too long to finish on a phone.
- Type that reads on a phone beats clever type. Hero object must never fight the headline for the first second.
- Real photos for proof and people. AI only for textures and plates, labelled. (Several references use AI stills; do not copy that for client proof.)
- Every site needs an **enquiry or buy path inside two taps** from any section.

## Food and packaged-goods version (vegan, snacks, drinks)
Hero = the pack or bottle (real GLB or the label-swap kit). Floating ingredient 3D bits as atmosphere. One saturated brand colour per product line, white or cream between. Ingredient and values statement as a big readable block (Ethical Life shows it works). Real reviews and faces. Plan picker and add to cart. Keep 3D to ONE hero product at an $8k scope; the rest is 2D.

## Before you build
Read `references/recordings.md` for timestamps, then write the storyboard. Do not start building until the storyboard and the colour-per-section plan are approved.
