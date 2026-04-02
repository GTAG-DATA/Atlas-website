import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    title: "Fund Setup",
    description: "End-to-end investment fund formation and setup services in DIFC and ADGM, including fund structuring, regulatory licensing, PPM drafting, and ongoing compliance support.",
    image: "https://framerusercontent.com/images/P76llRCKVB3dVH4mQZOPnkQk.jpg?width=1600&height=896"
  },
  {
    title: "Family Office Setup",
    description: "Comprehensive family office formation services delivering bespoke structures, regulatory compliance, and integrated wealth management solutions.",
    image: "https://framerusercontent.com/images/KoUWP2aYlCOne6cr66MZd9uRmw.jpg?width=8192&height=4096"
  },
  {
    title: "Fund & SPV Support",
    description: "Specialized fund administration and SPV support services for investment funds, family offices, and investment vehicles.",
    image: "https://framerusercontent.com/images/boAvRohjbYrJ6IpCgHMw0B5fSU.jpg?width=6144&height=3456"
  },
  {
    title: "Residency & Banking Concierge",
    description: "End-to-end UAE visa processing and corporate banking support for business owners and key personnel.",
    image: "https://framerusercontent.com/images/fjX2nbcynvKYaaXBD9ffxXMNKvk.jpg?width=3840&height=5760"
  },
  {
    title: "DIFC Company Setup",
    description: "Set up your company in DIFC, Dubai's leading financial hub. Structured for compliance, credibility, and global operations.",
    image: "https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736"
  },
  {
    title: "DIFC Foundations",
    description: "Establish a DIFC Foundation for asset protection and succession planning. Built for long-term control, governance, and legacy planning.",
    image: "https://framerusercontent.com/images/qnS5ctlwALXI1iLRdk9RB29wQYo.jpg?width=6255&height=4170"
  },
  {
    title: "DIFC Prescribed Company (SPV)",
    description: "Establish special purpose vehicles and holding structures in the DIFC for investment holding, wealth management, and asset protection.",
    image: "https://framerusercontent.com/images/g1PXHBRybcPGNQtd2UGsXW7OA.jpg?width=6720&height=4480"
  },
  {
    title: "Company Secretarial & Governance",
    description: "Professional company secretarial services ensuring compliance with DIFC regulations and best practice corporate governance.",
    image: "https://framerusercontent.com/images/kSZ1NXQtv1F9CSV4xIEvyPqLqk.jpg?width=4797&height=3198"
  },
  {
    title: "Compliance & Economic Substance",
    description: "UAE compliance and economic substance services for regulated businesses. Ensure adherence to ESR, corporate tax, and regulatory requirements.",
    image: "https://framerusercontent.com/images/YU2rhSsokkhKubOesoL3UxW8nE.jpg?width=6240&height=4160"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans pt-24">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Comprehensive corporate solutions tailored for the Dubai International Financial Centre and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard 
                  key={idx} 
                  title={service.title} 
                  description={service.description} 
                  image={service.image} 
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
