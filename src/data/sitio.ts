// Datos del canal en un solo lugar: si cambia un enlace, se cambia aquí.

export const CANAL_YOUTUBE = 'https://www.youtube.com/channel/UC0Ilkjabp2FzuvkXwykC06A';
export const SUSCRIBIRSE = `${CANAL_YOUTUBE}?sub_confirmation=1`;

// ID de editor de AdSense (también va en public/ads.txt)
export const ADSENSE_CLIENTE = 'ca-pub-6818329352848462';
// Bloque de anuncio adaptable creado en AdSense
export const ADSENSE_BLOQUE = '9512567430';

export type Red = 'youtube' | 'tiktok' | 'instagram';

export const REDES: { red: Red; nombre: string; usuario: string; url: string }[] = [
	{ red: 'youtube', nombre: 'YouTube', usuario: 'Tutoriales y videos', url: CANAL_YOUTUBE },
	{ red: 'tiktok', nombre: 'TikTok', usuario: '@tofenrich', url: 'https://www.tiktok.com/@tofenrich' },
	{ red: 'instagram', nombre: 'Instagram', usuario: '@tofen_kevin', url: 'https://www.instagram.com/tofen_kevin/' },
];

// Contenido publicado. Para agregar uno nuevo: crea la página en src/pages/articles y súmalo aquí.
export const CONTENIDO = [
	{
		titulo: 'Idiomas AutoCad 2024-2026',
		descripcion: 'Cambia AutoCAD de inglés a español (o al revés) sin reinstalar.',
		imagen: '/AutoCad.png',
		url: '/articles/Autocad_lang',
		etiqueta: 'Tutorial',
	},
	{
		titulo: 'Descarga Youtube Music Premiun Gratis 2024',
		descripcion: 'Qué es YouTube Music Premium y qué ventajas trae.',
		imagen: '/ytmusic.jpg',
		url: '/articles/yt_music',
		etiqueta: 'Apps',
	},
];
