---
title: Eleventy (11ty) v2 Collection
author:
  name: Bastiaan de Hart
  url: https://github.com/Bastiaantjuhh
---

## Slugify
```
const slugify = require("slugify");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("slugify", str => {
        return slugify(str, {
            lower: true,      // Everything to small caps
            strict: true,     // Remove strange chars
            locale: "en",     // NL, because ü → u 
            remove: /[*+~.()'"!:@]/g // Removes unknomw chars
        });
    });
};
```

## CSS Minify
```
const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});
};
```

## Terser
```
const { minify } = require("terser");

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("terser", async function (code, callback) {
		try {
			const minified = await minify(code);
			return minified.code;

		} catch (err) {
			console.error("Terser error: ", err);
			// Fail gracefully.
			return code;
		}
	});
};
```

## ISO8601 year format for sitemap
```
eleventyConfig.addFilter("dateISO8601", (date) => {
    return DateTime.fromJSDate(date, { zone: "Europe/Amsterdam" }).toISO();
});
```