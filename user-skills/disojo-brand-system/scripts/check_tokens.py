#!/usr/bin/env python3
"""Flag hex colours in a project that are not in brand/tokens.json.

Usage: python3 check_tokens.py <project-folder>
Exit 0: all colours are in the tokens. Exit 1: off-palette colours found. Exit 2: usage or tokens problem.
"""
import json
import re
import sys
from pathlib import Path

EXTS = {".css", ".scss", ".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs", ".html", ".astro", ".vue", ".svelte", ".svg"}
SKIP_DIRS = {"node_modules", "dist", "build", ".git", ".next", ".astro", ".vercel", "brand"}
HEX = re.compile(r"#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b")


def expand(h: str) -> str:
    h = h.lower().lstrip("#")
    if len(h) in (3, 4):
        h = "".join(c * 2 for c in h)
    return "#" + h[:6]


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    root = Path(sys.argv[1]).expanduser().resolve()
    tok = root / "brand" / "tokens.json"
    if not tok.is_file():
        print(f"No tokens file at {tok}")
        return 2
    try:
        data = json.loads(tok.read_text())
    except json.JSONDecodeError as e:
        print(f"tokens.json is not valid JSON: {e}")
        return 2
    allowed = {expand(c["hex"]) for c in data.get("colors", []) if c.get("hex")}
    if not allowed:
        print("tokens.json lists no colours")
        return 2
    if data.get("todo"):
        print(f"NOTE: tokens.json still has {len(data['todo'])} todo item(s): {data['todo']}")

    off = {}
    scanned = 0
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in EXTS:
            continue
        rel = path.relative_to(root)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        scanned += 1
        try:
            text = path.read_text(errors="ignore")
        except OSError:
            continue
        for n, line in enumerate(text.splitlines(), 1):
            for m in HEX.finditer(line):
                h = expand(m.group(0))
                if h not in allowed:
                    off.setdefault(h, []).append(f"{rel}:{n}")
    print(f"Scanned {scanned} files against {len(allowed)} token colours.")
    if not off:
        print("PASS: no off-palette colours.")
        return 0
    print(f"FAIL: {len(off)} off-palette colour(s):")
    for h, locs in sorted(off.items(), key=lambda kv: -len(kv[1])):
        shown = ", ".join(locs[:4]) + (f" (+{len(locs) - 4} more)" if len(locs) > 4 else "")
        print(f"  {h}  x{len(locs)}  {shown}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
