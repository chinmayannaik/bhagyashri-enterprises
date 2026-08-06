import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { MapEmbed } from '@/components/MapEmbed';
import { QuoteForm } from '@/components/QuoteForm';
import { CopyPhone } from '@/components/CopyPhone';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon, DirectionsIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import {
  business,
  telHref,
  telHrefSecondary,
  whatsappHref,
  mapsDirectionsHref,
  phonePrimaryDisplay,
  phoneSecondaryDisplay,
} from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact - Call Bhagyashri Crane Service, Bhatkal',
  description:
    'Contact Bhagyashri Crane Service in Bhatkal. Call 9731298734 or 8105941529, WhatsApp us or email bhagyashricraneservices@gmail.com. Open 24×7 for crane & towing.',
  path: '/contact',
  image: '/images/crane-towing-fleet.jpeg',
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <PageHero
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        title={<>Get in Touch - We Answer 24×7</>}
        subtitle="Call, WhatsApp or email. For any emergency lift or towing, calling is always the fastest way to reach us."
        image="/images/crane-towing-fleet.jpeg"
        imageAlt="Bhagyashri Crane Service crane and towing fleet in Bhatkal"
        cta={false}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="space-y-5 lg:col-span-1">
            {/* Phones */}
            <Reveal>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">Call Us</h2>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <a href={telHref} className="text-lg font-semibold text-brand-mist hover:text-brand-yellow">
                      {phonePrimaryDisplay}
                    </a>
                    <CopyPhone value={`+91${business.phonePrimary}`} display={phonePrimaryDisplay} />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={telHrefSecondary}
                      className="text-lg font-semibold text-brand-mist hover:text-brand-yellow"
                    >
                      {phoneSecondaryDisplay}
                    </a>
                    <CopyPhone value={`+91${business.phoneSecondary}`} display={phoneSecondaryDisplay} />
                  </div>
                </div>
                <a href={telHref} className="btn-primary mt-5 w-full">
                  <PhoneIcon className="h-5 w-5" /> Call Now
                </a>
              </div>
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay={0.05}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">WhatsApp</h2>
                <p className="mt-1.5 text-sm text-brand-fog">
                  Share your location and photos of the job for a quick quote.
                </p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-wa mt-5 w-full">
                  <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Email + hours */}
            <Reveal delay={0.1}>
              <div className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow">
                  <MailIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-white">Email &amp; Hours</h2>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-2 block break-all text-sm font-medium text-brand-mist hover:text-brand-yellow"
                >
                  {business.email}
                </a>
                <p className="mt-4 flex items-center gap-2 rounded-lg border border-brand-yellow/25 bg-brand-yellow/10 px-3 py-2 text-sm font-semibold text-brand-yellow">
                  <ClockIcon className="h-4 w-4" /> Open {business.hours}
                </p>
                <p className="mt-3 flex items-start gap-2 text-sm text-brand-fog">
                  <DirectionsIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  {business.address.locality}, {business.address.region} {business.address.postalCode}
                </p>
                <a
                  href={mapsDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5 w-full"
                >
                  <DirectionsIcon className="h-5 w-5" /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form + map */}
          <div className="space-y-6 lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Request a Quote"
              title="Send Your Job Details"
              subtitle="Fill this in and we'll reply on WhatsApp. In an emergency, please call directly."
            />
            <QuoteForm />
            <MapEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
