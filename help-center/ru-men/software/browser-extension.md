# 浏览器扩展

JoyProxy **浏览器扩展**只给**一个 Chromium 内核浏览器**（Chrome、Edge、Brave 等）设代理，不改系统设置 — 适合手工 QA、账号检查、看地域效果。

[Chrome 网上应用店](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng) · [产品页](https://www.joyproxy.com/products/browser-extension.html)

## 安装

1. 从应用店安装。
2. 在工具栏固定 **JoyProxy**。

## 三种用法

| 模式              | 是否登录 JoyProxy     | 做什么                        |
| --------------- | ----------------- | -------------------------- |
| **自有代理**        | 可选                | 粘贴 `host:port` 或 URI，测试后应用 |
| **提取 API**      | 可选                | 填提供商 URL，扩展拉列表并测试          |
| **JoyProxy 线路** | 在 joyproxy.com 登录 | 从订单加载轮换或静态线                |

不登录也能测自己的代理；要从 [我的代理](https://www.joyproxy.com/admin-my-orders.html) 拉云端线路时再登录。

## 推荐流程

1. 打开弹窗或侧栏。
2. 粘贴一行 **或** 登录加载购买记录。
   * 轮换：`http://GENERATED_USER:YOUR_PASS@gate.joyproxy.com:9001` — [轮换首次请求](../rotating/first-request.md)
   * 静态/定制：`http://USER:PASS@HOST:PORT`，来自 [端点生成](https://www.joyproxy.com/admin-ip-extraction-center.html)
3. **连通性测试**，确认出口 IP / 国家。
4. **Apply** — 仅本浏览器走代理。

## 进阶

* 全站或仅白名单站点
* User-Agent、WebRTC 限制、清 Cookie、指纹相关选项
* 保存配置、导入列表

> **提示**
>
> 大量线路用 [代理检测工具](proxy-tester.md)。整机代理见 [Windows 11 系统代理](../../zui-jia-shi-jian/windows-11-system-proxy.md)。

源码：[GitHub — joyproxy-extension](https://github.com/joyproxy/joyproxy-extension) · 隐私：[privacy-extension](https://www.joyproxy.com/privacy-extension.html)
