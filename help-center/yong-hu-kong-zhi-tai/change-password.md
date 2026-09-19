# 修改密码

在 **我的账户** → **资料** Tab 更新登录密码。

<a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">我的账户</a>

---

## 步骤

1. 侧栏 **我的账户** → 选择 **资料** Tab（`settingsPage.tabProfile`）。
2. 在 **修改密码** 卡片填写：
   - **目前密码**
   - **新密码**
   - **确认密码**
3. 点击 **保存更改**。

| 结果 | 提示文案 |
| --- | --- |
| 缺字段 | **请填写所有密码字段** |
| 不一致 | **两次输入的新密码不一致！** |
| 太短 | **密码至少 6 个字符** |
| 成功 | **密码已更新！** |

---

## 说明

- 其他设备需重新 **登录**。
- 自动化请用 API Token / 主用户 Token，勿把登录密码写入代码：见 <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">主用户与自动化 Token</a>。
- 忘记目前密码：用 <a href="forgot-password.md" target="_blank" rel="noopener noreferrer">找回密码</a>，勿在本表单反复试错。
