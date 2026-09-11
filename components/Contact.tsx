"use client";

import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { useTranslations } from 'next-intl';

const PROGRAM_OPTIONS = [
  'Weight Loss & Fitness',
  'Nutrition & Supplements',
  'Mindful Eating',
  'Personalized Nutrition'
] as const;

export function Contact() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(['Weight Loss & Fitness']);

  const toggleProgram = (prog: string) => {
    setSelectedPrograms((prev) => {
      if (prev.includes(prog)) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((p) => p !== prog);
      } else {
        return [...prev, prog];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full py-14 sm:py-20 md:py-24 bg-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading 
          eyebrow={t('eyebrow')}
          heading={t('heading')}
          subtext={t('subtext')}
          className="mb-10 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Info & Map (takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-primary-green/10">
              <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-5 sm:mb-6">{t('business_info')}</h3>
              
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-primary-green uppercase tracking-widest mb-1.5 sm:mb-2">{t('email_label')}</h4>
                  <a href="mailto:durganutrition01@gmail.com" className="text-text-dark hover:text-accent-green transition-colors font-medium flex items-center gap-2.5 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">durganutrition01@gmail.com</span>
                  </a>
                </div>
                
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-primary-green uppercase tracking-widest mb-1.5 sm:mb-2">{t('phone_label')}</h4>
                  <div className="flex flex-col gap-2">
                    <a href="tel:7981566705" className="text-text-dark hover:text-accent-green transition-colors font-medium flex items-center gap-2.5 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 79815 66705
                    </a>
                    <a href="tel:7416082977" className="text-text-dark hover:text-accent-green transition-colors font-medium flex items-center gap-2.5 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
                      +91 74160 82977
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-primary-green uppercase tracking-widest mb-1.5 sm:mb-2">{t('location_label')}</h4>
                  <a 
                    href="https://maps.app.goo.gl/a3oAPCX2xBmKvZot8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-dark hover:text-accent-green transition-colors font-medium flex items-start gap-2.5 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      {t('location_text')}<br/>
                      <span className="text-xs sm:text-sm text-primary-green underline">{t('location_link_text')}</span>
                    </span>
                  </a>
                </div>

                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-primary-green uppercase tracking-widest mb-2.5">Social Media</h4>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a 
                      href="https://www.instagram.com/durga.nutrition?utm_source=qr&stkn=NXQ5ajdxcDE2Ym5n" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-[#E4405F] text-text-dark hover:text-white transition-all text-xs font-semibold border border-gray-200 shadow-xs"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                    <a 
                      href="https://facebook.com/share/19Nsxp9aza/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-[#1877F2] text-text-dark hover:text-white transition-all text-xs font-semibold border border-gray-200 shadow-xs"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                    <a 
                      href="https://youtube.com/@dncorganization?si=gleytDMK9B98mUOO" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-[#FF0000] text-text-dark hover:text-white transition-all text-xs font-semibold border border-gray-200 shadow-xs"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden shadow-sm border border-primary-green/10 bg-white relative">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                src="https://maps.google.com/maps?q=DNC%20Wellness%20Centre&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Simplified Visual Form (takes 7 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-10 rounded-3xl shadow-md border border-primary-green/15">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-text-dark">{t('form_heading')}</h3>
              <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 bg-primary-green/10 text-primary-green rounded-full">
                Quick 1-Min Enquiry
              </span>
            </div>
            
            {status === 'success' ? (
              <div className="bg-primary-green/10 border border-primary-green/30 text-accent-green p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center py-12 sm:py-16">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-green rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-md">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-text-dark">{t('form_success_heading')}</h4>
                <p className="text-text-muted text-sm sm:text-base mb-6 sm:mb-8 max-w-md">{t('form_success_text')}</p>
                <Button 
                  variant="outline" 
                  onClick={() => setStatus('idle')}
                >
                  {t('form_send_another')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                <input type="hidden" name="subject" value="New Enquiry from DNC Website" />
                <input type="hidden" name="from_name" value="DNC Wellness Website" />
                <input type="hidden" name="program" value={selectedPrograms.join(', ')} />

                {/* 1. Visible Multi-Select Program Selection Chips */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs sm:text-sm font-semibold text-text-dark flex items-center justify-between">
                    <span>{t('form_program_label')}</span>
                    <span className="text-[11px] sm:text-xs text-primary-green font-medium">Select one or more</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {PROGRAM_OPTIONS.map((prog) => {
                      const isSelected = selectedPrograms.includes(prog);
                      const progName = t(`programs.${prog}` as any);
                      return (
                        <button
                          key={prog}
                          type="button"
                          onClick={() => toggleProgram(prog)}
                          className={`flex items-center justify-between p-3 sm:p-3.5 px-3.5 sm:px-4 rounded-2xl text-left border transition-all text-xs sm:text-sm font-medium ${
                            isSelected
                              ? 'bg-primary-green text-white border-primary-green shadow-md scale-[1.01]'
                              : 'bg-gray-50 text-text-dark border-gray-200 hover:border-primary-green/40 hover:bg-white'
                          }`}
                        >
                          <span className="leading-snug">{progName}</span>
                          {isSelected ? (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-2">
                              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Simplified Contact Details (Name + Phone side by side) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-text-dark">{t('form_name_label')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/60 focus:border-transparent transition-all shadow-xs text-xs sm:text-sm"
                      placeholder={t('form_name_placeholder')}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-text-dark">{t('form_phone_label')}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/60 focus:border-transparent transition-all shadow-xs text-xs sm:text-sm"
                      placeholder={t('form_phone_placeholder')}
                    />
                  </div>
                </div>

                {/* 3. Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-text-dark">{t('form_email_label')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/60 focus:border-transparent transition-all shadow-xs text-xs sm:text-sm"
                    placeholder={t('form_email_placeholder')}
                  />
                </div>

                {/* 4. Message / Note (Streamlined) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-text-dark">{t('form_message_label')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/60 focus:border-transparent transition-all shadow-xs resize-none text-xs sm:text-sm"
                    placeholder={t('form_message_placeholder')}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-red-500 text-xs sm:text-sm bg-red-50 p-3.5 rounded-xl border border-red-100">
                    {t('form_error')}
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full mt-1 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-md"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? t('form_submitting') : t('form_submit')}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
