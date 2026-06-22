import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';
import { waLink } from '@/lib/site';
import { getCloudinaryImage } from '@/lib/cloudinary';
import ProductCard from '@/components/ProductCard';

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
      { name: 'Rossi 7022',             brand: 'ROSSI',          price: 730,  image: 'ROSSI_7022_tkxl7x',              specs: { Calibre: '.22 LR', Tipo: 'Semiautomática' } },
      { name: 'Rossi Gallery BK',       brand: 'ROSSI',          price: 1045, image: 'ROSSI_GALLERY_BK_dg6prc',        specs: { Calibre: '.22 LR', Tipo: 'Corredera' } },
      { name: 'Rossi Gallery Wood',     brand: 'ROSSI',          price: 1155, image: 'ROSSI_GALLERY_WOOD_nvfwgg',      specs: { Calibre: '.22 LR', Tipo: 'Corredera' } },
      { name: 'Rossi Rio Bravo',        brand: 'ROSSI',          price: 1355, image: 'ROSSI_RIO_BRAVO_rs5zrm',         specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Rossi Goldgloss',        brand: 'ROSSI',          price: 1555, image: 'ROSSI_GOLDGLOSS_stgcma',         specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Rossi Rio Bravo Gold Mate', brand: 'ROSSI',       price: 1555, image: 'ROSSI_RIO_BRAVO_GOLD_MATE_n65xtf', specs: { Calibre: '.22 LR', Tipo: 'Palanca' } },
      { name: 'Mendoza Puma (Squad)',   brand: 'MENDOZA',        price: 1015, image: 'Mendoza_Puma_Squad_tgm0cw',      specs: { Tipo: 'Varilla',   Modelo: '1911' } },
      { name: 'Winchester Wildcat',     brand: 'WINCHESTER',     price: 1345, image: 'Winchester_Wildcat_hqgfdj',      specs: { Calibre: '.22 LR' } },
      { name: 'Kriss DMK22C FDE',       brand: 'KRISS USA',      price: 2640, image: 'KRISS_DMK22C_FDE_oodapo',        specs: { Calibre: '.22 LR' } },
      { name: 'Kriss DMK22C BK',        brand: 'KRISS USA',      price: 2420, image: 'KRISS_DMK22C_BK_pucyem',         specs: { Calibre: '.22 LR' } },
      { name: 'CZ 457 Training',        brand: 'CZ',             price: 2640, image: 'CZ_457_TRAINING_xdzpkr',         specs: { Calibre: '.22 LR' } },
    ],
  },
  {
    category: 'Escopetas',
    items: [
      { name: 'Boito Reunas SB',        brand: 'BOITO',          price: 630,  image: 'Boito_REUNA_SB_j6xjtj',                  specs: { Calibre: '12', Tipo: '2 tiros' } },
      { name: 'Boito Miura Supreme',    brand: 'BOITO',          price: 1540, image: 'Boito_MIURA_SUPREME_rnzpf4',              specs: { Calibre: '12' } },
      { name: 'Boito Miura Special',    brand: 'BOITO',          price: 1400, image: 'Boito_MIURA_SPECIAL_mh1myu',              specs: { Calibre: '12' } },
      { name: 'Uzkon T17/T16',          brand: 'UZKON',          price: 715,  image: 'Uzkon_T16_T17_lhqrjt',                   specs: { Calibre: '12' } },
      { name: 'Taurus ST12',            brand: 'TAURUS',         price: 1320, image: 'TAURUS_ST12_yrkwfa',                     specs: { Calibre: '12' } },
      { name: 'Hatsan Escort AS',       brand: 'HATSAN',         price: 1045, image: 'Hatsan_Escort_AS_qf2rbi',                specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Luxano',   brand: 'HATSAN',         price: 1540, image: 'Hatsan_Escort_Luxano_vrff31',            specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Supreme',  brand: 'HATSAN',         price: 1320, image: 'Hatsan_Escort_Supreme_seceji',           specs: { Calibre: '12' } },
      { name: 'Hatsan Escort Supreme Max', brand: 'HATSAN',      price: 1485, image: 'Hatsan_Escort_Supreme_Max_ribwdj',       specs: { Calibre: '12' } },
    ],
  },
];

