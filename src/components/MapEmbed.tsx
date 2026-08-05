import { mapsEmbedSrc, mapsDirectionsHref } from '@/lib/site';
import { DirectionsIcon } from './Icons';

export function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 shadow-card ${className}`}>
      <iframe
        title="Bhagyashree Crane Service location - Bhatkal, Karnataka"
        src={mapsEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full grayscale-[0.2] contrast-[1.05]"
        allowFullScreen
      />
      <a
        href={mapsDirectionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-brand-slate py-3 text-sm font-bold text-brand-yellow hover:bg-brand-ash"
      >
        <DirectionsIcon className="h-4 w-4" /> Get Directions to Bhatkal
      </a>
    </div>
  );
}
