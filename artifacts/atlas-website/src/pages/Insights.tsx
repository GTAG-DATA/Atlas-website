import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileText, Landmark, ShieldCheck } from "lucide-react";

const resources = [
  {
    title: "DIFC 101",
    description: "The complete beginner's guide to the Dubai International Financial Centre, its legal framework, and benefits.",
    icon: Landmark
  },
  {
    title: "Prescribed Company Handbook",
    description: "Everything you need to know about setting up and managing a Prescribed Company (SPV) in the DIFC.",
    icon: BookOpen
  },
  {
    title: "Economic Substance Guide",
    description: "Navigate the UAE's Economic Substance Regulations and ensure your corporate entity remains compliant.",
    icon: ShieldCheck
  },
  {
    title: "UAE Corporate Tax Overview",
    description: "A comprehensive look at the new UAE Corporate Tax regime and how it affects free zone entities.",
    icon: FileText
  }
];

export default function Insights() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
                Insights Hub
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Expert guides, handbooks, and regulatory updates to help you make informed decisions for your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:border-sky-100 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <resource.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">{resource.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{resource.description}</p>
                  <Link href="#">
                    <div className="inline-flex items-center font-semibold text-primary hover:text-sky-500 transition-colors cursor-pointer group/link">
                      Read Guide
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
