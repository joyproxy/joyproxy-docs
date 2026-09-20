# Proxy Tester

**JoyProxy Proxy Tester** is a lightweight Windows desktop app for proxy connectivity and batch validation. It natively supports **HTTP / HTTPS**, **SOCKS5 TCP**, and **SOCKS5 UDP**, looks up exit IP and geo on multiple channels, and can call provider extract APIs for sequential batch tests plus Windows system-proxy sync.

It is fully open source and needs no installer — run a single EXE.

Links:  
<a href="https://www.joyproxy.com/products/tester.html" target="_blank" rel="noopener noreferrer">Product page</a> · <a href="https://github.com/joyproxy/joyproxy-tester/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> · <a href="https://github.com/joyproxy/joyproxy-tester" target="_blank" rel="noopener noreferrer">Source repository</a>

---

## Download and start

### Prebuilt standalone (recommended)

1. Get the latest build from GitHub Releases (<a href="https://github.com/joyproxy/joyproxy-tester/releases/latest" target="_blank" rel="noopener noreferrer">latest Release</a>).
2. Download the single-file **`JoyProxy-Tester.exe`**.
3. Double-click to run. No extra runtime is required. When the status bar shows **Ready**, you can start testing.

*Note: some Windows security policies may prompt on first run. Choose “Run anyway”.*

### Run from source or rebuild (Python 3.10+)

To debug or customize locally:

```bash
git clone https://github.com/joyproxy/joyproxy-tester.git
cd joyproxy-tester

# Create and activate a virtualenv
python -m venv .venv
.\.venv\Scripts\activate

# Install deps and start
pip install -r requirements.txt
python app.py
```

To rebuild the single-file EXE:

```bash
python build_pc.py
```

The binary is written to `dist/JoyProxy-Tester.exe`.

---

## Config file location

On first launch the app reads or creates **`joyproxy_tester.json`** in the system data directory. Saved extract APIs, timeouts, and geo-lookup channels live in that file. Copy it when you migrate machines.

---

## Layout and main features

The left nav has three workspaces:

- **Single Test**: one node — connectivity, exit IP, and latency.
- **Batch Test**: call an extract API, pull proxies by your rules, and queue automated tests.
- **Settings**: extract APIs, default timeout, and low-level probe options.

The top of the window always shows your **current public IP**, so you can compare it with the proxy exit IP.

---

## Single Test

Use this to check a node you already have:

1. **Protocol**: switch **HTTP / TCP**, **SOCKS5 / TCP**, or **SOCKS5 / UDP** at the top.
2. **Address**: smart clipboard parse. Paste any of:
   - Host and port only: `1.2.3.4:8080` or `myproxy.com:1080`
   - With credentials: `user:pass@1.2.3.4:8080`
   - Full URI: `socks5://user:pass@1.2.3.4:1080`
   The field splits host, port, and optional username/password.
3. **System proxy (optional)**: enable **Sync browser proxy during the test** to write the node into Windows Internet proxy settings so you can debug in Edge or Chrome. When you are done, click **Clear browser proxy settings** to restore direct.
4. **Run**: click **Start Testing**. The result card shows HTTP status, RTT, real exit public IP, and country.

---

## Batch Test and extract APIs

To measure a pool’s success rate, or to rotate a working exit on a schedule:

1. **Extract API**: pick a provider API saved in Settings.
2. **Rules**:
   - **Extract count**: how many proxies to pull and test in this job.
   - **Test interval**: wait between rounds (seconds, minutes, hours, or days), with a countdown bar for long monitoring.
3. **Strict sequential tests**: click **Start Batch Test**. The backend uses a **single sequential queue** — one pull and test at a time. That avoids bursting a low-concurrency extract API.
4. **Live stats and log**:
   - The top panel shows progress, success rate, average latency, and success count.
   - The **Live Log** table appends IP, port, result, and latency for each node. Click **Clear** to reset the view.
5. **Manual single rotate**: click **Manual Single Test** to pull one new IP from the selected API and test it immediately.

---

## How SOCKS5 UDP checks work

Many testers only complete a TCP handshake and cannot tell whether SOCKS5 UDP forwarding actually works.

JoyProxy Tester runs a real **SOCKS5 UDP ASSOCIATE** handshake:

1. The client opens a TCP control channel to the proxy and negotiates UDP ASSOCIATE.
2. It then sends a standard DNS query to a public resolver (default `8.8.8.8:53`) through the relay port the proxy assigned.
3. If a DNS response comes back through the relay, the test passes and the log shows UDP round-trip time.

That is useful for remote DNS, streaming, or game acceleration that depends on UDP.

---

## Settings

On **Settings** you can tune:

- **Extract API list**: add provider extract URLs. If that provider’s IP list always uses the same username/password, prefill credentials here. *Note: whitelist this machine’s public IP in the provider console before adding an API.*
- **Default timeout**: max wait per probe (default 10 seconds).
- **IP and geo lookup channel**: built-in `ipinfo.io`, `ipwhois.app`, `ip-api.com`, and `api.myip.com`. The app parses their JSON. For your own backend, choose **Custom URL** and the app shows the raw response.
- **UDP test DNS server**: public DNS used to verify UDP forwarding (default `8.8.8.8`).

---

## Browser Extension vs Proxy Tester

If you are choosing between the desktop tester and the extension:

- **JoyProxy Browser Extension** is for **daily browsing**: it applies only in the current browser, with a side-panel switcher and UA / timezone / hardware fingerprint controls. Use it for multi-account isolation, cross-border store ops, and page debugging.
- **JoyProxy Proxy Tester** is for **network diagnostics and automated batch screening**: stricter protocol coverage (including UDP), a single-file EXE, optional Windows system-proxy sync, and sequential extract-API testing without concurrency spikes.
