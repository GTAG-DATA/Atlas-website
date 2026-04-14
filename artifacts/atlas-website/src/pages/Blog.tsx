import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Clock } from "lucide-react";

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
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer flex flex-col h-full">
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
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm font-semibold text-[#142E36] gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </div>
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
