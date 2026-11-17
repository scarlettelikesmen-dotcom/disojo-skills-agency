---
name: websites
description: START HERE for any Disojo website - a client's, a redo, Disojo's own, or a product site. How Disojo makes sites that sit beside the approved benchmarks - truth and material first, hands-on study, the idea in words, the first screen, then the build in pieces, always looked at in a real browser. Covers scroll-driven, photo-led, minimal type-led and WebGL / Three.js sites as techniques chosen after the idea. Built 2026-11-17 from Tejjo's real verdicts. Uses disojo-site-system's scripts, starter, kernel and research as its toolbox. In proof; the old skill stays until this one has proven itself on a real job.
---

# Websites

The job: a site a visitor remembers, made from one real thing only this client has, carried with care in every detail.

Read first, every time: `taste-library/websites.md`, then open two or three of the approved sites in the browser and use them for a few minutes. For a whole identity job, `identity-design` comes first and the site starts from the identity.

Toolbox (do not rebuild what is here): `SK=~/.claude/skills/disojo-site-system`. Scripts in `$SK/scripts/` run with `NODE_PATH=$HOME/.disojo-tools/node_modules`.

## What good has looked like
- **The eight approved sites** (Shortscut, Monolog, Disojo, OH Architecture, Supersolid, Your Creative, ERA Residence, The First The Last). Measured: one huge visual from the subject, about 50 words and 4 text sizes a screen, a big photograph on 3 to 8 of the first 8 screens, one confident line in the client's words, an ordinary structure, and care on every detail.
- **ERA Residence**, Tejjo's favourite: the page opens like a door, day and night swap the photo, the oval rises like a window. Every moment does something from the subject.
- **Ray Corral**: one heavy grotesk, a real portrait, a huge name, a flat ground. "This just screams that it's not AI."
- **Ours that landed**: the Monolog button curve ("there it is, finally"), the window scroll on CTESCOA ("exactly what I wanted"), the Kiran headstock nav, VÆL's live 3D bottle after real study ("soooooo much better").
- **TFTL, all 96 projects**: no template, zero shared code, every look from the client's own subject. Tejjo: "don't make it a stuck system".

## What failed, and why
- Building fast from the starter and calling gate passes quality (Mentable v1 "disgusting", VÆL "very okay, not good").
- One layout reskinned (Kiran: "same exact bullshit font, same exact double CTA, subtext and main text").
- Props on a template instead of structure, the subject small (Postcards: "usual ai slop").
- A clever device that dropped the basics: what this is, who you deal with, what to do (CSK: "What does LM versus MA even mean?").
- Quantity over quality (CSK ten layouts: "wow i cannot be more mad").
- Showing work I did not believe in ("why would you give it to me then").

## How I work

### 1. Truth and material
- `bash $SK/scripts/new_site.sh <slug> [url]`. With a URL it crawls the old site word for word; without one, inventory the client's files.
- The five-second content, in the client's words: what this is, who it is for, what the visitor does next.
- The photo pass (`disojo-image-pipeline`): every image marked real, stock or AI and given a job. Full-bleed needs 2300px+ sources.
- If the material cannot carry a premium site (three soft photos, no logo), say so now and plan the fix (shoot, image generation for non-client imagery, Blender), before any design.

### 2. Study, hands-on
- The 84 walked sites are never re-researched: open their sheets in `$SK/research/walk-2026-11-10/` and `$SK/references/design-moves.md`.
- Open the references in the in-app browser and use them: loader, slow scroll, hovers, menu, an inner page, the phone. Read their fonts and motion with JS.
- For a new reference or a 3D hero: `node $SK/scripts/teardown.cjs <project>/research/teardown <url>...`.
- Write what I found and how long I really looked.

