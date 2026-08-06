'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { CloseIcon, ChevronIcon } from './Icons';
import { galleryImages } from '@/data/content';

type Img = {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
};

export function Gallery({ images = galleryImages as Img[] }: { images?: Img[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const isOpen = index !== null;

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    // Lock scroll without the page jumping as the scrollbar disappears.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, prev, next]);

  const current = index !== null ? images[index] : null;

  // Rendered through a portal on <body>: the gallery sits inside Framer Motion
  // wrappers whose transforms would otherwise become the containing block for
  // `position: fixed`, breaking the full-screen overlay.
  const lightbox =
    isOpen && current ? (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index + 1} of ${images.length}: ${current.caption}`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronIcon className="h-7 w-7 rotate-90" />
            </button>
          )}

          <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            className="flex max-h-full w-full max-w-5xl flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              sizes="100vw"
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
              priority
            />
            <figcaption className="px-10 text-center text-sm text-brand-mist">
              {current.caption}{' '}
              <span className="text-brand-fog">
                ({index + 1}/{images.length})
              </span>
            </figcaption>
          </motion.figure>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronIcon className="h-7 w-7 -rotate-90" />
            </button>
          )}
        </motion.div>
      </>
    ) : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <motion.button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-brand-steel"
            aria-label={`Open image: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-end bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {img.caption}
            </span>
          </motion.button>
        ))}
      </div>

      {mounted && lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
