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

  // The default locale is served from bare URLs, so its prefixed form is a
  // duplicate. Redirect /en/about -> /about permanently rather than serving
  // the same page at two addresses.
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const stripped = pathname.slice(defaultLocale.length + 1) || '/';
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.redirect(url, 308);
  }

  // A non-default locale prefix — serve as-is.
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
