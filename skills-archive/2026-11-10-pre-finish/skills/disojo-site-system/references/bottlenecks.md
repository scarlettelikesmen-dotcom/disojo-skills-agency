# Bottlenecks: every time this went wrong, and what stops it now

Read before starting any site or identity. Each row is a real rejection or a real wasted day. "Stopped by" says honestly whether a tool blocks the mistake or whether only this text warns about it. Text alone has failed before, so a text-only row is a known weak spot. When a new rejection happens, add a row the same day.

## Design
| When, who | What happened | Real cause | Stopped by |
|---|---|---|---|
| 2026-10-27 Mentable v1 | Called "disgusting". Generic dark-mint fintech template. Lighthouse 97 proved nothing. | Planned in 2 minutes, built in 10, looked at the references for about 1 minute, after building. | Idea pick: **hook blocks design files**. Studying references first: `teardown.cjs` exists, **text only**, nothing forces it. |
| 2026-11-03 VÆL | Sent as "finished and audited". Far under the references: dark-luxury template, no concept, timid type. | Built from the starter, took gate passes as quality. | Side-by-side sheet: **hook blocks sending screenshots from a gated project without a newer sheet**. It covers SendUserFile only, not a link pasted in chat. Calling gates "audited": **text only**. |
| 2026-11-03 VÆL | The message carried a URL that was someone else's site. Tejjo lost trust. | Sent a link without opening it. | **Text only:** open every link and check its page title before sending. |
| 2026-11-03 VÆL 3D | Failed three times: rendered stills, flat untextured GLB, then "needs a 3D artist". | No method; gave up and proposed hiring. | Skill `disojo-realtime-3d-product`: reference sheet, baked maps, raking light. **Text only.** No hiring detours. |
| 2026-11-08/09 Kiran Roy | Three rejections. "Same exact bullshit font, same exact double CTA, subtext and main text." | One layout reskinned, nothing from Kiran's truth. The skill itself taught a hero formula. | Formula removed. Idea pick: **hook**. Inter, Fraunces, Instrument Serif and one-word h1 accents: **gate fails**. Two buttons in the first screen, and headline + sentence + button on a photo: **gate fails** (added 2026-11-10). |
| 2026-11-09 Kiran Roy | Claimed design-v1 "holds beside the references" and treated 0 FAIL as a milestone. | Scored my own work. | `side_by_side` no longer scores. Tejjo decides who wins. Claiming it anyway: **text only**. |
| 2026-11-08 Kiran Roy | A screenshot mode hid a bug where reveals never fired on clip-path-hidden elements. | Tested a special mode, not the page. | **Text only:** scroll-test the live page with a real wheel. |
| 2026-11-01 Disojo redo | Three directions passed every check and none landed. | Composition: we ran 135-151 words a screen against about 50, and 0-2 big images in 8 screens against 3-8. | Under 3 in 8 screens with a big image: **gate fails**. Words and text sizes: **gate warns**. |
| Earlier, Ascender v1 | Fake editor and timecodes decorating the page. | A metaphor about the craft, instead of one true thing. | Name test in `idea.md`: **text only**, then Tejjo's pick. |
| Earlier, a client photo | Added a blurred background fill nobody asked for. | Creative liberty. | **Text only:** offer options in words. |
| 2026-11-08 rule | Concepts delivered as one long page. | One-pager habit. | **Deploy script refuses under 3 pages** unless `ONE_PAGE_OK` holds Tejjo's words (added 2026-11-09). Interaction layer (dead CTAs): **text only**. |
| 2026-11-09 rule | Loose index.html concepts. | Fast to make, never production. | **Hook denies .html, gate fails non-Astro, deploy refuses.** |
| 2026-11-09 rule | 3D offered to brands that do not need it. | Treated 3D as the premium signal. | **Gate fails 3D outside the Product type** unless Tejjo's words are recorded (added 2026-11-09). |

## Identity
| When, who | What happened | Real cause | Stopped by |
|---|---|---|---|
| 2026-10-21 Disojo logo | Three stock lowercase fonts with one tweaked letter: "disgusting". | Literal UI clip-art (a switch, a chart, a block). Checked if it was readable, not if anyone would want it. | **Text only** (`feedback-logo-no-font-tweaks`): construct letters, 20+ rough marks first, compare with references at the same size. |
| 2026-11-02 Disojo logo | Rounds 1-4: "nothing did I like even slightly". | Prompts for many worlds, no diagnosis. Tejjo later said only one part of the live logo was the problem. | **Text only.** Ask which part is wrong before starting over. Of 9 round-6 ideas one landed. |
| Limit | Hand lettering is beyond code drawing. | Tool limit. | Say so up front. |

## Material
| When, who | What happened | Real cause | Stopped by |
|---|---|---|---|
| 2026-11-02 KDC | One large real photo existed, so the page could not carry images. Gap list: shoot, vector logo, nine video links, badge text. | Found out at build, not at signing. | Type skill "what to collect" (`disojo-type-*`). Enforcing it at signing is **not built yet**: goes into `disojo-visual-identity`. |
| 2026-11-02 KDC | A sign-up form that creates app accounts nearly got rebuilt. | Crawled like any other page. | `lessons.md`: link to the live form. **Text only.** |
| 2026-11-08 Kiran Roy | Only 3 book renders and 5 casual photos for a paid order. | Scope agreed before material was checked. | Honest stop in `idea.md`, **text only**. Same fix as KDC. |

## Research
| When, who | What happened | Real cause | Stopped by |
|---|---|---|---|
| Every project | Tejjo had to ask for references to be researched again. | Lessons lived in project folders and the scratchpad. | Benchmarks per type, inside the skills. **In progress.** Screens saved in `research/awwwards-2026-11-09/`. |
| 2026-11-09 | Reported sites as "did not load". 11 of them opened fine. | Automated browser, short waits. A hidden browser pane also slows heavy loaders to about a minute. | Method: wait, use a normal click by element, reject cookies, retry in the in-app browser. A real security check or block gets reported by name; I do not click through those. |
