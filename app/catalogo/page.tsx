import type { Metadata } from 'next';
import Image from 'next/image';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon from '@/components/Icon';
import { waLink } from '@/lib/site';
import { getCloudinaryImage } from '@/lib/cloudinary';
import ReactCountryFlag from 'react-country-flag';

export const metadata: Metadata = {
  title: 'Catálogo de Armas · Top Gun Club SRL',
  description:
    'Catálogo de armas de fuego y PCP en Top Gun Club Cochabamba. Phoenix Arms, Walther, Smith & Wesson, Rossi, Hatsan y más. Precios y especificaciones.',
};

const BRAND_COUNTRY: Record<string, { code: string; country: string }> = {
  'PHOENIXARMS':    { code: 'US', country: 'USA' },
  'SARSILMAZ':      { code: 'TR', country: 'Turquía' },
  'WALTHER':        { code: 'DE', country: 'Alemania' },
  'SMITH & WESSON': { code: 'US', country: 'USA' },
  'RUGER':          { code: 'US', country: 'USA' },
  'HS PRODUKT':     { code: 'HR', country: 'Croacia' },
  'ROSSI':          { code: 'BR', country: 'Brasil' },
  'MENDOZA':        { code: 'MX', country: 'México' },
  'WINCHESTER':     { code: 'US', country: 'USA' },
  'KRISS USA':      { code: 'US', country: 'USA' },
  'CZ':             { code: 'CZ', country: 'Chequia' },
  'BOITO':          { code: 'BR', country: 'Brasil' },
  'UZKON':          { code: 'TR', country: 'Turquía' },
  'TAURUS':         { code: 'BR', country: 'Brasil' },
  'HATSAN':         { code: 'TR', country: 'Turquía' },
};

