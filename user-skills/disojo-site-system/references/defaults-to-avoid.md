# Defaults to avoid (the one list)

These are what I reach for when nothing real is driving the page. Each is out unless the picked idea needs it, and then I say why in one line when showing it. This list stops repeats. It does not make anything good: only the idea does (`idea.md`).

## The page
- The stack: tag, headline, grey sub, two buttons, photo on the right, stats row, logo strip.
- A primary button with a quiet "watch" or "learn more" next to it.
- Three equal cards. FAQ accordion by reflex. More than one marquee.
- A theme switch per section for variety. One theme for the page unless the idea changes it.
- At most 4 text elements in the first screen.
- Fake product UI built from divs (fake dashboard, fake terminal). The real thing, a real screenshot, or nothing.
- A text strip along the hero bottom ("Brand. Motion. Spatial."). A small paragraph floating in the corner of a heading.
- Scroll cues. Version labels ("Beta", "v2.0") unless it really is a launch.
- **The NPC nav (hard rule, Tejjomay 2026-11-10).** A full-width bar pinned to the top with a blurred see-through backdrop, logo left and a row of same-size links right. Every 2008 site has it. The nav is designed from the picked idea before any section, in words first with three options (Kiran Roy: the headstock is the menu, links flank it at the top, it folds into a small headstock tab, the menu is six tuning pegs). It needs a real hierarchy: the one action that matters is louder than the rest, secondary items (log in) quieter. No `backdrop-filter: blur` on a nav. `premium_gate.cjs` fails a blurred top bar, or 4+ nav links in one size, weight and face.
- A city, time or weather strip as hero or nav decoration. The place belongs in the footer: location and a small live clock, on every site (hard rule in SKILL.md).
- Pills or tags laid over photos. Captions posing as photo credits. Decorative coloured dots: a dot reports real state or it goes.
- Neon glows and gradient headlines.

## Type
- Inter, Inter Tight, Fraunces, Instrument Serif.
- One italic or coloured word in the headline. Emphasis is by weight, or by what the idea does to the word.
- Eyebrows: at most 1 per 3 sections. Never hand-rolled "(01) The record" on every block.
- Wide tracked uppercase labels. The references sit flat or slightly negative.
- Section-number labels ("001 Capabilities", "01 / 4"). A second font dropped in for one word.
- Geist, Satoshi and Cabinet Grotesk are the next defaults once Inter is banned (VÆL landed on Geist + Geist Mono). Not banned, but the face has to come from the idea, with a reason.

## Colour
- Beige or cream with brass, clay or oxblood, and espresso for ink. This is the AI default for "premium".
- An accent that only ever colours one word or a button.

## Words
- No em dashes. One label per intent, the same everywhere ("Book a call" stays "Book a call").
- Claims without a thing behind them: "Not your average", "real results", "built different".
- Poetic labels ("Field notes", "On the bench", "Quietly trusted by"). Plain names or no label.
- A sentence under a heading that explains the section to itself.
- Vanity stats with no source. Never invent numbers, dates, names or brands to look real, however messy they look.

## How this list is enforced
`premium_gate.cjs` fails Inter, Fraunces, Instrument Serif, a one-word accent in the h1, more than one button in the first screen, and a headline + sentence + button stack sitting on a photo. It warns on eyebrow count. Type over a photo on its own is fine: ERA Residence is exactly that. The rest is on me. Nothing here can be measured into taste.

The two first-screen rules were run on every first screen Tejjomay judged on 2026-11-10: 0 of the approved sites failed, 2 of 80 yes (Halcyon, and Spylt's teaser page), 15 of 52 no. So they catch a real pattern and let the good ones through, but passing them says nothing: 37 of the 52 no sites pass too.

Source: the rule lost in the 2026-11-02 merge (`skills-archive/2026-11-02/disojo-premium-site-method/SKILL.md` line 13), plus Tejjomay's verdict on Kiran Roy, 2026-11-09.
