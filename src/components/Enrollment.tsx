import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Users, CheckCircle, Award } from "lucide-react";

const Enrollment = () => {
  const steps = [
    { icon: FileText, title: "Ver Edital", description: "Leia o edital de seleção 2025" },
    { icon: Users, title: "Inscreva-se", description: "Preencha o formulário de inscrição" },
    { icon: CheckCircle, title: "Processo Seletivo", description: "Participe do processo simplificado" },
    { icon: Award, title: "Início das Aulas", description: "Comece sua jornada no tech" },
  ];

  return (
    <section className="py-20 bg-gradient-hero" id="inscreva-se">
      <div className="container px-4 max-w-6xl">
        <div className="text-center mb-16 text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Inscreva-se Agora no Edital de Seleção 2025
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-primary-foreground/90">
            Não perca a oportunidade de transformar sua carreira. 
            As vagas são limitadas!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background/95 backdrop-blur border-2 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-primary">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary">{index + 1}</div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90 shadow-xl">
            <a 
              href="https://www.amontadavalley.com.br/wp-content/uploads/2025/01/EDITAL-Chamado-Amontada-Valley-Ciclo-2025.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              Ver Edital 2025
              <FileText className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="xl" className="bg-secondary text-secondary-foreground hover:bg-secondary-dark shadow-xl">
            <a 
              href="https://forms.gle/4k8Wa2p6yCuwZ7PU9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              Inscreva-se Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 bg-background/95 backdrop-blur border-2">
          <CardContent className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-center">Requisitos para Inscrição</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Ter 16 anos completos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Disponibilidade de 4 horas diárias para aulas de segunda à sexta</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Dedicação, comprometimento e muita vontade de aprender!</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Enrollment;
