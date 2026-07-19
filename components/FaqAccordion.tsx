'use client';
import { useState, useRef } from 'react';
import Icon from './Icon';
import { FAQS } from '@/lib/faqs';

function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={'faq__item' + (open ? ' open' : '')}>
      <button className="faq__q" onClick={onClick} aria-expanded={open}>
        {q}
        <span className="pm">
          <Icon name="plus" style={{ width: 16, height: 16 }} />
        </span>
      </button>
      <div
        className="faq__a"
        style={{ maxHeight: open ? (ref.current ? ref.current.scrollHeight + 'px' : '400px') : '0px' }}
      >
        <div ref={ref}>{a}</div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="faq reveal" data-d="2">
      {FAQS.map((it, i) => (
        <FaqItem
          key={i}
          q={it.q}
          a={it.a}
          open={open === i}
          onClick={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}