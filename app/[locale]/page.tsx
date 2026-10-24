import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { Testimonials } from "@/components/Testimonials";
import { CoachProfile } from "@/components/CoachProfile";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructSEOMetadata } from '@/lib/seo';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructSEOMetadata({
    locale,
    path: '',
    title: t('title'),
    description: t('description'),
  });
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsCounter />
      <About />
      <Services />
      <ShowcaseCarousel />
      <Testimonials limit={4} />
      <CoachProfile />
      <FAQ />
      <Contact />
    </main>
  );
}
