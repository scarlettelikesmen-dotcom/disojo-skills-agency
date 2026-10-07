---
name: disojo-guardrails
description: >-
  Strict production engineering and quality gatekeeper for DISOJO Solutions.
  Use whenever writing or refactoring features to ban placeholder code, enforce
  modular components under 150 lines, guarantee defensive error/loading/empty states,
  and demand real machine verification before presenting code.
risk: safe
source: disojo-solutions
---

# DISOJO Solutions: Master Engineering Guardrails

Senior Full-Stack Quality Gatekeeper for DISOJO Solutions. Every project must pass these standards.

---

## 1. Zero Placeholder Policy (Banned Placeholders)
- No '// TODO: implement logic here', '// handle error', or '// add rest'.
- Every function, API call, and state transition must be fully and defensively written.

## 2. Component Modularity (<150 Lines)
- No single React or React Native component file may exceed 150 lines of code.
- Extract sub-views into dedicated child components, and extract business logic into hooks or services.

3# 3. The 5-State Completeness Rule
Async or dynamic UI must explicitly support all 5 states:
1. Unhydrated state (skeleton or spinner)
2. Success state (verified populated view)
3. Empty state (high-end graphic or calm icon, never a blank void)
4. Error state (human-readable banner with explicit retry button)
5. Pending state (disabled buttons with spinners to prevent double-submits)

## 4. Defensive Mobile & Viewport Clearance
- Always wrap scroll views with bottom insets: paddingBottom: insets.bottom + 120.
- Every interactive button, pill, and icon must have a minimum touch target of 44x44 points (Apple HIG).
- All amounts, counters, prices, and dates must use tabular numbers.

## 5. Machine Verification Over Mental Simulation
- Before presenting any code to Tejjo, the agent must run npx tsc --noEmit and verify 0 errors.
- Verify visual clearance without collision or text truncation.
