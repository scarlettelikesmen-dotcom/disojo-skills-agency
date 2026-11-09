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
`premium_gate.cjs` fails Inter, Fraunces, Instrument Serif and a one-word accent in the h1, and warns on eyebrow count and on more than one button in the first screen. The rest is on me. Nothing here can be measured into taste.

Source: the rule lost in the 2026-11-02 merge (`skills-archive/2026-11-02/disojo-premium-site-method/SKILL.md` line 13), plus Tejjomay's verdict on Kiran Roy, 2026-11-09.
