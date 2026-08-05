import Link from 'next/link';
import { PhoneIcon, ArrowIcon } from '@/components/Icons';
import { telHref, phonePrimaryDisplay } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="container-px flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="font-display text-7xl font-extrabold text-brand-yellow">404</span>
      <h1 className="h-display mt-4 text-3xl text-white">Page Not Found</h1>
      <p className="mt-3 max-w-md text-brand-fog">
        The page you&apos;re looking for has moved or doesn&apos;t exist. But our crane and towing
        crew is still just one call away.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={telHref} className="btn-primary">
          <PhoneIcon className="h-5 w-5" /> Call {phonePrimaryDisplay}
        </a>
        <Link href="/" className="btn-ghost">
          Back to Home <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
