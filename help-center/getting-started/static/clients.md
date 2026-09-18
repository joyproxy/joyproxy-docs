# 在 Windows、Chrome 与手机上使用静态线

专用 `host:port` 适合填进系统或浏览器的代理表单。

## 仅浏览器

<a href="../software/browser-extension.md" target="_blank" rel="noopener noreferrer">JoyProxy 浏览器扩展</a> — 粘贴 `http://USER:PASS@HOST:PORT`，测试后应用。其它程序仍走直连。

## Windows 上的 Chrome / Edge（系统代理）

Chrome 跟随 Windows 设置。见 <a href="../../best-practices/windows-11-system-proxy.md" target="_blank" rel="noopener noreferrer">Windows 11 系统代理</a>、<a href="../../best-practices/chrome-static-proxy.md" target="_blank" rel="noopener noreferrer">Chrome 静态代理</a>。

> **安全**
>
> 系统代理会影响所有兼容应用。测完记得关闭。

## iOS / Android Wi‑Fi

<a href="../../best-practices/mobile-static-proxy.md" target="_blank" rel="noopener noreferrer">移动设备</a> — Wi‑Fi 里填手动代理，或用 <a href="../software/android-client.md" target="_blank" rel="noopener noreferrer">Android 客户端</a> 做按应用分流。

## 第三方工具

Host、port 来自端点生成；认证用白名单或账号密码。工具对照表：<a href="../../best-practices/third-party-static-proxies.md" target="_blank" rel="noopener noreferrer">第三方软件</a>。

## 本章索引

<a href="README.md" target="_blank" rel="noopener noreferrer">静态代理</a>
