import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const team = [
    {
      name: "Cleofas Queirós",
      role: "Administrador",
      image: "src/assets/Cleofas.jpeg",
    },
    {
      name: "Kaká Queirós",
      role: "Diretor Executivo Dupar",
      image: "src/assets/Kaka.jpg",
    },
    {
      name: "Pedro Praxedes",
      role: "Conselheiro - L' Auto Cargo",
      image: "src/assets/Pedro.jpg",
    },
    {
      name: "Humberto Lima e Silva",
      role: "Diretor Executivo Ninna",
      image: "src/assets/Humberto.jpeg",
    },
    {
      name: "Prof. Abraão Saraiva Jr.",
      role: "Professor e Coordenador de Empreendedorismo da UFC",
      image: "src/assets/Abraao.jpeg",
    },
    {
      name: "Holanda Junior",
      role: "Diretor Executivo Dupar",
      image: "src/assets/Holanda.jpeg",
    },
    {
      name: "Rafael Nascimento",
      role: "CEO Inovation IT",
      image: "src/assets/Rafael.png",
    },
    {
      name: "Gabriella Purcaru",
      role: "Head of Startup",
      image: "src/assets/gabriella.jpg",
    },
    {
      name: "Luis Felipe Oliveira",
      role: "Coordenador Amontada Valley",
      image: "src/assets/Luis.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-20 flex-grow">
        <section className="py-21 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <img
              src="src/assets/logo.png"
              alt="Amontada Valley"
              className="mx-auto w-full max-w-lg transition-transform duration-300 hover:scale-105"
            />
            <div className=" mt-10 px-2">
              <h1 className="text-4xl md:text-5xl font-extrabold mt-10 mb-6 text-gradient-primary">
                A Amontada Valley
              </h1>

              <div className="max-w-4xl mx-auto text-justify text-lg text-foreground/80 space-y-6 mb-20">
                <p>
                  O projeto Amontada Valley consiste em um instituto de ensino e
                  treinamento de profissionais da tecnologia da informação. Além
                  disso, é uma associação sem fins lucrativos que busca ensinar
                  tecnologias de ponta para jovens desassistidos e de baixa
                  renda no interior do Ceará.
                </p>
                <p>
                  O objetivo principal é proporcionar a esses jovens acesso à
                  capacitação e formação tecnológica, conectando-os a
                  oportunidades de emprego e empreendedorismo, possibilitando
                  uma mudança real em suas vidas.
                </p>
                <p>
                  Com um notebook e internet banda larga, qualquer jovem
                  capacitado poderá trabalhar ou empreender do Ceará para o
                  Brasil e o mundo, transformando sua realidade e fortalecendo a
                  economia local.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto px-6 py-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-[#FF4000]">
              A Cidade de Amontada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 max-h-2xl gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src="src/assets/Amontada.jpeg"
                  alt="Amontada"
                  className="rounded-2xl shadow-lg w-full max-w-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-4 text-lg text-foreground/80 text-justify">
                <p>
                  Amontada é um município do estado do Ceará, localizado na
                  microrregião de Itapipoca. O município possui cerca de 45 mil
                  habitantes e área de 1.582 km², com clima tropical atlântico e
                  semiárido.
                </p>
                <p>
                  Seu povoamento remonta ao século XVIII, marcado pela presença
                  dos Tremembés e missionários em busca de catequese.
                </p>
                <p>
                  Uma cidade acolhedora, turística e comercial, com grande
                  potencial para crescer com inovação, empreendedorismo e
                  tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gradient-primary">
              O Fundador
            </h2>

            <Card className="border-primary/20 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                <img
                  src="src/assets/Deusmar.jpeg"
                  alt="Deusmar Queirós"
                  className="w-44 h-44 rounded-full object-cover shadow-lg"
                />
                <div className="text-center md:text-left ">
                  <h3 className="text-2xl font-bold mb-4 text-primary ">
                    Deusmar Queirós
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Francisco Deusmar de Queirós, nascido em Amontada – Ceará,
                    em 27/05/1947, é casado com Maria Auricélia Alves de Queirós
                    e pai de quatro filhos. Fundador da Rede Pague Menos, é
                    formado em Economia pela UFC em 1973 — um verdadeiro tecedor
                    de ideias e inspiração para o projeto Amontada Valley.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gradient-primary">
              Equipe Formadora
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-primary/10 hover:border-primary/60 rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {member.name}
                      </h3>
                      <p className="text-foreground/70 text-sm md:text-base">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-20 bg-gradient-subtle text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gradient-primary">
              Endereço
            </h2>
            <p className="text-lg text-foreground/80">
              Rua José Maria de Queiroz, 181 – Centro – Amontada, CE – 62540-000
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Amontada Valley - CNPJ: 40.950.838/0001-60
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
