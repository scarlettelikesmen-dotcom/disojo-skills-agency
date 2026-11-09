# The entire engagement, start to finish

Every phase has: purpose, inputs, steps, skills, output, gate (what Tejjomay and the client see and approve), and the usual way it goes wrong. **No durations are given because the timeline is unresolved: Tejjomay sets them per project.** Gates are hard stops: no downstream work starts until the gate is passed and written in `00-admin/decisions.md`.

Two revision rounds per stage (AGENTS.md; confirm for this tier). Anything outside the signed scope is a change order.

---

## Phase 0. Fit and qualify
**Purpose:** decide whether this client suits a flagship before anyone spends time.
**Inputs:** a discovery call (cal.com/disojo-studio/discovery-call), the client's current presence.
**Good fit:** owner-run, has or can get real material (photography, product, craft, a story), wants a distinctive brand, decision-maker is on the call, budget fits the range, understands staged visibility.
**Red flags:** no assets and no budget for 3D (then no real 3D: see `09-3d-pipeline.md`), wants a template, many decision-makers, asks for discounts instead of scope changes, a deadline that skips gates, wants to copy a competitor's site.
**Output:** fit note in `00-admin/decisions.md`: go, no-go, or go-with-conditions. Say plainly when software or a plain site would serve them better (the Disojo site's own promise).
**Skills:** none. Optionally `competitor-positioning` for a quick read of their market.

## Phase 1. Scope and proposal
**Purpose:** fix what is included before any work, especially the 3D.
**Steps:** fill `templates/scope-sheet.md` (deliverables, exclusions, 3D scope, revisions, assumptions, client responsibilities, payment schedule, IP rule, timeline). Write the proposal in the Disojo voice (calm, structured, no apologetic phrasing). Price inside the range only after Tejjomay decides; never state a price or currency to a client without his say.
**Output:** signed scope sheet and the payment schedule. **Gate:** client signs; first payment lands before work starts (AGENTS.md rule; confirm for this tier).
**Skills:** `references/08-commercials.md`, `disojo-guardrails` (nothing promised that the stack cannot do).
**Goes wrong:** vague 3D ("some 3D") becomes unbounded. Count objects, variants, scenes and camera moves in writing.

## Phase 2. Kickoff and intake
**Purpose:** get real material in and set up the project so nothing is invented later.
**Steps:**
1. Create the project folder, init git, **add a remote on day one**.
2. Send the asset request (`disojo-site-system/templates/asset-request.md`): logos, photography, product files, print files or dielines (`disojo-packaged-product-3d/templates/dieline-request.md` for packaged goods), copy they love, current site and social access, competitors they admire and dislike.
3. Inventory assets (`disojo-site-system/scripts/inventory_assets.py`), look at the key ones, flag problems (low resolution, no print files, licensing).
4. Run `brand-context`; keep its file in `brand/00-context.md`.
5. Start `00-admin/decisions.md` and `00-admin/licences.md`.
**Output:** assets inventoried, gaps listed (`TODO(client)`), context file. **Gate:** client confirms the missing-items list and a date for it.
**Skills:** `disojo-site-system`, `brand-context`.

## Phase 3. Discovery
**Purpose:** learn the business first and find where the work leaks (WhatsApp bookings, spreadsheets, retyped documents, tribal knowledge). This is Disojo's discovery-first edge and the source of the concept.
**Steps:** the interview (`brand-discovery`: purpose, positioning, audience, personality, voice, narrative, founder tension); audit the current site and social for what is true and what lies (fake form success, invented claims); mine real proof (`social-proof-mining`); read their existing audience language; then `brand-strategy` produces the report.
**Output:** `01-discovery/` notes and `brand/01-strategy.md`. **Gate:** client agrees the findings are accurate.
**Skills:** `brand-discovery`, `brand-strategy`, `positioning-audit`, `social-proof-mining`, `audience-personas` if interviews or reviews exist.
**Goes wrong:** skipping to design. A site without a story is the "bland" failure.

## Phase 4. Positioning and name
**Purpose:** one defensible sentence about what the brand owns, and a name if it needs one.
**Steps:** `competitor-branding` (how competitors present: identity, messaging, voice, visuals) and `competitor-positioning` to find gaps; `target-audience`; `brand-positioning` (statement, territory, proof points); `brand-naming` only if the client needs a name (it evaluates names too).
**Output:** `brand/02-positioning.md` (+ `03-naming.md`). **Gate:** position approved. Names get a basic availability check by the client or Tejjomay; never claim a name is clear without a check.

## Phase 5. Art direction (GATE 1)
**Purpose:** prevent flat and bland. One real thing only this client has, doing the work.
**Steps:** `disojo-site-system` stage 1 (`references/idea.md`) comes first: three one-sentence ideas from real things, in words, no pixels. Tejjomay picks. Then stage 3: study references by how the real thing does the work, log principles in `brief/references.md`, **copy nothing** (`04-no-copy-law.md`), and draw three first screens of the picked idea. Write what is real, AI or placeholder.
**Three, always (Tejjomay, 2026-11-08):** three ideas in words, then three first screens of the picked one.
**Output:** `brief/IDEA.md`, `brief/BRIEF.md`, `brief/references.md`. **Gate 1:** Tejjomay picks the idea before anything is drawn; Tejjomay and client approve one first screen before the build. Nothing visual starts before the idea is picked.
**Goes wrong:** a concept that decorates the client's craft as a metaphor. Build for the visitor, around the client's real proof.

## Phase 6. Identity (GATE 2)
**Purpose:** a complete, consistent identity with one source of truth.
**Steps (order and winners in `disojo-brand-system`):**
1. `brand-identity` for the visual brief (logo direction, palette, type, imagery, principles).
2. `disojo-logo-design` pipeline for the final marks: concept first, wordmark first, black and white first, test at 24 px, show three different directions and name the weakest. Open-licence fonts only.
3. `brandkit` for a fast concept board to present direction (its logos are sketches; finish with the logo pipeline).
4. `brand-voice` for tone, vocabulary and rules; `brand-messaging` for tagline, value proposition and proof.
5. Write `brand/tokens.json` from the approved decisions: colours with jobs, type with licences, motion, scene colours, voice.
6. `brand-manifesto` and `brand-story` only if the concept needs them.
**Output:** `brand/` complete: logo suite (SVG ink, colour, white; PNG), board, tokens, voice. **Gate 2:** identity approved. Run `check_tokens.py` later against the build.
**Goes wrong:** more than two type families, gradients as a crutch, a logo that dies at 24 px.

## Phase 7. 3D look-dev (GATE 3)
**Purpose:** find out if the 3D will look premium before building a site around it.
**Steps:** pick the asset route (`09-3d-pipeline.md`), get or build the model, light it with a 1k HDRI, ACES tone mapping, subtle bloom, one key light, real materials; build **one test scene** with one camera move; screenshot desktop and phone width; compare beside a reference frame; list three honest differences; fix the biggest; reshoot (`disojo-3d-lookdev`). Test on a real-GPU browser.
**Output:** `3d/lookdev/` screenshots, the scene module, a licence log entry for every asset. **Gate 3:** test scene approved by Tejjomay and client. Say plainly what is AI-generated or placeholder.
**Goes wrong:** judging 3D in headless software GL; flat grey materials; many lights.

## Phase 8. Site flow and copy (GATE 4)
**Purpose:** a sequence with a point, plus the words.
**Steps:** `disojo-site-system`: site map, scroll storyboard (each section: visitor's question, real visual, real copy, motion beat, phone behaviour), enquiry flow (draft steps and ask Tejjomay for real response time and budget bands), navigation, mobile plan, load plan. First-screen rule: real content within about a second; intros capped near 3 s with skip; scroll never locked past the cap. Write copy with `brand-voice`, `brand-messaging`, `no-ai-slop`; every claim traced to the client.
**Output:** `plan/site-flow.md` and final copy. **Gate 4:** storyboard and copy approved.

## Phase 9. Build
**Purpose:** build the whole site section by section, visible in stages, no big reveal at the end.
**Steps:**
1. Scaffold. Use `disojo-site-system` for plumbing only, **never its look**; state how each of palette, type, nav, first screen, transition and footer follows from the picked idea, one line, before UI work.
2. Load tokens into CSS variables and the scene; no stray hex.
3. Build the hero and the signature moment first and show them; then the rest section by section inside ONE system (one type scale, one label style, one grid) telling ONE story, not a different layout family per section; each section finished and checked before the next (`disojo-guardrails`, `disojo-site-system/references/defaults-to-avoid.md`, `make-interfaces-feel-better`, `emil-design-eng`).
4. Integrate the 3D module and per-variant theming; loader tied to real progress with a cap and skip.
5. Motion: `motion-foundations`, `motion-patterns`, `motion-advanced`, `disojo-motion-craft`. Brand ease and durations from tokens. Reduced-motion path from the start.
6. Enquiry form with real backend and honest states.
7. **Preview deploy to its own noindex project, show Tejjomay and client in stages.** Live only when Tejjomay says "deploy".
**Output:** running preview, committed and pushed. **Gate:** each stage shown; fixes done within the two rounds.
**Skills:** see `02-skills-map.md`.

## Phase 10. QA and polish
**Purpose:** prove it works, with numbers. Numbers do not prove it is good.
**Steps:** run the defect checks of `disojo-site-system` stage 5: the browser probe at 1 s, 3 s and 8 s after load and again at the 3D section; first screen; token check; 3D weights and fallbacks; Lighthouse on the **deployed** URL; honesty and accessibility. These prove "not broken" only. Then the side-by-side with the closest reference (never Postcards or Ascender), noting what they do that we do not; Tejjomay decides who wins. Also `review-animations`, `browser-qa`, `verification-loop`, `click-path-audit` on forms and nav. Sizes: 1512x864, 1440x790, 1860x955, 1920x1080, 1280x720; phones 343, 360, 390, 430. Look at every screenshot.
**Output:** `qa/report.md` with PASS/WARN/FAIL, numbers, screenshot paths, and an explicit "not tested" list (real phones, Safari, Firefox, slow networks, screen readers unless done).
**Gate:** every FAIL fixed, every WARN explained.

## Phase 11. Launch and handover
**Steps:** `disojo-site-system` (pre-launch scan, Lighthouse, handover), domain and redirects, forms wired and tested with the real endpoint, analytics decision (open), sitemap, OG image, favicon set, a 404 page, credit line in the footer. Produce `brand-guidelines`, the asset pack, the licence log, the AI-disclosure note, the rollback URL, credentials list (never in chat or git). Deploy only on "deploy".
**Money and IP (AGENTS.md; confirm for this tier):** final payment settles before IP release; repositories, cloud credentials, DNS and the IP deed are released only after the final invoice is paid and reconciled.
**Output:** `handover/` complete. **Gate:** client sign-off, final payment.

## Phase 12. Aftercare
Stay on after launch: fixes, upgrades, a 30-day check with the QA probe and Lighthouse re-run. Retainer in USD is unresolved; ask Tejjomay before offering terms. A case study goes live only with the client's permission and only verified claims; any number the client reports is labelled as theirs.

---

## Gate protocol (every gate)
Show screenshots at desktop and phone width, not descriptions. Say what is real, AI-generated, placeholder, untested. Ask for one decision. Record the decision, the date and who approved in `00-admin/decisions.md`. Revisions are the two rounds; extras are change orders. Do not start the next phase early "to save time".

## Decision order when things collide
Client facts > Tejjomay's decisions > the approved brief > the skills' defaults. A skill default never overrides an approved brief.
