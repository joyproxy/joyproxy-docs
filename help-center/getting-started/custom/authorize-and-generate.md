# Authorize and generate Custom endpoints

## Authorization

Same as Static: [Username/password or whitelist](../static/authorization.md) in [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html). Product-wide methods: [Authentication methods](../rotating/authentication.md).

## Web generator

1. [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Custom Proxies → Web generator**.
2. Select the allocation / order → **Generate now**.
3. Copy host and port (plus user/pass if you are not using whitelist).

Connect to this host:port, not the Exit IP on the order card.

## API

```http
GET https://api.joyproxy.com/v1/extract-custom?token=YOUR_API_TOKEN&allocation_id=ID&format=crlf
```

[OpenAPI Center](https://www.joyproxy.com/admin-openapi.html) may also list `/v2/extract-custom`. Use the operation your playground documents.

## Next

[First request and code](first-request.md)
