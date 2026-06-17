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
    title: 'Curso de uso y manejo seguro de armas de fuego',
    text: 'Formación segura y progresiva con instructores certificados. De cero a tirador competente bajo la Ley 400.',
    href: '/cursos',
    img: '/assets/piece-escuela.png',
  },
  {
    icon: 'shield',
    title: 'Curso Vacacional de Airsoft',
    text: 'Experiencias y entrenamiento táctico de airsoft para grupos, amigos y equipos. Diversión con disciplina.',
    href: '/cursos#airsoft',
    ph: 'Airsoft táctico',
  },
  {
    icon: 'target',
    title: 'Curso Vacacional De PCP',
    text: 'Programas estructurados por niveles para armas de aire comprimido. Precisión, técnica y seguridad en cada disparo.',
    href: '/cursos',
    ph: 'Curso PCP',
  },
  {
    icon: 'star',
    title: 'Próximamente Curso Vacacional de Arco y Flecha',
    text: 'Una nueva disciplina que se suma a nuestro club. Precisión, concentración y técnica tradicional. ¡Muy pronto disponible!',
    href: '/contacto',
    ph: 'Arco y flecha',
  },
  {
    icon: 'clock',
    title: 'Sesiones',
    text: 'Entra a la línea de tiro y siente la adrenalina en su estado más puro. Sesiones guiadas por profesionales, Una experiencia intensa, segura e inolvidable.',
    href: '/cursos',
    ph: 'Polígono bajo techo',
  },
  {
    icon: 'users',
    title: 'Alquiler para cumpleaños y eventos especiales',
    text: 'Ambientes amplios para empresas, cumpleaños, despedidas y team building. El lugar perfecto para cualquier evento.',
    href: '/eventos',
    ph: 'Eventos / espacio',
  },
  {
    icon: 'star',
    title: 'Torneos Multidisciplinarios',
    text: 'Competencias de tiro deportivo, airsoft y PCP. Demostrá tu nivel y competí con otros tiradores en Cochabamba.',
    href: '/contacto',
    ph: 'Torneos',
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
            Tiro deportivo con armas de fuego, Airsoft, PCP y más — todo en un solo lugar, con la seguridad y el
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