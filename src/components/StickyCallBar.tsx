'use client';

import { PhoneIcon, WhatsAppIcon } from './Icons';
import { telHref, whatsappHref, phonePrimaryDisplay } from '@/lib/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** Sticky bottom action bar - mobile only, thumb-reachable. */
export function StickyCallBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-dark/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a href={telHref} className="btn-primary !py-3 whitespace-nowrap !text-[15px]">
          <PhoneIcon className="h-5 w-5 flex-shrink-0" />
          {dict.common.callShort}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa !py-3 whitespace-nowrap !text-[15px]"
        >
          <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
          {dict.common.whatsappShort}
        </a>
      </div>
      <p className="sr-only">
        {dict.common.tapToCall} {phonePrimaryDisplay}
      </p>
    </div>
  );
}
