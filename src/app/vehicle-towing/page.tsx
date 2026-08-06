import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { RevealStagger, StaggerItem, Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { iconMap, PhoneIcon, AlertIcon } from '@/components/Icons';
import { towingServices, towingFaqs } from '@/data/content';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Vehicle Towing & Breakdown Recovery in Bhatkal | 24×7',
  description:
    '24×7 vehicle towing, car & SUV towing, breakdown assistance, accident recovery and roadside assistance in Bhatkal and NH-66. Fast emergency recovery. Call 9731298734.',
  path: '/vehicle-towing',
  image: '/images/towing-innova.jpeg',
});

const emergencySteps = [
  { n: '1', t: 'Get to safety', d: 'Pull over, switch on hazard lights and stand away from traffic.' },
  { n: '2', t: 'Call us', d: `Dial ${phonePrimaryDisplay}. Tell us your vehicle and exact location.` },
  { n: '3', t: 'Share live location', d: 'Drop a WhatsApp live location so we reach you without delay.' },
  { n: '4', t: 'We recover you', d: 'Our tow crew arrives, secures your vehicle and gets you moving.' },
];

export default function TowingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Vehicle Towing', path: '/vehicle-towing' },
        ]}
      />
      <ServiceJsonLd
        name="Vehicle Towing & Breakdown Recovery in Bhatkal"
        description="24x7 car towing, SUV towing, pickup towing, breakdown assistance, accident recovery and roadside assistance in Bhatkal and along NH-66."
        path="/vehicle-towing"
      />
      <FaqJsonLd items={towingFaqs} />

      <PageHero
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Vehicle Towing', path: '/vehicle-towing' },
        ]}
        title={<>24×7 Vehicle Towing &amp; Recovery</>}
        subtitle="Broken down or stuck on NH-66? We tow cars, SUVs and pickups and handle breakdowns and accident recovery - any hour, any weather."
        image="/images/towing-innova.jpeg"
        imageAlt="Bhagyashri tow truck towing a Toyota Innova in Bhatkal"
      />

      {/* Emergency banner */}
      <section className="border-b border-white/10 bg-gradient-to-r from-brand-amber/15 to-transparent">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="flex items-center gap-2.5 text-center text-sm font-semibold text-brand-mist sm:text-left">
            <AlertIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" />
            Stranded right now? Don&apos;t wait - we answer 24×7.
          </p>
          <a href={telHref} className="btn-primary w-full sm:w-auto">
            <PhoneIcon className="h-5 w-5" /> Call {phonePrimaryDisplay}
          </a>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="Towing & Recovery"
          title="Every Kind of Recovery"
          subtitle="From a simple flat-battery tow to full accident recovery, our fleet is ready for cars, SUVs and light commercial vehicles."
        />
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {towingServices.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={s.title}>
                <div className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25 transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-fog">{s.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* How it works + image */}
      <section className="section bg-brand-steel/40">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="In an Emergency"
              title="What to Do When You Break Down"
              subtitle="Stay calm and follow these four steps. We'll take it from there."
            />
            <ol className="mt-8 space-y-4">
              {emergencySteps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-b from-brand-yellow to-brand-amber font-display text-lg font-extrabold text-black">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-bold text-white">{s.t}</p>
                    <p className="text-sm text-brand-fog">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="/images/towing-suv-ghat.jpeg"
                alt="SUV breakdown recovery on a ghat road near Bhatkal"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Need a Tow Right Now?"
        subtitle="One call and our recovery crew is on the way - anywhere across Bhatkal and NH-66."
      />

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="Towing FAQs"
          title="Common Towing Questions"
          subtitle="Quick answers about our 24×7 towing and roadside assistance."
        />
        <div className="mt-10">
          <Faq items={towingFaqs} />
        </div>
      </Section>
    </>
  );
}
