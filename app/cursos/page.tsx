import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon, { type IconName } from '@/components/Icon';
import ImageCarousel from '@/components/ImageCarousel';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cursos de Tiro, Airsoft, PCP y Arco · Top Gun Club SRL',
  description:
    'Cursos de tiro deportivo de Top Gun Club: Armas de fuego, Airsoft, PCP y próximamente Arco y Flecha en Cochabamba. Formación segura bajo la Ley 400.',
  alternates: { canonical: '/cursos' },
};

type Curso = {
  id: string;
  title: string;
  eyebrow: string;
  icon: IconName;
  desc: string;
  feats: string[];
  ctaMsg: string;
  ctaText: string;
  comingSoon?: boolean;
  images: string[];
};

const CURSOS: Curso[] = [
  {
    id: 'fuego',
    title: 'Formación en armas de fuego',
    eyebrow: 'Armas de Fuego',
    icon: 'target',
    desc: 'Formación completa en manejo, técnica de disparo y seguridad. Nuestro enfoque es 100% deportivo y formativo, cumpliendo estrictamente la Ley 400. Ideal tanto para quienes nunca han tocado un arma como para tiradores que buscan perfeccionar su técnica.',
    feats: ['Protocolo de seguridad estricto', 'Instructores certificados', 'Equipo de protección auditiva y visual', 'Progresión de novato a experto'],
    ctaMsg: 'Hola! Quiero información sobre el curso de Armas de Fuego',
    ctaText: 'Me interesa este curso',
    images: [
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811129/Fuego_uyzbo5.png',
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811124/Fuego2_a95akj.png',
    ],
  },
  {
    id: 'airsoft',
    title: 'Experiencia airsoft',
    eyebrow: 'Airsoft Táctico',
    icon: 'shield',
    desc: 'Deporte de estrategia y simulación militar en el que los participantes utilizan réplicas exactas de armas de fuego para enfrentarse en escenarios tácticos. Vive la adrenalina del airsoft en un entorno seguro, organizado y con supervisión profesional. Perfecto para trabajo en equipo, estrategia, despedidas, cumpleaños y team building empresarial. Pura diversión con disciplina.',
    feats: ['Escenarios y dinámicas para grupos', 'Briefing y reglas de seguridad previas', 'Equipamiento y protección disponible', 'Para principiantes y jugadores con experiencia'],
    ctaMsg: 'Hola! Quiero información sobre el curso o experiencia de Airsoft',
    ctaText: 'Me interesa este curso',
    images: [
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811126/Airsoft_fuffew.png',
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811126/Airsoft2_l5itfo.png',
    ],
  },
  {
    id: 'pcp',
    title: 'Precisión con aire comprimido',
    eyebrow: 'Tiro con PCP',
    icon: 'star',
    desc: 'El tiro con armas de aire comprimido (PCP) es una disciplina de alta precisión, similar al tiro olímpico. Es silencioso, técnico y excelente para desarrollar concentración, postura y control. Ideal para todas las edades.',
    feats: ['Enfoque en precisión y técnica', 'Menor ruido y retroceso', 'Ideal para iniciación y competición', 'Supervisión constante de postura'],
    ctaMsg: 'Hola! Quiero información sobre el curso de tiro con PCP',
    ctaText: 'Me interesa este curso',
    images: [
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811127/PCP_mv46rn.png',
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811128/PCP2_zt6iey.png',
    ],
  },
  {
    id: 'arco',
    title: 'Próximamente arco y flecha',
    eyebrow: 'Arco y Flecha',
    icon: 'target',
    desc: 'Una nueva disciplina que se suma a nuestro club. El tiro con arco desarrolla concentración, fuerza, técnica tradicional y control mental. Una experiencia única y diferente para toda la familia.',
    feats: ['Técnica tradicional y moderna', 'Desarrollo de concentración', 'Actividad apta para toda la familia', 'Instructores especializados'],
    ctaMsg: 'Hola! Quiero saber cuándo inician los cursos de Arco y Flecha',
    ctaText: 'PROXIMAMENTE',
    comingSoon: true,
    images: [
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811127/Arco1_dkyqge.png',
      'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781811125/Arco2_pwl2u0.png',
    ],
  },
];

export default function CursosPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Cursos"
        label="Programas de formación"
        title={<>Nuestras <span className="hl" style={{ display: 'inline' }}>disciplinas</span></>}
        sub="Elegí tu camino. Desde tu primera vez en el polígono hasta la técnica de competición, tenemos un programa estructurado y seguro para ti."
      />

      {/* 1. Armas de Fuego */}
      <section id="fuego" className="section grain" style={{}}>
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={CURSOS[0].images} />
            </div>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">{CURSOS[0].eyebrow}</span>
              <h2 className="section-title" style={{ margin: '12px 0 20px' }}>
                {CURSOS[0].title.split(' ').slice(0, -2).join(' ')} <em>{CURSOS[0].title.split(' ').slice(-2).join(' ')}</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>{CURSOS[0].desc}</p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {CURSOS[0].feats.map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink(CURSOS[0].ctaMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> {CURSOS[0].ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Airsoft Táctico */}
      <section id="airsoft" className="section section--tight" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="split split--rev" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">{CURSOS[1].eyebrow}</span>
              <h2 className="section-title" style={{ margin: '12px 0 20px' }}>
                {CURSOS[1].title.split(' ').slice(0, -1).join(' ')} <em>{CURSOS[1].title.split(' ').slice(-1).join(' ')}</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>{CURSOS[1].desc}</p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {CURSOS[1].feats.map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink(CURSOS[1].ctaMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> {CURSOS[1].ctaText}
              </a>
            </div>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={CURSOS[1].images} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tiro con PCP */}
      <section id="pcp" className="section grain" style={{}}>
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={CURSOS[2].images} />
            </div>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">{CURSOS[2].eyebrow}</span>
              <h2 className="section-title" style={{ margin: '12px 0 20px' }}>
                {CURSOS[2].title.split(' ').slice(0, -2).join(' ')} <em>{CURSOS[2].title.split(' ').slice(-2).join(' ')}</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>{CURSOS[2].desc}</p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {CURSOS[2].feats.map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink(CURSOS[2].ctaMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> {CURSOS[2].ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Arco y Flecha */}
      <section id="arco" className="section section--tight" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', opacity: 0.85 }}>
        <div className="container">
          <div className="split split--rev" style={{ alignItems: 'flex-start', gap: 'clamp(32px,5vw,72px)' }}>
            <div className="reveal" data-d="2" style={{ paddingTop: '8px' }}>
              <span className="eyebrow">{CURSOS[3].eyebrow}</span>
              <h2 className="section-title" style={{ margin: '12px 0 20px' }}>
                {CURSOS[3].title.split(' ').slice(0, -2).join(' ')} <em>{CURSOS[3].title.split(' ').slice(-2).join(' ')}</em>
              </h2>
              <p className="lead" style={{ marginBottom: '24px' }}>{CURSOS[3].desc}</p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {CURSOS[3].feats.map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <span className="btn btn--ghost btn--lg" style={{ cursor: 'not-allowed', opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="clock" style={{ width: 20, height: 20 }} /> {CURSOS[3].ctaText}
              </span>
            </div>
            <div className="split__media split__media--free reveal" data-d="1">
              <ImageCarousel images={CURSOS[3].images} comingSoon />
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="¿No sabés cuál elegir?"
        text="Escribinos por WhatsApp. Te asesoramos según tu experiencia previa y lo que estás buscando."
        msg="Hola! Quiero que me asesoren para elegir el mejor curso en Top Gun Club"
      />
    </>
  );
}