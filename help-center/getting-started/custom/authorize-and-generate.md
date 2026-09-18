# Authorize and generate Custom endpoints

## Authorization

Same as Static: <a href="../static/authorization.md" target="_blank" rel="noopener noreferrer">Username/password or whitelist</a> in <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>. Product-wide methods: <a href="../rotating/authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>.

## Web generator

1. <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a> → **Custom Proxies → Web generator**.
2. Select the allocation / order → **Generate now**.
3. Copy host and port (plus user/pass if you are not using whitelist).

Connect to this host:port, not the Exit IP on the order card.

## API

Copy the **API URL** from Endpoints (it already includes `token=`). You do not look up a token in Account settings.

```text
https://api.joyproxy.com/v2/extract-custom?token=...&allocation_id=ID&format=crlf
```

More parameters: <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.

## Next

<a href="first-request.md" target="_blank" rel="noopener noreferrer">First request and code</a>
