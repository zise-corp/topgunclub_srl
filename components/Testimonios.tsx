'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

const TESTIMONIALS = [
  {
    q: 'Empecé sin saber absolutamente nada y en una semana ya manejaba el arma con total seguridad. Los instructores son pacientes y muy profesionales.',
    who: 'Carlos M.',
    role: 'Alumno · Curso de 1 semana',
  },
  {
    q: 'Hicimos el team building de la empresa acá. El espacio es amplio, la comida excelente y la experiencia de tiro fue inolvidable para todo el equipo.',
    who: 'Daniela R.',
    role: 'Evento corporativo',
  },
  {
    q: 'El polígono es impecable y muy seguro. Se nota que cumplen la Ley 400 al pie de la letra. Mi lugar fijo para practicar en Cochabamba.',
    who: 'Jorge V.',
    role: 'Práctica libre',
  },
  {
    q: 'La experiencia de airsoft con mis amigos fue brutal. Buen equipamiento, buen ambiente y todo súper organizado. Volvemos seguro.',
    who: 'Andrea S.',
    role: 'Airsoft · grupo',
  },
];

export default function Testimonios() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(180deg,var(--bg),#0d0f0e)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="container">
        <div className="shead center reveal">
          <span className="eyebrow eyebrow--center">Reseñas</span>
          <h2 className="section-title">
            Lo que dicen <em>nuestros</em> alumnos
          </h2>
        </div>
        <div className="tst reveal" data-d="2">
          <div className="tst__track">
            {TESTIMONIALS.map((t, idx) => (
              <figure className={'tst__item' + (idx === i ? ' on' : '')} key={idx}>
                <div className="tst__stars">
                  {[0, 1, 2, 3, 4].map(s => <Icon key={s} name="star" />)}
                </div>
                <blockquote className="tst__quote">"{t.q}"</blockquote>
                <figcaption className="tst__who">
                  {t.who}
                  <small>{t.role}</small>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="tst__dots">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                className={idx === i ? 'on' : ''}
                aria-label={`Reseña ${idx + 1}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
