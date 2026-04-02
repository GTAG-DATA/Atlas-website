import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServiceCard } from "@/components/ServiceCard";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const services = [
  {
    title: "Fund Setup",
    slug: "fund-setup",
    description: "End-to-end investment fund formation and setup services in DIFC and ADGM, including fund structuring, regulatory licensing, PPM drafting, and ongoing compliance support.",
    image: "https://framerusercontent.com/images/P76llRCKVB3dVH4mQZOPnkQk.jpg?width=1600&height=896"
  },
  {
    title: "Family Office Setup",
    slug: "family-office-setup",
    description: "Comprehensive family office formation services delivering bespoke structures, regulatory compliance, and integrated wealth management solutions.",
    image: "https://framerusercontent.com/images/KoUWP2aYlCOne6cr66MZd9uRmw.jpg?width=8192&height=4096"
  },
  {
    title: "Fund & SPV Support",
    slug: "fund-spv-support",
    description: "Specialised fund administration and SPV support services for investment funds, family offices, and investment vehicles.",
    image: "https://framerusercontent.com/images/boAvRohjbYrJ6IpCgHMw0B5fSU.jpg?width=6144&height=3456"
  },
  {
    title: "Residency & Banking Concierge",
    slug: "residency-banking-concierge",
    description: "End-to-end UAE visa processing and corporate banking support for business owners and key personnel.",
    image: "https://framerusercontent.com/images/fjX2nbcynvKYaaXBD9ffxXMNKvk.jpg?width=3840&height=5760"
  },
  {
    title: "DIFC Company Setup",
    slug: "difc-company-setup",
    description: "Set up your company in DIFC, Dubai's leading financial hub. Structured for compliance, credibility, and global operations.",
    image: "https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736"
  },
  {
    title: "DIFC Foundations",
    slug: "difc-foundations",
    description: "Establish a DIFC Foundation for asset protection and succession planning. Built for long-term control, governance, and legacy planning.",
    image: "https://framerusercontent.com/images/qnS5ctlwALXI1iLRdk9RB29wQYo.jpg?width=6255&height=4170"
  },
  {
    title: "DIFC Prescribed Company (SPV)",
    slug: "difc-prescribed-company-spv",
    description: "Establish special purpose vehicles and holding structures in the DIFC for investment holding, wealth management, and asset protection.",
    image: "https://framerusercontent.com/images/g1PXHBRybcPGNQtd2UGsXW7OA.jpg?width=6720&height=4480"
  },
  {
    title: "Company Secretarial & Governance",
    slug: "company-secretarial-governance",
    description: "Professional company secretarial services ensuring compliance with DIFC regulations and best practice corporate governance.",
    image: "https://framerusercontent.com/images/kSZ1NXQtv1F9CSV4xIEvyPqLqk.jpg?width=4797&height=3198"
  },
  {
    title: "Compliance & Economic Substance",
    slug: "compliance-economic-substance",
    description: "UAE compliance and economic substance services for regulated businesses. Ensure adherence to ESR, corporate tax, and regulatory requirements.",
    image: "https://framerusercontent.com/images/YU2rhSsokkhKubOesoL3UxW8nE.jpg?width=6240&height=4160"
  }
];

