# ERA Residence: why it looks the way it does (measured 2026-11-10)

era-residence.com, by The First The Last. Tejjo's favourite. I walked every screen of home, apartments, two apartment pages and contact at 1512 and 390. Raw data, screens and hover crops: `raw/era/` (`summary-1512.md`, `summary-390.md`, `sheet-*.jpg`). Study only: never copy its fonts, copy, images or code.

## The one-line read
A brochure for a place, set like a luxury magazine. Huge condensed serif against huge empty warm paper, real photographs that carry all the colour, and almost nothing else on screen.

## Colour
- Three colours plus the photographs:
  - warm paper `#f3f3ec`, the ground for about a third of all pixels
  - deep plum `#300820`, for brand moments (intro, phone number, footer)
  - ink navy `#17233b`, for 66% of all text
- A pale sky blue (about `#b0c8d8`) is a fourth ground. It is lifted from the sky in their own renders, so sections feel like they continue the photo.
- **No UI accent colour at all.** The only loud colour is the pink bougainvillea in the photos, cut out and laid over the edges of screens and text. The accent comes from the subject, not from CSS.
- No gradients and no shadows (the cookie card is the one exception). Dark is a deep plum, never black.

## Typography
Three faces, each with exactly one job:
1. **A condensed high-contrast serif in capitals** for display, 91 to 366px.
   - Leading 0.87 to 0.91, tracking -0.024em: the lines nearly touch.
   - Numbers are set in it too (the phone number at 129px, "178 to 202 m²").
2. **A wide grotesk** for everything small.
   - Labels and links are 9 to 10px capitals, tracked very wide (+0.32em).
   - Body is 12px, sentence case, leading 1.38.
   - It carries 77% of the characters and almost none of the attention.
3. **A script** under 1% of characters, only ever one word ("Estepona", "yours", "Live in"), tucked into or across the serif. It is the signature, used like a stamp.

**Two size worlds, nothing between.** Display is 91 to 366px and text is 9 to 12px. Only one size (38px, stats) sits in the middle. The largest is about 30 times the smallest. That gap is why it reads as expensive: nothing competes with the headline, and the small text reads as fine print on a printed piece.

On phones the display shrinks to 52 to 90px but the small text stays 8 to 12px. Those two worlds stay apart.

## Spacing and layout
- **Everything is in viewport units.** Paddings measure 22.68, 30.24 and 45.36px at 1512. Those are 6, 8 and 12 steps of a 0.25vw unit, and the pill radius is 10 of them. The composition is identical at every desktop width.
- **One thing per screen:** about 23 words a screen on home, across 29 screens. Text blocks of 12px sit alone in fields of empty paper.
- **Two compositions alternate:**
  - centred and symmetric (statement in serif, small caption under it, the seal)
  - offset collage (two photos at different sizes and heights, flowers overlapping)
- Text starts on four or five fixed column lines (220, 332, 648, 1080px at 1512).
- **Fixed frame furniture** stays on screen the whole time, so the site feels like an object, not a scroll of sections:
  - a slowly rotating circular seal top left
  - a two-line serif "Select an apartment" top right, with tiny links under it
  - a vertical progress line with a number (00 to 100) down the left edge

## Images
- Real renders and photos only, always with square corners (0px on 124 of 124 boxes).
- Shapes come from architecture, not UI:
  - an arch that opens into the first photo
  - a half circle that wipes across a photo to start a section
  - windows of photo inside paper
- Photos are often small (20 to 30% of the screen width) inside a lot of paper, then suddenly full bleed. The change in scale is the rhythm.
- **Cut-out bougainvillea overlaps the edges of photos and type.** That gives depth without 3D.

## Motion and interaction (seen while walking)
- Display words distort as they arrive: letters stretch and fade at the trailing end ("REAL-LIFE LOCATIO..."). Headlines move on scroll, not just fade in.
- The arch grows into the full-bleed photo, and the circle wipes. Transitions are architectural shapes.
- The location is a hand-drawn line with travel minutes instead of a map. Real data, drawn as a picture.
- Eases (from their code): `.25,1,.5,1` at 0.4s and 0.8s, and `.76,0,.24,1` at 0.8s.

## Buttons and links
- There are almost no buttons. 106 of 155 controls are bare 15px text links.
- There is one outlined pill (radius 10 units) and a circular badge with rotating text ("View available apartments").
- On hover the inner letters move (a roll). Nothing changes colour or fill.
- The call to action is the giant phone number in plum, not a button.

## What we would have done instead (our defaults)
| We would have done | They did |
|---|---|
| A rounded image card grid | Square photos at changing scale |
| An accent colour on buttons | The colour comes from the flowers in the photos |
| About 8 text sizes, including 18 to 32px middles | Two size worlds |
| A filled button in every section | One giant number |
| A sticky blurred nav bar | Corner furniture |
