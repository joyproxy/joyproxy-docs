# 按需切换出口 IP

独享移动代理默认保持**静态稳定的移动出口**，不会在您未操作的情况下自动频繁变动 IP。当您的业务确有更换 IP 需求时，可通过以下两种方式主动切换同国家、同运营商下的新 IP：

## 方式 1：控制台一键切换 IP

1. 进入控制台 **独享移动代理 → 我的独享移动代理**。
2. 找到目标端口行，点击 **「↻ 切换 IP」** 按钮。
3. 后台将向运营商基带发起重拨，约 **5–15 秒** 后即可生效全新移动出口 IP（端口 Host、端口号与账密保持不变，客户端无需重新配置）。

## 方式 2：调用专属切换 API（适配指纹浏览器与脚本）

点击端口行的 **「复制切换 API」**，即可获得专属于该端口的私有切换链接：

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

您可以将该 URL 直接填入 AdsPower、BitBrowser 等指纹浏览器的「刷新 IP 链接 / Change IP URL」栏位，实现按需一键刷新。

> **冷却说明**：为保障物理 SIM 模组与运营商基带稳定性，同一端口连续切换 IP 之间设有 **45 秒防抖冷却**；重拨期间约有 5–15 秒短暂断连，请避免在重要表单提交过程中触发切换。
