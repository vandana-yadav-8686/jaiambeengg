import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="font-heading text-2xl font-bold tracking-tighter text-white">
                JAI AMBE
              </span>
              <span className="block text-xs tracking-[0.2em] text-accent uppercase font-medium mt-1">
                Engineering
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Trusted engineering workshop specializing in manufacturing and job work of precision spare parts for Pharmaceutical, Automobile, and General Engineering industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Machinery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', ''))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Pharmaceutical Spares</li>
              <li className="text-gray-300 text-sm">Automobile Parts</li>
              <li className="text-gray-300 text-sm">CNC Machining</li>
              <li className="text-gray-300 text-sm">Precision Job Work</li>
              <li className="text-gray-300 text-sm">Custom Fabrication</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Rishikesh Building Unit Number 1, Lalit Katta, Dombivli, 421201<br />
                    <br />Thane, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 7977664056</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>jaiambeengg2017@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Jai Ambe Engineering. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/182ReP3bAK/" className="bg-white/5 p-2 rounded hover:bg-accent hover:text-white transition-colors text-gray-300">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/jaiambe_engineering?igsh=eWNtYnY2NGFjeXNi" className="bg-white/5 p-2 rounded hover:bg-accent hover:text-white transition-colors text-gray-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/jai-ambe-engineering" className="bg-white/5 p-2 rounded hover:bg-accent hover:text-white transition-colors text-gray-300">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
