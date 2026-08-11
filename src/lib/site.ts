// ---------------------------------------------------------------------------
// Central business configuration. Edit values here to update the whole site.
// ---------------------------------------------------------------------------

// Live domain. Drives canonical URLs, hreflang, OpenGraph, sitemap and JSON-LD,
// so it must match the primary domain configured in Vercel (apex, non-www).
export const SITE_URL = 'https://bhagyashrienterprise.in';

export const business = {
  name: 'Bhagyashri Cranes & Towing Service',
  legalName: 'Bhagyashri Crane & Towing Service',
  owner: 'Kumar Naik',
  tagline: '24×7 Crane & Towing Services in Bhatkal',
  subTagline: 'Fast Response • Licensed Operators • Affordable Pricing',
  // Single business number — Kumar Naik (owner). Drives all Call & WhatsApp CTAs.
  phonePrimary: '9731298734',
  email: 'bhagyashricraneservices@gmail.com',
  whatsapp: '919731298734', // international format, no + (Kumar's number)
  // Kept identical to the Google Business Profile listing. Matching name,
  // address and phone across the site and GBP ("NAP consistency") is a real
  // local-ranking factor — don't make these more specific than the profile.
  address: {
    line: '',
    locality: 'Bhatkal',
    region: 'Karnataka',
    postalCode: '581320',
    country: 'IN',
  },
  geo: {
    // Exact pin from the Google Business listing.
    lat: 13.9981372,
    lng: 74.5462643,
  },
  hours: '24 Hours · 7 Days a Week',
  founded: '2014',
  yearsExperience: '10+',
} as const;

// Pretty-printed phone number
export const phonePrimaryDisplay = '+91 97312 98734';

// tel: / wa.me / maps helpers ----------------------------------------------
export const telHref = `tel:+91${business.phonePrimary}`;

export const whatsappMessage =
  'Hi Bhagyashri Crane Service, I need crane / towing assistance. Please share details.';
export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

// The business's own Google Maps / Business Profile listing.
export const mapsShortLink = 'https://maps.app.goo.gl/D4EnjkoPrwKnMjvA6';

/** Google's internal id for the listing — used in JSON-LD to tie the site to it. */
export const googlePlaceCid = '0x3bbc43882f3a3705:0x1a056e6795ee77e9';

// "Get Directions" opens the listing itself, so customers see the business
// name, reviews and photos rather than a bare pin.
export const mapsDirectionsHref = mapsShortLink;

// Iframe-safe embed showing the business's own listing, not a nearby landmark.
export const mapsEmbedSrc =
  'https://www.google.com/maps?q=bhagyashri+crane+%26+towing+services,+Bhatkal,+Karnataka+581320&z=16&output=embed';

// Navigation ----------------------------------------------------------------
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/crane-services', label: 'Crane Services' },
  { href: '/vehicle-towing', label: 'Vehicle Towing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/areas-we-serve', label: 'Areas We Serve' },
  { href: '/contact', label: 'Contact' },
] as const;

export const serviceAreas = [
  'Bhatkal',
  'Murudeshwar',
  'Honnavar',
  'Kumta',
  'Sirsi',
  'Karwar',
] as const;
