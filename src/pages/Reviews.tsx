import React from 'react';
import { Layout } from '../components/Layout';
import { Star } from 'lucide-react';
import { AFFILIATE_LINK } from '../lib/constants';

const reviews = [
  {
    title: "WooCommerce Product Table: The Ultimate Solution for Fast Ordering",
    excerpt: "Barn2's WooCommerce Product Table has revolutionized how stores handle bulk ordering. With instant search, sortable columns, and one-click add to cart, it's perfect for wholesale, restaurants, and large catalogs.",
    content: [
      "Barn2 Plugins has earned its reputation as one of the leading WooCommerce plugin developers, and the WooCommerce Product Table is their flagship product. Trusted by over 24,000 websites with a 4.97-star rating, this plugin transforms your standard product grid into a powerful, searchable table.",
      "Key features include AJAX-powered instant search, sortable columns, lazy loading for thousands of products, and flexible design options. Whether you run a restaurant needing quick order forms, a wholesale business, or a store with hundreds of SKUs, this plugin streamlines the shopping experience significantly.",
      "The plugin integrates seamlessly with WooCommerce variations, product add-ons, and popular page builders. Setup takes minutes with the built-in table builder wizard. If you want to reduce cart abandonment and increase order value, WooCommerce Product Table is a proven solution."
    ],
    rating: 5,
    date: "March 2025"
  },
  {
    title: "Document Library Pro: Professional Document Management for WordPress",
    excerpt: "Document Library Pro offers enterprise-grade document management with search, categories, access control, and support for any file type. Ideal for policies, resources, and knowledge bases.",
    content: [
      "For organizations that need to manage and display documents professionally, Document Library Pro is the gold standard. It handles PDFs, Word files, spreadsheets, audio, and video—all in a clean, searchable interface.",
      "Features like folder structures, category filtering, expiry dates, and role-based access make it suitable for HR policies, legal documents, educational resources, and client portals. The bulk import and CSV support save hours when migrating from other systems.",
      "With 4.99 stars and excellent support, Document Library Pro scales from small teams to large enterprises. The documentation is thorough, and Barn2's support team responds quickly to customization requests."
    ],
    rating: 5,
    date: "March 2025"
  },
  {
    title: "Barn2 Plugin Suite: Features, Use Cases & Why Store Owners Choose Them",
    excerpt: "A comprehensive look at the Barn2 ecosystem—from WooCommerce Product Options to Wholesale Pro and Product Filters. Learn how these plugins work together to create powerful, customized stores.",
    content: [
      "Barn2 offers over 19 premium WordPress and WooCommerce plugins designed to solve specific business challenges. The most popular include WooCommerce Product Options for customization, WooCommerce Wholesale Pro for B2B, and WooCommerce Product Filters for better navigation.",
      "WooCommerce Product Options allows customers to personalize products with file uploads, text fields, and add-ons—perfect for print-on-demand, custom engraving, or configurable products. WooCommerce Wholesale Pro creates a hidden wholesale area with tiered pricing and registration.",
      "The All Access Pass bundles all current and future plugins for one price, making it cost-effective for agencies and multi-site owners. All plugins come with a 30-day money-back guarantee and priority support."
    ],
    rating: 5,
    date: "March 2025"
  },
  {
    title: "Real User Reviews: Why 20,000+ Businesses Trust Barn2",
    excerpt: "Hear from store owners, agencies, and developers who have transformed their WooCommerce sites with Barn2 plugins. Honest feedback on performance, support, and ROI.",
    content: [
      "Store owners consistently praise Barn2 for its reliable plugins and outstanding support. Many report 20-30% increases in conversion after implementing the Product Table for quicker ordering. Restaurant and wholesale businesses particularly benefit from the one-page order form layout.",
      "Developers appreciate the clean code, hooks, and filters that allow deep customization. Agencies use Barn2 plugins across client projects because they reduce development time and rarely conflict with themes or other plugins.",
      "The 700+ knowledge base articles and video tutorials make onboarding straightforward. When issues arise, the support team typically responds within hours. For serious WooCommerce store owners, Barn2 has become an essential toolkit."
    ],
    rating: 5,
    date: "March 2025"
  }
];

export default function Reviews() {
  return (
    <Layout>
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Barn2 Reviews & Insights</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth reviews, features, and use cases for Barn2 Plugins. Learn why 20,000+ businesses trust their WooCommerce solutions.
            </p>
          </div>

          <div className="space-y-16">
            {reviews.map((review, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8 md:p-12">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, s) => (
                      <Star key={s} className="w-5 h-5 fill-[var(--color-barn2-orange)] text-[var(--color-barn2-orange)]" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">{review.date}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">{review.title}</h2>
                  <p className="text-lg text-slate-600 italic mb-8">{review.excerpt}</p>
                  <div className="space-y-4">
                    {review.content.map((para, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-[var(--color-barn2-blue)] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Store?</h3>
            <p className="mb-6 opacity-90">Join 24,000+ websites using Barn2 Plugins.</p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[var(--color-barn2-orange)] text-white rounded-full font-bold text-lg hover:bg-[var(--color-barn2-orange-dark)] transition-all"
            >
              View Plugins
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
