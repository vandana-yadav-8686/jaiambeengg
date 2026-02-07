import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-tl-3xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0" />
            <img 
              src="/images/workshop.png" 
              alt="Jai Ambe Workshop" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-8 right-8 bg-primary text-white p-6 z-20 hidden md:block max-w-xs shadow-lg">
              <p className="font-heading text-4xl font-bold mb-1">10+</p>
              <p className="text-sm uppercase tracking-wider text-gray-300">Years of Engineering Excellence</p>
            </div>
          </div>

          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">About Us</h4>
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              Precision Machining & <br/>Fabrication Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jai Ambe Engineering is engaged in precision machining and fabrication of engineering components. With skilled manpower and modern machinery, we cater to both small batch and bulk job work requirements.
            </p>
            
            <p className="text-muted-foreground mb-8">
              We work as a reliable job-work partner for industries requiring consistent and precision-based components. Our commitment to quality ensures every part meets the strictest standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Accuracy & Quality",
                "Timely Delivery",
                "Customer Satisfaction",
                "Competitive Pricing",
                "Skilled Workforce",
                "Strict Quality Checks"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
