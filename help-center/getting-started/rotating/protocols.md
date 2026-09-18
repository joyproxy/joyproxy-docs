# Protocols

Pick the **proxy protocol** in your client. The gateway stays `gate.joyproxy.com:9001`. Static and Custom use the dedicated `host:port` from Endpoints — same two protocols.

In <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> → **Output format**, the live buttons are **Endpoint:port**, **HTTP**, and **SOCKS5**. Either protocol can open **HTTPS websites**.

Replace `GENERATED_USER` / `YOUR_PASS` with the generated username and the <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> Username/Password.

## HTTP

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

Most HTTP libraries take an `http://user:pass@host:port` proxy URL. For an HTTPS target, the client opens a **CONNECT** tunnel through this HTTP proxy.

## SOCKS5

```bash
curl -x "socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

The `h` in `socks5h://` means the **hostname is resolved on the proxy**, not on your machine.

Use SOCKS5 when a tool asks for it, or when you need UDP. <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a> can check **SOCKS5 TCP** and **SOCKS5 UDP** on the same host:port.

Sticky sessions still use the session you picked in Endpoints. You do not switch host when you switch protocol. See <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>.

## HTTPS websites

The target URL can be `https://…`. You still select **HTTP** or **SOCKS5** as the proxy type.

```bash
curl -x "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001" "https://api.ipify.org"
```

Product pages and the FAQ call this HTTP / HTTPS / SOCKS5: HTTPS here is the **website**, tunneled through the HTTP or SOCKS5 proxy.

## Static and Custom

Same protocols. Paste the dedicated host and port from Endpoints:

```bash
curl -x "http://USER:PASS@HOST:PORT" "https://api.ipify.org"
curl -x "socks5h://USER:PASS@HOST:PORT" "https://api.ipify.org"
```

If this machine is on the IP whitelist, you can omit `USER:PASS@`.

## Next

<a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a> · <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a>
