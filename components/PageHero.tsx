import type { ReactNode } from 'react';
import Link from 'next/link';
import Ph from './Ph';

interface PageHeroProps {
  crumb: string;
  title: ReactNode;
  sub?: string;
  label?: string;
}

export default function PageHero({ crumb, title, sub, label }: PageHeroProps) {
  return (
    <header className="page-hero grain">
      <Ph label={label ?? ''} withTarget />
      <div className="page-hero__overlay" />
      <div className="container">
        <nav className="crumbs reveal in">
          <Link href="/">Inicio</Link>
          &nbsp;/&nbsp; <b>{crumb}</b>
        </nav>
        <h1 className="reveal in" data-d="1">{title}</h1>
        {sub && (
          <p className="lead reveal in" data-d="2" style={{ maxWidth: '58ch' }}>
            {sub}
          </p>
        )}
      </div>
    </header>
  );
}
