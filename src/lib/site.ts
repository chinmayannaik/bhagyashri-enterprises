// ---------------------------------------------------------------------------
// Central business configuration. Edit values here to update the whole site.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://bhagyashreecrane.com';

export const business = {
  name: 'Bhagyashri Crane Service',
  legalName: 'Bhagyashri Crane & Towing Service',
  owner: 'Kumar Naik',
  tagline: '24×7 Crane & Towing Services in Bhatkal',
  subTagline: 'Fast Response • Licensed Operators • Affordable Pricing',
  // Primary phone drives all Call-Now buttons
  phonePrimary: '8105941529',
  phoneSecondary: '9731298734',
  email: 'bhagyashricraneservices@gmail.com',
  whatsapp: '918105941529', // international format, no +
  address: {
    line: 'Bhatkal',
    locality: 'Bhatkal',
    region: 'Karnataka',
    postalCode: '581320',
    country: 'IN',
  },
  geo: {
    // Bhatkal town coordinates
    lat: 13.9855,
    lng: 74.5551,
  },
  hours: '24 Hours · 7 Days a Week',
  founded: '2014',
  yearsExperience: '10+',
} as const;

// Pretty-printed phone numbers
export const phonePrimaryDisplay = '+91 81059 41529';
export const phoneSecondaryDisplay = '+91 97312 98734';

// tel: / wa.me / maps helpers ----------------------------------------------
export const telHref = `tel:+91${business.phonePrimary}`;
export const telHrefSecondary = `tel:+91${business.phoneSecondary}`;

export const whatsappMessage =
  'Hi Bhagyashri Crane Service, I need crane / towing assistance. Please share details.';
export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${business.geo.lat},${business.geo.lng}&destination_place_id=Bhatkal`;

export const mapsEmbedSrc =
  'https://www.google.com/maps?q=Bhatkal,Karnataka%20581320&z=13&output=embed';

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
