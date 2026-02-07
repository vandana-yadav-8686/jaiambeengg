export function Machinery() {
  const machines = [
    "CNC Lathe Machine",
    "BMC (VMC) Machine",
    "Conventional Lathe Machine",
    "Drill Machine",
    "DRO Milling Machine",
  ];

  const instruments = [
    "Micrometer",
    "Dial Vernier",
    "Vernier Caliper",
    "Slip Gauge",
    "Bore Gauge"
  ];

  return (
    <section id="machinery" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Infrastructure</h4>
            <h2 className="text-4xl font-heading font-bold mb-8">
              Advanced Machinery &<br/> Equipment
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We are equipped with state-of-the-art machinery to ensure precision and efficiency in every job. Our infrastructure allows us to handle complex geometries and tight tolerances.
            </p>
            
            <div className="bg-white/10 p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent block"></span>
                Machine Shop
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {machines.map((machine) => (
                  <li key={machine} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {machine}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-lg text-primary shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent rounded-t-lg" />
              <h3 className="text-2xl font-heading font-bold mb-6">Quality Control</h3>
              <p className="text-muted-foreground mb-6">
                To maintain high accuracy and strict quality control, we employ a range of precision measuring instruments calibrated to international standards.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {instruments.map((item, index) => (
                  <div key={item} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0 hover:bg-gray-50 p-2 transition-colors rounded">
                    <span className="font-semibold">{item}</span>
                    <span className="text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded">PRECISION</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
