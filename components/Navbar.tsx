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
  // ✅ Always start empty — read real hash only after mount (client-only)
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  // Sync hash on mount and on pathname change
  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

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
              src="https://res.cloudinary.com/dj5yikcc4/image/upload/v1781744683/Logo_cdzhn9.png"
              alt="Top Gun Club"
              height={65}
              width={260}
              style={{ width: 'auto', height: '65px' }}
              priority
            />
          </Link>

          <div className="nav__links">
            {NAV_ITEMS.map(it => {
              if (it.children) {
                return (
                  <div
                    key={it.label}
                    className="nav__dropdown"
                    style={{ position: 'relative' }}
                    onMouseEnter={(e) => {
                      const menu = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                      if (menu) {
                        menu.style.opacity = '1';
                        menu.style.visibility = 'visible';
                        menu.style.transform = 'translateY(0)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const menu = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                      if (menu) {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.transform = 'translateY(10px)';
                      }
                    }}
                  >
                    <Link href={it.href} className={isActive(it.href) ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {it.label}
                      <Icon name="chevron" style={{ width: 14, height: 14 }} />
                    </Link>
                    <div
                      className="dropdown-menu"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '8px',
                        background: 'var(--bg, #0a0a0a)',
                        border: '1px solid var(--line, #333)',
                        borderRadius: '8px',
                        padding: '8px 0',
                        minWidth: '200px',
                        opacity: 0,
                        visibility: 'hidden',
                        transform: 'translateY(10px)',
                        transition: 'all 0.2s ease',
                        zIndex: 100,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                      }}
                    >
                      {it.children.map(child => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={isActive(child.href) ? 'active' : ''}
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            fontSize: '0.9rem',
                            color: 'var(--faint, #aaa)',
                            textDecoration: 'none',
                            transition: 'background 0.2s, color 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--green-deep, #1a2e22)';
                            e.currentTarget.style.color = 'var(--green-bright, #4ade80)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--faint, #aaa)';
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={it.label} href={it.href} className={isActive(it.href) ? 'active' : ''}>
                  {it.label}
                </Link>
              );
            })}
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
        {NAV_ITEMS.map(it => {
          if (it.children) {
            return (
              <div key={it.label} style={{ padding: '0 0 0 16px', marginBottom: '16px' }}>
                <div style={{ fontWeight: 600, marginBottom: 8, color: 'var(--green-bright, #4ade80)' }}>{it.label}</div>
                {it.children.map(child => (
                  <Link key={child.label} href={child.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: '0.95rem', color: 'var(--faint, #aaa)', textDecoration: 'none' }}>
                    {child.label} <span>›</span>
                  </Link>
                ))}
              </div>
            );
          }
          return (
            <Link key={it.label} href={it.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '12px 0', textDecoration: 'none' }}>
              {it.label} <span>›</span>
            </Link>
          );
        })}
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