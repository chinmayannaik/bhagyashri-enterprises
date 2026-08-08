import en, { type LocationCopy } from './en';
import kn from './kn';
import { defaultLocale, isLocale, type Locale } from '../config';

const byLocale: Record<Locale, Record<string, LocationCopy>> = { en, kn };

/** Towns that get their own landing page, in geographic order (north → south). */
export const locationSlugs = [
  'honnavar',
  'bhatkal',
  'shiroor',
  'byndoor',
  'kundapura',
  'udupi',
] as const;

export type LocationSlug = (typeof locationSlugs)[number];

export function getLocations(locale: string): Record<string, LocationCopy> {
  return byLocale[isLocale(locale) ? locale : defaultLocale];
}

export function getLocation(locale: string, slug: string): LocationCopy | undefined {
  return getLocations(locale)[slug];
}

export type { LocationCopy };
