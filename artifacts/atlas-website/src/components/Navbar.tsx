import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  {
    title: "DIFC Company Setup",
    subtitle: "Strategic DIFC setup for growth and credibility",
    slug: "difc-company-setup",
  },
  {
    title: "DIFC Foundations",
    subtitle: "Secure structures for wealth and succession planning",
    slug: "difc-foundations",
  },
  {
    title: "Company Secretarial & Governance",
    subtitle: "Ongoing governance and compliance, handled properly",
    slug: "company-secretarial-governance",
  },
  {
    title: "Family Office Setup",
    subtitle: "Tailored structures for wealth control and legacy",
    slug: "family-office-setup",
  },
  {
    title: "Compliance & Economic Substance",
    subtitle: "Stay compliant and reduce regulatory risk",
    slug: "compliance-economic-substance",
  },
  {
    title: "Accounting, Tax & Payroll",
    subtitle: "Accurate financial management with full compliance",
    slug: "compliance-economic-substance",
  },
  {
    title: "Residency & Banking Concierge",
    subtitle: "Smooth residency and banking setup in the UAE",
    slug: "residency-banking-concierge",
  },
  {
    title: "Fund & SPV Support",
    subtitle: "End-to-end support for funds and SPV structures",
    slug: "fund-spv-support",
  },
  {
    title: "DIFC Prescribed Company (SPV)",
    subtitle: "Cost-effective SPV for investment holding",
    slug: "difc-prescribed-company-spv",
  },
  {
    title: "Fund Setup",
    subtitle: "Full fund formation in DIFC and ADGM",
    slug: "fund-setup",
  },
];

const insightsMenu = [
  {
    title: "All Insights & Resources",
    subtitle: "View All",
    path: "/insights",
    isViewAll: true,
  },
  {
    title: "DIFC 101 Guide",
    subtitle: "Guide",
    path: "/insights",
  },
  {
    title: "Prescribed Company Handbook",
    subtitle: "Guide",
    path: "/insights",
  },
  {
    title: "Innovation License Guide",
    subtitle: "Guide",
    path: "/insights",
  },
  {
    title: "Economic Substance Updates",
    subtitle: "Update",
    path: "/insights",
  },
  {
    title: "UAE Corporate Tax",
    subtitle: "Update",
    path: "/insights",
  },
];

const MEGA_PREVIEW_IMAGE =
  "https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736";
const MEGA_PREVIEW_TEXT =
  "Strategic structuring, compliance and corporate solutions in DIFC and the UAE.";

function MegaMenuServices({ onClose }: { onClose: () => void }) {
  const half = Math.ceil(servicesMenu.length / 2);
  const col1 = servicesMenu.slice(0, half);
  const col2 = servicesMenu.slice(half);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.16 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {/* Col 1 */}
        <div className="py-3 px-3">
          {col1.map((item) => (
            <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
              <div
                className="px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer group transition-colors"
                onClick={onClose}
              >
                <p className="font-bold text-sm text-[#111] font-manrope group-hover:text-[#142E36] leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 leading-tight truncate">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Col 2 */}
        <div className="py-3 px-3">
          {col2.map((item) => (
            <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
              <div
                className="px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer group transition-colors"
                onClick={onClose}
              >
                <p className="font-bold text-sm text-[#111] font-manrope group-hover:text-[#142E36] leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 leading-tight truncate">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Preview panel */}
        <div className="py-4 px-4 flex flex-col gap-3">
          <p className="text-sm font-bold font-manrope text-foreground leading-snug">
            {MEGA_PREVIEW_TEXT}
          </p>
          <div className="rounded-xl overflow-hidden flex-1">
            <img
              src={MEGA_PREVIEW_IMAGE}
              alt="Atlas Corporate Services"
              className="w-full h-full object-cover min-h-[120px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MegaMenuInsights({ onClose }: { onClose: () => void }) {
  const col1 = insightsMenu.slice(0, 4);
  const col2 = insightsMenu.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.16 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {/* Col 1 */}
        <div className="py-3 px-3">
          {col1.map((item) => (
            <Link key={item.title} href={item.path}>
              <div
                className="px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer group transition-colors"
                onClick={onClose}
              >
                <p className="font-bold text-sm text-[#111] font-manrope group-hover:text-[#142E36] leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 leading-tight">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Col 2 */}
        <div className="py-3 px-3">
          {col2.map((item) => (
            <Link key={item.title} href={item.path}>
              <div
                className="px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer group transition-colors"
                onClick={onClose}
              >
                <p className="font-bold text-sm text-[#111] font-manrope group-hover:text-[#142E36] leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 leading-tight">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Preview panel */}
        <div className="py-4 px-4 flex flex-col gap-3">
          <p className="text-sm font-bold font-manrope text-foreground leading-snug">
            {MEGA_PREVIEW_TEXT}
          </p>
          <div className="rounded-xl overflow-hidden flex-1">
            <img
              src="https://framerusercontent.com/images/boAvRohjbYrJ6IpCgHMw0B5fSU.jpg?width=6144&height=3456"
              alt="Insights"
              className="w-full h-full object-cover min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location === "/";
  const isTransparent = !isScrolled && isHome;

  const navClass = isTransparent
    ? "bg-transparent py-5"
    : "bg-white/97 backdrop-blur-sm shadow-sm py-4";
  const textClass = isTransparent ? "text-white" : "text-[#142E36]";
  const logoInvertClass = isTransparent ? "brightness-0 invert" : "";

  const handleMouseEnter = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src={logoImg}
              alt="Atlas Corporate Services"
              className={`h-8 md:h-10 object-contain transition-all ${logoInvertClass}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 relative">
            <Link href="/">
              <span className={`text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Home
              </span>
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleClose}
            >
              <div className={`flex items-center gap-1 text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </div>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <MegaMenuServices onClose={() => setOpenDropdown(null)} />
                )}
              </AnimatePresence>
            </div>

            {/* Insights */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleClose}
            >
              <div className={`flex items-center gap-1 text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Insights
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "insights" ? "rotate-180" : ""}`} />
              </div>
              <AnimatePresence>
                {openDropdown === "insights" && (
                  <MegaMenuInsights onClose={() => setOpenDropdown(null)} />
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog">
              <span className={`text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Contact
              </span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="rounded-full bg-white text-[#142E36] hover:bg-white/90 font-semibold px-6 text-sm border border-slate-200 shadow-sm">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 ${textClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-1 max-h-[80vh] overflow-y-auto">
              <Link href="/">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer">Home</div>
              </Link>
              <div className="py-3 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Services</p>
                {servicesMenu.map((item) => (
                  <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
                    <div className="py-2 pl-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="py-3 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Insights</p>
                {insightsMenu.map((item) => (
                  <Link key={item.title} href={item.path}>
                    <div className="py-2 pl-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Blog</div>
              </Link>
              <Link href="/contact">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</div>
              </Link>
              <Link href="/contact">
                <Button className="w-full rounded-full bg-[#142E36] text-white mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
