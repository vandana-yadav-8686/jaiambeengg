import { Link } from "wouter";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Machinery", href: "#machinery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> info@jaiambeengineering.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> Ahmedabad, Gujarat, India
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tighter text-primary">
              JAI AMBE
            </span>
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">
              Engineering
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider"
            onClick={() => handleNavClick('#contact')}
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg font-medium hover:text-accent text-left uppercase tracking-wide"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider w-full mt-4"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
