import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star, Zap, Layout, Shield } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { Layout as PageLayout } from './Layout';
import { AFFILIATE_LINK } from '../lib/constants';

const Hero = () => (
  <section className="pt-40 pb-24 px-4 bg-[var(--color-barn2-blue)] overflow-hidden relative">
    {/* Decorative background element similar to the image */}
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        <path d="M50,50 L450,50 L450,450 L50,450 Z" fill="none" stroke="white" strokeWidth="40" transform="rotate(15 250 250)" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-left text-white">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight font-bold uppercase tracking-tight">
            WooCommerce<br />Product Table
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed italic opacity-90">
            Create powerful WooCommerce product listings and flexible order forms with our bestselling Product Table plugin. Faster shopping = more sales. Trusted by 20,000+ site owners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mb-16">
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-[var(--color-barn2-orange)] text-white rounded-full font-bold text-xl hover:bg-[var(--color-barn2-orange-dark)] transition-all shadow-lg"
            >
              Buy Plugin
            </a>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-[var(--color-barn2-blue)] rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-lg"
            >
              View Demo
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">4.97</span>
              <span className="text-sm opacity-80 uppercase tracking-wider">309 Reviews</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">24,000</span>
              <span className="text-sm opacity-80 uppercase tracking-wider">Websites</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full border-4 border-[var(--color-barn2-orange)] flex items-center justify-center bg-white text-[var(--color-barn2-blue)] font-bold text-xs text-center p-1">
                30 DAY GUARANTEE
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm opacity-60">
            Version 4.3.6 | Designed in 2025
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-1 relative"
      >
        <ImageWithFallback 
          src="https://barn2.com/wp-content/uploads/2023/05/ProductTable_Plugins-820x656.png" 
          alt="WooCommerce Product Table Preview" 
          className="relative rounded-xl mx-auto w-full max-w-md"
          referrerPolicy="no-referrer"
          fallbackText="WooCommerce Product Table"
        />
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Layout className="w-7 h-7 text-[var(--color-barn2-blue)]" />,
      title: "Easy to Install",
      desc: "No coding required. Get set up in minutes and start optimizing your store right away."
    },
    {
      icon: <Zap className="w-7 h-7 text-[var(--color-barn2-blue)]" />,
      title: "Lightning Fast",
      desc: "AJAX and Lazy Load technology keeps your site smooth even with thousands of products."
    },
    {
      icon: <Shield className="w-7 h-7 text-[var(--color-barn2-blue)]" />,
      title: "Expert Support",
      desc: "Our barn2.vercel.app team is ready to assist you 24/7 with comprehensive documentation."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                {f.icon}
              </div>
              <h3 className="text-2xl mb-4">{f.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PluginShowcase = () => {
  const plugins = [
    {
      name: "WooCommerce Product Table",
      desc: "Our bestselling plugin lists your WooCommerce products in a searchable table layout with filters. Popular for order forms, restaurant ordering, and more.",
      img: "https://barn2.com/wp-content/uploads/2023/05/ProductTable_Plugins-570x456.png",
    },
    {
      name: "Document Library Pro",
      desc: "Discover the best way to create a document library in WordPress. Add and import documents, and display them in a searchable library. Supports any file type including PDF, audio and video.",
      img: "https://barn2.com/wp-content/uploads/2023/06/WooCommerce-Document-Library-Pro-570x456.png",
    },
    {
      name: "WooCommerce Product Options",
      desc: "The most advanced product options plugin on the market. Allow customers to effortlessly personalize WooCommerce products and choose extra options and add-ons.",
      img: "https://barn2.com/wp-content/uploads/2023/05/WooCommerce-Product-Options-Badge-LP-570x456.png",
    },
    {
      name: "Posts Table Pro",
      desc: "This dynamic WordPress table plugin takes any type of WordPress content and lists it in an instant table with searching, sorting and filtering. List pages, posts, documents, audio, or any custom post type.",
      img: "https://barn2.com/wp-content/uploads/2023/06/WooCommerce-Post-Table-Pro-570x456.png",
    },
    {
      name: "WooCommerce Wholesale Pro",
      desc: "One store, two use cases: public and wholesale. You'll get a hidden area that only wholesale users can see, with wholesale registration, B2B discounts and quick order forms.",
      img: "https://barn2.com/wp-content/uploads/2023/06/WooCommerce-Wholesale-Pro-570x456.png",
    },
    {
      name: "WooCommerce Product Filters",
      desc: "The WooCommerce Product Filters plugin lets customers quickly filter your products by price, category, size and more.",
      img: "https://barn2.com/wp-content/uploads/2023/05/WooCommerce-Product-Filters-570x456.png",
    }
  ];

  return (
    <section id="plugins" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">Top Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Each plugin is designed to solve a specific challenge and boost your business efficiency.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plugins.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="p-8 pb-0">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                  <ImageWithFallback 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                    fallbackText={p.name}
                  />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl mb-4 text-[var(--color-barn2-blue)] font-bold">{p.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{p.desc}</p>
                <a 
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-4 text-center border-2 border-[var(--color-barn2-blue)] text-[var(--color-barn2-blue)] rounded-full font-bold text-lg hover:bg-[var(--color-barn2-blue)] hover:text-white transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BundleSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-br from-[var(--color-barn2-blue)] to-[var(--color-barn2-dark)] rounded-[3rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative">
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-6xl mb-8 font-bold">All Access Pass</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Save time and money by getting every plugin on this page for one low price - PLUS all our future plugins and exclusive discounts from other plugin companies!
          </p>
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3 text-lg font-medium">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-barn2-orange)]" />
              Easy access to all plugins
            </div>
            <div className="flex items-center gap-3 text-lg font-medium">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-barn2-orange)]" />
              Save time and money
            </div>
            <div className="flex items-center gap-3 text-lg font-medium">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-barn2-orange)]" />
              Includes future plugins!
            </div>
          </div>
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[var(--color-barn2-orange)] text-white rounded-full font-bold text-2xl hover:bg-[var(--color-barn2-orange-dark)] transition-all shadow-xl"
          >
            Learn More
          </a>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-10 bg-white/10 blur-3xl rounded-full" />
          <ImageWithFallback 
            src="https://barn2.com/wp-content/uploads/edd/2023/05/bundle-and-save-aap.svg" 
            alt="Bundle and Save" 
            className="relative mx-auto max-w-md lg:max-w-full w-full min-h-[200px] rounded-xl"
            referrerPolicy="no-referrer"
            fallbackText="All Access Pass"
          />
        </div>
      </div>
    </div>
  </section>
);

const testimonials = [
  { quote: "barn2.vercel.app has completely transformed how customers interact with my store. Revenue increased 30% within just one month of use.", name: "Sarah M.", role: "WooCommerce Store Owner" },
  { quote: "The best investment I've made for my online business. Setup was straightforward and the results speak for themselves.", name: "James K.", role: "E-commerce Manager" },
  { quote: "Outstanding plugins and exceptional support. barn2.vercel.app has become an essential part of our workflow.", name: "Emily R.", role: "Digital Agency Owner" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-[var(--color-barn2-blue)] text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl mb-20">Trusted by 20,000+ Businesses</h2>
      <div className="grid md:grid-cols-3 gap-16">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-xl italic mb-10 opacity-90 leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30" />
              <div className="text-left">
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-sm opacity-70 uppercase tracking-wider">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, []);

  return (
    <PageLayout>
      <main>
        <Hero />
        <Features />
        <PluginShowcase />
        <BundleSection />
        <Testimonials />
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl mb-8">Ready to Boost Your Sales?</h2>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
              Don&apos;t let customers leave because of a hard-to-use website. Equip your store with the best plugins from barn2.vercel.app today.
            </p>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 btn-orange rounded-2xl font-bold text-2xl shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="w-7 h-7" />
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
