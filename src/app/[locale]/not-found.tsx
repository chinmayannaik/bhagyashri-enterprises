'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneIcon, ArrowIcon } from '@/components/Icons';
import { telHref, phonePrimaryDisplay } from '@/lib/site';
import { getDictionary, defaultLocale, locales, pathFor, type Locale } from '@/i18n';

export default function NotFound() {
  // A not-found boundary never receives route params, so the locale is read
  // from the URL instead — otherwise an English visitor gets a Kannada 404.
  const pathname = usePathname() || '/';
  const matched = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  const locale: Locale = matched ?? defaultLocale;
  const dict = getDictionary(locale);

  return (
    <section className="section">
      <div className="container-px flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="font-display text-7xl font-extrabold text-brand-yellow">404</span>
        <h1 className="h-display mt-4 text-3xl text-white sm:text-4xl">{dict.notFound.title}</h1>
        <p className="mt-3 max-w-md text-brand-fog">{dict.notFound.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={telHref} className="btn-primary">
            <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
          </a>
          <Link href={pathFor('/', locale)} className="btn-ghost">
            {dict.notFound.backHome} <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
