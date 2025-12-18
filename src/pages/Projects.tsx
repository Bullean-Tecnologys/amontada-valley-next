import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      name: "Ninna",
      description: "Plataforma de Inovação Corporativa",
      squads: [
        {
          id: 1,
          name: "Squad 01",
          deployUrl: "https://plataforma-inovacao-squad01-fronten.vercel.app",
          credentials: [
            { role: "Admin Ninna", email: "admin@default.com", password: "changeme" },
            { role: "Gestor", email: "gestor@gmail.com", password: "123456" },
            { role: "Avaliador", email: "avaliador@uorak.com", password: "123456" },
            { role: "Usuário Comum", email: "comum@uorak.com", password: "123456" },
            { role: "Startup", email: "fulano@gmail.com", password: "123456" }
          ]
        },
        {
          
          id: 2,
          name: "Squad 02",
          deployUrl: "https://plataforma-inovacao-squad02-front-e.vercel.app",
          credentials: [
            { role: "Administrador Geral", email: "admin@system.com", password: "admin123" },
            { role: "Gestor de Empresa", email: "gestor.empresa@uorak.com", password: "12345678!" },
            { role: "Gestor de Startup", email: "gestor.startup@uorak.com", password: "12345678!" },
            { role: "Avaliador", email: "avaliador.empresa@uorak.com", password: "12345678!" },
            { role: "Comum", email: "comum.empresa@uorak.com", password: "12345678!" }
          ]
        }

        ,
        {
          id: 3,
          name: "Squad 03",
          deployUrl: "https://plataforma-inovacao-aberta.vercel.app/",
          credentials: [
            { role: "Admin Ninna", email: "ninahub@gmail.com", password: "4dm1n@8char" },
            { role: "Gestor", email: "gestorpag@gmail.com", password: "Pagmenos@123" },
            { role: "Avaliador", email: "avaliadorpag@gmail.com", password: "Pagmenos@123" },
            { role: "Usuário Comum", email: "comumpag@gmail.com", password: "Pagmenos@123" },
            { role: "Startup", email: "contato_55.444.333/0001-13@plataforma.com", password: "Startup1342$@$" }
          ]
        },
        {
          id: 4,
          name: "Squad 04",
          deployUrl: "https://plataforma-inovacao-squad04-fronten.vercel.app/auth/login",
          credentials: [
            { role: "Admin Ninna", email: "admin@io.com", password: "senha123" },
            { role: "Gestor", email: "gestor@email.com", password: "senha123" },
            { role: "Usuário Comum", email: "user@email.com", password: "senha123" },
            { role: "Startup", email: "startup@email.com", password: "senha123" }
          ]
        },
        {
          id: 5,
          name: "Squad 05",
          deployUrl: "https://plataforma-inovacao-squad05-fronten.vercel.app",
          credentials: [
            { role: "Admin Ninna", email: "hubadmin@acme.com", password: "admin123" },
            { role: "Gestor", email: "Jonas@gmail.com", password: "gestor" },
            { role: "Avaliador", email: "felipetech@gmail.com", password: "avaliador" }
          ]
        }
      ]
    },
    {
      name: "Amotur",
      description: "Plataforma de Turismo",
      squads: []
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF4000]">
            Projetos dos Alunos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conheça os projetos desenvolvidos pelos nossos alunos em produção
          </p>
          <Button
            variant="outline"
            size="lg"
            className="group hover:shadow-glow transition-all duration-300"
            onClick={() => window.open("https://github.com/Amontada-Valley-Codes", "_blank")}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Ver Organização no GitHub
          </Button>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <Card
              key={project.name}
              className="group hover:shadow-glow transition-all duration-300 animate-fade-in-up border-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {project.squads.length > 0 ? `${project.squads.length} Squads` : "Em Desenvolvimento"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {project.squads.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.squads.map((squad) => (
                      <Card
                        key={squad.id}
                        className="hover:-translate-y-1 transition-all duration-300 border bg-gradient-to-br from-card to-card/50"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl">{squad.name}</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-2 group/btn hover:shadow-glow"
                            onClick={() => window.open(squad.deployUrl, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            Acessar Deploy
                          </Button>
                        </CardHeader>
                        {squad.credentials.length > 0 && (
                          <CardContent>
                            <p className="text-sm font-semibold mb-3 text-muted-foreground">
                              Credenciais de Teste:
                            </p>
                            <div className="space-y-2">
                              {squad.credentials.map((cred, credIdx) => (
                                <div
                                  key={credIdx}
                                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                >
                                  <p className="text-xs font-semibold text-primary mb-1">
                                    {cred.role}
                                  </p>
                                  <p className="text-xs text-muted-foreground break-all">
                                    <span className="font-medium">Email:</span> {cred.email}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    <span className="font-medium">Senha:</span> {cred.password}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Projeto em desenvolvimento. Em breve mais informações.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Como Acessar a Organização no GitHub</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Acesse o GitHub e faça login com o Google usando o email do Amontada Valley (amontadavalleytech@gmail.com)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Acesse o perfil GitHub Amontada Valley: github.com/amontadavalley</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>No canto superior esquerdo, clique na foto de perfil e depois em "Organizations"</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>Clique na organização "Amontada-Valley-Codes"</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">5.</span>
                <span>Para visualizar todos os repositórios, clique na aba "Repositories"</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
