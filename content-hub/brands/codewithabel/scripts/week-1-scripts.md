# codewithabel: week 1 scripts (drafts; true material; nothing posted)
## A1 (Day 01): "I built a reel editor out of ffmpeg and Python" (~35 s)
Hook: "I built a reel editor out of ffmpeg and Python." (tag `DAY 01`)
1. Result first: raw clip beside finished reel.
2. "One prompt and a clip go in. It transcribes, cuts the dead air, builds captions and panels, cleans the audio, exports a reel."
3. "Transcription runs on my machine. Captions are drawn frame by frame by a browser. Audio is measured, not guessed." (confirm "runs on my machine" for the final pipeline)
4. "I built it with Claude Code. I decide what's good. It writes the plumbing."
5. "Day two: why my videos looked gray."
Visuals: terminal recording of the pipeline; split view.
## A2 (Day 02): "My iPhone videos looked gray" (~30 s)
Hook: "My iPhone videos looked gray, and I didn't know why."
1. Side by side, gray vs fixed. 2. "iPhone records HDR. Re-encode it flat and the colours wash out." 3. Fix in plain words: undo the curve, roll highlights off softly, convert the gamut. 4. "I tuned the numbers by eye." 5. "Tomorrow: ffmpeg can't draw text on my machine."
## C1: "Why iPhone clips look gray" (7 slides)
1 cover; 2 the symptom (flat frames); 3 why (HDR HLG, 10-bit, BT.2020); 4 the three steps; 5 the code (real snippet from `sdr_chain`); 6 before/after; 7 CTA: "Follow for Day 03. Save this if you edit iPhone video." Real code only.
## B3 / B1 / B6 specs (silent visuals; audio in-app)
Text on screen over a slow terminal/code scroll; 8-12 s; one take per reel; cover = the take.
