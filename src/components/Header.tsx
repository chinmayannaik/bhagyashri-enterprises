'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons';
import { navLinks, telHref, phonePrimaryDisplay } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-brand-dark/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline whitespace-nowrap text-sm font-semibold transition-colors ${
                  active ? 'text-brand-yellow' : 'text-brand-mist/80 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden btn-primary !px-4 !py-2.5 whitespace-nowrap text-sm sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4 flex-shrink-0" />
            {phonePrimaryDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-white xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-brand-dark/95 backdrop-blur-md xl:hidden"
          >
            <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6 lg:px-8">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-lg px-3 py-3 text-base font-semibold ${
                      active
                        ? 'bg-brand-yellow/10 text-brand-yellow'
                        : 'text-brand-mist/90 hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a href={telHref} className="btn-primary mt-2">
                <PhoneIcon className="h-5 w-5" />
                Call {phonePrimaryDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
