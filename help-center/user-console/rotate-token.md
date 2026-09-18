# Rotate tokens

JoyProxy exposes several tokens for automation. Rotating a token invalidates the old value—update scripts before you rotate production keys.

## Token types

| Token | Typical use | Where |
| --- | --- | --- |
| Extract **API URL** (`token=` inside it) | Endpoint generator, whitelist, credentials | Copy the URL on <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> |
| **Master User Token** | Order and account management APIs | <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a> |
| **Scraping API Token** | Web Scraping API | Web Scraping API → API Center |
| **AI Access Token** | OpenClaw Skill / AI MCP | <a href="https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai" target="_blank" rel="noopener noreferrer">AI endpoint generator</a> |

Which operation uses which token: <a href="../integration/openapi-center.md" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Rotate Master User Token

1. Open <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a>.
2. Locate **Master User Token**.
3. Click **Rotate** and copy the new value immediately.
4. Update CI, `.env` files, and <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> saved authorizations.

## Rotate the extract API token

Rotate from the <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>. After rotation, copy a fresh **API URL** — existing extract URLs stop working.

## After rotation

Run a smoke test in <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> or the Web Scraping API playground with the new token.

If automation fails with `401`, search configs for the old URL or token string.
