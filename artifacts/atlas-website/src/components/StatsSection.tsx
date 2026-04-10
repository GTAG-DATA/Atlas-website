import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Award, Globe } from "lucide-react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const pct = Math.min((ts - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      setCount(Math.floor(from + (to - from) * ease));
      if (pct < 1) raf = requestAnimationFrame(animate);
      else setCount(to);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const features = [
  {
    icon: Target,
    title: "DIFC Specialisation",
    desc: "Unparalleled expertise in Dubai International Financial Centre regulations, licensing, and compliance requirements.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "Dedicated relationship managers providing personalized support throughout your corporate journey.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    desc: "Award-winning services recognised by international business organisations and regulatory authorities.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Understanding of international business structures and cross-border compliance requirements.",
  },
];

const statCards = [
  {
    value: 500,
    suffix: "+",
    label: "Satisfied Clients",
    image: "https://framerusercontent.com/images/q7MA7L9DlMIVHQ3cqAbABE19n4.jpg?width=5467&height=3067",
  },
  {
    value: 100,
    suffix: "+",
    label: "Collective experience",
    image: "/stats-team.webp",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
        >
          {/* Left */}
          <div className="md:max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">Atlas Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 leading-tight">
              Trusted by Global Businesses
            </h2>
          </div>

          {/* Right */}
          <p className="md:max-w-xs text-slate-500 leading-relaxed text-sm md:pt-16">
            Leading corporate service provider specialising in DIFC company formation and compliance
          </p>
        </motion.div>

        {/* Stat image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden h-56 md:h-72"
            >
              {/* Background photo */}
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              {/* Stat text — bottom-left */}
              <div className="absolute bottom-0 left-0 p-7">
                <div className="text-5xl font-bold font-display text-white leading-none mb-2">
                  <Counter from={0} to={card.value} suffix={card.suffix} />
                </div>
                <div className="text-white/80 text-base font-medium">{card.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 bg-white hover:shadow-sm transition-shadow"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sky-500" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-base font-bold font-display text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
