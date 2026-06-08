import type { Metadata } from 'next';
import Link from 'next/link';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon from '@/components/Icon';
import Ph from '@/components/Ph';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cursos, Planes y Airsoft · Top Gun Club SRL',
  description:
    'Cursos de tiro deportivo de Top Gun Club: sesión de práctica, curso de 1 semana (de novato a experto), plan mensual y entrenamiento de airsoft en Cochabamba. Reservá por WhatsApp.',
};

const PLANES = [
  {
    name: 'Sesión de tiro',
    dur: 'Práctica individual',
    feat: false,
    msg: 'Hola! Quiero reservar una sesión de tiro / práctica libre',
    feats: ['Sesión supervisada en el polígono', 'Equipo de protección incluido', 'Ideal para mantener tu nivel', 'Disponible para tiradores con experiencia'],
    cta: 'Reservar sesión',
  },
  {
    name: 'Curso de 1 semana',
    dur: 'De novato a experto',
    feat: true,
    msg: 'Hola! Quiero info sobre el Curso de 1 semana (de novato a experto)',
    feats: ['Programa completo de iniciación', 'Teoría + práctica supervisada', 'Fundamentos de seguridad y Ley 400', 'Postura, puntería y control del arma', 'Evaluación final y seguimiento', 'Equipo de protección incluido'],
    cta: 'Inscribirme ahora',
  },
  {
    name: 'Plan mensual',
    dur: 'Entrenamiento continuo',
    feat: false,
    msg: 'Hola! Quiero info sobre el plan mensual de entrenamiento',
    feats: ['Varias sesiones al mes', 'Seguimiento de tu progreso', 'Acceso a práctica libre', 'Tarifa preferencial por volumen'],
    cta: 'Quiero el plan',
  },
] as const;

const CMP = [
  ['Modalidad', 'Iniciación', '1 Semana', 'Intermedio', 'Avanzado'],
  ['Nivel requerido', 'Ninguno', 'Ninguno', 'Básico', 'Intermedio'],
  ['Teoría de seguridad', 'Sí', 'Sí', 'Repaso', 'Repaso'],
  ['Práctica supervisada', 'Sí', 'Sí', 'Sí', 'Sí'],
  ['Técnica de competición', '—', 'Intro', 'Sí', 'Avanzada'],
  ['Evaluación final', '—', 'Sí', 'Sí', 'Sí'],
] as const;

const AIRSOFT_PH = ['Campo / escenario', 'Equipo táctico', 'Sesión de grupo', 'Briefing del equipo'] as const;
const AIRSOFT_CHECKS = [
  'Equipamiento y protección disponible',
  'Briefing y reglas de seguridad antes de jugar',
  'Escenarios y dinámicas para grupos',
  'Para principiantes y jugadores con experiencia',
] as const;

export default function CursosPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Cursos"
        label="Programas de formación"
        title={<>Cursos & <span className="hl" style={{ display: 'inline' }}>planes</span></>}
        sub="Programas estructurados para cada objetivo, desde tu primera vez en el polígono hasta la técnica de competición. Elegí tu camino y reservá por WhatsApp."
      />

      {/* Pricing */}
      <section className="section grain">
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Elegí tu programa</span>
            <h2 className="section-title">Planes de <em>entrenamiento</em></h2>
            <p className="lead mx-auto">Los precios se confirman por WhatsApp según disponibilidad y temporada.</p>
          </div>
          <div className="grid cols-3">
            {PLANES.map((p, i) => (
              <div className={'card price reveal' + (p.feat ? ' feat' : '')} data-d={i + 1} key={p.name}>
                {p.feat && <span className="price__ribbon">Más popular</span>}
                <div className="price__name">{p.name}</div>
                <div className="price__dur">{p.dur}</div>
                <div className="price__cost">
                  <span className="amt">Bs —</span>
                  <span className="edit">precio editable</span>
                </div>
                <ul>
                  {p.feats.map(f => (
                    <li key={f}><Icon name="check" /><span>{f}</span></li>
                  ))}
                </ul>
                <a
                  href={waLink(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'btn btn--block ' + (p.feat ? 'btn--wa' : 'btn--ghost')}
                >
                  <Icon name="whatsapp" /> {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        className="section section--tight"
        style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="shead reveal">
            <span className="eyebrow">Comparativa</span>
            <h2 className="section-title">Niveles & <em>modalidades</em></h2>
          </div>
          <div className="cmp-wrap reveal" data-d="2">
            <table className="cmp">
              <thead>
                <tr>{CMP[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {CMP.slice(1).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((c, ci) => (
                      <td key={ci} className={c === 'Sí' ? 'yes' : ''}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Airsoft */}
      <section id="airsoft" className="section grain" style={{ scrollMarginTop: '90px' }}>
        <div className="container">
          <div className="split" style={{ marginBottom: '46px' }}>
            <div className="reveal">
              <span className="eyebrow">Experiencia táctica</span>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
                Entrenamiento <em>Airsoft</em>
              </h2>
              <p className="lead">
                Vive la adrenalina del airsoft en un entorno seguro y organizado. Ideal para grupos de amigos,
                despedidas, cumpleaños y team building empresarial. Trabajo en equipo, estrategia y pura diversión
                con disciplina.
              </p>
              <ul className="checks">
                {AIRSOFT_CHECKS.map(t => (
                  <li key={t}>
                    <span className="ck"><Icon name="check" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a
                  href={waLink('Hola! Estoy interesad@ en los cursos / experiencias de entrenamiento airsoft')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg"
                >
                  <Icon name="whatsapp" /> Reservar airsoft
                </a>
                <Link href="/eventos" className="btn btn--ghost btn--lg">
                  Ver eventos <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="split__media reveal" data-d="2">
              <Ph label="Airsoft · acción táctica" />
            </div>
          </div>
          <div className="grid cols-4">
            {AIRSOFT_PH.map((ph, i) => (
              <div
                className="card reveal"
                data-d={(i % 4) + 1}
                key={i}
                style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative' }}
              >
                <Ph label={ph} style={{ position: 'absolute', inset: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Reservá tu cupo o tu experiencia"
        text="Cursos de tiro, sesiones de práctica o airsoft para tu grupo. Escribinos y armamos tu plan."
        msg="Hola! Quiero reservar un curso / experiencia en Top Gun Club"
      />
    </>
  );
}
