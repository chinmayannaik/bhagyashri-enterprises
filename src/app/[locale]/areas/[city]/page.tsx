import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { MapEmbed } from '@/components/MapEmbed';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import {
  CraneIcon,
  TowIcon,
  CheckIcon,
  PhoneIcon,
  BoltIcon,
  ArrowIcon,
} from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';
import { getDictionary, pathFor, locales, type Locale } from '@/i18n';
import { getLocation, getLocations, locationSlugs } from '@/i18n/locations';

type Props = { params: { locale: Locale; city: string } };

// Only the towns below exist. Without this, an unknown slug renders the
// not-found UI but still returns HTTP 200 — a soft 404 that Google will index.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    locationSlugs.map((city) => ({ locale, city })),
  );
}

export function generateMetadata({ params }: Props) {
  const loc = getLocation(params.locale, params.city);
  if (!loc) return {};
  // Share cards stay English even on the Kannada page.
  const enLoc = getLocation('en', params.city) ?? loc;
  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    ogTitle: enLoc.metaTitle,
    ogDescription: enLoc.metaDescription,
    path: `/areas/${params.city}`,
    locale: params.locale,
  });
}

export default function CityPage({ params }: Props) {
  const { locale, city } = params;
  const dict = getDictionary(locale);
  const loc = getLocation(locale, city);
  if (!loc) notFound();

  const all = getLocations(locale);
  const others = locationSlugs.filter((s) => s !== city);

  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.areas, path: '/areas-we-serve' },
    { name: loc.name, path: `/areas/${city}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <ServiceJsonLd
        name={loc.h1}
        description={loc.metaDescription}
        path={`/areas/${city}`}
        locale={locale}
      />
      <FaqJsonLd items={loc.faqs} />

      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={loc.h1}
        subtitle={loc.lead}
        image="/images/crane-boat-lifting.jpeg"
        imageAlt={dict.galleryCaptions['crane-boat-lifting']}
      />

      {/* Intro + the two service blocks */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-brand-mist">{loc.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25">
                <CraneIcon className="h-6 w-6" />
              </span>
              <h2 className="h-display mt-4 text-2xl text-white">
                {dict.locationPage.craneHeading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-fog">{loc.crane}</p>
              <Link
                href={pathFor('/crane-services', locale)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow"
              >
                {dict.nav.crane} <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card h-full p-6 sm:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25">
                <TowIcon className="h-6 w-6" />
              </span>
              <h2 className="h-display mt-4 text-2xl text-white">
                {dict.locationPage.towingHeading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-fog">{loc.towing}</p>
              <Link
                href={pathFor('/vehicle-towing', locale)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow"
              >
                {dict.nav.towing} <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Areas covered + response + map */}
      <section className="section bg-brand-steel/40">
        <div className="container-px grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={`${loc.district} ${dict.locationPage.inDistrict}`}
              title={`${dict.locationPage.areasCovered} — ${loc.name}`}
            />
            <ul className="mt-6 space-y-2.5">
              {loc.landmarks.map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-sm text-brand-mist">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                  {l}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-yellow/25 bg-brand-yellow/10 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-yellow">
                <BoltIcon className="h-4 w-4" /> {dict.locationPage.responseHeading}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-mist">{loc.responseNote}</p>
            </div>

            <a href={telHref} className="btn-primary mt-8 w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
            </a>
          </div>

          <Reveal direction="left">
            <MapEmbed dict={dict} />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        dict={dict}
        title={`${dict.locationPage.ctaTitle} — ${loc.name}`}
        subtitle={dict.locationPage.ctaSubtitle}
      />

      {/* Town FAQs */}
      <Section>
        <SectionHeading
          eyebrow={loc.name}
          title={dict.locationPage.faqHeading}
        />
        <div className="mt-10">
          <Faq items={loc.faqs} />
        </div>
      </Section>

      {/* Internal links to sibling towns — helps both users and crawlers */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <h2 className="h-display text-2xl text-white">
            {dict.locationPage.otherTownsHeading}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((slug) => (
              <Link
                key={slug}
                href={pathFor(`/areas/${slug}`, locale)}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-brand-dark/50 px-4 py-3.5 transition-colors hover:border-brand-yellow/40"
              >
                <span className="text-sm font-semibold text-brand-mist group-hover:text-brand-yellow">
                  {all[slug]?.name ?? slug}
                </span>
                <ArrowIcon className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
              </Link>
            ))}
          </div>
          <Link
            href={pathFor('/areas-we-serve', locale)}
            className="btn-ghost mt-8"
          >
            {dict.locationPage.allAreasLink} <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
