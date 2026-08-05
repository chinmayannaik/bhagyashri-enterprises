import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { MapEmbed } from '@/components/MapEmbed';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { CraneIcon, LiftIcon, RecoveryIcon, TowIcon, BoltIcon, PhoneIcon, CheckIcon } from '@/components/Icons';
import { areaDetails } from '@/data/content';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Areas We Serve — Crane & Towing Across Uttara Kannada',
  description:
    'Crane service, heavy lifting, vehicle recovery and towing in Bhatkal, Murudeshwar, Honnavar, Kumta, Sirsi and Karwar. 24×7 emergency response across the coast.',
  path: '/areas-we-serve',
  image: '/images/towing-suv-ghat.jpeg',
});

const serviceTags = [
  { Icon: CraneIcon, label: 'Crane Service' },
  { Icon: LiftIcon, label: 'Heavy Lifting' },
  { Icon: RecoveryIcon, label: 'Vehicle Recovery' },
  { Icon: TowIcon, label: 'Towing' },
  { Icon: BoltIcon, label: 'Emergency Response' },
];

export default function AreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Areas We Serve', path: '/areas-we-serve' },
        ]}
      />
      <PageHero
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Areas We Serve', path: '/areas-we-serve' },
        ]}
        title={<>Crane &amp; Towing Across the Coast</>}
        subtitle="Based in Bhatkal, we serve the whole Uttara Kannada belt — from Karwar in the north down to Kumta and inland to Sirsi. Quick response, wherever you are."
        image="/images/towing-suv-ghat.jpeg"
        imageAlt="Towing and recovery on the coastal highway near Bhatkal"
      />

      <Section>
        <div className="space-y-6">
          {areaDetails.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 2) * 0.05}>
              <article
                id={area.slug}
                className="card scroll-mt-24 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black">
                        <span className="font-display text-lg font-extrabold">{i + 1}</span>
                      </span>
                      <h2 className="h-display text-2xl text-white sm:text-3xl">
                        Crane &amp; Towing in {area.name}
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
                    <PhoneIcon className="h-5 w-5" /> Call for {area.name}
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
              eyebrow="Don't See Your Town?"
              title="We Travel the Whole Coast"
              subtitle="If you're anywhere near the Uttara Kannada coast or NH-66, give us a call. If we can reach you, we will."
            />
            <ul className="mt-6 space-y-2.5">
              {['Coastal villages & fishing harbours', 'NH-66 highway stretches', 'Industrial yards & construction sites', 'Ghat roads & inland routes'].map(
                (p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-brand-mist">
                    <CheckIcon className="h-5 w-5 text-brand-yellow" /> {p}
                  </li>
                ),
              )}
            </ul>
            <a href={telHref} className="btn-primary mt-8">
              <PhoneIcon className="h-5 w-5" /> Call {phonePrimaryDisplay}
            </a>
          </div>
          <Reveal direction="left">
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
