# The reference sites

**These are quality benchmarks only. Nothing is copied from any of them** (full law: `04-no-copy-law.md`). We study the level of craft and the principle behind each decision, write the principle down, close the site, and design from the client's brief. The goal is work that is **better** than these and recognisably **not** them.

Measured data (stack, fonts, colours, easings, durations, defects) for all nine: `~/.claude/skills/disojo-art-direction/references/reference-sites.md`. Collected 2026-10-14 in the Claude browser pane at 1382x811 and 343x811 (a narrow desktop window, not a real phone). Their hex values and eases are for analysis, never for reuse. To study another site: `disojo-art-direction/scripts/inspect_site.js`.

The first seven are the sites Tejjomay named as the target. The last two are the 3D benchmarks he added.

---

## 1. oharchitecture.com.au (Brisbane architecture studio)
- **What it is:** Webflow. White page, one huge tight grotesque, full-bleed project photography, pill buttons, numbered project cards, a stepped enquiry form.
- **Study (principle):** one photograph does the work; restraint (no shadows or badge clutter); the enquiry form qualifies the client by stating the wait and fee expectations.
- **Do not take:** the typeface (commercial), the "OH" rolling preloader, the "(Our Studio)" bracket-label system as a whole, the section order and copy, its photographs, its form's exact steps.
- **How we exceed:** a first screen that is visible at once (its phone preloader ran about 10 s); our own type licence; a qualifying form with Disojo's real values, not borrowed ones.

## 2. mammothmurals.com (mural agency, Alabama)
- **What it is:** Webflow. Flat yellow brand colour as the hero, ultra-condensed black display type, big work grid, boxed tags.
- **Study:** one bold colour can be the whole identity; giant type with text laid over it; proof (logos, rating, stat) placed mid-page.
- **Do not take:** yellow-and-black as a pairing, the overlaid "OUR WORK" composition, the headline structure, the services block layout, the logo strip arrangement, the mural photography.
- **How we exceed:** no placeholder tile in the hero (theirs said "Coming soon"); the headline visible on phone at 5 s (theirs was blank).

## 3. supersolid.agency (Sydney creative agency)
- **What it is:** Webflow plus Three.js. Dark, film grain, an extreme-width wordmark logotype, uneven work cards that blur in.
- **Study:** the logotype as a hero; texture that gives a dark page depth; cards of different sizes break the grid.
- **Do not take:** the extended wordmark treatment, the "Super x Solid" concept and its "ROIdeas" device, the grain-and-blur combination, the card rhythm, the stat style.
- **How we exceed:** content on the phone first screen (theirs was empty); nav and logo that stay legible over imagery.

## 4. slik.com.au (Sydney, Melbourne, Brisbane agency)
- **What it is:** Webflow plus a long list of GSAP plugins and Three.js. Dark starfield hero with cycling words, a chrome bolt, a flip to light grey, a giant "Services" word, marker highlights.
- **Study:** a hero that changes state as you scroll; a theme flip as a narrative beat; highlights that emphasise the one phrase that matters.
- **Do not take:** the cycling-words hero, the bolt, the neon green, the giant section word, the marker highlight device, "Average is the enemy" tone, the client-wall layout.
- **How we exceed:** no logo over text on phone, no overlapping client logos, contrast checked at every scroll position.

## 5. hiss.sydney (a queer normal school, digital archive)
- **What it is:** Webflow. Warm cream, a high-contrast serif at huge size, a self-shuffling deck of yearbook photos that turns into doodles, an orange block with doodles, a nine-item charter, yearbook collections as tabbed folders that stack on scroll.
- **Study:** a serif can carry a brand; saturated colour blocks as chapters; personality through real people, not stock.
- **Do not take:** the serif-on-cream pairing as a recipe, the word-by-word hero, the photo fan, the orange doodle block, the charter accordion, the voice.
- **How we exceed:** a phone hero that has content throughout (theirs was one word then empty space); real photography only with consent.

