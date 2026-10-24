import React from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { About } from '@/components/About';
import { constructSEOMetadata } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const tMeta = await getTranslations({ locale, namespace: 'Metadata' });

  return constructSEOMetadata({
    locale,
    path: '/about',
    title: `${t('heading')} | DNC Wellness Centre`,
    description: t('subtext') || tMeta('description'),
  });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <About />
    </main>
  );
}
