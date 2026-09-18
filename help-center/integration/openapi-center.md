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
2. Copy the correct token from [Account settings](https://www.joyproxy.com/admin-settings.html) or Web Scraping API → API Center.
3. Paste it into the OpenAPI **Authorize** dialog for the operation you are testing.

> **Important**
>
> Use **API token** for extraction and whitelist. Use **Master User Token** only for order APIs. Use **Scraping API Token** only under Web Scraping API operations.

## Typical workflow

1. Open the operation (for example `GET /v2/extract`).
2. Fill query parameters (`network_type`, `count`, `duration`, …).
3. Execute and inspect JSON—usernames must be copied **verbatim** into clients.
4. Export the generated snippet into your language of choice.

## When OpenAPI is not enough

- Narrative guides: [Getting started](../getting-started/rotating-proxy.md) series
- Managed fetches: [Web Scraping API](../getting-started/web-scraping-api.md)
- AI-driven generation: [Integrate proxies in AI](integrate-proxies-in-ai.md)

Keep tokens out of screenshots and support tickets—rotate via [Rotate token](../user-console/rotate-token.md) if exposed.
