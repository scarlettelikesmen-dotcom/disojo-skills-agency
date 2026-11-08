# Stage 2: THREE directions (Tejjomay's only checkpoint)

**Rule, 2026-11-08: always present three directions (A, B, C), never fewer.** They follow `direction-families.md`: one safe, one bold, one wildcard, differing on at least four of the six axes. Each one is a full direction as described below and passes the bland test on its own with at most one signature move. Tejjomay picks one, several, or a mix; the picked direction becomes the build (`brief/<letter>/`).

Earlier sites failed as **flat and bland** (Mentable v1, the 2026-11-01 redo directions), never as broken code. The references are not good because of effects: each has a concept, a small strict system, one memorable move and real photographs. Fill `templates/BRIEF.md` once per direction, write `brief/A/`, `brief/B/` and `brief/C/` each with `tokens.json`, `concept.txt` and `preview.html`, render, look, send.

## Before writing it
1. Read `design-system-rules.md` (the measured system of the reference sites and our drift) and `direction-families.md` (nine families). Look at `shots/grid-<family>.jpg` and `research/desk/` for the families that fit.
2. **Study references hands-on, before planning.** Several minutes per site in the browser pane: wait out the loader, scroll slow and fast, hover every kind of element, open the menu and one inner page, check the footer. Paste `scripts/inspect_site.js` into the JS tool for fonts, colours, easings, libraries and media weights. Say honestly how long you studied (Mentable v1: one minute across seven sites, after the build; it came out generic). Log new findings in `reference-sites.md`. Take the principle, never the move, copy, font or images.
3. Read the inventory, the contact sheet and MESSAGE.md. Find the client's truth.

## The direction
1. **Concept in one line**, from the client's name or truth taken literally (Supersolid melts; Squiggle draws a line; Mammoth sets type at wall scale). Not a metaphor ABOUT their craft used as decoration (Ascender v1: fake editor chrome read as a themed template).
2. **Tokens** (`templates/tokens.example.json`, every rule in design-system-rules.md): at most 2 families plus an optional mono, plain text face, display at 6x+ body, tight tracking on big type (about -3% to -5%), 3-4 colours each with a job, one radius family, the approved easings.
3. **Photo grade**: one look for every photo on the site (`disojo-image-pipeline/scripts/grade.py --look`). Same hand everywhere.
4. **One signature move**, built as the client's one bespoke section. At most one per page.
5. **Section list** from the library, in MESSAGE.md's order.
6. **Voice**: three adjectives, two sample lines from their own copy.
7. **Never list**: what would make this one generic (badge soup, equal-card grids, gradient blobs, icon rows, UI screenshots carrying a screen).

## Bland test (all yes before rendering)
- Can I state the concept without naming a colour or an effect?
- Does the first screen show one clear idea with real content and a real photo or type at scale?
- Does the scroll tell a story, or stack sections?
- At most 4 colours and 2 families?
- Is there one move a visitor would describe to a friend?
- Swap test: with another company's logo on it, does it still work? (must be no)

## Render and send
`node $SK/scripts/render_directions.cjs <project>/brief` writes desk.png, phone.png and desk-full.jpg for every direction folder, plus `brief/compare.html` with the three side by side. Do not send fewer than three. Look at every image yourself first. Put the first screen next to the closest reference at the same size and name one thing they do that we do not; fix it or say why not. Then send the PNGs with SendUserFile, say plainly what is stock, AI or missing, and log `show` and Tejjomay's `verdict`.
