import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Servicios from '@/components/Servicios';
import Sesiones from '@/components/Sesiones';
import EscuelaTeaser from '@/components/EscuelaTeaser';
import Testimonios from '@/components/Testimonios';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Polígono de Tiro en Cochabamba, Bolivia | Top Gun Club SRL',
  description:
    'Polígono y campo de tiro deportivo bajo techo en Cochabamba, Bolivia. Cursos de armas de fuego, airsoft, rifles PCP, torneos y cumpleaños. Reservá por WhatsApp.',
  keywords: ['polígono de tiro Cochabamba', 'campo de tiro Cochabamba', 'campo de tiro Bolivia', 'tiro deportivo Bolivia', 'Top Gun Club Cochabamba'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Top Gun Club SRL · Polígono de tiro Deportivo',
    description: 'El lugar perfecto para cualquier evento. Ambientes amplios, comida, tiro deportivo y más.',
    locale: 'es_BO',
    type: 'website',
    siteName: 'Top Gun Club SRL',
    url: 'https://topgunclub.com.bo',
    images: [
      {
        url: 'https://res.cloudinary.com/dj5yikcc4/image/upload/c_pad,w_1200,h_630,b_rgb:0A0A0A/v1781744683/Logo_cdzhn9.png',
        width: 1200,
        height: 630,
        alt: 'Top Gun Club SRL',
        type: 'image/png',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <Stats />
      <Servicios />
      <Sesiones />
      <EscuelaTeaser />
      <Testimonios />
      <FinalCta
        title="¿Listo para empezar? Reserva tu cupo hoy"
        text="Escríbenos por WhatsApp y te asesoramos sobre cursos, sesiones de tiro o el alquiler del espacio para tu evento."
        msg="Hola! Quiero reservar mi cupo en Top Gun Club"
      />
    </>
  );
}