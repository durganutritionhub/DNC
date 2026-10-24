import React from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CoachProfile } from '@/components/CoachProfile';
import { constructSEOMetadata } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CoachProfile' });
  const tMeta = await getTranslations({ locale, namespace: 'Metadata' });

  return constructSEOMetadata({
    locale,
    path: '/coach',
    title: `${t('heading')} - Coach Durga | DNC Wellness Centre`,
    description: t('bio_1') || tMeta('description'),
  });
}

export default function CoachPage() {
  return (
    <main className="min-h-screen pt-16">
      <CoachProfile />
    </main>
  );
}
