import { Section, SectionHeading } from '@/components/ui';
import { Gallery } from '@/components/Gallery';
import { CtaBanner } from '@/components/CtaBanner';
import { Breadcrumbs } from '@/components/PageHero';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Gallery - Crane & Towing Jobs in Bhatkal',
  description:
    'Real photos of Bhagyashree Crane Service at work - boat lifting, heavy machinery, and vehicle towing and recovery across Bhatkal and the Uttara Kannada coast.',
  path: '/gallery',
  image: '/images/crane-fishing-boat.jpeg',
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />
      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]}
        />
        <SectionHeading
          align="left"
          eyebrow="Our Work"
          title="Cranes, Boats & Recoveries"
          subtitle="Every photo here is from a real job on the Bhatkal coast - no stock images. Tap any picture to view it full-size."
        />
        <div className="mt-10">
          <Gallery />
        </div>
      </Section>
      <CtaBanner
        title="Want Us on Your Next Job?"
        subtitle="From boat lifting to breakdown recovery - call and we'll be there."
      />
    </>
  );
}
