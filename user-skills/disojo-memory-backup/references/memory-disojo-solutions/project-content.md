---
name: project-content
description: "READ FIRST for content work - the three accounts and two worlds, 3 posts a day model, locked looks, the reel and carousel engines (Disojo edit style locked v9), copy skills, where everything lives"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T15:00:26.113Z
---

Merged 2026-11-16 from 4 notes (content hub setup, two worlds, copywriting systems, editing engine). Originals: `memory/_archive/2026-11-16/`. **Source of truth: `content-hub/MASTER-CONTEXT.md`** (history in DECISIONS.md, model in `brands/OPERATING-MODEL.md`). Skill `disojo-content-os`; a single clip `disojo-reel-studio`. Posting is always Tejjo's.

## Accounts (decided 2026-10-14, updated 2026-10-18)
- **Disojo world:** the studio account, real handle @disojostudio (was @disojo.solutions until a username cooldown ended, per Tejjo 2026-10-18; confirm it switched) and Coded by Abel (@codedbyabel, was @codewithabel, build in public, Tejjo's face). Both bios carry disojostudio.com. 6 platforms incl. LinkedIn (company page = Disojo, personal profile = coding home).
- **Trading world, fully separate:** @abelkapoor, see [[project-trading-account]]. 5 platforms.
- All: tier-1 US/UK/CA/EU audience, English only. Never cross worlds. Tradriv and all older reels are discarded.
- Model: 3 posts a day per account: A talking head (trust), B hot take with trending audio (reach), C carousel 6 to 7 slides. Tejjo films A, approves everything, adds audio, posts. Claude never posts, DMs or comments. Sunday batch filming; iPhone 14 Pro, SDR 4K30, HDR off (content-hub/FILMING-CHECKLIST.md).

## Looks (locked 2026-10-14, v2; do not redesign without Tejjo's OK)
- Disojo: ink/cream, Host Grotesk, leak-drip line. Coded by Abel: cobalt #2338FF + acid #D9FF3F, Bricolage Grotesque, neo-brutal shadows, giant outlined DAY number. Trading: "The Rulebook", off-white/black/one red #E8321C, Big Shoulders Display + Newsreader italic, B&W speaker.
- Specs: `content-hub/brands/<slug>/visual-identity.md`. Reel captions stay Host Grotesk, large (don't re-suggest fonts).

## Editing
- **Disojo edit style LOCKED 2026-10-17: skill `disojo-editing-locked` (v9).** Recipe from approved v8b: 2D popup panels with real screenshots, hard-cut punch zooms, slow push on thesis lines only, word-by-word captions with an active-word box, cutaways of real work.
- Engine: Remotion in `~/.claude/skills/disojo-reel-studio/engine-remotion/`, working copy `content-hub/remotion-lab/`. Base prep `engine/tools/make_base.py` (cut, HDR to SDR, grade, voice clean).
- Verdicts: 3D modules "disgusting"; dotted patterns look AI; captions-only edits are not enough when Tejjo asks for motion. Trading edits stay light; heavy editing for Coded by Abel and Disojo.
- Open: trading look in motion, codewithabel components (terminal animation, screen-recording zoom), captions redesign, carousel templates. Hinglish transcription and phone playback untested.

## Copy
- Skills `disojo-copywriting`, `codewithabel-copywriting`, `abelkapoor-copywriting`, reports in `content-hub/reports/*-2026-10-18.md`. Launch plan `content-hub/reports/launch-plan-2026-10-18.md`.
- Findings: trading = story/identity for reach plus a named-model replay series for trust; coding = tangible demos and tool tests; Disojo's owner-facing lane is empty.
- Every TO CONFIRM item in those files needs Tejjo's facts. KDC before-story facts: `brands/disojo/kdc-before-story.md` (in tier-1 copy avoid "WhatsApp" and "QR").
- Communities: Discord for trading, Skool for coding; Tejjo runs DMs with ManyChat.
