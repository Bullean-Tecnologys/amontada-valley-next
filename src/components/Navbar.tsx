import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.webp";

const NAV_LINKS = [
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
  { href: "/sobre-nos", label: "Sobre Nós" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/" || pathname === "";

  const visibleLinks = isHome
    ? NAV_LINKS
    : NAV_LINKS.filter((link) => !link.href.includes("#"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center">
            <img
              src={logo}
              alt="Amontada Valley"
              className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-12" : "h-11"
              }`}
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            {!isHome && (
              <Button asChild size="lg" variant="outline">
                <a href="/">Início</a>
              </Button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden space-y-4 border-t border-border py-4">
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-2 font-medium text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            {!isHome && (
              <Button
                asChild
                size="lg"
                variant="hero"
                className="w-full"
                onClick={closeMenu}
              >
                <a href="/">Home</a>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
