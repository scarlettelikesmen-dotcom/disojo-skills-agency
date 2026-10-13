---
name: disojo-reel-studio
description: START HERE for any video content request. Turns a raw talking-head clip into a finished ~30s vertical reel from one short prompt - cuts and retake removal, branded captions with marker highlights, animated hook, illustrated cards tied to what is said, camera pulses, voice clean, loudness and quiet sound design - then verifies it and delivers with flags. Use the moment Tejjomay sends a video (a file name, path or screenshot of a file) and says make a reel / do this / here's the clip / edit this / caption this, or asks for Instagram, Reels or Shorts content from footage.
---

# Disojo reel studio

**Contract.** Tejjomay sends a clip and a line of prompt. You deliver a verified reel and a short, honest note. He should never have to explain
the format, the look, the motion or the process: all of that is in this skill. Ask a question only if it is in "Ask only if" below.

```
HUB=~/Desktop/"DISOJO SOLUTIONS"/content-hub          # workspace: edits/ scripts/ brands/ .venv
ENGINE=~/.claude/skills/disojo-reel-studio/engine      # tools, fonts, design, templates (single source of truth)
```
Run commands from `$HUB` with `.venv/bin/python`. Long renders: use a long timeout or run in the background.

## 0. Setup check (10 s)
`test -x "$HUB/.venv/bin/python" && test -d "$ENGINE/tools/node_modules" || bash ~/.claude/skills/disojo-reel-studio/scripts/setup.sh`
(new Mac or missing env: the script installs everything, links the workspace, and tells you what is missing. First transcription downloads the Whisper model once.)

## 1. Find and probe the clip
A bare name ("IMG_2198.mov") means `find ~/Downloads ~/Desktop ~/Movies ~/Documents -iname 'NAME*'`. Probe: duration, rotation (iPhone clips are often 3840x2160 with rotation 90 = real portrait), audio present.
Do not edit screen recordings of other people's reels. Do not trust baked-in captions: if the clip already has captions, say so and ask for the raw.

## 2. Read the take like an editor
`.venv/bin/python $ENGINE/tools/take_report.py CLIP --out edits/<name>` prints numbered sentences with timestamps and flags retakes, fillers and pauses. The flags are heuristics: read it and decide yourself.
If a brand word or key word looks mis-heard, get a second opinion: `.venv/bin/python $ENGINE/tools/transcribe_words.py CLIP edits/<name>/words_medium.json medium.en` (about 1.5 GB download the first time; say so). If both models agree and the meaning is clear (e.g. "cream" for "clean"), use `fix` and flag it to him. Never silently change what he said.

## 3. Decide (this is the actual job)
Inputs to read first: `$HUB/copy-rules.md`, `$HUB/brands/<brand>/voice.md` (if it exists), `brands/<brand>/brand.md`.

**Infer, do not ask:** brand (trading words = trading, agency/software/clients = disojo, otherwise personal), goal (default: authority/follow), length (target 28-30 s of final reel, hard cap 35), format (9:16, 1080x1920).

**Edit decisions** (write them as source-time `keep` ranges):
- Keep the best complete attempt of each idea; usually the last take. Cut false starts, stalling, meta-talk ("I'll keep talking to reach a minute"), tangents.
- Start on the claim. Drop throat-clearing ("So you know how these days...") so the hook lands at frame 0.
- Order for retention: claim, promise, why, proof or turn, close. Close on his strongest line, not on a fade.
- Total spoken time after cuts should land near 26-28 s so pauses and the hook stay under 30.

**On-screen hook:** a paraphrase of his claim, not a copy of the line he speaks. 2-3 lines, max ~18 characters per line, one `*emphasis*`. It appears at 0.15 s and the emphasis wipes in at 1.2 s.

**Emphasis words:** 4-6 per reel, one per idea, spoken words only. Use `word@sourceTime` for words that repeat.

**Visual panels (the part that makes it worth watching):** 3-4 per 30 s, each tied to a line he says, placed where he says it. In the default `split` layout the hook and every card become a full-width panel on top with the speaker below (this is how the strongest short-form edits are built: 30-42% split, speaker always on screen). Types: `clean` (tangle resolves to a clean line), `balance` (one thing outweighs another), `loop` (A gets it, so B gets it), `rise` (line climbs). Rules: illustration only (no axes, no numbers unless he said them), text paraphrases his words, never in the hook window, never two at once, 2-3.3 s each. In `layout:"full"` they are compact cards top-left that must never cover the eyes (`side`/`y`). If no type fits an idea, add a new type (see Extending) instead of forcing a wrong one.

**Callouts:** a big number or fact pop only when he says the figure on camera.

**Guards (non-negotiable):** never invent claims, stats, results, names or offers. Trading: no advice, signals, returns, unverified P&L; flag anything borderline for SEBI. Disojo: no client names or figures without client OK, no prices. Mark every claim he makes about others (competitors) or promises (care, results) in the delivery note.

