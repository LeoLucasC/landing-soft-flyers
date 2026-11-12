import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navigation } from '../components/navigation'
import { Footer } from '../components/footer'
import { siteName, siteUrl } from '../lib/content'
import './globals.css'
import './shell.css'

const geist = localFont({ src: '../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2', weight: '100 900', variable: '--font-geist', display: 'swap' })
const inter = localFont({ src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', weight: '100 900', variable: '--font-inter', display: 'swap' })
const description = 'Software para restaurantes, soluciones SaaS por rubro y desarrollo a medida para empresas en Perú.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Soft Flyer | Software empresarial en Perú', template: '%s | Soft Flyer' },
  description,
  applicationName: siteName,
  openGraph: { title: 'Soft Flyer | Software empresarial en Perú', description, siteName, locale: 'es_PE', type: 'website', images: ['/media/login-restaurante.jpg'] },
  icons: { icon: '/media/softflyer-icon.png' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-PE"><body className={geist.variable + " " + inter.variable}>
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <Navigation/><main id="contenido">{children}</main><Footer/>
  </body></html>
}
