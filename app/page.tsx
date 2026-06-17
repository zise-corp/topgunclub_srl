import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Servicios from '@/components/Servicios';
import EscuelaTeaser from '@/components/EscuelaTeaser';
import CursoDestacado from '@/components/CursoDestacado';
import Testimonios from '@/components/Testimonios';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Top Gun Club SRL · Polígono de tiro Multifuncional en Cochabamba',
  description:
    'Top Gun Club SRL: Polígono de tiro deportivo bajo techo en Cochabamba, Bolivia. Armas de fuego, Airsoft, PCP, Torneos, Espacio para cumpleaños.',
  openGraph: {
    title: 'Top Gun Club SRL · Polígono de tiro Deportivo',
    description: 'El lugar perfecto para cualquier evento. Ambientes amplios, comida, tiro deportivo y más.',
  },
};

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <Stats />
      <Servicios />
      <EscuelaTeaser />
      <CursoDestacado />
      <Testimonios />
      <FinalCta
        title="¿Listo para empezar? Reserva tu cupo hoy"
        text="Escríbenos por WhatsApp y te asesoramos sobre cursos, sesiones de tiro o el alquiler del espacio para tu evento."
        msg="Hola! Quiero reservar mi cupo en Top Gun Club"
      />
    </>
  );
}
