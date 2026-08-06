// ---------------------------------------------------------------------------
// Central business configuration. Edit values here to update the whole site.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://bhagyashri-enterprises.vercel.app';

export const business = {
  name: 'Bhagyashri Crane Service',
  legalName: 'Bhagyashri Crane & Towing Service',
  owner: 'Kumar Naik',
  tagline: '24×7 Crane & Towing Services in Bhatkal',
  subTagline: 'Fast Response • Licensed Operators • Affordable Pricing',
  // Single business number — Kumar Naik (owner). Drives all Call & WhatsApp CTAs.
  phonePrimary: '9731298734',
  email: 'bhagyashricraneservices@gmail.com',
  whatsapp: '919731298734', // international format, no + (Kumar's number)
  address: {
    line: 'NH-66, Hebbale',
    locality: 'Bhatkal',
    region: 'Karnataka',
    postalCode: '581320',
    country: 'IN',
  },
  geo: {
    // Near IndianOil pump, NH-66, Hebbale, Bhatkal (approx.)
    lat: 13.9855,
    lng: 74.5551,
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

// Real business location shared by the owner (Google Maps short link)
export const mapsShortLink = 'https://maps.app.goo.gl/uNaZCk3pv4JsQyqy8';

// "Get Directions" opens the exact pinned place; Directions is one tap away.
export const mapsDirectionsHref = mapsShortLink;

// Iframe-safe embed pinned to the business location via Google's place query.
export const mapsEmbedSrc =
  'https://www.google.com/maps?q=IndianOil,+NH+66,+Hebbale,+Bhatkal,+Karnataka+581320&z=15&output=embed';

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
