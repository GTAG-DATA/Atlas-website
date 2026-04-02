import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const showcaseServices = [
  { name: "DIFC Company Setup", img: "https://framerusercontent.com/images/LdOKl3VvhZdGdcEBixnLJ1Qpd44.png?width=6400&height=3288" },
  { name: "DIFC Foundations", img: "https://framerusercontent.com/images/ifwgytDWVAnmPlST89okkBzhylA.jpg?width=4160&height=6240" },
  { name: "Fund & SPV Support", img: "https://framerusercontent.com/images/VTQuJjv6Gh3OhlRcrR4X0EMI.jpg?width=2353&height=3111" },
  { name: "Family Office Setup", img: "https://framerusercontent.com/images/cNXY5zIQPBBtSE9KLKdZeJLtbsA.jpg?width=4096&height=4096" },
  { name: "Company Secretarial", img: "https://framerusercontent.com/images/HNui8f4T6nWQJajSilgXxaaHM.jpg?width=3584&height=5120" },
  { name: "Residency & Banking", img: "https://framerusercontent.com/images/fjX2nbcynvKYaaXBD9ffxXMNKvk.jpg?width=3840&height=5760" },
  { name: "Compliance", img: "https://framerusercontent.com/images/of4KzTJzoMUCSFcoQfVr8pfZkY.jpg?width=4105&height=6000" },
  { name: "Accounting & Tax", img: "https://framerusercontent.com/images/u3FB1Nit9jwgJQvfFTg6nQ19ew.jpg?width=5472&height=3648" },
];

export function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground text-center">
          Comprehensive Solutions
        </h2>
      </div>

      <div className="cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={containerRef}
          className="flex gap-6 px-4 md:px-12 w-max"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {showcaseServices.map((service, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[280px] md:min-w-[320px] h-[400px] md:h-[480px] relative rounded-3xl overflow-hidden group"
            >
              <img 
                src={service.img} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
                <h3 className="text-white text-2xl font-bold font-display leading-tight group-hover:text-sky-300 transition-colors">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
