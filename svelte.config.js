import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		paths: {
			base: isDev ? '' : '/my-site'
		}
	}
};

export default config;
