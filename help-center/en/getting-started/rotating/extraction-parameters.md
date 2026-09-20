# Advanced extraction parameters

On **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**, combine the parameters below. They are encoded into the generated long username.

---

## 1. Location targeting

- **Country**: the exit country (United States, United Kingdom, Japan, Germany, and 200+ others).
- **Province / State**: after you pick a country, you can lock a state or province (for example California).
- **City**: lock a specific city (for example Los Angeles). *City inventory changes with live node availability.*

## 2. Carrier targeting (ASN)

You can request an exit IP from a specific ASN (for example `AS7922` Comcast or `AS7018` AT&T).

## 3. Session control

- **Rotate IPs on every request**: the gateway assigns a new exit IP on each HTTP/HTTPS request. Best for large-scale collection, crawling, and anti-block work.
- **Sticky session**: set the hold time with the slider (**1–30 minutes**). While the window is open, every request that uses that long username keeps the same exit IP — useful for logins, carts, 2FA, and multi-step forms.

## 4. Protocol and output format

- **Protocol**: `HTTP`, `HTTPS`, and `SOCKS5`. HTTP and SOCKS5 can both reach HTTPS sites.
- **Output format**:
  - `Endpoint:port`: `gate.joyproxy.com:9001`.
  - `HTTP / SOCKS5 URI`: full URI such as `http://user:pass@gate.joyproxy.com:9001`.
  - **Table view**: Host, Port, Username, and Password in four columns, for clients that use separate fields.

---

> 💡 **Pass parameters through the API**  
> To extract in bulk from code and control targeting, the API accepts `country_iso`, `format`, and other core parameters. For the full parameter list, limits, and live tests, see **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>** or **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">Programmatic extract guide</a>**.
