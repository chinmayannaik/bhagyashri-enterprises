import { PhoneIcon, WhatsAppIcon } from './Icons';
import { Reveal } from './Reveal';
import { telHref, whatsappHref, phonePrimaryDisplay } from '@/lib/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

export function CtaBanner({
  dict,
  title,
  subtitle,
}: {
  dict: Dictionary;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-yellow/30 bg-gradient-to-br from-brand-yellow via-brand-amber to-[#e08600] p-8 text-black shadow-glow sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="h-display text-2xl sm:text-3xl">
                  {title ?? dict.cta.defaultTitle}
                </h2>
                <p className="mt-2 text-base font-medium text-black/80">
                  {subtitle ?? dict.cta.defaultSubtitle}
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href={telHref} className="btn bg-black text-white shadow-lift hover:bg-black/90">
                  <PhoneIcon className="h-5 w-5" />
                  {dict.common.call} {phonePrimaryDisplay}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-black/80 bg-white/20 text-black hover:bg-white/40"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {dict.common.whatsappUs}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
