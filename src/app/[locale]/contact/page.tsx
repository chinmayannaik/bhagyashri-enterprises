import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { MapEmbed } from '@/components/MapEmbed';
import { QuoteForm } from '@/components/QuoteForm';
import { CopyPhone } from '@/components/CopyPhone';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  ClockIcon,
  DirectionsIcon,
} from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import {
  business,
  telHref,
  whatsappHref,
  mapsDirectionsHref,
  phonePrimaryDisplay,
} from '@/lib/site';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  return buildMetadata({
    title: dict.contact.metaTitle,
    description: dict.meta.contact.description,
    path: '/contact',
    locale: params.locale,
  });
}

export default function ContactPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.contact, path: '/contact' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={dict.contact.heroTitle}
        subtitle={dict.contact.heroSubtitle}
        image="/images/crane-towing-fleet.jpeg"
        imageAlt={dict.galleryCaptions['crane-towing-fleet']}
        cta={false}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="space-y-5 lg:col-span-1">
            <Reveal>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">{dict.contact.callUs}</h2>
                <div className="mt-3">
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={telHref}
                      className="text-lg font-semibold text-brand-mist hover:text-brand-yellow"
                    >
                      {phonePrimaryDisplay}
                    </a>
                    <CopyPhone
                      value={`+91${business.phonePrimary}`}
                      display={phonePrimaryDisplay}
                      copyLabel={dict.common.copyNumber}
                      copiedLabel={dict.common.copied}
                    />
                  </div>
                </div>
                <a href={telHref} className="btn-primary mt-5 w-full">
                  <PhoneIcon className="h-5 w-5" /> {dict.common.callNow}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">{dict.contact.whatsappTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-fog">
                  {dict.contact.whatsappBody}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa mt-5 w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" /> {dict.common.whatsappUs}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <MailIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">{dict.contact.emailTitle}</h2>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-2 block break-all text-sm text-brand-mist hover:text-brand-yellow"
                >
                  {business.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <ClockIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">{dict.contact.hoursTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-fog">
                  {dict.contact.hoursBody}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <DirectionsIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">{dict.contact.locationTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-fog">
                  {dict.contact.locationBody}
                </p>
                <a
                  href={mapsDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5 w-full"
                >
                  <DirectionsIcon className="h-5 w-5" /> {dict.common.getDirections}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Quote form + map */}
          <div className="space-y-6 lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow={dict.home.quoteEyebrow}
              title={dict.home.quoteTitle}
              subtitle={dict.home.quoteSubtitle}
            />
            <QuoteForm dict={dict} />
            <div>
              <h2 className="h-display mb-4 text-xl text-white">{dict.contact.findUs}</h2>
              <MapEmbed dict={dict} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
