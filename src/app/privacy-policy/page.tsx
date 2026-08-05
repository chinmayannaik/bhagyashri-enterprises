import { Section } from '@/components/ui';
import { Breadcrumbs } from '@/components/PageHero';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { business, phonePrimaryDisplay, telHref } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Bhagyashree Crane Service, Bhatkal. How we handle the information you share when you contact us for crane or towing services.',
  path: '/privacy-policy',
});

const updated = 'August 2026';

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />
      <Section>
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy-policy' },
          ]}
        />
        <div className="mx-auto max-w-3xl">
          <h1 className="h-display text-4xl text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-brand-fog">Last updated: {updated}</p>

          <div className="prose-invert mt-8 space-y-8 text-[15px] leading-relaxed text-brand-fog">
            <section>
              <p>
                This Privacy Policy explains how {business.name} (&quot;we&quot;, &quot;us&quot;)
                handles information when you visit our website or contact us for crane, lifting or
                towing services in Bhatkal and nearby areas. We keep things simple: we only use the
                details you share to help you with your request.
              </p>
            </section>

            <Block title="Information We Collect">
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-brand-mist">Details you give us</strong> — such as your
                  name, phone number, location and job details when you call, WhatsApp, email or
                  submit our quote form.
                </li>
                <li>
                  <strong className="text-brand-mist">Basic usage data</strong> — like the pages you
                  visit, collected through standard analytics to help us improve the website.
                </li>
              </ul>
            </Block>

            <Block title="How We Use Your Information">
              <ul className="list-disc space-y-1.5 pl-5">
                <li>To respond to your enquiry and provide crane or towing services.</li>
                <li>To give you a quote and coordinate the job.</li>
                <li>To follow up about work you have requested.</li>
                <li>To improve our website and services.</li>
              </ul>
            </Block>

            <Block title="Sharing of Information">
              <p>
                We do not sell or rent your information. We only share details when it is necessary
                to carry out your requested service, or where required by law.
              </p>
            </Block>

            <Block title="WhatsApp & Third-Party Tools">
              <p>
                When you contact us on WhatsApp or use links to Google Maps, your interaction is also
                subject to those providers&apos; own privacy policies. Our quote form opens WhatsApp
                with the details you enter so you can send them to us directly.
              </p>
            </Block>

            <Block title="Data Retention">
              <p>
                We keep enquiry details only as long as needed to serve you and maintain our normal
                business records. You can ask us to delete your details at any time.
              </p>
            </Block>

            <Block title="Your Choices">
              <p>
                You may contact us to review, update or delete the information you have shared. Simply
                call{' '}
                <a href={telHref} className="font-semibold text-brand-yellow">
                  {phonePrimaryDisplay}
                </a>{' '}
                or email{' '}
                <a href={`mailto:${business.email}`} className="font-semibold text-brand-yellow">
                  {business.email}
                </a>
                .
              </p>
            </Block>

            <Block title="Contact Us">
              <p>
                For any questions about this Privacy Policy or your information, reach{' '}
                {business.name}, {business.address.locality}, {business.address.region}{' '}
                {business.address.postalCode} — phone{' '}
                <a href={telHref} className="font-semibold text-brand-yellow">
                  {phonePrimaryDisplay}
                </a>
                .
              </p>
            </Block>
          </div>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="h-display text-xl text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
