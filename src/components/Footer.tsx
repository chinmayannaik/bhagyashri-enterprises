import Link from 'next/link';
import { Logo } from './Logo';
import { PhoneIcon, WhatsAppIcon, MailIcon, DirectionsIcon } from './Icons';
import {
  navLinks,
  serviceAreas,
  telHref,
  whatsappHref,
  mapsDirectionsHref,
  phonePrimaryDisplay,
  business,
} from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-steel/60">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-fog">
            24×7 crane, heavy lifting and vehicle towing across Bhatkal and the Uttara Kannada
            coast. Licensed operators, quick response, honest pricing.
          </p>
          <p className="mt-4 text-xs text-brand-fog">
            Proprietor: <span className="text-brand-mist">{business.owner}</span>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Pages</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand-fog transition-colors hover:text-brand-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-brand-fog transition-colors hover:text-brand-yellow">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Areas We Serve</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceAreas.map((a) => (
              <li key={a}>
                <Link
                  href="/areas-we-serve"
                  className="text-brand-fog transition-colors hover:text-brand-yellow"
                >
                  Crane & Towing in {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telHref} className="flex items-center gap-2.5 text-brand-mist hover:text-brand-yellow">
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
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp Chat
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
                <DirectionsIcon className="h-4 w-4 text-brand-yellow" /> Bhatkal, Karnataka 581320
              </a>
            </li>
          </ul>
          <p className="mt-4 rounded-lg border border-brand-yellow/25 bg-brand-yellow/10 px-3 py-2 text-xs font-semibold text-brand-yellow">
            Open {business.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-fog sm:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Crane Rental • Heavy Lifting • Vehicle Towing • Bhatkal, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
