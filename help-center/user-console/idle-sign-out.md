# 空闲自动退出时间

设置离开电脑后，网页控制台保持登录的时长。共用或公共电脑上建议用较短超时。

## 配置

1. 打开<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">账户设置</a>。
2. 找到 **Idle sign-out**、**Session timeout** 或同类安全项。
3. 选择兼顾方便与安全的时长。
4. 保存。

## 参考

| 环境 | 建议 |
| --- | --- |
| 个人笔记本 | 默认或中等超时 |
| 办公室共用桌 | 短超时 + 密码管理器 |
| 服务器跳板机 | 短超时；自动化用 API Token，不用浏览器会话 |

空闲退出只影响**网页控制台**。API Token 在你<a href="rotate-token.md" target="_blank" rel="noopener noreferrer">轮换</a>之前一直有效。
