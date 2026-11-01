# Prompt engine for image models (ChatGPT image / gpt-image)

## Division of labour (the rule rounds 1–4 broke)
- **Image model:** gesture, energy, material, character, melt, chrome, a world, presentation. Breadth.
- **Claude (code):** exact geometry, grids, optical corrections, the clean vector, systems (pattern, motion, icons), testing.
Never ask the image model for "perfect circles in a 4x4 grid". Ask it for what a human illustrator would bring.

## Grammar: every prompt fills these slots, in this order
1. **Format.** `WORLD`: one hero image with the flat logo AND its life (object, garment, sign). `SHEET`: a sketchbook page of 9 numbered, clearly different variations in one territory. `FINISH`: after a pick, the same mark flat black on white, centred, for tracing.
2. **Name, spelled out.** `DISOJO (spelled D-I-S-O-J-O)`. Say upper or lower case. Then check the spelling in every output.
3. **Construction in visible terms only.** Weights, widths, what each letter does (swollen, sheared, melting, interlocked, cropped, mirrored), which letter carries the idea. **Never write the meaning** ("it means we look first"): the model can't draw meaning and falls back on stock icons. The meaning goes in our notes for the client.
4. **Hand or tool.** Marker, technical pen, cut vinyl, CGI liquid chrome, embroidery, riso, inflatable vinyl, bent tube. **Never brush or calligraphy for Tejjo.**
5. **Attitude via eras and disciplines, never living designers' names.** "70s motorsport livery", "Y2K liquid-metal tattoo crest", "90s skate brand", "Swiss pharma label", "1950s tattoo flash".
6. **World.** What it is on, and the light. Each prompt in a round gets a different world.
7. **Colour.** Black and white for SHEET and FINISH; WORLD prompts may use one bold colour, a different one per territory.
8. **Short, specific avoid list** (the 3–4 things this territory tends to drift into). Keep the global banned list in SKILL.md out of the prompt unless relevant: long bans make outputs timid.

## Round rules
- A round = 6–8 territories × (WORLD + SHEET). No two prompts share tool + world. Run WORLD first (to feel it), then SHEET (for breadth).
- At least one **wildcard** territory that breaks the brief.
- At least half the territories must have **tension** (two registers) or **strong attitude**. Polite = fail.
- Before sending, imagine each output next to `shots/` at the same size. If it would look weaker than a 2026 logofolio page, rewrite or cut it.
- Iterate in the same ChatGPT chat by editing: "Keep this exactly. Change only: …". New chat for a new territory.

## Gate for results (when picks come back)
1. Has a voice? Would a Bombay agency or a SaaS template already have it? If yes, kill.
2. Tension or attitude present?
3. Can it become an object, a pattern, a motion? (Sketch the motion in one line.)
4. Survives at 16–24 px, or has an obvious small version (one letter, one glyph)?
5. Spelling right? No extra letters or garbage text?
6. Run `scripts/test_sheet.py` with the trace AND a reference from `shots/` side by side before saying anything is good.