## 4. Write the plan, render
Plan file `$HUB/scripts/plan-<brand>-<name>.json`. Schema: `references/plan-schema.md`. Working example: `$ENGINE/templates/plan.example.json`.
```
.venv/bin/python $ENGINE/tools/edit_reel.py CLIP --out edits/<name> --plan scripts/plan-....json
```
About 3 minutes for a 90 s 4K source (decode dominates). The transcript is cached in `edits/<name>/transcript.json`, so re-renders skip transcription.
Options: `--no-sfx`, `--no-zoom`, `--no-clean`, `--caption-style pill`, `--music FILE --music-db -22`.

## 5. Verify before showing anything (mandatory)
```
.venv/bin/python $ENGINE/tools/verify_reel.py edits/<name>/reel.mp4 --timeline edits/<name>/timeline.json
```
Then **Read `edits/<name>/_verify.png`** and check with your own eyes (phone-size tiles; also open one panel full size): hook not cut off, captions legible on the brightest frames, no lone one-word chunks, cards not over the eyes and showing the right illustration, emphasis on the right words, caption text matches what he says. Hard checks in the script: 1080x1920, 30 fps, h264 High yuv420p, **BT.709 tv-range SDR tags**, <= 35 s, loudness -17..-14 LUFS, true peak <= -1 dBFS, frame 0 is a real image. Also confirm the log says `source transfer: ... -> tone-mapped to SDR BT.709` for iPhone clips. If anything fails or looks wrong, fix and re-render. Do not ship hoping.

## 6. Deliver
Send the mp4 with `SendUserFile` (display attach), then a short note (no more than ~10 lines):
1. The script you kept, in order, and what you cut and why (one line each).
2. What is on it (hook, highlighted words, cards, sound).
3. **Flags:** any word you had to correct, claims he should stand behind, blunt language vs brand voice, source audio problems (clipping, noise), anything not verified (audio by ear, real phone).
4. At most one question or next step. No menu of options.
Then save durable facts to memory only if something new was learned (new correction, new preference).

## Ask only if
- The brand is genuinely ambiguous and it changes the voice or compliance rules.
- A required fact is missing (he said "my results" but gave no verifiable number you would have to show).
- The clip has baked-in captions or is not his footage.
Everything else: decide, state your decision in the delivery note, and let him redirect.

## Defaults that came from him (do not re-ask)
- Host Grotesk is the reel font (final decision; do not suggest fonts). Large captions. Cream `#E6DDD6` on dark, marker highlight.
- Clean and simple, but **never captions-only**: highlight, hook panel, visual panels, pulses and sound must be there. He asked for engaging motion three times, then said the first designs were still mid: the v4 system (split panels, boxed captions, SDR colour, real SFX, calm springs) came from studying 20 motion repos (see `references/research-2026-10-13.md`).
- Disojo footer rules apply to sites, not reels. Posting, DMs and comments are never done for him.
- He logs in to accounts himself. Never type credentials.

## Look and sound rules (v4)
- Colour: iPhone footage is HDR (HLG). The engine tone-maps to SDR BT.709 (naive re-encode looked flat and gray). Never ship HDR-tagged 8-bit.
- Captions: one look, dark rounded box with a thin light edge, marker highlight on emphasis words; on the seam during panels.
- Motion identity: `$HUB/brands/disojo/MOTION.md` (springs with damping ratio >= 0.72, one accent, grain/vignette/drift, ghost of the start state, small thing alive in every hold).
- Sound: only real recorded CC0 effects from `engine/sfx` (never synthesise beeps), sparse (follow visible actions, not every cut), about 14 dB under the voice; credits are written to `sfx-credits.txt` next to the reel. Check the sources' current licence pages before a client or paid use.

## Extending
- New panel/card type: edit `$ENGINE/tools/timeline.html` (the `/* split-layout panels */` block for panels, `/* info cards */` for small cards). Test it in isolation with a small timeline spec rendered by `render-timeline.mjs`, composite the frames over a mid-tone backdrop and look. Follow `references/motion-rules.md`.
- The engine folder is the single source of truth; `$HUB/tools`, `design`, `assets`, `fonts` are links to it. Edit in the skill, not the hub.
- Do not push the skills repo without asking him (see `disojo-memory-backup`).

## Files
`engine/tools/`: edit_reel.py (pipeline), take_report.py, verify_reel.py, render-timeline.mjs + timeline.html (captions, hook, cards), render-carousel.mjs, transcribe_batch.py (voice profiles from many clips), transcribe_words.py.
`engine/templates/`: plan.example.json, brand.template.md, voice.example.md, carousel.example.json. `references/`: plan-schema.md, motion-rules.md, lessons.md. Sister skills: `disojo-carousel-studio`, `disojo-content-copy`.
