import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { CheckIcon, CraneIcon } from '@/components/Icons';
import { craneServices, craneFaqs } from '@/data/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Crane Service & Crane Rental in Bhatkal | JCB Crane Hire',
  description:
    'Hydraulic crane rental in Bhatkal for heavy lifting, boat lifting, factory machinery, construction & industrial equipment. JCB crane hire, 24×7. Call 8105941529 for a quote.',
  path: '/crane-services',
  image: '/images/crane-boat-lifting.jpeg',
});

const useCases = [
  'Boat & trawler lifting',
  'JCB crane hire',
  'Factory machinery shifting',
  'Generators & transformers',
  'Construction materials',
  'Industrial equipment placement',
];

export default function CranePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Crane Services', path: '/crane-services' },
        ]}
      />
      <ServiceJsonLd
        name="Crane Service & Crane Rental in Bhatkal"
        description="Hydraulic mobile crane rental, JCB crane hire, heavy lifting, boat lifting and industrial equipment handling in Bhatkal, Karnataka."
        path="/crane-services"
      />
      <FaqJsonLd items={craneFaqs} />

      <PageHero
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Crane Services', path: '/crane-services' },
        ]}
        title={<>Crane Service &amp; Rental in Bhatkal</>}
        subtitle="Modern hydraulic cranes for boat lifting, heavy machinery, construction and industrial loads — booked by the hour or the project. 24×7 across the coast."
        image="/images/crane-boat-lifting.jpeg"
        imageAlt="ACE hydraulic crane lifting a fishing boat onto a lorry in Bhatkal"
      />

      {/* Intro + quick chips */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Crane Rental Bhatkal"
              title="The Right Crane for Every Load"
              subtitle="Whether you're launching a fishing boat, shifting a generator or lifting building materials to height, we bring the right capacity crane and an operator who knows how to place it safely."
            />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {useCases.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-brand-steel/70 px-3.5 py-1.5 text-sm font-medium text-brand-mist"
                >
                  <CheckIcon className="h-4 w-4 text-brand-yellow" /> {u}
                </span>
              ))}
            </div>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="/images/crane-fishing-boat.jpeg"
                alt="Bhagyashri ACE 12KW crane hoisting a fishing boat"
                width={1600}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services grid */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Crane Work"
            title="Everything We Lift"
            subtitle="A full range of lifting and rigging services for coastal, industrial and construction customers."
          />
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {craneServices.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25">
                    <CraneIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-fog">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CtaBanner
        title="Book a Crane in Bhatkal Today"
        subtitle="Tell us the load and location — we'll confirm the right crane and an honest rate before we start."
      />

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="Crane FAQs"
          title="Questions About Crane Hire"
          subtitle="Everything you need to know about renting a crane from us in Bhatkal and nearby towns."
        />
        <div className="mt-10">
          <Faq items={craneFaqs} />
        </div>
      </Section>
    </>
  );
}
