# Third-party software with static and rotating proxies

Many desktop tools—scrapers, RPA bots, social managers, SEO suites—expose the same proxy form: **type, host, port, username, password**. JoyProxy fills those fields differently for **rotating gateway** vs **dedicated static/custom** lines.

## Rotating (shared gateway)

Use when your order is Residential, Mobile, or Business **Rotating**.

| Software label | Enter |
| --- | --- |
| Type | HTTP or SOCKS5 (both can open HTTPS websites) |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Full string from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> |
| Password | From <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> |

URI examples:

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
socks5://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

> **Important**
>
> Do not shorten or edit the generated username. Geo and session live inside that string.

## Static or custom (dedicated host)

Use host and port from the **Static** or **Custom** generator—often `*.edge.joyproxy.com` with a fixed port.

| Field | Source |
| --- | --- |
| Host / Port | Endpoint generator output |
| Auth | Whitelist (connect from listed server IP) **or** username/password you created |

```text
http://USER:PASS@us-ca.edge.joyproxy.com:10001
```

## Scenario: multilogin browser with static residential

1. Buy <a href="../getting-started/static/README.md" target="_blank" rel="noopener noreferrer">Static residential</a> in the target country.
2. Whitelist your runner’s public IP **or** create credentials.
3. Generate one endpoint per profile in the tool’s required format.
4. Assign each profile a **unique** port if the software maps 1:1 identity to line.

## Scenario: high-frequency scraper on rotating

1. Purchase rotating traffic with headroom (monitor <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">Usage</a>).
2. Use **sticky** sessions for login steps, **Rotating session** for catalog crawls.
3. Regenerate username in Endpoints when you change geo—no need to buy a new package.

## Scenario: extract API powered tools

Some tools pull `host:port` lists from a URL. Point them at JoyProxy extract APIs documented in <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>, or paste lines from the web generator.

## When pages still block you

- Try <a href="../getting-started/scraping-api/README.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a> for fetch-only workloads.
- Open a <a href="../support/tickets.md" target="_blank" rel="noopener noreferrer">support ticket</a> with target domain and request pattern (never share end-user passwords).
