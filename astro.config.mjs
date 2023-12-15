import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import { PORT } from '/src/consts';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	server: {
    // this is the astro3 default port anyway
    port: PORT
  },
});
