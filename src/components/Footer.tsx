const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Amontada Valley
            </h3>
            <p className="text-muted-foreground text-sm">
              Tecnologia e Empreendedorismo para transformar o futuro
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-smooth">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-muted-foreground hover:text-primary transition-smooth">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>



          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Centro – Amontada, CE</li>
              <li>
                <a href="mailto:amontadavalleytech@gmail.com" className="hover:text-primary transition-smooth">
                  amontadavalleytech@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5588981653871" className="hover:text-primary transition-smooth">
                  +55 (88) 98165-3871
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amontada Valley. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
