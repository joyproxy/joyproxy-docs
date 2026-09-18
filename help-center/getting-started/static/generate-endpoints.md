# Generate Static endpoints

Each allocation has a stable **host** and **port** until the order expires.

## Web generator

1. Open [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html).
2. Choose **Static Proxies → Web generator**.
3. Filter by order / allocation → **Generate now**.
4. Copy host, port, and (if you use user/pass) credentials.

## API

On the same Endpoints page, copy the **API URL** (it already includes `token=`). You do not look up a token in Account settings.

```text
https://api.joyproxy.com/v2/extract-long?token=...&allocation_id=ID&format=crlf
```

`allocation_id` comes from the generator selection / My Proxies. More parameters: [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).

## What you should copy

| Copy this | Skip this |
| --- | --- |
| Host (`*.edge.joyproxy.com` or as shown) | Exit IP on the order card |
| Port | Dashboard login email |
| User/pass **or** rely on whitelist | Random ports from old screenshots |

## Next

[First request](first-request.md)
