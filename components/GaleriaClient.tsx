'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { SOCIALS } from '@/lib/site';
import Icon from './Icon';

const CATS = ['Todo', 'Armas de Fuego', 'Airsoft', 'PCP', 'Cumpleaños', 'Torneos', 'Instalaciones'] as const;
type Cat = (typeof CATS)[number];

const ITEMS: { cat: Cat; label: string; url: string }[] = [
  // Armas de Fuego
  { cat: 'Armas de Fuego', label: 'Sesión de tiro',        url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254732/Fuego_qwulvk.jpg' },
  { cat: 'Armas de Fuego', label: 'Práctica supervisada',  url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255259/Fuego2_egcsua.jpg' },
  { cat: 'Armas de Fuego', label: 'Línea de tiro',         url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255258/Fuego3_avkngp.jpg' },

  // Airsoft
  { cat: 'Airsoft', label: 'Acción airsoft',      url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255255/Airsoft_ssquzt.jpg' },
  { cat: 'Airsoft', label: 'Equipo táctico',      url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254778/Airsoft2_xnb9e8.jpg' },
  { cat: 'Airsoft', label: 'Escenario de juego',  url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255258/Airsoft3_rdtxyt.png' },

  // PCP
  { cat: 'PCP', label: 'Tiro de precisión',    url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255167/PCP_yzpe1j.jpg' },
  { cat: 'PCP', label: 'Postura olímpica',     url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254973/PCP2_see52a.jpg' },
  { cat: 'PCP', label: 'Concentración máxima', url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254728/PCP3_smxfnn.jpg' },

  // Cumpleaños
  { cat: 'Cumpleaños', label: 'Celebración',          url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255340/Cumplea%C3%B1os_tiaopy.jpg' },
  { cat: 'Cumpleaños', label: 'Grupo de festejo',     url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255340/Cumplea%C3%B1os2_fnrhw7.png' },
  { cat: 'Cumpleaños', label: 'Actividad especial',   url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255339/Cumplea%C3%B1os3_vgqegz.png' },
  { cat: 'Cumpleaños', label: 'Momento divertido',    url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255334/Cumplea%C3%B1os4_ux7skr.png' },

  // Torneos
  { cat: 'Torneos', label: 'Competencia en pista',    url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255310/Torneo_jzqte0.png' },
  { cat: 'Torneos', label: 'Tiradores en acción',     url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255269/Torneo1_i38uth.png' },
  { cat: 'Torneos', label: 'Concentración máxima',    url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255269/Torneo2_scf43w.png' },
  { cat: 'Torneos', label: 'Precisión competitiva',   url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255265/Torneo3_hkpuz8.png' },

  // Instalaciones
  { cat: 'Instalaciones', label: 'Polígono bajo techo',  url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255265/Instalaciones_hceftx.png' },
  { cat: 'Instalaciones', label: 'Área de eventos',      url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255252/Instalaciones2_ccclvu.jpg' },
  { cat: 'Instalaciones', label: 'Zona de tiro',         url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782254728/Instalaciones3_ocujyy.jpg' },
  { cat: 'Instalaciones', label: 'Distancias del rango', url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255253/Instalaciones4_muhbuq.jpg' },
  { cat: 'Instalaciones', label: 'Vista interior',       url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255264/Instalaciones5_zienmg.png' },
  { cat: 'Instalaciones', label: 'Instalaciones',        url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/v1782255262/Instalaciones6_kg9pnx.png' },
];

export default function GaleriaClient() {
  useReveal();
  const [filter, setFilter] = useState<Cat>('Todo');
  const [lb, setLb] = useState(-1);

  const visible = ITEMS.map((it, i) => ({ ...it, i })).filter(
    it => filter === 'Todo' || it.cat === filter,
  );

  const curPos = visible.findIndex(v => v.i === lb);
  const cur = lb >= 0 ? ITEMS[lb] : null;

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
      if (e.key === 'Escape')      setLb(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft')  go(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lb, go]);

  // Close lightbox when filter changes if current item not in new filter
  useEffect(() => {
    if (lb >= 0 && curPos < 0) setLb(-1);
  }, [filter, lb, curPos]);

  return (
    <>
      <style>{`
        .gi-img { transition: transform 0.35s ease; }
        .gi:hover .gi-img { transform: scale(1.05); }
      `}</style>

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
              <button
                className="gi reveal"
                key={it.i}
                onClick={() => setLb(it.i)}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'zoom-in', padding: 0, background: '#0d0f0d', border: 'none' }}
              >
                <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                  <Image
                    src={it.url}
                    alt={it.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    className="gi-img"
                    unoptimized
                  />
                </div>
              </button>
            ))}
          </div>

          <p className="text-center" style={{ color: 'var(--faint)', fontSize: '.9rem', marginTop: 34 }}>
            Seguinos en redes para ver más:&nbsp;
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>Instagram</a> ·&nbsp;
            <a href={SOCIALS.facebook}  target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>Facebook</a> ·&nbsp;
            <a href={SOCIALS.tiktok}    target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-bright)' }}>TikTok</a>
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
          <div style={{ position: 'relative', width: 'min(900px,90vw)', height: 'min(560px,70vh)' }}>
            <Image
              src={cur.url}
              alt={cur.label}
              fill
              style={{ objectFit: 'contain' }}
              className="lightbox__img"
              unoptimized
              priority
            />
          </div>
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