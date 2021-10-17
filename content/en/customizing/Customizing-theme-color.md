---
title: Customizing theme color
menuTitle: "Theme color"
description: ""
position: 43
category: "Customizing"
fullscreen: true
---

<alert type='warning'>
This Feature only work with <strong>Tailwind</strong>!<br/>
If you customize the theme color, you need to take care for Tailwindcss-purging
</alert>

If you like to change the coloring (everywhere, where a color is used):

| Property           | Default  | Options | Usage                                                                                                                                                                                                                                                               |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$customThemeColor | 'indigo' | string  | You can customize the _theme color_ via this property. [Purging](https://tailwindcss.com/docs/optimizing-for-production) is only taken care of if the value is `indigo`. Otherwiese you need to add the color-classes to you tailwind config (`tailwind.config.js`) |

When purging is used, add this to your `tailwind.config.js`.
replace `[color]` with you color-variable name.

```js
// tailwind.config.js
module.exports = {
  purge: {
    // ...
    safelist: [
      "bg-[color]-50",
      "bg-[color]-100",
      "bg-[color]-200",
      "bg-[color]-300",
      "ring-[color]-100",
      "border-[color]-300",
      "text-[color]-600",
      "text-[color]-800",
      "bg-[color]-900",
      "text-[color]-400",
      "text-[color]-500",
      // ...
    ],
  },
  // ...
};
```
