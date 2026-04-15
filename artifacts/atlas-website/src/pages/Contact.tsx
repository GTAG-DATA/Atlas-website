import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
