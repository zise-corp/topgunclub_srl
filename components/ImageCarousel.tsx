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
    <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--r)', overflow: 'hidden' }}>
      {comingSoon && (
        <span className="pill" style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(8,8,8,.85)', zIndex: 2 }}>
          <Icon name="clock" style={{ width: 16, height: 16, marginRight: 6 }} /> Próximamente
        </span>
      )}
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <Image
            src={img}
            alt={`Imagen ${idx + 1}`}
            fill
            style={{ 
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            sizes="(max-width: 860px) 100vw, 50vw"
            priority={idx === 0}
          />
        </div>
      ))}
      {images.length > 1 && (
        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 2 }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === current ? 'var(--green-bright)' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}