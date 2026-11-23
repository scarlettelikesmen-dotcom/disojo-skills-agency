---
name: work-summary-2026-11-23
description: 2026-11-23 TFTL full sweep done (51 notes), kernel got the TFTL skeleton, next is the page-close moment
metadata:
  type: project
---
- Kernel (`~/.claude/skills/disojo-site-system/kernel/`) upgraded with the TFTL skeleton: registry `use()`, modules data-ink, data-parallax, ground-follow header, hide-on-scroll header, data-progress nav, favicon blink; turn and focus reveals; eases write/dive. Lab on :4790 (launch config kernel-lab).
- Tejjo objected to using only ERA as reference ("look at everything across tftl not just endings"). Did the full sweep: `research/tftl-handson/` notes 01-51, scanner `scan.cjs`, sheets, README catalogue with 36 moments and five page-close families; `closes-1.jpg`, `closes-2.jpg`.
- Two code kits confirmed: Webflow+Slater (ERA, Son Daven, Jesko, Lenval; same eases) and Nuxt+GSAP (most; default ease .24,1,.36,1). WebCodecs scroll film on 4 sites, should become a kernel module.
- Next: Tejjo picks which page-close family to build first as a kernel module, shown beside the originals. Then text moment, then object intro on a real client. Never build a moment from one reference.

## Afternoon: TFTL code pass (Tejjo: "okay do it")
- Shipped JS, CSS and Lottie saved for 19 sites in `$SK/research/tftl-handson/code/<slug>/` (`grab.cjs`), searched with `ctx.py`.
- Written with exact numbers: `closes-code.md` (19 page closes, four families plus Fame's "come home"), `frame-player-code.md` (WebCodecs `.af` scroll film, Lenval and Hilight), `loaders-code.md` (fake progress on a stalling ease, short on return, the loader becomes the hero; ERA, Lenval, Fame, ADA).
- Biggest find: Fame's logo starts in the loader, sits bottom right on every screen, then rises and grows 4x into the footer's hanging "EF" sign (confirmed in `moments/fame-estate-close.jpg`).
- Skills now point here: `websites/SKILL.md` (taste, study step, techniques table), `disojo-site-system/SKILL.md` files list, kernel README.
- Tejjo: "whats the point if its not stored in memory and notes, and screenshots". So every code finding gets its own frames: `moments.cjs <slug> <url> loader|close` (closes: wheel to the bottom, step up, reverse order), `strip.py` makes `moments/<slug>-<kind>.jpg`.
- Next, after Tejjo's go: build the kernel `data-close` module (frame, catch-up first), shown beside the originals.
- Evening: moment strips captured for 13 closes + 4 loaders (sheets `moments/overview-closes.jpg`, `overview-loaders.jpg`, sent). Hilight and Face to Face closes not captured (scroll taken over). Built kernel `data-close` frame + catch-up with lab pages /close-frame/, /close-catch/; work at 1512. Then: 390 checked, side by side made, floor + last-word + dim built; all four sent to Tejjo for a verdict.

## Late evening: "do all the not done"
- Kit code read (menus, page changes, hovers, reveals, cursor) in `tftl-handson/kit-code.md`, with menu and page-change sheets.
- All nine loaders and all closes now have pictures (overview sheets in `tftl-handson/moments/`). Hilight and Face to Face closes caught with script scroll.
- Hand visits: HLE, IQOSA (the scan was wrong, the haze was the cookie banner), Vurrle, Shelter desktop (correct URL the-shelter.com.au). Five dead sites rechecked, still dead.
- Built: `kernel/tools/make-film.cjs` + kernel `data-film` + lab `/film/` (works in Chromium at 1512; Safari, phones untested).
- Not caught: ERA, Lenval, Fame menus; Fame page change.
- Still waiting on Tejjo: verdict on the four data-close settings before the loader module.

## 2026-11-23 night: systems for the signed client
- Kernel merged into the starter (sync_kernel.sh, new_site.sh pulls it). Verified build + reveals + Barba on /library/.
- deploy_demo.sh false-200 fixed (demo_check.sh).
- Tejjo: every client gets its own moments; kernel = mechanisms. Rule in websites/SKILL.md step 3 and [[feedback-moments-per-client]].
- Tejjo has a signed client, asked for a week to optimise systems.
