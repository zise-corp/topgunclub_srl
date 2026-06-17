import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon, { type IconName } from '@/components/Icon';
import Ph from '@/components/Ph';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cursos de Tiro, Airsoft, PCP y Arco · Top Gun Club SRL',
  description:
    'Cursos de tiro deportivo de Top Gun Club: Armas de fuego, Airsoft, PCP y próximamente Arco y Flecha en Cochabamba. Formación segura bajo la Ley 400.',
};

export default function CursosPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Cursos"
        label="Programas de formación"
        title={<>Nuestras <span className="hl" style={{ display: 'inline' }}>disciplinas</span></>}
        sub="Elegí tu camino. Desde tu primera vez en el polígono hasta la técnica de competición, tenemos un programa estructurado y seguro para vos."
      />

      {/* 1. Armas de Fuego */}
      <section id="fuego" className="section grain" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'center' }}>
            <div className="split__media reveal" data-d="1" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r)', overflow: 'hidden' }}>
              <Ph label="Tiro con armas de fuego" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="reveal" data-d="2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="ico" style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--green-deep)', color: 'var(--green-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="target" style={{ width: 22, height: 22 }} />
                </div>
                <span className="eyebrow" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Armas de Fuego</span>
              </div>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Formación completa en manejo, técnica de disparo y seguridad. Nuestro enfoque es 100% deportivo y formativo, cumpliendo estrictamente la Ley 400. Ideal tanto para quienes nunca han tocado un arma como para tiradores que buscan perfeccionar su técnica.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {['Protocolo de seguridad estricto', 'Instructores certificados', 'Equipo de protección auditiva y visual', 'Progresión de novato a experto'].map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink('Hola! Quiero información sobre el curso de Armas de Fuego')} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> Reservar curso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Airsoft Táctico */}
      <section id="airsoft" className="section section--tight" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="split split--rev" style={{ alignItems: 'center' }}>
            <div className="split__media reveal" data-d="1" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r)', overflow: 'hidden' }}>
              <Ph label="Entrenamiento Airsoft" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="reveal" data-d="2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="ico" style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--green-deep)', color: 'var(--green-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="shield" style={{ width: 22, height: 22 }} />
                </div>
                <span className="eyebrow" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Airsoft Táctico</span>
              </div>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Vive la adrenalina del airsoft en un entorno seguro, organizado y con supervisión profesional. Perfecto para trabajo en equipo, estrategia, despedidas, cumpleaños y team building empresarial. Pura diversión con disciplina.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {['Escenarios y dinámicas para grupos', 'Briefing y reglas de seguridad previas', 'Equipamiento y protección disponible', 'Para principiantes y jugadores con experiencia'].map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink('Hola! Quiero información sobre el curso o experiencia de Airsoft')} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> Reservar Airsoft
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tiro con PCP */}
      <section id="pcp" className="section grain" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'center' }}>
            <div className="split__media reveal" data-d="1" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r)', overflow: 'hidden' }}>
              <Ph label="Tiro de precisión PCP" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="reveal" data-d="2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="ico" style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--green-deep)', color: 'var(--green-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="star" style={{ width: 22, height: 22 }} />
                </div>
                <span className="eyebrow" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tiro con PCP</span>
              </div>
              <p className="lead" style={{ marginBottom: '24px' }}>
                El tiro con armas de aire comprimido (PCP) es una disciplina de alta precisión, similar al tiro olímpico. Es silencioso, técnico y excelente para desarrollar concentración, postura y control. Ideal para todas las edades.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {['Enfoque en precisión y técnica', 'Menor ruido y retroceso', 'Ideal para iniciación y competición', 'Supervisión constante de postura'].map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <a href={waLink('Hola! Quiero información sobre el curso de tiro con PCP')} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                <Icon name="whatsapp" /> Reservar curso PCP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Arco y Flecha */}
      <section id="arco" className="section section--tight" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', opacity: 0.85, scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="split split--rev" style={{ alignItems: 'center' }}>
            <div className="split__media reveal" data-d="1" style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r)', overflow: 'hidden', border: '1px dashed var(--line)' }}>
              <span className="pill" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(8,8,8,.85)', zIndex: 2 }}>
                <Icon name="clock" style={{ width: 16, height: 16, marginRight: 6 }} /> Próximamente
              </span>
              <Ph label="Próximamente: Arco y Flecha" style={{ position: 'absolute', inset: 0 }} />
            </div>
            <div className="reveal" data-d="2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div className="ico" style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--green-deep)', color: 'var(--green-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="target" style={{ width: 22, height: 22 }} />
                </div>
                <span className="eyebrow" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Arco y Flecha</span>
              </div>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Una nueva disciplina que se suma a nuestro club. El tiro con arco desarrolla concentración, fuerza, técnica tradicional y control mental. Una experiencia única y diferente para toda la familia.
              </p>
              <ul className="checks" style={{ marginBottom: '32px' }}>
                {['Técnica tradicional y moderna', 'Desarrollo de concentración', 'Actividad apta para toda la familia', 'Instructores especializados'].map((feat, idx) => (
                  <li key={idx}><span className="ck"><Icon name="check" /></span><span>{feat}</span></li>
                ))}
              </ul>
              <span className="btn btn--ghost btn--lg" style={{ cursor: 'not-allowed', opacity: 0.7, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="clock" style={{ width: 20, height: 20 }} /> Avísame cuando inicie
              </span>
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