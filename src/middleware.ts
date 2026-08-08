import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

const PUBLIC_FILE = /\.(?:png|jpe?g|svg|ico|webp|avif|txt|xml|json|webmanifest|js|css|woff2?)$/i;

/**
 * Locale routing.
 *
 * The default locale is served from bare URLs and internally rewritten to its
 * `[locale]` segment, so "/" renders /kn without the user ever seeing a prefix
 * and without an extra redirect hop. Non-default locales keep their prefix.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals, API routes and static assets.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already carries a locale prefix — leave it alone.
  const hasLocalePrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocalePrefix) return NextResponse.next();

  // Bare path -> rewrite (not redirect) onto the default locale.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Everything except Next internals and files with an extension.
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
