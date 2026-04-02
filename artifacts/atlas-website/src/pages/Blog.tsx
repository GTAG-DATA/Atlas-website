import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Art of Effective Communication in the Workplace",
    category: "Marketing",
    image: "https://framerusercontent.com/images/bGqZ5eZrsmU4vOel3VkEPRbYk.jpg?width=6240&height=4160",
    date: "May 12, 2025"
  },
  {
    title: "Digital Transformation: Navigating the New Normal",
    category: "Marketing",
    image: "https://framerusercontent.com/images/Aq2YBz7Yh4ZJawKPMWJfq5TMFuU.jpg?width=4058&height=6087",
    date: "April 28, 2025"
  },
  {
    title: "Unlocking the Secrets of Successful Remote Teams",
    category: "Innovation",
    image: "https://framerusercontent.com/images/hpmFZ0xb2ce2EAwy1zmjA2Lfsg.jpg?width=6048&height=8064",
    date: "April 15, 2025"
  },
  {
    title: "Understanding DIFC Foundation Regulations",
    category: "Legal",
    image: "https://framerusercontent.com/images/qnS5ctlwALXI1iLRdk9RB29wQYo.jpg?width=6255&height=4170",
    date: "March 30, 2025"
  },
  {
    title: "The Rise of Family Offices in Dubai",
    category: "Wealth",
    image: "https://framerusercontent.com/images/KoUWP2aYlCOne6cr66MZd9uRmw.jpg?width=8192&height=4096",
    date: "March 12, 2025"
  },
  {
    title: "Corporate Tax Updates in the UAE",
    category: "Tax",
    image: "https://framerusercontent.com/images/u3FB1Nit9jwgJQvfFTg6nQ19ew.jpg?width=5472&height=3648",
    date: "February 25, 2025"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-foreground mb-6">
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
                    <div className="text-sm text-slate-500 mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold font-manrope text-foreground group-hover:text-primary transition-colors leading-tight mb-4 flex-grow">
                      {post.title}
                    </h3>
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
