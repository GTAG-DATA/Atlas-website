import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import SEO from "@/components/SEO";

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans pt-24">
      <SEO
        title="Our Services | DIFC Corporate Services Dubai | Atlas"
        description="Explore Atlas Corporate Services — DIFC company setup, fund structuring, family office, prescribed companies, compliance, accounting, and residency services in Dubai."
        canonical="/services"
      />
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
              <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-4">
                What We Do
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Comprehensive corporate solutions tailored for the Dubai International Financial Centre and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  slug={service.slug}
                  description={service.description}
                  image={service.heroImage}
                  delay={idx * 0.08}
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
