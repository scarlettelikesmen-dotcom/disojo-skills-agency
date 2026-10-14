# First batch of drafts: @codewithabel
DRAFTS. Each is built from things that are true and documented in this hub. Confirm any marked claim. Visual: dev-log identity (`../visual-identity.md`, stills only so far).

## Reel 1: "DAY 01 / I built a reel editor out of ffmpeg and Python" (~35 s)
Hook (frame 0, spoken): "I built a reel editor out of ffmpeg and Python." Tag `DAY 01`.
Beats:
1. Result first (0-4 s): split screen: raw clip on the left, finished reel on the right, hook text.
2. (4-12 s) "One prompt and a clip go in. It transcribes, cuts the dead air, builds captions and panels, cleans the audio, and exports a reel." Screen recording of the terminal running the pipeline.
3. (12-24 s) What's inside, 3 items, one line each: transcription runs locally; captions are rendered frame by frame in Chrome; audio is measured, not guessed.
4. (24-32 s) "Built with Claude Code. I decide what's good, it writes the plumbing." (disclosure)
5. (32-35 s) "Day 2: what broke first."
Claims to confirm: "runs locally" (Whisper does; verify no cloud calls in the final pipeline), "measured" (loudness is measured; sound taste is not).

## Reel 2: "DAY 02 / My iPhone clips looked gray" (~30 s)
Hook: "My iPhone videos looked gray and I didn't know why."
Beats: (1) side by side gray vs fixed frame; (2) "iPhone records HDR. Re-encode it flat and the colours wash out."; (3) the fix in plain words: undo the curve, roll highlights off softly, convert the colour gamut; (4) show the 6-line core (see the code carousel sample); (5) "One check caught it: my captions were the wrong colour too." (confirm: the BT.601 overlay issue is real, from the build log) -> follow.
Claims to confirm: none numeric. The 280 nit / 0.85 saturation values were chosen by eye: say "I tuned it by eye".

## Carousel 1: "Why my iPhone clips looked gray" (sample rendered in `_visual/code-carousel-2.png`)
Real code, real fix. 6 slides: problem, why, the curve, the fix, before/after, what I'd check next time.

## Reel 3: "DAY 03 / ffmpeg can't draw text on my Mac" (~30 s)
Hook: "ffmpeg can't draw text on my Mac. So I made Chrome do it."
Beats: the error / the missing filter; the idea: render captions as images with a browser, overlay them; the cost (slower); the bonus (real design control); show a caption animating; "Day 4: the bug where captions vanished early."

## Reel 4 (optional): "DAY 04 / One line made my captions disappear" (~25 s)
Bug autopsy: the easing applied to the whole timeline squashed the hold and exit. Show the broken then fixed caption.

## Production notes
Screen recordings with a visible cursor, zoomed to the relevant lines (never a whole page shrunk to phone size). No secrets or private paths on screen. Face-cam at the start and end only.
