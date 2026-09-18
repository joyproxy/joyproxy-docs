# Response codes

Ask whether **JoyProxy** refused the hop or the **website** refused the request. Custom uses that port’s dedicated `host:port`.

```bash
curl -v -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

| Code | What to check |
| --- | --- |
| **407** | Username/Password, or whitelist the **public** IPv4 of this machine. Same as [Static authorization](../static/authorization.md). |
| **401** | The website wants its own login. |
| **403** | Tunnel often succeeded. Confirm egress IP, then [Restricted targets](restricted-targets.md). |
| **429** | Slow down. |
| **502** / **503** / **504** | Retry; order still active; try HTTP before SOCKS5. |
| Connection refused | Latest host:port from Endpoints — not the Exit IP. Region assigned? See [Assign region](assign-region.md). |

SOCKS5 uses reply codes, not HTTP status. Test with [Proxy Tester](../software/proxy-tester.md).

Extract-API JSON errors: [Rotating → Response codes](../rotating/response-codes.md).

## Next

[Authorize and generate](authorize-and-generate.md) · [Protocols](protocols.md)
