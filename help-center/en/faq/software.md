# Clients and open-source tools

JoyProxy ships free, open-source tools for browser, desktop, mobile, and server. This chapter covers what each one is for.

---

## Tool matrix

### What software is available? Is it paid?

**All clients are free and open source.** No license fee:

1. **Browser Extension** (Chrome / Edge): extract, test, and apply a proxy from the toolbar. Works without a JoyProxy account.
2. **Proxy Tester**: Windows desktop tool for HTTP and SOCKS5 connectivity, latency, and batch checks.
3. **Android Client** (Proxy Client): modern network kernel, per-app routing, no root.
4. **Proxy Server**: HTTP/SOCKS5 gateway on Linux or Windows (physical or cloud).

> **Note**: the apps are free. Use them with JoyProxy cloud IPs or with any third-party proxy.

---

## Browser Extension

### How do I install it?

Search **JoyProxy** in the Chrome Web Store or Microsoft Edge Add-ons and add it.

### Does it change the system proxy?

**No.** It uses the browser proxy API (Chrome Proxy API). Rules apply **only to this browser**. Windows or macOS system proxy is unchanged. WeChat, mail, and other apps are unaffected.

### How do I apply a Static line quickly?

1. Sign in, open **My Proxies**, copy the Static **Entry Point** (host and port) and credentials;
2. Click the JoyProxy toolbar icon;
3. Open the **Static** tab, enter host and port (if you are signed in, pick a synced purchased line);
4. Click **Test and apply**. On success the header shows the exit. All tabs in this browser use that line;
5. When you are done, click **Direct connection** in the top-right to restore a local path.

### Can I use another vendor’s proxy?

**Yes.** Paste any `host:port:user:pass`, or configure a third-party extract API. The extension still tests connectivity and the real exit IP before it applies.

---

## Proxy Tester

### What is Proxy Tester for?

A lightweight Windows tool for:

- **Batch connectivity**: paste hundreds or thousands of lines; drop dead nodes;
- **Exit geo**: public IP, country, region, city, ASN;
- **Protocol latency**: HTTP, HTTPS, SOCKS5 TCP and UDP;
- **Any vendor**: not limited to JoyProxy — useful for crawler ops and store-environment checks.

### Other vendors’ proxies?

Yes. Paste a standard HTTP or SOCKS5 endpoint. Tester checks connectivity, latency, public exit IP, and geo.

---

## Android Client and Proxy Server

### Android Client highlights?

- **No root**: Android VpnService; works on a normal phone;
- **Per-App Routing**: **Whitelist** (selected apps only through the proxy) or **Blacklist** (selected apps stay direct). The rest uses the other path so you do not burn extra traffic.

### When do I use Proxy Server?

When several crawler hosts have no public access, or you want many upstreams behind one internal IP, deploy open-source Proxy Server on a Linux/Windows jump host. The gateway does not include cloud traffic; attach your own lines or JoyProxy cloud IPs.

---

## AI

### OpenClaw Skill, AI MCP, and AI Assistant?

1. **OpenClaw Skill**: natural language extract, remaining traffic, and account status in an agent workflow;
2. **AI MCP**: one-click attach in Cursor, VS Code, Claude Desktop so the coding assistant can call the proxy network;
3. **AI Assistant**: 24/7 helper in the bottom-right of the site for product and setup questions.
