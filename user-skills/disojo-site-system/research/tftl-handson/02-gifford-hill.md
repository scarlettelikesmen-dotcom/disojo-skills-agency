# Gifford Hill (giffordhill.com), hands-on 2026-11-22

A new town and racecourse in South Australia, sold off the plan. Study only.

## Stack
- Webflow + GSAP 3.12 + ScrollTrigger + Lenis 0.2 (old) + Flickity + jQuery. No SplitText, no Barba, no canvas. Inline scripts, hand-written, small. **A different and plainer developer hand than ERA:** jQuery `mouseenter` class toggles, `console.log` left in, seven copy-pasted pin handlers. Proof that the site's quality here comes from the photography, the type and the layout, not from code.
- Fonts: NaN Holo (a grotesk, commercial) in 400 and 700, plus Inter on forms. One family carries the whole site.
- 15,260px tall home. 55 MB fetched: big PNG lifestyle photos (2.4 to 4 MB each, unoptimised), an 8 MB aerial video.
- Lenis: duration 1.2, the same exponential easing as ERA. Old Lenis ignores the in-app browser's synthetic wheel, so this walk scrolled by script.

## The signature moments, and how each works
1. **"Joy Lives Here" over the town render.** Huge grotesk (151px) laid straight on a full-bleed render of the future high street, with a small video card bottom right ("Q4 2025" open date) and the email and phone in the top bar. The first screen sells the place and gives two ways to act.
2. **The sentence that inks itself.** "Gifford Hill is set to become an economic powerhouse": every letter is its own span, starting at 15% ink (`rgba(56,51,47,.15)`), and each letter goes to full ink as you scroll. The reading pace is the scroll pace. Under it, small factual paragraph text with real numbers (jobs, dollars). **Mechanism: split to chars, scrub colour alpha per char along a ScrollTrigger.**
3. **Scroll drives a 5-step slider.** A sticky section 300vh long; scroll progress split in fifths clicks the Webflow slider's dots (0.2, 0.4, ...). Crude code, smooth result: the story advances by scrolling, no buttons needed.
4. **The aerial with one line.** Full-bleed aerial of the land, one centred line "Connection to Nature", a small caption. Nothing else.
5. **The masterplan with pins.** The general plan image with 7 numbered pins; hovering a pin shows a photo of that place and a details card (class toggle, CSS transition). The map is the navigation.
6. **"Live, Work, Play" index.** The words at 200px across the top, a list of six themes on the left (Lifestyle, Affordability, Community...), hovering a theme swaps the large photo on the right. A hover-driven gallery instead of six sections.
7. **Closing screen = the email.** `hello@giffordhill.com` set huge (about 200px) over the aerial photo, small address and a "Register" pill beside it. The last thing you see is the way to reach them.
8. **Partners marquee** of developer logos under the hero.

## What I looked at, honestly
About 12 minutes: their inline scripts read in full, 7 scroll stops, one hover on the map area. Not done: phone, inner pages, 404 (next pass if needed).

## What Disojo should take
- The ink-as-you-read sentence: the cheapest strong scroll moment there is, and it makes one statement feel important.
- Scroll-driven steps for a short sequence (3 to 5 things) instead of a carousel with arrows.
- A map or plan as the menu: hover a place, see the place.
- The hover index (words left, big photo right) for any list of themes, services or rooms.
- The closing screen as the contact itself, set huge.
- The lesson: plain code is fine when the photographs are enormous and the type is one confident family.
