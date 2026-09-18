# Quick start

Connect through **one gateway**. JoyProxy routes each Rotating request through an exit IP from the pool you purchased (Residential, Mobile, or Business / ISP).

```text
gate.joyproxy.com:9001
```

Already have a pack and a password? Skip to [Send a test request](#send-a-test-request). Otherwise follow [Set up in the dashboard](#set-up-in-the-dashboard) first.

Need a dedicated `host:port` instead? <a href="../static/quick-start.md" target="_blank" rel="noopener noreferrer">Static</a> · <a href="../custom/quick-start.md" target="_blank" rel="noopener noreferrer">Custom</a>. Page fetches without a proxy client: <a href="../scraping-api/quick-start.md" target="_blank" rel="noopener noreferrer">Web Scraping API</a>.

## How endpoints work

An **endpoint** is the gateway into an IP pool. You do not pick a new host for each country.

| Field | Value |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP and SOCKS5. Either protocol can open **HTTPS websites**. |
| Username | The **full generated string** from <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoints</a> |
| Password | From <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a> → **Username/Password** |

Country, city, and sticky session live **inside the generated username**. Host and port stay the same.

## Send a test request

Replace `GENERATED_USER` and `YOUR_PASS`. If the response is a public IP that is **not** your home or office IP, the proxy is live.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -x http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

PROXY = "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
proxies = {"http": PROXY, "https": PROXY}
print(requests.get("https://api.ipify.org", proxies=proxies, timeout=30).text)
```
{% endtab %}

{% tab title="Node.js" %}
```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent(
  "http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001"
);
const res = await fetch("https://api.ipify.org", { agent });
console.log(await res.text());
```
{% endtab %}

{% tab title="PHP" %}
```php
<?php
$ch = curl_init("https://api.ipify.org");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_PROXY, "gate.joyproxy.com:9001");
curl_setopt($ch, CURLOPT_PROXYUSERPWD, "GENERATED_USER:YOUR_PASS");
echo curl_exec($ch);
curl_close($ch);
```
{% endtab %}

{% tab title="Go" %}
```go
package main

import (
  "io"
  "log"
  "net/http"
  "net/url"
)

func main() {
  proxyURL, err := url.Parse("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001")
  if err != nil {
    log.Fatal(err)
  }
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, err := client.Get("https://api.ipify.org")
  if err != nil {
    log.Fatal(err)
  }
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  log.Println(string(b))
}
```
{% endtab %}

{% tab title="Java" %}
```java
import java.net.*;
import java.io.*;
import java.util.Scanner;

