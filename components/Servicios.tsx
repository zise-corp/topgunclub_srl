import Link from 'next/link';
import Image from 'next/image';
import Icon, { type IconName } from './Icon';
import Ph from './Ph';

const SERVICES: {
  icon: IconName;
  title: string;
  text: string;
  href: string;
  img?: string;
  ph?: string;
}[] = [
  {
    icon: 'target',
    title: 'Escuela de Tiro Deportivo',
    text: 'Formación segura y progresiva con instructores certificados. De cero a tirador competente bajo la Ley 400.',
    href: '/escuela',
    img: '/assets/piece-escuela.png',
  },
  {
    icon: 'calendar',
    title: 'Cursos Intensivos',
    text: 'Programas estructurados por niveles. Destaca el Curso de 1 semana: de novato a experto.',
    href: '/cursos',
    img: '/assets/piece-experto.png',
  },
  {
    icon: 'shield',
    title: 'Entrenamiento Airsoft',
    text: 'Experiencias y entrenamiento táctico de airsoft para grupos, amigos y equipos. Diversión con disciplina.',
    href: '/cursos#airsoft',
    ph: 'Airsoft táctico',
  },
  {
    icon: 'users',
    title: 'Alquiler para Eventos',
    text: 'Ambientes amplios para empresas, cumpleaños, despedidas y team building. El lugar perfecto para cualquier evento.',
    href: '/eventos',
    ph: 'Eventos / espacio',
  },
  {
    icon: 'food',
    title: 'Servicio de Comida',
    text: 'Cocina y catering en el club para acompañar tu sesión, evento o jornada de práctica.',
    href: '/eventos#comida',
    ph: 'Servicio de comida',
  },
  {
    icon: 'target',
    title: 'Polígono / Práctica Libre',
    text: 'Polígono bajo techo con distintas distancias y disciplinas. Práctica libre con equipo de protección.',
    href: '/escuela#poligono',
    ph: 'Polígono bajo techo',
  },
];

export default function Servicios() {
  return (
    <section className="section grain" id="servicios">
      <div className="container">
        <div className="shead reveal">
          <span className="eyebrow">Lo que ofrecemos</span>
          <h2 className="section-title">
            Un club, <em>muchas</em> formas de vivirlo
          </h2>
          <p className="lead">
            Tiro deportivo, airsoft, eventos y más — todo en un solo lugar, con la seguridad y el
            profesionalismo como base de cada experiencia.
          </p>
        </div>
        <div className="grid cols-3">
          {SERVICES.map((s, i) => (
            <Link className="card svc reveal" data-d={(i % 3) + 1} href={s.href} key={s.title}>
              <div className="svc__img">
                <span className="badge">
                  <Icon name={s.icon} />
                </span>
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width:900px) 100vw, 33vw"
                  />
                ) : (
                  <Ph label={s.ph} style={{ position: 'absolute', inset: 0 }} />
                )}
              </div>
              <div className="svc__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="svc__link">
                  Conocer más <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
