'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  angle: (i / 18) * 360,
  dist: 60 + Math.random() * 120,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 0.08,
  duration: 0.3 + Math.random() * 0.3,
}));

async function playGunshot() {
  try {
    const audio = new Audio('/sounds/universfield-gunshot-352466.mp3');
    audio.volume = 1;
    await audio.play();
  } catch {}
}

const ANIM_IMAGES = ['/images/arma.png', '/images/bala.png', '/images/hoyo.png'];

export default function CatalogoIntro() {
  const [phase, setPhase] = useState<'gun' | 'bullet' | 'hole' | 'done'>('gun');
  const [ready, setReady] = useState(false);
  const [isMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );
  const firedRef = useRef(false);

  // Preload the animation frames before starting the timeline. Otherwise, on a
  // cold (uncached) deployed load the fixed timers fire before the images finish
  // downloading and the bullet/hole frames render blank. A fallback timeout
  // ensures the animation still plays if the network is slow or an image fails.
  useEffect(() => {
    if (isMobile) return;
    let cancelled = false;
    let loaded = 0;
    const done = () => {
      if (cancelled) return;
      loaded += 1;
      if (loaded >= ANIM_IMAGES.length) setReady(true);
    };
    ANIM_IMAGES.forEach(src => {
      const img = new window.Image();
      img.onload = done;
      img.onerror = done;
      img.src = src;
    });
    const fallback = setTimeout(() => { if (!cancelled) setReady(true); }, 1500);
    return () => { cancelled = true; clearTimeout(fallback); };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || !ready) return;
    const t1 = setTimeout(() => setPhase('bullet'), 200);
    const t2 = setTimeout(() => setPhase('hole'),   380);
    const t3 = setTimeout(() => setPhase('done'),  1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [isMobile, ready]);

  useEffect(() => {
    if (phase === 'bullet' && !firedRef.current) {
      firedRef.current = true;
      playGunshot();
    }
  }, [phase]);

  if (isMobile || phase === 'done') return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, overflow: 'hidden' }}>
      <style>{`
        @keyframes gun-in {
          from { opacity: 0; transform: translate(-50%,-50%) scale(0.85); }
          to   { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
        @keyframes gun-recoil {
          0%   { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
          25%  { transform: translate(calc(-50% + 3px),calc(-50% - 4px)) scale(1.02) rotate(-1.5deg); }
          50%  { transform: translate(calc(-50% - 2px),calc(-50% + 2px)) scale(0.98) rotate(1deg); }
          75%  { transform: translate(calc(-50% + 1px),calc(-50% - 1px)) scale(1) rotate(-0.5deg); }
          100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
        }
        @keyframes bullet-zoom {
          from { opacity: 1; transform: translate(-50%,-50%) scale(0.1); }
          to   { opacity: 0; transform: translate(-50%,-50%) scale(8); }
        }
        @keyframes hole-appear {
          0%   { opacity: 0; transform: translate(-50%,-50%) scale(0.15); }
          40%  { opacity: 1; transform: translate(-50%,-50%) scale(1.1); }
          70%  { transform: translate(-50%,-50%) scale(0.97); }
          100% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
        @keyframes shake {
          0%,100% { transform: translate(0,0); }
          20%  { transform: translate(-7px, 4px); }
          40%  { transform: translate(6px,-5px); }
          60%  { transform: translate(-4px, 5px); }
          80%  { transform: translate(4px,-2px); }
        }
        @keyframes fade-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes crosshair-in {
          from { opacity: 0; transform: translate(-50%,-50%) scale(0.5); }
          to   { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
        @keyframes particle {
          0%   { opacity: 1; transform: translate(-50%,-50%) translate(0,0) scale(1); }
          100% { opacity: 0; transform: translate(-50%,-50%) translate(var(--dx),var(--dy)) scale(0.2); }
        }
      `}</style>

      {/* Fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(4,6,5,0.55)',
        animation: phase === 'hole' ? 'fade-out 0.85s ease 0.5s both' : 'none',
      }} />

      {/* Shake wrapper */}
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        animation: phase === 'hole' ? 'shake 0.28s ease' : 'none',
      }}>

        {/* CROSSHAIR */}
        {phase === 'gun' && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 'clamp(40px, 5vw, 64px)', height: 'clamp(40px, 5vw, 64px)',
            pointerEvents: 'none', zIndex: 10,
            animation: 'crosshair-in 0.2s ease both',
          }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.85)', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.85)', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'clamp(5px,0.5vw,8px)', height: 'clamp(5px,0.5vw,8px)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.85)' }} />
          </div>
        )}

        {/* PARTÍCULAS */}
        {phase === 'hole' && PARTICLES.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const dx = Math.cos(rad) * p.dist;
          const dy = Math.sin(rad) * p.dist;
          return (
            <div key={i} style={{
              position: 'absolute', top: '55%', left: '53%',
              width: p.size, height: p.size,
              borderRadius: '50%', background: '#c8c8c8',
              pointerEvents: 'none', zIndex: 6,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              animationName: 'particle',
              animationTimingFunction: 'ease-out',
              animationFillMode: 'both',
              '--dx': `${dx}px`, '--dy': `${dy}px`,
            } as React.CSSProperties} />
          );
        })}

        {/* ARMA */}
        {(phase === 'gun' || phase === 'bullet') && (
          <div style={{
            position: 'absolute', top: '57%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 'clamp(140px, 22vw, 280px)',
            animation: phase === 'bullet' ? 'gun-recoil 0.18s ease both' : 'gun-in 0.15s ease both',
            pointerEvents: 'none', zIndex: 3,
          }}>
            <Image src="/images/arma.png" alt="Arma" width={280} height={280}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority unoptimized
            />
          </div>
        )}

        {/* BALA */}
        {phase === 'bullet' && (
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 'clamp(20px, 3.5vw, 52px)',
            animation: 'bullet-zoom 0.32s cubic-bezier(.15,0,.35,1) both',
            pointerEvents: 'none', zIndex: 4,
          }}>
            <Image src="/images/bala.png" alt="Bala" width={52} height={52}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority unoptimized
            />
          </div>
        )}

        {/* HOYO */}
        {phase === 'hole' && (
          <div style={{
            position: 'absolute', top: '55%', left: '53%',
            transform: 'translate(-50%,-50%)',
            width: 'min(250vw, 250vh)',
            animation: 'hole-appear 0.32s cubic-bezier(.2,0,.3,1) both',
            pointerEvents: 'none', zIndex: 20,
          }}>
            <Image src="/images/hoyo.png" alt="Impacto" width={900} height={900}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              priority unoptimized
            />
          </div>
        )}

      </div>
    </div>
  );
}
