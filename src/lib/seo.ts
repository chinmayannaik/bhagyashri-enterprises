import type { Metadata } from 'next';
import { SITE_URL, business } from './site';

const defaultOg = '/images/crane-boat-lifting.jpeg';

export function buildMetadata({
  title,
  description,
  path,
  image = defaultOg,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: business.name,
      locale: 'en_IN',
      images: [{ url: image, width: 1600, height: 900, alt: business.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
