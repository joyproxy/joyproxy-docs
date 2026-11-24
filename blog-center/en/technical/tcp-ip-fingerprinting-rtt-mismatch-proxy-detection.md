---
title: "TCP/IP Fingerprinting (p0f), RTT Latency Gap & OS Mismatch: How Anti-Bot Systems Detect Proxies Below TLS"
description: "Deep technical analysis of Layer 3/4 proxy detection—how anti-bot engines inspect p0f/JA4T TCP SYN signatures, MSS/MTU clamping, and TCP-vs-TLS RTT differentials (ΔRTT), plus production worker co-location and Python diagnostic scripts for JoyProxy."
category: technical
date: 2026-11-24
---

# TCP/IP Fingerprinting (p0f), RTT Latency Gap & OS Mismatch: How Anti-Bot Systems Detect Proxies Below TLS

Most engineering teams debug proxy blocks from the top of the network stack downward: first they swap `User-Agent` strings, then they fix DNS/WebRTC leaks, and finally they adopt `curl_cffi` or Playwright to align their **JA4 / TLS** and **HTTP/2 `SETTINGS`** fingerprints.

Yet on hardened targets—Cloudflare Enterprise, Akamai, DataDome, TikTok, and Stripe/PayPal risk engines—requests can **still** draw silent challenges or `403 Forbidden` responses even when the exit IP is residential and the TLS handshake looks textbook.

The culprit lives below TLS, at **Layer 3 and Layer 4**:

1. **TCP/IP Passive OS Fingerprinting (`p0f` / JA4T)**: Every `TCP SYN` packet exposes `TTL`, `MSS`, `Window Size`, and `TCP Options` ordering before TLS even begins.
2. **The TCP-vs-TLS RTT Differential (`ΔRTT`)**: When your worker sits in Singapore and routes through a New York proxy, the target server measures a `12 ms` TCP handshake at the exit node followed by a `210 ms` TLS handshake back to your origin server.
3. **Tunnel MTU / MSS Clamping**: VPN, GRE, or double-encapsulation overhead shrinks `MSS` below `1460`, exposing artificial tunnel hops.

