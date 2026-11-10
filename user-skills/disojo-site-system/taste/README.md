# Taste: what the benchmark sites do that our defaults do not

Started 2026-11-10 because Tejjo asked for design taste to be studied factor by factor, not just code. Each site gets a full walk (every page, every screen, every button hovered) measured with:

```bash
NODE_PATH=$HOME/.disojo-tools/node_modules node $SK/scripts/taste_probe.cjs $SK/taste/raw/<site> <url> 10
WIDTH=390 NODE_PATH=$HOME/.disojo-tools/node_modules node $SK/scripts/taste_probe.cjs $SK/taste/raw/<site> <url> 5
python3 $SK/scripts/taste_summary.py $SK/taste/raw/<site> 1512   # and 390
python3 $SK/scripts/taste_compare.py <ourProbeDir> era monolog    # our numbers beside theirs
```
Then I read every screen by eye and write `taste/<site>.md`. Numbers say what; the eye says why.

**Walked so far:** ERA Residence (`era-residence.md`) and Monolog (`monolog.md`). Next from the approved eight: Shortscut, OH Architecture, The First The Last, Supersolid, Your Creative.

## What both do (two very different sites, same habits)
1. **Two size worlds.** Display type is huge and text is small, with very little between.
   - ERA: display about 30 times its smallest text.
   - Monolog: display about 8 times body, but a single 24px "statement" size covers the middle.
   - Our pages carried about 8.6 sizes a screen, mostly in the middle.
2. **Display type is tight.**
   - Leading 0.87 to 1.0.
   - Tracking negative and the same at every display size: -0.024em for ERA, -0.03em for Monolog.
   - Small labels go the other way: tracked wide in capitals (ERA) or set in mono (Monolog).
3. **No interface accent colour.**
   - The interface uses two or three colours.
   - The only loud colour on the page comes from the subject: flowers in the photos, or client work.
   - Grounds are warm off-whites (`#f3f3ec`, `#e8e8e3`), never pure white.
   - Darks are a brand deep colour or a warm near-black, never pure black.
4. **Square media.** 0px corners on 210 of 214 media boxes across both sites. No shadows, no gradients, no bordered cards.
5. **Fluid spacing on one unit.**
   - ERA: 0.25vw steps.
   - Monolog: a 1.78vw gutter with sections at 4, 6 and 8 gutters.
   - The composition is the same at every desktop width.
6. **Gaps are bimodal.** Tight inside a group (12 to 32px), far between groups (80 to 256px). Almost nothing at 40 to 64px, which is exactly where our even rhythm sits.
7. **Few column lines.** Text starts on three to five fixed x positions across the whole site.
8. **Buttons are rare and small.**
   - The big type is the call to action (ERA's phone number, Monolog's "Tell us your story").
   - Buttons are bare text links or small rectangles with a roll on hover.
9. **The site has a frame.**
   - Persistent small furniture: a seal, a progress line, corner nav, a live clock.
   - It makes the site feel like one object, not a stack of sections.
10. **The trust layer is real material.**
    - ERA: real renders with real distances.
    - Monolog: its own team on film, real client numbers.
    - Neither could be made from stock.

## Where they differ (so these are choices, not rules)
| | ERA | Monolog |
|---|---|---|
| Words a screen | about 23 | about 95 |
| Display face | Serif | Grotesk |
| Layout | Centred and collage | Left-weighted asymmetric |
| Ground | One light ground plus brand colours | Black and grey flipping |
| Main colour source | Photographs | Client work |

The idea picks which way a client goes. The ten habits above hold either way.

## How this is used on a build
- After the first screens and before any side by side, probe our page and run `taste_compare.py`. Every line where we sit outside both references is a question to answer, not an automatic fail. Some will be deliberate, from the idea.
- It does not judge whether the page is good. Tejjo does. It stops the defaults above from slipping in unnoticed.
