import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteMovingCardsDemo } from "@/components/ui/MovingLogos";
import { Lightbulb, Wrench, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import aboutUs from "@/assets/aboutUs-bg.webp";
import pagueMenos from "@/assets/paguemenos.png";
import ninnaHub from "@/assets/ninnahub.png";
import valley from "@/assets/valley.png";

import cleofas from "@/assets/Cleofas.webp";
import kaka from "@/assets/Kaka.webp";
import pedro from "@/assets/Pedro.webp";
import humberto from "@/assets/Humberto.webp";
import abraao from "@/assets/Abraao.webp";
import holanda from "@/assets/Holanda.webp";
import rafael from "@/assets/Rafael.webp";
import gabriella from "@/assets/Gabriella.webp";
import luis from "@/assets/Luis.webp";

import amontadaImg from "@/assets/Amontada.webp";
import deusmar from "@/assets/Deusmar.webp";

const AboutUs = () => {
  const team = [
    { name: "Cleofas Queirós", role: "Administrador", image: cleofas },
    { name: "Kaká Queirós", role: "Diretor Executivo Dupar", image: kaka },
    {
      name: "Pedro Praxedes",
      role: "Conselheiro - L' Auto Cargo",
      image: pedro,
    },
    {
      name: "Humberto Lima e Silva",
      role: "Diretor Executivo Ninna",
      image: humberto,
    },
    {
      name: "Prof. Abraão Saraiva Jr.",
      role: "Professor e Coordenador de Empreendedorismo da UFC",
      image: abraao,
    },
    { name: "Holanda Junior", role: "Diretor Executivo Dupar", image: holanda },
    { name: "Rafael Nascimento", role: "CEO Inovation IT", image: rafael },
    { name: "Gabriella Purcaru", role: "Head of Startup", image: gabriella },
    {
      name: "Luis Felipe Oliveira",
      role: "Coordenador Amontada Valley",
      image: luis,
    },
  ];
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

  const carouselImages = [pagueMenos, ninnaHub, valley];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${aboutUs})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 opacity-15" />
          </div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
              Sobre nós
            </h1>
            <p className="text-sm text-white font-semibold drop-shadow-lg">
              Formando talentos • Impulsionando inovação • Transformando
              realidades
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6 text-gradient-primary pb-2">
                Amontada Valley
              </h1>

              <div className="text-justify text-lg text-foreground/80 space-y-6">
                <p>
                  O Amontada Valley é um projeto da{" "}
                  <a
                    href="https://pmenoslab.com.br"
                    className="text-primary transition-smooth cursor-pointer"
                  >
                    Pague Menos
                  </a>{" "}
                  e do{" "}
                  <a
                    href="https://ninnahub.com.br"
                    className="text-primary transition-smooth"
                  >
                    NINNA Hub
                  </a>{" "}
                  dedicado à formação de profissionais em Tecnologia da
                  Informação. Localizado na cidade de Amontada, no interior do
                  Ceará, a iniciativa desenvolve competências técnicas e
                  práticas alinhadas às demandas do mercado, combinando educação
                  de qualidade, projetos reais e conexão com o ecossistema de
                  inovação.
                </p>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-full h-[320px] md:h-[380px]"
                  >
                    <img
                      src={img}
                      alt="Parceiros Amontada Valley"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === currentSlide ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mt-10 mb-6 text-center text-[#FF4000] py-6">
              A Cidade de Amontada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
              <img
                src={amontadaImg}
                alt="Amontada"
                className="rounded-2xl shadow-lg w-full max-w-lg mx-auto transition-transform duration-300 hover:scale-105"
              />
              <div className="space-y-4 text-lg text-foreground/80 text-justify">
                <p>
                  Amontada é um município do Ceará, localizado na microrregião
                  de Itapipoca, contando com cerca de 45 mil habitantes.
                </p>
                <p>
                  Destaca-se pelo distrito litorâneo de Icaraí de Amontada,
                  conhecido por suas praias tranquilas e forte potencial
                  turístico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl md:text-5xl mb-10 text-gradient-primary text-center">
              O fundador
            </h2>

            <Card className="border-primary/20 shadow-lg rounded-2xl hover:scale-105 transition">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                <img
                  src={deusmar}
                  alt="Deusmar Queirós"
                  className="w-44 h-44 rounded-full object-cover shadow-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Deusmar Queirós
                  </h3>
                  <p className="text-lg text-foreground/80">
                    Fundador da Rede{" "}
                    <span className="font-semibold">Pague Menos</span> e
                    idealizador do
                    <span className="font-semibold"> Amontada Valley</span>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl md:text-5xl mb-10 text-[#FF4000] text-center">
              Equipe formadora
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="rounded-2xl shadow-lg hover:scale-105 transition"
                >
                  <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-subtle">
          <InfiniteMovingCardsDemo />
        </section>
        <section className="bg-muted/30 py-20 " id="pilares">
          <div className="mx-auto w-full max-w-6xl px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nossos <span className="text-[#FF4000]">valores</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia é baseada em princípios fundamentais que
                orientam todo o processo de aprendizagem e formação
                profissional.
              </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card
                className="bg-white border border-border rounded-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-muted">
                    <Users className="h-4 w-4 text-[#FF4000]" />
                  </div>
                  <h3 className="text-lg font-semibold">Inclusão</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Promovemos oportunidades equitativas de acesso ao
                    aprendizado tecnológico, valorizando a diversidade de
                    origens e experiências, garantindo que jovens talentosos
                    encontrem espaço para crescer.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-white border border-border rounded-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-muted">
                    <Sparkles className="h-4 w-4 text-[#FF4000]" />
                  </div>
                  <h3 className="text-lg font-semibold">Excelência</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Buscamos altos padrões em ensino, prática e entrega de
                    resultados, incentivando aprendizagem contínua, rigor
                    técnico e qualidade em tudo o que fazemos.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-white border border-border rounded-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-muted">
                    <Users className="h-4 w-4 text-[#FF4000]" />
                  </div>
                  <h3 className="text-lg font-semibold">Conexão</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Construímos e fortalecemos relações entre alunos, empresas
                    parceiras e o ecossistema de tecnologia, promovendo
                    oportunidades reais.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-white border border-border rounded-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-muted">
                    <Lightbulb className="h-4 w-4 text-[#FF4000]" />
                  </div>
                  <h3 className="text-lg font-semibold">Inovação</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Estimulamos pensamento criativo, experimentação e soluções
                    tecnológicas transformadoras com impacto social.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
