import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tofen-youtube-page.vercel.app',
	// URLs sin barra final (/about, /en/articles/...), igual que los enlaces internos
	trailingSlash: 'never',
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'es',
				locales: { es: 'es', en: 'en' },
			},
		}),
	],
});
