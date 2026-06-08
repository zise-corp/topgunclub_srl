# Top Gun Club SRL — Next.js

Sitio web de **Top Gun Club SRL**, escuela y polígono de tiro deportivo en Cochabamba, Bolivia.
Migrado de HTML + React CDN a Next.js 15 (App Router) con TypeScript.

## Requisitos

- Node.js 18.18+ (LTS recomendado)

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servidor de producción
```

## Dónde editar el contenido

### Precios
Abrí `app/cursos/page.tsx` y buscá el array `PLANES`. Cada plan tiene un campo `amt` mostrado como `Bs —`.
Reemplazá `Bs —` en el JSX de pricing por el precio real (ej. `Bs 350`).

### Horarios
En `app/contacto/page.tsx`, buscá `"Lunes a Domingo · horario editable"` y reemplazá con los horarios reales.
El mismo texto aparece en el `Footer` (`components/Footer.tsx`).

### Dirección exacta
En `app/contacto/page.tsx`, buscá `"dirección exacta editable"` y reemplazá con la dirección real.
Para el mapa embebido, actualizá el `src` del `<iframe>` con el link de embed de Google Maps de la dirección exacta.

### Número de WhatsApp / teléfono
Editá `lib/site.ts` → `WA_PHONE` (solo dígitos, sin +) y `PHONE_DISPLAY`.

### Redes sociales
Editá `lib/site.ts` → objeto `SOCIALS`.

### Datos del JSON-LD (SEO)
Editá el objeto `jsonLd` en `app/layout.tsx` (nombre, descripción, dirección).

## Dónde reemplazar las fotos placeholder

### Imágenes de servicios y splits (ya están con next/image)
- **Escuela de tiro** → `/public/assets/piece-escuela.png` (reemplazá el archivo)
- **Curso experto** → `/public/assets/piece-experto.png` (reemplazá el archivo)

### Galería de fotos
Abrí `components/GaleriaClient.tsx`. El array `ITEMS` define los placeholders de la galería.
Para cada ítem que quieras reemplazar con una foto real, cambiá el `<Ph label={...}>` por un `<Image>` de Next.js:
```tsx
// Antes (placeholder)
<Ph label={it.label} style={{ height: it.h + 'px' }} />

// Después (foto real)
<Image src={`/assets/galeria/${it.label}.jpg`} alt={it.label} width={600} height={it.h} style={{ objectFit: 'cover', width: '100%' }} />
```
Colocá las fotos en `/public/assets/galeria/`.

### Logos
- `/public/assets/logo.png` — logo principal (usado como favicon)
- `/public/assets/logo-white.png` — logo blanco (Navbar y Footer)

### Hero y páginas interiores
Los héroes de páginas interiores (`PageHero`) usan el componente `<Ph>` como fondo. Para reemplazarlos,
editá `components/PageHero.tsx` y sustituí el `<Ph>` por un `<Image fill>` con la foto real.

## Estadísticas editables

En `components/Stats.tsx`, el array `STATS` contiene los números animados:
- `to={8}` → años
- `to={1200}` → alumnos
- `to={3900}` → seguidores
- `to={6}` → calibres

## Estructura del proyecto

```
app/            → páginas (una carpeta por ruta)
components/     → componentes reutilizables
  ├── server    → Icon, Ph, PageHero, FinalCta, Footer, Stats, Servicios…
  └── client    → Navbar, FloatingActions, Hero, Testimonios, Counter…
hooks/          → useReveal (IntersectionObserver para animaciones)
lib/            → site.ts (constantes: WA_PHONE, waLink, NAV_ITEMS, SOCIALS)
public/assets/  → imágenes estáticas
```
