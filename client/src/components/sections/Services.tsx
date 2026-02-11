import { Card, CardContent } from "@/components/ui/card";
import { Settings, Cog, PenTool, Factory, Hammer, Ruler } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Pharmaceutical Spares",
      icon: <Settings className="h-10 w-10 text-accent" />,
      description: "Specialized manufacturing of high-precision spare parts for pharmaceutical machinery with impeccable finish.",
      image: "/images/pharma-parts.png"
    },
    {
      title: "Automobile Parts",
      icon: <Cog className="h-10 w-10 text-accent" />,
      description: "Production of durable and accurate automobile engine components and gears for OEMs and replacement.",
      image: "/images/auto-parts.png"
    },
    {
      title: "Repair & Replacement",
      icon: <Hammer className="h-10 w-10 text-accent" />,
      description: "Restoration of worn-out engineering components and custom fabrication of replacement parts.",
      image: "/images/cnc-machine.webp"
    },
    {
      title: "Precision Job Work",
      icon: <Ruler className="h-10 w-10 text-accent" />,
      description: "Custom precision machining services tailored to your specific engineering requirements and tolerances.",
      image: "/images/precisions.jfif"
    },
    {
      title: "CNC & Conventional Machining",
      icon: <Factory className="h-10 w-10 text-accent" />,
      description: "Utilizing both modern CNC technology and conventional methods for versatile manufacturing solutions.",
      image: "/images/cnc-machine.webp"
    },
    {
      title: "Operations",
      icon: <PenTool className="h-10 w-10 text-accent" />,
      description: "Expert Turning, Milling, Drilling, and Surface Grinding operations executed with high accuracy.",
      image: "/images/drilling.jfif"
    },

  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Our Capabilities</h4>
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom component development to bulk manufacturing, we provide end-to-end engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {service.image && (
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <CardContent className={`${service.image ? 'pt-6' : 'pt-8'} pb-8 px-6`}>
                <div className="mb-4 bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
