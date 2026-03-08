import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Logo } from './Logo';
import { AFFILIATE_LINK } from '../lib/constants';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navLinkClass = "text-sm font-semibold text-slate-700 hover:text-[var(--color-barn2-blue)] transition-colors";

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-2">
          <Logo size="md" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className={navLinkClass}>Features</a>
              <a href="#plugins" onClick={(e) => { e.preventDefault(); scrollToSection('plugins'); }} className={navLinkClass}>Plugins</a>
              <Link to="/reviews" className={navLinkClass}>Reviews</Link>
            </>
          ) : (
            <>
              <Link to="/#features" className={navLinkClass}>Features</Link>
              <Link to="/#plugins" className={navLinkClass}>Plugins</Link>
              <Link to="/reviews" className={navLinkClass}>Reviews</Link>
            </>
          )}
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-barn2-blue)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--color-barn2-dark)] transition-all shadow-lg"
          >
            Buy Plugins
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export const AffiliateDisclosure = () => (
  <div className="bg-slate-50 py-10 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-4 text-slate-400">
        <Shield className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">Affiliate Disclosure</span>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">
        This website contains affiliate links. If you click a link and make a purchase, we may receive a small commission at no extra cost to you. We only recommend products we trust and have verified for quality.
      </p>
    </div>
  </div>
);

export const Footer = () => (
  <footer className="bg-white py-20 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-16 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Logo size="lg" href="/" />
          </div>
          <p className="text-slate-500 max-w-sm mb-8 text-lg leading-relaxed">
            Professional WooCommerce optimization solutions. Trusted partner of Barn2 Plugins.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-8">Policy</h4>
          <ul className="space-y-4 text-slate-600">
            <li><Link to="/privacy-policy" className="hover:text-[var(--color-barn2-blue)] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-[var(--color-barn2-blue)] transition-colors">Terms of Use</Link></li>
            <li><Link to="/disclaimer" className="hover:text-[var(--color-barn2-blue)] transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-8">Contact</h4>
          <ul className="space-y-4 text-slate-600">
            <li>Email: support@barn2.vercel.app</li>
            <li>Website: barn2.vercel.app</li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
        <p>© 2025 barn2.vercel.app. All rights reserved. Designed in 2025.</p>
        <p className="flex items-center gap-2">
          Products distributed by 
          <a href="https://barn2.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-[var(--color-barn2-blue)]">Barn2 Plugins</a>.
        </p>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
  showAffiliateDisclosure?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showAffiliateDisclosure = true }) => (
  <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
    <Navbar />
    {children}
    {showAffiliateDisclosure && <AffiliateDisclosure />}
    <Footer />
  </div>
);
