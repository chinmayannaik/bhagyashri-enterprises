// ---------------------------------------------------------------------------
// Locale configuration.
//
// The DEFAULT locale is served from the bare URLs ("/", "/about", ...) and the
// non-default locale is served under a prefix ("/en", "/en/about", ...).
//
// To flip which language is the default, change `defaultLocale` below — the
// middleware, sitemap, hreflang tags and language switcher all derive from it.
// ---------------------------------------------------------------------------

export const locales = ['kn', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'kn';

export const localeNames: Record<Locale, string> = {
  kn: 'ಕನ್ನಡ',
  en: 'English',
};

/** BCP-47 tags used for <html lang>, hreflang and OpenGraph. */
export const localeHtmlLang: Record<Locale, string> = {
  kn: 'kn-IN',
  en: 'en-IN',
};

export const localeOgLocale: Record<Locale, string> = {
  kn: 'kn_IN',
  en: 'en_IN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Public path for a route in a given locale.
 * Default locale has no prefix; others are prefixed.
 *   pathFor('/about', 'kn') -> '/about'
 *   pathFor('/about', 'en') -> '/en/about'
 */
export function pathFor(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '' ? '/' : clean;
  return `/${locale}${clean}`;
}
