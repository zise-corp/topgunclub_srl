'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, waLink } from '@/lib/site';
import Icon from './Icon';

// Collect all anchor IDs from nav children (e.g. "#airsoft" from "/cursos#airsoft")
const SECTION_IDS = NAV_ITEMS.flatMap(it =>
  (it.children ?? [])
    .filter(c => c.href.includes('#'))
    .map(c => c.href.split('#')[1])
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Sync hash on route change
  useEffect(() => {
    setHash(window.location.hash);
  }, [pathname]);

  // IntersectionObserver: auto-detect active section while scrolling
  useEffect(() => {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    const margin = -(navH + 16);

    // Track which sections are currently intersecting
    const visible = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        // Pick the section whose top is closest to (and below) the navbar
        const active = [...visible.entries()].reduce((a, b) =>
          Math.abs(a[1]) < Math.abs(b[1]) ? a : b
        );
        setHash(`#${active[0]}`);
      },
      {
        rootMargin: `${margin}px 0px -40% 0px`,
        threshold: 0,
      }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [pathname]);

  // hashchange for back/forward navigation
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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

  const isActive = (href: string) => {
    if (href.includes('#')) {
      const [path, h] = href.split('#');
      return pathname === path && hash === `#${h}`;
    }
    return pathname === href && hash === '';
  };

  const isParentActive = (item: typeof NAV_ITEMS[number]) => {
    if (isActive(item.href)) return true;
    return item.children?.some(child => isActive(child.href)) ?? false;
  };

  // Cierra el drawer y luego hace scroll al anchor (evita conflicto con animación)
  const handleDrawerNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hasHash = href.includes('#');
    if (!hasHash) { setOpen(false); return; }
    e.preventDefault();
    setOpen(false);
    const [path, hash] = href.split('#');
    const currentPath = window.location.pathname;
    const navigateAndScroll = () => {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
          const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 60);
    };
    if (currentPath === path || (path === '' && currentPath === '/')) {
      navigateAndScroll();
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="container">
          <Link className="nav__brand" href="/" aria-label="Top Gun Club inicio">
            <Image
              src="/images/logoTopGunClub.png"
              alt="Top Gun Club"
              height={1024}
              width={1536}
              quality={100}
              style={{ width: 'auto', height: '52px', maxHeight: 'none', display: 'block', marginTop: '3px' }}
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
                    onMouseEnter={e => {
                      const menu = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                      if (menu) { menu.style.opacity = '1'; menu.style.visibility = 'visible'; menu.style.transform = 'translateY(0)'; }
                    }}
                    onMouseLeave={e => {
                      const menu = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                      if (menu) { menu.style.opacity = '0'; menu.style.visibility = 'hidden'; menu.style.transform = 'translateY(10px)'; }
                    }}
                  >
                    <Link href={it.href} className={isParentActive(it) ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {it.label}
                      <Icon name="chevron" style={{ width: 14, height: 14 }} />
                    </Link>
                    <div
                      className="dropdown-menu"
                      style={{
                        position: 'absolute', top: '100%', left: 0, marginTop: '8px',
                        background: 'var(--bg)', border: '1px solid var(--line)',
                        borderRadius: '8px', padding: '8px 0', minWidth: '200px',
                        opacity: 0, visibility: 'hidden', transform: 'translateY(10px)',
                        transition: 'all 0.2s ease', zIndex: 100,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                      }}
                    >
                      {it.children.map(child => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '8px',
                              padding: '10px 20px', fontSize: '0.9rem',
                              color: childActive ? 'var(--green-bright)' : 'var(--faint)',
                              background: childActive ? 'var(--green-deep)' : 'transparent',
                              textDecoration: 'none', transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => {
                              if (!childActive) { e.currentTarget.style.background = 'var(--green-deep)'; e.currentTarget.style.color = 'var(--green-bright)'; }
                            }}
                            onMouseLeave={e => {
                              if (!childActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--faint)'; }
                            }}
                          >
                            {childActive && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green-bright)', flexShrink: 0 }} />}
                            {child.label}
                          </Link>
                        );
                      })}
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
                <div style={{ fontWeight: 600, marginBottom: 8, color: 'var(--green-bright)' }}>{it.label}</div>
                {it.children.map(child => (
                  <a key={child.label} href={child.href}
                    onClick={e => handleDrawerNav(e, child.href)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 0', fontSize: '0.95rem', color: isActive(child.href) ? 'var(--green-bright)' : 'var(--faint)', textDecoration: 'none' }}>
                    {isActive(child.href) && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green-bright)', flexShrink: 0 }} />}
                    {child.label} {!isActive(child.href) && <span>›</span>}
                  </a>
                ))}
              </div>
            );
          }
          return (
            <a key={it.label} href={it.href}
              onClick={e => handleDrawerNav(e, it.href)}
              style={{ display: 'block', padding: '12px 0', textDecoration: 'none', color: isActive(it.href) ? 'var(--green-bright)' : 'inherit' }}>
              {it.label} <span>›</span>
            </a>
          );
        })}
        <a
          href={waLink('Hola! Quiero reservar / consultar en Top Gun Club')}
          target="_blank" rel="noopener noreferrer"
          className="btn btn--wa btn--lg btn--block"
          onClick={() => setOpen(false)}
        >
          <Icon name="whatsapp" /> Reservar por WhatsApp
        </a>
      </div>
    </>
  );
}
