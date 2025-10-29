import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Users as UsersIcon, Award } from "lucide-react";

const HowItWorks = () => {
  const features = [
    {
      icon: Calendar,
      title: "8 Meses de Duração",
      description: "600 horas de formação completa",
    },
    {
      icon: BookOpen,
      title: "Metodologia Prática",
      description: "Baseada em desafios e projetos reais",
    },
    {
      icon: UsersIcon,
      title: "Aulas Híbridas",
      description: "3 aulas remotas + 2 presenciais por semana",
    },
    {
      icon: Award,
      title: "Soft Skills",
      description: "30% focado no desenvolvimento pessoal",
    },
  ];

  return (
    <section className="py-20" id="como-funciona">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient-primary">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia é prática e baseada em desafios. Os conteúdos são aplicados 
            em projetos reais, vivenciando o processo de criação e desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-primary">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-hero border-0">
          <CardContent className="p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">O Curso</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-primary-foreground/90">
              Toda a metodologia é prática e baseada em desafios. Os conteúdos são aplicados 
              em projetos reais, vivenciando o processo de criação e desenvolvimento, através 
              de encontros semanais, divididos em três aulas remotas e duas aulas presenciais 
              para aplicação prática dos conteúdos e soluções de dúvidas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">16+</div>
                <div className="text-primary-foreground/90">Idade mínima</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4h/dia</div>
                <div className="text-primary-foreground/90">Dedicação diária</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/90">Comprometimento</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
