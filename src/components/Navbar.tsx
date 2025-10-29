import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#cursos", label: "Cursos" },
    { href: "#contato", label: "Contato" },
    { href: "#sobre", label: "Sobre Nós" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient-primary">
              Amontada Valley
            </div>
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
            <Button asChild size="lg" variant="hero">
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
