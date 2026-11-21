// Textos de la interfaz en español e inglés.
// El español vive en "/" y el inglés en "/en/". Las guías (artículos) por ahora solo están en español.

export type Idioma = 'es' | 'en';

export function idiomaDe(url: URL): Idioma {
	return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';
}

// Arma un enlace interno en el idioma indicado: ruta('en', '/about') -> '/en/about'
export function ruta(idioma: Idioma, camino: string): string {
	if (idioma === 'es') return camino;
	return camino === '/' ? '/en/' : `/en${camino}`;
}

// Página equivalente en el otro idioma (las guías no tienen versión en inglés, así que van al inicio)
export function rutaEquivalente(url: URL, destino: Idioma): string {
	let camino = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
	if (camino.startsWith('/articles')) camino = '/';
	return ruta(destino, camino);
}

export const TEXTOS = {
	es: {
		meta: {
			titulo: 'Tofen · Tutoriales de programación y tecnología',
			descripcion: 'Tutoriales de programación y tecnología de Tofen: guías paso a paso, descargas y videos del canal.',
		},
		menu: {
			contenido: 'Contenido',
			temas: 'Temas',
			sobre: 'Sobre mí',
			suscribete: 'Suscríbete',
			irInicio: 'Tofen, ir al inicio',
			aOscuro: 'Cambiar a modo oscuro',
			aClaro: 'Cambiar a modo claro',
			tema: 'Cambiar tema',
			idioma: 'Idioma',
		},
		inicio: {
			eyebrow: 'Canal de YouTube · Hecho en Nicaragua',
			titulo: 'Aprende programación y tecnología,',
			tituloAcento: 'paso a paso',
			bajada: 'Tutoriales en español, claros y sin rodeos. Aquí encuentras la guía y las descargas de cada video del canal.',
			suscribete: 'Suscríbete en YouTube',
			verContenido: 'Ver contenido',
			puntos: ['Tutoriales en español', 'Descargas incluidas', 'Gratis'],
			masDelCanal: 'Más del canal',
			proximo: 'Próximo video',
			enCamino: 'En camino',
			videoNuevo: 'Video nuevo',
			campanita: 'Activa la campanita',
			descargaLista: 'Descarga lista',
			enlaceGuia: 'Enlace en la guía',
			contEyebrow: 'Contenido',
			contTitulo: 'Las guías de cada video',
			contSub: 'Los pasos, enlaces y descargas que muestro en el canal, para que los sigas a tu ritmo.',
			soonTitulo: 'Vienen más guías',
			soonSub: 'Cada video nuevo suma la suya',
			soonTexto: 'Sigo subiendo tutoriales al canal. Suscríbete para enterarte primero.',
			irCanal: 'Ir al canal',
			verGuia: 'Ver guía',
			temasEyebrow: 'Temas',
			temasTitulo: 'De qué trata el canal',
			temasSub: 'Sobre todo programación y tecnología, con algo de apps y juegos de vez en cuando.',
			temas: [
				{ titulo: 'Programación', desc: 'Código explicado paso a paso' },
				{ titulo: 'Programas', desc: 'AutoCAD y otras herramientas' },
				{ titulo: 'Apps', desc: 'Apps útiles para el día a día' },
				{ titulo: 'Tecnología', desc: 'Trucos para tu PC' },
				{ titulo: 'Juegos', desc: 'De vez en cuando, algo de juego' },
			],
			finalTitulo: '¿Te sirvió algún tutorial?',
			finalSub: 'Suscríbete y activa la campanita para no perderte el próximo.',
		},
		sobre: {
			metaTitulo: 'Sobre mí · Tofen',
			metaDesc: 'Soy Kevin Richtofen (Tofen), de Nicaragua. Hago tutoriales de programación y tecnología en YouTube.',
			eyebrow: 'Sobre mí',
			pais: 'Nicaragua',
			tema: 'Programación y tecnología',
			bio: 'Subo tutoriales relacionados con la programación y la tecnología y, de vez en cuando, juegos u otros temas.',
			boton: 'Suscríbete al canal',
			redes: 'Redes sociales',
		},
		pie: {
			lema: 'Tutoriales de programación y tecnología.',
			hecho: 'Hecho en Nicaragua.',
			sitio: 'Sitio',
			redes: 'Redes',
		},
		redes: { youtube: 'Tutoriales y videos' },
	},
	en: {
		meta: {
			titulo: 'Tofen · Programming and tech tutorials',
			descripcion: 'Programming and tech tutorials by Tofen: step-by-step guides, downloads and videos from the channel.',
		},
		menu: {
			contenido: 'Content',
			temas: 'Topics',
			sobre: 'About me',
			suscribete: 'Subscribe',
			irInicio: 'Tofen, go to home',
			aOscuro: 'Switch to dark mode',
			aClaro: 'Switch to light mode',
			tema: 'Change theme',
			idioma: 'Language',
		},
		inicio: {
			eyebrow: 'YouTube channel · Made in Nicaragua',
			titulo: 'Learn programming and tech,',
			tituloAcento: 'step by step',
			bajada: 'Clear, no-nonsense tutorials (in Spanish). Here you’ll find the guide and downloads for every video on the channel.',
			suscribete: 'Subscribe on YouTube',
			verContenido: 'See content',
			puntos: ['Step-by-step guides', 'Downloads included', 'Free'],
			masDelCanal: 'More from the channel',
			proximo: 'Next video',
			enCamino: 'Coming soon',
			videoNuevo: 'New video',
			campanita: 'Turn on notifications',
			descargaLista: 'Download ready',
			enlaceGuia: 'Link in the guide',
			contEyebrow: 'Content',
			contTitulo: 'A guide for every video',
			contSub: 'The steps, links and downloads I show on the channel, so you can follow at your own pace. Guides are in Spanish.',
			soonTitulo: 'More guides coming',
			soonSub: 'Every new video gets one',
			soonTexto: 'I keep uploading tutorials to the channel. Subscribe to hear about them first.',
			irCanal: 'Go to the channel',
			verGuia: 'Read guide',
			temasEyebrow: 'Topics',
			temasTitulo: 'What the channel is about',
			temasSub: 'Mostly programming and tech, with some apps and games every now and then.',
			temas: [
				{ titulo: 'Programming', desc: 'Code explained step by step' },
				{ titulo: 'Software', desc: 'AutoCAD and other tools' },
				{ titulo: 'Apps', desc: 'Handy apps for everyday use' },
				{ titulo: 'Tech', desc: 'Tips for your PC' },
				{ titulo: 'Games', desc: 'Some gaming now and then' },
			],
			finalTitulo: 'Did a tutorial help you?',
			finalSub: 'Subscribe and turn on notifications so you don’t miss the next one.',
		},
		sobre: {
			metaTitulo: 'About me · Tofen',
			metaDesc: 'I’m Kevin Richtofen (Tofen), from Nicaragua. I make programming and tech tutorials on YouTube.',
			eyebrow: 'About me',
			pais: 'Nicaragua',
			tema: 'Programming and tech',
			bio: 'I upload tutorials about programming and technology and, every now and then, games and other topics.',
			boton: 'Subscribe to the channel',
			redes: 'Social media',
		},
		pie: {
			lema: 'Programming and tech tutorials.',
			hecho: 'Made in Nicaragua.',
			sitio: 'Site',
			redes: 'Social',
		},
		redes: { youtube: 'Tutorials and videos' },
	},
} as const;

export function textos(idioma: Idioma) {
	return TEXTOS[idioma];
}
