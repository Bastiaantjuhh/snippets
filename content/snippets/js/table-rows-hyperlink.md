---
title: Table row as hyperlink
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
const tableRows = document.querySelectorAll(".portfolio-table tbody tr");

for (const tableRow of tableRows) {
	tableRow.addEventListener("click", function() {
		window.location.href = this.dataset.href;
	});
}
```