// Datos del canal en un solo lugar: si cambia un enlace, se cambia aquí.

// Dirección pública del sitio (canonical, sitemap y datos estructurados)
export const SITIO = 'https://tofen-youtube-page.vercel.app';

export const CANAL_YOUTUBE = 'https://www.youtube.com/channel/UC0Ilkjabp2FzuvkXwykC06A';
export const SUSCRIBIRSE = `${CANAL_YOUTUBE}?sub_confirmation=1`;

// ID de editor de AdSense (también va en public/ads.txt)
export const ADSENSE_CLIENTE = 'ca-pub-6818329352848462';
// Bloque de anuncio adaptable creado en AdSense
export const ADSENSE_BLOQUE = '9512567430';

export type Red = 'youtube' | 'tiktok' | 'instagram';

// Si usuario va vacío, se muestra el texto traducido de i18n.ts
export const REDES: { red: Red; nombre: string; usuario: string; url: string }[] = [
	{ red: 'youtube', nombre: 'YouTube', usuario: '', url: CANAL_YOUTUBE },
	{ red: 'tiktok', nombre: 'TikTok', usuario: '@tofenrich', url: 'https://www.tiktok.com/@tofenrich' },
	{ red: 'instagram', nombre: 'Instagram', usuario: '@tofen_kevin', url: 'https://www.instagram.com/tofen_kevin/' },
];

// Contenido publicado. Para agregar uno nuevo: crea la guía en src/pages/articles (español)
// y en src/pages/en/articles (inglés), y súmala aquí.
export const CONTENIDO = [
	{
		titulo: 'Idiomas AutoCad 2024-2026',
		titulo_en: 'AutoCAD languages 2024-2026',
		descripcion: 'Cambia AutoCAD de inglés a español (o al revés) sin reinstalar.',
		descripcion_en: 'Switch AutoCAD between English and Spanish without reinstalling.',
		imagen: '/AutoCad.png',
		url: '/articles/Autocad_lang',
		url_en: '/en/articles/Autocad_lang',
		etiqueta: 'Tutorial',
		etiqueta_en: 'Tutorial',
	},
	{
		titulo: 'Descarga Youtube Music Premiun Gratis 2024',
		titulo_en: 'YouTube Music Premium 2025',
		descripcion: 'Qué es YouTube Music Premium y qué ventajas trae.',
		descripcion_en: 'What YouTube Music Premium is and what it offers.',
		imagen: '/ytmusic.jpg',
		url: '/articles/yt_music',
		url_en: '/en/articles/yt_music',
		etiqueta: 'Apps',
		etiqueta_en: 'Apps',
	},
];
