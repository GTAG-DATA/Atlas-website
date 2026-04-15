import { useParams, Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { getServiceBySlug, servicesData } from "@/data/services";
import SEO from "@/components/SEO";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.09 } },
};

function ServicesSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="w-full">
      {/* Services list card */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-4">
        <h3 className="text-lg font-bold font-display text-foreground mb-4">
          Our Services
        </h3>
        <hr className="border-slate-200 mb-4" />
        <nav className="flex flex-col gap-2">
          {servicesData.map((s) => {
            const isActive = s.slug === currentSlug;
            return (
              <Link key={s.slug} href={`/service/${s.slug}`}>
                <div
                  className={`
                    w-full text-center text-sm font-medium rounded-full px-4 py-2.5 cursor-pointer transition-all duration-200
                    ${isActive
                      ? "bg-[#1a1a1a] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#142E36] hover:text-[#142E36]"
                    }
                  `}
                >
                  {s.title}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Plan Your Business CTA card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold font-display mb-2 leading-snug">
          Plan Your Business
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5">
          Set up and scale in the UAE without compliance risks
        </p>
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Mail className="h-4 w-4 flex-shrink-0" />
          <span>info@atlascorp.ae</span>
        </div>
        <Link href="/contact">
          <button className="w-full rounded-full text-white font-semibold text-sm py-3 transition-colors" style={{ backgroundColor: 'oklch(68.5% 0.169 237.323)' }}>
            Contact Us
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug ?? "");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-500 mb-8">The service you are looking for does not exist.</p>
          <Link href="/services">
            <Button className="rounded-full bg-primary text-white">View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Atlas Corporate Services",
      "url": "https://www.atlascorp.ae"
    },
    "areaServed": { "@type": "Place", "name": "Dubai International Financial Centre, UAE" },
    "url": `https://www.atlascorp.ae/service/${service.slug}`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.atlascorp.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.atlascorp.ae/services" },
        { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.atlascorp.ae/service/${service.slug}` }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title={`${service.title} | Atlas Corporate Services Dubai`}
        description={service.description}
        canonical={`/service/${service.slug}`}
        schema={serviceSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e24]/90 via-[#0c1e24]/50 to-black/20" />
        <div className="relative z-10 w-full pb-12 pt-28">
          <div className="container mx-auto px-4 md:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white/55 text-sm mb-4"
            >
              <Link href="/"><span className="hover:text-white cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/services"><span className="hover:text-white cursor-pointer transition-colors">Services</span></Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">{service.title}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-5xl font-bold text-white font-display leading-tight max-w-2xl"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-white/70 text-sm md:text-base mt-3 max-w-xl leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main content: sidebar + content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-8 py-14">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* LEFT: Sticky Sidebar */}
            <div className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24">
              <ServicesSidebar currentSlug={service.slug} />
            </div>

            {/* RIGHT: Content */}
            <div className="flex-1 min-w-0">

              {/* Overview */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-16"
              >
                <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Overview</p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-5 leading-snug">
                  {service.description}
                </h2>
                <p className="text-slate-500 leading-relaxed text-base">{service.overview}</p>
              </motion.section>

              {/* Key Features */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-16"
              >
                <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Why Choose Atlas</p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">
                  Key Features & Benefits
                </h2>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#142E36]/8 flex items-center justify-center mb-4 group-hover:bg-sky-50 transition-colors">
                        <span className="text-[#142E36] font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="font-bold text-foreground font-display text-base mb-2">{feature.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Process Steps */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-16"
              >
                <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-8">
                  How We Work
                </h2>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-100 hidden sm:block" />
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {service.steps.map((step, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex gap-5 items-start">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-[#142E36] flex items-center justify-center z-10">
                          <span className="text-white font-bold text-xs font-display">{step.number}</span>
                        </div>
                        <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 pt-2">
                          <h3 className="font-bold text-foreground font-display text-lg mb-1.5">{step.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>

              {/* What's Included */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-16 bg-[#142E36] rounded-2xl p-8 md:p-10"
              >
                <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Full Service</p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-3 leading-snug">
                  What's Included
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Everything handled, from initial advisory through to ongoing compliance and support.
                </p>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {service.whatsIncluded.map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* CTA */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-4 bg-slate-50 rounded-2xl p-8 md:p-10 text-center"
              >
                <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Get Expert Advice</p>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4 leading-snug">
                  {service.ctaText}
                </h2>
                <p className="text-slate-500 text-sm mb-7 leading-relaxed max-w-xl mx-auto">
                  Our DIFC specialists are available for a free initial consultation to understand your requirements and recommend the best solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <Button className="rounded-full bg-[#142E36] text-white hover:bg-[#142E36]/90 px-7 font-semibold">
                      Book a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="rounded-full px-7 font-semibold border-slate-300">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sky-500 text-xs font-bold uppercase tracking-widest mb-3">Explore More</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
              Related Services
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {otherServices.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link href={`/service/${s.slug}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.heroImage}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e24]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold font-display text-base leading-snug">{s.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{s.description}</p>
                      <div className="mt-4 flex items-center text-[#142E36] font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                        More Details <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
