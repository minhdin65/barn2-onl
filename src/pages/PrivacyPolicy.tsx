import React from 'react';
import { Layout } from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-slate-600 mb-6">Last updated: March 2025 | Site designed in 2025</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              barn2.vercel.app ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website barn2.vercel.app.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong>Personal Data:</strong> Name, email address, and other contact information you voluntarily provide when contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies and similar technologies to enhance your experience and collect usage data.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Operate and maintain our website</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Links and Affiliates</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website contains affiliate links to third-party products (including Barn2 Plugins). When you click these links and make a purchase, the third party may collect information according to their own privacy policies. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. You may also have the right to data portability and to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us at support@barn2.vercel.app.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
