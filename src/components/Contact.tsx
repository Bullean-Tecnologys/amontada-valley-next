import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30" id="contato">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient-primary">contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem dúvidas? Estamos aqui para ajudar! Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-smooth hover:shadow-xl">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">Endereço</h3>
              <p className="text-muted-foreground text-sm">
                Rua José Maria de Queiroz, 181<br />
                Centro – Amontada, CE<br />
                62540-000
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-smooth hover:shadow-xl">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-secondary">
                <Mail className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold">Email</h3>
              <a 
                href="mailto:amontadavalleytech@gmail.com"
                className="text-muted-foreground text-sm hover:text-primary transition-smooth block"
              >
                amontadavalleytech@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-smooth hover:shadow-xl">
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">Telefone</h3>
              <a 
                href="tel:+5588981653871"
                className="text-muted-foreground text-sm hover:text-primary transition-smooth block"
              >
                +55 (88) 98165-3871
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.234!2d-39.83448135952015!3d-3.360644539321285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTMuMzYwNjQ0NTM5MzIxMjg1LCAtMzkuODM0NDgxMzU5NTIwMTU!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Amontada Valley"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
