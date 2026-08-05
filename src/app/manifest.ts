import type { MetadataRoute } from 'next';
import { business } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — 24×7 Crane & Towing, Bhatkal`,
    short_name: 'Bhagyashree Crane',
    description:
      '24×7 crane rental, heavy lifting and vehicle towing in Bhatkal, Karnataka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0D',
    theme_color: '#0B0B0D',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
    categories: ['business', 'utilities'],
  };
}
