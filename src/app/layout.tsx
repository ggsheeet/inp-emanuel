import type { Metadata } from 'next'
import Head from 'next/head'
import NavBar from '@/components/navBar/NavBar'
import { Raleway, Frank_Ruhl_Libre, Petit_Formal_Script } from 'next/font/google'
import './globals.css'

const favicon = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}logos-inp/inp-logo.png`

const rale = Raleway({ subsets: ['latin'], variable: '--font-rale' })
const ruhl = Frank_Ruhl_Libre({ subsets: ['latin'], variable: '--font-ruhl' })
const petit = Petit_Formal_Script({ weight: '400', subsets: ['latin'], variable: '--font-petit'})

export const generateViewport = () => 'width=device-width, initial-scale=1.0, maximum-scale=1.0'

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  title: 'Iglesia Nacional Presbiteriana Emanuel',
  description: 'Una esperanza para la familia',
  keywords: 'iglesia, presbiteriana, monterrey, cristiana, dios, cristo, emanuel',
  robots: 'index, follow',
  openGraph: {
    title: 'INP Emanuel | Dios con Nosotros',
    description: 'Una esperanza para la familia',
    images: [
      {
        secureUrl: 'https://inp-emmanuel.s3.us-east-2.amazonaws.com/logos-inp/inp-logo.png',
        url: 'https://inp-emmanuel.s3.us-east-2.amazonaws.com/logos-inp/inp-logo.png',
        width: 1200,
        height: 630
      },
    ],
    url: 'http://localhost:3000',
    type: 'website'
  },
  alternates: {
    canonical: ''
  },
  icons: {
    icon: favicon
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
          <meta name="viewport" content={generateViewport()} />
        </Head>
        <body className={`${rale.variable} ${ruhl.variable} ${petit.variable}`}>
          <header>
            <NavBar />
          </header>
          {children}
        </body>
    </html>
  )
}
