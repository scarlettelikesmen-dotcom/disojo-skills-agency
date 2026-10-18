# Disojo reel art direction v1 (2026-10-17), per skill `disojo-art-direction`. Replaces the flat typography-only panels ("too raw").
## 1. Concept (no colour or effect named)
Order from mess: a system that was loose and tangled becomes one clean thing, one move at a time. Every idea in the reel is the same set of pieces re-forming.
## 2. Hero object
ONE set of nine rounded modules (bars) that persists across every panel and changes shape per idea. One module is cream (your business), the rest are ink. Built in code (Three.js via Remotion), real lighting and shadow, not a drawn icon.
## 3. Story in beats (this reel; pieces re-form at each panel)
Hook "Agencies build bad software": scattered, tilted, colliding pieces. Clean: pieces snap into one aligned stack. Balance ("your business, not the money"): the cream module outweighs a pile on a beam, the beam tips to it. Loop ("you get business, we get business"): pieces form a ring, the cream module circulates. Rise ("more business for you"): the pieces climb as steps.
## 4. Palette (tokens, 4 tones, each with a job)
Ink #131311 (surface, modules), Cream #E6DDD6 (key module, type on ink), Paper #E8E8E3 (light surface), Shadow = ink at low alpha. No accent hue, depth from light.
## 5. Type
Host Grotesk only (display, variable weight) plus the wordmark. Sentence case, no tracked all-caps labels, no italic accents. Panel titles smaller than the object so the object is the hero.
## 6. Signature move
The same pieces re-form between ideas with spring physics and a ghost of the previous formation (soft shadow trail). One cream module is always the protagonist.
## 7. Voice (3 adjectives, 2 lines)
Calm, exact, a little dry. "Loose pieces. Clean system." / "Your business first."
## 8. Real vs generated
All geometry, light and type are code. Footage is real. No stock, no AI imagery.
## 9. Never list
Dot grids, glow blobs, icon sets, fake UI cards, charts with invented numbers, tracked all-caps eyebrows, italic single-word accents, avatar circles, anything that looks like a template.
## Look-dev (from `disojo-3d-lookdev`): ACES filmic tone mapping, environment light + one key light with soft shadow, clearcoat on ink modules (roughness .2-.3), matte cream module, contact shadow on a ground plane, restrained bloom if any, camera move per beat, scene colours from tokens.
## Footage: graded (lifted shadows, warmer skin, gentle S-curve, slight sharpen) so it stops reading "raw".
