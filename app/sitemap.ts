import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const ROUTES = [
  '',
  '/about',
  '/services',
  '/coach',
  '/testimonials',
  '/contact',
  '/services/weight-loss',
  '/services/nutrition-supplements',
  '/services/mindful-eating',
  '/services/personalized-nutrition',
  '/services/skin-health',
  '/services/bone-joint-health',
];

const LOCALES = ['en', 'te', 'hi'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.7,
        alternates: {
          languages: {
            en: `${SITE_URL}/en${route}`,
            te: `${SITE_URL}/te${route}`,
            hi: `${SITE_URL}/hi${route}`,
            'x-default': `${SITE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
