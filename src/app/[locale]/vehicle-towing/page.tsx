import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { RevealStagger, StaggerItem, Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { iconMap, PhoneIcon, AlertIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { telHref, phonePrimaryDisplay } from '@/lib/site';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  const en = getDictionary('en');
  return buildMetadata({
    title: dict.towing.metaTitle,
    description: dict.meta.towing.description,
    ogTitle: en.towing.metaTitle,
    ogDescription: en.meta.towing.description,
    path: '/vehicle-towing',
    locale: params.locale,
  });
}

export default function TowingPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.towing, path: '/vehicle-towing' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <ServiceJsonLd
        name={dict.towing.heroTitle}
        description={dict.meta.towing.description}
        path="/vehicle-towing"
        locale={locale}
      />
      <FaqJsonLd items={dict.towingFaqs} />

      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={dict.towing.heroTitle}
        subtitle={dict.towing.heroSubtitle}
        image="/images/towing-innova.jpeg"
        imageAlt={dict.galleryCaptions['towing-innova']}
      />

      <section className="border-b border-white/10 bg-gradient-to-r from-brand-amber/15 to-transparent">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="flex items-center gap-2.5 text-center text-sm font-semibold text-brand-mist sm:text-left">
            <AlertIcon className="h-5 w-5 flex-shrink-0 text-brand-yellow" />
            {dict.towing.emergencyBanner}
          </p>
          <a href={telHref} className="btn-primary w-full sm:w-auto">
            <PhoneIcon className="h-5 w-5" /> {dict.common.call} {phonePrimaryDisplay}
          </a>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow={dict.towing.servicesEyebrow}
          title={dict.towing.servicesTitle}
          subtitle={dict.towing.servicesSubtitle}
        />
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.towingServices.map((s) => {
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

      <section className="section bg-brand-steel/40">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.towing.stepsEyebrow}
              title={dict.towing.stepsTitle}
              subtitle={dict.towing.stepsSubtitle}
            />
            <ol className="mt-8 space-y-4">
              {dict.towing.steps.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-b from-brand-yellow to-brand-amber font-display text-lg font-extrabold text-black">
                    {i + 1}
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
                alt={dict.galleryCaptions['towing-suv-ghat']}
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner dict={dict} title={dict.towing.ctaTitle} subtitle={dict.towing.ctaSubtitle} />

      <Section>
        <SectionHeading
          eyebrow={dict.towing.faqEyebrow}
          title={dict.towing.faqTitle}
          subtitle={dict.towing.faqSubtitle}
        />
        <div className="mt-10">
          <Faq items={dict.towingFaqs} />
        </div>
      </Section>
    </>
  );
}
