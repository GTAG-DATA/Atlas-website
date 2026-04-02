import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "wouter";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-end pb-24 overflow-hidden bg-slate-900">
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
        <img 
          src="https://framerusercontent.com/images/JRNXZ0ssmFSymmrwIh3eBrGXd4.jpg?width=5000&height=2813" 
          alt="DIFC Dubai Architecture" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <motion.div 
          style={{ opacity }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-6">
              Together, We Create Impact
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-manrope text-white leading-tight mb-6"
          >
            Your Trusted Partner for <br className="hidden md:block"/> DIFC Company Setup & <br className="hidden md:block"/> Corporate Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            Your support powers life changing missions feeding families & rebuilding hope.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-6 text-base font-medium">
                Contact us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