const blogPosts = [
  {
    title: "The Art of Effective Communication in the Workplace",
    category: "Marketing",
    image: "https://framerusercontent.com/images/bGqZ5eZrsmU4vOel3VkEPRbYk.jpg?width=6240&height=4160"
  },
  {
    title: "Digital Transformation: Navigating the New Normal",
    category: "Marketing",
    image: "https://framerusercontent.com/images/Aq2YBz7Yh4ZJawKPMWJfq5TMFuU.jpg?width=4058&height=6087"
  },
  {
    title: "Unlocking the Secrets of Successful Remote Teams",
    category: "Innovation",
    image: "https://framerusercontent.com/images/hpmFZ0xb2ce2EAwy1zmjA2Lfsg.jpg?width=6048&height=8064"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-foreground mb-4">
                Powering Your Business Future
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
                Your DIFC Expertise Partner
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Atlas Corporate Services specialises in establishing and managing corporate entities in the Dubai International Financial Centre (DIFC), offering comprehensive solutions tailored to global businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[600px] lg:h-[700px] w-full"
            >
              <img 
                src="https://framerusercontent.com/images/JRNXZ0ssmFSymmrwIh3eBrGXd4.jpg?width=5000&height=2813" 
                alt="Business Future" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <StatsSection />

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-foreground">
                  Our Services
                </h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                  image={service.image}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl text-white"
              style={{
                backgroundColor: '#3b5fd4',
                backgroundImage: `radial-gradient(circle at 68% 50%, #5070e8 0%, #3555cc 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,18 58,50 30,66 2,50 2,18' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1.5'/%3E%3Cpolygon points='30,70 58,86 58,118 30,134 2,118 2,86' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1.5'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover, 60px 104px',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-0">
                {/* Left: text */}
                <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-manrope leading-tight mb-5">
                    Structure Your Business Right. Scale Without Risk.
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Set up, manage, and optimise your company in the UAE with expert guidance. From DIFC and ADGM structuring to compliance and corporate governance, we handle the complexity so you can focus on growth.
                  </p>
                  <div>
                    <Link href="/contact">
                      <Button className="rounded-full bg-white hover:bg-slate-100 text-[#3b5fd4] px-7 py-5 text-sm font-semibold shadow-sm">
                        Get Expert Advice
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right: image */}
                <div className="lg:col-span-2 p-8 flex items-center justify-center">
                  <div className="rounded-xl overflow-hidden w-full shadow-xl">
                    <img
                      src="https://framerusercontent.com/images/Xb3NT7pu31BcEL4phMEbofsQo.jpeg?width=2048&height=1306"
                      alt="DIFC"
                      className="w-full h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ServicesCarousel />

        <section className="bg-gradient-to-r from-sky-500 to-sky-400 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-manrope text-white max-w-3xl leading-snug">
                We build compliant structures that protect clients and support long-term growth.
              </h2>
              <div className="flex-shrink-0">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-white hover:bg-slate-100 text-sky-500 px-8 py-6 text-base font-bold shadow-lg">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-foreground">
                The latest blog from us.
              </h2>
              <Link href="/blog">
                <div className="inline-flex items-center font-semibold text-primary hover:text-sky-500 transition-colors cursor-pointer group">
                  View All Insights
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-manrope text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-manrope text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  What types of companies can be set up in DIFC?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  DIFC offers various corporate structures including Companies Limited by Shares, Limited Liability Companies (LLC), Protected Cell Companies (PCC), Investment Companies, Special Purpose Companies (SPC), and Foundations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  Do I need an office in DIFC?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Yes, generally companies established in the DIFC are required to have a registered office within the centre. However, the size and type of office can vary depending on your specific license type and activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  What is a DIFC holding company?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  A DIFC holding company is an entity established specifically to hold assets, shares, or property. It benefits from DIFC's robust legal framework, English common law system, and independent courts, making it ideal for structuring regional and global investments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  What does Atlas help with in DIFC?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  We help you set up your company in DIFC, handle structuring, licensing, compliance, and ongoing support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-slate-100 py-2">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                  Do I need to be in Dubai to start?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  No, you do not need to be physically present in Dubai to initiate the incorporation process. Atlas can act as your corporate service provider and handle the initial documentation and application on your behalf.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-600 text-xs font-bold tracking-wider uppercase mb-6">
                  CONTACT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-foreground mb-6 leading-tight">
                  Schedule a free consultation!
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
                  Secure your financial future with Atlas expert Financial Planning services. Contact us now to schedule a consultation.
                </p>
                
                <div className="space-y-6 text-slate-600">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Expert Assessment</h4>
                      <p className="text-sm">We analyse your business needs and recommend the optimal DIFC structure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Seamless Setup</h4>
                      <p className="text-sm">We handle all applications, licensing, and documentation on your behalf.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
              >
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 123 4567" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Select>
                      <SelectTrigger id="budget" className="bg-slate-50 border-slate-200 py-6">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No capital required</SelectItem>
                        <SelectItem value="under_500k">Under $500,000</SelectItem>
                        <SelectItem value="50k_100k">$50,000-$100,000</SelectItem>
                        <SelectItem value="500k_1m">$500,000-$999,999</SelectItem>
                        <SelectItem value="1m_2.5m">$1,000,000-$2,499,999</SelectItem>
                        <SelectItem value="2.5m_5m">$2,500,000-$4,999,999</SelectItem>
                        <SelectItem value="5m_10m">$5,000,000-$9,999,999</SelectItem>
                        <SelectItem value="over_10m">$10,000,000 or more</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="button" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-bold mt-4">
                    Submit Request
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div
              className="relative overflow-hidden rounded-2xl text-white"
              style={{
                backgroundColor: '#3b5fd4',
                backgroundImage: `radial-gradient(circle at 68% 50%, #5070e8 0%, #3555cc 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,18 58,50 30,66 2,50 2,18' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1.5'/%3E%3Cpolygon points='30,70 58,86 58,118 30,134 2,118 2,86' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1.5'/%3E%3C/svg%3E")`,
                backgroundSize: 'cover, 60px 104px',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
                <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-manrope leading-tight mb-5">
                    Structure Your Business Right. Scale Without Risk.
                  </h2>
                  <div className="mt-4">
                    <Link href="/contact">
                      <Button className="rounded-full bg-white hover:bg-slate-100 text-[#3b5fd4] px-7 py-5 text-sm font-semibold shadow-sm">
                        Get Expert Advice
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8 flex items-center justify-center">
                  <div className="rounded-xl overflow-hidden w-full shadow-xl">
                    <img
                      src="https://framerusercontent.com/images/Xb3NT7pu31BcEL4phMEbofsQo.jpeg?width=2048&height=1306"
                      alt="DIFC"
                      className="w-full h-56 md:h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
