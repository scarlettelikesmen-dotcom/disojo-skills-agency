---
name: disojo-panel-designer
description: Designs the visual panels used in Disojo reels - maps what Tejjomay says onto a drawable idea, picks or builds a panel type (clean, balance, loop, rise today), and reviews the design critically. Use when planning visuals for a reel, adding or improving a panel type, when a panel looks mid, generic, sparse or "AI", or when asked what graphic should go with a line.
---

# Disojo panel designer

Panels are the full-width visuals (top 880 px of a 1080x1920 reel) that appear while Tejjomay speaks the idea they show. The engine is `disojo-reel-studio` (`engine/tools/timeline.html`, `/* split-layout panels */`). Principles: `disojo-motion-craft`. Idea sources: motion-broll "interaction vocabulary", motion-effects "one object changing shape", Howseen "concrete metaphors" (MIT repos; see the research note).

## Step 1: map the line to an idea (one idea per panel)
| He says | Show | Panel type |
|---|---|---|
| a mess becomes order / bad vs good software | tangled line resolving into a straight line | `clean` (built) |
| X matters more than Y | a balance tipping toward X | `balance` (built) |
| A gets it, so B gets it / mutual benefit | two nodes, a two-way loop | `loop` (built) |
| growth / more of something | a line climbing | `rise` (built; **illustration only, no axes or numbers**) |
| steps / process (1, 2, 3) | rows sliding in with ticks drawing | `steps` (designed in the motion-lab demo, not in the panel engine yet) |
| a figure he says on camera | big number with count-up and marker | `callout` / `stat` (callouts exist; a full panel does not) |
| before vs after / comparison | split card | `compare` (not built) |
| a tool or product he names | its real logo or screenshot | needs real assets (never a fake UI; label recreations as illustrative) |

If no type fits, **build a new one rather than forcing a wrong metaphor.** Never invent numbers, stats, quotes or results; label anything illustrative.

## Step 2: brief before code (3 lines)
What the viewer should understand in one sentence with the sound off; the single moving thing; the ghost of the start state and the small thing that stays alive in the hold. If you cannot say it in one sentence, simplify.

## Step 3: build or extend
Add a branch in the panel builder in `timeline.html` (viewBox 928x330, text inside the panel's safe area y 296..820, springs from `SP_*`, timings relative to the panel start, `base` offset so the container lands first). Keep: label (mono), illustration, one-line title (72 px), ambient layers (dots, grain, vignette are automatic). Add the type to `references/plan-schema.md` and the table above.
Test in isolation: a small timeline spec with `panels`, render with `render-timeline.mjs`, composite frames over a mid-tone backdrop, look at +0.4 s, +1.1 s and the hold; then in a real reel via `verify_reel.py`.

## Step 4: critique (score /10; fix 7 and below)
Readability at 300 px wide; one focal point; does motion explain the idea; consistency with the brand's `MOTION.md`; does it look like a template or like this brand. Compare against `references/known-weaknesses.md` before presenting.

## Open design debt (Tejjomay: "the design is kind of mid, we will fix that")
See `references/known-weaknesses.md`. Fix those first next session; show stills before building more.
