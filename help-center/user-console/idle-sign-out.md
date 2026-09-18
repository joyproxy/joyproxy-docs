# 空闲自动退出时间

控制离开电脑后 JoyProxy 控制台保持登录的时长。较短超时可降低共享或公共电脑上的风险。

## 配置

1. 打开<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">账户设置</a>。
2. 找到 **Idle sign-out**、**Session timeout** 或类似安全设置。
3. 选择兼顾便利与安全的时长。
4. 保存更改。

## 建议

| 环境 | 建议 |
| --- | --- |
| 个人笔记本 | 默认或中等超时 |
| 办公室热桌 | 短超时 + 密码管理器 |
| 服务器跳板机 | 短超时；自动化请用 API Token 而非浏览器会话 |

空闲退出仅影响**网页控制台**。API Token 在您<a href="rotate-token.md" target="_blank" rel="noopener noreferrer">轮换</a>之前仍然有效。
