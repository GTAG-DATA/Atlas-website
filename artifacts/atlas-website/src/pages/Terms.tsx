import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Atlas Corporate Services"
        description="Terms and conditions governing the use of Atlas Corporate Services' website and corporate service offerings in the DIFC, Dubai."
        canonical="/terms"
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-[#0c1e24] mb-2">Terms of Service</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the website of Atlas Corporate Services Ltd ("Atlas", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">2. Services</h2>
              <p>Atlas Corporate Services Ltd is a regulated corporate service provider licensed by the Dubai International Financial Centre (DIFC). We provide company formation, corporate governance, compliance, fund structuring, family office setup, and related professional services.</p>
              <p className="mt-3">The information on this website is provided for general informational purposes only and does not constitute legal, financial, or regulatory advice. You should seek independent professional advice before making any decisions based on the content of this website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">3. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Atlas Corporate Services Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">4. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Atlas Corporate Services Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">5. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or accept responsibility for the content of any third-party websites.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">6. Governing Law</h2>
              <p>These Terms of Service are governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC), and any disputes shall be subject to the exclusive jurisdiction of the DIFC Courts.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">7. Changes to These Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">8. Contact</h2>
              <p>For any questions regarding these Terms of Service, please contact us at:</p>
              <div className="mt-3 bg-slate-50 rounded-xl p-5 text-sm">
                <p className="font-semibold text-[#0c1e24]">Atlas Corporate Services Ltd</p>
                <p>GV-00-10-03-BC09, Level 3, Gate Village Building 10, DIFC</p>
                <p>Dubai, United Arab Emirates</p>
                <p className="mt-2">Email: <a href="mailto:info@atlascorp.ae" className="text-amber-600 hover:underline">info@atlascorp.ae</a></p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex gap-4 text-sm">
            <Link href="/privacy" className="text-amber-600 hover:underline">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-amber-600 hover:underline">Disclaimer</Link>
            <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
