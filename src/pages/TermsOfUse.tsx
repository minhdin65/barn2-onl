import React from 'react';
import { Layout } from '../components/Layout';

export default function TermsOfUse() {
  return (
    <Layout>
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-slate-600 mb-6">Last updated: March 2025 | Site designed in 2025</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing and using barn2.vercel.app ("the Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Use of the Website</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website or its systems</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Use the Website to collect or harvest personal information of others</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              <li>Interfere with or disrupt the Website or servers connected to it</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The content on this Website, including text, graphics, logos, and images, is the property of barn2.vercel.app or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Affiliate Disclosure</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This Website contains affiliate links. When you click on these links and make a purchase, we may receive a commission at no additional cost to you. Product recommendations are based on our genuine assessment of quality and usefulness.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Products and Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may link to or recommend third-party products and services (such as Barn2 Plugins). We are not responsible for the terms, policies, or practices of these third parties. Your use of third-party products is subject to their respective terms and conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Website is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the fullest extent permitted by law, barn2.vercel.app shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For questions about these Terms of Use, please contact us at support@barn2.vercel.app.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
