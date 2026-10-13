# Lessons (2026-10-13 build session). Read before debugging.

## Environment
- This Mac's ffmpeg has **no libass/drawtext/subtitles**. Captions and graphics are Chrome-rendered PNG sequences overlaid with `overlay`. Do not try `subtitles=` or `drawtext=`.
- faster-whisper's own audio decode breaks on Python 3.14 (PyAV mismatch). Audio is piped from ffmpeg as float32 numpy instead. Do not "simplify" this.
- Chrome path is hard-coded (`/Applications/Google Chrome.app`). Paths with spaces need `pathToFileURL`.
- 4K decode dominates render time (~3 min per 90 s source). Transcripts are cached per output folder.
- `rm` with a shell variable is blocked by the safety hook; use literal paths or avoid deleting.

## Transcription
- Whisper small AND medium.en both heard "clean" as "cream" in his voice. Use plan `fix` and flag it; never assume silently. Hinglish/Hindi is untested.
- Verify uncertain words by listening is impossible for Claude: say so.
- Retake detection is a heuristic (4-word fuzzy match, or 3 after a pause). It misses messy multi-take runs; the plan's `keep` is the reliable path.

## Edit quality
- Raw takes contain stalling and meta-talk to hit a duration ("I'll keep talking to reach a minute"): cut it, do not caption it.
- Captions that live only as long as they are spoken feel like they "go out after one second": hold each chunk until the next starts, never leave one-word chunks, never cross sentence or cut boundaries.
- Whisper capitalises mid-sentence after pauses; the pipeline lower-cases mid-sentence words (keeps I, I'm, Disojo...).
- A captions-only edit is not acceptable to him. Cards + pulses + highlights are the minimum.
- Cards must not cover the eyes. Illustrations must be metaphors of what he said, never invented data.

## Source footage
- iPhone 4K clips report 3840x2160 with rotation 90: real size is 2160x3840. The pipeline reads the rotation.
- Old exports in `~/Desktop/PERSONAL BRAND REELS` have captions baked in; `LEADVIX REELS` is AI-generated; `~/Downloads/kit *.MP4` are screen recordings of other people's reels. Do not use them as footage.
- Source peak near 0 dBFS may mean clipping: report it, do not hide it.

## Audio
- Voice clean: highpass 80 Hz, afftdn, EQ, de-esser, compressor, then loudnorm -16 LUFS. Measured gains are reported by the script. Sound effects are synthesised (pop/swipe/whoosh), peak ~-25 dBFS; he has not yet judged how they sound.
- Whisper can stretch a short word across the pause before it (IMG_4112: "to" spans 1.9-3.8 s). The engine clamps words >1.0 s and <=4 letters to a 0.4 s onset. If a caption starts one word late, check the word timings in `edits/<name>/transcript.json` and widen the plan's `keep` start.
