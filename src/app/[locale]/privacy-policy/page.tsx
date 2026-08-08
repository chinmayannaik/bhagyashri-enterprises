import { Section } from '@/components/ui';
import { Breadcrumbs } from '@/components/PageHero';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { business, phonePrimaryDisplay, telHref } from '@/lib/site';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  const en = getDictionary('en');
  return buildMetadata({
    title: dict.privacy.metaTitle,
    description: dict.meta.privacy.description,
    ogTitle: en.privacy.metaTitle,
    ogDescription: en.meta.privacy.description,
    path: '/privacy-policy',
    locale: params.locale,
  });
}

export default function PrivacyPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.privacy, path: '/privacy-policy' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <Section>
        <Breadcrumbs items={crumbs} locale={locale} />
        <div className="mx-auto max-w-3xl">
          <h1 className="h-display text-4xl text-white sm:text-5xl">{dict.privacy.title}</h1>
          <p className="mt-3 text-sm text-brand-fog">
            {dict.privacy.lastUpdated}: {dict.privacy.updatedValue}
          </p>

          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-brand-fog">
            <p>{dict.privacy.intro}</p>

            {dict.privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="h-display text-xl text-white">{section.title}</h2>
                <div className="mt-3">
                  {section.items.length > 1 ? (
                    <ul className="list-disc space-y-1.5 pl-5">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.items[0]}</p>
                  )}
                </div>
              </section>
            ))}

            <p>
              <a href={telHref} className="font-semibold text-brand-yellow">
                {phonePrimaryDisplay}
              </a>{' '}
              ·{' '}
              <a
                href={`mailto:${business.email}`}
                className="font-semibold text-brand-yellow"
              >
                {business.email}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
