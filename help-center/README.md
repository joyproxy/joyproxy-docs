# Help Center source

Canonical docs live in this folder as two parallel trees:

| Locale | Path | Future site URL |
| --- | --- | --- |
| English (default) | `en/` | `https://www.joyproxy.com/help/` |
| Simplified Chinese | `zh/` | `https://www.joyproxy.com/help/zh/` |

- Edit Markdown **here** (joyproxy-docs). Do not treat Web `scripts/docs_zh` / `docs_en` as source of truth.
- Each locale has its own `SUMMARY.md`. Link paths must stay identical; only titles differ.
- `redirects.json` maps legacy `help.html` hashes and old GitBook slugs to relative paths under `en/` or `zh/` (same path, no language prefix).
