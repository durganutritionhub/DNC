import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  inverted?: boolean;
}

export function SectionHeading({ 
  eyebrow, 
  heading, 
  subtext, 
  className = '',
  align = 'center',
  inverted = false
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center mx-auto',
    right: 'items-end text-right ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-2xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold tracking-wider uppercase mb-2 ${
          inverted ? 'text-white/95 bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold inline-block' : 'text-primary-green'
        }`}>
          {eyebrow}
        </span>
      )}
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
        inverted ? 'text-white' : 'text-text-dark'
      }`}>
        {heading}
      </h1>
      {subtext && (
        <p className={`text-lg md:text-xl leading-relaxed ${
          inverted ? 'text-white/90' : 'text-text-muted'
        }`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

