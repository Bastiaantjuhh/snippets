export default {
	"layout": "layouts/post.njk",
	"date": "git Last Modified",
	permalink: function ({ title, tags }) {
		const tag = Array.isArray(tags) ? tags[0] : tags; // First tag when there are multiple
		return `/snippets/${this.slugify(tag)}/${this.slugify(title)}.html`;
	},
};