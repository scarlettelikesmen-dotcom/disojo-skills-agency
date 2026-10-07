# Prompts that worked (and what failed)

Generation tool used: Gemini web app, **Omni 1.1 Flash** (video) and Gemini image generation for stills. The Veo API
returned 429 (billing not enabled), so everything was done by hand in the Gemini UI. Output carries a visible sparkle
watermark (cropped out in the frame script) and an invisible SynthID mark that cannot be removed. Tell the client.

## Hero turntable video (start/end-frame mode)

Setup: start-to-end frame interpolation with the SAME straight-on bottle image as start and end frame (pins first and last
frame so the loop is clean and scale cannot drift). 8-10 s, 1080p, audio off. Reference = a straight-on shot of the real bottle.

```
Subject: the exact 10 ml perfume roll-on bottle from the reference image — [CAP DESCRIPTION], clear glass with [OIL COLOUR] oil, [LABEL DESCRIPTION] reading "[BRAND] / [PRODUCT NAME]". It stands upright on a matte surface.

Action: the bottle rotates one complete 360-degree turn on its own vertical axis at a constant, even speed, like a product turntable, ending in exactly the same position it started.

Camera: locked-off static camera. Fixed focal length, fixed distance, fixed framing, eye level. The camera does not move, zoom, orbit, or refocus at any point.

Preserve: bottle size, proportions, and position in frame stay identical in every frame. The label text stays small fine print at its true real-world scale, the same size relative to the bottle as in the reference image — never enlarged. Label wording, font, and layout match the reference exactly.

Look: soft warm studio key light from the left, gentle rim light, plain warm cream background, realistic glass reflections, photorealistic product photography, natural and clean.

Sound: silent.

Do not: add glitter, sparkles, dust, particles, lens flares, light leaks, smoke, or mist. Do not morph, resize, or change the bottle shape. Do not add extra text, logos, props, hands, or people. No camera movement, no cuts.
```

What went wrong the first time (all avoidable): asked for dust motes (read as glitter), a camera orbit (changes the label's apparent
size between frames), and never stated the label scale. If the label still renders oversized, drop the label wording from the prompt
and let the reference image carry the text. Spelled-out text gets enlarged.

KNOWN WEAK POINT of the Postcards hero: the AI video garbled the label ("PARFUNES"/"PAKPUMES") and rendered a ribbed cream cap that
does not match the real smooth-capped bottle. Always compare frame 1, a side frame and the back against the real product before
showing the client, and say so if it does not match. Regenerate from the best real reference you can get.

## Product stills for cards, popup and cut-outs

One prompt per bottle, change only the bracketed parts. Attach the previous good result as a reference each time so cap, label
scale and framing stay consistent. 2K, same aspect for all.

```
Studio product photo of a single 10 ml glass roll-on perfume bottle, standing upright, shot perfectly straight-on at label height, centred, the whole bottle in frame with generous space above the cap and below the base.

Bottle: smooth glossy black cap (no ribbing), clear glass, nearly clear oil. [LABEL COLOUR/TEXTURE] label wrapped around the middle. Label text, printed vertically, exactly:
"[BRAND]" / "— PERFUMES —" / "[SCENT NAME]" / "•" / "[NOTES]" / "Perfume Oil" / "10 ml | 0.34 fl oz"

Background: plain seamless warm off-white backdrop and surface, soft even daylight from the left, a gentle soft shadow only. No props, no stones, no extra objects, no particles.
```

Rules learned:
- Use the client's REAL label wording (take it from a photo of the real shelf). The model mangles the notes line most often; read it on every result.
- Plain backdrop only. Scene backgrounds (stone blocks etc.) cannot be cut out cleanly because clear glass shows the scene through it.
- A caps mismatch between bottles shows immediately in a row. Fix by regenerating, not by editing.
- Run `scripts/cutout.py` (wheel) and `scripts/card_crop.py` (cards/popup). Check the cut-out on the tint colour it will sit on.
