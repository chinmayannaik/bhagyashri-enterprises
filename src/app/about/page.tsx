import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Testimonials } from '@/components/Testimonials';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ClockIcon, MedalIcon, ShieldIcon, CheckIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'About Us - Bhatkal Crane & Towing Experts',
  description:
    'Bhagyashri Crane Service is a Bhatkal-based crane and towing company run by Kumar Naik. 10+ years lifting boats, machinery and recovering vehicles across the Uttara Kannada coast.',
  path: '/about',
  image: '/images/crane-monsoon-recovery.jpeg',
});

const values = [
  { Icon: ClockIcon, t: 'Always Available', d: 'A breakdown or lift never waits for office hours, so neither do we. 24×7, all year.' },
  { Icon: MedalIcon, t: 'Skilled Operators', d: 'Every job is handled by trained, licensed operators who know these coastal roads and loads.' },
  { Icon: ShieldIcon, t: 'Safety First', d: 'Correct rigging, load balancing and modern hydraulics keep every job safe.' },
];

const trustPoints = [
  'Locally owned and operated in Bhatkal',
  'Modern ACE hydraulic mobile cranes',
  'Dedicated towing fleet for cars, SUVs & pickups',
  'Specialists in coastal boat lifting',
  'Transparent, upfront pricing',
  'Prompt response across 6+ towns',
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHero
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
        title={<>The Team Behind Bhatkal&apos;s Cranes</>}
        subtitle="Bhagyashri Crane Service has grown from a single tow truck into a trusted name for crane and towing work across the Uttara Kannada coast."
        image="/images/crane-monsoon-recovery.jpeg"
        imageAlt="Bhagyashri crane and JCB recovering a boat during monsoon in Bhatkal"
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on the Bhatkal Coast"
              subtitle=""
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-brand-fog">
              <p>
                Bhagyashri Crane Service began with a simple idea: when something heavy needs
                lifting - or a vehicle breaks down on the highway - people in Bhatkal deserve help
                that actually shows up, fast. Founded and run by{' '}
                <span className="font-semibold text-brand-mist">{business.owner}</span>, the business
                has spent over a decade doing exactly that.
              </p>
              <p>
                From hoisting fishing boats and trawlers on and off lorries at the harbour, to
                shifting factory machinery, to pulling cars out of monsoon-soaked ghat roads, our
                crew has handled it all. We know the jetties, the industrial yards and every twist of
                NH-66 between Karwar and Kumta.
              </p>
              <p>
                Today we run modern ACE hydraulic cranes alongside a dependable towing fleet - but the
                promise hasn&apos;t changed. Pick up the phone, and we&apos;re on the way.
              </p>
            </div>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="/images/crane-boat-lifting.jpeg"
                alt="ACE crane lifting a boat onto a lorry in Bhatkal"
                width={1600}
                height={740}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission + values */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-yellow/20 bg-brand-yellow/5 p-8 text-center sm:p-10">
            <span className="eyebrow">Our Mission</span>
            <p className="h-display mt-4 text-2xl leading-snug text-white sm:text-3xl">
              To be the fastest, safest and most trusted crane &amp; towing service on the Uttara
              Kannada coast - one honest job at a time.
            </p>
          </div>

          <RevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="card h-full p-6 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-fog">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Why customers trust us */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="/images/towing-suv-ghat.jpeg"
                alt="Bhagyashri towing an SUV on a ghat road near Bhatkal"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Customers Trust Us"
              title="Experience You Can Count On"
              subtitle="Ten years on these roads means we've seen - and solved - almost every kind of lift and recovery."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-brand-steel/60 px-4 py-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-yellow" />
                  <span className="text-sm text-brand-mist">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Testimonials" title="Trusted Across the Coast" />
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
