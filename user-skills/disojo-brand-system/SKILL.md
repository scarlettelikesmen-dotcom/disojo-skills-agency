---
name: disojo-brand-system
description: The identity phase of Disojo's premium offer and the system that keeps every project consistent. Chains the installed brand skills in order (brand-context, brand-strategy, brand-positioning, brand-naming, brand-identity, brand-voice, disojo-logo-design, brandkit, brand-guidelines), fixes which skill wins where they overlap, and makes one `brand/tokens.json` the single source of truth for colour, type, motion and voice that the site and the 3D scene both read. Includes a checker that flags any colour in the code that is not in the tokens. Use when starting or continuing a client identity, when picking which brand skill to run, or when checking a build against its brand.
---

# Disojo brand system

One folder per project, one source of truth. Everything downstream (site CSS, Three.js scene colours, guidelines doc) reads `brand/tokens.json`. That is how work stays consistent from project to project and inside one project.

## Folder
```
<project>/brand/
  00-context.md      brand-context output (keep it project-local, not global)
  01-strategy.md     brand-strategy report
  02-positioning.md  positioning, competitors, audience
  03-naming.md       only if the client needs a name
  04-identity.md     identity brief
  05-voice.md        voice rules and sample lines
  logo/              final SVGs (ink, colour, white) + PNGs
  board.html         brandkit concept board (a concept, not final art)
  tokens.json        THE source of truth (template: templates/tokens.example.json)
  guidelines.md      brand-guidelines output
```

## Order and which skill wins
1. `disojo-client-intake` (assets, inventory) then `brand-context` (point its file to `brand/00-context.md`; its "always run first" rule is only for brand work, do not let it gate the 3D or build steps).
2. `brand-discovery` for the interview, `brand-strategy` for the report.
3. `brand-positioning` + `competitor-branding` + `target-audience`. `positioning-audit` is the older equivalent; use whichever fits, not both.
4. `brand-naming` only if needed.
5. Art direction brief first (`disojo-art-direction`, Gate 1), then `brand-identity` (visual brief).
6. Voice: the installed `brand-voice` is the original, `brand-voice-arnab` is the third-party copy. Use `brand-voice`; read the other only for ideas.
7. **Logo: `disojo-logo-design` is the pipeline for final marks.** `brandkit` produces a fast concept board (positioning line, palette with contrast check, fonts with licence notes, logo concepts, mockups); its logos are text-built sketches, so present them as direction and finish with the logo pipeline. Always test at 24 px, one colour and inverted.
8. `brand-guidelines` last, from the approved tokens.
Skip for this tier unless the client asks: brand-architecture, brand-launch, brand-measurement, brand-partnerships, and the channel skills (ads, email, WhatsApp, ASO, UGC, influencer).

## tokens.json rules
- Colours: 3 to 4, each with `name`, `hex`, `job`. Contrast ratio for text pairs recorded (>= 4.5:1 body, 3:1 large).
- Type: max 2 families (a mono for data may be a third, ideally the same family's mono), each with `source` (open licence or client licence, with a note). Never a commercial font lifted from another site, never a trial font.
- Motion: default presets (observed in the reference sites, not a standard): primary ease `cubic-bezier(0.83, 0, 0.17, 1)`, secondary `cubic-bezier(0.16, 1, 0.3, 1)`, durations 0.3 / 0.6 / 0.75 s. Override per brand if the art direction asks.
- 3D: scene background, accent and light tint come from the same colours (no extra hex in the scene code).
- Voice: three adjectives, banned words, two sample lines.
- Open items are listed under `todo` and must be empty before launch.

## Consistency check
```
python3 ~/.claude/skills/disojo-brand-system/scripts/check_tokens.py <project-folder>
```
Scans CSS, JS, TS, JSX, TSX, HTML, Astro, Vue and SVG files (skips node_modules, dist, build, .git, `brand/`) for hex colours that are not in `brand/tokens.json`, plus shorthand (`#fff`) forms. Exit 1 if any are found. Neutral black and white are allowed only if the tokens list them. Run it in the QA phase (`disojo-premium-qa`).

## Done means
tokens.json complete with no `todo`, logo passes the small-size test, voice file has real sample lines, board approved at Gate 2, checker prints 0 off-palette colours.
