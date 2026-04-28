import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Users, Globe, Award, Linkedin, ChevronLeft, ChevronRight, X, CheckCircle2 } from "lucide-react";

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

const teamData = [
  {
    name: "Bill Anderson, FCCA",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/bill-anderson.jpg",
    linkedin: "#",
    pastel: "bg-[#e8f0ee]",
    bio: "With his notable credentials as an FCCA, Bill holds pivotal roles as a Partner at the Gulf Tax Accounting Group (GTAG) and as the Managing Partner at Business Improvement Group (BIG). His illustrious career saw him as the Global CFO (Head of Finance & MI Operations) at the Royal Bank of Scotland (RBS) corporate banking division, where he was at the helm of global operations boasting over £2 billion in profits and a staggering £103 billion in total assets. Bill's expertise extends beyond banking — in 2008, he established a Wealth Management firm, further diversifying his portfolio. His leadership roles extend to being a former board member of the Irish Business Council in Dubai and playing instrumental roles in organisations such as EmiratiGroup, Abacus Financial Consultants, and various tech startups. As the Chief Strategy Officer at GTAG, Bill brings 25 years of rich experience spanning finance, strategy, business modelling, investor readiness, audit, corporate governance, compliance, business commercialisation, technology, and corporate restructuring.",
    bullets: [
      "Over 25 years of experience in finance, strategy and corporate governance",
      "Global CFO at Royal Bank of Scotland, overseeing £103 billion in total assets",
      "Founded a Wealth Management firm in 2008, diversifying into private wealth",
      "Former board member of the Irish Business Council in Dubai",
    ],
  },
  {
    name: "Peter Whately",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/peter-whately.jpg",
    linkedin: "#",
    pastel: "bg-[#eef0f8]",
    bio: "Peter is a Partner at Atlas with deep expertise in DIFC company formation, corporate governance and regulatory compliance. He advises international clients on optimal structuring strategies and ongoing entity management across the Gulf region.",
    bullets: [
      "Specialist in DIFC company formation and corporate governance",
      "Advises international clients on optimal structuring strategies",
      "Extensive experience in regulatory compliance across the Gulf region",
      "Trusted advisor for businesses entering the UAE market",
    ],
  },
  {
    name: "David Daly",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/david-daly.jpg",
    linkedin: "#",
    pastel: "bg-[#f5ede8]",
    bio: "David is a Partner specialising in fund structuring, SPV formation and family office services. He brings extensive experience supporting private equity managers, asset owners and HNW families in establishing and maintaining their DIFC presence.",
    bullets: [
      "Specialist in fund structuring and SPV formation in DIFC",
      "Supported private equity managers and HNW families in the Gulf",
      "Extensive experience in family office setup and governance",
      "Deep knowledge of DIFC and ADGM regulatory frameworks",
    ],
  },
  {
    name: "Alexia Kobusch",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/alexia-kobusch.jpg",
    linkedin: "#",
    pastel: "bg-[#f0eef8]",
    bio: "Alexia is a Partner focused on compliance, economic substance and cross-border regulatory matters. She works closely with clients to navigate the evolving DIFC and UAE regulatory landscape, ensuring full compliance at every stage of their corporate lifecycle.",
    bullets: [
      "Expert in DIFC compliance and economic substance regulations",
      "Specialises in cross-border regulatory matters and AML compliance",
      "Guides clients through the full UAE corporate lifecycle",
      "Deep experience in DFSA regulatory requirements",
    ],
  },
];

