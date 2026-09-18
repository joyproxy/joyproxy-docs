# Idle sign-out time

Control how long the JoyProxy console stays signed in when you step away. Shorter timeouts reduce risk on shared or public computers.

## Configure

1. Open <a href="https://www.joyproxy.com/admin-settings.html" target="_blank" rel="noopener noreferrer">Account settings</a>.
2. Find **Idle sign-out**, **Session timeout**, or similar security setting.
3. Choose a duration that balances convenience and safety.
4. Save changes.

## Recommendations

| Environment | Suggestion |
| --- | --- |
| Personal laptop | Default or moderate timeout |
| Office hot-desk | Short timeout + password manager |
| Server jump box | Short timeout; use API tokens in automation instead of browser sessions |

Idle sign-out only affects the **web console**. API tokens remain valid until you <a href="rotate-token.md" target="_blank" rel="noopener noreferrer">rotate</a> them.
