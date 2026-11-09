# First-look review (do it on every screen the gate writes, desktop and phone)

The gate proves a page is not broken and sits in the reference band. It cannot tell if it is good. Open each screen file and answer these, in this order. Any "no" is a fix before showing Tejjomay. Write the answers in the report, one line per screen that failed.

## Per screen
0. **The idea.** Is this screen the idea Tejjomay picked in `brief/IDEA.md`? Would it survive with the real thing removed? It must not.
1. **One thing to look at.** Is there a single focal point (one photo, or one line of type at scale)? Two things fighting = fail.
2. **Something real.** Is the image a photograph of a real place, person or object, or type at viewport scale? A lone UI screenshot carrying a screen = fail (pair it with a photo screen before or after).
3. **Swap test.** Put any other studio's logo on this screen. If it still works, the copy or image is generic: make it specific (a named client, a verified number, a real place).
4. **Air.** Nothing touches the edges or another block without a reason; margins are from the spacing scale; text columns 420-620px.
5. **Hierarchy in one glance.** Squint: three levels, not six. Anything from `defaults-to-avoid.md` on the screen needs a reason from the idea.
6. **No device for its own sake.** Badges, pills, icon rows, gradients, glows, marquees, cards-in-cards, emoji: each must have a job you can name. Default is none.
7. **Same hand.** Every photo in the same grade; every button the same button; one radius family.
8. **Copy.** Short declarative lines, specific nouns, only verified numbers, no em dashes, no hype words.

## Per page
9. **Rhythm.** Scroll the strip of screens: does it alternate (photo screen, type screen, proof screen) or is it the same block repeated?
10. **The gimmick count.** At most one signature move per page (the "concept"). Three directions each with a trick failed on 2026-11-01, so each of the three required directions carries at most one.
11. **Side by side.** Run `scripts/side_by_side.cjs` against the project's references (`high-ticket-flagship-3d/references/03-reference-sites.md`). Fill in every row of `scores.md`: the one thing they do that we do not. Fix it or list it in the first line to Tejjomay. I never score who wins: Tejjomay decides.
12. **Phone.** Same system scaled, not cramped: display 28-44px, labels 12px+, one column, images keep their crop on the subject.

## Before showing
- All gate FAILs fixed, WARNs explained in one line each. Gate passes are never described as "audited" or "premium".
- The side-by-side sheet goes with the screens.
- Send Tejjomay the screens, not a description. Say what is placeholder, AI-generated, stock or untested (real phones and Safari).