public class ProxyTest {
  public static void main(String[] args) throws Exception {
    Proxy proxy = new Proxy(Proxy.Type.HTTP,
        new InetSocketAddress("gate.joyproxy.com", 9001));
    Authenticator.setDefault(new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(
            "GENERATED_USER", "YOUR_PASS".toCharArray());
      }
    });
    URLConnection conn = new URL("https://api.ipify.org").openConnection(proxy);
    try (Scanner scanner = new Scanner(conn.getInputStream())) {
      System.out.println(scanner.nextLine());
    }
  }
}
```
{% endtab %}
{% endtabs %}

SOCKS5 with cURL:

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

More languages: <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a>.

## Set up in the dashboard

New accounts: <a href="https://www.joyproxy.com/register.html" target="_blank" rel="noopener noreferrer">Register</a> · <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a> · <a href="https://www.joyproxy.com/admin-purchase.html" target="_blank" rel="noopener noreferrer">Purchase</a>

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first proxy pack or scraping credits at checkout.

### 1. Buy Rotating traffic

1. Open <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">Purchase → Rotating</a>.
2. Choose **Residential** (or **Mobile** / **Business / ISP** if that is your target).
3. Pick a traffic pack. Residential, Mobile, and Business / ISP each have their own price — see <a href="https://www.joyproxy.com/pricing.html" target="_blank" rel="noopener noreferrer">Pricing</a>.
4. Pay in checkout: card, Apple Pay, Google Pay, PayPal, WeChat Pay, UPI, USDT (TRC20), or account balance.
5. Confirm the order in <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a>.

Details: <a href="purchase.md" target="_blank" rel="noopener noreferrer">Choose a network and buy traffic</a>.

### 2. Authentication

Dashboard login and proxy login are **different**.

1. Open <a href="https://www.joyproxy.com/admin-authorization.html" target="_blank" rel="noopener noreferrer">Users &amp; Whitelist</a>.
2. Under **Username/Password**, create a User/Pass (letter first, a–z and 0–9, max 16; password 6+).
3. Keep the **password**. You will pair it with a **long generated username** in the next step — not with this short name.

Full walkthrough: <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a>.

### 3. Proxy setup (Endpoints)

In <a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a> → **Rotating**:

1. **Location** — country, then optionally state / city. See <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a>.
2. **Session type** — **Sticky session** (1–30 minutes) or **Rotating session**. See <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a>.
3. **Output format** — Endpoint:port, HTTP, or SOCKS5. Host and port stay `gate.joyproxy.com:9001`. Either protocol can open HTTPS websites.
4. Set how many lines to create → **Generate**.

> **Important**
>
> Paste the generated **username exactly**. Editing it can send you to the wrong region or fail authentication.

### 4. Copy the proxy list

Copy all four fields (or the full URI) from the results table:

```text
http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
```

| Copy | Leave unchanged |
| --- | --- |
| Host `gate.joyproxy.com` | Do not invent a country-specific host |
| Port `9001` | Do not use a Static `*.edge.joyproxy.com` port here |
| Full generated username | Do not type the short Users & Whitelist name |
| Password from Username/Password | Do not use the website login password |

### 5. Confirm the IP

Run a snippet from [Send a test request](#send-a-test-request). When you see the **proxy exit IP**, the line is ready for scrapers, browsers, and tools.

## Integration

| You want | Page |
| --- | --- |
| Chrome / Edge only | <a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">Browser extension</a> |
| Batch test HTTP / SOCKS | <a href="../software/proxy-tester.md" target="_blank" rel="noopener noreferrer">Proxy Tester</a> |
| Local `127.0.0.1` for a CLI tool | <a href="../software/proxy-server.md" target="_blank" rel="noopener noreferrer">Proxy Server</a> |
| Desktop scrapers and RPA | <a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">Third-party software</a> |
| AI agents / MCP | <a href="../../integration/integrate-proxies-in-ai.md" target="_blank" rel="noopener noreferrer">Integrate proxies in AI</a> |

## Usage

Open the **Usage** tab on the Residential / Mobile / Business console to watch remaining GB. Buy another pack from <a href="https://www.joyproxy.com/admin-purchase.html?tab=short-term" target="_blank" rel="noopener noreferrer">Purchase → Rotating</a> when traffic runs low — you do not need a new username each time.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| **407** / Proxy Authentication Required | Password from Users & Whitelist → Username/Password. Username is the **generated** string, not your email and not the short User/Pass name. |
| Timeout | Host `gate.joyproxy.com`, port `9001`. Try HTTP before SOCKS if a firewall is involved. |
| Wrong country | Generate a **new** username with the country selected. Do not edit the old string. |
| Order inactive / no traffic | Remaining GB in <a href="https://www.joyproxy.com/admin-my-orders.html" target="_blank" rel="noopener noreferrer">My Proxies</a> or Usage. |

Still stuck? <a href="../../support/live-chat.md" target="_blank" rel="noopener noreferrer">Live chat</a> with a **redacted** curl (never send the live password).

## What to read next

| Task | Page |
| --- | --- |
| Auto-buy when GB runs low | <a href="auto-buy-traffic.md" target="_blank" rel="noopener noreferrer">Auto-buy traffic</a> |
| Usage tab and order APIs | <a href="usage-and-orders.md" target="_blank" rel="noopener noreferrer">Usage and orders</a> |
| Create or reset proxy users | <a href="authentication.md" target="_blank" rel="noopener noreferrer">Authentication methods</a> |
| Country / city targeting | <a href="location-targeting.md" target="_blank" rel="noopener noreferrer">Location targeting</a> |
| Keep the same IP for several minutes | <a href="sticky-sessions.md" target="_blank" rel="noopener noreferrer">Sticky sessions</a> |
| Copy-paste for more languages | <a href="code-examples.md" target="_blank" rel="noopener noreferrer">Code examples</a> |
| HTTP vs SOCKS5 | <a href="protocols.md" target="_blank" rel="noopener noreferrer">Protocols</a> |
| 407 / 403 / extract errors | <a href="response-codes.md" target="_blank" rel="noopener noreferrer">Response codes</a> |
| Use in Chrome, Windows, RPA | <a href="apps-and-browsers.md" target="_blank" rel="noopener noreferrer">Apps and browsers</a> |