This guide dissects how passive Layer 3/4 inspection catches proxied traffic and shows how to eliminate those signals across your **[Rotating Residential](https://www.joyproxy.com/products/proxy-residential.html)**, **[Static ISP](https://www.joyproxy.com/products/proxy-isp.html)**, and **[Mobile Proxy](https://www.joyproxy.com/products/proxy-mobile.html)** deployments.

---

## 1. The TCP-vs-TLS RTT Differential (`ΔRTT`): How Servers Spot Remote Proxies

Even with a completely clean residential or **[ISP (Dedicated Static Residential) Proxy](https://www.joyproxy.com/products/proxy-isp.html)** exit IP, a cross-continent worker leaves an unmistakable timing signature on the wire.

Look at where each handshake actually terminates when an `HTTP CONNECT` or `SOCKS5` tunnel is established:

```text
┌─────────────────────────┐      ~190 ms WAN      ┌──────────────────────────┐     ~12 ms Local     ┌──────────────────┐
│  Origin Scraper Worker  │ ◄───────────────────► │  JoyProxy Exit / Gateway │ ◄──────────────────► │ Target CDN / WAF │
│    (e.g., Singapore)    │   Encrypted Byte Pipe │    (e.g., New York)      │   TCP SYN/SYN-ACK    │  (US-East POP)   │
└─────────────────────────┘                       └──────────────────────────┘                      └──────────────────┘
         ▲                                                   │                                                 │
         └────────────── RTT_TLS (~202 ms) ──────────────────┴───────────────── RTT_TCP (~12 ms) ─────────────┘
```

Because an `HTTP CONNECT` or `SOCKS5` proxy terminates the client's TCP connection and opens a **new** upstream TCP socket from the exit node to the target:

* **`RTT_TCP` is measured between the Exit Node and the Target**: The target server records the delta between sending `SYN-ACK` and receiving the exit node's `ACK`. If your New York ISP proxy sits 12 ms from a US-East CDN edge, `RTT_TCP ≈ 12 ms`.
* **`RTT_TLS` (and `RTT_HTTP`) travels end-to-end**: Because the TLS handshake (`ClientHello` → `ServerHello` → `Finished`) is encrypted end-to-end between your scraper in Singapore and the target server, every TLS round trip must cross the trans-Pacific WAN link *plus* the local exit hop (`RTT_TLS ≈ 200+ ms`).
* **The Red Flag (`ΔRTT = RTT_TLS - RTT_TCP`)**: On a genuine local user's machine, `RTT_TCP` and `RTT_TLS` are nearly identical (within a few milliseconds of crypto processing overhead). A `12 ms` TCP handshake paired with a `205 ms` TLS handshake yields `ΔRTT ≈ 193 ms`—proving mathematically that the TLS client is thousands of kilometers behind the TCP endpoint.

> [!IMPORTANT] Cross-Continent Workers Inflate Risk Scores
> Running a US-targeted checkout bot, ad verifier, or Playwright agent from an Asia or Europe VPS through US proxies creates a massive `ΔRTT` gap on every fresh connection. For strict targets, **co-locating your worker compute in the same macro-region as your proxy exit** is one of the highest-ROI anti-detection fixes available.

---

## 2. Passive TCP/IP OS Fingerprinting (`p0f` & JA4T)

Before a single byte of HTTP or TLS `ClientHello` arrives, the target's load balancer or WAF inspects the raw `IPv4/IPv6` + `TCP SYN` header. Different operating systems hardcode distinct kernel defaults:

| Operating System / Network | Typical Initial `TTL` | Common `MSS` (IPv4) | Window Size & Scale | Characteristic TCP Options Order |
| :--- | :--- | :--- | :--- | :--- |
| **Linux (Ubuntu / Debian Servers)** | `64` | `1460` | `64240` (`WS=7`) | `MSS, SACK, TS, NOP, WS` |
| **Windows 10 / 11 Desktop** | `128` | `1460` | `64240` / `65535` (`WS=8`) | `MSS, NOP, WS, NOP, NOP, SACK` |
| **macOS / iOS (Safari / Mobile)** | `64` | `1460` (Wi-Fi) / `1400–1440` (LTE/5G) | `65535` (`WS=6`) | `MSS, NOP, WS, NOP, NOP, TS, SACK, EOL` |
| **Android (4G/5G Carrier NAT)** | `64` | `1360–1440` | `65535` (`WS=6` or `8`) | `MSS, SACK, TS, NOP, WS` |

### Why OS Mismatches Happen in Proxy Stacks

In a standard forward proxy (`HTTP CONNECT` or `SOCKS5`), the **exit node's OS kernel** generates the `SYN` packet seen by the target website:

1. **The Cheap Datacenter Relay Trap**: If you build your own relay on a Linux VPS (`TTL=64`, Linux TCP options) and claim `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)` + `Sec-CH-UA-Platform: "Windows"`, passive `p0f` / JA4T immediately flags a **Linux kernel impersonating Windows**.
2. **Real Consumer & Carrier Exit Advantage**: With **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)** and **[Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html)**, the outbound TCP socket originates from genuine residential or carrier-grade network stacks rather than a bare cloud VPS.
3. **Mobile `MSS` Consistency**: Cellular networks legitimately encapsulate traffic over LTE/5G bearers, producing `MSS` values around `1360–1440`. If you spoof a mobile `User-Agent` over a raw datacenter server with `MSS=1460` and datacenter ASN, the combination fails both ASN and Layer 4 heuristics. Pairing mobile profiles with **[4G/5G Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html)** (`-zone-cellular`) keeps ASN, `TTL`, and `MSS` aligned.

---

## 3. Tunnel MSS / MTU Clamping Signatures

Standard Ethernet uses an MTU of `1500 bytes` (`1500 - 20 IPv4 - 20 TCP = 1460` MSS). Whenever traffic traverses extra encapsulation layers—such as WireGuard (`60–80 bytes` overhead), GRE, IPSec, or nested proxy-over-VPN chains—the effective MSS is clamped down to `1420`, `1400`, or `1360`.

While `1452` (PPPoE fiber broadband) and `1380–1420` (4G/5G carrier networks) are completely normal on residential and mobile connections, seeing `MSS=1360` paired with a **Windows Desktop `User-Agent`** and a **cloud hosting ASN** is a textbook VPN/tunnel fingerprint.

> [!TIP] Avoid Double-Hopping Proxies Inside a VPN
> Never route your scraper through a local WireGuard/OpenVPN client *and then* into a JoyProxy gateway unless your local network strictly requires it. Double tunneling adds unnecessary latency jitter, widens `ΔRTT`, and can trigger MSS fragmentation or `ECONNRESET` on strict servers. Connect your workers directly to `gate.joyproxy.com:9001` or `isp.joyproxy.com:<port>`.

---

## 4. Measuring Proxy `TCP` vs `TLS` Latency in Python

Before deploying a scraper or AI agent cluster to production, benchmark the transport-layer latency split from your worker region to your chosen JoyProxy exit region. The script below breaks out **Gateway `CONNECT` time**, **TLS Handshake time**, and **HTTP TTFB** so you can spot cross-region `ΔRTT` bloat immediately:

```python
import socket
import ssl
import time
import base64

PROXY_HOST = "gate.joyproxy.com"
PROXY_PORT = 9001
PROXY_USER = "your_user-zone-resi-region-us-session-bench1-sessTime-10"
PROXY_PASS = "your_password"
TARGET_HOST = "www.cloudflare.com"
TARGET_PORT = 443


def benchmark_proxy_layers() -> None:
    t0 = time.perf_counter()
    sock = socket.create_connection((PROXY_HOST, PROXY_PORT), timeout=10)
    t_tcp_proxy = (time.perf_counter() - t0) * 1000

    auth = base64.b64encode(f"{PROXY_USER}:{PROXY_PASS}".encode()).decode()
    connect_req = (
        f"CONNECT {TARGET_HOST}:{TARGET_PORT} HTTP/1.1\r\n"
        f"Host: {TARGET_HOST}:{TARGET_PORT}\r\n"
        f"Proxy-Authorization: Basic {auth}\r\n\r\n"
    ).encode()

    t1 = time.perf_counter()
    sock.sendall(connect_req)
    resp = sock.recv(4096).decode(errors="ignore")
    t_connect_tunnel = (time.perf_counter() - t1) * 1000
    if "200" not in resp.splitlines()[0]:
        raise RuntimeError(f"CONNECT failed: {resp.splitlines()[0]}")

    ctx = ssl.create_default_context()
    t2 = time.perf_counter()
    tls_sock = ctx.wrap_socket(sock, server_hostname=TARGET_HOST)
    t_tls = (time.perf_counter() - t2) * 1000

    t3 = time.perf_counter()
    tls_sock.sendall(
        f"HEAD / HTTP/1.1\r\nHost: {TARGET_HOST}\r\nConnection: close\r\n\r\n".encode()
    )
    first_chunk = tls_sock.recv(1024)
    t_ttfb = (time.perf_counter() - t3) * 1000

    print(f"Proxy TCP Connect : {t_tcp_proxy:.1f} ms")
    print(f"HTTP CONNECT Setup: {t_connect_tunnel:.1f} ms (Exit-to-Target TCP RTT)")
    print(f"End-to-End TLS    : {t_tls:.1f} ms (Worker-to-Target RTT)")
    print(f"HTTP TTFB         : {t_ttfb:.1f} ms | Status: {first_chunk.splitlines()[0].decode()}")
    tls_sock.close()


if __name__ == "__main__":
    benchmark_proxy_layers()
```

**How to read the output:**

* If `HTTP CONNECT Setup` is `20 ms` while `End-to-End TLS` is `380 ms`, your worker VPS is far away from your proxy exit region—move the worker closer to the target country.
* If you want to inspect the local `SYN` fields generated by your own machine (when running direct or browser-side checks), run `tshark` during a handshake:

```bash
tshark -i eth0 -f "tcp[tcpflags] & tcp-syn != 0" -Y "tcp.flags.syn == 1 && tcp.flags.ack == 0" \
  -T fields -e ip.dst -e ip.ttl -e tcp.window_size_value -e tcp.options.mss_val
```

---

## 5. Production Architecture: Eliminating Layer 3/4 Detection Signals

Combine these five operational controls with your existing TLS/JA4 and DNS leak hygiene (see our [JA4 & TLS Fingerprinting Guide](https://www.joyproxy.com/blog/technical/ja4-tls-fingerprinting-cloudflare-bypass/) and [DNS, WebRTC & IPv6 Leak Prevention Guide](https://www.joyproxy.com/blog/technical/dns-webrtc-ipv6-proxy-leaks/)):

1. **Co-Locate Compute with Target Geo**: Run US scraping and browser agents on US-East/US-West instances when routing through US **`region-us`** residential or New York/Los Angeles **[Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)**. Do the same in Frankfurt (`eu-central`) for Europe and Singapore/Tokyo for APAC.
2. **Keep HTTP/2 + TLS 1.3 Sessions Warm on Static Lines**: On dedicated **[ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)** and **[Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)**, enable connection pooling (`keepalive_expiry=45s+` as detailed in our [Connection Pooling & Keep-Alive Guide](https://www.joyproxy.com/blog/technical/proxy-connection-pooling-keepalive-timeouts-retries/)). Fewer fresh TLS handshakes mean fewer opportunities for `ΔRTT` scoring and lower total latency.
3. **Align Platform Profile to Proxy Type**:
   * **Consumer Desktop / General Web** → **[Rotating Residential Proxies](https://www.joyproxy.com/products/proxy-residential.html)** (`-zone-resi`) or **[Static ISP Proxies](https://www.joyproxy.com/products/proxy-isp.html)**
   * **Mobile Apps & Carrier-Sensitive Feeds** → **[Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html)** (`-zone-cellular`)
   * **B2B SaaS & Enterprise APIs** → **[Business Proxies](https://www.joyproxy.com/products/proxy-business.html)** (`-zone-biz`)
   * **High-Throughput Co-Located Crawling** → **[Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)**
4. **Drop Unnecessary Local VPN Wrappers**: Connect workers directly to JoyProxy endpoints over `http://` or `socks5h://` without stacking local VPNs underneath.
5. **Offload Hardened Targets When Needed**: If managing multi-region worker placement, TLS/JA4 profiles, and browser entropy is slowing down product delivery, route hard WAF targets directly through **[Web Scraping API](https://www.joyproxy.com/products/web-unblocker.html)** (`api.joyproxy.com`) and receive clean HTML or Markdown via a single API call.

---

## 6. Frequently Asked Questions (FAQ)

### Does an HTTP or SOCKS5 proxy pass my scraper's Linux `TTL` and `TCP Options` to the target website?
No. HTTP `CONNECT` and `SOCKS5` are Layer 4/5 forward proxies: your scraper completes a TCP handshake with the JoyProxy gateway, and the **exit node** opens a separate TCP connection to the target website. That means the target sees the exit node's `TTL`, `MSS`, and TCP options—not your VPS kernel's—*unless* you are running a Layer 3 VPN/TUN bridge directly to the target or leaking traffic outside the proxy.

### Why does `ΔRTT` (TCP RTT vs. TLS RTT) still expose my proxy if the exit node is genuine?
Because the exit node completes the `SYN/SYN-ACK` locally near the target, while the TLS `ClientHello` and `Finished` messages are encrypted end-to-end and must travel all the way from your origin server to the exit node and back. Placing your scraper workers in the same region as your target proxies narrows `ΔRTT` to near-zero.

### Which JoyProxy line gives the lowest, most consistent TCP and TLS RTT?
**[ISP (Dedicated Static Residential) Proxies](https://www.joyproxy.com/products/proxy-isp.html)** and **[Datacenter Proxies](https://www.joyproxy.com/products/proxy-datacenter.html)** in core hubs (New York, Los Angeles, Chicago, London, Amsterdam, Tokyo, Singapore, Mumbai, Bangalore) deliver dedicated, low-jitter routing with full HTTP/2 and TLS 1.3 connection reuse.

---

## Next Steps

* Benchmark your regional RTT split using **[Endpoint Generator](https://www.joyproxy.com/admin-ip-extraction-center.html)**
* Compare **[Rotating Residential](https://www.joyproxy.com/products/proxy-residential.html)**, **[Static ISP](https://www.joyproxy.com/products/proxy-isp.html)**, and **[Mobile Proxies](https://www.joyproxy.com/products/proxy-mobile.html)** on our **[Pricing Page](https://www.joyproxy.com/pricing.html)**
* Ready to test co-located low-latency proxy routing? **[Create a JoyProxy account](https://www.joyproxy.com/register.html)** and run the diagnostic script in under 5 minutes.
