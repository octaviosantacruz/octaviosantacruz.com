// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://octaviosantacruz.com',
	output: 'static',
	integrations: [
		sitemap({
			// The 404 page is a response, not a destination.
			filter: (page) => !page.endsWith('/404/'),
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', es: 'es' },
			},
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
