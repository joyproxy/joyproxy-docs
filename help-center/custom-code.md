# Integrate Custom Proxies in Code

Custom endpoints stay stable — reuse the same host:port from the generator.

Replace `user`, `pass`, `host`, `port` with your Username/Password from Whitelist & Users and generated result. Server IPs on whitelist may omit credentials.

## Python

```
import requests

PROXY = "http://user:pass@us-ca.edge.joyproxy.com:10001"
proxies = {"http": PROXY, "https": PROXY}
r = requests.get("https://api.ipify.org", proxies=proxies, timeout=30)
print(r.text)
```

## Java

```
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

```
using System.Net;
using System.Net.Http;

var handler = new HttpClientHandler {
  Proxy = new WebProxy("http://us-ca.edge.joyproxy.com:10001") {
    Credentials = new NetworkCredential("user", "pass")
  }
};
using var client = new HttpClient(handler);
var ip = await client.GetStringAsync("https://api.ipify.org");
Console.WriteLine(ip);
```

## Go

```
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

## JavaScript (Node.js)

```
const {{ HttpsProxyAgent }} = require('https-proxy-agent');

const agent = new HttpsProxyAgent('http://user:pass@us-ca.edge.joyproxy.com:10001');
const res = await fetch('https://api.ipify.org', {{ agent }});
console.log(await res.text());
```

**🔗 API generation**Use `/v1/extract-custom` with `allocation_id` — see [OpenAPI Center](https://www.joyproxy.com/admin-openapi.html).
