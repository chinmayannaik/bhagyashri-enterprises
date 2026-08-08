'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config';

/**
 * Two-state language toggle.
 *
 * Keeps the visitor on the same page when switching: strips any locale prefix
 * from the current path and re-adds the target one (the default locale has no
 * prefix). Rendered as real <a> links so both languages are crawlable.
 */
export function LanguageSwitcher({
  locale,
  className = '',
  label,
}: {
  locale: Locale;
  className?: string;
  label?: string;
}) {
  const pathname = usePathname() || '/';

  // Current path without its locale prefix, e.g. "/en/about" -> "/about".
  let bare = pathname;
  for (const l of locales) {
    if (bare === `/${l}`) {
      bare = '/';
      break;
    }
    if (bare.startsWith(`/${l}/`)) {
      bare = bare.slice(l.length + 1);
      break;
    }
  }

  const hrefFor = (target: Locale) => {
    if (target === defaultLocale) return bare === '' ? '/' : bare;
    return `/${target}${bare === '/' ? '' : bare}`;
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label={label ?? 'Language'}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={hrefFor(l)}
            hrefLang={l}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              active
                ? 'bg-brand-yellow text-black'
                : 'text-brand-mist/80 hover:text-white'
            }`}
          >
            {localeNames[l]}
          </Link>
        );
      })}
    </div>
  );
}
