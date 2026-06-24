'use client';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'zoom-out',
        backdropFilter: 'blur(6px)',
        animation: 'lb-in 0.18s ease',
      }}
    >
      <style>{`
        @keyframes lb-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lb-img-in {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255,255,255,0.08)',
          color: '#fff',
          fontSize: '1.2rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          zIndex: 1001,
        }}
      >
        ✕
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: 'min(900px, 92vw)',
          maxHeight: '88vh',
          width: '100%',
          animation: 'lb-img-in 0.2s ease',
          cursor: 'default',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '88vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          }}
          priority
          unoptimized
        />
        <p style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.04em',
        }}>
          {alt}
        </p>
      </div>
    </div>
  );
}