import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS, SOCIALS, PHONE_DISPLAY, waLink } from '@/lib/site';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer grain">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <Image src="/assets/logo-white.png" alt="Top Gun Club SRL" height={54} width={216} style={{ width: 'auto', height: '54px', marginBottom: '18px' }} />
            <p>Club y escuela de tiro deportivo en Cochabamba, Bolivia. Polígono bajo techo, eventos, airsoft y servicio de comida. El lugar perfecto para cualquier ocasión.</p>
            <div className="footer__social">
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Icon name="tiktok" /></a>
            </div>
          </div>

          <div>
            <h4>Navegación</h4>
            <ul className="footer__links">
              {NAV_ITEMS.slice(0, 6).map(it => (
                <li key={it.label}><Link href={it.href}>{it.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul className="footer__links">
              <li><Link href="/escuela">Escuela de Tiro</Link></li>
              <li><Link href="/cursos">Cursos intensivos</Link></li>
              <li><Link href="/cursos#airsoft">Airsoft</Link></li>
              <li><Link href="/eventos">Eventos</Link></li>
              <li><Link href="/eventos#comida">Servicio de comida</Link></li>
              <li><Link href="/escuela#poligono">Polígono</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul className="footer__links">
              <li>
                <a href={waLink('Hola! Quiero más información de Top Gun Club')} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" style={{ width: 15, height: 15, verticalAlign: '-2px', marginRight: 6 }} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <Link href="/contacto">
                  <Icon name="pin" style={{ width: 15, height: 15, verticalAlign: '-2px', marginRight: 6 }} />
                  Cochabamba, Bolivia
                </Link>
              </li>
              <li style={{ color: 'var(--faint)', fontSize: '.92rem', marginTop: 8 }}>Lun – Dom · Horarios en contacto</li>
            </ul>
            <Link href="/contacto" className="btn btn--ghost" style={{ marginTop: 16 }}>
              Ver contacto <Icon name="arrow" />
            </Link>
          </div>

        </div>

        <div className="footer__bottom">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Top Gun Club SRL · TG Club SRL. Todos los derechos reservados.
          </p>
          <span className="ley400">
            <Icon name="shield" style={{ width: 16, height: 16 }} />
            {' '}Actividad realizada cumpliendo la <b>Ley&nbsp;400</b> — uso y manejo seguro de armas con fines deportivos.
          </span>
        </div>
      </div>
    </footer>
  );
}
