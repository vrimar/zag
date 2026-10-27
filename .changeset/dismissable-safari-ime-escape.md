---
"@zag-js/dismissable": patch
---

- Fix Escape dismissing a layer while an IME is composing in Safari, which ends composition before the keydown and signals it only through `keyCode` 229.
