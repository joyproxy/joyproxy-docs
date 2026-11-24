# 连接配置与一键 / API 换 IP

## 1. 获取直连代理凭据

端口状态变为 **运行中** 后，前往控制台 [独享移动代理 → 我的独享移动代理](https://www.joyproxy.com/admin-proxy-mobile-dedicated.html?tab=orders)，可直接查看：

- **Host**（服务器 IP）
- **HTTP 端口** 与 **SOCKS5 端口**（全协议直连，不限流量）
- **Username / Password**（端口独立账密）

点击列表中的快捷按钮可一键复制：
- **复制 HTTP**：`http://user:pass@host:http_port`
- **复制 SOCKS5**：`socks5://user:pass@host:socks5_port`
- **复制指纹格式**：`host:port:user:pass`（可直接粘贴至 AdsPower、比特浏览器 BitBrowser、HubStudio）

## 2. 控制台一键换 IP

点击端口行的 **「↻ 一键换 IP」** 按钮，JoyProxy 后端会向运营商基带触发重拨，约 **5–15 秒** 后即会分配同国家同运营商下的全新 4G/5G 移动出口 IP。

> 为保护物理设备与基带稳定，每次换 IP 之间设有 **45 秒** 防抖冷却时间。

## 3. 专属 API 轮换链接（适配指纹浏览器与脚本）

点击 **「复制换 IP API」** 可获得专属于该端口的 JoyProxy 轮换链接：

```bash
curl "https://api.joyproxy.com/api/v1/mobile-dedicated/rotate/<your_rotate_token>"
```

成功响应示例：

```json
{
  "success": true,
  "order_no": "MD261124-XXXXXX",
  "message": "IP rotation triggered. New mobile IP will be active in 5-15 seconds.",
  "cooldown_sec": 45
}
```

可将该 URL 直接填入 AdsPower / BitBrowser 的「刷新 IP URL / Change IP URL」字段中，实现打开浏览器环境前自动换 IP。
