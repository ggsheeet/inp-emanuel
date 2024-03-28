import type { Metadata } from 'next'
import { HeroOther } from '@/components/hero/heroOther'

export const metadata: Metadata = {
    metadataBase: new URL('https://localhost:3000'),
	title: 'Iglesia Nacional Presbiteriana Emanuel',
	description: 'Una esperanza para la familia',
	keywords:
		'iglesia, presbiteriana, monterrey, cristiana, dios, cristo, emanuel',
	robots: 'index, follow',
	openGraph: {
		title: 'INP Emanuel | Dios con Nosotros',
		description: 'Una esperanza para la familia',
		images: [
			{
				secureUrl:
					'https://inp-emmanuel.s3.us-east-2.amazonaws.com/logos-inp/inp-logo.png',
				url: 'https://inp-emmanuel.s3.us-east-2.amazonaws.com/logos-inp/inp-logo.png',
				width: 1200,
				height: 630
			}
		],
		url: 'http://inp-emanuel.vercel.app',
		type: 'website'
	},
}

export default function NestedPageLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <HeroOther />
            {children}
        </>
    )
}
