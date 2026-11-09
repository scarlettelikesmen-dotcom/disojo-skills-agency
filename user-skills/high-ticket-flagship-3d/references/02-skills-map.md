# How to use every skill

Skills live in `~/.claude/skills`. Invoke by name. This map says **when** each is used in the flagship, **what it produces**, and **what to do when two overlap**. If a skill's default conflicts with the approved brief, the brief wins.

## A. Orchestration (Disojo, flagship-specific)
| Skill | Use it for | Output |
|---|---|---|
| `high-ticket-flagship-3d` | This guidebook. Open first, always. | the plan |
| `disojo-site-system` | The working pipeline. Phase 2 (stage 0 intake), Phase 5 (stage 1 idea, stage 3 first screens), Phase 8 (stage 2 message), Phase 9 (stage 4 build), Phase 10 (stage 5 checks), Phase 11 (stage 6 ship). | `brief/IDEA.md`, `brief/MESSAGE.md`, `brief/BRIEF.md`, gate reports |
| `disojo-visual-identity` | The whole identity job, signing to handover. Calls everything below in order. | signing check, `brand/`, the site |
| `disojo-digital-systems` | The whole software job: Leak Map to roll-out. | `LEAK-MAP.md`, the system |
| `disojo-type-*` | Website type: pages, proof, what to collect (product, catalogue, studio, person, local, software). | loaded at the idea stage |
| `disojo-brand-system` | Phase 6. Order of brand skills, `tokens.json`, token checker. | `brand/tokens.json` |
| `disojo-3d-lookdev` | Phase 7. Light, material, bloom recipe, test scene, 3D scope sheet. | test scene |

## B. Intake and discovery
| Skill | Use it for |
|---|---|
| `disojo-site-system` | Asset request, inventory script. Phase 2. |
| `brand-context` | Foundation file other brand skills read. Keep it at `brand/00-context.md`. Its "always run first" rule applies to brand work only. |
| `brand-discovery` | The structured, resumable interview (purpose, positioning, audience, personality, voice, narrative, founder tension). Phase 3. |
| `brand-strategy` | Questionnaire to a full strategy report. Phase 3. |
| `positioning-audit` | Quick read of whether the current message is clear. Phase 3. Overlaps `brand-positioning`; use whichever fits. |
| `social-proof-mining` | Pull real proof (reviews, chats, testimonials). Never invent. |
| `audience-personas` | Only when interviews, reviews or CRM notes exist. |
| `agent-reach` | Research the client's market, competitors and platforms on the web. |
| `search-first` | Look for existing tools or libraries before writing custom code. |

## C. Positioning, name, identity
| Skill | Use it for |
|---|---|
| `competitor-branding`, `competitor-positioning` | How competitors present themselves and where the gap is. Phase 4. Facts only; no claims about competitors you cannot support. |
| `target-audience` | Personas, psychographics, audience language. |
| `brand-positioning` | Position statement, territory, proof points. |
| `brand-naming` | Only if the client needs a name (it also scores existing options). |
| `brand-identity` | Visual identity brief. Phase 6. |
| `disojo-logo-design` | **The pipeline for final marks.** Concept, type first, 24 px test, three directions, SVG export. |
| `brandkit` | Fast concept board to show direction (positioning line, palette with contrast, fonts with licence notes, logo sketches, mockups). Not final art. |
| `brand-voice` | Verbal identity. **Use this one.** `brand-voice-arnab` is the third-party copy; read for ideas only. |
| `brand-messaging`, `brand-story`, `brand-manifesto` | Taglines and proof, the origin story, a belief statement. Only when the concept needs them. |
| `brand-packaging` | If the client sells packaged goods; feeds the 3D label art. |
| `brand-audit` | When the client already has a brand: scores identity, messaging, voice, positioning and differentiation before redesigning. Phase 3. |
| `rebranding` | When the engagement is a transformation of an existing brand: diagnosis, equity worth keeping, scope, transition, rollout. Phases 3 to 6. |
| `brand-guidelines` | Last, from approved tokens. Handover document. |
| `disojo-brand-motion-intake` | When a brand needs a motion and visual look defined (MOTION.md) before building. |

