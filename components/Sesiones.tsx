'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

const SESSIONS_IMAGES = [
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781746764/Sesiones_kidi79.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1781746765/Torneo.jpg_woljmx.png',
];

const SESSIONS_CONTENT = {
  title: 'Sesiones de Tiro',
  description: 'Entra a la línea de tiro y siente la adrenalina en su estado más puro. Sesiones guiadas por profesionales. Una experiencia intensa, segura e inolvidable donde podrás poner a prueba tu puntería y habilidad bajo la supervisión de instructores certificados.',
  features: [
    'Instructores certificados',
    'Armas disponibles',
    'Equipamiento de seguridad incluido',
    'Todos los niveles bienvenidos',
    'Ambiente controlado y seguro',
  ],
};

export default function Sesiones() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % SESSIONS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section grain" id="sesiones">
      <div className="container">
        <div className="shead center reveal">
          <span className="eyebrow eyebrow--center">Experiencias únicas</span>
          <h2 className="section-title">
            Sesiones de <em>Tiro</em>
          </h2>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Viví la emoción del tiro deportivo con nuestras sesiones guiadas por profesionales 
            en un ambiente seguro y controlado.
          </p>
        </div>
        
        <div className="split reveal" data-d="2" style={{ alignItems: 'center', gap: '48px' }}>
          {/* Carrusel de imágenes */}
          <div
            className="split__media"
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              borderRadius: 'var(--r)',
              overflow: 'hidden',
            }}
          >
            {SESSIONS_IMAGES.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Sesión de tiro ${idx + 1}`}
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'top center', // ← CAMBIO AQUÍ: de 'center' a 'top center'
                  opacity: idx === currentImg ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out'
                }}
                sizes="(max-width: 860px) 100vw, 50vw"
                priority={idx === 0}
              />
            ))}
          </div>

          {/* Contenido de Sesiones */}
          <div style={{ position: 'relative' }}>
            <h3 style={{
              fontFamily: 'var(--ff-display)',
              textTransform: 'uppercase',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              lineHeight: 1,
              marginBottom: '16px',
              color: 'var(--white)',
            }}>
              {SESSIONS_CONTENT.title}
            </h3>
            
            <p style={{
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: '24px',
              fontSize: '1rem',
            }}>
              {SESSIONS_CONTENT.description}
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              display: 'grid',
              gap: '12px',
            }}>
              {SESSIONS_CONTENT.features.map((feature, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--metal)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                }}>
                  <Icon name="check" style={{ width: 18, height: 18, color: 'var(--green-bright)', flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/59169500967?text=Hola!%20Quiero%20reservar%20una%20sesi%C3%B3n%20de%20tiro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--wa btn--lg"
            >
              <Icon name="whatsapp" /> Reservar sesión
            </a>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="tst__dots" style={{ marginTop: '30px' }}>
          {SESSIONS_IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={idx === currentImg ? 'on' : ''}
              aria-label={`Imagen ${idx + 1}`}
              onClick={() => setCurrentImg(idx)}
              style={{
                width: idx === currentImg ? '28px' : '10px',
                height: '10px',
                borderRadius: idx === currentImg ? '5px' : '50%',
                background: idx === currentImg ? 'var(--green-bright)' : 'var(--line-2)',
                transition: '.25s',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}