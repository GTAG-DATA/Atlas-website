import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logoImg from "@assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
  { title: "DIFC Company Setup", subtitle: "Strategic DIFC setup for growth and credibility", slug: "difc-company-setup" },
  { title: "DIFC Foundations", subtitle: "Secure structures for wealth and succession planning", slug: "difc-foundations" },
  { title: "Company Secretarial & Governance", subtitle: "Ongoing governance and compliance, handled properly", slug: "company-secretarial-governance" },
  { title: "Family Office Setup", subtitle: "Tailored structures for wealth control and legacy", slug: "family-office-setup" },
  { title: "Compliance & Economic Substance", subtitle: "Stay compliant and reduce regulatory risk", slug: "compliance-economic-substance" },
  { title: "Accounting, Tax & Payroll", subtitle: "Accurate financial management with full compliance", slug: "compliance-economic-substance" },
  { title: "Residency & Banking Concierge", subtitle: "Smooth residency and banking setup in the UAE", slug: "residency-banking-concierge" },
  { title: "Fund & SPV Support", subtitle: "End-to-end support for funds and SPV structures", slug: "fund-spv-support" },
  { title: "DIFC Prescribed Company (SPV)", subtitle: "Cost-effective SPV for investment holding", slug: "difc-prescribed-company-spv" },
  { title: "Fund Setup", subtitle: "Full fund formation in DIFC and ADGM", slug: "fund-setup" },
];

const insightsMenu = [
  { title: "All Insights & Resources", subtitle: "View All", path: "/insights" },
  { title: "DIFC 101 Guide", subtitle: "Guide", path: "/insights" },
  { title: "Prescribed Company Handbook", subtitle: "Guide", path: "/insights" },
  { title: "Innovation License Guide", subtitle: "Guide", path: "/insights" },
  { title: "Economic Substance Updates", subtitle: "Update", path: "/insights" },
  { title: "UAE Corporate Tax", subtitle: "Update", path: "/insights" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navBg = "bg-white shadow-sm py-4";
  const textClass = "text-[#111]";
  const logoInvert = "";

  const open = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const close = () => setOpenDropdown(null);

  const half = Math.ceil(servicesMenu.length / 2);
  const svcCol1 = servicesMenu.slice(0, half);
  const svcCol2 = servicesMenu.slice(half);
  const insCol1 = insightsMenu.slice(0, 4);
  const insCol2 = insightsMenu.slice(4);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* Top bar */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src={logoImg} alt="Atlas Corporate Services" className={`h-8 md:h-10 object-contain transition-all ${logoInvert}`} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/"><span className="text-sm text-[#111] hover:text-sky-500 transition-colors cursor-pointer">Home</span></Link>

            <button
              onMouseEnter={() => open("services")}
              className={`flex items-center gap-1 text-sm text-[#111] hover:text-sky-500 transition-colors cursor-pointer ${openDropdown === "services" ? "text-sky-500" : ""}`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
            </button>

            <button
              onMouseEnter={() => open("insights")}
              className={`flex items-center gap-1 text-sm text-[#111] hover:text-sky-500 transition-colors cursor-pointer ${openDropdown === "insights" ? "text-sky-500" : ""}`}
            >
              Insights
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === "insights" ? "rotate-180" : ""}`} />
            </button>

            <Link href="/blog"><span className="text-sm text-[#111] hover:text-sky-500 transition-colors cursor-pointer">Blog</span></Link>
            <Link href="/contact"><span className="text-sm text-[#111] hover:text-sky-500 transition-colors cursor-pointer">Contact</span></Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <button className="flex items-center gap-1.5 rounded-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium px-5 py-2.5 transition-colors">
                Book a Consultation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </div>

          <button className={`md:hidden p-2 ${textClass}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ── Full-width mega menus ─────────────────────────────── */}
      <AnimatePresence>
        {openDropdown === "services" && (
          <motion.div
            key="services-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-2xl z-50"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-3 divide-x divide-slate-100">
                {/* Col 1 */}
                <div className="py-8 pr-10">
                  {svcCol1.map((item) => (
                    <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
                      <div className="py-3 group cursor-pointer" onClick={close}>
                        <p className="font-bold text-base text-[#111] font-manrope group-hover:text-[#142E36] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-400 mt-0.5">{item.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Col 2 */}
                <div className="py-8 px-10">
                  {svcCol2.map((item) => (
                    <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
                      <div className="py-3 group cursor-pointer" onClick={close}>
                        <p className="font-bold text-base text-[#111] font-manrope group-hover:text-[#142E36] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-400 mt-0.5">{item.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Preview */}
                <div className="py-8 pl-10 flex flex-col gap-5">
                  <p className="text-lg font-bold font-manrope text-foreground leading-snug">
                    Strategic structuring, compliance and corporate solutions in DIFC and the UAE.
                  </p>
                  <p className="text-sm text-slate-500 -mt-2">
                    Use data-driven strategies to fuel your startup's growth and decision-making.
                  </p>
                  <div className="rounded-xl overflow-hidden flex-1">
                    <img
                      src="https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736"
                      alt="Atlas"
                      className="w-full h-full object-cover min-h-[160px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {openDropdown === "insights" && (
          <motion.div
            key="insights-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-2xl z-50"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-3 divide-x divide-slate-100">
                {/* Col 1 */}
                <div className="py-8 pr-10">
                  {insCol1.map((item) => (
                    <Link key={item.title} href={item.path}>
                      <div className="py-3 group cursor-pointer" onClick={close}>
                        <p className="font-bold text-base text-[#111] font-manrope group-hover:text-[#142E36] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-400 mt-0.5">{item.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Col 2 */}
                <div className="py-8 px-10">
                  {insCol2.map((item) => (
                    <Link key={item.title} href={item.path}>
                      <div className="py-3 group cursor-pointer" onClick={close}>
                        <p className="font-bold text-base text-[#111] font-manrope group-hover:text-[#142E36] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-400 mt-0.5">{item.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Preview */}
                <div className="py-8 pl-10 flex flex-col gap-5">
                  <p className="text-lg font-bold font-manrope text-foreground leading-snug">
                    Strategic structuring, compliance and corporate solutions in DIFC and the UAE.
                  </p>
                  <p className="text-sm text-slate-500 -mt-2">
                    Use data-driven strategies to fuel your startup's growth and decision-making.
                  </p>
                  <div className="rounded-xl overflow-hidden flex-1">
                    <img
                      src="https://framerusercontent.com/images/boAvRohjbYrJ6IpCgHMw0B5fSU.jpg?width=6144&height=3456"
                      alt="Insights"
                      className="w-full h-full object-cover min-h-[160px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile nav ───────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-1 max-h-[80vh] overflow-y-auto">
              <Link href="/"><div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Home</div></Link>
              <div className="py-3 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Services</p>
                {servicesMenu.map((item) => (
                  <Link key={item.slug + item.title} href={`/service/${item.slug}`}>
                    <div className="py-2 pl-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
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
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog"><div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Blog</div></Link>
              <Link href="/contact"><div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</div></Link>
              <Link href="/contact">
                <Button className="w-full rounded-full bg-[#142E36] text-white mt-4" onClick={() => setIsMobileMenuOpen(false)}>Book a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
