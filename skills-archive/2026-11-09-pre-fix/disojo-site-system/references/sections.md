# Section library (starter/src/components/sections/)

Each section does one job, reads its look from tokens.css, and was checked at 1512x864 and 390x844 on /library/ (2026-11-02: gate 0 WARN; the only FAIL is the KDC specimen photos at 1920 px, too small for full-bleed; see below). Compose pages from these; the client's ONE bespoke signature section is the only new layout per project. Proven on disojostudio.com: the result card on a photo, zigzag steps, the button, grain.

| Section | Job | Needs | Phone |
|---|---|---|---|
| `HeroType` | Say what the business is at viewport scale | 3-9 word headline (`lines`), one sentence, one button; optional small proof photo; `mega` only for 1-3 short words a line | display size, one column |
| `HeroPhoto` | Open on the client's real world | tier-A photo 2400px+ with a calm area for type; headline, button, optional `card` | photo crops portrait (`pos` keeps the subject) |
| `Card` | Proof on a photo: one verified number, one line, a source line | used inside HeroPhoto and ResultPhoto | spans the photo width |
| `ResultPhoto` | Prove a result with a person or place | photo + card, optional heading on the 4/12 side, `flip` | photo first, card on it |
| `Featured` | One project given room | photo, name, one line, up to 4 facts, link | stacked |
| `PhotoStory` | A part of the story the photo tells better | 4:5 photo leads, title, 1-2 short paras, `flip` | 4:3 photo then text |
| `Rows` | Services or offers, scannable in five seconds | 3-6 rows: title, one-line description, link | number, title, line |
| `Steps` | How working together goes | 3-5 steps, each with a photo or a short quote | line on the left |
| `PhotoBand` | A breath between sections | one photo 2400px+, optional one line; `tall` = full screen | 4:5 crop |
| `Quote` | One client's words, large | verified quote, name, role; optional portrait | stacked |
| `Stats` | 3-4 verified numbers, each with what it measures | never animated, never rounded up, no filler stat | stacked |
| `CaseStrip` | Range: 3-6 projects in a draggable, snapping row | photo, name, one line, link each | swipe |
| `Gallery` | The place or the work as a set | 3-7 photos, first one large, one grade | 2 columns |
| `Founder` | The person behind it, in their own words | real portrait (tier A only) or none; short note; name | stacked |
| `Faq` | Questions that stop a booking | 3-6 real questions; native details, animated height where supported | same |
| `Cta` | The one action, said once more | headline, one line, the hero's button label; optional dark photo | same |
| `FooterMark` | Close with the name at full width and the few links people need | goes in Base's `footer` slot | same |

## Primitives
- `Btn` (`href`, `label`, `tone` '' / line / acc, `size` sm): the one button. Never style a second button.
- `Pic` (`src`, `w`, `h`, `alt`, `set` [[url, w]], `sizes`, `eager`, `par`, `pos`): every photo. Real width and height always. `eager` only on the first screen. `par` = drifts 6% inside its frame on scroll (off under reduced motion). Full-screen and portrait-cropped photos need `sizes="(orientation: portrait) 180vh, 100vw"` (HeroPhoto, Cta and PhotoBand set it).
- `.ln` headline lines rise from masks in CSS on load (visible without JS). `data-reveal` fades a block in when it enters.
- `.on-ink` flips a section to the dark tone; `.muted` is the one grey.

## Photo sizes (what the gate measures)
Full-bleed at 1512 css on a 2x screen needs a 2300px+ file; portrait crops of landscape photos on phones need more (a 100svh phone hero shows a 1470 css wide slice). 1920px stock passes inside the grid but fails full-bleed: shoot or source 3000px+ for HeroPhoto, PhotoBand and PhotoStory.

## Adding a section
Only when two client projects needed the same new job. Prefix its classes `s-xx-`, take every value from tokens, add it to /library/, gate it at desktop and phone, add a row here.
