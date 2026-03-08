import React, { useState } from 'react';
import { Layout } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon,
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const hasText = !!fallbackText;
    return (
      <div
        className={`flex ${hasText ? 'flex-col' : ''} items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        {fallbackIcon ?? <Layout className="w-16 h-16 mb-2" />}
        {fallbackText && <span className="text-sm font-medium text-slate-500 mt-1 text-center px-2">{fallbackText}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
