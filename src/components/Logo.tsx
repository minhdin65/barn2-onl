import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const sizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

const LogoContent: React.FC<{ size: 'sm' | 'md' | 'lg'; className?: string }> = ({ size, className = '' }) => (
  <span className={`font-display font-bold tracking-tight ${sizes[size]} ${className}`}>
    <span className="text-[var(--color-barn2-blue)]">barn2</span>
    <span className="text-[var(--color-barn2-orange)]">.vercel.app</span>
  </span>
);

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', href = '/' }) => {
  if (!href) return <LogoContent size={size} className={className} />;
  const isInternal = href.startsWith('/');
  return (
    isInternal ? (
      <Link to={href} className={`inline-block ${className}`}>
        <LogoContent size={size} />
      </Link>
    ) : (
      <a href={href} className={`inline-block ${className}`} target="_blank" rel="noopener noreferrer">
        <LogoContent size={size} />
      </a>
    )
  );
};
