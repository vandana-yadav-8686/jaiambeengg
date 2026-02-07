import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[800px] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-cnc.png" 
          alt="CNC Milling Machine" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
            Precision Engineering & Job Work Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
            ACCURACY IN <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">EVERY COMPONENT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            We deliver high-quality machining, accurate dimensions, and reliable turnaround times for Pharmaceutical, Automobile, and Engineering industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg uppercase tracking-wide border-0 rounded-none"
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-6 text-lg uppercase tracking-wide rounded-none"
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
    </section>
  );
}