const FIREARMS = [
  {
    category: 'Pistolas',
    items: [
      { name: 'Phoenix HP22A',          brand: 'PHOENIXARMS',    price: 805,  image: 'Phoenix_Arms_HP22A_wuplhw',           specs: { Calibre: '.22 LR', Tipo: 'Semiautomática' } },
      { name: 'Sarsilmaz B6C',          brand: 'SARSILMAZ',      price: 1350, image: 'Sarsilmaz_B6C_nplhrn',               specs: { Calibre: '9mm',    Tipo: 'Semiautomática' } },
      { name: 'Walther P22Q',           brand: 'WALTHER',        price: 1945, image: 'Walther_P22Q_qg6xqi',                specs: { Calibre: '.22 LR', Tipo: 'Semiautomática' } },
      { name: 'Smith & Wesson M&P Compact', brand: 'SMITH & WESSON', price: 1945, image: 'SMITH_WESSON_M_P_COMPACT_wrdlaz', specs: { Calibre: '9mm',    Tipo: 'Compacta' } },
      { name: 'Ruger M&P Compact',      brand: 'RUGER',          price: 1945, image: 'Ruger_M_P_Compact_v8njks',           specs: { Calibre: '9mm',    Tipo: 'Compacta' } },
      { name: 'HS Produkt SF19',        brand: 'HS PRODUKT',     price: 2335, image: 'HS_Produkt_SF19_rf84ok',             specs: { Calibre: '9mm',    Cañón: '4.5"' } },
    ],
  },
  {
    category: 'Rifles',
    items: [
      { name: 'Rossi 7022',             brand: 'ROSSI',          price: 730,  image: 'catalogo/fuego/rossi-7022',             specs: { Calibre: '.22 LR', Tipo: 'Semiautomática' } },
      { name: 'Rossi Gallery BK',       brand: 'ROSSI',          price: 1045, image: 'catalogo/fuego/rossi-gallery-bk',       specs: { Calibre: '.22 LR', Tipo: 'Corredera' } },
      { name: 'Rossi Gallery Wood',     brand: 'ROSSI',          price: 1155, image: 'catalogo/fuego/rossi-gallery-wood',     specs: { Calibre: '.22 LR', Tipo: 'Corredera' } },
      { name: 'Rossi Rio Bravo',        brand: 'ROSSI',          price: 1355, image: 'catalogo/fuego/rossi-rio-bravo',        specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Rossi Goldgloss',        brand: 'ROSSI',          price: 1555, image: 'catalogo/fuego/rossi-goldgloss',        specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Rossi Rio Bravo Gold Mate', brand: 'ROSSI',       price: 1555, image: 'catalogo/fuego/rossi-rio-bravo-gold-mate', specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Mendoza Puma (Squad)',   brand: 'MENDOZA',        price: 1015, image: 'catalogo/fuego/mendoza-squad',          specs: { Tipo: 'Varilla',   Modelo: '1911' } },
      { name: 'Winchester Wildcat',     brand: 'WINCHESTER',     price: 1345, image: 'catalogo/fuego/winchester-wildcat',     specs: { Calibre: '.22 LR' } },
      { name: 'Kriss DMK22C FDE',       brand: 'KRISS USA',      price: 2640, image: 'catalogo/fuego/kriss-dmk22c-fde',      specs: { Calibre: '.22 LR' } },
      { name: 'Kriss DMK22C BK',        brand: 'KRISS USA',      price: 2420, image: 'catalogo/fuego/kriss-dmk22c-bk',       specs: { Calibre: '.22 LR' } },
      { name: 'CZ 457 Training',        brand: 'CZ',             price: 2640, image: 'catalogo/fuego/cz-training',           specs: { Calibre: '.22 LR' } },
    ],
  },
  {
    category: 'Escopetas',
    items: [
      { name: 'Boito Reunas SB',        brand: 'BOITO',          price: 630,  image: 'catalogo/fuego/boito-reunas-sb',        specs: { Calibre: '12', Tipo: '2 tiros' } },
      { name: 'Boito Miura Supreme',    brand: 'BOITO',          price: 1540, image: 'catalogo/fuego/boito-miura-supreme',    specs: { Calibre: '12' } },
      { name: 'Boito Miura Special',    brand: 'BOITO',          price: 1400, image: 'catalogo/fuego/boito-miura-special',    specs: { Calibre: '12' } },
      { name: 'Uzkon T17/T16',          brand: 'UZKON',          price: 715,  image: 'catalogo/fuego/uzkon-t17',             specs: { Calibre: '12' } },
      { name: 'Taurus ST12',            brand: 'TAURUS',         price: 1320, image: 'catalogo/fuego/taurus-st12',           specs: { Calibre: '12' } },
      { name: 'Hatsan Escort AS',       brand: 'HATSAN',         price: 1045, image: 'catalogo/fuego/hatsan-escort-as9',     specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Luxano',   brand: 'HATSAN',         price: 1540, image: 'catalogo/fuego/hatsan-escort-luxano',  specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Supreme',  brand: 'HATSAN',         price: 1320, image: 'catalogo/fuego/hatsan-escort-supreme', specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Supreme Max', brand: 'HATSAN',      price: 1485, image: 'catalogo/fuego/hatsan-escort-supreme-max', specs: { Calibre: '12' } },
    ],
  },
];

const PCP_WEAPONS = [
  {
    category: 'Rifles PCP · Tiro por Tiro',
    items: [
      { name: 'Bull Boss QE',      price: 790,  image: 'catalogo/pcp/bull-boss-qe',       specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1070 fps', Energía: '51 Jules',   Capacidad: '10', Tanque: '230 cc', Presión: '200 Bar', Disparos: '45',  Cañón: '23"'              } },
      { name: 'AT44-10 Tact QE',   price: 805,  image: 'catalogo/pcp/at44-10-tact-qe',   specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '10', Tanque: '180 cc', Presión: '200 Bar', Disparos: '55',  Cañón: '19,4"', Peso: '4,3 kg'  } },
      { name: 'Predator Bolt',     price: 880,  image: 'catalogo/pcp/predator-bolt',      specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1150 fps', Energía: '58 Jules',   Capacidad: '14', Tanque: '565 cc', Presión: '200 Bar', Disparos: '48',  Cañón: '23"',   Peso: '5,1 kg'  } },
      { name: 'Airmax Bolt',       price: 880,  image: 'catalogo/pcp/airmax-bolt',        specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1170 fps', Energía: '51 Jules',   Capacidad: '10', Tanque: '490 cc', Presión: '200 Bar', Disparos: '95',  Cañón: '23"',   Peso: '4,9 kg'  } },
      { name: 'Nova Tact Compact', price: 940,  image: 'catalogo/pcp/nova-tact-compact',  specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1030 fps', Energía: '53,5 Jules', Capacidad: '10', Tanque: '500 cc', Presión: '250 Bar', Disparos: '150', Cañón: '23"',   Peso: '4,4 kg'  } },
      { name: 'Gladius',           price: 980,  image: 'catalogo/pcp/gladius',            specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '60',  Cañón: '19,4"', Peso: '4,65 kg' } },
      { name: 'BT65SB-W',          price: 1100, image: 'catalogo/pcp/bt65sb-w',           specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1180 fps', Energía: '61 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '28',  Cañón: '23"',   Peso: '4,3 kg'  } },
      { name: 'BT65SB Elite QE',   price: 1160, image: 'catalogo/pcp/bt65sb-elite-qe',   specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1180 fps', Energía: '61 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '28',  Cañón: '23"',   Peso: '4,4 kg'  } },
      { name: 'Nova Star',         price: 1175, image: 'catalogo/pcp/nova-star',          specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1000 fps', Energía: '53,5 Jules', Capacidad: '12', Tanque: '480 cc', Presión: '250 Bar', Disparos: '100', Cañón: '23"',   Peso: '3,8 kg'  } },
      { name: 'Hercules Bully',    price: 1370, image: 'catalogo/pcp/hercules-bully',     specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1230 fps', Energía: '67 Jules',   Capacidad: '14', Tanque: '500 cc', Presión: '250 Bar', Disparos: '40',  Cañón: '23"',   Peso: '4,65 kg' } },
    ],
  },
  {
    category: 'Rifles PCP · Semiautomáticos',
    items: [
      { name: 'Galatian Tact Auto', price: 1175, image: 'catalogo/pcp/galatian-tact-auto', specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '950 fps',  Energía: '39,8 Jules', Capacidad: '12', Tanque: '255 cc', Presión: '200 Bar', Disparos: '50',  Cañón: '19,7"', Peso: '4,15 kg' } },
      { name: 'Barrage',            price: 1450, image: 'catalogo/pcp/barrage',            specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '12', Tanque: '500 cc', Presión: '250 Bar', Disparos: '120', Cañón: '19,7"', Peso: '4,62 kg' } },
      { name: 'Bull Master',        price: 1450, image: 'catalogo/pcp/bull-master',        specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '12', Tanque: '530 cc', Presión: '250 Bar', Disparos: '120', Cañón: '19,7"', Peso: '4,7 kg'  } },
    ],
  },
  {
    category: 'Accesorios',
    items: [
      { name: 'Bomba Manual de Llenado', price: 200, image: 'catalogo/pcp/bomba-manual', specs: { Presión: '200 Bar', Tipo: 'Bomba manual' } },
    ],
  },
];

// ── Image placeholder (no event handlers) ────────────────────────────────────
function ProductImage({ publicId, alt, aspectRatio = '4/3' }: { publicId: string; alt: string; aspectRatio?: string }) {
  const imageUrl = getCloudinaryImage(publicId, { width: 600, quality: 'auto', format: 'auto' });
  const safeId = publicId.replace(/\//g, '-');

  if (!imageUrl) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          overflow: 'hidden',
          background: '#0d0f0d',
        }}
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
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
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
  }

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden', background: '#1a1a1a' }}>
      <Image src={imageUrl} alt={alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  );
}

