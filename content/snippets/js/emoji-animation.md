---
title: Emoji animation
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
setInterval(function () {
    document.getElementById("emoji").innerHTML = "😑";

    setTimeout(function () { 
        document.getElementById("emoji").innerHTML = "😐";
    }, 100)

    setTimeout(function () { 
        document.getElementById("emoji").innerHTML = "😑";
    }, 500)

    setTimeout(function () { 
        document.getElementById("emoji").innerHTML = "😐";
    }, 750)

}, 3000)
```