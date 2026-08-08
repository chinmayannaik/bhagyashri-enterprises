'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, WhatsAppIcon, DirectionsIcon } from './Icons';
import { telHref, whatsappHref, mapsDirectionsHref } from '@/lib/site';
import type { Dictionary } from '@/i18n/dictionaries/en';

export function FloatingActions({ dict }: { dict: Dictionary }) {
  const actions = [
    {
      href: telHref,
      label: dict.common.callNow,
      Icon: PhoneIcon,
      className: 'bg-gradient-to-b from-brand-yellow to-brand-amber text-black',
      ring: 'bg-brand-yellow',
      pulse: true,
    },
    {
      href: whatsappHref,
      label: dict.common.whatsapp,
      Icon: WhatsAppIcon,
      className: 'bg-[#25D366] text-black',
      ring: 'bg-[#25D366]',
      pulse: false,
    },
    {
      href: mapsDirectionsHref,
      label: dict.common.directions,
      Icon: DirectionsIcon,
      className: 'bg-white text-black',
      ring: 'bg-white',
      pulse: false,
    },
  ];

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6">
      {actions.map(({ href, label, Icon, className, ring, pulse }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          initial={{ opacity: 0, scale: 0.6, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center"
        >
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-black/85 px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {label}
          </span>
          <span
            className={`relative grid h-[54px] w-[54px] place-items-center rounded-full shadow-lift ${className}`}
          >
            {pulse && (
              <span className={`absolute inset-0 -z-10 rounded-full ${ring} animate-pulse-ring`} />
            )}
            <Icon className="h-6 w-6" />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
