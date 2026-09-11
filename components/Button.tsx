import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-accent-green text-background hover:bg-primary-green hover:text-text-dark shadow-sm hover:shadow-md",
    outline: "border border-accent-green text-accent-green hover:bg-accent-green hover:text-background bg-transparent shadow-sm hover:shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
