import type { Metadata } from 'next';
import Image from 'next/image';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon from '@/components/Icon';
import ImageCarousel from '@/components/ImageCarousel';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Eventos · Cumpleaños y Torneos · Top Gun Club SRL',
  description:
    'Eventos en Top Gun Club Cochabamba: cumpleaños infantiles con actividades seguras y supervisadas, y torneos mensuales exclusivos para alumnos formados.',
};

const CUMPLE_INCLUYE = [
  'Actividades adaptadas para niños (PCP, airsoft suave, arco)',
  'Instructores certificados y supervisión permanente',
  'Equipo de protección incluido para todos',
  'Espacio amplio para celebración y comida',
  'Opción de catering y servicio de comida',
  'Ambiente seguro y controlado',
] as const;

const TORNEO_FEATS = [
  'Exclusivo para alumnos que completaron un curso',
  'Se realiza una vez al mes (consulta la fecha)',
  'Disciplinas: armas de fuego, airsoft y PCP',
  'Premios y reconocimiento para los mejores',
  'Ranking mensual de tiradores del club',
  'Ambiente competitivo pero seguro y deportivo',
] as const;

const CUMPLE_IMGS = [
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153472/Cumplea%C3%B1os_qjiaiy.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153475/Cumplea%C3%B1os3_lc3idf.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153475/Cumplea%C3%B1os4_pmwkl2.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153475/Cumplea%C3%B1os2_njp5iv.png',
];

const TORNEO_IMGS = [
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153679/Torneo_z8nmls.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153677/Torneo1_t4aegf.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153678/Torneo2_fxkath.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153675/Torneo3_n3vlhy.png',
];

const AMBIENTE_IMGS = [
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153807/Ambiente3_hdrlb0.png', label: 'Celebración de cumpleaños' },
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153807/Ambiente_avmt4e.png', label: 'Premiación torneo' },
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153808/Ambiente2_jmiqiq.png', label: 'Zona de celebración' },
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153804/Ambiente5_ppbjut.png', label: 'Competencia en pista' },
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153804/Ambiente4_e54g6l.png', label: 'Grupo de niños' },
  { src: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782153803/Ambiente6_pi0mqe.png', label: 'Ambiente del club' },
];

export default function EventosPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Eventos"
        label="Experiencias únicas"
        title={<>Eventos & <span className="hl" style={{ display: 'inline' }}>torneos</span></>}
        sub="Desde cumpleaños infantiles inolvidables hasta torneos mensuales para tiradores formados. Dos formas de vivir Top Gun Club al máximo."
      />

      {/* 1. Cumpleaños Infantiles */}
      <section id="cumpleanos" className="section grain">
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={CUMPLE_IMGS} />
            </div>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">Cumpleaños Infantiles</span>
              <h2 className="section-title" style={{ margin: '12px 0 16px' }}>
                Un cumple <em>inolvidable</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Celebra el cumpleaños de tus hijos en un lugar diferente, seguro y lleno de adrenalina. 
                Actividades adaptadas para niños, supervisadas en todo momento por instructores certificados. 
                Diversión, disciplina y recuerdos que durarán para siempre.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {CUMPLE_INCLUYE.map((t, idx) => (
                  <li key={idx}>
                    <span className="ck"><Icon name="check" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink('Hola! Me gustaria tener mas información sobre los cumpleaños infantiles en Top Gun Club')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--lg"
              >
                <Icon name="whatsapp" /> Mas Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Torneos Mensuales */}
      <section 
        id="torneos" 
        className="section section--tight" 
        style={{ 
          background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', 
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container">
          <div className="split split--rev" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={TORNEO_IMGS} />
            </div>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">Torneos Mensuales</span>
              <h2 className="section-title" style={{ margin: '12px 0 16px' }}>
                Compite con los <em>mejores</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Una vez al mes abrimos el polígono para nuestros torneos oficiales. Una oportunidad 
                para poner a prueba tu nivel, conocer a otros tiradores de Cochabamba y formar parte 
                de la comunidad Top Gun Club. Exclusivo para quienes ya completaron un curso con nosotros.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {TORNEO_FEATS.map((t, idx) => (
                  <li key={idx}>
                    <span className="ck"><Icon name="check" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink('Hola! Quiero información sobre los torneos mensuales de Top Gun Club')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--lg"
              >
                <Icon name="whatsapp" /> Quiero ser parte de los torneos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galería del ambiente */}
      <section className="section grain">
        <div className="container">
          <div className="shead reveal">
            <span className="eyebrow">El ambiente</span>
            <h2 className="section-title">Así se <em>vive</em> el club</h2>
          </div>
          <div className="grid cols-3 reveal" data-d="2">
            {AMBIENTE_IMGS.map((img, i) => (
              <div className="card" key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={img.src}
                  alt={img.label || 'Imagen del ambiente del club'}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="¿Listo para vivir la experiencia?"
        text="Ya sea un cumpleaños inolvidable o tu próximo torneo, te esperamos en Top Gun Club."
        msg="Hola! Quiero info sobre los eventos de Top Gun Club"
      />
    </>
  );
}