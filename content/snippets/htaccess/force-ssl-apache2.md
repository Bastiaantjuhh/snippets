---
title: Force SSL (Apache2)
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
# Force HTTPS
RewriteEngine on
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

# Note: It’s also recommended to enable HTTP Strict Transport Security (HSTS)
# on your HTTPS website to help prevent man-in-the-middle attacks.
# See https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security
<IfModule mod_headers.c>
    # Remove "includeSubDomains" if you don't want to enforce HSTS on all subdomains
    Header always set Strict-Transport-Security "max-age=31536000;includeSubDomains"
</IfModule>
```