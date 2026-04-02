import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Insights", path: "/insights", hasDropdown: true },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location === "/";
  const navClass = isScrolled || !isHome
    ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
    : "bg-transparent py-6";
    
  const textClass = isScrolled || !isHome ? "text-foreground" : "text-white";
  const logoInvertClass = !isScrolled && isHome ? "brightness-0 invert" : "";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src={logoImg} alt="Atlas Corporate Services" className={`h-8 md:h-10 object-contain transition-all ${logoInvertClass}`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link href={link.path}>
                  <div className={`flex items-center gap-1 text-sm font-medium hover:text-sky-500 transition-colors cursor-pointer ${textClass}`}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </div>
                </Link>
                
                {/* Basic Dropdown Simulation */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-48">
                    <div className="bg-white rounded-xl shadow-lg border p-2 flex flex-col gap-1">
                      {link.name === "Services" ? (
                        <>
                          <Link href="/services"><div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md cursor-pointer">DIFC Company Setup</div></Link>
                          <Link href="/services"><div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md cursor-pointer">Family Office Setup</div></Link>
                          <Link href="/services"><div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md cursor-pointer">DIFC Foundations</div></Link>
                        </>
                      ) : (
                        <>
                          <Link href="/insights"><div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md cursor-pointer">DIFC 101</div></Link>
                          <Link href="/insights"><div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-md cursor-pointer">UAE Corporate Tax</div></Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
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
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <div 
                    className="text-lg font-medium text-foreground py-2 border-b border-slate-100 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full rounded-full bg-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>
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
