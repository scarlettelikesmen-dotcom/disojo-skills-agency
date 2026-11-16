---
name: project-marathon
description: "NOT A REAL CLIENT: Marathon (marathon.in) was a test by Tejjo 2026-11-11; local build only, never deploy or publish"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-11T03:12:35.531Z
---

**NOT A REAL CLIENT (Tejjo, 2026-11-11): "i was testing you, this isint a real client" and "you dont need to build so much". No contract, no ₹60 lakh. The build uses a real company's content and brand, so it stays local: never deploy, publish or show it as client work. Do not continue building unless Tejjo asks.** Marathon Group / Marathon Realty (marathon.in), a real Mumbai developer. Folder `~/Desktop/websites ARCHIVE/marathon-site/`. Not deployed.

**Client instruction (via Tejjo):** take everything from the current site; they will not supply material. So copy RERA numbers, plans, prices, disclaimers word for word from the crawl, and before launch send Tejjo ONE sign-off list of every legal and price item for the client to approve.

**Direction (Tejjo: "All right, sounds good"):** lean, one direction. Their film (assets/film, 27s drone + interiors, 1080p) full bleed first screen with "Redefining Real Estate. Since 1969." and the six places; the one device = projects placed along a line through Mumbai (Byculla to Panvel), by place then type and budget; numbers; Design/Trust/Engineering; investors; closing with phone + WhatsApp. Red logo kept. Blog (~450 articles) moved across in one plain layout; investor pages word for word; prices from one data file.

**Watch:** their numbers conflict between pages (home: 57+ yrs, 100+ projects, 880 acres, 10000+ families; about: 45+/81+/711/8075+, older). Use home's and flag. Project thumbnails are only 600x600. See [[feedback-own-verdict-before-showing]].

**State 2026-11-11 (home built, shown to Tejjo, NOT deployed):** home at site/src/pages/index.astro on localhost:4620 (launch config "marathon"), layout Site.astro, all copy in site/src/data/marathon.js. Sections: film hero, intro with a clip from their film (m/film/inside.mp4, 12-19.5s), numbers, the project line (pinned sideways track on desktop, the rail is a map of the whole track; swipe row on phone), story 1922-2018, Design/Trust/Engineering (Trust = their 2009 render beside the 2013 photo), investors, closing with the phone number. The gate still fails on two things: "cutting-edge" is their own copy (kept word for word, Tejjo to decide), and 36% big-image screens against a 37% floor, because the line shows 600px tiles. Side by side in qa/sbs (vs ERA Residence and live marathon.in). Inner pages still use the starter Base: next after Tejjo's verdict. 404 still the starter default.

**State 2026-11-11 later (Tejjo on the home page: "Keep going. This is real good stuff. I'm happy." Inner pages in progress, NOT deployed):**
- **Project pages:** `[project].astro` renders 8 pages from `data/projects.json`, built by `research/build_projects.py`. Large photos (1000px+) become bands between sections, capped at width/1.55 to stay sharp. NeoHomes, Nextown, Nexworld and Nexzone pass. Futurex, Monte Carlo, Millennium and Zaver lack photos (client gap).
- **Designed pages:**
  - `our-projects.astro`: the line run vertically.
  - `completed-projects.astro`: decades from `data/completed.json`, with a sticky timeline that lights the current decade.
  - `contact.astro`: four desks plus a switcher for 12 offices from `data/offices.json`.
- **Registry:** designed routes are listed in `data/designed.js`. Everything else uses `[...route].astro` with Prose.
- **Still to design:** about-us (very long, banner soft), design/trust/engineering, nextgen investors, legal, the 404 and the blog list.
- **Client sign-off list:** `brief/CLIENT-SIGNOFF.md`. Keep it current. It is the one list for Tejjo to send.
- **Side by sides:** `qa/sbs/projects/` (scores filled in) and `qa/sbs/contact/`.
