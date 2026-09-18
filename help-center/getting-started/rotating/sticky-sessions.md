# Sticky sessions

A **sticky session** keeps the same exit IP for a limited time so logins, carts, and multi-step forms stay on one address. When the timer ends, or you generate a username with **Rotating session**, the next request can use a new IP.

## Choose a mode in Endpoints

| Mode in the generator | What happens |
| --- | --- |
| **Rotating session** | Each connection can take a new exit IP. Best for broad collection. |
| **Sticky session** (1–30 minutes) | Requests that reuse the **same generated username** keep the IP for that window. |

1. Open <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> → **Rotating**.
2. Set **Session type**. For sticky, use the slider (**1–30 minutes**).
3. Generate. The username **already includes** the session policy — you do not add extra flags in most clients.

## How long the username lasts vs how long the IP lasts

| Concept | Behavior |
| --- | --- |
| Generated username | Valid while your **traffic pack** has GB left |
| Sticky window | Only how long that username **holds one exit IP** |

You can keep using the same username after sticky expires; the gateway may assign a new IP on the next window. You do not need to buy a new pack to refresh the session.

To set sticky length from the extract API, pass `duration` in minutes (for example `5m`). See <a href="generate-endpoints.md#generate-from-the-api" target="_blank" rel="noopener noreferrer">Generate from the API</a> and <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## When to use sticky vs rotating session

| Workflow | Session mode |
| --- | --- |
| Listing pages, search, price checks | Rotating session |
| Login, then crawl while authenticated | Sticky session (often 5–15 minutes) |
| QA a single account in a browser | Sticky, or a <a href="../static/README.md" target="_blank" rel="noopener noreferrer">Static</a> line if you need days |

> **Tip**
>
> Sticky is **minutes**, not weeks. For a host:port that stays yours for a plan period, buy <a href="../static/purchase.md" target="_blank" rel="noopener noreferrer">Static</a> or <a href="../custom/purchase.md" target="_blank" rel="noopener noreferrer">Custom</a>.

## Next

<a href="first-request.md" target="_blank" rel="noopener noreferrer">Make your first request</a>
