import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { getServiceBySlug, servicesData } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

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

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e24] via-[#0c1e24]/60 to-transparent" />
        <div className="relative z-10 w-full pb-16 pt-32">
          <div className="container mx-auto px-4 md:px-8">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white/60 text-sm mb-6"
            >
              <Link href="/">
                <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/services">
                <span className="hover:text-white cursor-pointer transition-colors">Services</span>
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/90">{service.title}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3"
            >
              {service.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-manrope leading-tight max-w-3xl"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Overview + Quick CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-4">
                Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-manrope mb-6 leading-tight">
                {service.description}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">{service.overview}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-[#142E36] rounded-2xl p-8 text-white sticky top-28">
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Get Started
                </p>
                <h3 className="text-xl font-bold mb-4 font-manrope leading-snug">
                  Ready to set up your {service.title}?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Speak to one of our DIFC experts for a free initial consultation. No obligation.
                </p>
                <Link href="/contact">
                  <Button className="w-full rounded-full bg-white text-[#142E36] hover:bg-white/90 font-semibold">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <p>+971 4 400 0000</p>
                  <p>info@atlascorporate.ae</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-3">
              Why Choose Atlas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-manrope">
              Key Features & Benefits
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors">
                  <span className="text-sky-600 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-foreground font-manrope text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-manrope">
              How We Work
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {service.steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex gap-6 md:gap-10 items-start"
                >
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#142E36] flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm font-manrope">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-3 pb-8 border-b border-slate-100 last:border-0">
                    <h3 className="font-bold text-foreground font-manrope text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#142E36]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Full Service
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-manrope mb-4 leading-tight">
                What&apos;s Included
              </h2>
              <p className="text-white/60 leading-relaxed">
                Our {service.title} service is comprehensive — we handle everything from initial advisory through to ongoing compliance and support.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {service.whatsIncluded.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Get Expert Advice
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-manrope mb-6 leading-tight">
              {service.ctaText}
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Our DIFC specialists are available for a free initial consultation to understand your requirements and recommend the best solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="rounded-full bg-[#142E36] text-white hover:bg-[#142E36]/90 px-8 py-3 text-base font-semibold">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="rounded-full px-8 py-3 text-base font-semibold border-slate-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-3">
              Explore More
            </p>
            <h2 className="text-3xl font-bold text-foreground font-manrope">
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
                  <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={s.heroImage}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e24]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold font-manrope text-lg leading-snug">
                          {s.title}
                        </h3>
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
