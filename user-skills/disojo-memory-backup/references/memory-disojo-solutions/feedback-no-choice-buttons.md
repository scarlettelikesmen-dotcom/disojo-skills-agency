---
name: feedback-no-choice-buttons
description: "Tejjo dislikes the next-step box's question with two option buttons; ask in plain text instead"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-15T13:46:13.082Z
---

On 2026-11-15 Tejjo asked how to stop "these double options": the question and two reply buttons the app draws from wrap_up's `ask` and `actions`. They don't like them.

**Why:** The buttons push them towards a pre-made answer and a forced choice when they want to talk things through.

**How to apply:**
- Call wrap_up with a recap only. Never pass `ask` or `actions`.
- Put any question at the end of the closing message, in plain text.
- Don't use AskUserQuestion pickers either unless Tejjo asks for them.

Related: [[project-level-trading-playbook]].
