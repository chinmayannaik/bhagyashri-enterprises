import en, { type Dictionary } from './dictionaries/en';
import kn from './dictionaries/kn';
import { type Locale, defaultLocale, isLocale } from './config';

const dictionaries: Record<Locale, Dictionary> = { en, kn };

/** Dictionary for a locale, falling back to the default for unknown values. */
export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[defaultLocale];
}

export type { Dictionary };
export * from './config';