const PCP_WEAPONS = [
  {
    category: 'Rifles PCP · Tiro por Tiro',
    items: [
      { name: 'Bull Boss QE',      price: 790,  image: 'BULL_BOSS_QE_gvvamx',                  specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1070 fps', Energía: '51 Jules',   Capacidad: '10', Tanque: '230 cc', Presión: '200 Bar', Disparos: '45',  Cañón: '23"'              } },
      { name: 'AT44-10 Tact QE',   price: 805,  image: 'AT_44_-_10_TACT_QE_fbexnr',            specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '10', Tanque: '180 cc', Presión: '200 Bar', Disparos: '55',  Cañón: '19,4"', Peso: '4,3 kg'  } },
      { name: 'Predator Bolt',     price: 880,  image: 'Hatsan_Predator_Bolt_eavxce',           specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1150 fps', Energía: '58 Jules',   Capacidad: '14', Tanque: '565 cc', Presión: '200 Bar', Disparos: '48',  Cañón: '23"',   Peso: '5,1 kg'  } },
      { name: 'Airmax Bolt',       price: 880,  image: 'Hatsan_AIR_MAX_BOLT_d4uul9',            specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1170 fps', Energía: '51 Jules',   Capacidad: '10', Tanque: '490 cc', Presión: '200 Bar', Disparos: '95',  Cañón: '23"',   Peso: '4,9 kg'  } },
      { name: 'Nova Tact Compact', price: 940,  image: 'Hatsan_NOVA_TACT_COMPACT_wbys1j',       specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1030 fps', Energía: '53,5 Jules', Capacidad: '10', Tanque: '500 cc', Presión: '250 Bar', Disparos: '150', Cañón: '23"',   Peso: '4,4 kg'  } },
      { name: 'Gladius',           price: 980,  image: 'Hatsan_GLADIUS_vdrewt',                 specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '60',  Cañón: '19,4"', Peso: '4,65 kg' } },
      { name: 'BT65SB-W',          price: 1100, image: 'Hatsan_BT65SB-W_f5in4n',               specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1180 fps', Energía: '61 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '28',  Cañón: '23"',   Peso: '4,3 kg'  } },
      { name: 'BT65SB Elite QE',   price: 1160, image: 'Hatsan_BT65SB_ELITE_QE_mxuvuw',        specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1180 fps', Energía: '61 Jules',   Capacidad: '10', Tanque: '255 cc', Presión: '200 Bar', Disparos: '28',  Cañón: '23"',   Peso: '4,4 kg'  } },
      { name: 'Nova Star',         price: 1175, image: 'Hatsan_NOVA_STAR_wirf6h',               specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1000 fps', Energía: '53,5 Jules', Capacidad: '12', Tanque: '480 cc', Presión: '250 Bar', Disparos: '100', Cañón: '23"',   Peso: '3,8 kg'  } },
      { name: 'Hercules Bully',    price: 1370, image: 'Hatsan_HERCULES_BULLY_khyuo5',          specs: { Operación: 'Tiro por tiro', Calibre: '5,5 mm', Velocidad: '1230 fps', Energía: '67 Jules',   Capacidad: '14', Tanque: '500 cc', Presión: '250 Bar', Disparos: '40',  Cañón: '23"',   Peso: '4,65 kg' } },
    ],
  },
  {
    category: 'Rifles PCP · Semiautomáticos',
    items: [
      { name: 'Galatian Tact Auto', price: 1175, image: 'Hatsan_GALATIAN_TACT_AUTO_fxpfmh', specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '950 fps',  Energía: '39,8 Jules', Capacidad: '12', Tanque: '255 cc', Presión: '200 Bar', Disparos: '50',  Cañón: '19,7"', Peso: '4,15 kg' } },
      { name: 'Barrage',            price: 1450, image: 'Hatsan_BARRAGE_wzremd',            specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '12', Tanque: '500 cc', Presión: '250 Bar', Disparos: '120', Cañón: '19,7"', Peso: '4,62 kg' } },
      { name: 'Bull Master',        price: 1450, image: 'Hatsan_BULL_MASTER_shtsl4',        specs: { Operación: 'Semiautomático', Calibre: '5,5 mm', Velocidad: '970 fps',  Energía: '42 Jules',   Capacidad: '12', Tanque: '530 cc', Presión: '250 Bar', Disparos: '120', Cañón: '19,7"', Peso: '4,7 kg'  } },
    ],
  },
  {
    category: 'Accesorios',
    items: [
      { name: 'Bomba Manual de Llenado', price: 200, image: 'Bomba_Manual_dhxb6o', specs: { Presión: '200 Bar', Tipo: 'Bomba manual' } },
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CatalogoPage() {
  return (
    <>
      <RevealObserver />

      {/* Hover + zoom-in cursor styles — no JS needed */}
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
        .prod-img:hover  { transform: scale(1.03); }
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
                {section.items.map((item, i) => {
                  const info = BRAND_COUNTRY[item.brand];
                  return (
                    <ProductCard
                      key={i}
                      name={item.name}
                      brand={item.brand}
                      brandCode={info?.code}
                      brandCountry={info?.country}
                      price={item.price}
                      imageUrl={getCloudinaryImage(item.image, { width: 600, quality: 'auto', format: 'auto' })}
                      alt={item.name}
                      specs={item.specs as unknown as Record<string, string>}
                      waHref={waLink(`Hola! Me interesa el ${item.name} - ${item.brand} ($${item.price})`)}
                      aspectRatio="4/3"
                      layout="grid"
                    />
                  );
                })}
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
                  <ProductCard
                    key={i}
                    name={item.name}
                    brandCode="TR"
                    brandCountry="Turquía"
                    price={item.price}
                    imageUrl={getCloudinaryImage(item.image, { width: 800, quality: 'auto', format: 'auto' })}
                    alt={item.name}
                    specs={item.specs as unknown as Record<string, string>}
                    waHref={waLink(`Hola! Me interesa el ${item.name} PCP ($${item.price})`)}
                    aspectRatio="16/7"
                    layout="wide"
                  />
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