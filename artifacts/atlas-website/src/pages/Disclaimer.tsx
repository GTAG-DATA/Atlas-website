import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | Atlas Corporate Services"
        description="Important disclaimers regarding the information and services provided by Atlas Corporate Services in the DIFC, Dubai."
        canonical="/disclaimer"
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-[#0c1e24] mb-2">Disclaimer</h1>
          <p className="text-slate-400 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">No Legal or Financial Advice</h2>
              <p>The content on this website is provided for general informational purposes only. Nothing on this website constitutes legal, financial, tax, regulatory, or investment advice. You should not act or refrain from acting on the basis of any information contained on this website without first seeking appropriate professional advice tailored to your specific circumstances.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">Accuracy of Information</h2>
              <p>While Atlas Corporate Services Ltd makes reasonable efforts to ensure that the information on this website is accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided. Laws, regulations, and procedures in the DIFC and UAE are subject to change, and information on this website may not reflect the most current legal or regulatory developments.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">Regulatory Status</h2>
              <p>Atlas Corporate Services Ltd is a corporate service provider operating within the Dubai International Financial Centre (DIFC). We are not a law firm, accountancy firm, or financial services firm authorised to provide regulated financial or legal advice. Any reference to regulatory compliance on this website is general in nature and should not be relied upon as specific guidance.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">Third-Party Content</h2>
              <p>This website may contain links to or information from third-party sources. Atlas Corporate Services Ltd does not endorse and is not responsible for the content, accuracy, or reliability of any third-party websites or materials.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, Atlas Corporate Services Ltd accepts no liability for any loss or damage, whether direct, indirect, incidental, or consequential, arising from reliance on the information on this website or from the use of our services, except where such liability cannot be excluded by law.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0c1e24] mb-3">Contact Us</h2>
              <p>If you have any questions about this disclaimer, please contact us:</p>
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
            <Link href="/privacy" className="text-amber-600 hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
