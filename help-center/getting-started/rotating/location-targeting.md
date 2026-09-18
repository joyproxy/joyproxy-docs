# Location targeting

On Rotating, geography is **not** a separate host. You select country (and optionally state and city) in [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html), then JoyProxy **writes that choice into the generated username**.

## Set geo in the web generator

1. Open **Endpoints → Rotating**.
2. Choose **Country**.
3. Optionally choose **State / Province**, then **City** when the list offers it (inventory varies by day).
4. Generate and copy the username as-is.

Every request that uses that username follows the targeting you selected. To change city, generate a **new** username—do not splice country codes into the old string by hand.

## Examples (after generation)

You still connect to `gate.joyproxy.com:9001`. Only the username changes:

```bash
# Username produced for a US exit (value comes from Endpoints — example shape only)
curl -x http://GENERATED_USER_US:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org

# Username produced for a more specific city
curl -x http://GENERATED_USER_CITY:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

Confirm the exit with any IP-check URL you trust, or the same `api.ipify.org` call.

HTTP, HTTPS, and SOCKS5 all use this same username. You do not switch host when you switch protocol.

## API

Pass the same targeting the UI exposes. In [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html), open `GET /v2/extract` and fill country / city fields as documented there, plus `network_type`:

| Pack you bought | `network_type` |
| --- | --- |
| Residential | `residential` |
| Mobile | `cellular` (alias `mobile`) |
| Business / ISP | `business` |

## Practical tips

- Start with **country only** if you are validating connectivity; add city when the workflow needs a local storefront.
- Sticky sessions ([next page](sticky-sessions.md)) keep an IP **inside** that geo for the session length.
- Static lines lock country at **purchase** instead. Custom lines assign geo **per port** in My Proxies. See [Static](../static/README.md) and [Custom](../custom/assign-region.md) if you need a dedicated host:port per region.

## Next

[Sticky sessions](sticky-sessions.md)
