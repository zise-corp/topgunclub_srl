import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon, { type IconName } from '@/components/Icon';
import Ph from '@/components/Ph';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Eventos, Alquiler del Espacio y Comida · Top Gun Club SRL',
  description:
    'Alquilá el espacio de Top Gun Club para eventos en Cochabamba: empresas, cumpleaños, despedidas y team building. Ambientes amplios, tiro deportivo, airsoft y servicio de comida.',
};

const TIPOS: { ico: IconName; h: string; p: string }[] = [
  { ico: 'users', h: 'Empresas', p: 'Team building, capacitaciones y celebraciones de equipo con una experiencia diferente.' },
  { ico: 'star', h: 'Cumpleaños', p: 'Una celebración inolvidable: tiro deportivo o airsoft, ambiente amplio y comida.' },
  { ico: 'calendar', h: 'Despedidas', p: 'Despedidas de soltero/a y reuniones de grupo llenas de adrenalina y diversión.' },
  { ico: 'target', h: 'Grupos & amigos', p: 'Juntá a tu grupo para una jornada de airsoft o práctica de tiro deportivo.' },
];

const INCLUYE = [
  'Ambientes amplios y versátiles',
  'Servicio de comida y catering',
  'Experiencia de tiro o airsoft a medida',
  'Personal y supervisión de seguridad',
  'Espacio para reuniones y celebración',
  'Cotización personalizada según tu evento',
] as const;

const AMBIENTE_PH = ['Salón principal', 'Zona de comida', 'Área de eventos', 'Tiro en grupo', 'Celebraciones', 'Equipo y staff'] as const;

export default function EventosPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Eventos"
        label="Alquiler del espacio"
        title={<>Eventos & <span className="hl" style={{ display: 'inline' }}>experiencias</span></>}
        sub="El lugar perfecto para cualquier evento. Ambientes amplios, comida, tiro deportivo y más — todo en un solo lugar, en Cochabamba."
      />

      {/* Intro split */}
      <section className="section grain">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">El espacio</span>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
                Ambientes <em>amplios</em>, momentos grandes
              </h2>
              <p className="lead">
                Nuestro club no es solo un polígono: es un espacio pensado para reunir gente. Ideal para empresas,
                cumpleaños, despedidas y team building, combinando la emoción del tiro deportivo o el airsoft con
                un buen ambiente y servicio de comida.
              </p>
              <ul className="checks">
                {INCLUYE.map(t => (
                  <li key={t}>
                    <span className="ck"><Icon name="check" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a
                  href={waLink('Hola! Quiero cotizar el alquiler del espacio para un evento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa btn--lg"
                >
                  <Icon name="whatsapp" /> Cotizar mi evento
                </a>
              </div>
            </div>
            <div className="split__media reveal" data-d="2">
              <Ph label="Ambiente / salón de eventos" />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de evento */}
      <section
        className="section section--tight"
        style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Para toda ocasión</span>
            <h2 className="section-title">Tipos de <em>evento</em></h2>
          </div>
          <div className="grid cols-4">
            {TIPOS.map((t, i) => (
              <div
                className="card level reveal"
                data-d={(i % 4) + 1}
                key={t.h}
                style={{ padding: '28px 24px' }}
              >
                <div
                  className="ico"
                  style={{ width: 46, height: 46, borderRadius: 11, background: 'var(--green-deep)', color: 'var(--green-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}
                >
                  <Icon name={t.ico} style={{ width: 24, height: 24 }} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería ambiente */}
      <section className="section grain">
        <div className="container">
          <div className="shead reveal">
            <span className="eyebrow">El ambiente</span>
            <h2 className="section-title">Así se <em>vive</em> el club</h2>
          </div>
          <div className="grid cols-3 reveal" data-d="2">
            {AMBIENTE_PH.map((l, i) => (
              <div className="card" key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <Ph label={l} style={{ position: 'absolute', inset: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comida */}
      <section
        id="comida"
        className="section section--tight"
        style={{ background: 'linear-gradient(180deg,var(--bg),#0d0f0e)', borderTop: '1px solid var(--line)', scrollMarginTop: '90px' }}
      >
        <div className="container">
          <div className="split split--rev">
            <div className="split__media reveal" data-d="2">
              <Ph label="Servicio de comida / cocina" />
            </div>
            <div className="reveal">
              <span className="eyebrow">Servicio de comida</span>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
                Buena comida, <em>mejor</em> experiencia
              </h2>
              <p className="lead">
                Acompañá tu sesión, jornada o evento con nuestro servicio de comida. Desde un snack entre
                prácticas hasta el catering completo de tu celebración, lo coordinamos para que solo te
                preocupes por disfrutar.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a
                  href={waLink('Hola! Quiero info sobre el servicio de comida para mi evento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--wa"
                >
                  <Icon name="whatsapp" /> Consultar menú
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Cotizá tu evento sin compromiso"
        text="Contanos qué tenés en mente y armamos una propuesta a tu medida: espacio, experiencia y comida."
        msg="Hola! Quiero cotizar un evento en Top Gun Club (fecha, cantidad de personas y tipo de evento)"
      />
    </>
  );
}
