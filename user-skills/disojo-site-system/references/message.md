# Stage 1: message (before any design)

A premium site is a sequence with a point, not stacked sections. Words are cut here, before a single pixel, because the measured gap was 135-151 words a screen against a reference median of about 50 (`composition-bands.md`).

## 1. Site map
Every page with its one job, its primary action, who lands there. Default for an owner-run business: Home, Work or Story (one page per real piece), Services (only if they sell several things), About (founder-led), Contact. Add a page only for a reason. Redo: keep every published URL (redirects.json) even if the page is merged.

## 2. Home storyboard (fill `templates/MESSAGE.md`)
One row per section, every column filled before building:
| # | Section (library name) | Visitor's question | Copy (real, with source) | Photo (file, tier) | Words |
Common order seen across the references (a pattern, not a rule): a clear first screen, proof, the work or story, how it works, who is behind it, one action.
- Each section answers ONE question. If two sections answer the same one, cut one.
- **About 80 words a screen, 120 max.** Headline 3-9 words. Sub 12-25 words. Row descriptions one line.
- **Rhythm**: alternate photo screens, type screens and proof screens. At least 3 in every 8 screens carry a big real photo (the gate fails below that).
- **One action** with one label everywhere (hero, nav, end). A second action only as a quiet text link.
- Numbers only when verified, with what they measure. Quotes only with permission, name and role exactly as approved.

## 3. First screen (non-negotiable, from defects on the reference sites)
- Real content within about one second: headline, one line, one button, one photo or type at scale. No blank hero waiting for an animation.
- Any intro is capped near 3 s, tied to real progress, has a skip, never locks scrolling. Text is never gated behind an opacity reveal or font delay (it cost 1.7 s of LCP on Movement First).

## 4. Enquiry
One form or one booking link. Labels above fields, inline errors, honeypot, success only when the endpoint confirms, mailto fallback. Budget bands, response time and minimums are Tejjomay's to state: ask, never draft numbers.

## 5. Navigation
Wordmark, 3-5 links, the one action. The nav must not sit over text on a phone: reserve space or switch contrast with the section under it (the Disojo nav vanished over dark photos).

## 6. Phone
For each section say how it reads at 390: the same story in one column, display 28-44 px, labels 12 px+, photos keep the subject in the crop (`Pic pos="x% y%"`).
