'use client';
import dynamic from 'next/dynamic';
const CatalogoIntro = dynamic(() => import('./CatalogoIntro'), { ssr: false });
export default function CatalogoIntroClient() {
  return <CatalogoIntro />;
}
