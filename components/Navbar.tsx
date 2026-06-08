'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, waLink } from '@/lib/site';
import Icon from './Icon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setHash(window.location.hash);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href.includes('#')) {
      const [path, h] = href.split('#');
      return pathname === path && hash === `#${h}`;
    }
    return pathname === href && hash === '';
  };

  return (
    <>
      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="container">
          <Link className="nav__brand" href="/" aria-label="Top Gun Club inicio">
            <Image
              src="/assets/logo-white.png"
              alt="Top Gun Club"
              height={42}
              width={170}
              style={{ width: 'auto', height: '42px' }}
              priority
            />
            <span style={{ lineHeight: 1 }}>
              <b>Top Gun</b>
              <span>Club SRL</span>
            </span>
          </Link>

          <div className="nav__links">
            {NAV_ITEMS.map(it => (
              <Link key={it.label} href={it.href} className={isActive(it.href) ? 'active' : ''}>
                {it.label}
              </Link>
            ))}
          </div>

          <div className="nav__cta">
            <a
              href={waLink('Hola! Quiero reservar / consultar en Top Gun Club')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--wa-text"
            >
              <Icon name="whatsapp" /> Reservar
            </a>
            <button
              className={'nav__burger' + (open ? ' open' : '')}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen(o => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={'drawer' + (open ? ' open' : '')} aria-hidden={!open}>
        {NAV_ITEMS.map(it => (
          <Link key={it.label} href={it.href} onClick={() => setOpen(false)}>
            {it.label} <span>›</span>
          </Link>
        ))}
        <a
          href={waLink('Hola! Quiero reservar / consultar en Top Gun Club')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--wa btn--lg btn--block"
          onClick={() => setOpen(false)}
        >
          <Icon name="whatsapp" /> Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
