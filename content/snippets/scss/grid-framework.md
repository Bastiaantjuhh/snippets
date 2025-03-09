---
title: Grid framework
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

```
/*
 * Copyright (c) Bastiaantjuhh
 * License: MIT (https://choosealicense.com/licenses/mit/)
 */

$sizes: 6, 8, 12;

@each $size in $sizes {

	.c-#{$size} {
		position: relative;
		width: 100%;
		gap: 10px;
		flex: 0 0 percentage(math.div($size, 12));
		max-width: percentage(math.div($size, 12));
	}
}

@media(min-width: 576px) {

	.grid {
		max-width: 540px;
	}

	@each $size in $sizes {

		.c-sm-#{$size} {
			position: relative;
			width: 100%;
			gap: 10px;
			flex: 0 0 percentage(math.div($size, 12));
			max-width: percentage(math.div($size, 12));
		}
	}
}


@media(min-width: 768px) {

	.grid {
		max-width: 720px;
	}

	@each $size in $sizes {

		.c-md-#{$size} {
			position: relative;
			width: 100%;
			gap: 10px;
			flex: 0 0 percentage(math.div($size, 12));
			max-width: percentage(math.div($size, 12));
		}
	}
}

@media(min-width: 992px) {

	.grid {
		max-width: 960px;
	}

	@each $size in $sizes {

		.c-lg-#{$size} {
			position: relative;
			width: 100%;
			gap: 10px;
			flex: 0 0 percentage(math.div($size, 12));
			max-width: percentage(math.div($size, 12));
		}
	}
}

@media(min-width: 1200px) {

	.grid {
		max-width: 1140px;
	}

	@each $size in $sizes {

		.c-xl-#{$size} {
			position: relative;
			width: 100%;
			gap: 10px;
			flex: 0 0 percentage(math.div($size, 12));
			max-width: percentage(math.div($size, 12));
		}
	}
}

@media(min-width: 1400px) {

	.grid {
		max-width: 1320px;
	}

	@each $size in $sizes {

		.c-xxl-#{$size} {
			position: relative;
			width: 100%;
			gap: 10px;
			flex: 0 0 percentage(math.div($size, 12));
			max-width: percentage(math.div($size, 12));
		}
	}
}
```