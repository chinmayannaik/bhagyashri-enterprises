import { notFound } from 'next/navigation';
import { NearMePage } from '@/components/NearMePage';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, type Locale } from '@/i18n';
import { getNearMe } from '@/i18n/nearme';

type Props = { params: { locale: Locale } };
const SLUG = 'towing-near-me';

export function generateMetadata({ params }: Props) {
  const copy = getNearMe(params.locale, SLUG);
  const en = getNearMe('en', SLUG);
  if (!copy || !en) return {};
  return buildMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    ogTitle: en.metaTitle,
    ogDescription: en.metaDescription,
    path: `/${SLUG}`,
    locale: params.locale,
  });
}

export default function TowingNearMe({ params }: Props) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const copy = getNearMe(locale, SLUG);
  if (!copy) notFound();

  return (
    <NearMePage
      copy={copy}
      locale={locale}
      dict={dict}
      image="/images/towing-suv-ghat.jpeg"
      imageAlt={dict.galleryCaptions['towing-suv-ghat']}
      navLabel={dict.nav.towing}
    />
  );
}
