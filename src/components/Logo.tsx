import Link from 'next/link';
import { CraneIcon } from './Icons';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Bhagyashri Crane Service - Home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-brand-yellow to-brand-amber text-black shadow-glow">
        <CraneIcon className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-extrabold tracking-tight text-white">
          Bhagyashri
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-yellow">
          {compact ? 'Crane Service' : 'Crane & Towing'}
        </span>
      </span>
    </Link>
  );
}
