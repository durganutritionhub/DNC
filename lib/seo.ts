import type { Metadata } from 'next';

export const SITE_URL = 'https://www.dncwellnesshub.in';

export interface PageSEOPayload {
  locale: string;
  path?: string; // e.g. '', '/about', '/services/weight-loss'
  title?: string;
  description?: string;
}

/**
 * Generates SEO metadata including self-referencing canonical tag,
 * full multilingual hreflang alternate links (en, te, hi, x-default),
 * and OpenGraph tags pointing to the canonical domain (https://www.dncwellnesshub.in).
 */
export function constructSEOMetadata({
  locale,
  path = '',
  title,
  description,
}: PageSEOPayload): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';

  return {
    metadataBase: new URL(SITE_URL),
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: `/${locale}${cleanPath}`,
      languages: {
        en: `/en${cleanPath}`,
        te: `/te${cleanPath}`,
        hi: `/hi${cleanPath}`,
        'x-default': `/en${cleanPath}`,
      },
    },
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      url: `${SITE_URL}/${locale}${cleanPath}`,
      siteName: 'DNC Wellness Centre',
      locale: locale === 'te' ? 'te_IN' : locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
  };
}
