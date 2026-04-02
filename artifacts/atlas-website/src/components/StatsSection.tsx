import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(from + (to - from) * easeOut);
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Stats */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase mb-6">
                ATLAS IMPACT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-foreground mb-6 leading-tight">
                Trusted by Global Businesses
              </h2>
              <p className="text-lg text-slate-600">
                Leading corporate service provider specializing in DIFC company formation and compliance.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src="https://framerusercontent.com/images/q7MA7L9DlMIVHQ3cqAbABE19n4.jpg?width=5467&height=3067" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold font-manrope text-primary mb-2">
                    <Counter from={0} to={500} suffix="+" />
                  </div>
                  <div className="text-sm font-medium text-slate-600">Satisfied Clients</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-4xl font-bold font-manrope text-primary mb-2">
                    <Counter from={0} to={180} suffix="+" />
                  </div>
                  <div className="text-sm font-medium text-slate-600">Companies Established</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 sm:col-span-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src="https://framerusercontent.com/images/iMNSvKxIZUItkgn8ZuVlSUiDc.jpg?width=7452&height=4947" className="w-full h-full object-cover object-center" alt="" />
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold font-manrope text-primary mb-2">
                    <Counter from={0} to={100} suffix="+" />
                  </div>
                  <div className="text-sm font-medium text-slate-600">Collective experience (Years)</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {[
              {
                title: "DIFC Specialization",
                desc: "Unparalleled expertise in Dubai International Financial Centre regulations, licensing, and compliance requirements."
              },
              {
                title: "Client-First Approach",
                desc: "Dedicated relationship managers providing personalized support throughout your corporate journey."
              },
              {
                title: "Proven Excellence",
                desc: "Award-winning services recognized by international business organizations and regulatory authorities."
              },
              {
                title: "Global Perspective",
                desc: "Understanding of international business structures and cross-border compliance requirements."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-manrope text-foreground mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
