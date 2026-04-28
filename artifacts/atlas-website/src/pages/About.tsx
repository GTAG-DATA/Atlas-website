import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Users, Globe, Award, Linkedin, ChevronLeft, ChevronRight, X, CheckCircle2, Phone } from "lucide-react";

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
    email: "bill.anderson@atlascorp.ae",
    phone: "+971 52 979 8302",
    whatsapp: "971529798302",
    pastel: "bg-[#e8f0ee]",
    bio: "With his notable credentials as an FCCA, Bill holds pivotal roles as a Partner at the Gulf Tax Accounting Group (GTAG) and as the Managing Partner at Business Improvement Group (BIG). His illustrious career saw him as the Global CFO (Head of Finance & MI Operations) at the Royal Bank of Scotland (RBS) corporate banking division, where he was at the helm of global operations boasting over £2 billion in profits and a staggering £103 billion in total assets. Bill's expertise extends beyond banking — in 2008, he established a Wealth Management firm, further diversifying his portfolio. His leadership roles extend to being a former board member of the Irish Business Council in Dubai and playing instrumental roles in organisations such as EmiratiGroup, Abacus Financial Consultants, and various tech startups. As the Chief Strategy Officer at GTAG, Bill brings 25 years of rich experience spanning finance, strategy, business modelling, investor readiness, audit, corporate governance, compliance, business commercialisation, technology, and corporate restructuring.",
    bullets: [
      "Over 25 years of experience in finance, strategy and corporate governance",
      "Global CFO at Royal Bank of Scotland, overseeing £103 billion in total assets",
      "Founded a Wealth Management firm in 2008, diversifying into private wealth",
      "Former board member of the Irish Business Council in Dubai",
    ],
    badges: ["FCCA", "Royal Bank of Scotland", "GTAG", "BIG"],
    bioPara: [
      "A Fellow Chartered Certified Accountant with over 25 years of executive experience spanning finance, strategy, and corporate governance. Bill serves as Partner at the Gulf Tax Accounting Group (GTAG) and Managing Partner at Business Improvement Group (BIG).",
      "Previously Global CFO at Royal Bank of Scotland's corporate banking division, he led operations generating £2B in profits across £103B in total assets. He founded a Wealth Management firm in 2008 and has held board roles with the Irish Business Council in Dubai and EmiratiGroup.",
    ],
    stats: [
      { value: "25", unit: "yrs", label: "Experience" },
      { value: "£103", unit: "B", label: "Assets Managed" },
      { value: "£2", unit: "B", label: "Profit Led" },
    ],
  },
  {
    name: "Peter Whatley, CA (SA)",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/peter-whately.jpg",
    linkedin: "#",
    email: "Peter.whatley@gtag.ae",
    phone: "+971563148567",
    whatsapp: "971563148567",
    pastel: "bg-[#eef0f8]",
    bio: "Peter is a distinguished Chartered Accountant and an alumnus of the University of Port Elizabeth, South Africa. His vast experience in Direct and Indirect Taxation was honed at the South African Revenue Service, where he played a pivotal role in pre-VAT implementation education initiatives and later transitioned to the post-implementation VAT and Corporate Tax Inspectorate. Peter's journey as a Tax Partner at Grant Thornton and his senior finance leadership roles across renowned groups in the UAE, Qatar, and South Africa have equipped him with over 25 years of hands-on expertise. His areas of proficiency span Finance, Corporate Restructuring, Budgeting, Auditing, Taxation, Technology Implementation, Operations, Marketing, Supply Chain, and Contract Negotiations.",
    bullets: [
      "Chartered Accountant CA (SA), alumnus of the University of Port Elizabeth",
      "Over 25 years of expertise in Direct and Indirect Taxation across the UAE, Qatar and South Africa",
      "Tax Partner at Grant Thornton; former role at the South African Revenue Service",
      "Specialist in Corporate Restructuring, Auditing, ERP and Contract Negotiations",
    ],
    badges: ["CA (SA)", "Grant Thornton", "SARS", "GTAG"],
    bioPara: [
      "A distinguished Chartered Accountant and alumnus of the University of Port Elizabeth, South Africa. Peter's expertise in Direct and Indirect Taxation was honed at the South African Revenue Service and later as Tax Partner at Grant Thornton.",
      "With over 25 years of hands-on expertise across the UAE, Qatar and South Africa, his proficiency spans Finance, Corporate Restructuring, Budgeting, Auditing, Taxation, Technology Implementation, and Contract Negotiations.",
    ],
    stats: [
      { value: "25", unit: "yrs", label: "Experience" },
      { value: "3", unit: "", label: "Countries" },
      { value: "Tax", unit: "", label: "Partner" },
    ],
  },
  {
    name: "David Daly, ACMA",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/david-daly.jpg",
    linkedin: "#",
    email: "David.daly@gtag.ae",
    phone: "+971507087072",
    whatsapp: "971507087072",
    pastel: "bg-[#f5ede8]",
    bio: "David is a UK Qualified Accountant and a graduate of Trinity College Dublin. With over two decades of global experience in transformational settings across diverse industries, David has spent fourteen of those years at an executive level, with the last nine being rooted in the Middle East. He's an established author, penning a series of articles on VAT for the UAE published in The National and contributing to international platforms like Bloomberg and The Telegraph. David's expertise encompasses VAT, finance, project management, business turnaround, treasury, audit, IT systems & ERP, business process re-engineering, and contract negotiations.",
    bullets: [
      "UK Qualified Accountant (ACMA), graduate of Trinity College Dublin",
      "Over 20 years of global experience; 9 years at executive level in the Middle East",
      "Published author on UAE VAT in The National, Bloomberg and The Telegraph",
      "Expert in VAT, business turnaround, ERP systems and contract negotiations",
    ],
    badges: ["ACMA", "Trinity College Dublin", "Bloomberg", "The Telegraph"],
    bioPara: [
      "A UK Qualified Accountant and graduate of Trinity College Dublin with over two decades of global experience. David has spent fourteen years at executive level, with the last nine rooted in the Middle East.",
      "An established author on UAE VAT, published in The National, Bloomberg, and The Telegraph. His expertise encompasses VAT, finance, business turnaround, treasury, audit, IT systems & ERP, and contract negotiations.",
    ],
    stats: [
      { value: "20", unit: "yrs", label: "Experience" },
      { value: "14", unit: "yrs", label: "Executive" },
      { value: "3", unit: "", label: "Publications" },
    ],
  },
  {
    name: "Alexia Kobusch, CA (SA)",
    position: "Partner",
    company: "Atlas Corporate Services",
    image: "/team/alexia-kobusch.jpg",
    linkedin: "#",
    email: "alexia@atlascorp.ae",
    phone: "+971544251221",
    whatsapp: "971544251221",
    pastel: "bg-[#f0eef8]",
    bio: "Alexia serves as the Practice Manager at GTAG, bringing over two decades of rich experience in financial services, particularly in risk management, financial instruments, and accounting. A Chartered Accountant certified in South Africa, Alexia completed her articles at Deloitte in Johannesburg. She is also a qualified Representative, Key Individual, and Compliance Officer with the FSCA. Before joining GTAG, Alexia offered her consultancy expertise across various entities in the Financial Services industry, showcasing her profound knowledge and versatile skill set.",
    bullets: [
      "Chartered Accountant CA (SA), completed articles at Deloitte Johannesburg",
      "Over 20 years in financial services: risk management, financial instruments and accounting",
      "Qualified Representative, Key Individual and Compliance Officer with the FSCA",
      "Extensive consultancy experience across the Financial Services industry",
    ],
    badges: ["CA (SA)", "Deloitte", "FSCA", "GTAG"],
    bioPara: [
      "Practice Manager at GTAG, bringing over two decades of rich experience in financial services, particularly in risk management, financial instruments, and accounting.",
      "A Chartered Accountant who completed her articles at Deloitte in Johannesburg, Alexia is also a qualified Representative, Key Individual, and Compliance Officer with the FSCA.",
    ],
    stats: [
      { value: "20", unit: "yrs", label: "Experience" },
      { value: "CA", unit: "(SA)", label: "Qualification" },
      { value: "FSCA", unit: "", label: "Certified" },
    ],
  },
];

