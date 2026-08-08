import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Testimonials } from '@/components/Testimonials';
import { MapEmbed } from '@/components/MapEmbed';
import { QuoteForm } from '@/components/QuoteForm';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { iconMap, PhoneIcon, WhatsAppIcon, ArrowIcon, ClockIcon } from '@/components/Icons';
import {
  business,
  serviceAreas,
  telHref,
  whatsappHref,
  phonePrimaryDisplay,
} from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { getGalleryImages } from '@/lib/gallery';
import { getDictionary, pathFor, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  return buildMetadata({
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    path: '/',
    locale: params.locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const galleryImages = await getGalleryImages(dict);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: dict.nav.home, path: '/' }]} locale={locale} />

      {/* HERO ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/crane-fishing-boat.jpeg"
            alt={dict.galleryCaptions['crane-fishing-boat']}
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
              <ClockIcon className="h-3.5 w-3.5" /> {dict.common.availableNow}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h-display mt-5 max-w-4xl text-[2.6rem] leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {dict.home.heroTitleA}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-lg font-medium text-brand-mist/90 sm:text-xl">
              {dict.home.heroSubtitle}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-fog">
              {dict.home.heroBody}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref} className="btn-primary text-lg">
                <PhoneIcon className="h-5 w-5" /> {dict.common.callNow} {phonePrimaryDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa text-lg"
              >
                <WhatsAppIcon className="h-5 w-5" /> {dict.common.whatsappUs}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: '24×7', v: dict.home.stats.availability },
                { k: business.yearsExperience, v: dict.home.stats.experience },
                { k: '6+', v: dict.home.stats.towns },
                { k: '100%', v: dict.home.stats.localCrew },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
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
          eyebrow={dict.home.servicesEyebrow}
          title={dict.home.servicesTitle}
          subtitle={dict.home.servicesSubtitle}
        />
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.homeServices.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={s.title}>
                <Link
                  href={pathFor(s.href, locale)}
                  className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/40 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow/15 text-brand-yellow ring-1 ring-brand-yellow/25 transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-fog">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow">
                    {dict.common.learnMore}{' '}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            eyebrow={dict.home.whyEyebrow}
            title={dict.home.whyTitle}
            subtitle={dict.home.whySubtitle}
          />
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.whyChooseUs.map((w) => {
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
              eyebrow={dict.home.areasEyebrow}
              title={dict.home.areasTitle}
              subtitle={dict.home.areasSubtitle}
            />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((a) => (
                <Reveal key={a}>
                  <Link
                    href={pathFor('/areas-we-serve', locale)}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-brand-steel/70 px-4 py-3 text-sm font-semibold text-brand-mist transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
                  >
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-yellow" />
                    {dict.serviceAreaNames[a]}
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="btn-primary">
                <PhoneIcon className="h-5 w-5" /> {dict.common.callForHelp}
              </a>
              <Link href={pathFor('/areas-we-serve', locale)} className="btn-ghost">
                {dict.common.allAreas} <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Reveal direction="left">
            <MapEmbed dict={dict} />
          </Reveal>
        </div>
      </Section>

      {/* CTA ----------------------------------------------------------------- */}
      <CtaBanner dict={dict} />

      {/* GALLERY PREVIEW ----------------------------------------------------- */}
      <Section className="bg-brand-steel/40">
        <SectionHeading
          eyebrow={dict.home.galleryEyebrow}
          title={dict.home.galleryTitle}
          subtitle={dict.home.gallerySubtitle}
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05}>
              <Link
                href={pathFor('/gallery', locale)}
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
          <Link href={pathFor('/gallery', locale)} className="btn-ghost">
            {dict.common.viewFullGallery} <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS -------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow={dict.home.testimonialsEyebrow}
          title={dict.home.testimonialsTitle}
          subtitle={dict.home.testimonialsSubtitle}
        />
        <div className="mt-12">
          <Testimonials dict={dict} />
        </div>
      </Section>

      {/* QUOTE --------------------------------------------------------------- */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow={dict.home.quoteEyebrow}
            title={dict.home.quoteTitle}
            subtitle={dict.home.quoteSubtitle}
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <QuoteForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