### 3. The idea, in words
- Three one-sentence ideas: "the first screen is ___ and it does ___", each from something only this client has. Then the one I would stand behind and why. (Three is Tejjo's rule; one strong pick inside it is mine.)
- Each idea also says: the nav, the one device the site repeats, the type direction, and which technique (below) it needs, if any.
- Method and name test: `$SK/references/idea.md`. Tejjo picks before any pixel. Their words go in `brief/IDEA.md` as `PICKED BY TEJJO:`.

### 4. Type
A specimen of 15 to 20 free fonts set in the client's own words, from Google Fonts' recent additions, Fontshare, Collletttivo and Velvetyne (`$SK/references/free-type.md`). Tejjo picks. Never reuse Bricolage or Hanken for a client. No Inter, Fraunces or Instrument Serif by default.

### 5. The first screen
- Real material only. Astro page, the kernel's motion (`$SK/kernel/`: Lenis, GSAP, transitions, split reveals, rolls).
- Look at it at 1512x864 and 390 in the real browser, scrolling with a real wheel.
- Put it beside the references: `node $SK/scripts/side_by_side.cjs <project>/qa/sbs <ourUrl> <refUrl>...`, and write what they do that we do not.
- My verdict in writing before sending. If I would not put it beside the eight, it is not sent; I say what is missing.

### 6. Build in pieces
- One page or section at a time, each shown with real screenshots (1512x864 and 390). After a "keep going", build one piece, show it, wait.
- The starter (`$SK/starter/`) and section library are plumbing, used only where they are right. The starter's nav is replaced, never shipped.
- Multi-page: a home plus real inner pages, each designed in the client's world (`$SK/references/build-craft.md`).
- Words: about 80 a screen, 120 at most. Copy is the client's or Tejjo's.

### 7. Defect checks
`premium_gate.cjs`, `system_check.cjs`, `phone_audit.cjs`, `prelaunch_scan.sh`, Lighthouse. They catch broken things only, and since 2026-11-17 the site guard hook only warns. Never call a pass "premium", "audited" or "ready".

### 8. Ship
Demo on Tejjo's go: `bash $SK/scripts/deploy_demo.sh <project> <slug>` (own noindex project; open the link and check its title before sending). Production only on the word "deploy" (`$SK/references/launch.md`).

## Techniques, chosen after the idea, never as the idea
| Technique | When | Where the working method is |
|---|---|---|
| Scroll-driven | The story unfolds as you move: pinned scenes, the window scroll, frame sequences | `$SK/kernel/`, `$SK/references/interaction-architecture.md`, window code in memory `feedback-window-scroll-effect` |
| Photo-led | The client has strong real photographs, or can shoot them | `disojo-image-pipeline`, `$SK/references/composition-bands.md` |
| Minimal, type-led | The words or the name carry it; few images | `$SK/references/free-type.md`, `$SK/taste/` |
| WebGL / Three.js | Product type only (an object or a building) unless Tejjo says otherwise | `disojo-realtime-3d-product` (the proven method), 3D research in memory `reference-site-research` |
| Motion | Always: buttons, links, reveals, transitions | `$SK/references/text-button-motion.md`, curve `cubic-bezier(.16,1,.35,1)` about 0.6s |

## Standing rules (Tejjo's)
- Astro, from the first screen to launch. No hand-written HTML sites (the hook still blocks .html in a project).
- Never a one-pager.
- Footer bottom row, right: `Design & Systems · © Disojo Studio 2026` linking https://disojostudio.com. The client's real location and a small live clock in the footer.
- Every text button rolls (up down, or side up down). No big filled rectangle buttons with a centred label. No blurred top bar with same-size links: the nav comes from the idea, one action louder than the rest.
- Never invent content, numbers, reviews or contact details; missing facts become `TODO(client)`. No stock or AI photo next to a client name, result or quote.
- Free fonts only, licence recorded. Never lift a reference's fonts, copy, images or code.
- No em dashes or hype words in copy.
- Say plainly what is placeholder, AI-made or untested (real phones and Safari so far).

## Proof
This skill is on trial. Each real run gets a line in `~/Desktop/DISOJO SOLUTIONS/_system/proof-log.md`: the job, my verdict, Tejjo's first-look words, and the rounds it took. Log verdicts in `taste-library/websites.md` the same day.
