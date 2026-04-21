import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'sm',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all focus:outline-none";

  const variants = {
    primary: "bg-brand text-white hover:opacity-90 shadow-lg shadow-brand/20",
    outline: "border border-brand/30 text-brand bg-brand/5 hover:bg-brand/10",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm rounded-lg border border-transparent", 
    lg: "px-8 py-3.5 text-base rounded-xl w-full sm:w-auto", 
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};