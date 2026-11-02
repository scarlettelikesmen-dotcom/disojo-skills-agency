---
name: disojo-premium-look
description: The work loop and guardrails that keep Disojo sites at the Monolog-family level while building, not after. Measured composition bands from the reference sites (how much of each screen is photography, words, boxes, buttons and text sizes per screen), a premium gate script that fails broken, soft, placeholder or screenshot-heavy pages and warns outside the bands, a first-look visual review, and a site-guard hook that blocks ending a turn while edited site files have not been gated. Use for every build or edit on disojostudio.com or any client site, before showing Tejjomay anything, and whenever a page "doesn't land", looks cheap, busy or generic.
---

# Disojo premium look

Why this exists (2026-11-02): three full redo directions of disojostudio.com passed every technical check (Lighthouse 99-100, system and phone audits) and still did not land. The checks measured type and colour, which were already close to the references. They did not measure **composition**: how much of each screen is real photography, how much competes for attention, how many tricks a page plays. This skill measures that, makes me check it while working, and gives the visual review numbers cannot do.

Read with: `disojo-image-pipeline` (getting and grading photos), `disojo-art-direction` (concept first), `disojo-redo-pipeline/references/design-system-rules.md` (type, colour, spacing system), `disojo-premium-qa` (defect probe for 3D/brand sites).

## The work loop (every section, not at the end)
1. **Concept and images first.** Before code: the section's one job, its one image (tier A/B/C from the image pipeline) or its one line of type at scale. No image yet = get or generate it now, not "later".
2. **Build the section.**
3. **Gate it:** `NODE_PATH=$HOME/.disojo-tools/node_modules node ~/.claude/skills/disojo-premium-look/scripts/premium_gate.cjs <projectRoot> <localUrl> [/path ...]`
   Output and screens go to `~/Desktop/DISOJO SOLUTIONS/qa-gate/<project>/<time>/` (never inside a repo).
4. **Look:** open the busiest screen it names first, then every screen, desktop and phone, against `references/first-look.md`.
5. **Fix every FAIL.** Explain each WARN in one line or fix it.
6. Next section. **Show Tejjomay only after the whole page passes**, with screens, the gate numbers and what is stock, AI or untested.

The **site guard** hook enforces step 3: after any edit to a site file (Astro, CSS, JS, HTML, JSON data) in `~/Desktop/disojo-mix`, `~/Desktop/disojo-hybrid` or `~/Desktop/websites ARCHIVE/*`, ending the turn is blocked until the gate has run for that project. When the gate truly does not apply (an edit already verified with screenshots this turn, a non-visual change), stamp it with a reason and tell Tejjomay: `node .../premium_gate.cjs --skip <root> "<reason>"`. Never skip to save time.

## What the gate checks
FAIL (fix before showing):
- horizontal overflow; broken images; **images shown soft** (source pixels under 75% of what the screen needs at 2x)
- placeholders visible (lorem, TODO, coming soon), em dashes, banned hype words
- phone text under 12px
- a first screen with neither an image nor type at scale (96px+ desktop, 40px+ phone)
- **fewer than 3 in 8 screens carry a big image** (20%+ of the screen). Every reference clears this; our redo demos had 0 to 2 in 8.
WARN (explain or fix), bands from `research/BANDS.md`: words, boxes, buttons and text sizes per screen; no image ever covering half a screen; under half of the big images reading as photographs (UI screenshots are the problem; real video, 3D or illustration is fine, say which).
Photo vs screenshot is judged by `scripts/flatness.py` on each image crop with the site's grain overlay hidden. It can be fooled (a flat studio photo, a screenshot with heavy texture): when a result looks wrong, look at the crop.

## Composition bands (measured, see research/BANDS.md for every number)
See the table in `research/BANDS.md`. The short version is in the gate's `BAND` object; update both together if the reference set changes.

## Rules that came out of the study
Written in `research/BANDS.md` under "What it means". Apply them in the art-direction brief before building.

## Tools
- `scripts/composition_probe.cjs <outDir> <url...>`: research tool, measures any site's composition screen by screen (env PW/PH viewport, SCREENS count, NAME).
- `scripts/premium_gate.cjs`: the gate above.
- `scripts/flatness.py`, `scripts/lib/screen.cjs`: shared measures.
- `hooks/site_guard.cjs`: the track/stop hook (installed in `~/.claude/settings.json`; backup of the earlier settings at `~/.claude/settings.before-site-guard.json`).
- `references/first-look.md`: the visual review.
