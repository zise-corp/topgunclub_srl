'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import Icon from './Icon';

const BG_IMAGES = [
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255265/Instalaciones_hceftx.png',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254732/Fuego_qwulvk.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255255/Airsoft_ssquzt.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255252/Instalaciones2_ccclvu.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254728/PCP3_smxfnn.jpg',
  'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255310/Torneo_jzqte0.png',
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % BG_IMAGES.length);
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <header className="hero">
      {/* Carrusel de fondo */}
      <div className="hero__carousel" aria-hidden="true">
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className="hero__slide"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Capas de oscurecimiento + desvanecido inferior */}
      <div className="hero__overlay" />
      <div className="hero__fade-bottom" />
      <div className="hero__vig" />

      <div className="container hero__content">
        <span className="pill">
          <span className="dot" />Cochabamba, Bolivia
        </span>
        <h1 className="hero__title">
          <span>Polígono de tiro</span>
          <span className="hl">multifuncional</span>
        </h1>
        <p className="hero__sub">
          De novato a experto. Entrenamiento seguro, disciplina y experiencia real cumpliendo la{' '}
          <strong style={{ color: '#fff' }}>Ley&nbsp;400</strong> — uso y manejo seguro de armas con fines deportivos.
        </p>
        <div className="hero__cta">
          <a
            href={waLink('Hola! Quiero reservar una sesión / clase en Top Gun Club')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa btn--lg"
          >
            <Icon name="whatsapp" /> Reservar por WhatsApp
          </a>
          <Link href="/cursos" className="btn btn--ghost btn--lg">
            Ver cursos <Icon name="arrow" />
          </Link>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <span className="mouse" />
      </div>
    </header>
  );
}
