---
title: Github Actions Workflow
date: 2025-03-08
tags:
  - misc
---

```
name: Image Update

on:
  schedule:
    - cron: "0 16 * * 1"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo content
        uses: actions/checkout@v2

      - name: Setup PHP
        uses: franzliedke/gh-action-php@master
          
      - name: Run PHP script
        run: php ./cli.php
          
      - name: Commit files
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A
          git commit -m "[GH ACTIONS] Update images" -a
          
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.TOKEN }}
          branch: main
```