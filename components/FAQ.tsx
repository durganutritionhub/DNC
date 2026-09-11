"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const t = useTranslations('FAQ');
  const faqs = t.raw('faqs') as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subtext={t('subtext')}
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-primary-green bg-primary-green/5 shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-primary-green/40'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 px-6 md:px-8 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-lg md:text-xl text-text-dark leading-snug">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-primary-green text-white rotate-180' : 'bg-gray-100 text-text-muted'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 text-text-muted text-base md:text-lg leading-relaxed border-t border-primary-green/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
