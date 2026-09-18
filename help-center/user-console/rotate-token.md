# Rotate API token

JoyProxy exposes multiple tokens for automation. Rotating a token invalidates the old value—plan updates before you revoke production keys.

## Token types

| Token | Typical use |
| --- | --- |
| **API token** | Endpoint extraction (`/v2/extract`, `/v1/extract-long`, whitelist APIs) |
| **Master User Token** | Order and account management APIs |
| **Scraping API Token** | `/v1/fetch` only — rotate in Web Scraping API → API Center |
| **AI Access Token** | OpenClaw Skill / AI MCP — from [AI endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai) |

## Rotate API or Master token

1. Open [Account settings](https://www.joyproxy.com/admin-settings.html).
2. Locate **API token** or **Master User Token**.
3. Click **Generate** / **Rotate** and copy the new value immediately.
4. Update CI, `.env` files, and [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) saved authorizations.
5. Revoke or delete the old token if the UI offers an explicit revoke step.

> **Important**
>
> Master User Token grants order-level operations. Scope CI jobs to the **API token** when possible.

## After rotation

Run a smoke test:

- Extract one rotating line via API or OpenAPI playground
- Or call `/v1/fetch` with a fresh Scraping API Token

If automation fails with `401`, search configs for the old token string.
