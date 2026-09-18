# Code examples (Static)

Use the **host and port from Endpoints**. Examples below use placeholders `user`, `pass`, `us-ca.edge.joyproxy.com`, and `10001`—replace them with your allocation.

Whitelisted servers can drop `user:pass@` from the URL.

## Python

```python
import requests

PROXY = "http://user:pass@us-ca.edge.joyproxy.com:10001"
proxies = {"http": PROXY, "https": PROXY}
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
```

## Java

```java
import java.net.*;
import java.io.*;

Proxy proxy = new Proxy(Proxy.Type.HTTP,
    new InetSocketAddress("us-ca.edge.joyproxy.com", 10001));
Authenticator.setDefault(new Authenticator() {
  protected PasswordAuthentication getPasswordAuthentication() {
    return new PasswordAuthentication("user", "pass".toCharArray());
  }
});
URLConnection conn = new URL("https://api.ipify.org").openConnection(proxy);
try (InputStream in = conn.getInputStream()) {
  System.out.println(new String(in.readAllBytes()));
}
```

## C#

```csharp
using System.Net;
using System.Net.Http;

var handler = new HttpClientHandler {
  Proxy = new WebProxy("http://us-ca.edge.joyproxy.com:10001") {
    Credentials = new NetworkCredential("user", "pass")
  }
};
using var client = new HttpClient(handler);
Console.WriteLine(await client.GetStringAsync("https://api.ipify.org"));
```

## Go

```go
package main

import (
  "io"
  "net/http"
  "net/url"
)

func main() {
  proxyURL, _ := url.Parse("http://user:pass@us-ca.edge.joyproxy.com:10001")
  client := &http.Client{
    Transport: &http.Transport{Proxy: http.ProxyURL(proxyURL)},
  }
  resp, _ := client.Get("https://api.ipify.org")
  defer resp.Body.Close()
  b, _ := io.ReadAll(resp.Body)
  println(string(b))
}
```

## Node.js

```javascript
const { HttpsProxyAgent } = require("https-proxy-agent");

const agent = new HttpsProxyAgent("http://user:pass@us-ca.edge.joyproxy.com:10001");
const res = await fetch("https://api.ipify.org", { agent });
console.log(await res.text());
```

Extract via API: <a href="generate-endpoints.md" target="_blank" rel="noopener noreferrer">Generate endpoints</a>. OpenAPI: <a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>.
