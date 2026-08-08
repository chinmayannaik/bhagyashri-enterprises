import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Inter, Barlow_Condensed, Noto_Sans_Kannada } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { StickyCallBar } from '@/components/StickyCallBar';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { SITE_URL, business } from '@/lib/site';
import { OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, OG_IMAGE_ALT } from '@/lib/seo';
import {
  getDictionary,
  locales,
  isLocale,
  localeHtmlLang,
  localeOgLocale,
  pathFor,
  defaultLocale,
  type Locale,
} from '@/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

// Kannada script needs its own family — Inter/Barlow have no Kannada glyphs.
const kannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-kannada',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  // Share cards are always English — links travel well beyond Kannada readers.
  const en = getDictionary('en');
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.home.title,
      template: `%s | ${business.name}`,
    },
    description: dict.meta.home.description,
    keywords: [
      'Crane Service Bhatkal',
      'Crane Rental Bhatkal',
      'Crane Near Me',
      'JCB Crane Hire',
      '24x7 Crane Service',
      'Heavy Lifting Bhatkal',
      'Vehicle Towing Bhatkal',
      'Car Towing',
      'Roadside Assistance',
      'Emergency Recovery',
      'Breakdown Recovery',
      'Boat Lifting Bhatkal',
      'Man Bucket Crane',
      'Aerial Work Platform Bhatkal',
      'Man Lift Bhatkal',
      'ಕ್ರೇನ್ ಸೇವೆ ಭಟ್ಕಳ',
      'ಕ್ರೇನ್ ಬಾಡಿಗೆ',
      'ವಾಹನ ಟೋಯಿಂಗ್ ಭಟ್ಕಳ',
      'ಟೋಯಿಂಗ್ ಸೇವೆ',
      'ಭಾರ ಎತ್ತುವಿಕೆ',
    ],
    authors: [{ name: business.owner }],
    creator: business.name,
    publisher: business.name,
    category: 'Crane & Towing Services',
    formatDetection: { telephone: true, address: true, email: true },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    // Root-level share card. Individual pages override title/description/url
    // via buildMetadata, but this guarantees any route has a valid preview.
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${pathFor('/', locale)}`,
      title: en.meta.home.title,
      description: en.meta.home.description,
      siteName: business.name,
      locale: 'en_IN',
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE}`,
          secureUrl: `${SITE_URL}${OG_IMAGE}`,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: OG_IMAGE_ALT,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: en.meta.home.title,
      description: en.meta.home.description,
      images: [{ url: `${SITE_URL}${OG_IMAGE}`, alt: OG_IMAGE_ALT }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#FDBA12',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={`${inter.variable} ${display.variable} ${kannada.variable}`}
    >
      <body className={`min-h-screen ${locale === 'kn' ? 'font-kannada' : ''}`}>
        <OrganizationJsonLd locale={locale} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-black"
        >
          {dict.common.home}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" className="pb-20 sm:pb-0">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <FloatingActions dict={dict} />
        <StickyCallBar dict={dict} />
      </body>
    </html>
  );
}
