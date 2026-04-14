import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "DIFC 2026: New Fund Regulations and What They Mean for Asset Managers",
    category: "Regulatory",
    image: "https://framerusercontent.com/images/P76llRCKVB3dVH4mQZOPnkQk.jpg?width=1600&height=896",
    date: "March 10, 2026",
    excerpt: "The DFSA's updated investment fund rulebook introduces streamlined authorisation pathways and enhanced disclosure requirements. We break down every change asset managers need to act on before Q3."
  },
  {
    title: "Setting Up a Family Office in DIFC: The 2026 Complete Guide",
    category: "Wealth",
    image: "https://framerusercontent.com/images/KoUWP2aYlCOne6cr66MZd9uRmw.jpg?width=8192&height=4096",
    date: "February 14, 2026",
    excerpt: "From single-family to multi-family structures, DIFC continues to be the jurisdiction of choice for ultra-high-net-worth families in the GCC and beyond. Here's everything you need to know for 2026."
  },
  {
    title: "UAE Corporate Tax: Year-End Compliance Checklist for DIFC Companies",
    category: "Tax",
    image: "https://framerusercontent.com/images/YU2rhSsokkhKubOesoL3UxW8nE.jpg?width=6240&height=4160",
    date: "January 22, 2026",
    excerpt: "With the UAE's corporate tax regime now fully embedded, DIFC-registered entities face unique considerations around qualifying income, transfer pricing, and substance requirements heading into year-end."
  },
  {
    title: "ADGM vs DIFC: Choosing the Right Financial Free Zone in 2026",
    category: "Strategy",
    image: "https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736",
    date: "January 8, 2026",
    excerpt: "Both DIFC and ADGM offer world-class regulatory frameworks, but the right choice depends on your industry, growth strategy, and operational needs. We compare the two jurisdictions side by side."
  },
  {
    title: "Prescribed Companies (SPV) in DIFC: Structuring for Maximum Efficiency",
    category: "Structuring",
    image: "https://framerusercontent.com/images/g1PXHBRybcPGNQtd2UGsXW7OA.jpg?width=6720&height=4480",
    date: "January 3, 2026",
    excerpt: "DIFC Prescribed Companies remain one of the most flexible SPV structures available globally. Discover how to use them for holding, securitisation, and cross-border asset management in 2026."
  },
  {
    title: "DIFC Foundations: Protecting Wealth Across Generations",
    category: "Legal",
    image: "https://framerusercontent.com/images/qnS5ctlwALXI1iLRdk9RB29wQYo.jpg?width=6255&height=4170",
    date: "December 18, 2025",
    excerpt: "The DIFC Foundation regime provides robust succession planning tools rivalling offshore alternatives. We explore how leading families are leveraging foundations for governance and legacy protection."
  }
];

export default function Blog() {
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
                Blog
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Insights, news, and thoughts from the Atlas Corporate Services team.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer flex flex-col h-full"
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
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-slate-400 mb-3">{post.date}</div>
                    <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-grow">{post.excerpt}</p>
                  </div>
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
