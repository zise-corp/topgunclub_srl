export const WA_PHONE = '59169500967';
export const PHONE_DISPLAY = '+591 69500967';

export const SOCIALS = {
  facebook: 'https://www.facebook.com/topgunclubsrl/',
  instagram: 'https://www.instagram.com/topgunclub_srl/',
  tiktok: 'https://www.tiktok.com/@top_gun_club',
};

export function waLink(text?: string): string {
  const msg = text ?? 'Hola! Estoy interesad@ en los servicios de Top Gun Club';
  return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`;
}

export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Escuela de Tiro', href: '/escuela' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Airsoft', href: '/cursos#airsoft' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Polígono', href: '/escuela#poligono' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
] as const;
