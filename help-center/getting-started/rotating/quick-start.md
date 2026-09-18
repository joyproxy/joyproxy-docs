# Quick start

Connect through **one gateway**. JoyProxy routes each Rotating request through an exit IP from the pool you purchased (Residential, Mobile, or Business / ISP).

```text
gate.joyproxy.com:9001
```

Already have a pack and a password? Skip to [Send a test request](#send-a-test-request). Otherwise follow [Set up in the dashboard](#set-up-in-the-dashboard) first.

Need a dedicated `host:port` instead? [Static](../static/quick-start.md) · [Custom](../custom/quick-start.md). Page fetches without a proxy client: [Web Scraping API](../scraping-api/quick-start.md).

## How endpoints work

An **endpoint** is the gateway into an IP pool. You do not pick a new host for each country.

| Field | Value |
| --- | --- |
| Host | `gate.joyproxy.com` |
| Port | `9001` |
| Protocols | HTTP, HTTPS, SOCKS5 |
| Username | The **full generated string** from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) |
| Password | From [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html) |

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

More languages: [Code examples](code-examples.md).

## Set up in the dashboard

New accounts: [Register](https://www.joyproxy.com/register.html) · [Pricing](https://www.joyproxy.com/pricing.html) · [Purchase](https://www.joyproxy.com/admin-purchase.html)

> **Tip**
>
> New accounts receive a **$5 sign-up credit**. Apply it on your first proxy pack or scraping credits at checkout.

### 1. Buy Rotating traffic

1. Open [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term).
2. Choose **Residential** (or **Mobile** / **Business / ISP** if that is your target).
3. Pick a traffic pack and pay with **PayPal** or **account balance**.
4. Confirm the order in [My Proxies](https://www.joyproxy.com/admin-my-orders.html).

Details: [Choose a network and buy traffic](purchase.md).

### 2. Authentication

Dashboard login and proxy login are **different**.

1. Open [Whitelist & Users](https://www.joyproxy.com/admin-authorization.html).
2. Under **Username / Password**, create a credential (label 3+ characters, password 6+).
3. Keep the **password**. You will pair it with a **long generated username** in the next step — not with this short label.

Full walkthrough: [Authentication methods](authentication.md).

### 3. Proxy setup (Endpoints)

In [Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html) → **Rotating**:

1. **Location** — country, then optionally state / city. See [Location targeting](location-targeting.md).
2. **Session type** — rotate every request, or **sticky** (1–30 minutes). See [Sticky sessions](sticky-sessions.md).
3. **Protocol** — HTTP, HTTPS, or SOCKS5. Host and port stay `gate.joyproxy.com:9001` for all three.
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
| Full generated username | Do not type the short Whitelist label |
| Password from Whitelist & Users | Do not use the website login password |

### 5. Confirm the IP

Run a snippet from [Send a test request](#send-a-test-request). When you see the **proxy exit IP**, the line is ready for scrapers, browsers, and tools.

## Integration

| You want | Page |
| --- | --- |
| Chrome / Edge only | [Browser extension](../software/browser-extension.md) |
| Batch test HTTP / SOCKS | [Proxy Tester](../software/proxy-tester.md) |
| Local `127.0.0.1` for a CLI tool | [Proxy Server](../software/proxy-server.md) |
| Desktop scrapers and RPA | [Third-party software](../../best-practices/third-party-static-proxies.md) |
| AI agents / MCP | [Integrate proxies in AI](../../integration/integrate-proxies-in-ai.md) |

## Usage

Open the **Usage** tab on the Residential / Mobile / Business console to watch remaining GB. Buy another pack from [Purchase → Rotating](https://www.joyproxy.com/admin-purchase.html?tab=short-term) when traffic runs low — you do not need a new username each time.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| **407** / Proxy Authentication Required | Password from Whitelist & Users. Username is the **generated** string, not your email and not the short credential label. |
| Timeout | Host `gate.joyproxy.com`, port `9001`. Try HTTP before SOCKS if a firewall is involved. |
| Wrong country | Generate a **new** username with the country selected. Do not edit the old string. |
| Order inactive / no traffic | Remaining GB in [My Proxies](https://www.joyproxy.com/admin-my-orders.html) or Usage. |

Still stuck? [Live chat](../../support/live-chat.md) with a **redacted** curl (never send the live password).

## What to read next

| Task | Page |
| --- | --- |
| Create or reset proxy users | [Authentication methods](authentication.md) |
| Country / city targeting | [Location targeting](location-targeting.md) |
| Keep the same IP for several minutes | [Sticky sessions](sticky-sessions.md) |
| Copy-paste for more languages | [Code examples](code-examples.md) |
| Use in Chrome, Windows, RPA | [Apps and browsers](apps-and-browsers.md) |
