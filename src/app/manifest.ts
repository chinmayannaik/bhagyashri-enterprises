import type { MetadataRoute } from 'next';
import { business } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} - 24×7 Crane & Towing, Bhatkal`,
    short_name: 'Bhagyashri Crane',
    description:
      '24×7 crane rental, heavy lifting and vehicle towing in Bhatkal, Karnataka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0D',
    theme_color: '#FDBA12',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      {
        src: '/images/logo-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    categories: ['business', 'utilities'],
  };
}
