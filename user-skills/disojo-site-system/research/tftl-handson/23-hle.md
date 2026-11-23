# 23 HLE (talent and content company)
Scanned 2026-11-23. Sheet: `scan/hle/sheet.jpg`. Wheel blocked on desktop (page height 864, Observer-driven); only the intro was caught. Needs a hand visit.

## Stack
Nuxt 2 (Vue) + GSAP Observer only. three.js with Draco: `tv1.glb` (a TV set), `tv_square.mp4` played on its screen, Lottie `logo.json` and `loader.json`. PP Supply Mono + PP Supply Sans. 7.8 MB.

## Idea
The company sits "at the axis of talent and content", so the site is a single old television on a shelf. The intro types the sentence and keeps retyping its last word: "across television", "across music", "across film"...

## Moments
1. **Typed statement with a cycling last word.** Black screen, a mono-ish sans, cursor bar, the sentence types out then backspaces only the last word and types the next medium.
2. **A 3D TV on a grey shelf** (phone frames): the screen plays their video, a cable runs to a little "Switch Day 'N' Night" control. The theme switch is part of the object.
3. **Minimal chrome:** About us, Contacts, FAQ as small mono links top left, "Sound" toggle top right, "Scroll Down" in the middle bottom.
4. `animateFooter` exists in the code; not seen.

## What Disojo should take
- **The one object that IS the business** (a TV for a media company) as the whole home, with the site's controls (theme, sound) built into it as real knobs.
- **A typed sentence that swaps its last word** to list what they do, instead of a services grid.

## Hand visit (2026-11-23, in-app browser 1512x864, frames `scan/hle/hand/`)
The whole site is one screen; the wheel drives a timeline (GSAP Observer), the page never scrolls.
1. Black, then the typed sentence on a dark grid with mono labels "[1] Develop / [2] Submit / [3] Creative Review" and a small blue square: the sentence is shown on the TV screen in close-up.
2. Wheel: the camera pulls back and the screen becomes the 3D monitor on a shelf, with nav top left, Sound top right, a live clock bottom right, "Switch Day 'N' Night" on the cable.
3. More wheel: the camera pushes back into the screen until it goes white, then a new scene: a big dark circle (a record or lens) with "Helping people get their idea seen" typed in large mono letters across it.
4. Last stop: a thin outlined box with a short paragraph, a pill "Get In Touch", Privacy policy and Terms bottom left, "The First The Last" bottom right. That is the close: the same circle, the sentence, one action.
So the structure is: in through the screen, out of the screen, one statement, one action. Four stops, no sections.

## Honest
Read by hand only, not in code. Day/night switch not tried (it is on the 3D cable, not a DOM control). Phone not re-checked.
