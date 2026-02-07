import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Machinery } from "@/components/sections/Machinery";
import { Contact } from "@/components/sections/Contact";
import { Layers, Truck, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Why Choose Us Strip */}
        <div className="bg-primary-foreground py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-bold text-lg">Skilled Workforce</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-bold text-lg">Strict Quality</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-bold text-lg">On-time Delivery</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <Layers className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-bold text-lg">Cost Effective</h3>
              </div>
            </div>
          </div>
        </div>

        <About />
        <Services />
        <Machinery />
        
        {/* Industries Marquee/Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Industries</h4>
            <h2 className="text-3xl font-heading font-bold text-primary mb-10">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {['Pharmaceutical', 'Automobile', 'Industrial Machinery', 'OEM & Maintenance'].map((industry) => (
                <div key={industry} className="border-2 border-dashed border-gray-200 p-6 rounded-lg hover:border-accent hover:bg-accent/5 transition-colors cursor-default">
                  <h3 className="font-heading font-bold text-xl text-primary">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
