// Schema BreadcrumbList: muestra la ruta "Inicio › Sección" en los
// resultados de Google en lugar de la URL cruda.
export default function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://topgunclub.com.bo/' },
      { '@type': 'ListItem', position: 2, name, item: `https://topgunclub.com.bo${path}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
