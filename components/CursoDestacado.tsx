import Link from 'next/link';
import Image from 'next/image';
import { waLink } from '@/lib/site';
import Icon from './Icon';

const ITEMS = [
  'Fundamentos de seguridad y normativa Ley 400',
  'Postura, agarre, puntería y respiración',
  'Práctica supervisada en polígono',
  'Equipo de protección incluido',
] as const;

export default function CursoDestacado() {
  return (
    <section className="section grain">
      <div className="container">
        <div className="split split--rev">
          <div className="split__media reveal" data-d="2" style={{ position: 'relative' }}>
            <Image
              src="/assets/piece-experto.png"
              alt="Curso de tiro: de novato a experto"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width:860px) 100vw, 50vw"
            />
          </div>
          <div className="reveal">
            <span className="pill" style={{ marginBottom: 18 }}>
              <span className="dot" /> Curso estrella
            </span>
            <h2 className="section-title">
              De novato <em>a experto</em>
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              En solo <strong style={{ color: '#fff' }}>una semana</strong> pasás de no haber tocado un arma a
              manejarla con seguridad, técnica y confianza. Teoría, práctica supervisada y evaluación final.
            </p>
            <ul className="checks">
              {ITEMS.map(t => (
                <li key={t}>
                  <span className="ck"><Icon name="check" /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <a
                href={waLink('Hola! Quiero info sobre el Curso de 1 semana (de novato a experto)')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--lg"
              >
                <Icon name="whatsapp" /> Inscribirme
              </a>
              <Link href="/cursos" className="btn btn--ghost btn--lg">
                Ver todos los cursos <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
