---
name: disojo-premium-qa
description: The quality gate for Disojo's premium brand + 3D site tier, built from the real defects found on nine reference sites (blank first screens, scroll-locked intros, overlapping logos, trial fonts, placeholders in heroes, prompts over the hero). Gives the ordered gates, the sizes to test, a paste-in browser probe that flags those defects with pass/warn/fail, the side-by-side reference comparison, the brand-token check, Lighthouse and 3D weight checks, and what must be stated as untested. Use at phase 8 of the brand + site playbook, before showing a build, before any "deploy", and when reviewing a reference or a finished page.
---

# Disojo premium QA

Run these in order. Do not show or deploy until every FAIL is fixed and every WARN is explained. Report numbers and screenshots, not adjectives. Complements `disojo-launch-checklist` (launch gate) and `browser-qa`; this one tests what made the references fail.

## Sizes (from Tejjomay's real windows)
Desktop 1512x864, 1440x790, 1860x955, 1920x1080, 1280x720. Phone widths 343 (the browser pane), 360, 390, 430. Look at every screenshot yourself: hero, mid-scroll, end, and the menu open. Measure covers, gaps and overflow with numbers.

## Gates
1. **Probe.** Load the page at the test size, wait 1 s, 3 s and 8 s, and paste `scripts/qa_probe.js` into the browser JS tool each time; then scroll and run it again at the 3D section. Flags: scroll lock, horizontal overflow, empty first screen, full-screen overlays, fixed UI over text, trial fonts or too many families, heavy 3D assets, reduced-motion hook. It measures one moment; WARN means look at a screenshot.
2. **First screen.** Real content visible within about 1 s on desktop and phone. Any intro capped near 3 s, tied to real progress, with a skip. Scroll never locked past the cap.
3. **Brand tokens.** `python3 ~/.claude/skills/disojo-brand-system/scripts/check_tokens.py <project>` must print PASS. Fonts match `tokens.json` and each has a recorded licence.
4. **3D.** Total weights within budget (model <= 0.6 MB, HDR <= 1.5 MB, video <= 3 MB); no-WebGL fallback shows the same copy; `prefers-reduced-motion` path tested; render pauses off-screen; test heavy WebGL in a real-GPU browser (headless software GL stalls). Compare the scene with its reference frame side by side (`disojo-3d-lookdev`).
5. **Performance.** `~/.claude/skills/disojo-premium-site-method/scripts/lighthouse_summary.sh <deployed-url> [desktop]`. Judge the deployed URL, not a local uncompressed server. Targets from `AGENTS.md` (Lighthouse 90+ on performance, accessibility, best practices, SEO); note where a 3D page cannot reach it and why.
6. **Content honesty.** No invented reviews, stats, prices or contact details. No "Coming soon" or lorem in a shipped hero. AI-generated media disclosed. Forms say success only when the endpoint confirms.
7. **Accessibility basics.** All copy in the DOM (not in the canvas), visible focus, keyboard path through the nav and form, text contrast >= 4.5:1, cookie or prompt UI never covers the hero.
8. **Reference comparison (taste, not only defects).** Put the first screen and one mid-scroll frame next to the closest reference at the same size. List three honest differences and fix the biggest. Ask: is there ONE idea a visitor would describe? Could this page belong to another company in the niche with the logo swapped (must be no)? Passing gates 1-7 does not mean it is good: Mentable v1 scored Lighthouse 97/100/100/100 and was rejected. Run this comparison on the hero BEFORE the full build too. Never use Postcards or Ascender as the comparison.

## Regression list: defects seen in the references (must not appear)
| Defect | Where seen | Probe |
|---|---|---|
| Empty or near-empty first screen for several seconds | Supersolid, Mammoth, HISS on phone | firstScreenContent |
| Scroll locked or blank intro for 20-35 s | Squiggle (35 s locked on 2026-10-14; blank ~20 s on 2026-10-27) | scrollLock + fullScreenOverlays |
| Preloader about 10 s on phone | OH Architecture | screenshots at 3 s and 8 s |
| Fixed logo over text, client logos overlapping | SLIK, Palmo | fixedUiOverlap (WARN needs a look) |
| Trial font in production | Backhouse | fonts |
| "Coming soon" tile in a hero | Mammoth | manual |
| Cookie banner and sensor prompt over the hero | Palmo | screenshot |
| No reduced-motion handling in the 3D script | Ciao | reducedMotionHook |

## Report format
For each gate: PASS/WARN/FAIL, the number, the screenshot path. Then plainly: what was not tested. At minimum: real phones, Safari and Firefox, slow networks, screen readers. Example: "Tested in the Claude browser pane at 343 and 1382 wide and in headless Chrome. Not tested on a real phone or Safari."
