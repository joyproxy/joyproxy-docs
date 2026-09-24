---
title: "JoyProxy 浏览器扩展：换 IP 只改 Chrome，不动系统代理"
description: "粘贴代理字符串、一键测试出口 IP 与延迟、仅对当前浏览器生效——Windows 与 macOS 全局网络保持原样。"
category: getting-started
legacyUrl: https://www.joyproxy.com/blog/joyproxy-browser-extension_cn.html
---

# JoyProxy 浏览器扩展：换 IP 只改 Chrome，不动系统代理

很多开发者和运营者都经历过这种折磨：为了在 Chrome 里模拟海外家庭宽带访问某个特定页面，在 Windows 或 macOS 系统设置里开启了全局代理。结果网页刚打开，Slack 掉线了、Git 代码拉取失败了，后台正在运行的各类办公软件全都被迫绕道海外机房。切回直连后，浏览器里的测试环境又失效了。

这正是全局系统代理的硬伤：整台电脑的所有网络请求都会被无差别劫持。但很多时候，你只是需要**某一个浏览器窗口走海外代理，其他所有办公软件继续走直连** 。

[JoyProxy 浏览器扩展](https://www.joyproxy.com/products/browser-extension.html) 就是为此而生的一款轻巧工具。粘贴代理、即时测试出口 IP 与延迟，然后只对当前的 Chrome、Edge 或 Brave 生效，系统底层网络丝毫不受影响。

20 秒功能速览：粘贴节点、一键测试连通性、即刻生效，操作界面与 Chrome 应用商店一致。

该插件**完全免费且开源** 。你可以配合任意第三方代理使用，源码已公开发布在 [GitHub](https://github.com/joyproxy/joyproxy-extension) 上；如果登录了 JoyProxy 账户，还可在扩展中直接同步提取已购买的代理节点。

## 它能为你做什么？

  * **智能解析任意格式：** 支持直接粘贴 `host:port`、`user:pass@host:port`、`http://`、`socks5://` 或服务商提取链接，无需手动拆分填写字段。
  * **先测后用，失败不覆盖：** 点击「测试」按钮可即时获取当前节点的真实出口 IP、国家地区以及往返延迟。如果节点失效，绝对不会覆盖当前正在生效的可用配置。
  * **浏览器级作用域隔离：** 代理仅在当前 Chromium 浏览器进程生效，不会修改操作系统的网络设置，企业微信、飞书、本地开发服务一切如常。
  * **多配置快捷切换：** 支持保存多个常用地区或账号的代理配置，一键平滑切换，告别每日重复复制粘贴。



## 适用人群与典型场景

**跨境电商店铺运营：** 一个浏览器窗口登录海外店铺，电脑上的其他工作流继续保持本地高速连接；

**广告与投放素材核查：** 快速以目标国家用户的网络身份预览广告落地页展示效果，无需把整机流量切换过去；

**前端开发与地域适配测试：** 验证多语言站点的 GeoIP 自动跳转与 CDN 分发逻辑，测完一键恢复直连。

_提示：本扩展专注于网络出口的快速代理分流，不提供底层的硬件指纹伪装。如果需要严格的多账号硬件防关联，请配合专业指纹浏览器使用。_

## 支持与安装方式

扩展基于 Manifest V3 标准构建，支持 Chrome 114+、Microsoft Edge、Brave 等所有 Chromium 内核浏览器。你可以直接从 [Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) 安装并固定在浏览器工具栏，开启轻量高效的代理切换体验。

免费 Chromium 扩展：粘贴、测试、应用，更好地告别系统代理冲突。

[前往 Chrome 商店添加](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng)
