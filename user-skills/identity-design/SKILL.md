---
name: identity-design
description: START HERE for any logo, mark, wordmark or visual identity - Disojo's own, a client's, or one of Tejjo's own products. How Disojo makes identities that read as a studio's work, not AI or a template - from the truth of the name and the business, to ideas in words, to marks made with image models and code, to the system around the mark. Built 2026-11-17 from Tejjo's real verdicts. Uses disojo-identity-lab and disojo-logo-design as its toolbox. In proof; the old skills stay until it has proven itself on a real job.
---

# Identity design

The job: a mark and a system that make the business look as good as it really is, and that only this business could own.

Read first, every time: `taste-library/identity.md` and `taste-library/studios.md` (the market's floor and bar, and the 13 rules), and look at the images they point to.

**Hard rule (Tejjo, 2026-11-22): think like a senior designer, not an AI agreeing to whatever Tejjo says.** Every answer leads with my recommendation and the reason. When Tejjo's idea or pick is weaker, say so, say why, show the better option. Tejjo decides.

Craft positions (read the one for the step you are on):
- `references/marks.md`: wordmark, symbol, monogram, combination, emblem, system; when each makes sense
- `references/type.md`: free and premium fonts, licensing, how to choose
- `references/colour.md`: fewer colours with conviction, the handover system, checks
- `references/voice.md`: voice as a person with checkable rules; labels and packaging labels
- `references/refs.md`: which reference images to open for each decision (idea, mark type, type, colour, book, brand-world surfaces, case-study post), with Tejjo's scores
- `references/guidelines.md`: what separates our book from the template floor The whole client job (signing, stages, handover) still runs from `disojo-visual-identity` until the client-jobs skill is rebuilt. Strategy (positioning, naming, voice) still runs from the brand-* skills until the brand-strategy skill is rebuilt.

## What good has looked like here
- **Disojo, round 6 "Settle".** Heavy rigid caps and a square O; the first O became a ring of liquid caught mid-wobble. Tejjo: "only this landed". It worked because of tension: one soft, alive thing in a hard word.
- **Print Elements.** A heavy PE inside hairline crop marks. The client's own trade (print) supplied the vocabulary, heavy against hairline supplied the energy.
- **Ascender.** The wordmark as a caption pill with one letter highlighted: the client's own editing interface turned into the logo.
- **Tejjo's references** (Monolog, ALCHE, Nonstop, Bloom): custom-drawn, bold, and each mark becomes a world: chrome, 3D, motion, a grid system.

## What failed, and why
- A stock font with one tweaked letter: "disgusting". A font plus a gimmick is not a logo.
- 40 prompts in one flat render world, built from meanings ("it means we look first"): every output looked like the same polite icon set. "Nothing... did I like even slightly."
- Literal metaphors of the business (keystone, knot, window, growth bars): clip-art.
- A feel word from the brief drawn literally as the object. "Stop thinking like an NPC... be intentional." A feel is a treatment, never the object.
- A pick that looked like a famous app's mark, found only after building.
- Procedural Blender renders shown when I knew they were weak: "you know it".

## How I work

### 1. The truth, before any idea
- What the business really is and who it is for, in the client's words. Facts only: never invent years, numbers or meanings.
- What the name itself offers: letters, repeats, palindromes, round and straight letters, rhythm, how it sounds.
- What their trade looks like up close: the tools, marks, materials and interfaces only people in that trade know (crop marks, captions, a chart, a drum stick).
- On a redo: ask which part is wrong before starting over. Disojo rounds 1 to 4 were wasted because only one letter was the problem.

### 2. Study, hands-on
- Look at the real thing: the landscape sheets in `disojo-identity-lab/references/shots/` and `landscape-2026.md`, the client's category, and the 3 nearest well-known marks (the category plus big apps in AI, audio, fintech and social).
- Write what I found in a few lines. Say honestly how long I looked.

### 3. Ideas in words
- Three ideas, one sentence each, in the form: "the mark is ___, and the tension is ___". Then the one I would stand behind and why. (Three is Tejjo's rule from 2026-11-08; one strong pick inside it is mine.)
- Each idea comes from step 1, carries the name's feel rather than a meaning, and names its nearest lookalike.
- Feel words from the brief ("calm", "premium", "bold") go in as the finish, never as the subject.
- Tejjo picks before anything is drawn.

### 4. Make
Split the work by what each tool is good at:
- **Image model: ChatGPT only** (Tejjo, 2026-11-22: exclusive, few intentional prompts, never spam rounds): gesture, hand energy, material, character, the world around the mark. Long, researched prompts with reference images, saying what each image is for. Grammar and round rules: `disojo-identity-lab/references/prompt-engine.md` (WORLD, SHEET, FINISH, IN-WORD). Paste prompts in chat as code blocks; the board copy buttons failed for Tejjo.
- **Code**: exact geometry, the clean rebuild, optical corrections, grids, patterns, motion, tests. Pipeline: `disojo-logo-design` (fonttools, HarfBuzz, shapely, outlined type plus constructed geometry).
- **Match the tool to the reference's genre before writing any prompt** (lesson 2026-11-23). Constructed geometric symbols (Softriver, Shift, Cortexa, Sanora) are made in code; see `references/marks.md`, "Constructed symbols". Gesture, ink, material and worlds are made in ChatGPT. Two Disojo rounds were lost by asking ChatGPT for geometry.
- **When Tejjo points at a reference, start from what it does, not from my last idea.** Name its construction in one line, and check that each new direction uses that construction. On 2026-11-23 I carried my "liquid settle" story into every prompt after Tejjo pointed at a crisp geometric S.
- Explore wide in code and words first (many rough marks are cheap in code); spend ChatGPT prompts only on the picked idea, 1 to 3 at a time.
- Never brush or calligraphy. Never living designers' names in prompts. Never copy a reference's shapes.

### 5. Look at it before Tejjo does
```bash
S=~/.claude/skills/disojo-identity-lab/scripts
~/claudeskillsthrureels/.venv/bin/python $S/trace_mark.py pick.png mark.svg --minarea 30
python3 $S/test_sheet.py OUT mark.svg --name <Name> --brand "#hex" --refs ref.png
```
- Look at the test sheet myself: sizes 16 to 200 px, paper, ink, colour, tab, avatar, nav. Put it next to a loved reference at the same size.
- Write my verdict first. If I would not put it beside the references, I do not send it; I say what is missing.

### 6. The system around the mark
The logo starts a world. After the pick:
- **The one device** the identity repeats: a crop, an edge, a fold, a rhythm.
- **Type:** free or paid foundry fonts, chosen for one nameable trait; the flagship usually deserves a paid face, licensed in the client's name (`references/type.md`). A specimen of 15 to 20 candidates set in the client's own words (`disojo-site-system/references/free-type.md` for free sources). Licence recorded.
- **Colour:** named from the subject, not from a palette trend.
- **Motion:** how the mark moves, in one line, then built. Strong ease-out (`cubic-bezier(.16,1,.35,1)`), the curve not the speed.
- **Material:** for a finish such as glass or chrome, write the image prompt early with the vector as reference. Do not grind procedural renders.
- **On real things:** the mark on what the client actually uses (packaging, sign, card, merch, app icon, social). Shown before the website, and the website starts from it.
- **Tokens:** one `brand/tokens.json` for colour, type, motion and voice (`disojo-brand-system`).

### 7. Finish
- Rebuild the pick as clean geometry: straight stems, even radii, optical spacing.
- Export SVGs (ink, colour, white) and PNGs (`export_pngs.sh`).
- Disclose AI origin in the README and to the client.
- Log Tejjo's verdict in `taste-library/identity.md` and the full log the same day.

## Standing rules (Tejjo's)
- Never invent facts, claims, years or coordinates.
- Lookalike check before any prompt goes out and before building a pick.
- No growth bars, arrows, swooshes, globes, lightbulbs, gradients for their own sake, or bevels.
- Say up front that hand lettering is beyond code drawing.
- Gate results are not quality. Only Tejjo decides if it is good.

## Proof
This skill is on trial. Each real run gets a line in `~/Desktop/DISOJO SOLUTIONS/_system/proof-log.md`: the job, my verdict, Tejjo's first-look words, and the rounds it took.
