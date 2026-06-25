'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface ImageCarouselProps {
  images: string[];
  comingSoon?: boolean;
}

export default function ImageCarousel({ images, comingSoon }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
      {comingSoon && (
        <span className="pill" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(8,8,8,.85)', zIndex: 2 }}>
          <Icon name="clock" style={{ width: 16, height: 16, marginRight: 6 }} /> Próximamente
        </span>
      )}

      {/* Grid de una celda: todos los slides apilados, el contenedor se adapta al más alto */}
      <div style={{ display: 'grid', width: '100%' }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              gridArea: '1 / 1',
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              pointerEvents: idx === current ? 'auto' : 'none',
            }}
          >
            <Image
              src={img}
              alt={`Imagen ${idx + 1}`}
              width={900}
              height={700}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 860px) 100vw, 50vw"
              priority={idx === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 12 }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: idx === current ? 22 : 8,
                height: 8,
                borderRadius: 4,
                background: idx === current ? 'var(--green-bright)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
