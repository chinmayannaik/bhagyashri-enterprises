import en, { type NearMeCopy } from './en';
import kn from './kn';
import { defaultLocale, isLocale, type Locale } from '../config';

const byLocale: Record<Locale, Record<string, NearMeCopy>> = { en, kn };

export const nearMeSlugs = ['crane-near-me', 'towing-near-me'] as const;
export type NearMeSlug = (typeof nearMeSlugs)[number];

export function getNearMe(locale: string, slug: string): NearMeCopy | undefined {
  return byLocale[isLocale(locale) ? locale : defaultLocale][slug];
}

export type { NearMeCopy };
