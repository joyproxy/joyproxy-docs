# 在 Cursor 及 AI 智能体中集成 JoyProxy 接口

开发者可以在 **Cursor**、**VS Code**、**Claude Desktop** 等 AI 编程环境中接入 **JoyProxy AI MCP（Model Context Protocol）**，也可以在 **OpenClaw** 中接入 **OpenClaw Skill**，直接在对话或 Agent 自动化流程中安全调取代理网络能力（查询余额用量、按需提取动态/静态代理端点等）。

JoyProxy 的 AI 接口运行在只读与受限管理层，不涉及余额消费或核心账密变更，保障生产环境安全。

---

## 核心机制与凭据区分（重要）

在配置前，请务必区分两类不同用途的凭据：

| 凭据类型 | 主要用途 | 获取位置 |
| --- | --- | --- |
| **AI Access Token** | 仅用于 **MCP 服务器** 与 **OpenClaw Skill** 的身份验证，驱动 AI 工具调用（查询库存、生成提取端点）。 | 控制台 **[IP 提取中心](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai)** → **AI generator** |
| **代理认证账密 / IP 白名单** | 实际建立代理连接（向 `gate.joyproxy.com` 发起网络请求）时使用的凭据。 | 控制台 **[用户与白名单（Authorization）](https://www.joyproxy.com/admin-authorization.html)** |

> **关键提醒**：  
> AI Access Token **不能**直接作为代理连接密码。当 AI 为你生成 `gate.joyproxy.com:9001` 等端点后，客户端（如 cURL、Python、浏览器）连接网关时仍需使用你在「账密与白名单」设置的代理账密（动态代理网关目前仅支持账密授权）。

---

## 步骤一：获取 AI Access Token

1. 登录 JoyProxy 控制台；
2. 打开 **[IP 提取中心（Endpoint Generator）](https://www.joyproxy.com/admin-ip-extraction-center.html?panel=ai)**，切换到顶部的 **AI generator** 标签页；
3. 在页面中的 **AI Access Token** 卡片内：
   - 若首次使用，点击 **获取 Token（Get token）** 生成密钥；
   - 点击 **复制 Token（Copy token）** 保存备用；
   - 如发生泄露，可随时点击 **轮换（Rotate）** 立即作废旧密钥并生成新 Token。

---

## 步骤二：在 Cursor 中配置 MCP 服务器

JoyProxy 提供标准的远程 **HTTP JSON-RPC MCP 服务**（Endpoint 为 `https://api.joyproxy.com/Mcp`），无需在本地安装额外的 npm 包。

### 方法 A：使用 MCP JSON 配置（推荐）

打开 Cursor 的 MCP 配置文件（或在控制台直接点击 **复制 MCP JSON**），填入以下内容并将 `YOUR_AI_ACCESS_TOKEN` 替换为你实际获取的 Token：

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

### 方法 B：通过控制台一键唤起

在控制台 **AI generator** 页面复制 Token 后，可以直接点击 **Open in Cursor** 按钮，系统将通过 DeepLink 唤起 Cursor 并自动填入配置引导。

---

## 步骤三：在 VS Code / Claude Desktop 中配置

对于支持 MCP 协议的 VS Code 插件或 Claude Desktop：

1. 打开客户端的 MCP 配置文件（例如 Claude Desktop 的 `claude_desktop_config.json`）；
2. 在 `mcpServers` 节点下增加 `joyproxy` 服务配置：
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
3. 重启或重新载入客户端，确认 MCP 服务状态显示为正常（绿色连通）。

---

## 步骤四：在 OpenClaw 中配置 Skill

如果你使用的是 OpenClaw 平台：

1. 在对话窗口中输入指令，让 Agent 学习 JoyProxy Skill：
   ```text
   Please learn JoyProxy Skill: https://api.joyproxy.com/Skill
   ```
2. 根据提示提供你的 **AI Access Token** 完成鉴权绑定；
3. 即可开始通过自然语言调度代理。

---

## 对话调用示例

配置生效后，在 Cursor Chat 或 Claude 对话框中，你可以直接使用自然语言驱动工具：

- **查询账户用量**：
  > “帮我用 JoyProxy MCP 查询一下当前动态住宅代理的剩余可用流量。”
- **提取特定地区代理**：
  > “使用 JoyProxy 提取一个美国加州洛杉矶、粘性会话 10 分钟的住宅代理端点，并用 Python requests 写一段测试连通性的脚本。”
- **指定网络类型**：
  > “提取一个日本东京的商业 ISP 独享代理端点（network_type=business）。”
