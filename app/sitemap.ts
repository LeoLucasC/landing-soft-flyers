import type { MetadataRoute } from 'next'
import { products, siteUrl } from '../lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/productos', ...products.map(({ slug }) => '/productos/' + slug), '/servicios', '/nosotros', '/contacto', '/demo', '/cotizar', '/privacidad'].map((path) => ({ url: new URL(path, siteUrl).href }))
}
