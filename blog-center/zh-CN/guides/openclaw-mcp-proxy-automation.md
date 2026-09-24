---
title: "利用 OpenClaw 与 AI MCP 自动化生成代理端点"
description: "为 Cursor、VS Code 和 Claude Desktop 的 AI 编程智能体赋予动态提取海外代理端点的能力，实现测试与爬虫的自然语言调度。"
category: guides
legacyUrl: https://www.joyproxy.com/blog/openclaw-mcp-proxy-automation_cn.html
---

# 利用 OpenClaw 与 AI MCP 自动化生成代理端点

随着 AI Coding Agent（如 Cursor Agent、Claude Desktop、VS Code Copilot 等）在日常开发流程中的深度普及，开发者越来越多地要求智能体能够**直接与真实网络基础设施交互** ——例如在编写跨国接口单元测试时，让 AI 自动调取一个美国加州的住宅代理并跑通验证；或者在编写爬虫脚本时，让智能体实时查询账户当前可用流量。

为此，JoyProxy 正式开放了两大面向 AI 智能体的连接标准：**OpenClaw Skill** （面向自然语言对话代理）以及 **AI MCP（Model Context Protocol）** （面向现代 IDE 结构化工具调用）。

## 两大集成模式的核心共性

  * **专属 AI Access Token：** 在控制台一键生成独立的 AI 访问令牌，与主账户管理密码分离；
  * **严格的安全只读边界：** 支持端点生成、余额查询、流量消耗统计，默认屏蔽高危的充值扣款或修改关键账户设置动作；
  * **与底层 API 逻辑完全一致：** AI 调用的端点生成器与人工在控制台操作的接口完全统一，无性能损耗或特权限制。



## 1\. OpenClaw Skill 集成

服务接入地址：`https://api.joyproxy.com/Skill`。完成 Token 绑定后，你可以在 OpenClaw 或各类基于 LangChain、AutoGPT 的任务机器人中直接用自然语言发号施令，例如： _“帮我生成 3 个英国伦敦的 SOCKS5 动态端点并注入环境变量”_ 。

详情可参阅产品页面：[OpenClaw Skill](https://www.joyproxy.com/products/openclaw-skill.html)。

## 2\. AI MCP（Model Context Protocol）工具集

MCP 服务地址：`https://api.joyproxy.com/Mcp`。基于 Anthropic 推出的开放协议，你可以将配置 JSON 直接粘贴到 **Cursor Settings、VS Code Roo Code 或 Claude Desktop** 的 MCP 配置文件中。配置生效后，AI 侧边栏会自动多出 `joyproxy_extract_endpoint` 等标准化工具，支持智能体在写代码的同时自主执行工具调用并获取最新节点。

详情可参阅产品页面：[AI MCP](https://www.joyproxy.com/products/ai-mcp.html)。

## 生产安全最佳实践

  1. **专 Key 专用：** 为不同的测试智能体分配独立的 AI Token，测试完毕后可随时在控制台单向注销；
  2. **严禁提交版本库：** 妥善通过 `.env` 或本地环境变量加载 Token，切勿将明文配置文件 Push 到 GitHub 等公共代码仓库中；
  3. **前置断言校验：** 在生产爬虫调度大规模使用 Agent 提取的节点前，建议在脚本首层加入简易连通性探测。
