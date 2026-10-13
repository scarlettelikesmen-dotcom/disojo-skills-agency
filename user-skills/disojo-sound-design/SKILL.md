---
name: disojo-sound-design
description: Measured sound design for Disojo video - real recorded CC0 effects (never synthesised beeps), sparse cues that follow visible actions, a mix that sits about 14 dB under the voice, loudness and true-peak measured on the exported file, licence and credit handling, and music guidance. Use when adding or fixing sound effects, a music bed, loudness or "it sounds cheap" on any reel, promo or motion video, and when Tejjomay asks about audio.
---

# Disojo sound design

Claude cannot hear. So this skill never judges sound by feel: it measures, it keeps cues sparse, and it hands Tejjomay a few timestamps to check with headphones. **Never say "it sounds good".**
Method and kit credit: Barty-Bart/motion-graphics `sound-effects` (MIT; sounds CC0), itself based on Vox's sound-pass prompt; house numbers from the HyperFrames student-kit playbook.

## Rules
- **Never synthesise sounds in code** (sine/noise beeps sound cheap; v1-v3 of the reels did this and it was replaced). Use recorded files.
- **Library:** `~/.claude/skills/disojo-reel-studio/engine/sfx/` (6-file default kit + alternates, `manifest.json` lists creator, source URL and licence per file, `LICENSES.md`, `TOP-PICKS.md`). All bundled files are CC0. `edit_reel.py` places them automatically (`make_sfx`) and writes `sfx-credits.txt` next to the reel.
- **Cues follow visible actions, not every cut:** soft whoosh on a real spatial move or panel cut, pop as a drawing lands, dry tick on a highlighted word, one soft impact on the hero moment, paper/click for UI. Avoid laser zaps, pitch-drop plops, sci-fi chirps, a whoosh on every cut. Vary the files for repeated cues so a list does not sound like a percussion loop.
- **Priority:** voice > effects > music. Effects bus about 14 dB under the voice peaks (current engine: bus 0.24 x per-sound 0.45-0.55). A music bed sits about 11 dB under the voice (range 9-14) and ducks under speech (sidechain); first 1-2 s often quieter.
- **Master:** about -16 LUFS integrated for reels (-14 is also seen in the references), true peak <= -1.5 dBTP (the verifier fails above -1.0). **Measure the exported MP4**, never the intermediate WAV, on stereo; also read the mono fold-down (phone speakers are mono). `python $ENGINE/tools/measure_audio.py FILE.mp4`.
- Never fade the last spoken word.

## Workflow
1. Read the composition's own timeline for cues (panel starts, highlight times, hook claim); do not detect by ear.
2. Build cues, place one file per cue, mix, export, **measure**, adjust gain, export and measure again.
3. Give Tejjomay the 5 riskiest timestamps (densest cluster, longest effect, the impact, the first whoosh, the end) to check on headphones, and say plainly the numbers are measured but the taste is his.

## Licences (do this before any paid or client use)
Only CC0 and sources whose terms you have just read count as safe. Sources change terms: before final export, open the current licence page of **each source actually used** (Freesound sound page must still say Creative Commons 0; Kenney packs are CC0; Mixkit allows video use but forbids redistributing files, so never bundle Mixkit files) and confirm the **use case** (Instagram/YouTube/TikTok organic, ads, client work). Report one line per source ("checked today: unchanged, Instagram allowed"). If a licence is unknown, name the exact sound and do not publish until checked. `sfx-credits.txt` is paste-ready credit text and proof of source if a platform flags audio.

## Music
Tejjomay supplies a track, or choose from `references/MUSIC.md` (Mixkit stock music, copied from the sound-effects skill; terms as of 13 Oct 2026, re-check). Download into the project at runtime, never into a skill or repo. Record title, artist, link and licence next to the reel. Instagram's in-app licensed audio is added at upload: for those reels leave a clean voice track. Beat-synced cuts (find the drop by energy, not by an auto beat grid; auto grids lock onto the off-beat) are **not built yet**.

## Files
`engine/tools/measure_audio.py`, `engine/tools/edit_reel.py` (`make_sfx`, `--music`, `--music-db`, `--no-sfx`), `engine/sfx/`, `references/MUSIC.md`.
