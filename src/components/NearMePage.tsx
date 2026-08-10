import Link from 'next/link';
import { PageHero } from './PageHero';
import { Section, SectionHeading } from './ui';
import { Reveal } from './Reveal';
import { CtaBanner } from './CtaBanner';
import { Faq } from './Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from './JsonLd';
import { CheckIcon, PhoneIcon, ArrowIcon, DirectionsIcon } from './Icons';
import { telHref, phonePrimaryDisplay } from '@/lib/site';
import { pathFor, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/en';
import type { NearMeCopy } from '@/i18n/nearme';
import { getLocations, locationSlugs } from '@/i18n/locations';

/**
 * Shared layout for the two "near me" hub pages.
 *
 * The coverage grid is the point of these pages: it converts an unqualified
 * "near me" visitor into a town page that actually ranks, and passes internal
 * link equity down to those pages.
 */
export function NearMePage({
  copy,
  locale,
  dict,
  image,
  imageAlt,
  navLabel,
}: {
  copy: NearMeCopy;
  locale: Locale;
  dict: Dictionary;
  image: string;
  imageAlt: string;
  navLabel: string;
}) {
  const towns = getLocations(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: navLabel, path: `/${copy.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <ServiceJsonLd
        name={copy.h1}
        description={copy.metaDescription}
        path={`/${copy.slug}`}
        locale={locale}
      />
      <FaqJsonLd items={copy.faqs} />

      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={copy.h1}
        subtitle={copy.lead}
        image={image}
        imageAlt={imageAlt}
      />

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-brand-mist">{copy.intro}</p>
        </div>
      </Section>

      {/* Coverage — the conversion point of the page */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            align="left"
            eyebrow={dict.nav.areas}
            title={copy.coverageHeading}
            subtitle={copy.coverageBody}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationSlugs.map((slug) => {
              const town = towns[slug];
              if (!town) return null;
              return (
                <Link
                  key={slug}
                  href={pathFor(`/areas/${slug}`, locale)}
                  className="card group flex items-center justify-between gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-yellow/40"
                >
                  <span className="flex items-center gap-3">
                    <DirectionsIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    <span>
                      <span className="block text-base font-bold text-white group-hover:text-brand-yellow">
                        {town.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-brand-fog">
                        {town.district} {dict.locationPage.inDistrict}
                      </span>
                    </span>
                  </span>
                  <ArrowIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" />
                </Link>
              );
            })}
          </div>
          <a href={telHref} className="btn-primary mt-8">
            <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
          </a>
        </div>
      </section>

      {/* Practical guide */}
      <Section>
        <SectionHeading
          align="left"
          title={copy.guideHeading}
          subtitle={copy.guideIntro}
        />
        <ol className="mt-10 space-y-4">
          {copy.guide.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 0.04}>
              <li className="card flex gap-4 p-5 sm:p-6">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-b from-brand-yellow to-brand-amber font-display text-lg font-extrabold text-black">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-white">{g.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-fog">{g.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Checklist */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            align="left"
            title={copy.checklistHeading}
            subtitle={copy.checklistIntro}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.checklist.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-brand-dark/50 px-4 py-3.5 text-sm text-brand-mist"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner dict={dict} title={copy.ctaTitle} subtitle={copy.ctaSubtitle} />

      <Section>
        <SectionHeading title={dict.locationPage.faqHeading} />
        <div className="mt-10">
          <Faq items={copy.faqs} />
        </div>
      </Section>
    </>
  );
}