// ── Brand badge ───────────────────────────────────────────────────────────────
function BrandBadge({ brand }: { brand: string }) {
  const info = BRAND_COUNTRY[brand];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--faint)', fontWeight: 600 }}>
        {brand}
      </span>
      {info && (
        <ReactCountryFlag
          countryCode={info.code}
          svg
          title={info.country}
          style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }}
        />
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CatalogoPage() {
  return (
    <>
      <RevealObserver />

      {/* Hover styles via a plain <style> tag — no JS needed */}
      <style>{`
        .prod-card {
          border: 1px solid var(--line);
          border-radius: var(--r);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s;
        }
        .prod-card:hover { border-color: rgba(74,222,128,0.4); }
      `}</style>

      <PageHero
        crumb="Catálogo"
        label="Armas y equipamiento"
        title={<>Catálogo <span className="hl" style={{ display: 'inline' }}>2025</span></>}
        sub="Armas de fuego y PCP de las mejores marcas. Precios actualizados y especificaciones técnicas. Consultanos por WhatsApp para reservar."
      />

      {/* ── Armas de Fuego ─────────────────────────────────────────────────── */}
      <section id="fuego" className="section grain" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Armamento</span>
            <h2 className="section-title">Armas de <em>Fuego</em></h2>
          </div>

          {FIREARMS.map((section, sectionIdx) => (
            <div key={section.category} className="reveal" data-d={(sectionIdx % 2) + 1} style={{ marginBottom: '60px', marginTop: sectionIdx > 0 ? '40px' : '0' }}>
              <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '28px', textAlign: 'center' }}>
                {section.category}
              </h3>
              <div className="grid cols-3">
                {section.items.map((item, i) => (
                  <div key={i} className="prod-card" style={{ padding: 0 }}>
                    <ProductImage publicId={item.image} alt={item.name} aspectRatio="4/3" />
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <BrandBadge brand={item.brand} />
                      <h4 style={{ fontSize: '1.15rem', margin: '8px 0 16px', minHeight: '48px', lineHeight: 1.3 }}>
                        {item.name}
                      </h4>
                      <div style={{ flexGrow: 1, marginBottom: '18px' }}>
                        {Object.entries(item.specs).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '0.88rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ color: 'var(--faint)' }}>{k}</span>
                            <span style={{ fontWeight: 500 }}>{v as string}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '2px solid var(--green-deep)' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-bright)' }}>
                          ${item.price} <span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7 }}>us.</span>
                        </span>
                        <a href={waLink(`Hola! Me interesa el ${item.name} - ${item.brand} ($${item.price})`)} target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                          <Icon name="whatsapp" style={{ width: 15, height: 15 }} /> Consultar
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rifles PCP ─────────────────────────────────────────────────────── */}
      <section id="pcp" className="section section--tight" style={{ background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Aire comprimido · Hatsan</span>
            <h2 className="section-title">Rifles <em>PCP</em></h2>
            <p className="lead mx-auto" style={{ maxWidth: '70ch' }}>
              Rifles de aire pre-comprimido de alta precisión. Ideales para tiro deportivo, caza menor y competición.
            </p>
          </div>

          {PCP_WEAPONS.map((section, sectionIdx) => (
            <div key={section.category} className="reveal" data-d={(sectionIdx % 2) + 1} style={{ marginBottom: '60px', marginTop: sectionIdx > 0 ? '48px' : '0' }}>
              <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '28px', textAlign: 'center' }}>
                {section.category}
              </h3>
              <div className="grid cols-2" style={{ gap: '24px' }}>
                {section.items.map((item, i) => (
                  <div key={i} className="prod-card" style={{ padding: 0 }}>
                    <ProductImage publicId={item.image} alt={item.name} aspectRatio="16/7" />
                    <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      {/* Hatsan badge */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--faint)', fontWeight: 600 }}>HATSAN</span>
                        <ReactCountryFlag countryCode="TR" svg title="Turquía" style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }} />
                      </div>
                      {/* Name + price */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '1.35rem', margin: 0, lineHeight: 1.2, flex: 1 }}>{item.name}</h4>
                        <span style={{ fontSize: '1.55rem', fontWeight: 700, color: 'var(--green-bright)', whiteSpace: 'nowrap' }}>
                          ${item.price}<span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.7 }}> us.</span>
                        </span>
                      </div>
                      {/* Specs grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: '22px', flexGrow: 1, padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {Object.entries(item.specs).map(([k, v]) => (
                          <div key={k} style={{ fontSize: '0.82rem' }}>
                            <span style={{ display: 'block', color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.68rem', marginBottom: '2px' }}>{k}</span>
                            <span style={{ fontWeight: 600, color: '#fff' }}>{v as string}</span>
                          </div>
                        ))}
                      </div>
                      <a href={waLink(`Hola! Me interesa el ${item.name} PCP ($${item.price})`)} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--block">
                        <Icon name="whatsapp" /> Consultar por este rifle
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta
        title="¿Necesitás asesoramiento?"
        text="Nuestros expertos te ayudan a elegir el arma perfecta para tu nivel y objetivos. Precios sujetos a disponibilidad."
        msg="Hola! Quiero asesoramiento sobre el catálogo de armas de Top Gun Club"
      />
    </>
  );
}