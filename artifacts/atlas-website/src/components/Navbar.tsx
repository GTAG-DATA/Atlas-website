import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const servicesDropdown = [
  { name: "DIFC Company Setup", slug: "difc-company-setup" },
  { name: "Family Office Setup", slug: "family-office-setup" },
  { name: "Fund Setup", slug: "fund-setup" },
  { name: "Fund & SPV Support", slug: "fund-spv-support" },
  { name: "Residency & Banking Concierge", slug: "residency-banking-concierge" },
  { name: "DIFC Foundations", slug: "difc-foundations" },
  { name: "DIFC Prescribed Company (SPV)", slug: "difc-prescribed-company-spv" },
  { name: "Company Secretarial & Governance", slug: "company-secretarial-governance" },
  { name: "Compliance & Economic Substance", slug: "compliance-economic-substance" },
];

const insightsDropdown = [
  { name: "DIFC 101", path: "/insights" },
  { name: "Prescribed Company Handbook", path: "/insights" },
  { name: "Economic Substance Guide", path: "/insights" },
  { name: "UAE Corporate Tax", path: "/insights" },
  { name: "Case Notes", path: "/insights" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

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
    ? "bg-transparent py-6"
    : "bg-white/95 backdrop-blur-sm shadow-sm py-4";
  const textClass = isTransparent ? "text-white" : "text-[#142E36]";
  const logoInvertClass = isTransparent ? "brightness-0 invert" : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
      onMouseLeave={() => setOpenDropdown(null)}
    >
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
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/">
              <span className={`text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                Home
              </span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
            >
              <div
                className={`flex items-center gap-1 text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 pt-3 w-72"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2">
                      {servicesDropdown.map((item) => (
                        <Link key={item.slug} href={`/service/${item.slug}`}>
                          <div className="px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#142E36] rounded-xl cursor-pointer transition-colors font-medium">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-2 pt-2">
                        <Link href="/services">
                          <div className="px-4 py-2.5 text-sm text-sky-600 hover:bg-sky-50 rounded-xl cursor-pointer transition-colors font-semibold">
                            View All Services →
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Insights Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("insights")}
            >
              <div
                className={`flex items-center gap-1 text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}
              >
                Insights
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "insights" ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {openDropdown === "insights" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 pt-3 w-60"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2">
                      {insightsDropdown.map((item) => (
                        <Link key={item.name} href={item.path}>
                          <div className="px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#142E36] rounded-xl cursor-pointer transition-colors font-medium">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
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
              <Button className="rounded-full bg-[#142E36] hover:bg-[#142E36]/90 text-white font-medium px-6 text-sm">
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
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer">
                  Home
                </div>
              </Link>
              <div className="py-3 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Services</p>
                {servicesDropdown.map((item) => (
                  <Link key={item.slug} href={`/service/${item.slug}`}>
                    <div className="py-2 pl-3 text-sm text-slate-600 hover:text-primary cursor-pointer">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/insights">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer">
                  Insights
                </div>
              </Link>
              <Link href="/blog">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer">
                  Blog
                </div>
              </Link>
              <Link href="/contact">
                <div className="py-3 text-base font-medium text-foreground border-b border-slate-100 cursor-pointer">
                  Contact
                </div>
              </Link>
              <Link href="/contact">
                <Button className="w-full rounded-full bg-primary mt-4">
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
