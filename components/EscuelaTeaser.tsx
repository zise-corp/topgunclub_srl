import Image from 'next/image';
import { waLink } from '@/lib/site';
import Icon from './Icon';

const CHECKS = [
  ['Instructores certificados', 'Acompañamiento personalizado en cada etapa.'],
  ['Protocolo de seguridad Ley 400', 'Normas claras, equipo de protección obligatorio.'],
  ['Para todos los niveles', 'Principiantes, intermedios y avanzados.'],
] as const;

export default function EscuelaTeaser() {
  return (
    <section
      className="section section--tight"
      style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)' }}
    >
      <div className="container">
        <div className="split">
          <div className="split__media reveal" style={{ position: 'relative' }}>
            <Image
              src="/assets/piece-escuela.png"
              alt="Polígono de tiro bajo techo de Top Gun Club"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width:860px) 100vw, 50vw"
            />
          </div>
          <div className="reveal" data-d="2">
            <span className="eyebrow">Polígono de tiro Multifuncional</span>
            <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
              Seguridad primero, <em>siempre</em>
            </h2>
            <p className="lead">
              Nuestro enfoque es 100% deportivo y formativo. Cada sesión se realiza cumpliendo la Ley 400,
              con instructores certificados que te guían en el manejo y uso seguro de armas con fines deportivos.
            </p>
            <ul className="checks">
              {CHECKS.map(([b, t]) => (
                <li key={b}>
                  <span className="ck"><Icon name="check" /></span>
                  <span><b>{b}</b> — {t}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <a
                href={waLink('Hola! Quiero obtener más detalles sobre la Escuela de Tiro y el Polígono')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--light"
              >
                <Icon name="whatsapp" /> Obtener más detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}