## 6. backhouse.com (embedded production company, Los Angeles)
- **What it is:** Webflow plus Three.js and Lottie. Black, a scroll-driven intro with rings and a gradient shape, words that swap, floating labelled boxes, a stat block beside a logo grid.
- **Study:** a scroll sequence that explains a system visually; a single strong stat with attribution; monospaced micro-labels for structure.
- **Do not take:** the rings-and-pill intro, the floating-boxes explanation, the "Modular production" copy, the numbered mono menu, the stat block layout.
- **How we exceed:** licensed fonts (they loaded a trial mono); a shorter route to real content; labels that never clip on phone.

## 7. squiggle.sydney (inclusive educational games)
- **What it is:** Webflow plus Swiper and Draggable. Off-white, a hand-drawn line that draws itself as the intro, warm illustration-led colour, team bios with personality.
- **Study:** a brand's name made into a motion idea; warmth through illustration and real people; low-pressure calls to action.
- **Do not take:** the self-drawing line, the cat-and-team intro, the orange, the colour set, the layout, the copy.
- **How we exceed:** never leave the page blank. On 2026-10-14 the page stayed scroll-locked (`overflow: hidden`) for 35 s (desktop) and 18 s (phone); on 2026-10-27 it was blank about 20 s before scrolling started the line. Our intros are capped, skippable and never block scroll.

## 8. ciaoenergy.com (3D benchmark: energy drink)
- **What it is:** a Webflow shell with a 39.7 KB inline Three.js module: HDRI lighting, ACES tone mapping, subtle bloom, SMAA and FXAA, a tiny can model (0.16 MB), a video loader.
- **Study:** premium 3D is light, material and camera, not polygons; a scene that recolours per variant; small assets.
- **Do not take:** the can model or any file from their servers, the HDRI, the loader video, the can carousel, the flavour theming, the four feature beats, the "ZERO BULLSHIT" burst, the type and copy.
- **How we exceed:** a reduced-motion path (their script had none), an honest no-WebGL fallback, tested mobile behaviour, original concept and object.

## 9. palmo.co.in (3D benchmark: coconut water)
- **What it is:** Next.js, Lenis, several canvases, `can1.glb`, `coconut.glb`, a 1k HDRI. A flat cream page with objects on it; a transformation story (coconut, cracked open, canned) with a visible readout; tab title changes per section.
- **Study:** a flat background is fine when the concept and the system are strong; a story told by one object; small personality details (circled buttons, stat badges).
- **Do not take:** the transformation story, the coconut or can, the Khand-and-handwriting pairing, the cream-brown-yellow palette, the badges, the readout, the tab-title idea executed the same way.
- **How we exceed:** no cookie banner or sensor prompt over the hero; no logo over body text; clean textures on close-ups.

---

## What the nine teach together (principles, not recipes)
How to study them: hands-on, several minutes each, BEFORE planning (see `disojo-art-direction`, 2026-10-27 lesson).
1. One memorable idea per brand, taken literally from the name or the product truth, built into a small strict system (one system repeated, not a different layout per section).
2. Type does the heavy lifting; sizes are big and tight.
3. Real imagery or a well-lit real object; not decoration.
4. Motion carries the story and has a point.
5. Proof is specific.
6. The enquiry experience matches the quality of the rest.
7. Their shared toolkit (GSAP, ScrollTrigger, Lenis, Three.js, smooth easing) is public technique. Taste and assets are the difference.

## The defects they share (our regression list, built into `disojo-premium-qa`)
Empty first screens, locked intros, long preloaders, overlapping fixed UI, trial fonts, placeholders in heroes, prompts over the hero, no reduced-motion handling in a 3D script.

## What is NOT a reference
Postcards Perfumes and Ascender Media. Never a design guide, example, comparison or proof of quality for this tier, not even slightly.
