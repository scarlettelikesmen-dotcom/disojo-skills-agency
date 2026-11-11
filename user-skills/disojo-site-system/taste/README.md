# Taste: a method, not a look

Studied 2026-11-10/11 because Tejjo asked for design taste to be learned factor by factor. Then Tejjo warned (2026-11-11): "I don't want it to be a stuck system where we make everything in that oval." So this folder holds **what held on every site** (the method) and **ranges** (choices the idea makes). It holds no style to copy.

**Evidence:**
- **Seven approved benchmarks,** walked with every page, screen and hover:
  - ERA (`era-residence.md`) and Monolog (`monolog.md`)
  - Shortscut, Supersolid, OH Architecture, Your Creative and TFTL (`five-benchmarks.md`)
- **All 96 TFTL projects:** `research/tftl-portfolio/REPORT.md`.
- **Tools:**
```bash
NODE_PATH=$HOME/.disojo-tools/node_modules node $SK/scripts/taste_probe.cjs $SK/taste/raw/<site> <url> 10
WIDTH=390 NODE_PATH=$HOME/.disojo-tools/node_modules node $SK/scripts/taste_probe.cjs $SK/taste/raw/<site> <url> 5
python3 $SK/scripts/taste_summary.py $SK/taste/raw/<site> 1512
python3 $SK/scripts/taste_compare.py <ourProbeDir> era monolog shortscut supersolid oh yourcreative tftl
```

## What held on every site (the method)
1. **The look comes from the subject.** Every site has **one device** that only that client could have, repeated across the site:
   - ERA's arch
   - Shortscut writing with video inside its sentences
   - OH's draggable architect drawings
   - Supersolid's ROIdeas®
   - Son Daven's folk engravings
   - Jesko Jets' plane window
   - If a Bomb Falls' civil-defence manual

   The 96 TFTL projects share no layout, palette or type pairing.
2. **Real material carries trust.** The client's own photos, renders, footage, people, numbers and named quotes. No stock on any benchmark.
3. **A small set of type jobs.** Two families at most carry 95% of the characters. Each face has a job (display / text / an accent used for one word).
4. **Few sizes, used with intent.**
   - 10 to 16 sizes across a whole site.
   - Display steps are big jumps, not a smooth 8-step ladder.
5. **Colour has a source.** Each colour is named after something in the client's world. Greys are the ink at lower alpha, so the palette stays one family.
6. **One radius family.** Six of seven benchmarks use square media; Your Creative rounds its people on purpose.
7. **The site is one object.** There is persistent furniture: a thin top bar, a seal, a clock, a progress line, or a fixed card.
8. **Every page is designed:** the loader, menu, closing screen, 404, cookie card and form success. The closing screen is one huge thing: the wordmark, the phone number, the email or the place.
9. **The same plumbing underneath:** smooth scroll, page transitions, split-text reveals, text rolls, a cursor, named eases. That is reused (`kernel/`, `references/interaction-architecture.md`).

## What varies (the idea picks; these are ranges, not targets)
| Factor | Range seen on the benchmarks | Note |
|---|---|---|
| Words a screen | 35 (ERA) to 104 (Monolog) | A quiet brochure vs. an agency that explains |
| Text sizes, whole site | 10 to 16 | We ran 36 on disojostudio.com |
| Chars at 20 to 47px | 13% to 93% | Your Creative lives in mid sizes; ERA almost never |
| Display leading | 0.88 (ERA) to 1.2 (TFTL) | Tight condensed vs. open grotesk (TFTL) |
| Display tracking | -0.04 to -0.01em | |
| Media a screen | 1.7 (OH) to 9.2 (Shortscut) | Shortscut sells video, so 9 |
| Ground | pure white, warm paper, charcoal, colour fields | A pure white or black ground is fine when chosen |
| Accent | none (ERA, Monolog) to saturated everywhere (Your Creative) | The subject decides |
| Gaps | bimodal (ERA, Monolog) to even (TFTL) | |
| Buttons | almost none (ERA) to many filled pills (Your Creative) | |

## How this is used on a build
1. **At the Idea stage (stage 1):** name the device and the colour source in the idea sentence. Never open a taste file to find an idea.
2. **When setting tokens:** the structure comes from `templates/tokens.example.json`. Every value is argued from the idea.
3. **After the first screens:**
   - probe our page and run `taste_compare.py` against all seven
   - a "?" means we sit outside every reference; answer it from the idea, which may justify it, or fix it
   - it is never a pass or fail, and never a quality verdict; Tejjo decides
4. **Before showing:** list the owned pages (loader, menu, closing screen, 404, cookie card, form success) and check each is designed in the client's world.

## Never
- Copy a benchmark's values, fonts, copy, images or code.
- Reuse a past client's look.
- Treat ERA's arch, Monolog's grey or any one site's habit as the house style.
