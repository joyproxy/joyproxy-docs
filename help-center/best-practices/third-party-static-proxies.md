# Third-party software with static and rotating proxies

Many desktop tools—scrapers, RPA bots, social managers, SEO suites—expose the same proxy form: **type, host, port, username, password**. JoyProxy fills those fields differently for **rotating gateway** vs **dedicated static/custom** lines.

## Rotating (shared gateway)

Use when your order is Residential, Mobile, or Business **Rotating**.

| Software label | Enter |
| --- | --- |
| Type | HTTP, HTTPS, or SOCKS5 |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Username | Full string from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) |
| Password | From [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) |

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

1. Buy [Static residential](../getting-started/static-proxy.md) in the target country.
2. Whitelist your runner’s public IP **or** create credentials.
3. Generate one endpoint per profile in the tool’s required format.
4. Assign each profile a **unique** port if the software maps 1:1 identity to line.

## Scenario: high-frequency scraper on rotating

1. Purchase rotating traffic with headroom (monitor [Usage](https://www.joyproxy.com/admin-overview.html)).
2. Use **sticky** sessions for login steps, **rotate every request** for catalog crawls.
3. Regenerate username in Endpoints when you change geo—no need to buy a new package.

## Scenario: extract API powered tools

Some tools pull `host:port` lists from a URL. Point them at JoyProxy extract APIs documented in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html), or paste lines from the web generator.

## When pages still block you

- Try [Web Scraping API](../getting-started/web-scraping-api.md) for fetch-only workloads.
- Open a [support ticket](../support/tickets.md) with target domain and request pattern (never share end-user passwords).
