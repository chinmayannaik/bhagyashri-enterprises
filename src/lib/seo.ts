import type { Metadata } from 'next';
import { SITE_URL, business, phonePrimaryDisplay } from './site';
import {
  locales,
  defaultLocale,
  pathFor,
  localeHtmlLang,
  localeOgLocale,
  type Locale,
} from '@/i18n/config';

/**
 * Branded share card shown when the site is posted to WhatsApp, Facebook,
 * LinkedIn, Telegram, X or Discord.
 *
 * JPEG rather than PNG deliberately: the same artwork as PNG is ~1.3 MB, and
 * WhatsApp frequently renders no preview at all above a few hundred KB. This
 * is 1200x630 (the ratio every platform crops to) at ~190 KB.
 * The PNG original stays at /Open_Graph_metadata.png for any other use.
 */
export const OG_IMAGE = '/Open_Graph_metadata.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_IMAGE_ALT =
  'Bhagyashri Cranes & Towing - 24x7 crane and towing services in Bhatkal, Honnavar, Shirur, Byndoor, Kundapura and Udupi. Call +91 97312 98734.';

/**
 * Per-page metadata: canonical + hreflang alternates, Open Graph and Twitter
 * card. `path` is the locale-independent route ("/", "/about", ...); the
 * canonical is that route in the current locale and every locale is advertised
 * through `alternates.languages`, with x-default pointing at the site default.
 *
 * All of this is generated on the server through the App Router Metadata API,
 * so social crawlers (which do not run JavaScript) can read it.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  ogTitle,
  ogDescription,
  image = OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  /**
   * Share-card text. Always passed in English, including on Kannada pages —
   * links get forwarded through WhatsApp far beyond the Kannada-reading
   * audience, and the card artwork itself is English.
   */
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${pathFor(path, locale)}`;
  const shareTitle = ogTitle ?? title;
  const shareDescription = ogDescription ?? description;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHtmlLang[l]] = `${SITE_URL}${pathFor(path, l)}`;
  }
  languages['x-default'] = `${SITE_URL}${pathFor(path, defaultLocale)}`;

  // Absolute URL — several crawlers (notably WhatsApp) ignore relative ones.
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    authors: [{ name: business.owner }],
    creator: business.name,
    publisher: business.name,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: 'website',
      url,
      title: shareTitle,
      description: shareDescription,
      siteName: business.name,
      // The card text is English, so declare en_IN regardless of page language.
      locale: 'en_IN',
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeOgLocale[l]),
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: OG_IMAGE_ALT,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: [{ url: imageUrl, alt: OG_IMAGE_ALT }],
    },
    other: {
      // Surfaces the number to crawlers that read contact metadata.
      'contact:phone_number': phonePrimaryDisplay,
    },
  };
}
