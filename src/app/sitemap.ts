import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { locales, defaultLocale, pathFor, localeHtmlLang } from '@/i18n/config';

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/crane-services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/vehicle-towing', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/areas-we-serve', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/gallery', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${pathFor(route.path, locale)}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      // Non-default locales rank slightly lower so the default is preferred.
      priority: locale === defaultLocale ? route.priority : route.priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [localeHtmlLang[l], `${SITE_URL}${pathFor(route.path, l)}`]),
        ),
      },
    })),
  );
}
