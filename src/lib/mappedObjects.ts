export const menuLinks = [
	{ name: 'Sobre Nosotros', href: '/nosotros' },
	{ name: 'Visítanos', href: '/visitanos' },
	{ name: 'Eventos', href: '/eventos' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contribuir', href: '/contribucion' }
]

export const mobileLinks = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Sobre Nosotros', href: '/nosotros' },
	{ name: 'Visítanos', href: '/visitanos' },
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
