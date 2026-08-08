import type { Metadata } from 'next';
import { SITE_URL, business } from './site';
import {
  locales,
  defaultLocale,
  pathFor,
  localeHtmlLang,
  localeOgLocale,
  type Locale,
} from '@/i18n/config';

const defaultOg = '/images/crane-boat-lifting.jpeg';

/**
 * Per-page metadata with canonical + hreflang alternates.
 *
 * `path` is the locale-independent route ("/", "/about", ...). The canonical
 * URL is that route in the current locale; every locale is advertised through
 * `alternates.languages`, with x-default pointing at the site default.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  image = defaultOg,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${pathFor(path, locale)}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHtmlLang[l]] = `${SITE_URL}${pathFor(path, l)}`;
  }
  languages['x-default'] = `${SITE_URL}${pathFor(path, defaultLocale)}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: business.name,
      locale: localeOgLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeOgLocale[l]),
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
