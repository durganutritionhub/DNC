import type { Metadata } from "next";
import { Poppins, Inter, Noto_Sans_Telugu, Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      languages: {
        'en': '/en',
        'te': '/te',
        'hi': '/hi'
      }
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  
  // Assign a font class to the body based on the active locale
  const fontClass = locale === 'te' ? 'font-te' : locale === 'hi' ? 'font-hi' : 'font-en';

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${inter.variable} ${telugu.variable} ${hindi.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-white ${fontClass}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="grow">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
