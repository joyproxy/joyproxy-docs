# Protocols

Static uses the dedicated `host:port` from Endpoints. Proxy types are **HTTP** and **SOCKS5**. Either can open **HTTPS websites**.

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

`socks5h://` resolves the hostname on the proxy. If this machine is on the IP whitelist, omit `USER:PASS@`.

Rotating uses the same two protocols on `gate.joyproxy.com:9001`. Full notes (Output format, UDP, extract `protocol` query): <a href="../rotating/protocols.md" target="_blank" rel="noopener noreferrer">Rotating → Protocols</a>.

## Next

<a href="clients.md" target="_blank" rel="noopener noreferrer">Windows, Chrome, and mobile</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
