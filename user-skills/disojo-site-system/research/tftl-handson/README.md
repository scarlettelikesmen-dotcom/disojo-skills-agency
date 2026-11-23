# TFTL hands-on study (started 2026-11-22)

Tejjo's goal: build at The First The Last's level. The 2026-11-11 study (`../tftl-portfolio/`) proved they use no template. This pass goes deeper on the ~45 live sites still in TFTL's design: use each by hand and read the code behind its best moments, then rebuild chosen moments as our own Astro pieces, one at a time, each shown beside the original before the next.

Rules: study only. Never copy their code, fonts, images or copy. Record mechanisms and numbers. One file per site, written straight after the visit. `teardown/` holds the asset lists from `teardown.cjs`.

## Batch 1 (2026-11-22): ERA, Gifford Hill, Son Daven, Santal, Jesko Jets
Files 01 to 05. About 75 minutes of real looking in all.

### What batch 1 changed in what we knew
1. **TFTL do share a code skeleton, just not class names.** ERA, Son Daven and Jesko Jets run the same hand-written script structure: one `init*` function per data attribute, all called from `initScripts()` after every Barba page change; identical motion tokens (`durS .4, durM .8, durL 1.2, stagger .1`), identical named eases (`In .5,0,.75,0 · Out .25,1,.5,1 · InOut .76,0,.24,1 · Write .333,0,.667,1 · Ease .25,.1,.25,1`), the same Lenis settings (duration 1.2, exponential easing, GSAP ticker), breakpoint 992. Webflow pages, one Slater-hosted script. Santal (Nuxt + three.js) and Gifford Hill (plain jQuery) are other hands. So: one kernel, and a new look on top every time. That is exactly the system to build.
2. **Every intro is a real object from the business doing its real action**: ERA's arch door rises and opens, Jesko's window shade lifts, Santal's door opens into a room. Never a logo spin.
3. **The heavy look is usually cheap tech.** ERA's flowers are alpha WebM loops; Jesko's window is four layered images and four tweens; ERA's door is two CSS variables. Real WebGL appears only where the idea needs it (Son Daven's engraving filter, Santal's space, Jesko's globe).
4. **Text never just fades.** Headings split into chars that turn in (rotateY 90 to 0, yPercent 50 to 0); paragraphs rise line by line from a mask; text hides again when you scroll back up. Statements ink in letter by letter as you scroll (Gifford Hill, Son Daven). Headlines pull into focus from blur (Jesko).
5. **Two pro techniques we lack**: a WebCodecs frame player for scroll video (Son Daven, Santal) and a per-client image filter shader (Son Daven's engraving).

### Distinct moments found so far (candidates to rebuild)
| # | Moment | Seen on | Tech |
|---|---|---|---|
| 1 | Object intro: a shape from the business opens to reveal the site | ERA, Jesko | CSS vars + GSAP, layered images |
| 2 | Char-turn heading reveal + line-mask paragraphs, with hide on scroll back | ERA, Son Daven, Jesko | SplitText |
| 3 | Sentence that inks in as you scroll | Gifford Hill, Son Daven | SplitText + scrub |
| 4 | Tall single image as hero, name leaves faster, zoom into it at the end | ERA | scrub timeline |
| 5 | Footer clip: the page shrinks into a framed picture | ERA | clip-path scrub |
| 6 | Fixed UI changes colour exactly as each section passes under it | ERA, Son Daven | ScrollTrigger per element |
| 7 | Horizontal walk with drifting title lines and a path drawing in | ERA | containerAnimation |
| 8 | Map or plan as the menu (hover a pin, see the place) | Gifford Hill, Son Daven | CSS + JS |
| 9 | Hover index: themes left, big photo swaps right | Gifford Hill | CSS + JS |
| 10 | Closing screen = the contact, set huge | Gifford Hill, ERA | type |
| 11 | House image filter (engraving / halftone) on photos and small videos | Son Daven | WebGL shader |
| 12 | Frame-exact scroll video | Son Daven, Santal | WebCodecs |
| 13 | A control from the subject (seasons dial on an arc) | Son Daven | SVG path + drag |
| 14 | Nav as progress bar | Santal | CSS + ScrollTrigger |
| 15 | Live 3D object opening into a pre-rendered space | Santal | three.js + frames |
| 16 | Focus-pull headline (blur to sharp) | Jesko | GSAP filter |
| 17 | Infinite stepping list ("Fly anywhere + city") | Jesko | GSAP |
| 18 | Globe with own flat map, arcs, mask follows pointer | Jesko | globe.gl |
| 19 | Label roll + arrow swap on CTA hover | Jesko, ERA | SplitText |
| 20 | Background-tab favicon blink | Jesko | JS |

### Next
Batch 2 onward: the other ~40 live TFTL sites, 5 at a time (list from `../tftl-portfolio/cases.json` minus the dead, blocked and rebuilt ones in `../tftl-portfolio/NOTES.md`). After all are done, Tejjo picks which moments we rebuild, one at a time. The kernel (`../../kernel/`) should adopt the skeleton in point 1 first, since every rebuilt moment plugs into it.

## Batch 2 (2026-11-23): the full sweep, scanner first
`scan.cjs` (intro frames, real-wheel scroll, phone frames, code read) + `sheet.py` per site, then one note per site (files 06 onward). Scanner only unless a note says otherwise; sites in `rescan.txt` need a hand visit, sites in `blocked.txt` refuse headless browsers.

### What the sweep confirmed
1. **Two code kits, both certain now.**
   - **Webflow + Slater kit:** ERA, Son Daven, Jesko, **Lenval** (30). Same eases to the decimal (`In .5,0,.75,0 · Out .25,1,.5,1 · InOut .75,0,.25,1 · Ease .25,.1,.25,1 · Write .333,0,.667,1 · diveIn .6,0,0,1`), Lenis + Barba, one init per data attribute. Our kernel matches this.
   - **Nuxt + GSAP ScrollSmoother/Observer/SplitText:** most of the rest (4X, AEXLAB, Alchemy, ADA, Archvoyage, Bottega, Brave, Avalon, Cassaia, Coeval, Don't Board Me, DaVincii, Duck, Envy, Face to Face, Fame, Grape, Grand Hotel, HLE, If An A-Bomb Falls, Moralia, Nabil, Pictoric).
   - They also ship on **Framer** (IQOSA) and **Tilda** (Kitchen Hero), and hand-written (Hilight, Junkineering). The craft is not the platform.
2. **WebCodecs frame player is standard for scroll film:** Son Daven, Santal, Hilight, Lenval. It belongs in the kernel (`data-frames`).
3. **Ink-as-you-read is everywhere** (Gifford Hill, Son Daven, Nabil and more). `data-ink` was right.
4. **Every loader says something about the business:** the hotel's 1894 seal (Grand Hotel), a robot head in an orbit (Junkineering), bubbles merging (Pictoric), a bracket counter on the kitchen photo (Moralia), scattered headline words that assemble (Lenval), a typed sentence that swaps its last word (HLE), the letter-spaced name (Fame).

### Page closes seen across the range (input for the first moment)
| Close | Site |
|---|---|
| Page shrinks into a framed picture as the dark footer rises | ERA |
| Contact set huge as the last screen | Gifford Hill, ERA, Nabil ("CONNECT" cut by the edge) |
| Three beats: the question, the real office, a 3D monogram hanging like a shop sign | Fame Estate |
| "Let's start creating together" then the year huge, sinking into the bottom edge | Grape |
| Full sitemap in columns, studio credit letter-spaced across the full width | Grand Hotel |
| Huge outlined wordmark sunk at the bottom, serif links, local time | Lenval, Hilight (phone, with a live clock) |
| The mascot asleep on a hill, fade to white, hand-drawn wordmark | Pictoric |
| Line-drawn heads under a sitemap of every instruction, giant outlined title behind | If An A-Bomb Falls |
| A line character peeking up from the bottom edge under two contact cards | Kitchen Hero |
| Liquid-metal image with a question, centred wordmark | IQOSA |

### More distinct moments (adds to the table above)
| # | Moment | Seen on |
|---|---|---|
| 21 | Brand colour as a curtain that grows from a dot between two photos | Fame |
| 22 | A list set as one sentence (awards, clients), links inside the hero sentence | Grape |
| 23 | Ground colour per department, so colour tells you where you are | Grand Hotel |
| 24 | The founding seal / year as the loader | Grand Hotel |
| 25 | One object that is the business (a TV) with the site controls as its knobs | HLE |
| 26 | Typed sentence that swaps its last word | HLE |
| 27 | Studio's own sketch drawing itself | Hilight, Lenval |
| 28 | Solar system of categories around a glowing centre | Hilight |
| 29 | The client's document genre as the design system (a civil-defence pamphlet) | If An A-Bomb Falls |
| 30 | Pinned scene with hotspots that light up in turn | Junkineering |
| 31 | Scattered words that assemble, as loader and as headings | Lenval |
| 32 | Moving light (leaf-shadow video over the page) | Lenval |
| 33 | Vertical words as columns for places | Nabil |
| 34 | Buttons as stickers in the brand's own shape | Pictoric |
| 35 | Ghost word behind, real heading on top | Pictoric, Grand Hotel |
| 36 | Chapters in the bottom bar as nav and progress | Nabil |

### Sweep closed 2026-11-23
51 notes (01-51). Studied by scanner: 44. Dead or blocking headless browsers: Agency Telegram, Horizonte, Rose Family, Tommy47 (now Bandcamp), Made with Switzerland, Miracle, Qapara, The Label, Max Noah (curl: no connection / 502 on 2026-11-23). Need a hand visit: `rescan.txt`. Page-close sheets: `closes-1.jpg`, `closes-2.jpg` (last three wheel stops of every site that scrolled).

**Five families of page close:**
1. **The page turns into the footer** (the last section shrinks, clips or folds as the footer rises): ERA, Alchemy (clouds), SL (ribbon behind).
2. **The wordmark as the floor** (the name huge, sunk or cut by the bottom edge): 4X, Lenval, Grape (©2026), Pictoric, Hilight.
3. **The last sentence is the contact** (the action sits inside the line): Archvoyage ("...designs together. Send request"), Coeval ("From You"), Nabil ("CONNECT"), Face to Face ("Next, let's"), Gifford Hill.
4. **An object from the business ends it**: Fame (hanging 3D sign), ADA (smile mark under a face), Pictoric (mascot asleep), Kitchen Hero (character peeking), Envy (the app on a phone).
5. **The real places** (sitemap, branches, hours): Grand Hotel, ADA, Verholy, Avalon (phone number huge).
Families 1 to 3 are mechanisms the kernel can own. Family 4 always comes from the client's idea.

## Page closes read in code (2026-11-23)
All close mechanisms with exact numbers, by family: `closes-code.md`. Code saved per site in `code/<slug>/` by `grab.cjs`; search helper `ctx.py`.
- Scroll-film player in code: `frame-player-code.md`. Loaders in code: `loaders-code.md`.
- Moment captures: `moments.cjs` (loader|close), `strip.py`, `overview.py`; sheets in `moments/`.

## 2026-11-23 evening: the not-done list closed
- Kit code: menus, page changes, hovers, reveals, cursor (`kit-code.md`), with menu and page-change sheets `moments/overview-menus.jpg`, `overview-navs.jpg`.
- Loaders: all nine captured (`moments/overview-loaders.jpg`), notes in `loaders-code.md`.
- Closes: Hilight and Face to Face captured (`moments/overview-closes.jpg`, 19 rows).
- Hand visits: HLE (23), IQOSA (25, scan was wrong: the haze was the cookie banner), Vurrle (47), Shelter desktop (38). Frames in `scan/<slug>/hand/`. Made with Swiss, Max Noah, Miracle, Qapara, The Label still unreachable.
- Scroll film: maker + kernel `data-film` + lab page (`frame-player-code.md`, Built).
Still not caught: ERA, Lenval and Fame menus; Fame page change.
