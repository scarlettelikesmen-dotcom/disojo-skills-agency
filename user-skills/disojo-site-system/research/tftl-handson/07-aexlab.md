# AEXLAB (aexlab.com), scanned 2026-11-23

A VR game studio (their game: Vail VR). Study only.

## Stack
Nuxt. three.js (GLTF + Draco, MeshPhysicalMaterial, an EXR environment, InstancedMesh, custom shaders), GSAP with Observer, ScrollSmoother, ScrambleText, DrawSVG, MotionPath, SplitText. Howler for sound (`data-sound-point`, `data-sound-default`), Lottie, a Miami clock (`useMiamiClock`), a preloader video. 19 MB. One face: Monument Mono, plus a condensed display on phone.

## The idea
**You put the headset on.** The intro is a 3D VR headset coming at the camera, lenses glowing, until you are inside it; the site is then what you see in the headset: a dark room with a strip of video screens.

## Moments
1. Headset intro (live 3D, physical material, studio HDR light), then the name over footage.
2. The home does not scroll: the wheel steps a horizontal strip of video cards (GSAP Observer), the centre one large, the name fixed over it. Scroll hijacked on purpose.
3. Hover shuffle on text (`data-hover-shuffle`: letters scramble then settle, ScrambleText), sounds on hover points.
4. Phone is a different site: sage paper ground, condensed caps "Collective intelligence is key to our success" with outlined twins, mono index lists in black label bars, an ESRB "Teen" rating badge in the footer. A real object from the business (the rating label) in the footer.
5. Miami clock in the header.

## What Disojo should take
- Intro = the visitor puts on the client's object (headset, glasses, helmet) and the site is the view through it.
- Text scramble on hover for a tech subject; sound as part of the interface when the product is sound or games.
- The phone layout can be its own design, not the desktop squeezed.

## Honest
Scan stopped after 3 wheel stops because the home is a stepped carousel; intro and phone frames seen; code read from bundle names. Not walked by hand.
