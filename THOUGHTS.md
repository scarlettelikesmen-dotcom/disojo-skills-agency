# Thoughts on building these sites (written 2026-10-09)

Notes from building the Mochi & Midori concept bakery and the Ascender Media flagship rebuild. Not a procedure (that's `disojo-premium-site-method`) — more a record of what mattered and why, for whoever reads this next, human or Claude.

## What actually made these builds good
- **Real material beats invented polish every time.** Ascender's best line ("Send the footage. We handle the rest.") came straight out of a client's WhatsApp message, not from trying to sound clever. The six real chats did more for credibility than any designed testimonial section could. When there was no real material (no client reels), saying so on the page was more convincing than hiding the gap.
- **A site needs one real idea, not a style.** Ascender isn't "dark and premium," it's "this page is an editing timeline" — timecode, playhead, tracks, export presets, render complete. Once that idea was picked, almost every design decision followed from it instead of being chosen from a list of trends. Mochi's idea was a tea-ceremony circle opening onto the product. Different client, different idea, same rigor.
- **Copying your own past work is the easiest way to produce something mediocre.** The first Mochi draft reused the Postcards layout and it was bad specifically because it was familiar — competent, generic, forgettable. The fix wasn't more polish, it was throwing out the structure and starting from what makes a bakery different from a perfume shop.
- **Verification found real bugs that looking at the page didn't.** The CSS class collisions (`.c`, `.end`, `.bar`) only showed up because screenshots at multiple scroll points caught overlapping cards. The contrast failures were invisible to my eye on a dark background; Lighthouse caught them. Build the checking tools once (smoke test, screenshot tour, lint script) and they pay for themselves on every project after.
- **Constraints produced better design than freedom did.** "No client reels" forced the illustrative-demo idea, which ended up more interesting than a stock portfolio grid would have been. "Keep the real prices exactly as given" meant the pricing section had to earn its look from layout and type, not from invented numbers.

## Where I was slow or wrong
- Took two tries to get Mochi's identity right because I defaulted to "reuse the plumbing" without separating plumbing from look clearly enough in my own head.
- Spent real time on a procedural 3D cake that looked cheap, when real photography or a photo cut-out would have looked better for less effort. Cheap-looking 3D is worse than good 2D; I should check "does this look expensive" earlier, before investing in the harder technique.
- Early hero video encodes were too compressed for already-soft AI footage — compounding softness instead of hiding it. Worth checking source quality before picking a compression target.
- On Ascender, I initially treated the design skills as a reading list to consult once, rather than a lint pass to actually run against the finished code. Running `design_lint.py` after calling the work done caught a real `transition: all` and pure-black values I'd missed by eye.

## On skill-building itself
- A skill is worth writing when a mistake or a hard-won technique would otherwise get re-learned on the next project. The CSS-namespace bug, the font-subsetting Lighthouse lesson, the pinned-section height formula — all of those are now one line in a skill instead of a future debugging session.
- A skill that only contains advice is weaker than one that contains the advice plus a script that checks it mechanically. "Don't use pure black" is easy to forget; a lint rule that greps for `#000` is not.
- Keep the reference implementation (`kit/`) in the skill, not just a description of it. Patterns described in prose get reinterpreted loosely each time; patterns with working code get reused correctly.
- The one-line "Design Read" habit (state audience, vibe, and system before writing any code) is cheap and catches wrong-direction work before it's built, not after.

## On the agency, plainly
The thing that makes a site worth 10-20k isn't the motion or the font — clients can't always articulate why one site feels expensive and another doesn't. What they can tell is whether the site is about *their* business specifically, whether it's fast, and whether anything on it looks fake. Those three things are achievable on every project regardless of budget or asset quality: real content, real performance numbers, and intellectual honesty about what's illustrative versus real. Everything else (3D heroes, custom shaders, elaborate scroll choreography) is additive, not load-bearing.

The repeatable part isn't the aesthetic — it's the process: read the client's real material before designing anything, pick one idea that's specific to that client, build and verify in that order, never guess at a number or a quote. The aesthetic should look different every time; the process shouldn't.
