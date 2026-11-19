# How the best brand reels are edited (2026-11-18)
Studied frame by frame (24 frames per reel laid side by side): Koto x Stack Overflow (28 s, 99k), ManvsMachine x OpenAI dots (30 s, 58k), Le Labo refill (23 s, 156k), nonstop Riverflow (11 s, 9.7k, the counter-example), plus the openings of Allan Peters, Jack Watson, Hey, Dumbar, COLLINS, BUCK, Draplin. Technique sources: Nikon (whip pans, speed ramps), Nice Moves (beat vs internal sync), CapCut beat-sync guide (vendor).

## What they actually do
| Move | Who | How it is built |
|---|---|---|
| **A new picture every ~1.2 s, then a hold for the payoff** | Koto | 24 frames over 28 s show ~20 different shots; the logo-on-monitor end holds ~3 s |
| **Macro tease, then reveal** | ManvsMachine | 20 s of extreme close-ups you cannot name (fur, a bump, glasses rim), then pull out: the characters, the app, the logo. Curiosity holds the watch |
| **Scale ladder** | Le Labo, MvsM | macro texture, then hands at mid, then the object whole, then the logo. Never two shots in a row at the same scale |
| **Hands doing the ritual** | Le Labo, Allan Peters, nonstop Bloom | real hands pour, press a label on, move cut paper. Tactile, slow, satisfying |
| **Construction shown** | Koto, nonstop | the letterform drawn with bezier handles; the brand idea typed as code; paper pieces assembling the mark |
| **One colour world** | Koto (orange/ink), MvsM (black then white) | every shot lives in the brand palette, so 20 shots read as one film |
| **Kinetic type as a shot of its own** | Koto | typed code that becomes the brand line; a highlight box landing on "Always in build" |
| **The brand in the world** | Koto, Allan | keycaps, posters, a monitor in a room, a truck billboard: proof it is real |
| **Internal sync** | all | the visual impact (stamp, cap click, cut) lands on a sound hit, not just on the musical beat |
| **Clean loop / clean end** | MvsM, Le Labo | ends on the logo on a plain ground; no "follow us" card |
| What fails | Riverflow | a still bento where small parts change: pretty, 24 sends. Nothing happens to look at |

Camera grammar for real or CG footage (Nikon, Nice Moves): whip pan out and into the next shot in the same direction and speed, cut at the blur; speed ramp into an action, hit it at normal speed; match cut on the same shape and position; hard cuts in fast sections, soft only in slow ones; effects only where the music changes intensity, or it reads as noise.

## Sound is half of it
Foley carries the "beautiful": glass clink, cap click, stamp thud, paper slide, the oil roller. Music gives the grid; foley gives the hits (internal sync). Trending audio is added by Tejjo in-app, so the foley has to be in our export and the cut has to sit on the track's tempo (Tejjo sends the track or its BPM first).

## How we make this without a camera (our stack)
| Need | Tool we have | Notes |
|---|---|---|
| The bottle at any scale, macro glass, oil moving, label exact, camera moves, speed ramps, motion blur | **Blender** (MCP connected) with the real label art as texture | exact labels (Flow got the mark wrong on every bottle), unlimited takes, any lens. Method: skill disojo-packaged-product-3d + disojo-3d-lookdev |
| Hands: stamping the box, pressing a label | **Flow video (Veo)** from our stills, or Tejjo films real hands if the client sends bottles | AI hands are the riskiest shot: generate several, keep only clean ones |
| Kinetic type, mask wipes, the construction of the mark, the number count, the grid of the system | **Remotion** (`content-hub/remotion-lab`) | all graphics, cuts and timing in one scene, frame-exact on the beat |
| The live store | screen recording of postcardsperfumes.in at 60 fps (Chrome), dropped into a 3D phone or a flat device | real, not mocked |
| Foley | CC0 kit we already use, plus recorded clinks if Tejjo has any glass | measured levels, never judged by ear |

Note: the locked Disojo edit (skill disojo-editing-locked) still uses the old fonts and colours (Host Grotesk, #131311/#E6DDD6). Any Disojo frame in the reel uses the live brand: hoflik wordmark, Bricolage Grotesque, graphite (memory feedback-content-current-brand).
