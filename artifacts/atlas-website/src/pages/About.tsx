import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Users, Globe, Award, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

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
    since: "",
    image: "/team/bill-anderson.jpg",
    linkedin: "#",
    bio: "With his notable credentials as an FCCA, Bill holds pivotal roles as a Partner at the Gulf Tax Accounting Group (GTAG) and as the Managing Partner at Business Improvement Group (BIG). His illustrious career saw him as the Global CFO (Head of Finance & MI Operations) at the Royal Bank of Scotland (RBS) corporate banking division, where he was at the helm of global operations boasting over £2 billion in profits and a staggering £103 billion in total assets. Bill's expertise extends beyond banking — in 2008, he established a Wealth Management firm, further diversifying his portfolio. His leadership roles extend to being a former board member of the Irish Business Council in Dubai and playing instrumental roles in organisations such as EmiratiGroup, Abacus Financial Consultants, and various tech startups. As the Chief Strategy Officer at GTAG, Bill brings 25 years of rich experience spanning finance, strategy, business modelling, investor readiness, audit, corporate governance, compliance, business commercialisation, technology, and corporate restructuring.",
    featured: true,
  },
  {
    name: "Peter Whately",
    position: "Partner",
    company: "Atlas Corporate Services",
    since: "Since 2020",
    image: "/team/peter-whately.jpg",
    linkedin: "#",
    bio: "Peter is a Partner at Atlas with deep expertise in DIFC company formation, corporate governance and regulatory compliance. He advises international clients on optimal structuring strategies and ongoing entity management across the Gulf region.",
    featured: false,
  },
  {
    name: "David Daly",
    position: "Partner",
    company: "Atlas Corporate Services",
    since: "Since 2021",
    image: "/team/david-daly.jpg",
    linkedin: "#",
    bio: "David is a Partner specialising in fund structuring, SPV formation and family office services. He brings extensive experience supporting private equity managers, asset owners and HNW families in establishing and maintaining their DIFC presence.",
    featured: false,
  },
  {
    name: "Alexia Kobusch",
    position: "Partner",
    company: "Atlas Corporate Services",
    since: "Since 2022",
    image: "/team/alexia-kobusch.jpg",
    linkedin: "#",
    bio: "Alexia is a Partner focused on compliance, economic substance and cross-border regulatory matters. She works closely with clients to navigate the evolving DIFC and UAE regulatory landscape, ensuring full compliance at every stage of their corporate lifecycle.",
    featured: false,
  },
];

function TeamCarousel({ team }: { team: typeof teamData }) {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + team.length) % team.length);
  const next = () => setActive((a) => (a + 1) % team.length);

  const current = team[active];
  // Photos shown to the right: the other members in order
  const photoQueue = [...team.slice(active + 1), ...team.slice(0, active)];

  return (
    <div className="bg-white py-20 mb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-400 border border-slate-200 rounded-full px-4 py-1.5 mb-5">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0c1e24] leading-tight max-w-xs">
              Meet our management team
            </h2>
          </div>
          {/* Nav buttons */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-[#142E36] hover:bg-[#0c1e24] flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#142E36] hover:bg-[#0c1e24] flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex gap-4 items-stretch overflow-hidden">

          {/* Active info card */}
          <div
            className="flex-shrink-0 rounded-2xl p-7 flex flex-col justify-between"
            style={{ width: 280, minHeight: 420, background: "#142E36" }}
          >
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1 leading-snug">{current.name}</h3>
              <p className="text-amber-400 text-xs font-semibold mb-5">{current.position}</p>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-[10]">{current.bio}</p>
            </div>
            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/10">
              <a
                href={current.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <Link href="/contact">
                <button className="flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                  Book a call <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Photo cards */}
          {photoQueue.slice(0, 3).map((member, i) => (
            <div
              key={member.name}
              onClick={() => setActive(team.indexOf(member))}
              className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer group min-w-0"
              style={{ minHeight: 420 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: 420 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="text-white font-bold font-display text-base leading-snug">{member.name}</h3>
                <p className="text-amber-400 text-xs font-semibold mt-0.5">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-7">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-6 h-2 bg-[#142E36]" : "w-2 h-2 bg-slate-200 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ceo = teamData[0];
  const rest = teamData.slice(1);

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
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Who We Are</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Atlas Corporate Services Ltd is a DIFC-regulated corporate service provider headquartered at Gate Village Building 10 in the Dubai International Financial Centre. We serve international clients who require expert guidance on structuring, forming and operating DIFC entities — whether a standard company, a Prescribed Company (SPV), a Foundation, a family office, or a regulated fund.
            </p>
            <p>
              Our team brings together experience across law, compliance, finance and corporate governance to deliver a service that is both technically rigorous and commercially practical. We understand that our clients are sophisticated — they need a partner who speaks their language and gets things done correctly the first time.
            </p>
            <p>
              We are proud to have supported clients from the United Kingdom, Europe, India, the United States, Singapore, and across the Gulf in establishing and maintaining their DIFC presence.
            </p>
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

        {/* ── Management Team ──────────────────────────────────────── */}
        <TeamCarousel team={teamData} />

        {/* Location */}
        <div className="bg-slate-50 py-16 mb-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-[#0c1e24] mb-5">Where We Are</h2>
            <div className="bg-white rounded-2xl p-7 border border-slate-100 flex flex-col md:flex-row gap-8 items-start shadow-sm">
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
              <div className="flex items-start">
                <Link href="/contact">
                  <button className="flex items-center gap-1.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-6 py-3 transition-colors">
                    Get in Touch
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </Link>
              </div>
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
