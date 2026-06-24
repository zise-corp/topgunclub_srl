'use client';
import { useState } from 'react';
import { waLink } from '@/lib/site';
import Icon from './Icon';

const INTERESES = [
  'Curso de Armas de Fuego',
  'Curso de Airsoft',
  'Curso de PCP',
  'Arco y Flecha (próximamente)',
  'Cumpleaños infantiles',
  'Torneos mensuales',
  'Sesión de práctica libre',
  'Alquiler de espacio / Evento',
  'Servicio de comida',
  'Otra consulta',
] as const;

interface FormState {
  nombre: string;
  telefono: string;
  interes: string;
  mensaje: string;
}

interface Errors {
  nombre?: string;
  telefono?: string;
}

export default function ContactForm() {
  const [f, setF] = useState<FormState>({ nombre: '', telefono: '', interes: INTERESES[0], mensaje: '' });
  const [errs, setErrs] = useState<Errors>({});

  const set = (k: keyof FormState, v: string) => setF(s => ({ ...s, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!f.nombre.trim()) er.nombre = 'Ingresá tu nombre';
    if (!f.telefono.trim() || f.telefono.replace(/\D/g, '').length < 6) er.telefono = 'Ingresá un teléfono válido';
    setErrs(er);
    if (Object.keys(er).length) return;
    const msg = `Hola! Soy ${f.nombre}.\nInterés: ${f.interes}.\nTeléfono: ${f.telefono}.\n${f.mensaje ? 'Mensaje: ' + f.mensaje : ''}`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  return (
    <form className="form-card reveal" data-d="2" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="nombre">Nombre*</label>
        <input
          id="nombre"
          className={errs.nombre ? 'err' : ''}
          value={f.nombre}
          onChange={e => set('nombre', e.target.value)}
          placeholder="Tu nombre"
        />
        <span className={'msg' + (errs.nombre ? ' show' : '')}>{errs.nombre}</span>
      </div>
      <div className="field">
        <label htmlFor="tel">Teléfono / WhatsApp*</label>
        <input
          id="tel"
          inputMode="tel"
          className={errs.telefono ? 'err' : ''}
          value={f.telefono}
          onChange={e => set('telefono', e.target.value)}
          placeholder="Ej. 700 00000"
        />
        <span className={'msg' + (errs.telefono ? ' show' : '')}>{errs.telefono}</span>
      </div>
      <div className="field">
        <label htmlFor="int">Me interesa</label>
        <select id="int" value={f.interes} onChange={e => set('interes', e.target.value)}>
          {INTERESES.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="msg">Mensaje (opcional)</label>
        <textarea
          id="msg"
          rows={4}
          value={f.mensaje}
          onChange={e => set('mensaje', e.target.value)}
          placeholder="Contanos qué necesitás..."
        />
      </div>
      <button type="submit" className="btn btn--wa btn--block btn--lg">
        <Icon name="whatsapp" /> Enviar por WhatsApp
      </button>
      <p style={{ color: 'var(--faint)', fontSize: '.82rem', marginTop: 12, textAlign: 'center' }}>
        Se abrirá WhatsApp con tu mensaje listo para enviar.
      </p>
    </form>
  );
}