## D. 3D
| Skill | Use it for |
|---|---|
| `disojo-packaged-product-3d` | Cans, jars, bottles, boxes: template model plus client label art, runnable kit, dieline request. Sourcing and licence references. |
| `disojo-3d-product-site` | A real GLB supplied or modelled; page-level recipe for the scroll-driven hero object. |
| `3d-web-experience` | R3F, GLB compression and performance targets. |
| `disojo-3d-lookdev` | The look recipe and Gate 3 protocol. |

## E. Design craft
What not to do: `disojo-site-system/references/defaults-to-avoid.md`, the one list. Interaction craft only: `make-interfaces-feel-better`, `emil-design-eng`. Copy: `no-ai-slop`. Panels, carousels and decks: `disojo-panel-designer`, `frontend-slides`.
Build correctness: `disojo-site-system/references/build-craft.md`. The six imported design skills were archived 2026-11-09 (`skills-archive/2026-11-09/`) after review with Tejjomay.

## F. Motion
`motion-foundations`, `motion-patterns`, `motion-advanced`, `disojo-motion-craft`, `review-animations` (audit motion code). Brand ease and durations come from `brand/tokens.json`.

## G. Build and quality
| Skill | Use it for |
|---|---|
| `disojo-site-system` | Starter plumbing (Lenis, build and meta scripts) and the deploy scripts. **Never ship its look.** |
| `disojo-guardrails` | No placeholders, small components, defensive states, real verification. |
| `contract-first` | If the site talks to an API or form backend. |
| `disojo-site-system`, `browser-qa`, `verification-loop`, `click-path-audit`, `safety-guard` | Phase 10 and any risky operation. |
| `react-patterns`, `react-testing`, `error-handling` | Only if the build uses React or R3F: component patterns, tests, defensive error states. |
| `database-migrations` | Only if the site gets a real backend with a database. |
| `ui-demo` | Recording a product-style walkthrough of the finished site for the client or the case study (only with the client's permission). |
| `disojo-sound-design` | Only if the concept uses sound. Interaction sounds are an open decision for the Disojo site; ask before adding sound to a client site. |
| `launch-retrospective` | Phase 12: what worked, what broke, what to feed back into these skills after each project. |

## H. Housekeeping
`disojo-memory-backup` (back up notes; it pushes to GitHub, ask first). `context-budget` if the context fills. `ai-brain` is not part of this workflow.

## I. Do NOT use for the flagship (out of scope unless the client buys it separately)
`brand-architecture`, `brand-partnerships`, `personal-brand`, `b2b-brand-marketing`, `d2c-marketing`, `email-marketing`, `whatsapp-marketing`, `aso`, `ugc-strategy`, `influencer-marketing`, `meta-ads`, `google-ads`, and the content-operation skills (`disojo-reel-studio`, `disojo-carousel-studio`, `disojo-content-*`). They are separate services. Bringing them in is a scope change.

## I2. The rest of the installed skills (deliberately not part of this offer)
The remaining roughly 50 installed skills are social-content and marketing tools (reels, carousels, hooks, captions, hashtags, comment and DM tools, analytics readouts, trend and competitor teardown for social accounts, X and LinkedIn, creator outreach, UTM and paid social briefs) plus a few workflow utilities (`santa-method`, `strategic-compact`). They belong to the content operation or to other services. Use them only if the client buys that work separately; the guidebook does not depend on them.

## J. Overlaps and which wins
- Voice, both used in the Visual identity offer: `brand-voice` when the client has real writing to learn from (ignore its Affaan/ECC defaults); `brand-voice-arnab` when they have none.
- Launch and proof, both in the offer since 2026-11-09: `brand-launch` for rollout order, sized down for an owner-run business (no press-wire timetable); `brand-measurement` only for what such a business can actually read (branded search, direct traffic, enquiries and their source, close rate), with the baseline taken BEFORE launch. Skip its awareness surveys and its CAC correlation line unless real data exists.
- Logo: `disojo-logo-design` for finals; `brandkit` for the board.
- Positioning: `brand-positioning` (full) or `positioning-audit` (quick); not both.
- Postcards and Ascender are never reference builds for this tier, wherever a skill mentions them.
