import type { Metadata } from 'next';
import Image from 'next/image';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import { SOCIALS, PHONE_DISPLAY, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto, Ubicación y FAQ · Top Gun Club SRL',
  description:
    'Contactá a Top Gun Club SRL en Cochabamba, Bolivia. Reservá por WhatsApp (+591 69500967), consultá horarios, ubicación y preguntas frecuentes sobre tiro deportivo, airsoft y eventos.',
};

export default function ContactoPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Contacto"
        label="Cochabamba, Bolivia"
        title={<>Hablemos & <span className="hl" style={{ display: 'inline' }}>reservá</span></>}
        sub="Escribinos por WhatsApp para reservar tu cupo, cotizar un evento o resolver cualquier duda. Estamos para ayudarte."
      />

      {/* Contacto + formulario */}
      <section className="section grain">
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            <div className="reveal">
              <span className="eyebrow">Datos de contacto</span>
              <h2 className="section-title" style={{ margin: '14px 0 24px' }}>
                Estamos <em>cerca</em>
              </h2>
              <div className="info-row">
                <div className="ic"><Icon name="whatsapp" /></div>
                <div>
                  <h4>WhatsApp / Teléfono</h4>
                  <a
                    href={waLink('Hola! Quiero más información de Top Gun Club')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="info-row">
                <div className="ic"><Icon name="pin" /></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Cochabamba, Bolivia</p>
                  <a
                    href="https://g.page/r/CRunhge8dwfZEBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '.9rem', color: 'var(--green-bright)', marginTop: 4, display: 'inline-block' }}
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
              <div className="info-row">
                <div className="ic"><Icon name="clock" /></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lunes a Domingo · <span style={{ color: 'var(--faint)' }}>horario editable</span></p>
                </div>
              </div>
              <div className="info-row" style={{ borderBottom: 'none' }}>
                <div className="ic"><Icon name="star" /></div>
                <div>
                  <h4>Seguinos</h4>
                  <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
                    <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '9px 14px' }}>
                      <Icon name="facebook" style={{ width: 18, height: 18 }} /> Facebook
                    </a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '9px 14px' }}>
                      <Icon name="instagram" style={{ width: 18, height: 18 }} /> Instagram
                    </a>
                    <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ padding: '9px 14px' }}>
                      <Icon name="tiktok" style={{ width: 18, height: 18 }} /> TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Asesor autorizado */}
      <section className="section grain" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">Atención personalizada</span>
              <h2 className="section-title" style={{ margin: '14px 0 18px' }}>
                Asesor <em>autorizado</em>
              </h2>
              <p className="lead">
                ¿Dudas sobre equipamiento, cursos o reservas? Hablá directamente con nuestro asesor. Respuesta rápida y asesoría personalizada en Cochabamba.
              </p>
              <div className="info-row" style={{ marginTop: 28 }}>
                <div className="ic"><Icon name="whatsapp" /></div>
                <div>
                  <h4>WhatsApp directo</h4>
                  <a
                    href="https://api.whatsapp.com/send/?phone=59171490456&text=Hola!%20Me%20contacto%20desde%20la%20web%20de%20Top%20Gun%20Club&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +591 71490456
                  </a>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=59171490456&text=Hola!%20Me%20contacto%20desde%20la%20web%20de%20Top%20Gun%20Club&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa btn--lg"
                style={{ marginTop: 28 }}
              >
                <Icon name="whatsapp" /> Escribir al asesor
              </a>
            </div>
            <div className="split__media reveal" data-d="2" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/assets/asesor.png"
                alt="Asesor Autorizado Top Gun Club"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width:860px) 100vw, 45vw"
              />
              <span className="pill" style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(8,8,8,.88)' }}>
                <span className="dot" /> Asesor autorizado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="section--tight" style={{ paddingTop: 'clamp(40px,5vw,72px)' }}>
        <div className="container">
          <div
            className="reveal"
            style={{ borderRadius: 'var(--r)', overflow: 'hidden', border: '1px solid var(--line)', position: 'relative' }}
          >
            <iframe
              title="Ubicación Top Gun Club en Cochabamba"
              src="https://maps.google.com/maps?q=Top+Gun+Club+SRL+Cochabamba+Bolivia&output=embed&hl=es"
              width="100%"
              height={420}
              style={{ border: 0, display: 'block', filter: 'grayscale(.4) contrast(1.05) brightness(.85)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="pill" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(8,8,8,.85)' }}>
              <span className="dot" /> Top Gun Club SRL · Cochabamba, Bolivia
            </span>
            <a
              href="https://g.page/r/CRunhge8dwfZEBA"
              target="_blank"
              rel="noopener noreferrer"
              className="pill"
              style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(8,8,8,.85)', cursor: 'pointer' }}
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section grain"
        style={{ background: 'linear-gradient(180deg,var(--bg),#0d0f0e)', borderTop: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Dudas frecuentes</span>
            <h2 className="section-title">Preguntas <em>frecuentes</em></h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <FinalCta
        title="¿Listo para empezar? Reservá tu cupo hoy"
        text="Un mensaje y empezamos. Te esperamos en Top Gun Club."
        msg="Hola! Quiero reservar mi cupo en Top Gun Club"
      />
    </>
  );
}
