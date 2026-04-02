import { Link } from "wouter";
import logoImg from "@assets/logo.png";

const serviceLinks = [
  { name: "DIFC Company Setup", slug: "difc-company-setup" },
  { name: "Family Office Setup", slug: "family-office-setup" },
  { name: "DIFC Prescribed Company (SPV)", slug: "difc-prescribed-company-spv" },
  { name: "DIFC Foundations", slug: "difc-foundations" },
  { name: "Company Secretarial", slug: "company-secretarial-governance" },
  { name: "Compliance & Economic Substance", slug: "compliance-economic-substance" },
  { name: "Fund Setup", slug: "fund-setup" },
];

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/">
              <img src={logoImg} alt="Atlas Corporate Services" className="h-10 mb-6 cursor-pointer" />
            </Link>
            <p className="text-slate-500 mb-6 max-w-sm text-sm leading-relaxed">
              Your trusted partner for DIFC company setup and corporate services. Specialising in comprehensive solutions for international businesses in Dubai.
            </p>
            <div className="text-sm text-slate-500 space-y-1.5">
              <p>Atlas Corporate Services Ltd</p>
              <p>GV-00-10-03-BC09, Level 3,</p>
              <p>Gate Village Building 10, DIFC,</p>
              <p>Dubai, United Arab Emirates</p>
              <p className="mt-4 font-semibold text-[#142E36]">+971 4 400 0000</p>
              <p className="font-semibold text-[#142E36]">info@atlascorporate.ae</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 font-manrope text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3.5 text-sm text-slate-500">
              {serviceLinks.map((link) => (
                <li key={link.slug}>
                  <Link href={`/service/${link.slug}`}>
                    <span className="hover:text-[#142E36] transition-colors cursor-pointer">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 font-manrope text-sm uppercase tracking-widest">Insights</h4>
            <ul className="space-y-3.5 text-sm text-slate-500">
              <li><Link href="/insights"><span className="hover:text-[#142E36] transition-colors cursor-pointer">DIFC 101</span></Link></li>
              <li><Link href="/insights"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Prescribed Company Handbook</span></Link></li>
              <li><Link href="/insights"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Economic Substance Guide</span></Link></li>
              <li><Link href="/insights"><span className="hover:text-[#142E36] transition-colors cursor-pointer">UAE Corporate Tax</span></Link></li>
              <li><Link href="/insights"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Case Notes</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 font-manrope text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3.5 text-sm text-slate-500">
              <li><Link href="/about"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Why Atlas</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Contact Us</span></Link></li>
              <li><Link href="/terms"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Terms of Service</span></Link></li>
              <li><Link href="/privacy"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Privacy Policy</span></Link></li>
              <li><Link href="/disclaimer"><span className="hover:text-[#142E36] transition-colors cursor-pointer">Disclaimer</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>© 2025 Atlas Corporate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
