# Rotate tokens

JoyProxy exposes several tokens for automation. Rotating a token invalidates the old value—update scripts before you rotate production keys.

## Token types

| Token | Typical use | Where |
| --- | --- | --- |
| Extract **API URL** (`token=` inside it) | `/v2/extract`, `/v2/extract-long`, `/v2/extract-custom` | Copy the URL on [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) |
| **Master User Token** | Order and account management APIs | [Account settings](https://www.joyproxy.com/admin-settings.html) |
| **Scraping API Token** | `/v1/fetch` only | Web Scraping API → API Center |
| **AI Access Token** | OpenClaw Skill / AI MCP | [AI endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai) |

## Rotate Master User Token

1. Open [Account settings](https://www.joyproxy.com/admin-settings.html).
2. Locate **Master User Token**.
3. Click **Rotate** and copy the new value immediately.
4. Update CI, `.env` files, and [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) saved authorizations.

## Rotate the extract API token

Rotate from the [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html). After rotation, copy a fresh **API URL** — existing extract URLs stop working.

## After rotation

Run a smoke test:

- Call the new extract API URL, or use the OpenAPI playground
- Or call `/v1/fetch` with a fresh Scraping API Token

If automation fails with `401`, search configs for the old URL or token string.
