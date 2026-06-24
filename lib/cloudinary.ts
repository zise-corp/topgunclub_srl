// Configuración de Cloudinary
// Las variables de entorno deben estar en .env.local

export const CLOUDINARY_CONFIG = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
};

// Función helper para generar URLs de imágenes de Cloudinary
export function getCloudinaryImage(publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: string | number;
  format?: string;
}) {
  const { cloudName } = CLOUDINARY_CONFIG;
  if (!cloudName) return '';

  const transformations = [];
  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.quality) transformations.push(`q_${options.quality}`);
  if (options?.format) transformations.push(`f_${options.format}`);

  const transformStr = transformations.length > 0 ? transformations.join(',') + '/' : '';
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformStr}${publicId}`;
}