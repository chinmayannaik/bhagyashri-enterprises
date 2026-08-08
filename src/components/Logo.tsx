import Link from 'next/link';
import Image from 'next/image';
import { pathFor, defaultLocale, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * Brand logo.
 *
 * The official logo mark (yellow truck crane) sits beside the wordmark. At
 * header size the baked-in wordmark of the full logo file would be far too
 * small to read, so the mark is paired with live text styled to match it.
 * Use <LogoFull /> wherever there is room for the complete lockup.
 */
export function Logo({
  compact = false,
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
      className="group flex items-center gap-2.5"
      aria-label={`Bhagyashri Cranes & Towing - ${dict?.common.home ?? 'Home'}`}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={720}
        height={566}
        priority
        aria-hidden="true"
        className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-tight text-white">
          Bhagyashri
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-yellow">
          {compact ? 'Cranes' : 'Cranes & Towing'}
        </span>
      </span>
    </Link>
  );
}

/**
 * Complete logo lockup (mark + BHAGYASHRI + CRANES & TOWING).
 * `variant="light"` swaps the white sub-line to near-black for light surfaces.
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
  return (
    <Image
      src={variant === 'light' ? '/images/logo-full-light.png' : '/images/logo-full.png'}
      alt="Bhagyashri Cranes & Towing, Bhatkal"
      width={900}
      height={783}
      priority={priority}
      className={className}
    />
  );
}
