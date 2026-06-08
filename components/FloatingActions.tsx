'use client';
import { useState, useEffect } from 'react';
import { waLink } from '@/lib/site';
import Icon from './Icon';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        className={'totop' + (show ? ' show' : '')}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="up" />
      </button>
      <a
        className="wa-float"
        href={waLink('Hola! Estoy interesad@ en los servicios de Top Gun Club')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <Icon name="whatsapp" />
      </a>
    </>
  );
}
