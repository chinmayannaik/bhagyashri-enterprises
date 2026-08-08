import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { MapEmbed } from '@/components/MapEmbed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  CraneIcon,
  LiftIcon,
  RecoveryIcon,
  TowIcon,
  BoltIcon,
  PhoneIcon,
  CheckIcon,
} from '@/components/Icons';
import { ArrowIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';
import { getDictionary, pathFor, type Locale } from '@/i18n';
import { getLocations, locationSlugs } from '@/i18n/locations';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  return buildMetadata({
    title: dict.areas.metaTitle,
    description: dict.meta.areas.description,
    path: '/areas-we-serve',
    locale: params.locale,
  });
}

export default function AreasPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const townCopy = getLocations(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.areas, path: '/areas-we-serve' },
  ];

  const serviceTags = [
    { Icon: CraneIcon, label: dict.areas.tags.crane },
    { Icon: LiftIcon, label: dict.areas.tags.lifting },
    { Icon: RecoveryIcon, label: dict.areas.tags.recovery },
    { Icon: TowIcon, label: dict.areas.tags.towing },
    { Icon: BoltIcon, label: dict.areas.tags.emergency },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={dict.areas.heroTitle}
        subtitle={dict.areas.heroSubtitle}
        image="/images/towing-suv-ghat.jpeg"
        imageAlt={dict.galleryCaptions['towing-suv-ghat']}
      />

      {/* Towns with their own landing page — the pages that rank for
          "crane in <town>" searches, so they get top billing here. */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow={dict.areas.tags.crane}
          title={dict.locationPage.areasCovered}
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locationSlugs.map((slug) => {
            const loc = townCopy[slug];
            if (!loc) return null;
            return (
              <Link
                key={slug}
                href={pathFor(`/areas/${slug}`, locale)}
                className="card group flex items-center justify-between gap-3 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-yellow/40"
              >
                <span>
                  <span className="block text-base font-bold text-white group-hover:text-brand-yellow">
                    {loc.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-brand-fog">
                    {loc.district} {dict.locationPage.inDistrict}
                  </span>
                </span>
                <ArrowIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          {dict.areaDetails.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 2) * 0.05}>
              <article id={area.slug} className="card scroll-mt-24 p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black">
                        <span className="font-display text-lg font-extrabold">{i + 1}</span>
                      </span>
                      <h2 className="h-display text-2xl text-white sm:text-3xl">
                        {dict.areas.craneAndTowingIn} {area.name}
                      </h2>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-fog">{area.intro}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-fog">{area.line}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {serviceTags.map(({ Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-brand-dark/60 px-3 py-1.5 text-xs font-medium text-brand-mist"
                        >
                          <Icon className="h-4 w-4 text-brand-yellow" /> {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={telHref} className="btn-primary w-full flex-shrink-0 lg:w-auto">
                    <PhoneIcon className="h-5 w-5" /> {dict.areas.callFor} {area.name}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="section bg-brand-steel/40">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.areas.notListedEyebrow}
              title={dict.areas.notListedTitle}
              subtitle={dict.areas.notListedSubtitle}
            />
            <ul className="mt-6 space-y-2.5">
              {dict.areas.notListedPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-brand-mist">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" /> {p}
                </li>
              ))}
            </ul>
            <a href={telHref} className="btn-primary mt-8">
              <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
            </a>
          </div>
          <Reveal direction="left">
            <MapEmbed dict={dict} />
          </Reveal>
        </div>
      </section>

      <CtaBanner dict={dict} />
    </>
  );
}
