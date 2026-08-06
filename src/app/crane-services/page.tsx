import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { CheckIcon, CraneIcon, PhoneIcon, LiftIcon } from '@/components/Icons';
import { craneServices, craneFaqs, manBucket } from '@/data/content';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Crane Service & Crane Rental in Bhatkal | Man Bucket & JCB Crane Hire',
  description:
    'Crane rental in Bhatkal for man bucket / aerial work platform, heavy lifting, boat lifting, building construction, steel erection, machinery shifting & plant installation. 24×7. Call 9731298734.',
  path: '/crane-services',
  image: '/images/crane-boat-lifting.jpeg',
});

const useCases = [
  'Man bucket / aerial work',
  'Boat & trawler lifting',
  'JCB crane hire',
  'Building construction',
  'Steel erection',
  'Machinery shifting',
  'Loading & unloading',
  'Plant installation',
  'Bridge & infrastructure',
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
        name="Crane Service, Man Bucket & Crane Rental in Bhatkal"
        description="Hydraulic mobile crane rental, man bucket / aerial work platform, JCB crane hire, heavy lifting, boat lifting, building construction, steel erection, machinery shifting, loading and unloading, plant installation and bridge works in Bhatkal, Karnataka."
        path="/crane-services"
      />
      <FaqJsonLd items={craneFaqs} />

      <PageHero
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Crane Services', path: '/crane-services' },
        ]}
        title={<>Crane Service &amp; Rental in Bhatkal</>}
        subtitle="Modern hydraulic cranes for man bucket aerial work, boat lifting, heavy machinery, construction and industrial loads - booked by the hour or the project. 24×7 across the coast."
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

      {/* MAN BUCKET — highlighted speciality ---------------------------------- */}
      <section className="relative overflow-hidden border-y border-brand-yellow/25 bg-gradient-to-b from-brand-yellow/[0.07] to-transparent">
        <div className="container-px section">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">
                <LiftIcon className="h-4 w-4" /> {manBucket.eyebrow}
              </span>
              <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl">
                {manBucket.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-fog">{manBucket.lead}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {manBucket.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-brand-mist">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                    {p}
                  </li>
                ))}
              </ul>

              <a href={telHref} className="btn-primary mt-8 w-full sm:w-auto">
                <PhoneIcon className="h-5 w-5" /> Book Man Bucket - {phonePrimaryDisplay}
              </a>
            </Reveal>

            <Reveal direction="left">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden rounded-2xl border border-white/10 shadow-lift">
                  <Image
                    src={manBucket.images[0].src}
                    alt={manBucket.images[0].alt}
                    width={manBucket.images[0].w}
                    height={manBucket.images[0].h}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                {manBucket.images.slice(1).map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-lift"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
        subtitle="Tell us the load and location - we'll confirm the right crane and an honest rate before we start."
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
