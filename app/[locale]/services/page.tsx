import React from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Services } from '@/components/Services';
import { constructSEOMetadata } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });
  const tMeta = await getTranslations({ locale, namespace: 'Metadata' });

  return constructSEOMetadata({
    locale,
    path: '/services',
    title: `${t('heading')} | DNC Wellness Centre`,
    description: t('subtext') || tMeta('description'),
  });
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      <Services />
    </main>
  );
}
