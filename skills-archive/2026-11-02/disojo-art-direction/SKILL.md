---
name: disojo-art-direction
description: The concept-first art direction step that stops Disojo sites and 3D from looking flat, bland or template-made. Produces a one-page brief (one concept, hero object, story in beats, tiny palette and type system, one signature move, voice) and gives a method for studying reference sites by their SYSTEM (with a paste-in inspector script and measured data on nine reference sites). Use before any identity, 3D or layout work on a premium project, when Tejjomay says "flat", "bland", "mid" or shares a reference site, and whenever a new reference needs to be analysed.
---

# Disojo art direction

Tejjomay's failure mode on earlier 3D sites was **flat and bland design**, not code. The nine reference sites are not bland because of effects. Each one has a **concept, a small strict system, one memorable move and a voice**. Do this step first, always, and get it approved (Gate 1 in `disojo-brand-site-playbook`).

## The brief (one page, save as `brief/art-direction.md`)
1. **Concept in one line.** What the visitor feels or understands. (Palmo: a coconut is cracked open and becomes a can. Backhouse: production redesigned, shown as a system of floating parts.)
2. **Hero object or image.** One thing. Real, built or sourced (never a decorative metaphor about the client's craft).
3. **Story in 3 to 5 beats.** A transformation or a sequence the scroll walks through, each beat with one sentence. Palmo labels it on screen ("CRACKED OPEN 059 / CANNED 100").
4. **Palette: 3 to 4 colours, hex, each with a job.** Background, ink, accent, one spare. No gradients as a crutch.
5. **Type: max 2 families (a mono for data may be a third, ideally the same family's mono), licence recorded.** One display face with character, one quiet text face (the references use plain ones: Montserrat, Manrope, Suisse). OH uses a single face in two sizes. Big scale contrast, few sizes. Letter-spacing and size set deliberately (the references run tight, around -3% on big headlines).
6. **One signature move.** The yellow, the drawn line, the cycling word, the serif on cream, the can that re-themes the scene. One, not five.
7. **Voice: 3 adjectives and 2 sample lines.** Short declaratives, one dry line. Real, specific, no filler.
8. **Real vs generated.** List what is client-real, what is AI, what is placeholder.
9. **Never list.** Per project: things that would make it generic (stock icons, badge soup, equal-card grids, gradient blobs).

## The "bland test" (all must pass before design starts)
- Can I state the concept without naming a colour or an effect?
- Does the first screen show one clear idea with real content?
- Is there a story the scroll tells, or just stacked sections?
- Are there at most 4 colours and 2 type families?
- Is there one move a visitor would describe to a friend?

## Studying a reference (copy the system, never the content)
**Do this BEFORE planning, never after building.** Budget several minutes per site and use it like a visitor: wait out the loader, scroll slowly AND fast, hover every kind of element (nav, cards, buttons, footer links, the hero itself), open the menu, open one inner page, check the footer. Report the real time spent. (Mentable v1, 2026-10-27: one minute across seven sites, after the build, two sites never opened: the page came out generic.) If the browser pane is hidden, `resize_window` emulation still renders (1440x820 frame worked).
1. Open it in the built-in browser at the real desktop size and at ~343 wide. Scroll all of it, slowly.
2. Paste `scripts/inspect_site.js` into the browser JS tool. It returns fonts, colours, easings, durations, libraries, canvases, 3D/HDR/video files and sizes. CSS-declared motion only; motion written in JS needs `ScrollTrigger.getAll()` or reading the module script.
3. Write what it does in plain words: the story, the one move, the type, the palette, the defects.
4. Note licensed fonts you must not lift. Log new findings in `references/reference-sites.md`.

## Shared facts across the references (measured 2026-10-14)
All except Palmo are Webflow with GSAP, ScrollTrigger and Lenis; most add SplitText, CustomEase and barba page transitions. Shared ease variables: `cubic-bezier(0.83, 0, 0.17, 1)` (primary), `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out); also `0.625, 0.05, 0, 1` for hovers. Durations cluster at 0.3, 0.5, 0.6, 0.75 s. So **the toolkit is common**: the difference is taste and assets. Details and per-site numbers: `references/reference-sites.md`.

## What the references share (hands-on study, 2026-10-27; notes in `references/reference-sites.md`)
1. One idea per brand taken literally from its name or truth (Supersolid melts because a supersolid is solid and fluid; Squiggle draws a line; Mammoth sets type at wall scale; Hiss files yearbooks in stacking folders).
2. Very few fonts; plain text faces; one accent used hard.
3. Huge scale contrast (130-530 px display vs 11 px labels).
4. A label system (parentheses, mono pills, numbered lists).
5. Live, true details (local clock with open/closed state, scroll percentage).
6. One physical signature move tied to the idea; calm scroll-led motion (blur-to-sharp, line masks, pinned scenes); small hovers (text roll, slow zoom, arrow).
Take the PRINCIPLE, never the move (`high-ticket-flagship-3d/references/04-no-copy-law.md`).

## Defects seen in the references (do not reproduce)
Blank or near-empty first screen for several seconds (Supersolid, Mammoth, HISS on phone), an intro that left the page blank for 20-35 s (Squiggle: on 2026-10-14 it stayed scroll-locked 35 s+; on 2026-10-27 it was blank about 20 s, then scrolling drew the line and revealed the page), a "Coming soon" placeholder in a hero (Mammoth), logo overlapping text and client logos overlapping (SLIK), a trial font in production (Backhouse), cookie and sensor prompts over the hero (Palmo). `disojo-premium-qa` tests for each.
