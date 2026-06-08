'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { waLink } from '@/lib/site';
import Icon from './Icon';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current && y < window.innerHeight) {
          bgRef.current.style.transform = `translateY(${y * 0.32}px) scale(1.04)`;
        }
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero">
      <div className="hero__bg" ref={bgRef}>
        <div className="hero__lane" />
        <div className="hero__grid" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__vig" />
      <div className="container">
        <span className="pill reveal in">
          <span className="dot" /> Polígono de tiro bajo techo · Cochabamba, Bolivia
        </span>
        <h1 className="hero__title reveal in" data-d="1">
          <span>Escuela de tiro</span>
          <span className="hl">deportivo</span>
        </h1>
        <p className="hero__sub reveal in" data-d="2">
          De novato a experto. Entrenamiento seguro, disciplina y experiencia real cumpliendo la{' '}
          <strong style={{ color: '#fff' }}>Ley&nbsp;400</strong> — uso y manejo seguro de armas con fines deportivos.
        </p>
        <div className="hero__cta reveal in" data-d="3">
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
