import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import { CheckIcon, CraneIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  return buildMetadata({
    title: dict.crane.metaTitle,
    description: dict.meta.crane.description,
    path: '/crane-services',
    locale: params.locale,
    image: '/images/crane-boat-lifting.jpeg',
  });
}

export default function CranePage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.crane, path: '/crane-services' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <ServiceJsonLd
        name={dict.crane.heroTitle}
        description={dict.meta.crane.description}
        path="/crane-services"
        locale={locale}
      />
      <FaqJsonLd items={dict.craneFaqs} />

      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={dict.crane.heroTitle}
        subtitle={dict.crane.heroSubtitle}
        image="/images/crane-boat-lifting.jpeg"
        imageAlt={dict.galleryCaptions['crane-boat-lifting']}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.crane.introEyebrow}
              title={dict.crane.introTitle}
              subtitle={dict.crane.introSubtitle}
            />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {dict.crane.useCases.map((u) => (
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
                alt={dict.galleryCaptions['crane-fishing-boat']}
                width={1600}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow={dict.crane.servicesEyebrow}
            title={dict.crane.servicesTitle}
            subtitle={dict.crane.servicesSubtitle}
          />
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.craneServices.map((s) => (
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

      <CtaBanner dict={dict} title={dict.crane.ctaTitle} subtitle={dict.crane.ctaSubtitle} />

      <Section>
        <SectionHeading
          eyebrow={dict.crane.faqEyebrow}
          title={dict.crane.faqTitle}
          subtitle={dict.crane.faqSubtitle}
        />
        <div className="mt-10">
          <Faq items={dict.craneFaqs} />
        </div>
      </Section>
    </>
  );
}
