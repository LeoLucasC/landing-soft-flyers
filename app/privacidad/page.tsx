import type { Metadata } from 'next'
import { PageIntro } from '../../components/layout'
import { email } from '../../lib/content'

export const metadata: Metadata = { title: 'Aviso de privacidad', alternates: { canonical: '/privacidad' } }

export default function Privacy() {
  return <><PageIntro label="Privacidad" title="Datos de contacto" description="Cómo se usan los datos que decides compartir al consultar por nuestros productos y servicios."/>
    <section className="section wrap narrow prose">
      <h2>Datos de tu solicitud</h2><p>Los formularios solicitan nombre, empresa, correo, WhatsApp y el detalle de tu consulta. Usamos esos datos para responderte sobre la demo o el proyecto que indiques.</p>
      <h2>Canales de envío</h2><p>Si eliges WhatsApp, el formulario prepara un mensaje para que lo revises y lo envíes desde ese servicio. Si el envío directo está disponible, la solicitud se entrega al sistema de recepción de Soft Flyer.</p>
      <h2>Consultas</h2><p>Puedes escribir a <a href={'mailto:' + email}>{email}</a> para consultar sobre los datos que hayas compartido. Evita incluir datos de pacientes o información confidencial en tu mensaje.</p>
    </section>
  </>
}
