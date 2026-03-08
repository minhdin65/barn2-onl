import React from 'react';
import { Layout } from '../components/Layout';

export default function Disclaimer() {
  return (
    <Layout>
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          <p className="text-slate-600 mb-6">Last updated: March 2025 | Site designed in 2025</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The information provided by barn2.vercel.app ("we," "us," or "our") on this website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Affiliate Disclosure</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This website contains affiliate links. This means that when you click on certain links on our site and make a purchase, we may receive a commission at no additional cost to you. We are a participant in affiliate programs, including the Barn2 Plugins affiliate program.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We only recommend products and services that we believe provide value to our readers. Our affiliate relationships do not influence our content or recommendations. The compensation we receive helps support the operation of this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. No Professional Advice</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The content on this website is not intended to be a substitute for professional advice. We do not provide legal, financial, technical, or other professional advice. Always seek the guidance of qualified professionals regarding any questions you may have. Reliance on any information provided on this site is solely at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Products and Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may recommend or link to third-party products and services, including WordPress plugins from Barn2 Plugins. We are not responsible for the quality, accuracy, or performance of these third-party offerings. Any purchases you make through affiliate links are subject to the terms and conditions of the respective third-party sellers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Results May Vary</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Testimonials, case studies, and examples used on this website are not intended to represent or guarantee that anyone will achieve the same or similar results. Your results may vary based on factors including your specific situation, implementation, and market conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. External Links</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the website or reliance on any information provided on the website. Your use of the website and your reliance on any information is solely at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Disclaimer, please contact us at support@barn2.vercel.app.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
