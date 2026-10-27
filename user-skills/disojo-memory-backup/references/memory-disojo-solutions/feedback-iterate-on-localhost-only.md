---
name: feedback-iterate-on-localhost-only
description: "Disojo site: iterate on localhost (4399) only; do not push to the Vercel phone preview unless asked"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 60ef3da9-acfc-4f23-89f1-e7c9ce0538c6
  modified: 2026-10-27T17:13:14.172Z
---

Tejjo said on 2026-10-27: "stop iterating in vercel just use localhost, saves a lot of time". Show changes on localhost:4399 (screenshots from there); do not run `_archive/phone-preview.sh` unless they ask for a phone link or say "send link".

**Why:** each preview push takes minutes (the Vercel API polling often times out) and they review on localhost anyway.
**How to apply:** change locally, verify with screenshots, report. Deploy to live only on "deploy". Supersedes the older "push to the phone-preview link" step in the CLAUDE.md workflow. See [[feedback-how-tejjo-iterates]].
