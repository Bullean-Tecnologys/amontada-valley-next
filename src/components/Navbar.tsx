import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#cursos", label: "Cursos" },
    { href: "/projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
    { href: "/sobre-nos", label: "Sobre Nós" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <a href="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="Amontada Valley" 
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-10'} w-auto group-hover:scale-105`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-smooth font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="lg" variant="outline">
              <a href="#inscreva-se">Inscreva-se</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-smooth font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="lg" variant="hero" className="w-full">
              <a href="#inscreva-se">Inscreva-se</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
