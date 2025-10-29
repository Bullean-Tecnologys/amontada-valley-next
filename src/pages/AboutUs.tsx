import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const team = [
    { name: "Deusmar Queirós", role: "Empresário Fundador" },
    { name: "Cleofas Queirós", role: "Administrador" },
    { name: "Kaká Queirós", role: "Diretor Executivo Dupar" },
    { name: "Pedro Praxedes", role: "Conselheiro - L' Auto Cargo" },
    { name: "Humberto Lima e Silva", role: "Diretor Executivo Ninna" },
    { name: "Armando Caminha", role: "Diretor Pague Menos" },
    { name: "Prof. Abraão Saraiva Jr.", role: "Professor e Coordenador de Empreendedorismo da UFC" },
    { name: "Holanda Junior", role: "Diretor Executivo Dupar" },
    { name: "Rafael Nascimento", role: "CEO Inovation IT" },
    { name: "Gabriella Purcaru", role: "Head of Startup" },
    { name: "Luis Felipe Oliveira", role: "Coordenador Amontada Valley" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
                A Amontada Valley
              </h1>
              <div className="space-y-6 text-lg text-foreground/80">
                <p>
                  O projeto Amontada Valley consiste em um instituto de ensino e treinamento de profissionais da tecnologia da informação. Além do mais, consiste em uma associação sem fins lucrativos que busca ensinar tecnologias de ponta para jovens desassistidos, de baixa renda no interior do Ceará.
                </p>
                <p>
                  Tendo como objetivo principal proporcionar a jovens o acesso a capacitação e formação tecnológica com apoio institucional à captação e prospecção de vagas de trabalho, seja remoto ou presencial, a fim de que possibilite a entrada efetiva no mercado de trabalhos de tais indivíduos, acarretando assim uma mudança na realidade dos alunos atendidos no projeto.
                </p>
                <p>
                  Com um notebook e internet de banda larga, qualquer jovem capacitado poderá trabalhar ou empreender do Ceará para o Brasil e o Mundo e consequentemente transformando a sua vida e aquecendo a economia local.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cidade de Amontada */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-primary">
                A Cidade de Amontada
              </h2>
              <div className="space-y-6 text-lg text-foreground/80">
                <p>
                  Amontada é um município do estado brasileiro do Ceará. Localiza-se na microrregião de Itapipoca, na mesorregião do Norte Cearense. O município tem 45.232 habitantes (2019) e 1582km². Com clima Tropical atlântico, Tropical e Semiárido.
                </p>
                <p>
                  O povoamento remonta aos primórdios do século XVIII, Tremembés e missionários davam os passos iniciais em prol da Catequese.
                </p>
                <p>
                  Uma cidade acolhedora, turística e comercial, com grandes potencialidades e pronta para mostrar o quanto é capaz de crescer com inovação, empreendedorismo e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O Fundador */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-primary">
                O Fundador
              </h2>
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Deusmar Queirós
                  </h3>
                  <p className="text-lg text-foreground/80">
                    Francisco Deusmar de Queirós nascido em Amontada – Ceará, em 27/05/1947, é casado com Maria Auricélia Alves de Queirós e têm quatro filhos. Fundador da Rede Pague Menos é formado em Economia pela UFC em 1973, o verdadeiro tecedor de ideias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Equipe Formadora */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-primary">
              Equipe Formadora
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-smooth">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {member.name}
                    </h3>
                    <p className="text-foreground/70">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Endereço */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                Endereço
              </h2>
              <p className="text-lg text-foreground/80">
                Rua José Maria de Queiroz, 181 – Centro – Amontada, CE – 62540-000
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                Amontada Valley - CNPJ: 40.950.838/0001-60
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
