# WORKSPACE CONSTITUTION & AGENTS DIRECTIVE

## 0. SUPREME DIRECTIVE & HARD CONSTITUTIONAL RULE

> ### ⚠️ HARD RULE: NEVER EVER LIE TO TEJJO, NO MATTER WHAT
> 1. **NEVER EVER LIE TO TEJJO, NO MATTER WHAT.**
> 2. **IF YOU CAN'T UNDERSTAND ANYTHING, BE BRUTALLY HONEST, OR STATE LIMITATIONS.**
> 3. **NEVER HALLUCINATE, FABRICATE, OR FAKE ANYTHING.**
> 4. **ZERO FALSE ASSURANCES:** Never claim a feature is "working", "tested", or "flawless" unless it has been verified with concrete proof and visual reality.
> 5. **BRUTAL HONESTY OVER FALSE PLEASING:** If something fails, looks broken, or is beyond current capabilities, state the truth immediately and plainly without defensive excuses or sugarcoating.
> 6. **ZERO UNCONFIRMED FACTS:** No business detail, branch location, brand name, hardware model, tax code, registration number, or pricing rule is to be added unless directly confirmed by Tejjo in writing.

## 1. THE IRON NEGATIVE CONSTRAINTS (HARD PROHIBITIONS)

> ### 🚫 ABSOLUTE PROHIBITIONS
> 1. **NO INVENTED LOCATIONS / BRANCHES:** Never create secondary centers, satellite branches, or alternate cities unless Tejjo explicitly names them. KDC is strictly 1 studio in Chembur, Mumbai.
> 2. **NO INVENTED BRAND INVENTORY / HARDWARE:** Never assign specific hardware brands or instrument models (Roland, Pearl, Yamaha, etc.).
> 3. **NO FABRICATED SEATING / KIT ASSIGNMENTS:** Students have no assigned kits; every student walks into class and randomly sits at an available kit.
> 4. **NO FAKE STATUTORY / TAX CODES:** Zero dummy GSTINs, zero fake SAC codes (999299), zero MSME headers. If unconfirmed, leave empty or ask.
> 5. **NO SILENT GAP-FILLING:** If a real-world business rule is missing, DO NOT invent a default value that mimics a rule. Stop and ask Tejjo.
> 6. **NO UNSOLICITED FEATURE ADDITIONS:** Build strictly what Tejjo instructed on that turn. Do not add unrequested helper features or speculative tables.

## 2. CLIENT DIRECTIVE: RAZORPAY ON HOLD (KUNAL ATHREYA - SEP 15, 2026)

> ### ⏸️ CLIENT STATUS: RAZORPAY INTEGRATION PAUSED
> * **Direct Directive from Kunal Sir (10:29–10:30 AM, Sep 15, 2026):**
>   > *"So you hold on razorpay. Need to still finalize that part you do the payment module development later when I finalize things."*  
>   > *"You can start the other things now. I have to yet decide whether to incorporate razorpay or no."*
> * **Actionable Constraints:**
>   1. **Zero Active Effort on Razorpay API / Webhook Infrastructure:** Do not spend development bandwidth on Razorpay live merchant setup until Kunal Sir finalizes.
>   2. **Keep Payments Architecture Modular:** Support Razorpay, direct UPI / QR, or manual bank reconciliation.
>   3. **Immediate Priority Shift:** Focus 100% on scheduling, 12-state confirmation engine, attendance, and admin controls.

## 3. THE RULE OF GROUND-TRUTH REVERSE ENGINEERING & VISUAL REALITY VERIFICATION

