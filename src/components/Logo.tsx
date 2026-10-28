import Link from 'next/link';
import Image from 'next/image';
import { pathFor, defaultLocale, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * Header logo: full dark-theme lockup (icon + BHAGYASHRI + tagline on black).
 * Pairs with the site’s dark chrome; light surfaces use LogoFull variant="light".
 */
export function Logo({
  locale = defaultLocale,
  dict,
}: {
  compact?: boolean;
  locale?: Locale;
  dict?: Dictionary;
}) {
  return (
    <Link
      href={pathFor('/', locale)}
      className="group inline-flex shrink-0 items-center"
      aria-label={`Bhagyashri Cranes & Towing - ${dict?.common.home ?? 'Home'}`}
    >
      <Image
        src="/images/logo-header-dark.png"
        alt="Bhagyashri Crane and Towing Service"
        width={320}
        height={320}
        priority
        className="h-11 w-auto max-w-[min(52vw,220px)] object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  );
}

/**
 * Complete logo lockup for footer and large placements.
 * `variant="dark"` uses the black-background artwork; `light` uses the light-surface PNG.
 */
export function LogoFull({
  className = 'h-28 w-auto',
  variant = 'dark',
  priority = false,
}: {
  className?: string;
  variant?: 'dark' | 'light';
  priority?: boolean;
}) {
  const src =
    variant === 'light'
      ? '/images/logo-full-light.png'
      : '/images/logo-dark-full.png';

  return (
    <Image
      src={src}
      alt="Bhagyashri Cranes & Towing, Bhatkal"
      width={900}
      height={900}
      priority={priority}
      className={className}
    />
  );
}
