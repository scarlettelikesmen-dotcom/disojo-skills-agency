---
name: project-blender-autonomous-setup
description: 2026-11-03 Blender MCP bridge installed so Claude drives Blender from prompts; three-object proof test is next
metadata:
  type: project
---
Goal (Tejjo 2026-11-03): Blender fully autonomous. Tejjo prompts and talks, never designs inside Blender. Tejjo says it's unproven and wants it proven by a test.
Setup done: Blender 5.2.2 LTS on an M1 Pro with 16 GB. Community bridge ahujasid/blender-mcp (commit 992233b, 29 Oct 2026) cloned to ~/.disojo-tools/blender-mcp and code reviewed (localhost socket only). Add-on installed by Tejjo from ~/Downloads/blender_mcp_addon.py with telemetry consent off. MCP server registered at user scope as `blender` (uv run --directory ... mcp-for-blender, DISABLE_TELEMETRY=true).
Each session: in Blender press N in the viewport, open the BlenderMCP tab, click Connect.
Next: confirm with a viewport screenshot, then run the three-object test, each judged by Tejjo's eyes: (1) Postcards bottle, built by me; (2) Disojo mark as stone, TRIONN style; (3) one organic object made with an AI generator (Tripo or Meshy free tier: check current limits first; Tejjo creates the account and enters the key himself) and cleaned up by me.
Approved 2026-11-03: add the A-F technique table and asset scripts to the skills, plus a separate 3D performance budget, and add Blender to the skills. Not done yet.
Never: use --factory-startup together with save_userpref (it would reset Tejjo's Blender preferences).
Related: [[project-premium-3d-research-2026-11-03]]
