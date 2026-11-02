# Composition study, 2026-11-02

`scripts/composition_probe.cjs` at 1512x864, first 8 screens of each home page. Screens in `research/desk/<site>-s<N>.jpg`, per-screen rows in `<site>.json`.
"Big image" = one image, video or canvas covering 20%+ of the screen. "Photo" = flatness under 0.3 (overlays like film grain hidden first).

| Site | Screens with a big image | Largest image (share of screen) | Big images that are photos | Words per screen (avg/max) | Text sizes per screen |
|---|---|---|---|---|---|
| bymonolog | 5/8 | 0.50 | 1.00 | 119 / 366 | 7.6 |
| oharchitecture | 5/8 | 1.00 | 0.87 | 114 / 169 | 4.8 |
| mammothmurals | 4/8 | 0.84 | 0.86 | 51 / 70 | 4.6 |
| shortscut | 8/8 | 1.00 | 0.18 (video) | 104 / 203 | 5.0 |
| supersolid | 6/8 | 1.00 | 1.00 | 43 / 73 | 3.8 |
| slik | 4/8 | 1.00 | 0.00 (3D, motion graphics) | 11 / 18 | 3.0 |
| hiss | 8/8 | 1.00 | 0.53 | 75 / 150 | 3.8 |
| backhouse | 7/8 | 1.00 | 1.00 | 33 / 41 | 2.9 |
| squiggle | 3/8 | 0.38 | 0.00 (illustration) | 43 / 130 | 2.4 |
| **disojostudio (live)** | **1/8** | **0.28** | 0.80 | **151** / 186 | **8.6** |
| **redo A (lens)** | **0/8** | 0.18 | 0.00 | 135 / 221 | 4.6 |
| **redo B (typed once)** | **0/8** | 0.09 | 0.00 | 122 / 198 | 4.2 |
| **redo C (circled)** | **2/8** | 0.22 | 0.40 | 59 / 112 | 3.5 |
| ascendermedia | 1/8 | 0.25 | 0.00 | 63 / 93 | 6.1 |
| csk-law-demo | 3/8 | 1.00 | 0.17 | 72 / 149 | 3.9 |

Boxes per screen (refs 1.2 to 10) and buttons per screen (refs 0 to 2.5) did not separate the references from our builds.

## What it means
1. **Imagery is the gap, not type or colour.** Every reference carries a big image on at least 3 of 8 screens (median 5); our redo demos carried 0, 0 and 2, the live site 1. Seven of nine references put an image across a whole screen at least once; ours never went past 28%.
2. **The big image is a crafted visual, never a UI screenshot.** Most references use photography. The ones that do not (Shortscut, SLIK, Squiggle) use video, 3D or illustration made for the brand. None leads with screenshots of software.
3. **Fewer words per screen.** References median about 50 words a screen; Monolog, the wordiest, 119. The live Disojo home runs 151, redo A 135.
4. **Fewer text sizes on one screen.** References 2.4 to 7.6 (median 3.8). The live Disojo home 8.6, the highest measured.
5. Type at scale was never the problem: our first-screen display sizes (98 to 143px) match theirs.

## Limits
Home pages only, first 8 screens, one desktop size. Flatness cannot tell illustration from a UI screenshot (both are flat): read the label per site, or look at the crop. Video that has not started reads as flat.
