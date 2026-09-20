# Generate proxy endpoints

In the JoyProxy console, you can generate connection strings for the Custom Proxies ports you purchased.

---

## Web generator (console)

1. Log in and open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** in the left menu.
2. Switch to the **Custom Proxies** tab.
3. Set filters:
   - **Orders**: select specific custom port orders or all of them.
   - **Protocol**: `HTTP`, `HTTPS`, or `SOCKS5`.
   - **Credentials**: pick a Username/Password from Users & Whitelist.
   - **Output format**:
     - `Host:Port` (for example `us-ca.edge.joyproxy.com:20001`)
     - `Host:Port:User:Pass`
     - `http://User:Pass@Host:Port`
4. Generate and export:
   - Click **Generate now**, then **Copy host:port list** to copy the text.
   - Or export a `.txt` or `.csv` file.

---

## Programmatic API extraction (OpenAPI Center)

If automation needs to fetch the port list, check assignment status, or change region:

> 💡 **OpenAPI Center**  
> JoyProxy exposes a REST API. See **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>** in the console or the **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">programmatic extraction guide</a>**.
