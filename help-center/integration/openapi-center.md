# OpenAPI Center

<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> is the interactive reference for JoyProxy HTTP APIs—try requests in the browser, copy code samples, and validate tokens before shipping to production.

## What you can exercise

| API family | Examples |
| --- | --- |
| Proxy extraction | `/v2/extract`, `/v1/extract-long`, `/v1/extract-custom` |
| Whitelist | Add/remove allow-listed IPs |
| Orders | Master User Token operations |
| Web Scraping API | `/v1/fetch` with Scraping API Token |

## Before you start

1. Sign in to the console.
2. For extract APIs, copy the **API URL** from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> — `token=` is already in the URL.
3. For order APIs, use the **Master User Token** from <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a>.
4. For `/v1/fetch`, copy the **Scraping API Token** from Web Scraping API → API Center.

When you are signed in, OpenAPI Center can fill extract and master tokens for the **Authorize** dialog. You do not copy an extract token from Account settings.

> **Important**
>
> Extract and whitelist calls use the token inside the Endpoints **API URL**. Order APIs use **Master User Token**. Web Scraping API uses **Scraping API Token**.

## Typical workflow

1. Open the operation (for example `GET /v2/extract`).
2. Fill query parameters (`network_type`, `count`, `duration`, …).
3. Execute and inspect JSON—usernames must be copied **verbatim** into clients.
4. Export the generated snippet into your language of choice.

## When OpenAPI is not enough

- Narrative guides: <a href="../getting-started/rotating/README.md" target="_blank" rel="noopener noreferrer">Getting started</a> series
- Managed fetches: <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a>
- AI-driven generation: <a href="integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integrate proxies in AI</a>

Keep tokens out of screenshots and support tickets—rotate via <a href="../user-console/rotate-token.md" target="_blank" rel="noopener noreferrer">Rotate token</a> if exposed.
