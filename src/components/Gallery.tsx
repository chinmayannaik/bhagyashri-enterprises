'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon, ChevronIcon } from './Icons';
import { galleryImages } from '@/data/content';

type Img = (typeof galleryImages)[number];

export function Gallery({ images = galleryImages }: { images?: Img[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

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
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
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
            <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {img.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronIcon className="h-7 w-7 rotate-90" />
            </button>

            <motion.figure
              key={images[index].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[86vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={images[index].w}
                height={images[index].h}
                className="mx-auto h-auto max-h-[78vh] w-auto rounded-xl object-contain"
                priority
              />
              <figcaption className="mt-3 text-center text-sm text-brand-mist">
                {images[index].caption}{' '}
                <span className="text-brand-fog">
                  ({index + 1}/{images.length})
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronIcon className="h-7 w-7 -rotate-90" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
