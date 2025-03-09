---
title: Prefetching assets
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
const projectFilenames = [
    "moving1.gif", "moving2.gif", "static1.webp", "static2.webp"
];

function preload(...urls) {
    return urls.map(url => {
        const img = new Image();
        img.src = url;
        return img;
    });
}

const images = preload(
    ...projectFilenames.map(filename => "/assets/img/" + filename)
);
```