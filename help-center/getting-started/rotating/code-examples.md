# Code examples (Rotating)

Replace `GENERATED_USER` with the username from [Endpoints](https://www.joyproxy.com/admin-ip-extraction-center.html) and `YOUR_PASS` with the [Users & Whitelist](https://www.joyproxy.com/admin-authorization.html) Username/Password. Host and port stay `gate.joyproxy.com:9001`.

Test URL `https://api.ipify.org` only prints your exit IP. Point the same proxy at your real target when this succeeds.

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
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
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
  "net/http"
  "net/url"
)

func main() {
  proxyURL, _ := url.Parse("http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001")
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, err := client.Get("https://api.ipify.org")
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  println(string(b))
}
```
{% endtab %}

{% tab title="Java" %}
```java
import java.net.*;
import java.io.*;

public class Demo {
  public static void main(String[] args) throws Exception {
    Proxy proxy = new Proxy(Proxy.Type.HTTP,
        new InetSocketAddress("gate.joyproxy.com", 9001));
    Authenticator.setDefault(new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication("GENERATED_USER", "YOUR_PASS".toCharArray());
      }
    });
    URLConnection conn = new URL("https://api.ipify.org").openConnection(proxy);
    try (InputStream in = conn.getInputStream()) {
      System.out.println(new String(in.readAllBytes()));
    }
  }
}
```
{% endtab %}

{% tab title="C#" %}
```csharp
using System.Net;
using System.Net.Http;

var handler = new HttpClientHandler {
  Proxy = new WebProxy("http://gate.joyproxy.com:9001") {
    Credentials = new NetworkCredential("GENERATED_USER", "YOUR_PASS")
  }
};
using var client = new HttpClient(handler);
Console.WriteLine(await client.GetStringAsync("https://api.ipify.org"));
```
{% endtab %}
{% endtabs %}

SOCKS5 with cURL:

```bash
curl -x socks5h://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001 https://api.ipify.org
```

## Extract usernames in bulk

See [Generate endpoints](generate-endpoints.md) for the extract **API URL**. Keep that URL private; do not hard-code it in a public repo.

## Next

[Use in apps and browsers](apps-and-browsers.md) · [Protocols](protocols.md) · [Response codes](response-codes.md)