> ### 🎯 CONSTITUTIONAL MANDATE: LOCK IN FROM TURN 1 (ZERO GUESSWORK, ZERO COMPROMISE)
> 1. **GROUND-TRUTH FIRST (ZERO SPECULATIVE MATH):** Whenever an external reference, website, or design benchmark exists, NEVER guess numbers, CSS properties, aspect ratios, or animation physics. Extract the ground truth immediately via browser devtools, network bundle extraction, or DOM/CSS inspection. Speculative approximations are banned.
> 2. **VISUAL REALITY VERIFICATION ACROSS ALL STATES:** Never declare any UI/visual feature "done", "working", or "fixed" based solely on TypeScript compilation or code inspection. Run automated multi-state visual audits (headless browser screenshots) verifying:
>    - Initial render state ($T=0$)
>    - Dynamic/in-motion state ($T > 0$ after loop/drift)
>    - Interactive state (hover, focus, repulsion, active click)
>    - Theme variations (e.g. Light/Studio vs Dark/Obsidian)
>    - Viewport clearance (no collision with neighboring headlines, buttons, or navbars)
> 3. **FULL ARCHITECTURAL OWNERSHIP (NO TIMID HALF-MEASURES):** Never compromise visual quality by timidly squeezing complex physics into restrictive parent containers. If a feature requires an off-screen trajectory, absolute coordinate space, or custom layout breakout, take full ownership of the architecture and coordinate system.
> 4. **PURE ALPHA MASKING OVER MILKY OVERLAYS:** Never simulate fades or dissolutions using solid-color gradient overlay `div`s (e.g. `bg-gradient-to-b from-white`). They create contrast bands, fail on dark modes, and leave visible seams. Use pure CSS `maskImage: linear-gradient(...)` to achieve true alpha dissolution.
> 5. **BRUTAL RIGOR ON TURN 1:** Do not wait for user escalation, frustration, or anger to trigger high-conviction engineering. Every initial implementation must be executed with the exact same deep reverse-engineering, mathematical precision, and screenshot verification that would be demanded after an escalation.

## 4. CASE STUDY: THE PARALLEL HQ HERO SHOWCASE CASCADE

> ### 📌 POST-MORTEM & PERMANENT ENGINEERING BLUEPRINT
>
> #### 1. Context & Objective
> Replicate the high-end diagonal card stream from Parallel HQ for the Leadvix hero section: an infinite, continuous 45° card cascade with physics-based hover repulsion, clean upright cards, and zero overlap with the headline or CLI workbench.
>
> #### 2. Failure Modes (Why Quality Initially Failed)
> * **Failure Mode 1: Local Incremental Guessing.** Nudged card steps incrementally ($56\text{px} \to 82\text{px}$) and added arbitrary transforms ($-4^\circ$ skew) instead of reverse-engineering how Parallel HQ actually built the stream.
> * **Failure Mode 2: In-View Coordinate Inception.** Positioned the card stream inside a $500\text{px}$ bounded box where cards suddenly popped into existence mid-air right under the navbar.
> * **Failure Mode 3: Milky Background Hack.** Used `bg-gradient-to-b from-white` overlay containers to dissolve cards. In dark mode (Obsidian), this created a glowing grey milk box that wrecked the neo-brutal visual language.
> * **Failure Mode 4: Validating Code Instead of Visual Reality.** Declared the component functional because Next.js compiled without errors, ignoring the actual visual reality that cards were overlapping the CLI buttons and popping in mid-air.
>
> #### 3. The Winning Methodology (Ground-Truth Reverse Engineering)
> * **CDP Bundle Reverse-Engineering:** Extracted Parallel HQ's production client bundle (`__federation_expose_*.js`), uncovering the exact exponential hover repulsion formula:
>   $$\Delta = b \cdot \exp(-x \cdot (|s| - 1)) \quad \text{where } b = 115, \; x = 1.8$$
> * **Upright Rectangular Geometry:** Kept cards completely upright ($0^\circ$ skew, $0^\circ$ rotation) with exact $330/426 \approx 0.774$ aspect ratio ($216\text{px} \times 272\text{px}$, `rounded-[18px]`).
> * **Off-Screen Continuous Vector:** Anchored the container to `absolute top-0 right-0` of the hero section and placed card 0 at $Y = -50\text{px}$ so cards enter naturally from outside the viewport along a true 45° diagonal ($\Delta x = -118\text{px}, \Delta y = +118\text{px}$).
> * **Mathematical Alpha Dissolution:** Swapped all color overlay divs for pure CSS:
>   ```css
>   maskImage: 'linear-gradient(to bottom, transparent 0px, black 65px, black calc(100% - 90px), transparent 100%)'
>   ```
> * **Autonomous Multi-State Visual Verification:** Ran automated Playwright/Puppeteer screenshot capture across $T=0$, $T=2\text{s}$ drift, hover state, and theme toggle before presenting work to the user.

