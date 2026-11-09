# Stage 1: the idea (words only, before any pixel)

Left alone, I produce the statistical average of a landing page. Every reference works because one real thing from that client does the work: the wall, the can, the coconut, the drawn line. Take it away and the site is nothing. This stage finds that thing and puts Tejjomay's judgment before the pixels, when a change costs one sentence.

## Do
1. **List what only this client has.** Real objects, places, people, documents, numbers, habits, the name taken literally. From intake only, with the source next to each. No adjectives ("trusted", "premium"): if you cannot point at it, it is not on the list.
2. **Write three ideas, one sentence each:** "The first screen is ___ (a real thing from the list) and it does ___." Under each, one line: the real material it needs, and whether we have it.
3. **Name test.** Remove the client's name. If any competitor could use the sentence, it dies. Write another.
4. **Skeleton check.** Picture the first screen. If it can be fully described as tag, headline, grey sub, two buttons, photo on the right, stats row, logo strip, start again. A headline and a sentence are not a crime (Mammoth and Palmo have them); a headline and a sentence with nothing behind them is.
5. **Honest stop.** If the list has nothing that can carry a screen, say so in one line and name what would fix it: a shoot, an illustrator, a human art director. Do not design around the hole.
6. **Name the website type.** One question: what must the buyer see before they trust this business? The object = Product (real estate included), the range = Catalogue, the work = Studio, the face and voice = Person, the people and the place = Local practice, it working = Software (the working thing is the proof further down; Tejjomay rejected nearly every site that opened on a product screen). Then load that type's skill (`disojo-type-*`): it sets the pages, the kind of proof, what to collect and the benchmarks. It never sets colours, fonts or layout.
7. **Send the three sentences and the type in chat.** No pixels, no mood boards, no fonts. Say which idea I would pick and why, and one thing wrong with it. Ask for one decision.

## Record
Write `brief/IDEA.md` from `templates/IDEA.md`. When, and only when, Tejjomay has picked in chat, fill the `PICKED BY TEJJO:` line with their words, write the `TYPE:` line, and run `log.py <slug> idea "<their words>"`. 3D is for the Product type. Anywhere else the gate fails the page unless `3D ALLOWED BY TEJJO:` holds their own words; same honesty rule as the pick.

The site guard hook blocks every design file until that line is filled. It cannot tell whether Tejjomay really said it. Writing the line without their words is lying to them, the same as inventing a client review.

Rejected: new ideas, in words, again. Never answer a rejected idea with pixels.

Work that truly is not a site design (a tool, a script, a data fix inside a gated folder): fill the line as `n/a - <reason>` and say so to Tejjomay.

## After the pick
The idea decides what is otherwise left to my defaults: what fills the first screen, how many buttons exist and how they behave, what the links and rows wear (Palmo circles its buttons by hand, Squiggle underlines with its own line, Ciao strikes through). Message (stage 2) is written from it. `defaults-to-avoid.md` applies from here on. `design-moves.md` opens only now, to push the picked idea or solve a mechanical problem. Never open it to find an idea.
