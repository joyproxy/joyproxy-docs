# OpenAPI Center

[OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) is the interactive reference for JoyProxy HTTP APIs—try requests in the browser, copy code samples, and validate tokens before shipping to production.

## What you can exercise

| API family | Examples |
| --- | --- |
| Proxy extraction | `/v2/extract`, `/v1/extract-long`, `/v1/extract-custom` |
| Whitelist | Add/remove allow-listed IPs |
| Orders | Master User Token operations |
| Web Scraping API | `/v1/fetch` with Scraping API Token |

## Before you start

1. Sign in to the console.
2. For extract APIs, copy the **API URL** from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) — `token=` is already in the URL.
3. For order APIs, use the **Master User Token** from [Account settings](https://www.joyproxy.com/admin-settings.html).
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

- Narrative guides: [Getting started](../getting-started/rotating/README.md) series
- Managed fetches: [Web Scraping API](../getting-started/scraping-api/README.md)
- AI-driven generation: [Integrate proxies in AI](integrate-proxies-in-ai.md)

Keep tokens out of screenshots and support tickets—rotate via [Rotate token](../user-console/rotate-token.md) if exposed.
