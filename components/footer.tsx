import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import logo from '../src/assets/images/logo.png'
import mailbox from '../src/assets/images/mailbox_3d.png'
import { email, plans, whatsapp } from '../lib/content'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576762857702', Icon: FaFacebook },
  { name: 'Instagram', href: 'https://www.instagram.com/softflyer_', Icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/softlyer', Icon: FaLinkedin },
]

export function Footer() {
  return <footer className="old-footer">
    <div className="old-footer-cta-wrap">
      <section className="old-footer-cta" aria-labelledby="footer-cta-title">
        <div className="old-footer-cta-content">
          <Image src={mailbox} alt="" sizes="(min-width: 768px) 112px, 80px"/>
          <div><h2 id="footer-cta-title">¿Conversamos sobre tu negocio?</h2>
            <p>Solicita una demo de Soft Flyer Restaurantes o cuéntanos qué software necesitas para tu empresa.</p></div>
        </div>
        <a className="old-whatsapp" href={whatsapp('Hola, quiero conversar sobre las soluciones de Soft Flyer.')} target="_blank" rel="noreferrer">
          <FaWhatsapp size={20}/> Hablemos por WhatsApp
        </a>
      </section>
    </div>
    <div className="old-footer-wrap">
      <div className="old-footer-card">
        <div className="old-footer-grid">
          <div className="old-footer-brand">
            <Link href="/" aria-label="Soft Flyer, inicio"><Image src={logo} alt="Soft Flyer" sizes="84px"/></Link>
            <p>Creamos software para restaurantes y clínicas dentales, y desarrollamos soluciones a medida para empresas en Perú.</p>
            <div className="old-footer-socials">
              {socialLinks.map(({ name, href, Icon }) => <a key={name} href={href} aria-label={name} target="_blank" rel="noreferrer"><Icon size={18}/></a>)}
            </div>
          </div>
          <div className="old-footer-products">
            <h2>Soluciones</h2>
            <ul>
              <li><Link href="/productos/restaurantes">Restaurantes</Link></li>
              <li><Link href="/productos/odontologia">Odontología</Link></li>
              <li><Link href="/servicios">Software a medida</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
            </ul>
          </div>
          <div className="old-footer-plans">
            <h2>Planes de Restaurantes</h2>
            <ul>{plans.map(({ name, price }) => <li key={name}><Link href={'/demo?plan=' + encodeURIComponent(name)}>
              <strong>{name}</strong><small>S/ {price} al mes</small>
            </Link></li>)}</ul>
          </div>
          <div className="old-footer-contact">
            <h2>Contacto</h2>
            <ul>
              <li><MapPin size={18}/><Link href="/contacto">Atención en Perú</Link></li>
              <li><Mail size={18}/><a href={'mailto:' + email}>{email}</a></li>
            </ul>
          </div>
        </div>
        <div className="old-footer-bottom">
          <span>© {new Date().getFullYear()} Soft Flyer. Todos los derechos reservados.</span>
          <div><Link href="/#preguntas">Preguntas frecuentes</Link><Link href="/privacidad">Privacidad</Link></div>
        </div>
      </div>
    </div>
  </footer>
}
