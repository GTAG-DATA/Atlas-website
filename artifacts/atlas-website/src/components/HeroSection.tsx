import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@assets/ChatGPT_Image_Jan_6,_2026,_04_59_10_PM_1775111154305.png";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-end pb-20 overflow-hidden bg-slate-900">
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10" />
        <img
          src={heroImg}
          alt="DIFC Gate Dubai"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <motion.div style={{ opacity }} className="max-w-xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sky-400 text-sm font-medium mb-3"
          >
            Together, We Create Impact
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[28px] md:text-[38px] font-bold font-manrope text-white leading-snug mb-4"
          >
            Your Trusted Partner for DIFC Company Setup &amp; Corporate Services
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm text-white/65 max-w-sm mb-7 leading-relaxed"
          >
            Expert corporate services for DIFC, ADGM and UAE — from company setup and fund structuring to compliance and ongoing governance.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link href="/contact">
              <button className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/35 backdrop-blur-sm px-5 py-2 text-sm font-normal transition-colors">
                Contact us
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
