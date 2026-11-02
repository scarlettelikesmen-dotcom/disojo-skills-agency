---
name: disojo-image-pipeline
description: How Disojo gets, grades and places the photography that makes a site look premium (the thing the Monolog family has and our builds lacked). Covers the honesty tiers (client photo, licensed stock, AI), a shot list per business type, harvesting a client's existing images, the grade script that puts every photo in one house look with film grain, sizes and srcset, placement patterns (big photo plus small proof card), and a prompt bank for Gemini. Use before building any client or Disojo page, whenever a section has only screenshots or nothing to look at, when Tejjomay asks for "an aesthetic image", or when imagery looks mixed or cheap.
---

# Disojo image pipeline

Measured 2026-11-02 (`disojo-site-system/references/composition-bands.md`): the reference sites carry a big image on most screens and nearly all of it is **photography**; our builds carried **flat UI screenshots**. Type and colour were already close. Imagery was the gap. This skill closes it.

## 1. Honesty tiers (decide per image, write it in the brief's image list)
| Tier | What | Where it may sit | Needs |
|---|---|---|---|
| A. Client's own | their space, product, team, founder, work in use | anywhere, including next to their results | the client's OK to use it on a Disojo page; the photographer's credit if they ask |
| B. Licensed stock | Stocksy, Death to Stock, paid Unsplash+ or free Unsplash/Pexels (check licence) | mood only: section backgrounds, steps, textures | licence recorded in `assets/images.md`; never beside a client name or number |
| C. AI (Gemini) | mood images | same as B | SynthID disclosed to the client; hands, text and faces checked at 100% |
Hard rules:
- **Never put a B or C image next to a client name, result or quote.** People read it as that client's real place. That is an invented fact in picture form.
- **Never ship a stranger's face from stock as "our team" or "our client".**
- A client's own website images can be stock they bought (KDC's backgrounds look like stock). Ask before reusing them on our site.
- If a section has nothing true to show, use type and space, not a fake image.

## 2. Shot list (send to the client in intake, or shoot one afternoon)
Get **originals at 3000px+ wide** (full-bleed on a 1512 Retina screen needs about 3000px; 1920 is soft edge to edge).
- **Service business / school / clinic:** the room empty in good light; the owner at work (hands and tools, not posing); one wide of the space in use; one detail (instrument, equipment, material); the street or door.
- **Product brand:** product on its real surface (stone, wood, fabric), one in a hand, one in use, packaging detail, one texture close-up.
- **Studio / agency (Disojo):** the founder working (hands, screen glow, notebook), the work on real devices in real places (phone in a hand on a street, laptop on a client's desk), the client's space where the software runs.
- **Founder portrait:** window light, plain wall, three-quarter, black and white works.
- Landscape 3:2 or 16:10 for sections, 4:5 for portraits and phone-held shots.

## 3. Harvest what already exists (do this first, it is free)
1. The client's current site: list every image the page loads, including CSS backgrounds (`curl` the HTML and its CSS, grep `url(` and `/images/`). KDC example: `/images/banner.png` (Kunal at his kit) and `/images/background-1..7.png`.
2. Their Instagram, Google Business photos, press, past shoots: ask for originals, never screenshot them.
3. Contact sheet everything (`scripts/contact_sheet.py <folder>`), mark tier A/B/C, size, and what each could carry.

## 4. Grade: one look per site
`python3 scripts/grade.py <src> <out_base> --look graphite|mono|warm|none [--crop 16:10 --focus .5,.4] [--width 2400] [--grain .06] [--vignette .25]`
Writes `<out_base>-2400.webp` and `-1200.webp`. Never upscales (warns instead).
- Pick the look in the art-direction brief and use it for **every** photo on the site. Mixed grades read as stock.
- `graphite` = Disojo site (black and white tinted between ink #0D1318 and paper #D8E2EC). `warm` = Monolog family (desaturated, warm highlights, lifted blacks). `mono` = neutral film black and white.
- Keep the clean source in `_archive/originals-prewatermark` (Disojo) or `assets/originals/` (clients). Replaced files get **new names** (/work is cached a week).
- Disojo corner marks go on **screenshots of our work**, not on client photos (the client or their photographer owns those).

## 5. Placement patterns that read premium
1. **The big photo with a small proof card** (Monolog): photo at 45-60% of the screen, one card with a verified number and a mono label. Card: translucent ink, blur, hairline border.
2. **Photo leads the section:** heading, then the photo, then the text. The reader sees the world before reading about it.
3. **One image per screen** is the rhythm; two only as a deliberate pair.
4. **Photos and screenshots alternate**, they do not share a frame: the place, then the software that runs it.
5. Inset (inside the margins) when the source is under 3000px; full-bleed only with a big source.
6. Always `width`/`height` attributes, `loading="lazy"` below the first screen, `decoding="async"`, `srcset` with the -1200 file, and alt text that says what is in the photo.

## 6. Gemini prompts
`references/prompts.md`: a structure and tested prompts by job (process, after launch, craft, place, texture). Generate 4, pick by checking hands, edges, text and logos at 100%, then grade with the site's look.

## 7. Check
`disojo-site-system/scripts/premium_gate.cjs` fails a page where most big images are flat screenshots, any image is shown soft, or the first screen has no image. Look at the screens yourself as well.

## 8. Product and media helpers (moved in from the archived site skills, 2026-11-02)
- `scripts/cutout.py photo.jpg out.webp`: rembg cut-out to a trimmed transparent WebP. Look at it on the colour it will sit on (speckles inside printed letters, clipped bottom lines).
- `scripts/die_cut_stickers.py`: cut-outs with a white die-cut outline for sticker collages; edit `ITEMS`, run with `~/claudeskillsthrureels/.venv/bin/python` (rembg).
- `scripts/card_crop.py photo.jpg out.jpg`: 16:9 studio product photo to a 4:5 card centred on the product.
- `scripts/extract_frames.sh`: turntable video to frames for a scroll-scrubbed hero.
