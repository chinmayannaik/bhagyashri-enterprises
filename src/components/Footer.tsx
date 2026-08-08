import Link from 'next/link';
import { LogoFull } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { PhoneIcon, WhatsAppIcon, MailIcon, DirectionsIcon } from './Icons';
import {
  serviceAreas,
  telHref,
  whatsappHref,
  mapsDirectionsHref,
  phonePrimaryDisplay,
  business,
} from '@/lib/site';
import { pathFor, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/en';

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const pages = [
    { path: '/', label: dict.nav.home },
    { path: '/about', label: dict.nav.about },
    { path: '/crane-services', label: dict.nav.crane },
    { path: '/vehicle-towing', label: dict.nav.towing },
    { path: '/gallery', label: dict.nav.gallery },
    { path: '/areas-we-serve', label: dict.nav.areas },
    { path: '/contact', label: dict.nav.contact },
    { path: '/privacy-policy', label: dict.nav.privacy },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-steel/60">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href={pathFor('/', locale)}
            aria-label={`Bhagyashri Cranes & Towing - ${dict.common.home}`}
            className="inline-block"
          >
            <LogoFull className="h-24 w-auto sm:h-28" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-fog">{dict.footer.blurb}</p>
          <p className="mt-4 text-xs text-brand-fog">
            {dict.footer.proprietor}: <span className="text-brand-mist">{business.owner}</span>
          </p>
          <div className="mt-5">
            <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {dict.footer.pages}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {pages.map((l) => (
              <li key={l.path}>
                <Link
                  href={pathFor(l.path, locale)}
                  className="text-brand-fog transition-colors hover:text-brand-yellow"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {dict.footer.areasHeading}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceAreas.map((a) => (
              <li key={a}>
                <Link
                  href={pathFor('/areas-we-serve', locale)}
                  className="text-brand-fog transition-colors hover:text-brand-yellow"
                >
                  {dict.areas.craneAndTowingIn} {dict.serviceAreaNames[a]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={telHref}
                className="flex items-center gap-2.5 text-brand-mist hover:text-brand-yellow"
              >
                <PhoneIcon className="h-4 w-4 text-brand-yellow" /> {phonePrimaryDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-brand-mist hover:text-brand-yellow"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> {dict.common.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2.5 break-all text-brand-mist hover:text-brand-yellow"
              >
                <MailIcon className="h-4 w-4 text-brand-yellow" /> {business.email}
              </a>
            </li>
            <li>
              <a
                href={mapsDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-brand-mist hover:text-brand-yellow"
              >
                <DirectionsIcon className="h-4 w-4 text-brand-yellow" /> {dict.contact.locationBody}
              </a>
            </li>
          </ul>
          <p className="mt-4 rounded-lg border border-brand-yellow/25 bg-brand-yellow/10 px-3 py-2 text-xs font-semibold text-brand-yellow">
            {dict.contact.hoursBody}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-fog sm:flex-row">
          <p>
            © {year} {business.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
