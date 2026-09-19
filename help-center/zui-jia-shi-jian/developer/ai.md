# 怎么在 Cursor 或 AI 助手里直接调用代理能力

随着大语言模型和 AI 编程工具的爆发，许多开发者在使用 **Cursor**、**VS Code**、**Claude Desktop** 或本地自动化智能体（如 OpenClaw）时，经常希望 AI 能够直接感知并调度外网网络：
- 让 AI 自动帮你查询当前的代理流量余额；
- 让 AI 根据你当前写的爬虫代码，用自然语言直接生成指定国家的代理连接端点；
- 让 AI 在调试代码时，直接发起带境外代理的测试请求。

JoyProxy 官方推出了专门的 **AI MCP（Model Context Protocol）** 扩展与 **OpenClaw Skill**，无需编写复杂中间件即可开箱即用。

---

## 第一步：获取专用的 AI Access Token

- **安全隔离**：调用 AI 工具链时，请使用专用的 **AI Access Token**，切勿使用主用户密码或 Master Token；
- **获取位置**：登录 JoyProxy 控制台，进入任意网络的「提取」页面，点击顶部的 **AI 提取** 标签页，即可看到并复制你的专属 AI 凭证。

---

## 第二步：在 Cursor 中配置 JoyProxy MCP

Cursor 原生支持标准 MCP 协议，配置仅需 1 分钟：

1. 打开 Cursor 编辑器，点击右上角的 **设置（Settings）图标**，进入 Cursor Settings；
2. 在左侧菜单中找到 **Features → MCP Servers**；
3. 点击 **Add new MCP server**；
4. 填写配置信息：
   - **Name**：`joyproxy`
   - **Type**：选择 `command`（或 `stdio`）
   - **Command**：填入 JoyProxy 官方发布的 MCP 启动命令与你的 AI Token：
     ```bash
     npx -y @joyproxy/mcp-server --token YOUR_AI_ACCESS_TOKEN
     ```
5. 保存后，Cursor 会自动加载该服务器，状态指示灯变为绿色。

---

## 第三步：在聊天对话中直接体验自然语言调度

配置完成后，按 `Ctrl + L`（Mac 为 `Cmd + L`）唤醒 Cursor 侧边栏对话框，你就可以直接向 AI 提要求了：

- **提问**：“帮我查一下我 JoyProxy 账户里还剩多少动态住宅流量？”  
  *AI 会自动调用 MCP 工具，在对话框里直接向你汇报剩余 GB 数与订单状态。*
- **提问**：“我正在写一个抓取美国亚马逊的爬虫，帮我提取 3 个位于加利福尼亚州的 HTTP 动态代理端点，并贴进我的代码中。”  
  *AI 会自动调度端点生成工具，精确输出带认证的连接字符串。*

---

## 配合 OpenClaw 智能体工作流

如果你在服务器端使用开源的 OpenClaw Agent 框架，只需在工作流配置中引入官方 Skill：
```yaml
skills:
  - name: joyproxy
    api_token: "YOUR_AI_ACCESS_TOKEN"
```
智能体在执行跨国数据检索、海外舆情监测以及自动化竞品调研时，便具备了全自动切换多国 IP 的神级辅助能力。
