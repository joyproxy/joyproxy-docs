# Response codes

Ask whether **JoyProxy** refused the hop or the **website** refused the request. Static uses that line’s dedicated `host:port`.

```bash
curl -v -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

| Code | What to check |
| --- | --- |
| **407** | Username/Password, or whitelist the **public** IPv4 of this machine. See <a href="authorization.md" target="_blank" rel="noopener noreferrer">Authorization</a>. |
| **401** | The website wants its own login. |
| **403** | Tunnel often succeeded. Confirm egress IP, then <a href="restricted-targets.md" target="_blank" rel="noopener noreferrer">Restricted targets</a>. |
| **429** | Slow down. |
| **502** / **503** / **504** | Retry; order still active; try HTTP before SOCKS5. |
| Connection refused | Latest host:port from Endpoints — not the Exit IP. |

SOCKS5 uses reply codes, not HTTP status. Test with <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>.

## Next

<a href="authorization.md" target="_blank" rel="noopener noreferrer">Authorization</a> · <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a>
