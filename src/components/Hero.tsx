import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>

     
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Transforme seu futuro com tecnologia
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Venha construir seu{" "}
            <span className="text-gradient-primary">futuro</span>{" "}
            com a gente!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            No <strong className="text-primary">Amontada Valley</strong>, você aprende tecnologia e 
            empreendedorismo em um ambiente colaborativo e inovador, com experiências práticas 
            que conectam diretamente ao mercado de trabalho.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ">
            <Button asChild size="xl" variant="outline">
              <a href="#inscreva-se" className="group" >
                Inscreva-se agora
                <ArrowRight className="h-5 ml-2 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="xl" variant="orange_outline">
              <a href="#cursos">
                Conheça os cursos
                <ArrowRight className="h-5 w-5 mt-1 group-hover:translate-x-1 transition-transform" />
              </a>
    
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary">600h</div>
              <div className="text-muted-foreground">de formação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-secondary">8 meses</div>
              <div className="text-muted-foreground">de duração</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary">100%</div>
              <div className="text-muted-foreground">prático</div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse shadow-glow" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-glow" />
      
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
