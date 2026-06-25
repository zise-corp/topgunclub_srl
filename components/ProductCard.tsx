'use client';
import { useState } from 'react';
import Image from 'next/image';
import ProductLightbox from './ProductLightbox';
import ReactCountryFlag from 'react-country-flag';

interface Spec { [key: string]: string }

interface Props {
  name: string;
  brand?: string;
  brandCode?: string;
  brandCountry?: string;
  price: number;
  imageUrl: string | null;
  alt: string;
  specs: Spec;
  waHref: string;
  aspectRatio?: string;
  layout?: 'grid' | 'wide'; // grid = fuego (col), wide = pcp (row-ish)
}

export default function ProductCard({
  name, brand, brandCode, brandCountry,
  price, imageUrl, alt, specs, waHref,
  aspectRatio = '4/3',
  layout = 'grid',
}: Props) {
  const [open, setOpen] = useState(false);
  const safeId = alt.replace(/\s+/g, '-').toLowerCase();

  const placeholder = (
    <div
      style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden', background: '#111', cursor: 'default' }}
      aria-label={alt}
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.07 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${safeId}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4ade80" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${safeId})`} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.22 }}>
          <circle cx="24" cy="24" r="20" stroke="#4ade80" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="8"  stroke="#4ade80" strokeWidth="1.5" />
          <line x1="24" y1="0"  x2="24" y2="12" stroke="#4ade80" strokeWidth="1.5" />
          <line x1="24" y1="36" x2="24" y2="48" stroke="#4ade80" strokeWidth="1.5" />
          <line x1="0"  y1="24" x2="12" y2="24" stroke="#4ade80" strokeWidth="1.5" />
          <line x1="36" y1="24" x2="48" y2="24" stroke="#4ade80" strokeWidth="1.5" />
        </svg>
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase' }}>
          Imagen próximamente
        </span>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #4ade80 40%, transparent)', opacity: 0.35 }} />
    </div>
  );

  const photo = imageUrl ? (
    <div
      onClick={() => setOpen(true)}
      title="Ver imagen completa"
      style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden', background: '#111', cursor: 'zoom-in' }}
    >
      <Image src={imageUrl} alt={alt} fill style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="prod-img"
        unoptimized
      />
    </div>
  ) : placeholder;

  return (
    <>
      <div className="prod-card" style={{ padding: 0 }}>
        {photo}

        <div style={{ padding: layout === 'wide' ? '22px 24px' : '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

          {/* Brand badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--faint)', fontWeight: 600 }}>
              {brand ?? 'HATSAN'}
            </span>
            {brandCode && (
              <ReactCountryFlag countryCode={brandCode} svg title={brandCountry} style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }} />
            )}
          </div>

          {layout === 'wide' ? (
            /* PCP layout: name + price side by side */
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1.35rem', margin: 0, lineHeight: 1.2, flex: 1 }}>{name}</h4>
              <span style={{ fontSize: '1.55rem', fontWeight: 700, color: 'var(--green-bright)', whiteSpace: 'nowrap' }}>
                ${price}<span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7 }}> us.</span>
              </span>
            </div>
          ) : (
            /* Fuego layout: name then price at bottom */
            <h4 style={{ fontSize: '1.15rem', margin: '0 0 16px', minHeight: '48px', lineHeight: 1.3 }}>{name}</h4>
          )}

          {/* Specs */}
          {layout === 'wide' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '22px', flexGrow: 1, padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
              {Object.entries(specs).map(([k, v]) => (
                <div key={k} style={{ fontSize: '0.82rem' }}>
                  <span style={{ display: 'block', color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.68rem', marginBottom: '2px' }}>{k}</span>
                  <span style={{ fontWeight: 600, color: '#fff' }}>{v}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ flexGrow: 1, marginBottom: '18px' }}>
              {Object.entries(specs).map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '0.88rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'var(--faint)' }}>{k}</span>
                  <span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {layout === 'wide' ? (
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--block">
              Consultar por este rifle
            </a>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '2px solid var(--green-deep)' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-bright)' }}>
                ${price} <span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7 }}>us.</span>
              </span>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                Consultar
              </a>
            </div>
          )}
        </div>
      </div>

      {open && imageUrl && (
        <ProductLightbox
          imageUrl={imageUrl} alt={alt}
          name={name} brand={brand} brandCode={brandCode} brandCountry={brandCountry}
          price={price} specs={specs} waHref={waHref}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}