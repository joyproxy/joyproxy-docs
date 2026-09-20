# Master User Token

JoyProxy isolates tokens by job so a leaked key cannot do everything.

**Rule: each token type has one job. Do not mix them.**

---

## Four token types

| Token | Where it is used | Never use it for | Where to get or rotate it |
| :--- | :--- | :--- | :--- |
| **Master User Token** | Highest-privilege account API. OpenAPI orders, live Available Balance, whitelist changes. | **Do not** extract proxy IPs, **do not** call Web Scraping API, **do not** put it on a public page. | **My Account** → **Security & API** (**Rotate token**) |
| **API Token** | Batch endpoint lists only. Scripts call `/v2/extract`, `/v2/extract-long`, or `/v2/extract-custom` for host:port. | Not for placing orders or reading balance. | **Endpoint generator** — the `token=...` query on the **API URL** |
| **Scraping API Token** | Public Web Scraping API (`/v1/fetch`) and language SDKs. | Not for proxy extract, not for account admin. | **Web Scraping API** → **API Center** |
| **AI Access Token** | **MCP** (`https://api.joyproxy.com/Mcp`) and **OpenClaw Skill** (`https://api.joyproxy.com/Skill`) so Cursor, VS Code, or Claude can call JoyProxy. | Not a proxy User/Pass. Do not connect it to `gate.joyproxy.com`. | **Endpoint generator** → **AI generator** |

---

## 1. Rotate token (Master User Token)

Master User Token is how server-side OpenAPI manages funds and orders. If staff change, a config file leaks, or you suspect exposure, rotate it immediately:

1. Open **My Account** → **Security & API**.
2. In **Master User Token**, the value is masked. Click the eye to **Show token**, or **Copy**.
3. Click the red **Rotate** button.
4. Confirm when the dialog warns that the current token stops working at once. A new key is created immediately.
5. Copy the new key and update every production caller.

---

## 2. Rotate extract API Token

If crawlers or third-party tools use a fixed extract URL and that URL leaks, extract quota can be burned:

1. Open **Endpoint generator**.
2. Switch to the matching network and product mode.
3. Change options or generate again. The new **API URL** contains a new token.
4. Replace the old request URL in your scripts. The gateway rejects the previous URL at once.

---

## 3. Rotate Scraping API Token

1. Open **Web Scraping API** → **API Center**.
2. Find **Scraping API Token** (top-right or in the playground).
3. Click **Rotate** and confirm. Update every `/v1/fetch` job that used the old token.

---

## 4. Rotate AI Access Token

1. Open **Endpoint generator**.
2. Switch to **AI generator**.
3. In AI Access Token, click **Rotate** and confirm.
4. The old token dies immediately. Update local Cursor or Claude MCP config (`headers.x-ai-access-token`).

---

## After a rotation

Send a simple request from a terminal:
- `401 Unauthorized` or an auth error means some environment still has the old token. Search env vars and restart the service.
- More OpenAPI detail: <a href="../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">Programmatic extraction and a local proxy pool</a>.
