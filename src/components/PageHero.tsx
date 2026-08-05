import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import { telHref, whatsappHref, phonePrimaryDisplay } from '@/lib/site';

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-brand-fog">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-brand-ash">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-brand-yellow">
                {it.name}
              </Link>
            ) : (
              <span className="text-brand-mist">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
  cta = true,
  children,
}: {
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs: { name: string; path: string }[];
  cta?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
      </div>

      <div className="container-px relative py-14 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <Reveal>
          <h1 className="h-display max-w-3xl text-4xl text-white sm:text-5xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-mist/90">{subtitle}</p>
        </Reveal>
        {cta && (
          <Reveal delay={0.16}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={telHref} className="btn-primary">
                <PhoneIcon className="h-5 w-5" /> Call {phonePrimaryDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
