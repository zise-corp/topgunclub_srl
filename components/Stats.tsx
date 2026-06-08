import Counter from './Counter';

const STATS = [
  { num: <><Counter to={8} /><em>+</em></>, label: 'Años formando tiradores' },
  { num: <><Counter to={1200} /><em>+</em></>, label: 'Alumnos entrenados' },
  { num: <><Counter to={3900} /><em>+</em></>, label: 'Seguidores en redes' },
  { num: <Counter to={6} />, label: 'Calibres disponibles' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Cifras del club">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div className="stat reveal" data-d={i + 1} key={i}>
              <div className="stat__num">{s.num}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
