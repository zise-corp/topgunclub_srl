import type { Metadata } from 'next';
import Image from 'next/image';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import Icon from '@/components/Icon';
import { waLink } from '@/lib/site';
import { getCloudinaryImage } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Catálogo de Armas · Top Gun Club SRL',
  description:
    'Catálogo de armas de fuego y PCP en Top Gun Club Cochabamba. Phoenix Arms, Walther, Smith & Wesson, Rossi, Hatsan y más. Precios y especificaciones.',
};

// CATÁLOGO DE ARMAS DE FUEGO
const FIREARMS = [
  {
    category: 'Pistolas',
    items: [
      { name: 'Phoenix Arms HP22A', brand: 'PHOENIXARMS', price: 805, image: 'catalogo/fuego/phoenix-hp22a', specs: { caliber: '.22 LR', type: 'Semiautomática' } },
      { name: 'Sarsilmaz B6C9', brand: 'SARSILMAZ', price: 1350, image: 'catalogo/fuego/sarsilmaz-b6c9', specs: { caliber: '9mm', type: 'Semiautomática' } },
      { name: 'Walther P22Q', brand: 'WALTHER', price: 1945, image: 'catalogo/fuego/walther-p22q', specs: { caliber: '.22 LR', type: 'Semiautomática' } },
      { name: 'Smith & Wesson M&P Compact', brand: 'SMITH & WESSON', price: 1945, image: 'catalogo/fuego/sw-mp-compact', specs: { caliber: '9mm', type: 'Compacta' } },
      { name: 'Ruger M&P Compact', brand: 'RUGER', price: 1945, image: 'catalogo/fuego/ruger-mp-compact', specs: { caliber: '9mm', type: 'Compacta' } },
      { name: 'HS Produkt SF19', brand: 'HS PRODUKT', price: 2335, image: 'catalogo/fuego/hs-sf19', specs: { caliber: '9mm', barrel: '4.5"' } },
    ]
  },
  {
    category: 'Rifles',
    items: [
      { name: 'Rossi Gallery BK', brand: 'ROSSI', price: 910, image: 'catalogo/fuego/rossi-gallery-bk', specs: { caliber: '.22 LR', type: 'Corredera' } },
      { name: 'Rossi Gallery Wood', brand: 'ROSSI', price: 990, image: 'catalogo/fuego/rossi-gallery-wood', specs: { caliber: '.22 LR', type: 'Corredera' } },
      { name: 'Rossi Rio Bravo', brand: 'ROSSI', price: 1155, image: 'catalogo/fuego/rossi-rio-bravo', specs: { caliber: '.22 LR', type: 'Palanca' } },
      { name: 'Rossi Rio Bravo Gold', brand: 'ROSSI', price: 1355, image: 'catalogo/fuego/rossi-rio-bravo-gold', specs: { caliber: '.22 LR', type: 'Palanca' } },
      { name: 'Rossi Rio Bravo Gold Mate', brand: 'ROSSI', price: 1555, image: 'catalogo/fuego/rossi-rio-bravo-gold-mate', specs: { caliber: '.22 LR', type: 'Palanca' } },
      { name: 'Mendoza Squad', brand: 'MENDOZA', price: 1015, image: 'catalogo/fuego/mendoza-squad', specs: { type: 'Varilla', model: '1911' } },
      { name: 'Kriss DMK22C FDE', brand: 'KRISS USA', price: 2640, image: 'catalogo/fuego/kriss-dmk22c-fde', specs: { caliber: '.22 LR' } },
      { name: 'Kriss DMK22C BK', brand: 'KRISS USA', price: 2420, image: 'catalogo/fuego/kriss-dmk22c-bk', specs: { caliber: '.22 LR' } },
      { name: 'CZ Training', brand: 'CZ', price: 2640, image: 'catalogo/fuego/cz-training', specs: { caliber: '.22 LR' } },
    ]
  },
  {
    category: 'Escopetas',
    items: [
      { name: 'Boito Miuras SB', brand: 'BOITO', price: 630, image: 'catalogo/fuego/boito-miuras-sb', specs: { caliber: '12', type: '2 tiros' } },
      { name: 'Boito Miura Supreme', brand: 'BOITO', price: 1540, image: 'catalogo/fuego/boito-miura-supreme', specs: { caliber: '12' } },
      { name: 'Boito Miura Special', brand: 'BOITO', price: 1400, image: 'catalogo/fuego/boito-miura-special', specs: { caliber: '12' } },
      { name: 'Uzkon T17/T16', brand: 'UZKON', price: 715, image: 'catalogo/fuego/uzkon-t17', specs: { caliber: '12' } },
      { name: 'Taurus ST12', brand: 'TAURUS', price: 1320, image: 'catalogo/fuego/taurus-st12', specs: { caliber: '12' } },
      { name: 'Hatsan Escort AS9', brand: 'HATSAN', price: 1045, image: 'catalogo/fuego/hatsan-escort-as9', specs: { caliber: '12' } },
      { name: 'Hatsan Escort Luxano', brand: 'HATSAN', price: 1540, image: 'catalogo/fuego/hatsan-escort-luxano', specs: { caliber: '12' } },
      { name: 'Hatsan Escort Supreme', brand: 'HATSAN', price: 1320, image: 'catalogo/fuego/hatsan-escort-supreme', specs: { caliber: '12' } },
      { name: 'Hatsan Escort Supreme Max', brand: 'HATSAN', price: 1485, image: 'catalogo/fuego/hatsan-escort-supreme-max', specs: { caliber: '12' } },
    ]
  }
];

