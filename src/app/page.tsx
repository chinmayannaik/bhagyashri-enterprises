import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Testimonials } from '@/components/Testimonials';
import { MapEmbed } from '@/components/MapEmbed';
import { QuoteForm } from '@/components/QuoteForm';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { iconMap } from '@/components/Icons';
import { PhoneIcon, WhatsAppIcon, ArrowIcon, ClockIcon, ShieldIcon, MedalIcon } from '@/components/Icons';
import { homeServices, whyChooseUs, galleryImages } from '@/data/content';
import {
  telHref,
  whatsappHref,
  phonePrimaryDisplay,
  serviceAreas,
  business,
} from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: '24×7 Crane & Towing Service in Bhatkal | Bhagyashri Crane',
  description:
    'Need a crane near me in Bhatkal? Bhagyashri Crane Service offers 24×7 crane rental, heavy lifting, boat lifting & vehicle towing across Bhatkal, Murudeshwar, Honnavar, Kumta, Sirsi & Karwar. Call 8105941529.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }]} />

      {/* HERO ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/crane-fishing-boat.jpeg"
            alt="Bhagyashri ACE crane lifting a fishing boat in Bhatkal, Karnataka"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/80 to-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        </div>

        <div className="container-px relative flex min-h-[86vh] flex-col justify-center py-20">
          <Reveal>
            <span className="eyebrow">
              <ClockIcon className="h-3.5 w-3.5" /> Available 24 Hours · 7 Days
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-display mt-5 max-w-4xl text-[2.6rem] leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              24×7 Crane &amp; Towing Services in{' '}
              <span className="text-brand-yellow">Bhatkal</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-lg font-medium text-brand-mist/90 sm:text-xl">
              Fast Response • Licensed Operators • Affordable Pricing
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-fog">
              Crane rental, heavy lifting, boat lifting and emergency vehicle recovery - one call and
              our crew is on the way across the Uttara Kannada coast.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref} className="btn-primary text-lg">
                <PhoneIcon className="h-5 w-5" /> Call Now {phonePrimaryDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-lg"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: '24×7', v: 'Availability' },
                { k: `${business.yearsExperience}`, v: 'Years Experience' },
                { k: '6+', v: 'Towns Served' },
                { k: '100%', v: 'Local Crew' },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <dt className="font-display text-2xl font-extrabold text-brand-yellow sm:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="text-xs font-medium text-brand-fog">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* SERVICES ------------------------------------------------------------ */}
      <Section id="services">
        <SectionHeading
          eyebrow="What We Do"
          title="Crane & Towing, Done Right"
          subtitle="From lifting fishing boats and factory machinery to recovering stranded vehicles on NH-66 - we handle the heavy work so you don't have to."
        />
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={s.title}>
                <Link
                  href={s.href}
                  className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25 transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-fog">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow">
                    Learn more <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </RevealStagger>
      </Section>

      {/* WHY CHOOSE US ------------------------------------------------------- */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Crew Bhatkal Trusts"
            subtitle="Locally run by Kumar Naik, backed by modern hydraulic cranes and a hard-working towing fleet."
          />
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => {
              const Icon = iconMap[w.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={w.title}>
                  <div className="card flex h-full gap-4 p-6">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-fog">{w.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* SERVICE AREAS ------------------------------------------------------- */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Service Areas"
              title="Covering the Uttara Kannada Coast"
              subtitle="Based in Bhatkal, we respond fast across the coastal belt and inland ghats. Wherever you're stuck, we're not far."
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((a) => (
                <Reveal key={a}>
                  <Link
                    href="/areas-we-serve"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-brand-steel/70 px-4 py-3 text-sm font-semibold text-brand-mist transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    {a}
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="btn-primary">
                <PhoneIcon className="h-5 w-5" /> Call for Immediate Help
              </a>
              <Link href="/areas-we-serve" className="btn-ghost">
                All Areas <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Reveal direction="left">
            <MapEmbed />
          </Reveal>
        </div>
      </Section>

      {/* CTA ----------------------------------------------------------------- */}
      <CtaBanner />

      {/* GALLERY PREVIEW ----------------------------------------------------- */}
      <Section className="bg-brand-steel/40">
        <SectionHeading
          eyebrow="On The Job"
          title="Real Work, Real Machines"
          subtitle="Actual photos from our crane and towing jobs across Bhatkal and the coast."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05}>
              <Link
                href="/gallery"
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn-ghost">
            View Full Gallery <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS -------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Customers Say"
          subtitle="A few words from people we've helped across the coast."
        />
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      {/* QUOTE FORM ---------------------------------------------------------- */}
      <section className="section bg-brand-steel/40">
        <div className="container-px grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Request a Quote"
              title="Tell Us What You Need Lifted or Towed"
              subtitle="Send your details and we'll get straight back to you on WhatsApp. For emergencies, always call - it's faster."
            />
            <ul className="mt-8 space-y-4">
              {[
                { Icon: ClockIcon, t: 'Answered 24×7', d: 'Day, night, monsoon - we pick up.' },
                { Icon: MedalIcon, t: 'Licensed operators', d: '10+ years of coastal experience.' },
                { Icon: ShieldIcon, t: 'Safe, insured handling', d: 'Your vehicle and cargo protected.' },
              ].map(({ Icon, t, d }) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-sm text-brand-fog">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
