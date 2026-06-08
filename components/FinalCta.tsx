import { waLink } from '@/lib/site';
import Icon from './Icon';

interface FinalCtaProps {
  title: string;
  text: string;
  msg: string;
}

export default function FinalCta({ title, text, msg }: FinalCtaProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="reveal">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="reveal" data-d="2">
          <a
            href={waLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light btn--lg"
          >
            <Icon name="whatsapp" /> Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
