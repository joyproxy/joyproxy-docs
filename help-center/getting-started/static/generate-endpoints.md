# Generate Static endpoints

Each allocation has a stable **host** and **port** until the order expires.

## Web generator

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. Choose **Static Proxies → Web generator**.
3. Filter by order / allocation → **Generate now**.
4. Copy host, port, and (if you use user/pass) credentials.

## API

Use the **API token** from [Account settings](https://www.joyproxy.com/admin-settings.html). `allocation_id` comes from My Proxies / OpenAPI.

```http
GET https://api.joyproxy.com/v1/extract-long?token=YOUR_API_TOKEN&allocation_id=ID&format=crlf
```

Newer clients may also see `/v2/extract-long` in [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html)—use the path the playground shows for your account.

## What you should copy

| Copy this | Skip this |
| --- | --- |
| Host (`*.edge.joyproxy.com` or as shown) | Exit IP on the order card |
| Port | Dashboard login email |
| User/pass **or** rely on whitelist | Random ports from old screenshots |

## Next

[First request](first-request.md)
