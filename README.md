# Soft Flyer

Web corporativa en Next.js para Soft Flyer Restaurantes, Soft Flyer Odontología y desarrollo a medida.

## Vista previa local

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
```

Abre http://127.0.0.1:3000. Para verificar la versión de producción, ejecuta `npm run lint`, `npm run typecheck` y `npm run build`.

## Contenido y solicitudes

- `lib/content.ts` reúne productos, planes, canales de contacto y contenido de servicios. Los planes de Restaurantes siguen las especificaciones comerciales 041 y 042 del producto.
- `public/media` contiene el logo, el ícono y la foto de restaurante reutilizados de los materiales de Soft Flyer.
- El catálogo de casos de éxito se habilita al añadir casos autorizados a `app/casos-de-exito/page.tsx`.

Define `SITE_URL` con el origen público de la landing para generar las URL canónicas, el sitemap y los metadatos sociales.

Por defecto, los formularios de demo y cotización preparan un mensaje que el visitante revisa y envía desde WhatsApp. Para habilitar el envío directo, configura `LEADS_WEBHOOK_URL` y, si el destino lo requiere, `LEADS_WEBHOOK_TOKEN`. El webhook recibe un POST JSON según el esquema de `lib/leads.ts` y debe responder con un estado 2xx al recibir la solicitud. Configura `LEADS_TRUSTED_IP_HEADER` únicamente si el proxy controla el encabezado y reemplaza cualquier valor del cliente. Los límites de solicitudes y la deduplicación se aplican por instancia.
