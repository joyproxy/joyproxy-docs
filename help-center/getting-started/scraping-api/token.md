# Get your Scraping API Token

The **Scraping API Token** only authorizes `GET /v1/fetch`. It is not the proxy extract token, Master User Token, or AI Access Token.

1. Open <a href="https://www.joyproxy.com/admin-web-unblocker.html?view=playground" target="_blank" rel="noopener noreferrer">API Center</a>.
2. Copy **Scraping API Token**.
3. Store it in an environment variable. Rotate it in API Center if it may have leaked.

Use each token where the docs say:

| Token | Where |
| --- | --- |
| Scraping API Token | `/v1/fetch` only |
| Extract API URL | `/v2/extract` and related — copy from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> |
| Master User Token | Order APIs |
| AI Access Token | OpenClaw / MCP |

Try operations in <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a> under **Web Scraping API**.

## Next

<a href="first-fetch.md" target="_blank" rel="noopener noreferrer">First fetch</a>
