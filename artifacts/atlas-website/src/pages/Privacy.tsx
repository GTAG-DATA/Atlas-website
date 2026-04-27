import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Atlas Corporate Services"
        description="How Atlas Corporate Services collects, uses, and protects your personal data in accordance with DIFC Data Protection Law."
        canonical="/privacy"
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-[#0c1e24] mb-2">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">1. Introduction</h2>
              <p>Atlas Corporate Services Ltd ("Atlas", "we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services, in accordance with the DIFC Data Protection Law (DIFC Law No. 5 of 2020).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">2. Information We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
                <li><strong>Contact information:</strong> name, email address, phone number</li>
                <li><strong>Enquiry details:</strong> the nature of services you are interested in</li>
                <li><strong>Technical data:</strong> IP address, browser type, and usage data collected via cookies</li>
                <li><strong>Business information:</strong> company name, jurisdiction, and relevant corporate details provided during client onboarding</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc list-outside ml-6 mt-3 space-y-2">
                <li>Respond to your enquiries and provide our services</li>
                <li>Comply with our legal and regulatory obligations (including AML/KYC requirements)</li>
                <li>Improve our website and services</li>
                <li>Send relevant communications where you have given consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">4. Data Sharing</h2>
              <p>We do not sell your personal data. We may share it with trusted third-party service providers who assist in operating our business (e.g., email delivery), regulatory authorities where legally required, and professional advisors bound by confidentiality obligations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">5. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Client data may be retained for up to 6 years following the end of a client relationship to meet regulatory requirements.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">6. Your Rights</h2>
              <p>Under DIFC Data Protection Law, you have the right to access, correct, or erase your personal data, object to or restrict processing, and withdraw consent at any time. To exercise these rights, contact us at <a href="mailto:info@atlascorp.ae" className="text-amber-600 hover:underline">info@atlascorp.ae</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">7. Cookies</h2>
              <p>Our website uses cookies to improve your browsing experience and analyse traffic. You may disable cookies through your browser settings, though this may affect website functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">8. Contact</h2>
              <p>For privacy-related queries, please contact our Data Protection Officer:</p>
              <div className="mt-3 bg-slate-50 rounded-xl p-5 text-sm">
                <p className="font-semibold text-[#0c1e24]">Atlas Corporate Services Ltd</p>
                <p>GV-00-10-03-BC09, Level 3, Gate Village Building 10, DIFC</p>
                <p>Dubai, United Arab Emirates</p>
                <p className="mt-2">Email: <a href="mailto:info@atlascorp.ae" className="text-amber-600 hover:underline">info@atlascorp.ae</a></p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex gap-4 text-sm">
            <Link href="/terms" className="text-amber-600 hover:underline">Terms of Service</Link>
            <Link href="/disclaimer" className="text-amber-600 hover:underline">Disclaimer</Link>
            <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