// CATÁLOGO DE PCP
const PCP_WEAPONS = [
  {
    category: 'Rifles PCP - Tiro por Tiro',
    items: [
      { 
        name: 'Airmax Bolt', 
        price: 880, 
        image: 'catalogo/pcp/airmax-bolt',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1170 fps',
          energy: '51 Jules',
          capacity: '10',
          tank: '490 cc',
          pressure: '200 Bar',
          shots: '95',
          barrel: '23"',
          weight: '4,9 kg'
        }
      },
      { 
        name: 'Bull Boss QE', 
        price: 880, 
        image: 'catalogo/pcp/bull-boss-qe',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1070 fps',
          energy: '51 Jules',
          capacity: '10',
          tank: '230 cc',
          pressure: '200 Bar',
          shots: '45',
          barrel: '23"'
        }
      },
      { 
        name: 'AT44-10 Tact QE', 
        price: 805, 
        image: 'catalogo/pcp/at44-10-tact-qe',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '970 fps',
          energy: '42 Jules',
          capacity: '10',
          tank: '180 cc',
          pressure: '200 Bar',
          shots: '55',
          barrel: '19,4"',
          weight: '4,3 kg'
        }
      },
      { 
        name: 'Predator Bolt', 
        price: 790, 
        image: 'catalogo/pcp/predator-bolt',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1150 fps',
          energy: '58 Jules',
          capacity: '14',
          tank: '565 cc',
          pressure: '200 Bar',
          shots: '48',
          barrel: '23"',
          weight: '5,1 kg'
        }
      },
      { 
        name: 'Nova Tact Compact', 
        price: 1160, 
        image: 'catalogo/pcp/nova-tact-compact',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1030 fps',
          energy: '53,5 Jules',
          capacity: '10',
          tank: '500 cc',
          pressure: '250 Bar',
          shots: '150',
          barrel: '23"',
          weight: '4,4 kg'
        }
      },
      { 
        name: 'Gladius', 
        price: 1100, 
        image: 'catalogo/pcp/gladius',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '970 fps',
          energy: '42 Jules',
          capacity: '10',
          tank: '255 cc',
          pressure: '200 Bar',
          shots: '60',
          barrel: '19,4"',
          weight: '4,65 kg'
        }
      },
      { 
        name: 'BT65SB-W', 
        price: 980, 
        image: 'catalogo/pcp/bt65sb-w',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1180 fps',
          energy: '61 Jules',
          capacity: '10',
          tank: '255 cc',
          pressure: '200 Bar',
          shots: '28',
          barrel: '23"',
          weight: '4,3 kg'
        }
      },
      { 
        name: 'BT65SB Elite QE', 
        price: 940, 
        image: 'catalogo/pcp/bt65sb-elite-qe',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1180 fps',
          energy: '61 Jules',
          capacity: '10',
          tank: '255 cc',
          pressure: '200 Bar',
          shots: '28',
          barrel: '23"',
          weight: '4,4 kg'
        }
      },
      { 
        name: 'Nova Star', 
        price: 1450, 
        image: 'catalogo/pcp/nova-star',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1000 fps',
          energy: '53,5 Jules',
          capacity: '12',
          tank: '480 cc',
          pressure: '250 Bar',
          shots: '100',
          barrel: '23"',
          weight: '3,8 kg'
        }
      },
      { 
        name: 'Hercules Bully', 
        price: 1370, 
        image: 'catalogo/pcp/hercules-bully',
        specs: { 
          operation: 'Tiro por tiro',
          caliber: '5,5 mm',
          velocity: '1230 fps',
          energy: '67 Jules',
          capacity: '14',
          tank: '500 cc',
          pressure: '250 Bar',
          shots: '40',
          barrel: '23"',
          weight: '4,65 kg'
        }
      },
    ]
  },
  {
    category: 'Rifles PCP - Semiautomáticos',
    items: [
      { 
        name: 'Galatian Tact Auto', 
        price: 1175, 
        image: 'catalogo/pcp/galatian-tact-auto',
        specs: { 
          operation: 'Semiautomático',
          caliber: '5,5 mm',
          velocity: '950 fps',
          energy: '39.8 Jules',
          capacity: '12',
          tank: '255 cc',
          pressure: '200 Bar',
          shots: '50',
          barrel: '19,7"',
          weight: '4,15 kg'
        }
      },
      { 
        name: 'Barrage', 
        price: 1175, 
        image: 'catalogo/pcp/barrage',
        specs: { 
          operation: 'Semiautomático',
          caliber: '5,5 mm',
          velocity: '970 fps',
          energy: '42 Jules',
          capacity: '12',
          tank: '500 cc',
          pressure: '250 Bar',
          shots: '120',
          barrel: '19,7"',
          weight: '4,62 kg'
        }
      },
      { 
        name: 'Bull Master', 
        price: 1450, 
        image: 'catalogo/pcp/bull-master',
        specs: { 
          operation: 'Semiautomático',
          caliber: '5,5 mm',
          velocity: '970 fps',
          energy: '42 Jules',
          capacity: '12',
          tank: '530 cc',
          pressure: '250 Bar',
          shots: '120',
          barrel: '19,7"',
          weight: '4,7 kg'
        }
      },
    ]
  },
  {
    category: 'Accesorios',
    items: [
      { 
        name: 'Bomba Manual de Llenado', 
        price: 200, 
        image: 'catalogo/pcp/bomba-manual',
        specs: { 
          pressure: '200 Bar',
          type: 'Bomba manual'
        }
      },
    ]
  }
];

