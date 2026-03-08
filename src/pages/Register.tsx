import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { AFFILIATE_LINK } from '../lib/constants';

export default function Register() {
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookies-accepted') === 'true';
    }
    return false;
  });

  const acceptCookies = () => {
    setCookiesAccepted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookies-accepted', 'true');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Simple header */}
      <header className="py-6 px-4 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Logo size="md" href="/" />
          <Link 
            to="/" 
            className="text-sm font-semibold text-slate-600 hover:text-[var(--color-barn2-blue)] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            barn2.vercel.app
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Professional WooCommerce solutions. Get access to the best plugins for your online store.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[var(--color-barn2-blue)] text-white rounded-full font-bold text-lg hover:bg-[var(--color-barn2-dark)] transition-all shadow-lg"
          >
            View Plugins
          </a>
        </div>
      </main>

      {/* Cookie consent banner - fixed at bottom like barn2.vercel.app/bam */}
      {!cookiesAccepted && (
        <div 
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-4 shadow-lg z-50"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm text-center sm:text-left">
              This website uses cookies to improve the user experience. By continuing to browse, you agree to the use of cookies.
            </p>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 bg-[var(--color-barn2-blue)] text-white rounded-full text-sm font-bold hover:bg-[var(--color-barn2-dark)] transition-all whitespace-nowrap"
            >
              I Agree
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
