'use client';
import { useState, useEffect, useCallback } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { SOCIALS } from '@/lib/site';
import Ph from './Ph';
import Icon from './Icon';

const CATS = ['Todo', 'Armas de Fuego', 'Airsoft', 'PCP', 'Arco y Flecha', 'Cumpleaños', 'Torneos', 'Instalaciones'] as const;

const ITEMS = [
  // Armas de Fuego
  { cat: 'Armas de Fuego', label: 'Sesión de tiro', h: 300 },
  { cat: 'Armas de Fuego', label: 'Línea de tiro', h: 380 },
  { cat: 'Armas de Fuego', label: 'Práctica supervisada', h: 340 },
  
  // Airsoft
  { cat: 'Airsoft', label: 'Acción airsoft', h: 340 },
  { cat: 'Airsoft', label: 'Equipo táctico', h: 280 },
  { cat: 'Airsoft', label: 'Escenario de juego', h: 320 },
  
  // PCP
  { cat: 'PCP', label: 'Tiro de precisión', h: 360 },
  { cat: 'PCP', label: 'Postura olímpica', h: 300 },
  { cat: 'PCP', label: 'Concentración máxima', h: 340 },
  
  // Arco y Flecha
  { cat: 'Arco y Flecha', label: 'Técnica de arco', h: 320 },
  { cat: 'Arco y Flecha', label: 'Próximamente', h: 280 },
  
  // Cumpleaños
  { cat: 'Cumpleaños', label: 'Celebración infantil', h: 440 },
  { cat: 'Cumpleaños', label: 'Grupo de niños', h: 300 },
  { cat: 'Cumpleaños', label: 'Actividad supervisada', h: 360 },
  
  // Torneos
  { cat: 'Torneos', label: 'Competencia en pista', h: 380 },
  { cat: 'Torneos', label: 'Premiación', h: 300 },
  { cat: 'Torneos', label: 'Tiradores concentrados', h: 340 },
  
  // Instalaciones
  { cat: 'Instalaciones', label: 'Polígono bajo techo', h: 420 },
  { cat: 'Instalaciones', label: 'Distancias del rango', h: 300 },
  { cat: 'Instalaciones', label: 'Área de eventos', h: 380 },
  { cat: 'Instalaciones', label: 'Zona de comida', h: 300 },
] as const;

type Cat = (typeof CATS)[number];

export default function GaleriaClient() {
  useReveal();
  const [filter, setFilter] = useState<Cat>('Todo');
  const [lb, setLb] = useState(-1);

  const visible = ITEMS.map((it, i) => ({ ...it, i })).filter(
    it => filter === 'Todo' || it.cat === filter,
  );

  const cur = lb >= 0 ? ITEMS[lb] : null;
  const curPos = visible.findIndex(v => v.i === lb);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (curPos < 0) return;
      const next = (curPos + dir + visible.length) % visible.length;
      setLb(visible[next].i);
    },
    [curPos, visible],
  );

  useEffect(() => {
    if (lb < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLb(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lb, go]);

  return (
    <>
      <section className="section grain">
        <div className="container">
          <div className="gal-filters reveal">
            {CATS.map(c => (
              <button key={c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="masonry">
            {visible.map(it => (
              <button className="gi reveal" key={it.i} onClick={() => setLb(it.i)}>
                <Ph label={it.label} style={{ height: it.h + 'px' }} />
                <span className="cap">{it.label}</span>
              </button>
            ))}
          </div>
          <p className="text-center" style={{ color: 'var(--faint)', fontSize: '.9rem', marginTop: 34 }}>
            Espacio para tus fotos reales — placeholders editables. Seguinos en redes para ver más:
            &nbsp;<a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>Instagram</a> ·
            &nbsp;<a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>Facebook</a> ·
            &nbsp;<a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>TikTok</a>
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={'lightbox' + (lb >= 0 ? ' open' : '')}
        onClick={e => { if ((e.target as HTMLElement).classList.contains('lightbox')) setLb(-1); }}
        role="dialog"
        aria-modal="true"
        aria-label="Visualizador de imagen"
      >
        <button className="lightbox__close" aria-label="Cerrar" onClick={() => setLb(-1)}>
          <Icon name="plus" style={{ transform: 'rotate(45deg)', width: 24, height: 24 }} />
        </button>
        {visible.length > 1 && (
          <button className="lightbox__nav prev" aria-label="Anterior" onClick={() => go(-1)}>
            <Icon name="arrow" style={{ transform: 'rotate(180deg)' }} />
          </button>
        )}
        {visible.length > 1 && (
          <button className="lightbox__nav next" aria-label="Siguiente" onClick={() => go(1)}>
            <Icon name="arrow" />
          </button>
        )}
        {cur && (
          <Ph
            label={cur.label}
            className="lightbox__img"
            style={{ width: 'min(900px,90vw)', height: 'min(560px,70vh)' }}
          />
        )}
        {cur && (
          <div className="lightbox__cap">
            {cur.label} · {cur.cat}
          </div>
        )}
      </div>
    </>
  );
}