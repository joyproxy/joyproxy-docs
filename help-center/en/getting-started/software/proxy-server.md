# Proxy Server

**joyproxy-server** (CLI name is usually `joyproxy`) is a high-performance, lightweight HTTP / SOCKS5 proxy gateway for Linux servers and Windows.

Many crawlers, automation tools, or commercial apps only accept a local passwordless `127.0.0.1:port`. Teams also often want one jump host on the LAN so core proxy credentials are not copied onto every machine. Proxy Server is built for that relay and access-control job.

Links:  
<a href="https://www.joyproxy.com/products/proxy-server.html" target="_blank" rel="noopener noreferrer">Product page and full parameter docs</a> · <a href="https://github.com/joyproxy/joyproxy-server" target="_blank" rel="noopener noreferrer">GitHub repository</a> · <a href="https://github.com/joyproxy/joyproxy-server/releases/latest" target="_blank" rel="noopener noreferrer">Latest Releases</a>

> **Billing**  
> The gateway is open source and free, with no cap on instances. When the upstream is a JoyProxy Rotating or Static cloud node, traffic is still deducted from your JoyProxy console orders.

---

## Typical uses

1. **Local transparent relay**  
   Point local code or CLI tools at `http://127.0.0.1:8080`. A `joyproxy` process on the same machine attaches the real username and password and forwards to the JoyProxy parent node.
2. **Shared LAN exit**  
   Run a dedicated gateway on the office or colo LAN (for example `192.168.1.100:8080`). Internal machines all use that gateway. Outside access is gated by IP Whitelist or a central auth API, which is easier to audit.

---

## Get the binary and start

The gateway is a single executable. **You do not need a `config.yaml`**. All options are CLI flags. Windows also has a GUI build.

### 1. Linux (current distros and older systems)

- **Standard 64-bit**: download `joyproxy-linux-amd64` from GitHub Releases.
  ```bash
  chmod +x joyproxy-linux-amd64
  mv joyproxy-linux-amd64 /usr/local/bin/joyproxy
  ```
- **Older systems (for example CentOS 7.x)**: glibc is older — download the CentOS 7 package `joyproxy-centos7-linux-amd64.tar.gz` from GitHub Releases and unpack it.

### 2. Windows

- **GUI**: run **`joyproxy-gui.exe`**. Configure listen port, upstream, and auth mode in the window, and watch connection logs and start/stop state.
- **CLI**: download **`joyproxy.exe`**. Subcommands match the Linux build.

---

## Common CLI flags

Core features live in the `sps` (Simple Proxy Server) subcommand. Run `./joyproxy sps -h` for the full list. Everyday flags:

| Flag | Description | Example |
| --- | --- | --- |
| `-p` | **Required**. Local listen port or port range | `-p ":8080"` or `-p ":5001-5010"` |
| `-S` | Parent relay protocol: `http` or `socks5` (default `http`) | `-S http` |
| `-parent` | Default parent proxy URL (credentials allowed) | `-parent "http://user:pass@gate.joyproxy.com:9001"` |
| `-g` | Recommended. This machine’s public IP (used as the identity for external auth) | `-g "1.2.3.4"` |
| `--auth-nouser` | Clients connect to this gateway with no password; auth is decided by an external API or whitelist | `--auth-nouser` |
| `--auth-url` | External HTTP auth endpoint. Every new connection is checked against this URL | `--auth-url "https://api.mycorp.com/auth"` |
| `--traffic-url` | External traffic-report endpoint. Usage is posted asynchronously when a connection closes | `--traffic-url "https://api.mycorp.com/traffic"` |
| `--daemon` / `--forever` | Stay resident in the background and restart on crash | `--daemon --forever` |
| `--no-detach` | Use with `--daemon` for systemd (keep the main process in the foreground) | `--no-detach` |

---

## Auth and forwarding modes

`joyproxy-server` supports several authorization combinations:

### Mode 1: Local passwordless relay (most common)

Run on this machine or a trusted LAN. Downstream clients hit `127.0.0.1:8080` with no password. The gateway attaches credentials and forwards to JoyProxy:

```bash
./joyproxy sps -S http -p ":8080" \
  -parent "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
```

### Mode 2: Username/password on the gateway itself

To stop others on the LAN from using the gateway freely, require credentials on the gateway (clients send Username/Password; the gateway then forwards to the parent):

```bash
./joyproxy sps -S http -p ":8080" \
  -parent "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
```
*Note: if `--auth-nouser` is off and no external auth API is set, clients must send Proxy-Authorization to connect.*

### Mode 3: External HTTP auth and routing API

For multi-tenant or dynamic routing, wire `--auth-url` to your own service:

```bash
./joyproxy sps -S http -p ":8080" -g "YOUR_SERVER_PUBLIC_IP" \
  --auth-nouser \
  --auth-url "https://api.mycorp.com/check-proxy"
```

In this mode:
1. The client connects with no password.
2. The gateway sends an HTTP GET to your `auth-url` with the client IP and target host.
3. Your API returns HTTP 200 and an `upstream: http://user:pass@upstream-proxy:port` response header. The gateway forwards that connection to the specified parent. Any other status blocks the connection immediately.

---

## Production (Linux systemd)

For long-running Linux deployments, use systemd:

1. Create `/etc/systemd/system/joyproxy.service`:
   ```ini
   [Unit]
   Description=JoyProxy Gateway Service
   After=network.target

   [Service]
   Type=simple
   User=root
   ExecStart=/usr/local/bin/joyproxy sps -S http -p ":8080" -parent "http://USER:PASS@gate.joyproxy.com:9001" --no-detach
   Restart=always
   RestartSec=5
   LimitNOFILE=65535

   [Install]
   WantedBy=multi-user.target
   ```
2. Reload and start:
   ```bash
   systemctl daemon-reload
   systemctl enable joyproxy
   systemctl start joyproxy
   systemctl status joyproxy
   ```
3. Check local connectivity:
   ```bash
   curl -x http://127.0.0.1:8080 https://ipinfo.io/json
   ```
   If the returned IP is a JoyProxy cloud exit, the gateway is working.