// ── Profile Modal ─────────────────────────────────────────────
function ProfileModal({ index, onClose }: { index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const member = teamData[current];
  const prev = () => setCurrent((c) => (c - 1 + teamData.length) % teamData.length);
  const next = () => setCurrent((c) => (c + 1) % teamData.length);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex flex-col sm:flex-row">
          {/* Photo */}
          <div className={`sm:w-52 flex-shrink-0 ${member.pastel} rounded-tl-2xl rounded-bl-2xl flex items-end justify-center overflow-hidden`} style={{ minHeight: 260 }}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 sm:h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex-1 p-7">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#142E36] border border-[#142E36]/20 bg-[#142E36]/5 px-3 py-1 rounded-full mb-4">
              {member.position}
            </span>
            <h3 className="text-2xl font-bold font-display text-[#0c1e24] mb-1">{member.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{member.company}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>

            {/* Experience bullets */}
            <div className="border-t border-slate-100 pt-5">
              <h4 className="font-bold text-[#0c1e24] text-sm mb-3">{member.name.split(",")[0]} Experience</h4>
              <ul className="space-y-2">
                {member.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#142E36] flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* LinkedIn */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#0c1e24] transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <Link href="/contact">
                <button className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                  Book a call <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel nav */}
        <div className="px-7 py-4 border-t border-slate-100 flex items-center justify-between">
          <button onClick={prev} className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0c1e24] transition-colors">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex gap-1.5">
            {teamData.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${i === current ? "w-5 h-2 bg-[#142E36]" : "w-2 h-2 bg-slate-200 hover:bg-slate-400"}`}
              />
            ))}
          </div>
          <button onClick={next} className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0c1e24] transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const ceo = teamData[0];
  const partners = teamData.slice(1);

  return (
    <>
      <SEO
        title="Why Atlas | Atlas Corporate Services"
        description="Learn why international investors, family offices and fund managers choose Atlas Corporate Services for DIFC company formation and corporate services in Dubai."
        canonical="/about"
      />
      <Navbar />

      {modalIndex !== null && (
        <ProfileModal index={modalIndex} onClose={() => setModalIndex(null)} />
      )}

      <main className="min-h-screen bg-white pt-28 pb-20">

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 mb-20">
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
                Book a Consultation <ArrowUpRight className="h-3.5 w-3.5" />
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
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>Atlas Corporate Services Ltd is a DIFC-regulated corporate service provider headquartered at Gate Village Building 10 in the Dubai International Financial Centre. We serve international clients who require expert guidance on structuring, forming and operating DIFC entities — whether a standard company, a Prescribed Company (SPV), a Foundation, a family office, or a regulated fund.</p>
            <p>Our team brings together experience across law, compliance, finance and corporate governance to deliver a service that is both technically rigorous and commercially practical. We understand that our clients are sophisticated — they need a partner who speaks their language and gets things done correctly the first time.</p>
            <p>We are proud to have supported clients from the United Kingdom, Europe, India, the United States, Singapore, and across the Gulf in establishing and maintaining their DIFC presence.</p>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-slate-50 py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-10">What sets us apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* ── Meet Our Team ─────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-1 inline-block relative">
              Meet Our Team
              <span className="block w-10 h-0.5 bg-amber-500 mx-auto mt-2 rounded-full" />
            </h2>
            <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto">
              Experienced professionals committed to delivering expert corporate solutions across the DIFC and broader UAE.
            </p>
          </div>

          {/* CEO featured row */}
          <div
            className="flex flex-col sm:flex-row gap-8 mb-14 cursor-pointer group"
            onClick={() => setModalIndex(0)}
          >
            {/* Photo */}
            <div className={`relative sm:w-64 flex-shrink-0 rounded-2xl overflow-hidden ${ceo.pastel}`} style={{ minHeight: 280 }}>
              <span className="absolute top-4 left-4 z-10 text-xs font-bold bg-white/80 backdrop-blur-sm text-[#0c1e24] px-3 py-1 rounded-full">
                {ceo.position}
              </span>
              <img src={ceo.image} alt={ceo.name} className="w-full h-72 sm:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Info */}
            <div className="flex-1 py-2">
              <h3 className="text-2xl font-bold font-display text-[#0c1e24] mb-1 group-hover:text-[#142E36] transition-colors">{ceo.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{ceo.company}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">{ceo.bio}</p>

              {/* Social */}
              <div className="flex items-center gap-3 mb-6">
                <a href={ceo.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#142E36] hover:text-white text-slate-500 flex items-center justify-center transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-bold text-[#0c1e24] text-sm mb-3">{ceo.name.split(",")[0]} Experience</h4>
                <ul className="space-y-2">
                  {ceo.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#142E36] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-amber-600 font-semibold mt-5 group-hover:underline">Click to view full profile →</p>
            </div>
          </div>
        </div>

        {/* ── Partners Grid ─────────────────────────────── */}
        <div className="bg-slate-50 py-16 mb-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold font-display text-[#0c1e24] mb-2">Partners</h2>
            <p className="text-slate-500 text-sm mb-10 max-w-lg">
              Click on a profile card to read the full bio and navigate between partners.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.map((member, i) => (
                <div
                  key={member.name}
                  onClick={() => setModalIndex(i)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
                >
                  {/* Photo with pastel bg */}
                  <div className={`relative ${member.pastel} overflow-hidden`} style={{ height: 220 }}>
                    <span className="absolute top-3 left-3 z-10 text-xs font-semibold bg-white/80 backdrop-blur-sm text-[#0c1e24] px-2.5 py-1 rounded-full">
                      {member.position}
                    </span>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#0c1e24] font-display text-base mb-1">{member.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
                    <p className="text-xs text-amber-600 font-semibold mt-3">View profile →</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Where We Are</h2>
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 flex flex-col md:flex-row gap-8 items-start shadow-sm">
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
            <div>
              <Link href="/contact">
                <button className="flex items-center gap-1.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-6 py-3 transition-colors">
                  Get in Touch <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="max-w-5xl mx-auto px-6 pt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/services" className="text-amber-600 hover:underline">Our Services</Link>
          <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link>
          <Link href="/insights" className="text-amber-600 hover:underline">Insights & Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
