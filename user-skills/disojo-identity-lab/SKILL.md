---
name: disojo-identity-lab
description: The Disojo method for logo and identity exploration with image models (ChatGPT image) plus code. Use whenever Tejjomay wants a logo, mark, wordmark or identity round (Disojo's own or a client's), sends ChatGPT logo results to judge, or says a round is weak, bland, generic or "nothing landed". Holds his verdict log, the 2026 research on what strong identities look like, 14 territories, a prompt grammar (WORLD / SHEET / FINISH), a results gate, and tested scripts to trace a pick to SVG, stress-test it next to references and export PNGs. Works with disojo-logo-design (principles, banned list, type-based pipeline).
---

# Disojo identity lab

## Read first, every time
1. `references/taste-tejjo.md`: what they loved and hated, and the post-mortem of the failed Disojo rounds 1–4. **The two biggest lessons:** one render world across a round kills it; and polite flat icons describing a meaning get "nothing landed".
2. `references/landscape-2026.md` and the contact sheets in `references/shots/` (look at them, don't just read about them).
3. `references/territories.md` and `references/prompt-engine.md`.

## The round, step by step
1. **Facts and assets of the name.** Write down what the letters themselves offer (palindromes, repeated letters, dots, ascenders and descenders, syllable rhythm) and the one or two true things about the business. No invented facts.
2. **Pick 6–8 territories** from different rows of `territories.md`. For each, find the idea that only this name could have (Disojo: the O leaks and the J catches it; O-J-O is a palindrome and a pair of eyes). One wildcard.
3. **Write prompts with the grammar**: WORLD + SHEET per territory, each WORLD in a different material and setting. Visible form only, no meanings in the prompt.
4. **Gate the prompts** (prompt-engine.md, round rules). Imagine each output beside `shots/`; cut the weak ones.
5. **Deliver** as one file in the client's branding folder (`prompts-roundN.md`) with, per territory: the idea in one line (for Tejjo, not for the model), the motion in one line, the WORLD and SHEET prompts. Say how to run them and what to send back.
6. **When picks come back:** contact sheet (`scripts/contact_sheet.py`), gate each pick, then `FINISH` prompt for a clean flat version, then trace and test:
   ```bash
   S=~/.claude/skills/disojo-identity-lab/scripts
   ~/claudeskillsthrureels/.venv/bin/python $S/trace_mark.py pick.png mark.svg --minarea 30   # --crop x,y,w,h  --invert  --thresh 128
   python3 $S/test_sheet.py OUT_DIR mark.svg --name Disojo --brand "#2A45F0" --refs ref.png   # sizes 16-200, paper/ink/brand, tab, avatar, nav
   bash $S/export_pngs.sh final.svg OUT_DIR/png 3000 1200 512 192 48 32
   ```
   Look at `test.png` yourself. If ours is weaker than the ref, say so before Tejjo has to.
7. **Rebuild clean** (straight stems, even radii, optical spacing) using disojo-logo-design's pipeline and the pattern in `branding/ascender-media/logo-04/work/build.py` (exact shapes plus traced parts, evenodd one-colour versions). Disclose the AI origin in the README.
8. **Then the system** (what makes it "insane", not just a logo): small-size glyph, motion sketch, a pattern or grid from the mark, one 3D or material treatment, applications. Log the verdict in `taste-tejjo.md`.

## Hard rules
- **Lookalike check before any prompt goes out and before building a pick:** name the 3 nearest well-known marks (the client's category plus big apps: AI, audio, fintech, social) and kill or change anything close. Rounded vertical bars of different heights = Wispr Flow / audio waveform (Level, 2026-11-04). Say the nearest lookalike to Tejjo with each idea.
- Never ten prompts in one style or one render world. Never brush or calligraphy for Tejjo.
- No meanings in prompts; no literal business metaphors (windows, keystones, tables, knots).
- Never living designers' names in prompts; never copy a reference's shapes. References calibrate the level and energy, nothing else.
- Never invent claims (numbers, years, coordinates presented as facts the client did not give).
- In the logo chat, "take a shot at <site>" means the identity, never a website rebuild.

## Scripts (tested 2026-11-02 on the Disojo r3-01 image)
- `trace_mark.py`: crop, 4x LANCZOS upscale, threshold, optional speck removal (scipy), potrace, then an absolute-coordinate SVG with a tight viewBox and a JSON sidecar.
- `test_sheet.py`: one-colour marks inlined with currentColor; three backgrounds × six sizes, browser tab, two avatars, nav pill, dark card; `--refs` adds reference images in the same rows; headless Chrome screenshot.
- `export_pngs.sh`: transparent PNGs at given widths (bash).
- `contact_sheet.py`: numbered montage of a folder (picks or research).
- `prompts_board.py`: turns a prompts-roundN.md into an HTML board with copy buttons and an image strip (send it with SendUserFile, display render).
