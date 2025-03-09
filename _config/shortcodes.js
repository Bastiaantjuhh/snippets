export default function(eleventyConfig) {

    eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
}