import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	// preprocess: vitePreprocess()
};

export default config;
