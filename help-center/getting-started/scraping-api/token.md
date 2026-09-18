# Get your Scraping API Token

The **Scraping API Token** only authorizes `GET /v1/fetch`. It is not the proxy extract token, Master User Token, or AI Access Token.

1. Open [API Center](https://www.joyproxy.com/admin-web-unblocker.html?view=playground).
2. Copy **Scraping API Token**.
3. Store it in an environment variable. Rotate it in API Center if it may have leaked.

Use each token where the docs say:

| Token | Where |
| --- | --- |
| Scraping API Token | `/v1/fetch` only |
| Extract API URL | `/v2/extract` and related — copy from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) |
| Master User Token | Order APIs |
| AI Access Token | OpenClaw / MCP |

Try operations in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) under **Web Scraping API**.

## Next

[First fetch](first-fetch.md)
