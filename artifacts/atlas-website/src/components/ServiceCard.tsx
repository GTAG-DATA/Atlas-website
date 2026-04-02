import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-manrope text-foreground mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        <Link href="/services">
          <div className="inline-flex items-center text-sm font-semibold text-primary hover:text-sky-500 transition-colors mt-auto cursor-pointer group/link">
            More Details 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
