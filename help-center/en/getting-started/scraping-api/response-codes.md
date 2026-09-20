# Response codes and errors

Common Web Scraping API errors and how to fix them:

---

## Error cheat sheet

| HTTP status | Message / symptom | Typical cause | Credits | What to do |
| --- | --- | --- | --- | --- |
| **401** | `Invalid Token` | Scraping API Token is wrong or missing | **Not charged** | Copy the **Scraping API Token** from <a href="quick-start.md" target="_blank" rel="noopener noreferrer">API Center</a>, not proxy Username/Password. |
| **402** | `Insufficient Credits` | Not enough Credits | **Not charged** | Buy more on <a href="buy-credits.md" target="_blank" rel="noopener noreferrer">Buy credit packs</a>. Credits never expire. |
| **429** | `Concurrency Limit Reached` | In-flight requests filled every Concurrency slot | **Not charged** | Wait for a slot to free, switch to the <a href="async-api.md" target="_blank" rel="noopener noreferrer">Async API</a>, or buy a higher pack to raise the limit. |
| **400** | `Missing URL Parameter` | Required `url` is missing | **Not charged** | Include `url` and URL-encode it on GET. |
| **502** | `Target Fetch Failed` | Target unreachable or hard-blocked | **Not charged** | Try `super=true` or a different `geoCode`. |

---

## How to confirm zero charge

When you receive `401`, `402`, `429`, or `502`:
1. Check `X-JoyProxy-Fetch-Credits-Used` on the response. It should be `0`.
2. Open <a href="usage.md" target="_blank" rel="noopener noreferrer">Usage</a> in the console and confirm **Credits** for that failed row is `0`.
