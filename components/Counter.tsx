'use client';
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  dur?: number;
}

export default function Counter({ to, suffix = '', prefix = '', dur = 1800 }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      es => {
        es.forEach(e => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 },
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [to, dur]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString('es-BO')}{suffix}
    </span>
  );
}
