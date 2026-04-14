import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileText, Landmark, ShieldCheck, Lightbulb } from "lucide-react";

const insights = [
  {
    slug: "difc-101",
    title: "DIFC 101: The Complete Guide for 2026",
    description:
      "Everything you need to know about the Dubai International Financial Centre: its legal framework, entity types, costs, and why it remains the jurisdiction of choice for international businesses.",
    icon: Landmark,
    badge: "GUIDE",
    badgeClass: "bg-sky-100 text-sky-700",
    readTime: "6 min read",
  },
  {
    slug: "prescribed-company",
    title: "DIFC Prescribed Company (SPV) Handbook 2026",
    description:
      "Everything fund managers, family offices, and investors need to know about structuring a cost-effective special purpose vehicle in the DIFC, including eligibility, costs, and ongoing compliance.",
    icon: BookOpen,
    badge: "HANDBOOK",
    badgeClass: "bg-amber-100 text-amber-700",
    readTime: "7 min read",
  },
  {
    slug: "economic-substance",
    title: "Economic Substance Regulations: Complete Compliance Guide 2026",
    description:
      "Who must comply, what the substance test requires, filing deadlines, and penalties for non-compliance. A practical guide for all DIFC-registered entities in 2026.",
    icon: ShieldCheck,
    badge: "REGULATORY UPDATE",
    badgeClass: "bg-orange-100 text-orange-700",
    readTime: "8 min read",
  },
  {
    slug: "innovation-licence",
    title: "DIFC Innovation Licence Guide 2026",
    description:
      "A complete guide to the DIFC Innovation Licence for technology and fintech businesses: eligibility, costs, the Innovation Testing Licence, and the DFSA regulatory pathway.",
    icon: Lightbulb,
    badge: "GUIDE",
    badgeClass: "bg-sky-100 text-sky-700",
    readTime: "7 min read",
  },
  {
    slug: "corporate-tax",
    title: "UAE Corporate Tax: What DIFC Businesses Must Know in 2026",
    description:
      "The qualifying free zone person regime, qualifying income, registration obligations, transfer pricing rules, and key 2026 filing deadlines for DIFC entities.",
    icon: FileText,
    badge: "TAX UPDATE",
    badgeClass: "bg-violet-100 text-violet-700",
    readTime: "9 min read",
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground mb-5">
                Insights Hub
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Expert guides, handbooks, and regulatory updates to help you make informed decisions for your business in the DIFC and the UAE.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((item, idx) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href={`/insights/${item.slug}`}>
                    <div className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <item.icon className="w-7 h-7 text-slate-600" />
                        <span
                          className={`text-xs font-bold tracking-wider px-3 py-1 rounded-full ${item.badgeClass}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-foreground mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{item.readTime}</span>
                        <span className="inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-sky-600 transition-colors">
                          Read Guide
                          <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
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
