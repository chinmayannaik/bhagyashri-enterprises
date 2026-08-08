// ---------------------------------------------------------------------------
// Per-town landing page copy (English).
//
// Each town gets genuinely distinct wording — Google demotes location pages
// that are the same paragraph with the name swapped, so every intro, crane and
// towing block below references real local geography.
// ---------------------------------------------------------------------------

export type LocationCopy = {
  slug: string;
  name: string;
  district: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  intro: string;
  crane: string;
  towing: string;
  landmarks: string[];
  responseNote: string;
  faqs: { q: string; a: string }[];
};

const locations: Record<string, LocationCopy> = {
  bhatkal: {
    slug: 'bhatkal',
    name: 'Bhatkal',
    district: 'Uttara Kannada',
    metaTitle: 'Crane Service in Bhatkal | 24×7 Crane Hire & Towing',
    metaDescription:
      'Crane service and vehicle towing in Bhatkal, 24×7. Boat lifting at the fishing harbour, heavy lifting, machinery shifting and breakdown recovery on NH-66. Call 9731298734.',
    h1: 'Crane Service & Towing in Bhatkal',
    lead: 'We are based in Bhatkal — this is where we reach fastest, at any hour.',
    intro:
      'Our yard is on NH-66 at Hebbale, so Bhatkal is home ground. Town lanes, the fishing harbour, the industrial sheds off the highway and the residential areas inland — our operators drive these roads every day and do not need directions to find you.',
    crane:
      'Most of our Bhatkal crane work is coastal: lifting fishing boats and trawlers on and off lorries at the harbour, and moving them to and from repair yards. Alongside that we handle machinery shifting for local units, generator and transformer placement, and lifting materials on building sites around town. We work right through the monsoon, when boat handling is at its heaviest.',
    towing:
      'Breakdowns on the Bhatkal stretch of NH-66 are our most frequent towing call, day and night. We recover cars, SUVs and pickups, handle accident recovery carefully, and tow to whichever garage or showroom you prefer. Because we are local, there is no long wait for a crew to travel in from another town.',
    landmarks: [
      'Bhatkal fishing harbour & jetty',
      'NH-66 through Hebbale and Jali',
      'Bhatkal town centre & market lanes',
      'Industrial sheds and workshops off the highway',
      'Bhatkal railway station road',
      'Coastal villages around Bhatkal',
    ],
    responseNote:
      'Bhatkal is our base, so response here is the quickest we offer — call and we will give you an honest arrival time straight away.',
    faqs: [
      {
        q: 'How fast can you reach me in Bhatkal?',
        a: 'Our yard is in Bhatkal itself, on NH-66 at Hebbale, so for most locations in and around town we mobilise quickly. Call 9731298734 with your exact spot and we will tell you honestly how long we need.',
      },
      {
        q: 'Do you lift fishing boats at Bhatkal harbour?',
        a: 'Yes — boat and trawler lifting is one of our main jobs here. We load and unload boats onto lorries and move them to repair yards, including during heavy monsoon.',
      },
    ],
  },

  honnavar: {
    slug: 'honnavar',
    name: 'Honnavar',
    district: 'Uttara Kannada',
    metaTitle: 'Crane Service in Honnavar | Crane Hire & Vehicle Towing 24×7',
    metaDescription:
      'Crane hire, heavy lifting and 24×7 vehicle towing in Honnavar. Boat handling near the Sharavathi estuary, machinery shifting and breakdown recovery on NH-66. Call 9731298734.',
    h1: 'Crane Service & Towing in Honnavar',
    lead: 'Crane hire and recovery across Honnavar, the Sharavathi estuary and the NH-66 corridor.',
    intro:
      'Honnavar sits where the Sharavathi meets the sea, and that shapes the work here — boat yards along the river, timber and areca loading, and a long bridge approach on NH-66 where vehicles break down. We run north from Bhatkal to Honnavar regularly.',
    crane:
      'Around Honnavar we lift boats at the riverside yards, shift machinery for workshops and small units, and support contractors with material lifting. The estuary yards often need a crane that can work on soft, uneven ground, and our operators are used to rigging safely in those conditions.',
    towing:
      'The bridge approach and the highway stretch through Honnavar see regular breakdowns, especially in the monsoon. We recover cars, SUVs and light goods vehicles and tow them to a garage in Honnavar or onward to Bhatkal, whichever suits you.',
    landmarks: [
      'Sharavathi river estuary & boat yards',
      'Honnavar bridge and NH-66 approach',
      'Honnavar town and market area',
      'Kasarkod and nearby coastal roads',
      'Timber and areca loading yards',
      'Workshops along the highway',
    ],
    responseNote:
      'Honnavar is a straight run north from our Bhatkal base on NH-66, so we reach it without difficulty at any hour.',
    faqs: [
      {
        q: 'Do you cover Honnavar at night?',
        a: 'Yes. We run 24×7 and Honnavar is a direct run up NH-66 from Bhatkal. Call 9731298734 whatever the hour and we will come.',
      },
      {
        q: 'Can you work at the riverside boat yards?',
        a: 'Yes. We regularly lift and shift boats at yards around the Sharavathi estuary, and our operators are experienced with rigging on soft, uneven ground.',
      },
    ],
  },

  shiroor: {
    slug: 'shiroor',
    name: 'Shiroor',
    district: 'Udupi',
    metaTitle: 'Crane Service in Shiroor | Crane Hire & Towing on NH-66',
    metaDescription:
      'Crane service, heavy lifting and 24×7 vehicle towing in Shiroor. Fast breakdown and accident recovery on the NH-66 coastal stretch. Call 9731298734.',
    h1: 'Crane Service & Towing in Shiroor',
    lead: 'Quick crane and recovery support for Shiroor and the surrounding NH-66 stretch.',
    intro:
      'Shiroor lies just south of Bhatkal on NH-66, which makes it one of the fastest places for us to reach outside our own town. It is a busy highway stretch with steady traffic between Uttara Kannada and Udupi district, and that means regular calls for recovery.',
    crane:
      'Crane work around Shiroor is a mix of coastal and construction jobs — lifting materials on building sites, shifting equipment for small units and workshops, and occasional boat and heavy-load handling near the coast. Tell us the weight and access and we will bring the right capacity machine.',
    towing:
      'Highway breakdowns and accident recovery make up most of our Shiroor towing work. Because it is close to our base, we get there quickly — important on a fast stretch of NH-66 where a stranded vehicle is a hazard. We tow cars, SUVs and pickups to your chosen garage.',
    landmarks: [
      'NH-66 highway through Shiroor',
      'Shiroor Mutt and temple area',
      'Coastal roads and beach access tracks',
      'Roadside workshops and dhabas',
      'Building sites along the highway',
      'Villages inland from the highway',
    ],
    responseNote:
      'Shiroor is one of the closest towns to our Bhatkal base, so it gets near-Bhatkal response times.',
    faqs: [
      {
        q: 'My car broke down on NH-66 near Shiroor. How soon can you come?',
        a: 'Shiroor is very close to our Bhatkal base, so this is one of our quickest routes. Move to a safe spot, put your hazard lights on, and call 9731298734 with your location.',
      },
      {
        q: 'Do you handle accident recovery at Shiroor?',
        a: 'Yes, day or night. We recover accident-hit vehicles carefully to avoid further damage and tow them to a garage or showroom of your choice.',
      },
    ],
  },

  byndoor: {
    slug: 'byndoor',
    name: 'Byndoor',
    district: 'Udupi',
    metaTitle: 'Crane Service in Byndoor | 24×7 Crane Hire & Vehicle Towing',
    metaDescription:
      'Crane hire, heavy lifting and 24×7 towing in Byndoor. Breakdown recovery on NH-66, boat and machinery lifting near Someshwara. Call 9731298734.',
    h1: 'Crane Service & Towing in Byndoor',
    lead: 'Crane hire and 24×7 vehicle recovery across Byndoor and the coast around it.',
    intro:
      'Byndoor sits on NH-66 in northern Udupi district, with the coast on one side and the road up to Kollur inland. We cover it as part of our regular southern run from Bhatkal, so it is well within reach for both planned crane work and emergencies.',
    crane:
      'Around Byndoor we handle boat lifting near the coast, machinery and equipment shifting for local units, and lifting for building work. The inland road towards Kollur brings its own jobs — transformer and pole work, and materials for construction away from the highway.',
    towing:
      'Byndoor towing calls are mostly highway breakdowns and recovery for vehicles that have slipped off the shoulder or a narrow side road. We also get calls from travellers heading to Kollur and the coast. Cars, SUVs and pickups all handled, at any hour.',
    landmarks: [
      'NH-66 through Byndoor',
      'Someshwara beach and coastal roads',
      'Byndoor railway station area',
      'Road inland towards Kollur',
      'Fishing points and jetties nearby',
      'Local workshops and building sites',
    ],
    responseNote:
      'Byndoor is on our regular southern route down NH-66, so we cover it reliably day and night.',
    faqs: [
      {
        q: 'Do you provide towing in Byndoor at night?',
        a: 'Yes, we operate 24×7 and Byndoor is on our regular NH-66 route south of Bhatkal. Call 9731298734 with your location, ideally with a WhatsApp live location.',
      },
      {
        q: 'Can you bring a crane for work near Kollur road?',
        a: 'Yes. We take crane jobs inland from Byndoor too, including transformer, pole and construction material lifting. Tell us the load and access and we will confirm the right machine.',
      },
    ],
  },

  kundapura: {
    slug: 'kundapura',
    name: 'Kundapura',
    district: 'Udupi',
    metaTitle: 'Crane Service in Kundapura | Crane Hire, Boat Lifting & Towing',
    metaDescription:
      'Crane service in Kundapura for boat lifting, heavy machinery and construction, plus 24×7 vehicle towing and breakdown recovery on NH-66. Call 9731298734.',
    h1: 'Crane Service & Towing in Kundapura',
    lead: 'Crane hire, boat handling and round-the-clock recovery across Kundapura.',
    intro:
      'Kundapura is one of the busiest fishing and trading towns on this coast, with the Panchagangavalli river, the Gangolli side and a steady flow of goods traffic on NH-66. That mix means plenty of both crane work and vehicle recovery, and we run here regularly from Bhatkal.',
    crane:
      'Boat and trawler handling is the biggest part of our Kundapura crane work — loading and unloading at the harbour side and moving hulls to and from repair yards. We also lift machinery for workshops and cold storage units, place generators and transformers, and support contractors with construction lifting.',
    towing:
      'Kundapura sees heavy goods and passenger traffic, and breakdowns on the highway and around the town are common. We recover cars, SUVs, pickups and light commercial vehicles, handle accident recovery, and tow to the garage you choose.',
    landmarks: [
      'Kundapura fishing harbour & Gangolli side',
      'Panchagangavalli river and bridges',
      'NH-66 through Kundapura',
      'Maravante and Trasi coastal stretch',
      'Cold storage and workshop units',
      'Kundapura town market area',
    ],
    responseNote:
      'Kundapura is a regular route for us down NH-66. For planned crane work, calling a day ahead gets you the best slot.',
    faqs: [
      {
        q: 'Do you lift boats at Kundapura harbour?',
        a: 'Yes. Boat and trawler lifting is one of our specialities and Kundapura is one of the places we do it most. We load and unload from lorries and move hulls to repair yards.',
      },
      {
        q: 'Is towing available in Kundapura 24 hours?',
        a: 'Yes. We answer 24×7 and cover Kundapura and the surrounding NH-66 stretch. Call 9731298734 and share your exact location.',
      },
    ],
  },

  udupi: {
    slug: 'udupi',
    name: 'Udupi',
    district: 'Udupi',
    metaTitle: 'Crane Service in Udupi | Crane Hire, Heavy Lifting & Towing',
    metaDescription:
      'Crane hire and heavy lifting in Udupi, plus vehicle towing and breakdown recovery. Serving Udupi town, Malpe and Manipal on NH-66. Call 9731298734.',
    h1: 'Crane Service & Towing in Udupi',
    lead: 'Crane hire, industrial lifting and vehicle recovery across Udupi, Malpe and Manipal.',
    intro:
      'Udupi is the largest town we serve on the southern side — a district headquarters with the Krishna Matha at its centre, the Malpe fishing harbour on the coast and Manipal just inland. Between temple-town traffic, the harbour and the constant vehicle movement around Manipal, there is steady demand for both crane work and recovery.',
    crane:
      'In Udupi we take on machinery shifting for units and workshops, generator, transformer and DG set placement, construction lifting for contractors, and boat handling on the Malpe side. Access is often tight in the older parts of town, so we plan the lift and the approach before we arrive.',
    towing:
      'Udupi towing calls come from all over — the highway, town roads, and the Manipal area where there are a lot of cars. We handle breakdowns, accident recovery and roadside assistance for cars, SUVs and pickups, and tow to your preferred garage or showroom.',
    landmarks: [
      'Udupi town & Sri Krishna Matha area',
      'Malpe harbour and beach road',
      'Manipal and the road up from Udupi',
      'NH-66 bypass and service roads',
      'Industrial units and workshops',
      'Brahmavar side and nearby villages',
    ],
    responseNote:
      'Udupi is the far end of our southern range. For emergencies we still come, and for planned crane work please give us a little notice so we can schedule the machine.',
    faqs: [
      {
        q: 'Do you really travel to Udupi from Bhatkal?',
        a: 'Yes — Udupi is the southern end of our range and we serve it along NH-66. For emergency towing we come as fast as the distance allows; for planned crane work, a day of notice helps us give you a proper slot.',
      },
      {
        q: 'Can you handle lifting in narrow Udupi town roads?',
        a: 'Yes. Tight access is common in older parts of town, so we ask about the approach and the load beforehand and bring a crane that can work in the space available.',
      },
    ],
  },
};

export default locations;
export const locationSlugs = Object.keys(locations);
