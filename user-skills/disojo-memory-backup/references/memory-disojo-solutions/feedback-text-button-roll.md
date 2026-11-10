---
name: feedback-text-button-roll
description: Hard rule 2026-11-10: every textual button on every site has the up down (Disojo) or side up down (Print Elements) label motion
metadata:
  type: feedback
---

Every textual button has one of two label motions. "Up down" is Disojo's: the whole label rolls up and its copy arrives from below. "Side up down" is Print Elements': each letter rolls up to its twin, one after another, 14ms per letter, so the roll travels sideways across the word (found in Print Elements v8 `src/scripts/buttons.js`; Tejjo's words are not the technical names).

**Why:** Tejjo said so on 2026-11-10 while finishing lilt: "every textual button will have the up down effect or side up down effect".

**How to apply:** covers buttons, links styled as buttons, nav links and text calls to action. Exact code in `disojo-site-system/references/text-button-motion.md`; `premium_gate.cjs` fails a visible text button without `.roll` or `.wave`. Shape and colour still come from the idea. Curve advice in [[feedback-button-motion]]. First used on [[project-lilt]].
