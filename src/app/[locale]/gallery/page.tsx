import { Section, SectionHeading } from '@/components/ui';
import { Gallery } from '@/components/Gallery';
import { CtaBanner } from '@/components/CtaBanner';
import { Breadcrumbs } from '@/components/PageHero';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { getGalleryImages } from '@/lib/gallery';
import { getDictionary, type Locale } from '@/i18n';

type Props = { params: { locale: Locale } };

export function generateMetadata({ params }: Props) {
  const dict = getDictionary(params.locale);
  return buildMetadata({
    title: dict.gallery.metaTitle,
    description: dict.meta.gallery.description,
    path: '/gallery',
    locale: params.locale,
    image: '/images/crane-fishing-boat.jpeg',
  });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const images = await getGalleryImages(dict);
  const crumbs = [
    { name: dict.nav.home, path: '/' },
    { name: dict.nav.gallery, path: '/gallery' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} locale={locale} />
      <Section>
        <Breadcrumbs items={crumbs} locale={locale} />
        <SectionHeading
          align="left"
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />
        <div className="mt-10">
          <Gallery images={images} labels={dict.gallery} />
        </div>
      </Section>
      <CtaBanner
        dict={dict}
        title={dict.gallery.ctaTitle}
        subtitle={dict.gallery.ctaSubtitle}
      />
    </>
  );
}
