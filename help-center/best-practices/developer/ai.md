# 在 Cursor 及 AI 智能体中集成 JoyProxy 接口

开发者可以在 **Cursor**、**VS Code**、**Claude Desktop** 等环境中配置 **JoyProxy AI MCP（Model Context Protocol）**，以便直接在 AI 对话中调用代理网络能力（查询余额、提取端点等）。

---

## 步骤一：获取 AI Access Token

登录 JoyProxy 控制台，在任意网络的「提取」页面选择 **AI 提取** 标签页，复制专用的 **AI Access Token**。

---

## 步骤二：在 Cursor 中配置 MCP 服务器

1. 打开 Cursor Settings，选择 **Features → MCP Servers**；
2. 点击 **Add new MCP server**；
3. 填写配置：
   - **Name**：`joyproxy`
   - **Type**：`command`
   - **Command**：
     ```bash
     npx -y @joyproxy/mcp-server --token YOUR_AI_ACCESS_TOKEN
     ```
4. 保存后指示灯变为绿色即可在 Cursor Chat 中直接对话调用。
