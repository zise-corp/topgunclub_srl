import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon, { type IconName } from '@/components/Icon';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Escuela de Tiro Deportivo · Top Gun Club SRL Cochabamba',
  description:
    'Escuela de tiro deportivo de Top Gun Club: formación segura por niveles (principiante, intermedio, avanzado), instructores certificados y polígono bajo techo. Cumplimos la Ley 400.',
};

const NIVELES = [
  { tag: 'Para empezar', n: '01', h: 'Principiante', p: 'Nunca tocaste un arma. Aprendés seguridad, normativa Ley 400, postura, agarre y tus primeros disparos supervisados.' },
  { tag: 'Siguiente paso', n: '02', h: 'Intermedio', p: 'Ya conocés lo básico. Perfeccionás puntería, control de respiración, cadencia y precisión a distintas distancias.' },
  { tag: 'Alto rendimiento', n: '03', h: 'Avanzado', p: 'Técnica de competición: tiro de precisión, transiciones, tiempos y disciplinas deportivas formales.' },
] as const;

const APRENDE = [
  'Normas de seguridad y marco legal (Ley 400)',
  'Postura, empuñadura y alineación de miras',
  'Control de respiración y del gatillo',
  'Puntería y precisión a distintas distancias',
  'Carga, descarga y manipulación segura',
  'Disciplina deportiva y ética del tirador',
] as const;

const SPECS: { ico: IconName; h: string; p: string }[] = [
  { ico: 'target', h: 'Distancias variadas', p: 'Líneas de tiro a distintas distancias para práctica progresiva, desde iniciación hasta precisión.' },
  { ico: 'shield', h: 'Equipo de protección', p: 'Protección auditiva y visual obligatoria, provista en el polígono. Tu seguridad es la prioridad.' },
  { ico: 'users', h: 'Supervisión permanente', p: 'Instructores y personal de rango supervisan cada sesión y hacen cumplir el protocolo.' },
  { ico: 'calendar', h: 'Práctica libre y guiada', p: 'Sesiones libres para tiradores con experiencia y sesiones guiadas para quienes recién empiezan.' },
];

const NORMAS = [
  'Trata toda arma como si estuviera cargada, siempre.',
  'Nunca apuntes a algo que no estés dispuesto a destruir.',
  'Mantén el dedo fuera del gatillo hasta estar listo para disparar.',
  'Asegúrate de tu blanco y de lo que hay detrás de él.',
  'Uso obligatorio de protección auditiva y visual en el rango.',
  'Sigue siempre las indicaciones del instructor de línea.',
  'Prohibido manipular armas fuera de la línea de tiro.',
  'Cero alcohol o sustancias: tolerancia absoluta de seguridad.',
] as const;

export default function EscuelaPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Escuela de Tiro"
        label="Polígono bajo techo"
        title={<><span className="hl" style={{ display: 'inline' }}>Escuela</span> de tiro deportivo</>}
        sub="Formación segura, progresiva y 100% deportiva. De cero a tirador competente, con instructores certificados y bajo el cumplimiento de la Ley 400."
      />

      {/* Enfoque */}
      <section className="section grain">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">Nuestro enfoque</span>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
                Deporte, disciplina y <em>seguridad</em>
              </h2>
              <p className="lead">
                En Top Gun Club el tiro es un deporte. Enseñamos manejo y uso seguro de armas con fines
                exclusivamente deportivos, cumpliendo en todo momento la Ley 400. Nuestros instructores
                certificados te acompañan paso a paso, sin importar tu nivel de partida.
              </p>
              <p style={{ color: 'var(--muted)', marginTop: 14 }}>
                Cada clase combina teoría, práctica supervisada y retroalimentación personalizada. El objetivo
                no es solo que dispares: es que entiendas, respetes y disfrutes el deporte con responsabilidad.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a
                  href={waLink('Hola! Quiero info sobre la escuela de tiro deportivo')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa"
                >
                  <Icon name="whatsapp" /> Quiero empezar
                </a>
                <Link href="/cursos" className="btn btn--ghost">
                  Ver cursos y precios <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="split__media reveal" data-d="2" style={{ position: 'relative' }}>
              <Image
                src="/assets/piece-experto.png"
                alt="Tirador entrenando en la escuela de tiro deportivo"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width:860px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qué aprendés */}
      <section
        className="section section--tight"
        style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">El programa</span>
              <h2 className="section-title" style={{ margin: '14px 0 8px' }}>
                Lo que vas a <em>aprender</em>
              </h2>
            </div>
            <ul className="checks reveal" data-d="2" style={{ marginTop: 0 }}>
              {APRENDE.map(t => (
                <li key={t}>
                  <span className="ck"><Icon name="check" /></span>
                  <span style={{ color: '#fff' }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="section grain">
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">A quién va dirigido</span>
            <h2 className="section-title">Un camino para <em>cada</em> tirador</h2>
          </div>
          <div className="grid cols-3">
            {NIVELES.map((lv, i) => (
              <div className="card level reveal" data-d={i + 1} key={lv.h}>
                <div className="num">{lv.n}</div>
                <span className="level__tag">{lv.tag}</span>
                <h3>{lv.h}</h3>
                <p>{lv.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Polígono */}
      <section
        id="poligono"
        className="section"
        style={{ background: 'linear-gradient(180deg,var(--bg),#0d0f0e)', borderTop: '1px solid var(--line)', scrollMarginTop: '90px' }}
      >
        <div className="container">
          <div className="shead reveal">
            <span className="eyebrow">El polígono</span>
            <h2 className="section-title">Instalaciones <em>bajo</em> techo</h2>
            <p className="lead">
              Un polígono cerrado, controlado y seguro, pensado para la práctica deportiva durante todo el año,
              sin importar el clima.
            </p>
          </div>
          <div className="specs reveal" data-d="2">
            {SPECS.map(s => (
              <div className="spec" key={s.h}>
                <div className="ico"><Icon name={s.ico} /></div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normas de seguridad */}
      <section className="section section--tight grain">
        <div className="container">
          <div className="safety reveal">
            <div className="safety__head">
              <div className="sh"><Icon name="shield" /></div>
              <div>
                <span>Innegociable</span>
                <h3>Normas de seguridad</h3>
              </div>
            </div>
            <ol className="safety__list">
              {NORMAS.map((r, i) => (
                <li key={i}>
                  <span className="n">{i + 1}</span>
                  <span>{r}</span>
                </li>
              ))}
            </ol>
            <p style={{ color: 'var(--faint)', marginTop: 22, fontSize: '.92rem' }}>
              Toda actividad se realiza cumpliendo la Ley 400 — uso y manejo seguro de armas con fines deportivos.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        title="Empezá tu formación hoy"
        text="Reservá tu primera clase o sesión de práctica. Te asesoramos según tu nivel y objetivos."
        msg="Hola! Quiero reservar una clase en la escuela de tiro deportivo de Top Gun Club"
      />
    </>
  );
}
