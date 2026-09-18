# Android 客户端

无需 root，通过 HTTP/SOCKS5 给 App 分流。适合在真机上测移动网页、应用，或配合 JoyProxy **移动轮换**线路。

[产品页](https://www.joyproxy.com/products/android-client.html) · [APK](https://github.com/joyproxy/joyproxy-client-android/releases/latest)

## 安装

1. 阅读 [产品页](https://www.joyproxy.com/products/android-client.html)。
2. 从 [GitHub Releases](https://github.com/joyproxy/joyproxy-client-android/releases/latest) 下载签名 APK。
3. 若系统提示，允许从未知来源安装。

## 配置

1. 在 [端点生成](https://www.joyproxy.com/admin-ip-extraction-center.html) 获取 **host**、**port**、账号密码。
   * 移动/住宅轮换：`gate.joyproxy.com:9001` + 生成用户名 + Users & Whitelist 密码 — [轮换](../rotating/)
   * 静态/定制：专用 host:port — [静态](../static/)
2. 路由模式：
   * **全局** — 所有受支持 App
   * **白名单** — 仅选中 App
   * **黑名单** — 除选中外全部
3. 启动 VPN 式服务（sing-box libbox）。

不想装 App、只用系统 Wi‑Fi 手动代理时，见 [手机静态代理](../../zui-jia-shi-jian/mobile-static-proxy.md)。
