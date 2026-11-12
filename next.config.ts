import type { NextConfig } from 'next'

const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  agentRules: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/photo-1749997209112-4c8a3be03f4a', search: '?auto=format&fit=crop&w=1080&q=80' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/photo-1704455306251-b4634215d98f', search: '?auto=format&fit=crop&w=1080&q=80' },
    ],
  },
  async redirects() {
    return [
      { source: '/planes', destination: '/productos/restaurantes#planes', permanent: true },
      { source: '/facturacion', destination: '/productos/restaurantes', permanent: true },
      { source: '/:legacy(desarrollo-custom|apps-moviles|automatizacion-empresarial|arquitectura-escalable)', destination: '/servicios', permanent: true },
    ]
  },
}

export default config
