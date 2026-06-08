import type { Metadata } from 'next';
import GaleriaClient from '@/components/GaleriaClient';
import PageHero from '@/components/PageHero';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Galería · Top Gun Club SRL Cochabamba',
  description:
    'Galería de Top Gun Club: instalaciones del polígono bajo techo, sesiones de tiro deportivo, experiencias de airsoft y eventos en Cochabamba, Bolivia.',
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        crumb="Galería"
        label="Instalaciones · sesiones · eventos"
        title={<><span className="hl" style={{ display: 'inline' }}>Galería</span> Top Gun</>}
        sub="Un vistazo a nuestras instalaciones, sesiones de tiro, experiencias de airsoft y eventos. Filtrá por categoría y explorá."
      />
      {/* GaleriaClient incluye su propio RevealObserver */}
      <GaleriaClient />
      <FinalCta
        title="¿Querés vivirlo en persona?"
        text="Reservá tu sesión, curso o evento y sumate a la comunidad Top Gun Club."
        msg="Hola! Vi la galería y quiero reservar / consultar en Top Gun Club"
      />
    </>
  );
}
