---
name: disojo-type-local
description: Website type "Local practice", loaded from stage 1 of disojo-site-system when the buyer must see the people and the place before trusting the business. Academies, classes, schools, clinics, dentists, therapists, law firms, restaurants, gyms. Sets the pages, the kind of proof, what to collect from the client, allowed tech, benchmarks and past failures. Never sets colours, fonts or layout.
---

# Local practice

The buyer is deciding whether to hand over their child, their body, their case or their evening to these specific people, in this specific place. So the site has to answer: who exactly will I be dealing with, what happens there, how do I get in.

Everything else comes from `disojo-site-system`. The look comes from the picked idea and nowhere else. If this file ever starts describing a layout, it has gone wrong.

## Where the idea usually hides
Look here first when listing what only this client has: the actual room, the hands doing the work, the timetable or register, the founder's own sentence, the street, how long they have been in that spot, what a parent or patient sees on the first visit.

## Pages (minimum, never fewer)
1. Home
2. People: every teacher, doctor or lawyer by name, face and what they actually do
3. What we do: organised by who it is for, not by internal department names
4. The place: real photos, address, map, hours, how to get there
5. Enquire or book: whatever the business really uses
6. Legal

The enquiry route is reachable from every page. Add a page per course or practice area when the client has real content for it, never to pad.

## Proof that counts here
- Named people with real faces. Stock people are never allowed on this type.
- The real room. A stranger should recognise it on arrival.
- Reviews with a name and the client's permission.
- Years, student counts and results only when the client states them.

Medical, legal and work with children carry rules that vary by place. Ask the client what their regulator or bar requires, write it in the brief, and never guess. Results and before-and-after claims stay out until that is answered.

## Collect at signing (the KDC lesson: find out now, not at build)
- [ ] Real photos of the people and the room, or a shoot date. No material means an honest stop, not a design around the hole.
- [ ] Written permission for every student, patient or client who appears. For minors, from a parent.
- [ ] Each person's name, role and credentials, spelled by the client
- [ ] Vector logo, if they have one
- [ ] Address, map link, hours, phone
- [ ] Courses or services, and fees only if they want them shown
- [ ] How enquiries really arrive today and who answers them
- [ ] Existing forms, portals or booking systems. Link to anything that creates accounts; never rebuild it inside a site job.
- [ ] Any disclaimer their profession requires

## Allowed tech
Astro, multi-page, static HTML per page (real HTML helps local search). No 3D without Tejjomay's words in `brief/IDEA.md`. Real footage only. Footer carries the real location and a small live clock, plus the Disojo credit.

## Benchmarks
All walked references live in one place, by design and not by industry: `disojo-site-system/references/design-moves.md`. Open it only after Tejjomay has picked the idea. Its last section keeps this type's older what-to-look-at notes.

The sites Tejjomay has approved as the quality bar are in `disojo-site-system/references/approved-benchmarks.md`. Client work of ours is never a benchmark unless it is on that list.
TFTL projects of this type (`disojo-site-system/research/tftl-portfolio/`): ADA dental (serif phrases with an italic word, portraits), Duck English (curved text, lime stickers, teacher cards), Zitya and Inch and Spicy no Spicy (restaurants), Birdies and Besos (bars, brand on objects first), Grand Hotel Lviv, Verholy, Shelter (studio), Addendum Salon, Krasota, Don't Board Me (a ball game to enter a dog-walking site). Same type, no shared look.

## Past failures on this type
- **KDC, 2026-11-02:** approved direction, but only one large real photo existed. The shoot, logo and video links came up at build. Hence the list above.
- **KDC:** the sign-up form creates app accounts, so it is linked, not rebuilt.
- **CSK Law, 2026-10-29:** a one-page concept in Instrument Serif. One page is now refused at deploy and that face fails the gate. Their photos were hotlinked, and it carries a real firm's brand: never published.

More in `disojo-site-system/references/bottlenecks.md`.
