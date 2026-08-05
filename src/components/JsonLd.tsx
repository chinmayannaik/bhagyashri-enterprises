import { SITE_URL, business, serviceAreas, phonePrimaryDisplay } from '@/lib/site';

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, generated from our own constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LocalBusiness + Organization - rendered once in the root layout. */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoWrecker', 'Organization'],
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    legalName: business.legalName,
    description:
      '24×7 crane service, heavy lifting, boat lifting and vehicle towing in Bhatkal, Karnataka. Licensed operators and quick emergency response across the Uttara Kannada coast.',
    url: SITE_URL,
    telephone: `+91${business.phonePrimary}`,
    email: business.email,
    founder: { '@type': 'Person', name: business.owner },
    image: `${SITE_URL}/images/crane-boat-lifting.jpeg`,
    logo: `${SITE_URL}/icon.svg`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.line,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91${business.phonePrimary}`,
      contactType: 'customer service',
      availableLanguage: ['en', 'kn', 'hi'],
    },
    sameAs: [],
    knowsAbout: [
      'Crane Service',
      'Crane Rental',
      'JCB Crane Hire',
      'Heavy Lifting',
      'Boat Lifting',
      'Vehicle Towing',
      'Car Towing',
      'Breakdown Recovery',
      'Roadside Assistance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Crane & Towing Services',
      itemListElement: [
        'Crane Rental in Bhatkal',
        'JCB Crane Hire',
        'Heavy Equipment Lifting',
        'Boat Lifting & Launching',
        'Vehicle Recovery',
        '24x7 Emergency Towing',
        'Accident Recovery',
        'Roadside Assistance',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
  return <JsonLdScript data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === '/' ? '' : it.path}`,
    })),
  };
  return <JsonLdScript data={data} />;
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
  return <JsonLdScript data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: serviceAreas.map((n) => ({ '@type': 'City', name: n })),
    telephone: `+91${business.phonePrimary}`,
  };
  return <JsonLdScript data={data} />;
}

export { phonePrimaryDisplay };
