import { execSync } from 'child_process';

export default function(eleventyConfig) {

	// Run after build to index search
	// Deploying pagefind lib. to "_site/pagefind/"
	eleventyConfig.on('eleventy.after', () => {
        execSync(`npx pagefind --site _site --output-path _site/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
    })
}