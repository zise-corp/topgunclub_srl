'use client';
import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

interface Props {
  name: string;
  brand?: string;
  brandCode?: string;
  brandCountry?: string;
  price: number;
  imageUrl: string;
  alt: string;
  specs: { [key: string]: string };
  waHref: string;
  onClose: () => void;
}

export default function ProductLightbox({
  name, brand, brandCode, brandCountry,
  price, imageUrl, alt, specs, waHref, onClose,
}: Props) {
  const [fullImg, setFullImg] = useState(false);
  const [mounted, setMounted] = useState(false);
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    setMounted(true);
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  // Portal to <body> so the modal escapes the `.container` stacking context
  // (position:relative; z-index:1) that otherwise lets the navbar paint over it.
  if (!mounted) return null;

  return createPortal(
    <>
    {/* The crosshair stays active inside the modal; the CSS below hides the
        native cursor so there's no double cursor. Only the close X opts out via
        data-native-cursor (native pointer, no crosshair). */}
    <div onClick={onClose} className="prod-lightbox-wrap" style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(4,6,5,0.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px', cursor: 'zoom-out',
      animation: 'hud-in 0.22s ease',
    }}>
      <style>{`
        @keyframes hud-in { from { opacity:0; } to { opacity:1; } }
        @keyframes hud-slide { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scan { 0%,100% { opacity:0; top:-10%; } 60% { opacity:.04; } 50% { top:110%; } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:.3; } }
        .plb-close { transition: background .35s ease, border-color .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1), color .35s ease; }
        .plb-close:hover { background: rgba(201,158,102,.2) !important; border-color: rgba(201,158,102,.8) !important; transform: rotate(135deg) scale(1.15); color: #fff !important; }
        /* Crosshair-only inside the modal: hide the native cursor everywhere so it
           doesn't double up with the crosshair. The close X is the exception. */
        .prod-lightbox-wrap, .prod-lightbox-wrap *,
        .plb-fullimg, .plb-fullimg * { cursor: none !important; }
        .plb-close, .plb-fullimg__close { cursor: pointer !important; }
        .hud-spec-row { display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05); animation: hud-slide .35s ease both; }
        .hud-spec-row:last-child { border-bottom:none; }
        .hud-corner { position:absolute; width:18px; height:18px; border-color:#C99E66; border-style:solid; opacity:.6; }

        /* ── Mobile: single column, panel scrolls, image on top ── */
        @media (max-width: 760px) {
          .prod-lightbox-wrap { padding: 12px !important; }
          .prod-lightbox {
            grid-template-columns: 1fr !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
          }
          .prod-lightbox__img {
            min-height: 210px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(201,158,102,.12) !important;
          }
          .prod-lightbox__data {
            max-height: none !important;
            overflow: visible !important;
            padding: 26px 20px 24px !important;
          }
        }
      `}</style>

      {/* Tactical grid background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(201,158,102,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,158,102,0.025) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />


      {/* Main panel */}
      <div
        onClick={e => e.stopPropagation()}
        className="prod-lightbox"
        style={{
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '0',
          maxWidth: '1200px', width: '100%',
          maxHeight: '92vh',
          background: 'rgba(12,14,13,0.95)',
          border: '1px solid rgba(201,158,102,.18)',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'default',
          boxShadow: '0 0 80px -20px rgba(201,158,102,.12), 0 40px 80px rgba(0,0,0,.8)',
          animation: 'hud-slide .25s ease',
        }}
      >
        {/* ── LEFT: imagen ── */}
        <div className="prod-lightbox__img" style={{
          position: 'relative',
          background: '#080a09',
          borderRight: '1px solid rgba(201,158,102,.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '340px', overflow: 'hidden',
        }}>
          {/* scan line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(201,158,102,.04), transparent)',
            animation: 'scan 4s linear infinite',
            pointerEvents: 'none', zIndex: 2,
          }} />

          {/* corner brackets */}
          <div className="hud-corner" style={{ top: 12, left: 12, borderWidth: '2px 0 0 2px' }} />
          <div className="hud-corner" style={{ top: 12, right: 12, borderWidth: '2px 2px 0 0' }} />
          <div className="hud-corner" style={{ bottom: 12, left: 12, borderWidth: '0 0 2px 2px' }} />
          <div className="hud-corner" style={{ bottom: 12, right: 12, borderWidth: '0 2px 2px 0' }} />

          {/* crosshair center */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ position: 'relative', width: 60, height: 60, opacity: .12 }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: '#C99E66' }} />
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: '#C99E66' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 10, height: 10, border: '1px solid #C99E66', borderRadius: '50%' }} />
            </div>
          </div>

          <div
            onClick={e => { e.stopPropagation(); setFullImg(true); }}
            title="Ver imagen completa"
            style={{ position: 'relative', zIndex: 1, width: '85%', aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(201,158,102,.15)', background: '#fff', cursor: 'zoom-in' }}
          >
            <Image
              src={imageUrl} alt={alt}
              fill
              style={{ objectFit: 'contain', padding: '16px' }}
              priority unoptimized
            />
          </div>

        </div>

        {/* ── RIGHT: datos ── */}
        <div className="prod-lightbox__data" style={{
          padding: '32px 32px 28px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          overflowY: 'auto', maxHeight: '90vh', gap: '20px',
          position: 'relative',
        }}>
          {/* close button */}
          <button onClick={onClose} aria-label="Cerrar" data-native-cursor className="plb-close" style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: 6,
            border: '1px solid rgba(201,158,102,.3)',
            background: 'rgba(201,158,102,.08)',
            color: '#C99E66', fontSize: '1.1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            lineHeight: 1,
          }}>✕</button>

          {/* header */}
          <div style={{ marginBottom: 20, animation: 'hud-slide .3s ease both', animationDelay: '.05s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{
                fontSize: '.6rem', letterSpacing: '.22em', textTransform: 'uppercase',
                color: '#C99E66', fontFamily: 'var(--ff-display)',
                padding: '3px 8px', border: '1px solid rgba(201,158,102,.35)',
                borderRadius: 2,
              }}>Ficha técnica</span>
              {brandCode && (
                <ReactCountryFlag countryCode={brandCode} svg title={brandCountry}
                  style={{ width: '1.4em', height: '1.4em', borderRadius: 2, opacity: .8 }} />
              )}
              {brand && (
                <span style={{ fontSize: '.7rem', letterSpacing: '.1em', color: 'var(--faint)', textTransform: 'uppercase' }}>
                  {brand}
                </span>
              )}
            </div>
            <h2 style={{
              fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem,3vw,2rem)',
              fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.04em',
              margin: 0, lineHeight: 1.1, color: '#fff',
            }}>{name}</h2>
          </div>

          {/* divider */}
          <div style={{ height: 1, background: 'linear-gradient(90deg, #C99E66, transparent)', marginBottom: 20, opacity: .35 }} />

          {/* specs */}
          <div style={{ border: '1px solid rgba(255,255,255,.05)', borderRadius: 4, padding: '4px 14px', background: 'rgba(255,255,255,.02)' }}>
            {Object.entries(specs).map(([k, v], i) => (
              <div key={k} className="hud-spec-row" style={{ animationDelay: `${.1 + i * .04}s` }}>
                <span style={{
                  fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.12em',
                  color: 'var(--faint)', fontFamily: 'var(--ff-display)',
                }}>{k}</span>
                <span style={{ fontSize: '.92rem', fontWeight: 600, color: '#e8ece9' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* price + cta */}
          <div style={{ animation: 'hud-slide .35s ease both', animationDelay: '.3s' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 14 }}>
              <span style={{ fontSize: '.65rem', letterSpacing: '.15em', color: 'var(--faint)', textTransform: 'uppercase', fontFamily: 'var(--ff-display)' }}>Precio</span>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green-bright)', fontFamily: 'var(--ff-display)', lineHeight: 1 }}>
                ${price}
              </span>
              <span style={{ fontSize: '.8rem', color: 'var(--faint)' }}>us.</span>
            </div>
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="btn btn--wa btn--block"
              onClick={onClose}
              style={{ justifyContent: 'center' }}
            >
              Consultar por este producto
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Fullscreen image viewer */}
    {fullImg && (
      <div
        onClick={() => setFullImg(false)}
        className="plb-fullimg"
        style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          background: 'rgba(0,0,0,0.96)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'zoom-out',
          animation: 'hud-in .18s ease',
        }}
      >
        <button
          onClick={() => setFullImg(false)}
          aria-label="Cerrar"
          data-native-cursor
          className="plb-fullimg__close"
          style={{
            position: 'fixed', top: 20, right: 20, zIndex: 1101,
            width: 38, height: 38, borderRadius: 6,
            border: '1px solid rgba(255,255,255,.2)',
            background: 'rgba(255,255,255,.07)',
            color: '#fff', fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>
        <Image
          src={imageUrl} alt={alt}
          width={1200} height={900}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '94vw', maxHeight: '92vh', width: 'auto', height: 'auto', objectFit: 'contain', cursor: 'default' }}
          priority unoptimized
        />
      </div>
    )}
    </>,
    document.body
  );
}
