import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ArrowUpRight, ShieldCheck, Users, Globe, Award } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#142E36]" />,
    title: "Regulated & Trusted",
    body: "Atlas Corporate Services Ltd is licensed and regulated within the Dubai International Financial Centre (DIFC) — one of the world's most respected financial free zones. Our clients trust us because we operate to the highest standards of governance and compliance.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#142E36]" />,
    title: "Specialists, Not Generalists",
    body: "We focus exclusively on DIFC and UAE corporate services. Our team has deep expertise in company formation, fund structuring, family office setup, and regulatory compliance — so you get focused, senior-level attention rather than being handed off to junior staff.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#142E36]" />,
    title: "Global Clientele",
    body: "We work with international investors, family offices, fund managers and entrepreneurs from across the UK, Europe, Asia, and beyond who are establishing their presence in the Gulf. We understand the cross-border complexity you face.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#142E36]" />,
    title: "End-to-End Support",
    body: "From initial structuring advice and licence applications through to ongoing compliance, accounting, and governance — we handle the full lifecycle of your DIFC entity so you can focus on what matters most.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Why Atlas | Atlas Corporate Services"
        description="Learn why international investors, family offices and fund managers choose Atlas Corporate Services for DIFC company formation and corporate services in Dubai."
        canonical="/about"
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">

        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">Why Atlas</p>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-[#0c1e24] mb-6 leading-tight">
            Your trusted partner<br className="hidden md:block" /> in DIFC
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            Atlas Corporate Services was built with one goal: to give international businesses, investors and family offices a reliable, expert partner for establishing and managing their presence in the Dubai International Financial Centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="flex items-center gap-1.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-6 py-3 transition-colors">
                Book a Consultation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </Link>
            <Link href="/services">
              <button className="flex items-center gap-1.5 rounded-full border border-slate-200 hover:border-[#142E36] text-[#0c1e24] text-sm font-medium px-6 py-3 transition-colors">
                View Our Services
              </button>
            </Link>
          </div>
        </div>

        {/* Divider image */}
        <div className="w-full h-56 md:h-72 overflow-hidden mb-20">
          <img
            src="https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736"
            alt="DIFC Dubai International Financial Centre"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Who we are */}
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Atlas Corporate Services Ltd is a DIFC-regulated corporate service provider headquartered at Gate Village Building 10 in the Dubai International Financial Centre. We serve international clients who require expert guidance on structuring, forming and operating DIFC entities — whether a standard company, a Prescribed Company (SPV), a Foundation, a family office, or a regulated fund.
            </p>
            <p>
              Our team brings together experience across law, compliance, finance and corporate governance to deliver a service that is both technically rigorous and commercially practical. We understand that our clients are sophisticated — they don't need hand-holding, they need a partner who speaks their language and gets things done correctly the first time.
            </p>
            <p>
              We are proud to have supported clients from the United Kingdom, Europe, India, the United States, Singapore, and across the Gulf in establishing and maintaining their DIFC presence.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-slate-50 py-16 mb-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-10">What sets us apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[#0c1e24] font-display mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Where We Are</h2>
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-1.5 text-slate-600 text-sm">
              <p className="font-semibold text-[#0c1e24] text-base">Atlas Corporate Services Ltd</p>
              <p>GV-00-10-03-BC09, Level 3</p>
              <p>Gate Village Building 10</p>
              <p>Dubai International Financial Centre</p>
              <p>Dubai, United Arab Emirates</p>
              <div className="pt-4 space-y-1">
                <p><span className="font-semibold text-[#0c1e24]">Phone:</span> <a href="tel:+971529798302" className="hover:text-amber-600 transition-colors">+971 52 979 8302</a></p>
                <p><span className="font-semibold text-[#0c1e24]">Email:</span> <a href="mailto:info@atlascorp.ae" className="hover:text-amber-600 transition-colors">info@atlascorp.ae</a></p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <Link href="/contact">
                <button className="flex items-center gap-1.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-6 py-3 transition-colors">
                  Get in Touch
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="max-w-4xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
          <Link href="/services" className="text-amber-600 hover:underline">Our Services</Link>
          <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link>
          <Link href="/insights" className="text-amber-600 hover:underline">Insights & Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
