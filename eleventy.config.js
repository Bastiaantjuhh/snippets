import { InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";

// Plugins
import pluginFilters from "./_config/filters.js";
import pluginMinify from "./_config/minify.js";
import pluginPagefind from "./_config/pagefind.js";
import pluginShortcodes from "./_config/shortcodes.js";

export default async function(eleventyConfig) {

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({"./public/": "/"});

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	eleventyConfig.addBundle("css", { toFileDirectory: "dist" });
	eleventyConfig.addBundle("js", { toFileDirectory: "dist" });

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });

	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	// Custom plugins inside _config
	eleventyConfig.addPlugin(pluginFilters);
	eleventyConfig.addPlugin(pluginShortcodes);
	eleventyConfig.addPlugin(pluginPagefind);
	eleventyConfig.addPlugin(pluginMinify);
};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [ "md", "njk" ],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	}
};