# Use JoyProxy in Cursor and AI agents

You can attach **JoyProxy AI MCP (Model Context Protocol)** in **Cursor**, **VS Code**, and **Claude Desktop**, or **OpenClaw Skill** in **OpenClaw**, and call proxy APIs from chat or an agent (inventory, remaining traffic, rotating/static endpoints on demand).

JoyProxy AI APIs are read-only / limited management. They do not spend balance or change core credentials.

---

## Credentials (important)

Keep these two secrets separate:

| Credential | Used for | Where to get it |
| --- | --- | --- |
| **AI Access Token** | Auth for **MCP** and **OpenClaw Skill** only (inventory, generate endpoints). | Console **[Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai)** → **AI generator** |
| **Username/Password / IP Whitelist** | The actual proxy handshake (requests to `gate.joyproxy.com`). | Console **[Users & Whitelist](https://www.joyproxy.com/admin-authorization.html)** |

> **Do not mix them.**  
> An AI Access Token is **not** a proxy password. After the AI returns `gate.joyproxy.com:9001` (or similar), cURL, Python, or a browser still authenticates with Username/Password from **Users & Whitelist** (Rotating Proxies currently require Username/Password).

---

## Step 1: Get an AI Access Token

1. Sign in to the JoyProxy console;
2. Open **[Endpoint generator](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai)** and switch to **AI generator**;
3. On the **AI Access Token** card:
   - First time: click **Get AI Access Token**;
   - Click **Copy token** and store it;
   - If it leaks, click **Rotate** to revoke the old key and issue a new one.

---

## Step 2: MCP in Cursor

JoyProxy exposes a remote **HTTP JSON-RPC MCP** at `https://api.joyproxy.com/Mcp`. You do not install an npm package.

### Method A: MCP JSON (recommended)

Open Cursor’s MCP config (or click **Copy MCP JSON** in the console). Replace `YOUR_AI_ACCESS_TOKEN`:

```json
{
  "mcpServers": {
    "joyproxy": {
      "url": "https://api.joyproxy.com/Mcp",
      "headers": {
        "x-ai-access-token": "YOUR_AI_ACCESS_TOKEN"
      }
    }
  }
}
```

### Method B: Open in Cursor

On **AI generator**, after you copy the token, click **Open in Cursor**. A DeepLink opens Cursor and walks through the config.

---

## Step 3: VS Code / Claude Desktop

For MCP-capable VS Code extensions or Claude Desktop:

1. Open the client MCP config (for Claude Desktop, `claude_desktop_config.json`);
2. Add `joyproxy` under `mcpServers`:
   ```json
   {
     "mcpServers": {
       "joyproxy": {
         "url": "https://api.joyproxy.com/Mcp",
         "headers": {
           "x-ai-access-token": "YOUR_AI_ACCESS_TOKEN"
         }
       }
     }
   }
   ```
3. Reload the client and confirm MCP shows as connected.

---

## Step 4: OpenClaw Skill

If you use OpenClaw:

1. In chat, ask the agent to learn the Skill:
   ```text
   Please ask your AI to learn JoyProxy Skill first: https://api.joyproxy.com/Skill
   ```
2. When prompted, bind your **AI Access Token**;
3. Drive proxies in natural language from there.

---

## Example prompts

After MCP is connected, in Cursor Chat or Claude:

- **Check remaining traffic**:
  > “Use JoyProxy MCP to check remaining Rotating Residential Proxies traffic.”
- **Generate a geo endpoint**:
  > “Use JoyProxy to generate a Residential endpoint in Los Angeles, California, US, sticky session 10 minutes, then write a Python requests snippet to test connectivity.”
- **Pick a network type**:
  > “Generate a dedicated Business / ISP endpoint in Tokyo, Japan (network_type=business).”
