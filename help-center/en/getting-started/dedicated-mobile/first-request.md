# Send a Proxy Request

Once your port is **Active**, test connectivity using cURL, Python, or your antidetect browser. Replace `HOST`, `HTTP_PORT`, `SOCKS5_PORT`, `USERNAME`, and `PASSWORD` with the values shown in your console.

## 1. Test with cURL (HTTP / SOCKS5)

**HTTP proxy:**

```bash
curl -x "http://USERNAME:PASSWORD@HOST:HTTP_PORT" https://ipinfo.io/json
```

**SOCKS5 proxy (`socks5h` resolves DNS remotely through the carrier):**

```bash
curl -x "socks5h://USERNAME:PASSWORD@HOST:SOCKS5_PORT" https://ipinfo.io/json
```

## 2. Python (`requests`) Example

```python
import requests

proxies = {
    "http": "http://USERNAME:PASSWORD@HOST:HTTP_PORT",
    "https": "http://USERNAME:PASSWORD@HOST:HTTP_PORT",
}

resp = requests.get("https://ipinfo.io/json", proxies=proxies, timeout=20)
print(resp.status_code, resp.json())
```

## 3. Antidetect Browser Setup

In AdsPower, BitBrowser, or HubStudio:
1. Select **HTTP** or **SOCKS5** as the proxy type.
2. Click **Copy Antidetect** in the JoyProxy console and paste into the host field to auto-fill host, port, username, and password.
3. Click **Check Proxy** to confirm the carrier IP before launching the profile.
