---
title: Nginx config
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
server {
    listen 80;
    listen [::]:80;

    listen 443 ssl;
    listen [::]:443 ssl;

    ssl_certificate /etc/letsencrypt/live/bdeh.art/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bdeh.art/privkey.pem;

    server_name bdeh.art www.bdeh.art;
    root /var/www/bdeh.art/html;

    return 301 https://new-domain.com;
}
```