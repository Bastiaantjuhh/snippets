---
title: .gitignore
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
# Copyright (c) Bastiaan de Hart

# Microsoft VScode
.vscode/*
.history/

# JetBrains IDE
idea/*

# .ENV
.env

# PHP
/vendor/
*.lock

# NodeJS
node_modules/
package-lock.json
npm-debug.log
yarn-error.log

# Redis
*.rdb

# MacOS
.DS_Store
.AppleDouble
.LSOverride
._*

# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BIN

# Laravel
/.phpunit.cache
/public/storage
/storage/*.key
/storage/pail
/storage/logs/*.log
/storage/cache/
/storage/views/*.php
phpunit.xml

# Laravel (Custom)
./docker/logs/*.log
./docker/redis/*
./docker/mysql/*
```