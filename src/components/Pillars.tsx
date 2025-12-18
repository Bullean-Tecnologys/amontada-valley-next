// Fully Refactored Pillars Component (Aligned + Responsive)

import { Lightbulb, Wrench, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Lightbulb,
    title: "Despertar",
    description: "Estimular o interesse pela área tecnológica",
  },
  {
    icon: Wrench,
    title: "Preparar",
    description:
      "Aprender fazendo na prática com projetos reais vivenciando o processo de criação",
  },
  {
    icon: Users,
    title: "Conectar",
    description: "Promover conexão entre empresas, profissionais e alunos",
  },
  {
    icon: Sparkles,
    title: "Inovar",
    description: "Construir novas ideias com embasamento técnico e social",
  },
];

const Pillars = () => {
  return (
    <section className="bg-muted/30" id="pilares">
      
      <div className="mx-auto w-full max-w-7xl px-2 md:px-6 lg:px-20">

        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-[#FF4000]">pilares</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia é baseada em quatro pilares fundamentais que guiam
            todo o processo de aprendizagem
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex p-4 rounded-lg bg-gradient-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <pillar.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
