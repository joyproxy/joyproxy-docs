# Authorize and generate Custom endpoints

## Authorization

Same as Static: [Username/password or whitelist](../static/authorization.md) in [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html). Product-wide methods: [Authentication methods](../rotating/authentication.md).

## Web generator

1. [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Custom Proxies → Web generator**.
2. Select the allocation / order → **Generate now**.
3. Copy host and port (plus user/pass if you are not using whitelist).

Connect to this host:port, not the Exit IP on the order card.

## API

Copy the **API URL** from Endpoints (it already includes `token=`). You do not look up a token in Account settings.

```text
https://api.joyproxy.com/v2/extract-custom?token=...&allocation_id=ID&format=crlf
```

More parameters: [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## Next

[First request and code](first-request.md)
