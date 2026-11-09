# The no-copy law

**Nothing is to be copied from any reference site. Not a word, a pixel, a file, a line of code or a signature move. The references set the bar for quality. They are never a source.** The work must be better than these sites and must not look like any of them.

This applies to the nine references (`03-reference-sites.md`), to any other site Tejjomay shares, and to competitors of the client. Read this file before every design phase (5, 6, 7, 8, 9).

(This is a craft and integrity rule, not legal advice. When in doubt: do it differently.)

## 1. Why this is strict
- The point of a flagship is a brand that looks like **only that client**. A look-alike is a failed product, however polished.
- Several references use commercial or trial fonts, bespoke illustration, photography and 3D files that belong to their owners.
- The clients of those sites would be harmed if their work were reproduced, and so would Disojo's reputation.
- Copying teaches us nothing and caps our quality at someone else's ceiling.

## 2. Technique versus expression
| Public technique (allowed to learn and rebuild from scratch) | Expression (never reproduced) |
|---|---|
| Smooth scroll, easing, text-split reveals, pinned sections, lazy loading | A site's exact page composition, section order and rhythm |
| HDRI lighting, tone mapping, bloom, PBR materials, GLB export | Their models, HDRIs, textures, loader videos and any file served from their servers |
| Large tight type as a principle | Their typefaces, their exact type pairing and size relationships |
| A numbered label or menu toggle as a generic pattern | A site's full label system, wording and arrangement |
| One bold brand colour as a strategy | Their palette or hex values |
| Scroll-driven stories as an approach | Their story (coconut to can, cycling words, drawn line, floating boxes, ZERO BULLSHIT burst) |
| Preloaders as a concept | A specific preloader's look and wording |
| Stepped qualifying forms as an idea | Their questions, copy and budget bands |
If the "technique" only makes sense because it recreates a specific site's moment, it is expression. Skip it.

## 3. Rules by category
**Copy and words.** Write every word fresh from the client's real material and voice. Do not paste, translate-and-tweak or paraphrase their lines. No borrowed taglines, headings, microcopy or section labels. Copy that shares a structure with a reference is a smell.
**Images, video, illustration, icons.** Only client assets, assets we make, or properly licensed assets recorded in `00-admin/licences.md`. Never screenshot, crop or download from a reference. Never imitate a distinctive illustration style.
**Fonts.** Open-licence fonts or fonts licensed for this client, recorded with the licence. Never lift a font file from any site. PP Neue Montreal, Obviously, Suisse, Rand, Queens, Roobert (including trial), Manuka, Joyride and similar are theirs.
**Layout and composition.** Design from the storyboard (`plan/site-flow.md`), not from a reference screenshot. Do not match a reference's section order, grid, proportions or hero arrangement. No page that is a recognisable remix.
**Motion.** Our motion comes from the brand's personality in `tokens.json` and the story beats. The shared ease curves and durations seen across the references are common knowledge and are recorded for analysis; choose ours deliberately and vary them per brand. Do not reproduce a signature sequence.
**Code.** Write it ourselves. Never copy, minify-reverse, view-source-paste or lightly reword a reference's markup, CSS, class names or scripts. Public libraries (GSAP, Lenis, Three.js) are fine under their licences. Do not use `ScrollTrigger.getAll()` output as a recipe to clone a sequence; read it to understand, then design our own.
**3D.** Never download or reuse their GLB, HDRI, textures, label art or shaders. Packaged-goods work uses our own template model plus the client's art (`disojo-packaged-product-3d`); check licences for every model, HDRI and stock item (`disojo-packaged-product-3d/references/sourcing-and-licences.md`).
**Brand identity.** No look-alike marks, wordmark treatments, naming devices or concept devices ("Super x Solid"-style wordplay, a drawn line as a brand idea, a bolt, a cycling word set).
**Structure and strategy.** Generic good practice (clear first screen, proof, qualified enquiry) is fine. Their specific offer, claims and numbers are not ours.

## 4. Process guards
1. **Study, then close.** Open a reference, write the principle in `brief/references.md`, close it. Design from the brief with no reference open beside the editor.
2. **Log every reference** in `brief/references.md`: site, principle learned, and how our approach differs on purpose.
3. **Never download** anything from a reference. No saved HTML, no asset grabs.
4. **Palette check.** Our palette is derived from the client's brand. Compare our hex set with the reference notes; if it matches or is close to a reference's, change it.
5. **Type check.** Our families are not a reference's families unless both are open-licence and the pairing is plainly generic.
6. **Concept check.** The concept must be explainable without naming a reference. If the best explanation is "like X but...", rewrite the concept.
7. **Delegated work** (Divyansh, freelancers, 3D artists) is briefed with this law in writing and told not to use reference sites as source material.

## 5. The distinctness test (run before Gates 1, 2, 3, 4 and QA)
1. Take our first screen and a mid-scroll frame.
2. Put each beside the closest reference at the same size.
3. Cover the logos. Ask: could someone who knows the reference say "that's the X site" within five seconds?
4. Ask: do layout, palette, type, motion beat and copy tone all differ **on purpose**?
5. Fail if the answer to 3 is yes, or if more than one of palette, type or composition feels familiar. Redesign the part that is closest.
Record the result in `qa/report.md` ("distinctness: PASS, differences: ...").

## 6. If a client asks for a copy
Decline the copy and keep the intent. Ask what they like about the reference (confidence, calm, a bold colour, a story) and translate that **principle** into their own concept. Say so plainly in the proposal: "We take the standard, not the site."

## 7. If a reference turns out to be too close after the fact
Stop. Remove or redesign the element, note it in `00-admin/decisions.md`, tell Tejjomay. Never ship a known look-alike.

## 8. The exceed clause
The aim is not parity. Where a reference has a measured defect (blank first screen, scroll lock, long preloader, overlap, trial font, placeholder, no reduced-motion), ours must have none, and `disojo-site-system` must prove it with numbers. See `05-exceed-standard.md`.
