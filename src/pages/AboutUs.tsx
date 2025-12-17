import { Card, CardContent } from "@/components/ui/card";
import { InfiniteMovingCardsDemo } from "@/components/ui/MovingLogos";
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
            <div className="mt-10 px-2">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient-primary pb-2">
                A Amontada Valley
              </h1>

              <div className="max-w-4xl mx-auto text-justify text-lg text-foreground/80 space-y-6 mb-18">
                <p>
                  O projeto Amontada Valley consiste em um instituto dedicado ao
                  ensino e treinamento de profissionais da área de Tecnologia da
                  Informação. Trata-se de uma associação sem fins lucrativos que
                  busca oferecer conhecimento em tecnologias de ponta para
                  jovens desassistidos e de baixa renda do interior do Ceará,
                  ampliando o acesso a oportunidades antes inacessíveis. Seu
                  principal objetivo é proporcionar formação qualificada e
                  gratuita, conectando esses jovens ao mercado de trabalho, a
                  projetos de inovação e ao empreendedorismo digital.
                </p>

                <p>
                  Com um notebook e acesso à internet banda larga, qualquer
                  jovem capacitado poderá trabalhar remotamente ou empreender do
                  Ceará para o Brasil e o mundo. Assim, o Amontada Valley
                  contribui para mudar realidades individuais, fortalecer a
                  economia local e consolidar o interior cearense como um
                  celeiro de inovação e desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-6 ">
            <h2 className="text-4xl md:text-5xl font-extrabold mt-10 mb-6 text-center text-[#FF4000] py-6">
              A Cidade de Amontada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 max-h-2xl gap-10 items-top max-w-7xl items-center">
              <div className="flex justify-center">
                <img
                  src="src/assets/Amontada.jpeg"
                  alt="Amontada"
                  className="rounded-2xl shadow-lg w-full max-w-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-4 text-lg text-foreground/80 text-justify">
                <p>
                  Amontada é um município do Ceará, localizado na microrregião
                  de Itapipoca, contando com cerca de 45 mil habitantes e uma
                  área de 1.582 km². Seu clima varia entre o tropical atlântico
                  e o semiárido, marcado por longos períodos de sol, ventos
                  constantes e paisagens características do litoral e do sertão.
                  O povoamento da região teve início no século XVIII, com a
                  presença dos povos indígenas Tremembés e de missionários que
                  atuavam na catequese.
                </p>
                <p>
                  Atualmente, Amontada é uma cidade acolhedora, comercial e
                  turística, destacando-se pelo distrito litorâneo de Icaraí de
                  Amontada, o famoso “Icaraizinho”, conhecido por suas praias
                  tranquilas, dunas, lagoas e pela prática de kitesurfe. Sua
                  economia combina agricultura, pesca, comércio e turismo, além
                  de apresentar crescente potencial para inovação,
                  empreendedorismo e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mt-10 mb-6 text-gradient-primary text-center">
              O Fundador
            </h2>

            <Card className="border-primary/20 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 max-h-lg">
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

        <section className="mb-5">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mt-10 mb-10 text-[#FF4000] text-center ">
              Equipe Formadora
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-primary/20 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105 max-h-lg"
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

        <h2 className="text-4xl md:text-5xl font-extrabold mt-20 mb-15 text-gradient-primary text-center ">
          Nossos colaboradores
        </h2>

        <section className="w-full py-5 bg-gradient-subtle">
          <InfiniteMovingCardsDemo />
        </section>

        <section className="py-20 bg-gradient-subtle text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-15 text-[#FF4000] text-center ">
              Endereço
            </h2>
            <p className="text-lg text-foreground/80 mt-5">
              Rua José Maria de Queiroz, 181 – Centro – Amontada, CE – 62540-000
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Amontada Valley - CNPJ: 40.950.838/0001-60
            </p>
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