// Componente para mostrar imagen con fallback
function ProductImage({ publicId, alt, className }: { publicId: string; alt: string; className?: string }) {
  const imageUrl = getCloudinaryImage(publicId, { width: 400, quality: 'auto', format: 'auto' });
  
  // Si no hay cloud name configurado, mostrar placeholder
  if (!imageUrl) {
    return (
      <div className={className} style={{ 
        background: 'var(--green-deep)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--faint)',
        fontSize: '0.85rem'
      }}>
        <Icon name="target" style={{ width: 48, height: 48, opacity: 0.3 }} />
      </div>
    );
  }

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', background: '#1a1a1a' }}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <>
      <RevealObserver />
      <PageHero
        crumb="Catálogo"
        label="Armas y equipamiento"
        title={<>Catálogo <span className="hl" style={{ display: 'inline' }}>2025</span></>}
        sub="Armas de fuego y PCP de las mejores marcas. Precios actualizados y especificaciones técnicas. Consultanos por WhatsApp para reservar."
      />

      {/* Armas de Fuego */}
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
                  <div key={i} className="card" style={{ padding: '0', border: '1px solid var(--line)', borderRadius: 'var(--r)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Espacio para imagen */}
                    <ProductImage 
                      publicId={item.image} 
                      alt={item.name}
                      className="reveal"
                      style={{ aspectRatio: '4/3', width: '100%' }}
                    />
                    
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ marginBottom: '16px' }}>
                        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--faint)' }}>{item.brand}</span>
                        <h4 style={{ fontSize: '1.2rem', margin: '8px 0', minHeight: '50px' }}>{item.name}</h4>
                      </div>
                      <div style={{ marginBottom: '20px', flexGrow: 1 }}>
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ color: 'var(--faint)', textTransform: 'capitalize' }}>{key === 'caliber' ? 'Calibre' : key === 'type' ? 'Tipo' : key === 'barrel' ? 'Cañón' : key}:</span>
                            <span style={{ fontWeight: 500 }}>{value}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '2px solid var(--green-deep)' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green-bright)' }}>${item.price} <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>us.</span></span>
                        <a
                          href={waLink(`Hola! Me interesa el ${item.name} - ${item.brand} ($${item.price})`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--wa"
                          style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                        >
                          <Icon name="whatsapp" style={{ width: 16, height: 16 }} /> Consultar
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

      {/* PCP */}
      <section 
        id="pcp" 
        className="section section--tight" 
        style={{ 
          background: 'linear-gradient(180deg,#0d0f0e,var(--bg))', 
          borderTop: '1px solid var(--line)', 
          borderBottom: '1px solid var(--line)',
          scrollMarginTop: '100px'
        }}
      >
        <div className="container">
          <div className="shead center reveal">
            <span className="eyebrow eyebrow--center">Aire comprimido</span>
            <h2 className="section-title">Rifles <em>PCP</em></h2>
            <p className="lead mx-auto" style={{ maxWidth: '70ch' }}>
              Rifles de aire pre-comprimido de alta precisión. Ideales para tiro deportivo, caza menor y competición.
            </p>
          </div>

          {PCP_WEAPONS.map((section, sectionIdx) => (
            <div key={section.category} className="reveal" data-d={(sectionIdx % 2) + 1} style={{ marginBottom: '60px', marginTop: sectionIdx > 0 ? '40px' : '0' }}>
              <h3 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '28px', textAlign: 'center' }}>
                {section.category}
              </h3>
              <div className="grid cols-2" style={{ gap: '24px' }}>
                {section.items.map((item, i) => (
                  <div key={i} className="card" style={{ padding: '0', border: '1px solid var(--line)', borderRadius: 'var(--r)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Espacio para imagen */}
                    <ProductImage 
                      publicId={item.image} 
                      alt={item.name}
                      className="reveal"
                      style={{ aspectRatio: '16/9', width: '100%' }}
                    />
                    
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '1.4rem', margin: 0, flex: 1 }}>{item.name}</h4>
                        <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--green-bright)', whiteSpace: 'nowrap' }}>
                          ${item.price}<span style={{ fontSize: '0.9rem', fontWeight: 400 }}>us.</span>
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px', flexGrow: 1 }}>
                        {Object.entries(item.specs).map(([key, value]) => (
                          <div key={key} style={{ fontSize: '0.85rem' }}>
                            <span style={{ color: 'var(--faint)', display: 'block', textTransform: 'capitalize', marginBottom: '2px' }}>
                              {key === 'operation' ? 'Operación' : 
                               key === 'caliber' ? 'Calibre' : 
                               key === 'velocity' ? 'Velocidad' : 
                               key === 'energy' ? 'Energía' : 
                               key === 'capacity' ? 'Capacidad' : 
                               key === 'tank' ? 'Tanque' : 
                               key === 'pressure' ? 'Presión' : 
                               key === 'shots' ? 'Disparos' : 
                               key === 'barrel' ? 'Cañón' : 
                               key === 'weight' ? 'Peso' : key}:
                            </span>
                            <span style={{ fontWeight: 500, color: '#fff' }}>{value}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={waLink(`Hola! Me interesa el ${item.name} PCP ($${item.price})`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--wa btn--block"
                      >
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