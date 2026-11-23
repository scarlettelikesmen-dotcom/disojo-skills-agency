# Beauty: how a still frame becomes pretty (2026-11-23)

Why this exists. Tejjo: "no matter what we do, the result comes up disgusting, all zoomed in, no beauty". The motion study missed the still frame. So we measured 216 TFTL screens (47 sites), the approved seven and our own builds, and set them beside each other. Tejjo on the two boards: "do you see the difference, this is actually really good". Data and boards: `research/beauty/` (README, `ours.jpg`, `tftl-mid.jpg`, `pixels.json`, `type.json`).

Ours look like posters; theirs look like places.

## The numbers (medians)
| | TFTL | approved 7 | ours |
|---|---|---|---|
| Loud area (hard high-contrast detail) | 0.10 | 0.16 | 0.20 |
| Frames over the loud line (0.15) | 28% | 50% | 88% |
| Tonal range, luminance p95 - p5 | 168 | 208 | 208 |
| Colourfulness | 23 | 28 | 40 |
| Biggest text on a screen | 25px | | 60px |
| Screens with 64px+ type | 25% | | 50% |
| Screen covered by text | 2.6% | | 7.5% |

## What "zoomed in" is: five things at maximum at once
1. Type at maximum on every screen: heavy black grotesk edge to edge.
2. Photos cropped tight to the subject: chest-up, head and shoulders, macro texture.
3. Full contrast: #fff against #000.
4. Loud flat colour: saturated blue, plastic red.
5. Everything speaks at once: headline, paragraph, two buttons and a full nav on one screen.
Also: the idea is drawn as a prop or a diagram instead of being felt as light and mood. Everything sits on one plane. Every client gets the same skeleton (big heading top left, thin nav row top right).

## What we keep from our own work
The idea from a real thing only this client has. You know what it is in one second. Real material. Postcards C (tinted ground, centred serif at a sane size, air, cards low and small) is our closest frame to TFTL.

## What we refuse from theirs
Unclear businesses (what does this company do?), unreadable text (pale grey headlines, 9-12px body, grey on grey), black first frames behind slow loaders, cookie banners over the work, template moments (phone mockups, room cards). Their calm plus our clarity is how we beat them, not only match them.

## The method

### 1. Still frames before code
Before any build, compose 6 to 8 frames of the home at 1512x864 as pictures: Astro pages with motion off, screenshotted. They are judged as pictures beside TFTL frames (`research/beauty/tftl-mid.jpg` and the closest scan frames for the client's type). Only after Tejjo says yes does motion or a second page start. The frames replace "three first screens" as the moment the look is decided; the three-ideas-in-words step still comes first.

### 2. Rhythm before layout
Label every frame before drawing it:
- **quiet**: small type in a lot of ground, one short paragraph or one line, a label;
- **photo**: a wide graded picture carries the screen, text 12-16px placed in a corner or a column of it;
- **event**: the one loud screen, heavy type or a hard colour, on purpose and from the idea.
At most one event per page. The home opens on photo or quiet unless the idea itself is the event.

### 3. Pictures with light first
- Shot list by distance: mostly wide (the room, the building with sky, the person small in their place), some medium, few close. A close-up earns its place only next to a wide.
- One grade across every image: same warmth, lifted blacks, no clipped whites.
- If the material cannot do this, say so at signing and plan the shoot or the images (ChatGPT images for non-client imagery only, per `feedback-chatgpt-images-only`).

### 4. Type with range, not size
- Nav, labels and body at 12 to 16px (body never under 14 on desktop, readable contrast always).
- Display type is used light, thin, italic, or set in grey; mixing roman and italic or two weights inside one line gives texture (Cassaia, Coeval).
- Heavy display type only on the event screen.
- The biggest text on a normal screen sits near 2 to 4vw, not 15vw.

### 5. A tinted palette
No #fff ground and no #000 text. Grounds tinted from the subject (cream, charcoal, warm brown, stone). Aim for a tonal range near 170, never past 210 outside the event screen. Colour lives in the photographs or in one muted ground, not in flat saturated fields.

### 6. Composition
- Leave empty ground on purpose: about 70% of a TFTL frame is calm.
- Offsets and tension: a word pushed to the other edge, columns at different heights, a number far from its label.
- Layers: one thing in front of another (type over a picture with something cutting through it, an object breaking a line).
- The skeleton comes from the idea; never heading top left plus a nav row by default.

### 7. Check by numbers, then by eye
`python3 $SK/scripts/beauty_pixels.py <out.json> ours=<frames glob> --check` warns per frame against TFTL. `node $SK/scripts/beauty_type.cjs <out.json> name=<url>` reads type from the DOM. Warnings only. A frame inside every band can still be ugly, and an event frame is meant to break them. Tejjo decides, on the side-by-side board.

| Warn when (normal screens) | Line |
|---|---|
| loud | > 0.15 |
| tonal range | > 210 |
| colourfulness | > 35 |
| calm | < 0.60 |
| biggest text | > 64px on more than 1 in 4 screens |
| text covers | > 6% of the screen |
