// ---------------------------------------------------------------------------
// "Near me" hub pages (English).
//
// Google rewrites "near me" to the searcher's location rather than matching the
// phrase, so these pages do not target the literal string. They exist to be
// genuinely useful landing pages for someone deciding who to call, and to funnel
// visitors into the six town pages. Thin keyword pages would just add to the
// "Crawled - currently not indexed" pile.
// ---------------------------------------------------------------------------

export type NearMeCopy = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string;
  coverageHeading: string;
  coverageBody: string;
  guideHeading: string;
  guideIntro: string;
  guide: { t: string; d: string }[];
  checklistHeading: string;
  checklistIntro: string;
  checklist: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
};

const nearMe: Record<string, NearMeCopy> = {
  'crane-near-me': {
    slug: 'crane-near-me',
    metaTitle: 'Crane Near Me | 24×7 Crane Hire in Bhatkal, Kundapura & Udupi',
    metaDescription:
      'Looking for a crane near you on the Uttara Kannada or Udupi coast? Bhagyashri Cranes & Towing provides 24×7 hydraulic crane hire, boat lifting and heavy lifting from Honnavar to Udupi. Call 9731298734.',
    h1: 'Looking for a Crane Near You?',
    lead: 'We are based on NH-66 in Bhatkal and cover the coast from Honnavar down to Udupi — 24 hours a day.',
    intro:
      'If you have searched for a crane near you and you are anywhere between Honnavar and Udupi, you are in our area. We run modern hydraulic cranes with licensed operators, and we answer the phone at any hour — including nights, Sundays and right through the monsoon. Tell us the load and the location and you will get an honest arrival time and a clear price before anything starts.',
    coverageHeading: 'Are we near you?',
    coverageBody:
      'These are the towns we reach regularly along NH-66. Tap yours to see what we do there and how quickly we get to you.',
    guideHeading: 'Not sure what size crane you need?',
    guideIntro:
      'You do not need to work this out before calling — just describe the job and we will bring the right machine. But it helps to know roughly what category you are in.',
    guide: [
      {
        t: 'Boats and trawlers',
        d: 'Fishing boats being loaded onto lorries, moved to repair yards or launched. We do this constantly along this coast, including in heavy monsoon.',
      },
      {
        t: 'Machinery and plant',
        d: 'Generators, transformers, DG sets, compressors and factory machinery being shifted or placed. Weight and access matter more than size here.',
      },
      {
        t: 'Construction loads',
        d: 'Steel, shuttering, RCC components, tanks and building materials lifted to height on site.',
      },
      {
        t: 'Awkward or stuck loads',
        d: 'Anything in a tight yard, on soft ground or in a narrow town lane. Send a photo on WhatsApp and we will tell you if it is doable.',
      },
      {
        t: 'Work at height (man bucket)',
        d: 'Streetlights, poles, signage and bridge work using a personnel basket on the boom, with proper safety.',
      },
    ],
    checklistHeading: 'What to tell us when you call',
    checklistIntro:
      'Thirty seconds of detail on the phone saves an hour on site. If you have this ready, we can quote immediately.',
    checklist: [
      'Where you are — a WhatsApp live location is fastest',
      'What needs lifting, and roughly how heavy',
      'How close a truck can get to it',
      'Whether it is a one-off lift or a few hours of work',
      'When you need it — now, today, or a planned date',
    ],
    faqs: [
      {
        q: 'How do I find a crane near me at short notice?',
        a: 'Call 9731298734. We are based in Bhatkal on NH-66 and cover Honnavar, Shirur, Byndoor, Kundapura and Udupi. We will tell you honestly how soon we can reach you rather than making you wait without an answer.',
      },
      {
        q: 'Do you charge more for emergency or night work?',
        a: 'We quote before we start, whatever the hour. Rates depend on the job, distance and how long the crane is engaged - not on how urgently you need it.',
      },
      {
        q: 'Can you come the same day?',
        a: 'Often yes, especially close to Bhatkal. For planned work further out such as Udupi, giving us a day of notice gets you a better slot.',
      },
      {
        q: 'How do I know which crane is right for my job?',
        a: 'You do not need to. Describe the load, or send a photo on WhatsApp, and we will confirm the right capacity machine before we come out.',
      },
    ],
    ctaTitle: 'Need a crane now?',
    ctaSubtitle: 'Call and describe the job — we will tell you straight away if we can reach you.',
  },

  'towing-near-me': {
    slug: 'towing-near-me',
    metaTitle: 'Towing Near Me | 24×7 Vehicle Recovery on NH-66, Bhatkal to Udupi',
    metaDescription:
      'Broken down and looking for towing near you? 24×7 car, SUV and pickup towing, breakdown and accident recovery across Bhatkal, Honnavar, Shirur, Byndoor, Kundapura and Udupi. Call 9731298734.',
    h1: 'Need Towing Near You Right Now?',
    lead: 'Call 9731298734. We recover vehicles across NH-66 from Honnavar to Udupi, at any hour.',
    intro:
      'If you are stranded on the highway or a ghat road anywhere between Honnavar and Udupi, we can reach you. We tow cars, SUVs, jeeps and pickups, and handle breakdown recovery, accident recovery and vehicles that have slipped off the road. Our crew is local to this coast, so we are not travelling in from another district while you wait.',
    coverageHeading: 'Are we near you?',
    coverageBody:
      'These are the stretches we cover along NH-66. Tap the nearest town for local detail and response times.',
    guideHeading: 'Broken down? Do this first',
    guideIntro:
      'Before you worry about the tow, make yourself safe. A stationary vehicle on NH-66 is the real danger, especially at night or in rain.',
    guide: [
      {
        t: 'Get off the carriageway',
        d: 'If the vehicle still rolls, get it onto the shoulder. Do not attempt repairs in a live lane.',
      },
      {
        t: 'Hazard lights on',
        d: 'Switch them on immediately, day or night. Put a warning triangle out behind you if you carry one.',
      },
      {
        t: 'Get everyone out and behind the barrier',
        d: 'Passengers should wait away from the road, not inside the vehicle, on a fast stretch.',
      },
      {
        t: 'Call and send your live location',
        d: 'Ring 9731298734, then drop a WhatsApp live location. That removes all guesswork about where you are.',
      },
      {
        t: 'Note your surroundings',
        d: 'A landmark, a kilometre stone or the nearest town helps us reach you faster if the signal is weak.',
      },
    ],
    checklistHeading: 'What affects the price',
    checklistIntro:
      'We give you a clear figure on the phone before we set out. These are the things that change it.',
    checklist: [
      'How far we travel to you, and how far the vehicle goes after',
      'Vehicle type — a hatchback and a loaded pickup are not the same job',
      'Whether it rolls freely, or the wheels are locked or damaged',
      'Whether it needs pulling out of a ditch, sand or off an embankment',
      'Access — a ghat curve or narrow lane takes longer than an open shoulder',
    ],
    faqs: [
      {
        q: 'How do I get a tow truck near me at night?',
        a: 'Call 9731298734 — we answer 24 hours, including nights, Sundays and holidays. Tell us where you are and we will give you a realistic arrival time.',
      },
      {
        q: 'How long will you take to reach me?',
        a: 'It depends where you are on the NH-66 stretch. Close to Bhatkal and Shirur we are quick. For Udupi or Honnavar it takes longer, and we will tell you the honest figure rather than a comfortable one.',
      },
      {
        q: 'Can you tow my car to my own garage?',
        a: 'Yes. We tow to whichever garage, showroom or address you prefer — not to one of our choosing.',
      },
      {
        q: 'My car is in a ditch, not just broken down. Can you help?',
        a: 'Yes, that is recovery rather than a straight tow. We pull vehicles out of ditches, sand and off embankments using the right equipment so nothing gets bent in the process.',
      },
      {
        q: 'Do you tow bikes or heavy trucks?',
        a: 'We handle cars, SUVs, jeeps, pickups and light commercial vehicles. For anything heavier, call and we will tell you honestly whether we can take it.',
      },
    ],
    ctaTitle: 'Stranded right now?',
    ctaSubtitle: 'Do not wait it out — call and we will come to you, whatever the hour.',
  },
};

export default nearMe;
