# Response codes

Ask whether **JoyProxy** refused the hop or the **website** refused the request. Static uses that line’s dedicated `host:port`.

```bash
curl -v -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

| Code | What to check |
| --- | --- |
| **407** | Username/Password, or whitelist the **public** IPv4 of this machine. See [Authorization](authorization.md). |
| **401** | The website wants its own login. |
| **403** | Tunnel often succeeded. Confirm egress IP, then [Restricted targets](restricted-targets.md). |
| **429** | Slow down. |
| **502** / **503** / **504** | Retry; order still active; try HTTP before SOCKS5. |
| Connection refused | Latest host:port from Endpoints — not the Exit IP. |

SOCKS5 uses reply codes, not HTTP status. Test with [Proxy Tester](../software/proxy-tester.md).

Extract-API JSON errors (`missing_token`, `no_ip_for_geo`, …): [Rotating → Response codes](../rotating/response-codes.md).

## Next

[Authorization](authorization.md) · [Protocols](protocols.md)
