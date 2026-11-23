# Why TFTL screens are pretty and ours look "zoomed in" (2026-11-23)

Tejjo: "no matter what we do, the result comes up disgusting, all zoomed in, no beauty". This is the still-frame study the motion study missed.

## What was measured
- `scripts/beauty_pixels.py`: any screenshot, pixels only. 216 TFTL frames from 47 sites (`tftl-handson/scan/*/s01-s08`, blank/blocked frames dropped), 56 frames of the approved benchmarks (`research/desk/`), 24 of our first screens (`brief/*/desk.png`), 20 of our live builds. Data: `pixels.json`.
- `scripts/beauty_type.cjs`: live DOM, first 4 screens at 1512x864. 14 TFTL sites (56 screens) and 8 of our live sites (32 screens). Data: `type.json`, `type-ours.json`.
- Sheets: `ours.jpg` (8 of our first screens), `tftl.jpg` (9 TFTL first frames), `tftl-mid.jpg` (24 TFTL mid-page frames, with numbers).

## The numbers (medians)
| | TFTL | approved 7 | ours, first screens | ours, live |
|---|---|---|---|---|
| Loud area (24px blocks with hard high-contrast detail) | **0.10** | 0.16 | **0.20** | 0.17 |
| Frames over 0.15 loud | **28%** | 50% | **88%** | 65% |
| Tonal range (luminance p95 - p5, of 255) | **168** | 208 | 208 | 216 |
| Colourfulness | 23 | 28 | **40** | 12 |
| Calm area (flat or soft blocks) | 0.73 | 0.67 | **0.59** | 0.75 |
| Biggest text on a screen | **25px** | | **60px** | |
| Screens with 64px+ text | **25%** | | **50%** | |
| Share of the screen covered by text | **2.6%** | | **7.5%** | |
| Text sizes per screen | 3 | | 4 | |

## Diagnosis: "zoomed in" is five things at once
1. **Type at maximum on every screen.** Our biggest text is 2.4x theirs and half our screens carry display type; theirs one in four. Big type on TFTL is an event, and when it comes it is usually a light serif, a thin weight or a grey (Coeval "Our Works", Cassaia, Davincii, Iqosa "Spaces we design" in pale grey, SL in mid grey). Ours is black heavy grotesk edge to edge (Kiran Roy, CTESCOA, KDC).
2. **Photos cropped tight.** Theirs are pulled back: a room, a building with sky, a tree inside a hall, foliage. The subject is small in a large field and the frame breathes. Ours crop to the subject: the drummer chest-up, three lawyers head and shoulders, cardboard as a macro texture, the box filling the middle. (By eye from the sheets; not measured yet.)
3. **Full contrast.** Their tonal range is 168 of 255: tinted grounds (cream, charcoal, warm brown), off-black text, graded photos with no pure white or black. Ours span 208-216: #fff against near-#000.
4. **Loud colour.** Our first screens are almost twice as colourful (40 vs 23): flat saturated blue, red. TFTL colour sits in the photo or in one muted ground.
5. **Everything is loud at once.** 88% of our first screens are over the loud line against 28% of TFTL. On TFTL one thing speaks (the photo or a line) and the rest whispers: nav at 12-16px, a short paragraph small in a wide ground.

The approved seven sit between TFTL and us on every pixel number. Ours are past both.

## Why a TFTL screen is pretty (the read, per frame type)
- **Photo screen** (Hilight, Lenval, Archvoyage): wide graded photograph, camera pulled back, warm mid-tones; text 12-16px placed in a corner or a column of the photo; nothing competes.
- **Type screen** (Coeval, Cassaia, Davincii, Duck): one big line in a light or thin face, a lot of empty ground, one small label. The size is big, the weight and contrast are low, so it reads as calm.
- **Event screen** (Brave, Don't Board Me, Pictoric): heavy, loud type, but once per site and on purpose, from the idea.

## Limits
Pixels can't separate a cookie banner from content, though blank frames were dropped. Our live builds include older work (Ascender, Print Elements) that was never called "zoomed in". Crop distance is read by eye, not measured. Rhythm across screens is not measured yet (quiet, quiet, event).

## Next (not done)
- Turn these into bands in a check (`beauty_check`): loud, tonal range, biggest text, display-type share, text area. Warn only, never a pass mark.
- A crop study: subject size against frame on TFTL photos vs ours.
- A taste section in `taste/` with these rules as reasons, not templates.
