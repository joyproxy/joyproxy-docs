---
title: "JoyProxy Browser Extension: Switch IPs in Chrome Without Touching System Proxy"
description: "Paste a proxy, test the exit IP, apply it to Chrome / Edge / Brave only. Windows and macOS stay unchanged."
category: getting-started
legacyUrl: https://www.joyproxy.com/blog/joyproxy-browser-extension.html
---

# JoyProxy Browser Extension: Switch IPs in Chrome Without Touching System Proxy

You flip the Windows proxy so Chrome can look like a US household. Then Slack stalls, git hangs, and some Electron app you forgot about starts exiting through Miami. You flip it back. Chrome is on your home IP again.

That is what a system-wide proxy actually does: every app on the machine follows the same switch. Fine if you meant it. A pain if you only needed one browser tab in another country.

The [JoyProxy Browser Extension](https://www.joyproxy.com/products/browser-extension.html) is the smaller tool. Paste a line, test where it really exits, then apply it to **this** Chrome, Edge, or Brave. Windows and macOS stay as they were. Mail, IDE, other browsers — none of them move.

Twenty seconds of the popup: paste, test, apply. Same UI as the Chrome Web Store listing.

It is free and open source. You do not need a JoyProxy account unless you want lines you bought on the site. Source is on [GitHub](https://github.com/joyproxy/joyproxy-extension).

## What it actually does

Most of the work happens in the popup. You are not hunting through Chrome’s proxy flags.

  * Paste whatever string you have — `host:port`, `user:pass@host:port`, `http://`, `socks5://`, or a provider extract URL. It parses the format instead of making you split fields by hand.
  * Hit Test before you commit. You get the exit IP, country, and latency. If the test fails, the active proxy does not change. A dead paste should not take the rest of the session with it.
  * Apply only hits this browser. No OS proxy panel, no other Chromium profile unless you installed it there too.
  * Save a few profiles if you jump between regions or accounts. Re-pasting the same line every morning is a waste of a toolbar icon.
  * Rotating and static both work. Your own endpoint, someone else’s extract API, or JoyProxy lines after you sign in on joyproxy.com.



A failed test never overwrites what is already applied. That is the behavior you want at 10 a.m., not a silent switch to a host that is down.

## Who this is for

People who switch exits a lot, and cannot afford to knock the rest of the laptop offline while they do it.

Ad verification: load the placement from the geo the buyer asked for, without sending Slack and the file server through a datacenter hop. Cross-border sellers: keep one marketplace session on a target-country IP, leave local tools on direct. Social operators: one browser on the account IP, everything else still on the office network. Web testing: see the page from another country, check the geo gate, look at latency — then turn it off.

It is not an anti-detect browser. If your job is rebuilding fingerprints, this is the wrong product. If the job is “this Chrome window should leave from that exit,” it is the right one.

## Chrome, Edge, Brave — not Firefox

Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng). It runs on Chrome 114+, Edge, Brave, and other Chromium builds. Firefox is out of scope; we did not ship a Gecko version.

Need to check a list of proxies before you pick one? That is the desktop [Proxy Tester](https://www.joyproxy.com/products/tester.html) — HTTP and SOCKS5, including UDP. The extension is for applying one working line inside the browser, not batch-validating a spreadsheet.

Need an IP in the first place? [Proxy IP plans](https://www.joyproxy.com/proxy-products.html) and [pricing](https://www.joyproxy.com/pricing.html). After you sign in on the site, rotating and static lines show up in the extension’s JoyProxy tab. If you already bought traffic, finish [whitelist and credentials](https://www.joyproxy.com/blog/getting-started/whitelist-credentials-setup/) or the line will fail auth and the test will tell you so.

## Install it, then try one line

  1. Add JoyProxy from the Chrome Web Store and pin it.
  2. Paste a proxy you already trust — or sign in on joyproxy.com if you use purchased lines.
  3. Run the test. Read the exit IP, country, and latency.
  4. Apply. Only this browser uses it until you restore direct, or switch to another saved profile.



Free Chromium extension. Paste, test, apply — system proxy stays out of it.

[Add to Chrome](https://chromewebstore.google.com/detail/joyproxy/ogilogpkhgojddkmkogloikpfkkldjng)

[Product page](https://www.joyproxy.com/products/browser-extension.html) · [GitHub](https://github.com/joyproxy/joyproxy-extension) · [Whitelist & credentials](https://www.joyproxy.com/blog/getting-started/whitelist-credentials-setup/)
