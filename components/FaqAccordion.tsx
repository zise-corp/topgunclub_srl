'use client';
import { useState, useRef } from 'react';
import Icon from './Icon';

const FAQS = [
  {
    q: '¿Necesito experiencia previa para empezar?',
    a: 'No. Tenemos programas desde nivel cero en Armas de Fuego, Airsoft y PCP, pensados para quienes nunca han tocado un arma. Nuestros instructores te guían paso a paso en un entorno seguro y controlado.',
  },
  {
    q: '¿Cuál es el requisito de edad?',
    a: 'La actividad es para personas mayores de edad. Para casos particulares (menores acompañados en cumpleaños infantiles o grupos), consultanos por WhatsApp y te indicamos las condiciones.',
  },
  {
    q: '¿Es seguro? ¿Cómo manejan la seguridad?',
    a: 'La seguridad es nuestro valor central. Toda actividad cumple la Ley 400, con protocolo estricto, equipo de protección obligatorio y supervisión permanente de instructores certificados.',
  },
  {
    q: '¿Qué necesito llevar?',
    a: 'Solo tus ganas de aprender. La protección auditiva y visual, así como el equipo necesario, se provee en el polígono. Te recomendamos ropa cómoda y calzado cerrado.',
  },
  {
    q: '¿Puedo organizar un cumpleaños para mi hijo/a?',
    a: '¡Claro! Ofrecemos paquetes de cumpleaños infantiles con actividades adaptadas (PCP, airsoft suave, arco), supervisadas por instructores certificados. Incluye espacio para celebración y opción de catering. Pedí tu cotización por WhatsApp.',
  },
  {
    q: '¿Cómo funcionan los torneos mensuales?',
    a: 'Una vez al mes realizamos torneos oficiales exclusivos para alumnos que ya completaron un curso con nosotros. Hay competencias en armas de fuego, airsoft y PCP, con premios y ranking mensual. Escribinos para inscribirte.',
  },
  {
    q: '¿Cuándo inician los cursos de Arco y Flecha?',
    a: 'El curso de Arco y Flecha está próximamente. Si querés ser de los primeros en enterarte cuando abra la inscripción, escribinos por WhatsApp y te avisamos apenas tengamos fecha.',
  },
  {
    q: '¿Cómo reservo?',
    a: 'La forma más rápida es por WhatsApp. Escribinos, te asesoramos según lo que buscás (curso, cumpleaños, torneo o práctica libre) y coordinamos día y horario.',
  },
] as const;

function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={'faq__item' + (open ? ' open' : '')}>
      <button className="faq__q" onClick={onClick} aria-expanded={open}>
        {q}
        <span className="pm">
          <Icon name="plus" style={{ width: 16, height: 16 }} />
        </span>
      </button>
      <div
        className="faq__a"
        style={{ maxHeight: open ? (ref.current ? ref.current.scrollHeight + 'px' : '400px') : '0px' }}
      >
        <div ref={ref}>{a}</div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="faq reveal" data-d="2">
      {FAQS.map((it, i) => (
        <FaqItem
          key={i}
          q={it.q}
          a={it.a}
          open={open === i}
          onClick={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}