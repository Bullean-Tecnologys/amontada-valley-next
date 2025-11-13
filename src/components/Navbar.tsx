import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#como-funciona", label: "Como Funciona" },
    { href: "/#cursos", label: "Cursos" },
    { href: "/projetos", label: "Projetos" },
    { href: "/#contato", label: "Contato" },
    { href: "/sobre-nos", label: "Sobre Nós" },
  ];

  
  const isHome = location.pathname === "/" || location.pathname === "";

  
  const visibleLinks = isHome
    ? navLinks
    : navLinks.filter((link) => !link.href.includes("#"));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <a href="/" className="flex items-center space-x-2 group">
            <img
              src={logo}
              alt="Amontada Valley"
              className={`transition-all duration-300  ${
                scrolled ? "h-12" : "h-11"
              } w-auto group-hover:scale-105`}
            />
          </a>

          
          <div className="hidden md:flex items-center space-x-8">
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}

            
            {isHome ? (
              <Button asChild size="lg" variant="outline">
                <a href="https://forms.gle/4k8Wa2p6yCuwZ7PU9">Inscreva-se</a>
              </Button>
            ) : (
              
              <Button asChild size="lg" variant="outline">
                <a href="/">Início</a>
              </Button>
            )}
          </div>

          
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

        
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {isHome ? (
              <Button asChild size="lg" variant="hero" className="w-full">
                <a href="https://forms.gle/4k8Wa2p6yCuwZ7PU9" onClick={() => setIsOpen(false)}>
                  Inscreva-se
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="hero" className="w-full">
                <a href="/" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
