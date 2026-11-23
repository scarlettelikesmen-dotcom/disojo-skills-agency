# 24 Hilight (architecture and interior studio)
Scanned 2026-11-23. Sheet: `scan/hilight/sheet.jpg`.

## Stack
Hand-built (no framework flag) + GSAP full set (ScrollSmoother, Observer, Flip, Draggable, Inertia, SplitText, containerAnimation). WebGL: three.js (InstancedMesh, MeshPhysicalMaterial, EffectComposer) + Curtains.js + **VideoDecoder** (WebCodecs frame player, `home_h265.json` + `.bin` chunks). Unicorn Studio scene (`data-us-*`). Codec Pro. 49 MB.

## Idea
The studio's renders are the site. A frame-exact scroll film walks you through one of their interiors, then the work becomes a sketch line drawing, then the globe at night, then a "sun" with the industries orbiting.

## Moments
1. **Preloader video** (logo glint on black) then the hero interior.
2. **Scroll film through a room** (WebCodecs, H.265 chunks): the camera moves past the olive tree into the dining room and bedroom. Each scroll step is a frame. The second time we have seen this tech (Son Daven, Santal).
3. **Warm white page with a pencil sketch drawing itself** beside "We create private residences, hospitality spaces and large-scale developments". Sketch = the studio's own drawings.
4. **"One team" with a tilted image card** (Flip/3D) beside long process text.
5. **Project names in thin letter-spaced caps over full-bleed renders** (The Grand Atrium Mansion, Ritz-Carlton Masaya, The Monolith Penthouse).
6. **Night globe** (three.js, city lights) for "local climate, culture and craft shape every project".
7. **Industries as a solar system:** a glowing sun in the middle, white planet dots orbiting, the industry list on the right, a project thumbnail at the centre.
8. **Phone:** cream ground, a big outlined HILIGHT wordmark in the footer, and a **live CET clock "06:01"** next to the contact.
9. Bottom right frosted card on every screen (cookie notice + controls).

## What Disojo should take
- **WebCodecs scroll film** again: three sites now. It belongs in the kernel as a module (`data-frames`), not a one-off.
- **The studio's own sketch drawing itself** as the "about" moment, for any maker with drawings (architects, CTESCOA).
- **Footer clock** they do too, in their time zone, set large.

## Honest
Scanner only. The globe and orbit scenes look heavy; we did not measure frame rate. The renders are the client's; the craft we can copy is the frame player and the pacing.
