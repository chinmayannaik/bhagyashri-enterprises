import { StarIcon } from './Icons';
import { RevealStagger, StaggerItem } from './Reveal';
import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <RevealStagger className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t) => (
        <StaggerItem key={t.name}>
          <figure className="card h-full p-6">
            <div className="flex gap-0.5 text-brand-yellow">
              {Array.from({ length: t.rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-3 text-[15px] leading-relaxed text-brand-mist">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-bold text-white">{t.name}</span>
              <span className="text-brand-fog"> · {t.place}</span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </RevealStagger>
  );
}
