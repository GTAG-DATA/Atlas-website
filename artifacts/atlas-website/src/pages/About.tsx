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

  // Order cards: active center, others spread left/right
  const getOrder = (i: number) => {
    const diff = (i - active + team.length) % team.length;
    if (diff === 0) return 0;           // center
    if (diff === 1) return 1;           // right
    if (diff === team.length - 1) return -1; // left
    return 2;                            // far right / hidden
  };

  return (
    <div className="relative bg-[#060d1f] py-24 mb-20 overflow-hidden">
      {/* Radial glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Leadership</p>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-3 leading-tight">
          Meet our
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold font-display italic text-indigo-400 mb-0 leading-tight">
          management team
        </h2>
      </div>

      {/* Cards row */}
      <div className="relative flex items-center justify-center" style={{ minHeight: 480 }}>

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-10 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div className="relative w-full flex items-center justify-center gap-0" style={{ height: 480 }}>
          {team.map((member, i) => {
            const order = getOrder(i);
            const isActive = order === 0;
            const isLeft = order === -1;
            const isRight = order === 1;
            const isHidden = Math.abs(order) > 1;

            let transform = "translateX(0) scale(1)";
            let zIndex = 10;
            let opacity = 1;

            if (isLeft) { transform = "translateX(-260px) scale(0.82)"; zIndex = 5; opacity = 0.7; }
            if (isRight) { transform = "translateX(260px) scale(0.82)"; zIndex = 5; opacity = 0.7; }
            if (isHidden) { transform = "translateX(0) scale(0.7)"; zIndex = 1; opacity = 0; }

            return (
              <div
                key={member.name}
                onClick={() => !isActive && setActive(i)}
                className="absolute rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: isActive ? 340 : 260,
                  height: isActive ? 480 : 400,
                  transform,
                  zIndex,
                  opacity,
                  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* Photo fills card */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />

                {/* Gradient overlay — always show name at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Active card: bio text in middle */}
                {isActive && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-6">{member.bio}</p>
                  </div>
                )}

                {/* Name + role at bottom */}
                <div className="absolute bottom-0 inset-x-0 px-6 pb-6">
                  <h3 className="text-white font-bold font-display text-lg leading-snug">{member.name}</h3>
                  <p className="text-indigo-300 text-xs font-semibold mt-0.5">{member.position}</p>
                  {isActive && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-4 md:right-10 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-indigo-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
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
