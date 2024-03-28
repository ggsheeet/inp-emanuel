export const menuLinks = [
	{ name: 'Sobre Nosotros', href: '/nosotros' },
	{ name: 'Acércate', href: '/acercate' },
	{ name: 'Eventos', href: '/eventos' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contribuir', href: '/contribucion' }
]

export const mobileLinks = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Sobre Nosotros', href: '/nosotros' },
	{ name: 'Acércate', href: '/acercate' },
	{ name: 'Eventos', href: '/eventos' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contribuir', href: '/contribucion' }
]

export const heroMainImgs = [
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/service.webp`,
		alt: 'servicio',
		width: 1600,
		height: 900
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/kids-service.webp`,
		alt: 'niños',
		width: 2048,
		height: 1536
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/front-door.webp`,
		alt: 'entrada',
		width: 768,
		height: 1024
	}
]

export const heroOtherImgs = [
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}heros-inp/us.webp`,
		alt: 'nosotros',
		width: 1832,
		height: 940,
		href: '/nosotros'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}heros-inp/visit.webp`,
		alt: 'acercate',
		width: 1600,
		height: 1066,
		href: '/acercate'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}heros-inp/events.webp`,
		alt: 'eventos',
		width: 760,
		height: 380,
		href: '/eventos'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}heros-inp/blog.webp`,
		alt: 'blog',
		width: 960,
		height: 250,
		href: '/blog'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}heros-inp/contribute.webp`,
		alt: 'contribucion',
		width: 800,
		height: 400,
		href: '/contribucion'
	}
]

export const heroOtherNames = [
	{ name: 'Nosotros', href: '/nosotros' },
	{ name: 'Acércate', href: '/acercate' },
	{ name: 'Eventos', href: '/eventos' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Apoya Nuestra Iglesia', href: '/contribucion' }
]