# Software

JoyProxy ships a set of open-source clients so you can connect proxies on different operating systems and workflows: a browser add-on, a desktop connectivity tester, a local gateway, and an Android app.

The clients themselves are free and open source. If they connect to JoyProxy cloud proxies, traffic or Credits are billed in the <a href="https://www.joyproxy.com/admin-overview.html" target="_blank" rel="noopener noreferrer">JoyProxy console</a>. If you use your own or a third-party proxy, the tools do not charge anything and do not consume JoyProxy traffic.

Installers and product pages: <a href="https://www.joyproxy.com/products/software.html" target="_blank" rel="noopener noreferrer">Software</a>.

---

## Choose a tool

Pick the client that matches your environment:

- **Browse or scrape in a single browser**: use the <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">Browser Extension</a>. It only manages proxy and fingerprint for the current Chromium browser and does not change the OS system proxy.
- **Batch-check proxy health or debug a node**: use <a href="proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>. It supports HTTP and SOCKS5 (including UDP ASSOCIATE), can call a provider extract API, and reports success rate and latency.
- **Local apps that only accept 127.0.0.1, or a LAN that needs one shared exit**: use <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a>. A small binary listens on a local port and forwards LAN or CLI traffic to the upstream cloud line.
- **Real phones or emulators with per-app routing**: use the <a href="android-client.md" target="_blank" rel="noopener noreferrer">Proxy Client</a> (Android). It supports app whitelist and blacklist routing and does not require root.

---

## Open-source tools

| Tool | Platforms | Protocols | Repository |
| --- | --- | --- | --- |
| **Browser Extension** | Chrome / Edge and other Chromium browsers (114+) | HTTP / SOCKS5 | <a href="https://github.com/joyproxy/joyproxy-extension" target="_blank" rel="noopener noreferrer">joyproxy-extension</a> |
| **Proxy Tester** | Windows desktop (single-file EXE, no installer) | HTTP / HTTPS / SOCKS5 TCP & UDP | <a href="https://github.com/joyproxy/joyproxy-tester" target="_blank" rel="noopener noreferrer">joyproxy-tester</a> |
| **Proxy Server** | Linux & Windows (CLI / GUI) | HTTP / SOCKS5 gateway (`joyproxy sps`) | <a href="https://github.com/joyproxy/joyproxy-server" target="_blank" rel="noopener noreferrer">joyproxy-server</a> |
| **Proxy Client** | Android 7.0+ (APK) | HTTP / SOCKS5 | <a href="https://github.com/joyproxy/joyproxy-client-android" target="_blank" rel="noopener noreferrer">joyproxy-client-android</a> |

---

## In this chapter

- <a href="browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy Browser Extension</a>: install, three line sources (own proxy, extract API, JoyProxy account sync), workbench side panel, and Advanced fingerprint / routing.
- <a href="proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a>: single-node checks, API batch extract and sequential tests, Windows system-proxy sync.
- <a href="proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a>: CLI and GUI, authorization and forwarding modes, and commands to front JoyProxy cloud proxies.
- <a href="android-client.md" target="_blank" rel="noopener noreferrer">Proxy Client</a>: per-app routing, line tests, and VPN-tunnel connect flow. The product page title is **JoyProxy Android Client**.

To set a system-wide OS proxy instead, see <a href="../../best-practices/browser/windows.md" target="_blank" rel="noopener noreferrer">Windows 11 system proxy setup</a> and <a href="../../best-practices/mobile/android-wifi.md" target="_blank" rel="noopener noreferrer">mobile network proxy setup</a>.
