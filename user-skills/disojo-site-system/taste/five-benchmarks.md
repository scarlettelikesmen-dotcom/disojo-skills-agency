# Shortscut, Supersolid, OH Architecture, Your Creative, The First The Last (walked 2026-11-11)

Every page the crawler reached (7 to 8 each), desktop and phone, wheel-scrolled, buttons hovered. Raw data: `raw/<site>/`. Numbers against ERA and Monolog: `python3 ../scripts/taste_compare.py raw/<site>`. Study only.

## The headline finding
**Several "habits" from ERA and Monolog are not rules.** They hold on some benchmarks and break on others:
- **Your Creative** puts 93% of its characters at 20 to 47px (ERA 16%, Monolog 18%). It uses 14 saturated filled buttons, a purple footer, a blue projects page and pill-shaped client tags.
- **Shortscut** sits on pure white and pure black, and runs about 9 media a screen.
- **TFTL** has 23% of its gaps in the 40 to 64px band. Its display leading is 1.2, not tight.

So these five are not one style. What they share sits at a different level (below), and that is the useful lesson: **a method, not a look.**

## OH Architecture (built by Monolog, says its footer)
- **Look:**
  - white ground
  - one grotesk, uppercase display split left and right ("FEATURED ... WORKS (06)")
  - black pill buttons
  - huge black "OH" in the footer
- **The same studio as Monolog, a completely different site:**
  - Monolog is dark and grey with film grain, and a condensed shout face.
  - OH is white and architectural, with photography in an uneven two-column drift.
- **Shared plumbing with Monolog:** big-list menu, footer with a list, live hours ("9:00 AM QLD, we are open"), number counters in brackets.
- **Content from the subject:**
  - real project photos at varying sizes, with tiny captions (number, name, year)
  - a process page with a 6-stage list
  - an archive that opens isometric line drawings you drag around ("click and hold to drag and explore"): the architect's own drawings become the interaction
- **Numbers:** 10 sizes, only 13% of characters in mid sizes, 0px media corners, about 72 words a screen.

## Shortscut (a video content agency)
- **Look:**
  - off-white then pure white
  - bold grotesk
  - one orange accent from their logo, used on numbers and the logo only
  - small mono labels
- **The idea is the medium:**
  - the headline has live video inside the sentence ("We create videos [clip] people can't scroll past")
  - section titles carry small clips or icons inline ("clients [heart] say")
  - projects are pinned one at a time: name, two big view counts, the video on the right
  - a "Social content" page lays videos out as file thumbnails on a timeline
- **Proof:** big numbers (77.5m+ views), real client logos, and quotes with names and photos.
- **Footer:** full-width logo, plus Toronto with a live clock.
- **Numbers:** about 9 media a screen, the most of any benchmark, because the product is video. 16 sizes.

## Supersolid (a creative agency, Sydney)
- **Look:**
  - charcoal ground, with a pale ice-blue for some sections
  - a stretched extended wordmark as the hero
  - a geometric sans
  - small dark buttons with an arrow
- **Colour only from the work:** a burger billboard, a rugby ball, a mobile app. The UI stays dark and neutral.
- **A named idea used as a device:** "ROIdeas®", the registered trademark, is repeated as a section title and in the contact sign-off ("Let's talk ROIdeas®").
- **Footer:** the wordmark stacked and echoed in three layers.
- **Numbers:** 11 sizes, display leading 1.15, 0px corners, about 67 words a screen.

## Your Creative (a purpose-led agency, Melbourne and Sydney)
- **Look:**
  - warm white, with a huge italic wordmark edge to edge
  - a soft coloured blob moving behind the type
  - **a floating pill nav at the bottom of every page**
  - purple footer, saturated client tags as rounded pills that drift around titles
- **Structure by sector:**
  - "Community & Health (33)", "Science & Innovation (20)", "Arts & Culture (12)", each with a count, a one-line description on the right, and project images
  - a projects page listing every discipline in big type with a count, over a blue 3D shape
- **People:** real staff photos, often cut into circles or ovals.
- **Breaks the ERA and Monolog habits on purpose:** colour everywhere, rounded shapes, mid-size type. It reads as warm and community-led, which is its subject. The rule it keeps is that everything comes from its own world: sectors, people, causes.

## The First The Last (their own site)
- **Look:**
  - white to blush-pink gradient grounds
  - a neo-grotesk
  - small coloured sticker tags (Miami, Dubai, Award-winning) that drift
  - a full-bleed project stack, one per screen, name only, over huge imagery
- **Their own people in studio portraits:** one holds a "www." block, a recurring prop.
- **Services:** a word list where the current item is solid and the others ghost in pink.
- **Contact:** "MIA" and "DXB" huge, with a 3D logo between them.
- **Numbers:** display leading 1.2 (loose), 15 sizes, 3.4 media a screen.

## What all seven benchmarks share (ERA, Monolog, plus these five)
These held on every site:
1. **Each site's look comes from its own subject.**
   - an architect's drawings (OH)
   - a video agency writing with video (Shortscut)
   - a residence's arch, flowers and day/night (ERA)
   - a founder's own team on film (Monolog)
   - a trademarked idea (Supersolid)
   - sectors and people (Your Creative)
   - their own staff and stickers (TFTL)
2. **Real material carries the trust:** their own photos and footage, real numbers, named quotes. No stock on any of them.
3. **A small set of type jobs.** Two families at most carry 95% of the characters on every one.
4. **Square media on six of the seven.** Your Creative rounds its people photos into circles and ovals, by choice.
5. **One memorable device per site** that the whole site repeats:
   - the arch, the inline video, the drag drawings, ROIdeas®, the sector counts, the stickers, the grey value
6. **A designed footer** that acts as a last screen, not an afterthought:
   - a giant wordmark or logo, a place and a clock, a big nav list
7. **The same plumbing underneath:** smooth scroll, page transitions, text rolls, a menu, counts in brackets. Those are reusable. The look is not.

## What this means for our system
- **Taken alone, the measurements are not a style guide.** `taste_compare` shows where we sit. Once a site follows its own idea, being outside the references is fine.
- **The token *structure* is reusable:**
  - a ramp, a small set, named colours with alpha steps, units, one artboard
  - the values in it come from the idea every time
- **What we must design each time:**
  - the subject's own device
  - the subject's own material
  - a footer that ends the story
