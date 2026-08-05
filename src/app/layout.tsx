import type { Metadata, Viewport } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { StickyCallBar } from '@/components/StickyCallBar';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { SITE_URL, business } from '@/lib/site';

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '24×7 Crane & Towing Service in Bhatkal | Bhagyashri Crane Service',
    template: '%s | Bhagyashri Crane Service',
  },
  description:
    'Bhagyashri Crane Service - 24×7 crane rental, heavy lifting, boat lifting & vehicle towing in Bhatkal, Karnataka. Fast response, licensed operators, affordable pricing. Call 8105941529.',
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
  ],
  authors: [{ name: business.owner }],
  creator: business.name,
  publisher: business.name,
  category: 'Crane & Towing Services',
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen">
        <OrganizationJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <StickyCallBar />
      </body>
    </html>
  );
}