// ── Profile Modal ─────────────────────────────────────────────
const S = {
  ink: "#0B1F3A", inkSoft: "#2C3E5C", body: "#4A5A73", muted: "#8A95A8",
  line: "#E4E8EF", lineSoft: "#F0F3F8", accent: "#B8895A", green: "#25D366",
};

function ProfileModal({ index, onClose }: { index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const member = teamData[current];
  const prev = () => setCurrent((c) => (c - 1 + teamData.length) % teamData.length);
  const next = () => setCurrent((c) => (c + 1) % teamData.length);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const nameParts = member.name.split(",");
  const firstName = nameParts[0].trim();
  const credential = nameParts.slice(1).join(",").trim();

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px 20px",
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
      }}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", width: "100%", maxWidth: 720,
          background: "#fff", borderRadius: 4, overflow: "hidden",
          boxShadow: "0 1px 2px rgba(11,31,58,0.04), 0 30px 60px -20px rgba(11,31,58,0.22), 0 60px 120px -40px rgba(11,31,58,0.14)",
          maxHeight: "90vh", overflowY: "auto",
        }}
      >
        {/* Accent bar */}
        <div style={{ height: 4, background: "#142E36" }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 20, right: 20, width: 34, height: 34,
            border: `1px solid ${S.line}`, background: "#fff", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 10, color: S.ink, transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = S.ink; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff"; (e.currentTarget as HTMLButtonElement).style.color = S.ink; }}
        >
          <X size={12} />
        </button>

        {/* Content */}
        <div style={{ padding: "40px 48px 32px" }}>

          {/* Eyebrow */}
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: S.accent, marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 28, height: 1, background: S.accent, display: "inline-block", flexShrink: 0 }} />
            Leadership Profile
          </div>

          {/* Header row */}
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${S.lineSoft}` }}>
            {/* Avatar */}
            <div style={{ position: "relative", width: 110, height: 110, flexShrink: 0, borderRadius: 4, overflow: "hidden", boxShadow: "0 12px 24px -8px rgba(11,31,58,0.22)" }}>
              <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
              <a
                href={member.linkedin} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ position: "absolute", bottom: 6, right: 6, width: 24, height: 24, background: "#fff", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", color: S.ink, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
              >
                <Linkedin size={13} />
              </a>
            </div>

            {/* Name / role / tags */}
            <div style={{ flex: 1, paddingTop: 4, minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.015em", color: S.ink, marginBottom: 6 }}>
                {firstName}
                {credential && (
                  <span style={{ fontStyle: "italic", fontWeight: 400, color: S.accent, fontSize: "0.6em", letterSpacing: "0.02em", marginLeft: 6, verticalAlign: "2px" }}>
                    {credential}
                  </span>
                )}
              </h2>
              <p style={{ fontSize: 14, color: S.inkSoft, fontWeight: 450, marginBottom: 14 }}>
                {member.position} · <span style={{ color: S.ink, fontWeight: 500 }}>{member.company}</span>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {member.badges.map((b) => (
                  <span key={b} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "transparent", border: `1px solid ${S.line}`, borderRadius: 2, fontSize: 10, fontWeight: 500, letterSpacing: "0.06em", color: S.inkSoft, textTransform: "uppercase" }}>
                    <span style={{ width: 4, height: 4, background: S.accent, borderRadius: "50%", flexShrink: 0 }} />
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ fontSize: 14, lineHeight: 1.7, color: S.body, marginBottom: 28 }}>
            {member.bioPara.map((p, i) => (
              <p key={i} style={{ marginTop: i > 0 ? 12 : 0 }}>{p}</p>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginBottom: 28, padding: "18px 0", borderTop: `1px solid ${S.lineSoft}`, borderBottom: `1px solid ${S.lineSoft}` }}>
            {member.stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 8px", borderRight: i < 2 ? `1px solid ${S.lineSoft}` : "none" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 22, color: S.ink, lineHeight: 1, marginBottom: 6 }}>
                  {s.value}<span style={{ fontSize: "0.6em", color: S.accent, marginLeft: 2 }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: S.muted, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: S.muted, marginBottom: 12 }}>
              — Direct Contact
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 12, alignItems: "stretch" }}>
              <a
                href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 16px", background: S.green, color: "#fff", borderRadius: 2, textDecoration: "none", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15, flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href={`tel:${member.phone}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4px 0 4px 14px", borderLeft: `1px solid ${S.line}`, textDecoration: "none" }}>
                <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: S.muted, marginBottom: 3, fontWeight: 500 }}>Phone</span>
                <span style={{ fontSize: 12.5, color: S.ink, fontWeight: 500 }}>{member.phone}</span>
              </a>
              <a href={`mailto:${member.email}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4px 0 4px 14px", borderLeft: `1px solid ${S.line}`, textDecoration: "none", overflow: "hidden" }}>
                <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: S.muted, marginBottom: 3, fontWeight: 500 }}>Email</span>
                <span style={{ fontSize: 12.5, color: S.ink, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", borderTop: `1px solid ${S.lineSoft}`, background: "#FAF8F5" }}>
          <button onClick={prev} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", border: "none", cursor: "pointer", color: S.inkSoft, fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "inherit", transition: "color 0.2s" }}>
            <ChevronLeft size={12} /> Previous
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {teamData.map((_, i) => (
              <button
                key={i} onClick={() => setCurrent(i)}
                style={{ width: i === current ? 22 : 6, height: 6, background: i === current ? S.ink : S.line, borderRadius: i === current ? 3 : "50%", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
              />
            ))}
            <span style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: 11, color: S.muted, marginLeft: 8 }}>
              {String(current + 1).padStart(2, "0")} / {String(teamData.length).padStart(2, "0")}
            </span>
          </div>
          <button onClick={next} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", border: "none", cursor: "pointer", color: S.inkSoft, fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "inherit", transition: "color 0.2s" }}>
            Next <ChevronRight size={12} />
          </button>
        </nav>
      </article>
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

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-3 mb-6" onClick={(e) => e.stopPropagation()}>
                <a
                  href={`https://wa.me/${ceo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold bg-[#25D366] hover:bg-[#1ebe5c] text-white px-3 py-1.5 rounded-full transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <a href={ceo.linkedin} target="_blank" rel="noopener noreferrer"
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
              {teamData.slice(1).map((member, i) => (
                <div
                  key={member.name}
                  onClick={() => setModalIndex(i + 1)}
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
