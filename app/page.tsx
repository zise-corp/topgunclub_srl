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
  title: 'Top Gun Club SRL · Escuela de Tiro Deportivo en Cochabamba',
  description:
    'Top Gun Club SRL: escuela y polígono de tiro deportivo bajo techo en Cochabamba, Bolivia. Cursos, airsoft, eventos y servicio de comida. Entrenamiento seguro cumpliendo la Ley 400.',
  openGraph: {
    title: 'Top Gun Club SRL · Escuela de Tiro Deportivo',
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
        text="Escríbenos por WhatsApp y te asesoramos sobre cursos, sesiones de tiro, airsoft o el alquiler del espacio para tu evento."
        msg="Hola! Quiero reservar mi cupo en Top Gun Club"
      />
    </>
  );
}
