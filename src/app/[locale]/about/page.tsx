import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui';
import { Reveal, RevealStagger, StaggerItem } from '@/components/Reveal';
import { CtaBanner } from '@/components/CtaBanner';
import { Testimonials } from '@/components/Testimonials';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { CheckIcon, ClockIcon, MedalIcon, ShieldIcon } from '@/components/Icons';
import { buildMetadata } from '@/lib/seo';
import { business } from '@/lib/site';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  const en = getDictionary('en');
  return buildMetadata({
    title: dict.about.metaTitle,
    description: dict.meta.about.description,
    ogTitle: en.about.metaTitle,
    ogDescription: en.meta.about.description,
    path: '/about',
    locale: params.locale,
  });
}

export default function AboutPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.about, path: '/about' },
  ];

  const stats = [
    { Icon: ClockIcon, k: '24×7', v: dict.home.stats.availability },
    { Icon: MedalIcon, k: business.yearsExperience, v: dict.home.stats.experience },
    { Icon: ShieldIcon, k: '6+', v: dict.home.stats.towns },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <PageHero
        breadcrumbs={crumbs}
        locale={locale}
        dict={dict}
        title={dict.about.heroTitle}
        subtitle={dict.about.heroSubtitle}
        image="/images/crane-towing-fleet.jpeg"
        imageAlt={dict.galleryCaptions['crane-towing-fleet']}
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.about.storyEyebrow}
              title={dict.about.storyTitle}
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-brand-fog">
              <p>{dict.about.storyP1}</p>
              <p>{dict.about.storyP2}</p>
              <p>{dict.about.storyP3}</p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {stats.map(({ Icon, k, v }) => (
                <div
                  key={v}
                  className="rounded-xl border border-white/10 bg-brand-steel/70 px-4 py-3"
                >
                  <Icon className="h-5 w-5 text-brand-yellow" />
                  <dt className="mt-2 font-display text-2xl font-extrabold text-white">{k}</dt>
                  <dd className="text-xs text-brand-fog">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="/images/crane-monsoon-recovery.jpeg"
                alt={dict.galleryCaptions['crane-monsoon-recovery']}
                width={1600}
                height={740}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow={dict.about.missionEyebrow}
            title={dict.about.missionTitle}
            subtitle={dict.about.missionBody}
          />
        </div>
      </section>

      {/* Trust */}
      <Section>
        <SectionHeading
          eyebrow={dict.about.trustEyebrow}
          title={dict.about.trustTitle}
        />
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {dict.about.values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card flex h-full gap-4 p-6">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-fog">{v.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Testimonials */}
      <section className="section bg-brand-steel/40">
        <div className="container-px">
          <SectionHeading
            eyebrow={dict.home.testimonialsEyebrow}
            title={dict.home.testimonialsTitle}
            subtitle={dict.home.testimonialsSubtitle}
          />
          <div className="mt-12">
            <Testimonials dict={dict} />
          </div>
        </div>
      </section>

      <CtaBanner dict={dict} />
    </>
  );
}
