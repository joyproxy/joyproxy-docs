# Generate endpoints

After you buy traffic and set credentials, generate Rotating Proxies endpoints from the web console, the API, or AI tools.

---

## 1. Web generator (console)

This is the most direct way to generate endpoints:

1. Log in and open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**.
2. Pick a network at the top (for example **Residential**) and switch to the **Rotating Proxies** tab.
3. Confirm the mode tab is **Web generator**.
4. Set options:
   - **Output format**: `Endpoint:port`, `HTTP`, or `SOCKS5`.
   - **Session duration**: rotate IPs on every request, or a sticky session (1–30 minutes).
   - **Location**: country / region, plus optional state and city.
   - **Quantity**: number of endpoints (1–200).
5. Click **Generate now**.
6. Review the list below:
   ```text
   http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001
   ```
   - Switch between list and table views.
   - Click **Copy** or **Copy host:port list**. Output format buttons include **Windows (CRLF)** and **JSON**.

> **Core reminder**  
> `GENERATED_USER` is the full encoded string (country, region, city, session, and more). Copy it in full. Do not truncate or edit characters.

---

## 2. API generator (from your code)

If your app needs to pull a proxy list or generate endpoints in code:

1. On **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>**, open the **API generator** tab.
2. Choose a return format: **Windows (CRLF)** or **JSON**.
3. Click **Generate URL**, then **Copy URL**.

> 💡 **OpenAPI spec and code integration**  
> For request paths and parameters, open **<a href="https://www.joyproxy.com/admin-openapi.html" target="_blank" rel="noopener noreferrer">OpenAPI Center</a>** in the console, or see **<a href="../../best-practices/developer/build-proxy-list.md" target="_blank" rel="noopener noreferrer">Programmatic extract and proxy-pool setup</a>**.

---

## 3. AI generator (natural language)

In Cursor, VS Code, Claude Desktop, or OpenClaw, JoyProxy official AI tools can generate endpoints from natural language:

- Open **<a href="https://www.joyproxy.com/admin-ip-extraction-center.html" target="_blank" rel="noopener noreferrer">Endpoint generator</a>** and click **AI generator** for details.
- Full guide: **<a href="../../best-practices/developer/ai.md" target="_blank" rel="noopener noreferrer">Use proxies in AI</a>**.
