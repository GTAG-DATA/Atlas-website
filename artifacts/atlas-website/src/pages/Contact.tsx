import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/atlas.corporate/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572146018529",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/atlas-difc/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/atlascorpdxb",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans pt-24">
      <SEO
        title="Contact Us | Atlas Corporate Services Dubai"
        description="Get in touch with Atlas Corporate Services. Schedule a free consultation for DIFC company setup, fund structuring, family office, and compliance services in Dubai."
        canonical="/contact"
      />
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
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Get in touch with our team of corporate service experts. We're here to help you navigate the complexities of company setup and management in the UAE.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold font-display text-foreground mb-6">Office Location</h2>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-primary mb-4 font-display">Atlas Corporate Services Ltd</h3>
                    <p className="text-slate-600 mb-2">GV-00-10-03-BC09, Level 3</p>
                    <p className="text-slate-600 mb-2">Gate Village Building 10, DIFC</p>
                    <p className="text-slate-600 mb-6">Dubai, United Arab Emirates</p>
                    
                    <div className="space-y-2">
                      <p className="flex items-center text-slate-600">
                        <span className="font-bold text-foreground mr-2">Phone:</span> +971 52 979 8302
                      </p>
                      <p className="flex items-center text-slate-600">
                        <span className="font-bold text-foreground mr-2">Email:</span> info@atlascorp.ae
                      </p>
                      <p className="flex items-center text-slate-600">
                        <span className="font-bold text-foreground mr-2">Hours:</span> Monday - Friday, 9am - 6pm
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-200">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Follow Us</p>
                      <div className="flex items-center gap-3">
                        {socials.map((s) => (
                          <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.name}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:bg-[#142E36] hover:border-[#142E36] text-slate-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                          >
                            {s.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border border-slate-100 h-64 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80"
                    alt="DIFC Dubai skyline"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 h-fit"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold font-display text-foreground mb-4">Schedule a free consultation!</h2>
                  <p className="text-slate-600">Secure your financial future with Atlas expert services. Contact us now.</p>
                </div>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 123 4567" className="bg-slate-50 border-slate-200 py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Select>
                      <SelectTrigger id="budget" className="bg-slate-50 border-slate-200 py-6">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No capital required</SelectItem>
                        <SelectItem value="under_500k">Under $500,000</SelectItem>
                        <SelectItem value="50k_100k">$50,000-$100,000</SelectItem>
                        <SelectItem value="500k_1m">$500,000-$999,999</SelectItem>
                        <SelectItem value="1m_2.5m">$1,000,000-$2,499,999</SelectItem>
                        <SelectItem value="2.5m_5m">$2,500,000-$4,999,999</SelectItem>
                        <SelectItem value="5m_10m">$5,000,000-$9,999,999</SelectItem>
                        <SelectItem value="over_10m">$10,000,000 or more</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="button" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-bold mt-4">
                    Submit Request
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
