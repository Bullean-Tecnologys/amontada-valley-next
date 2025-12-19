import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, ChartLine, Braces, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    id: "FullStack",
    icon: Braces,
    title: "Full-Stack",
    subtitle: "Crie experiências digitais incríveis!",
    description:
      "Neste curso, você aprenderá a desenvolver aplicações Full Stack completas, atuando tanto no front-end quanto no back-end, além de trabalhar com bancos de dados, APIs, autenticação, segurança e deploy.",
    skills: [
      "Desenvolvimento de interfaces modernas e responsivas",
      "Criação de APIs REST e integração com o front-end",
      "Implementação de lógica de negócio no back-end",
      "Manipulação de bancos de dados relacionais e não relacionais",
      "Autenticação, autorização e segurança de aplicações",
      "Versionamento de código e trabalho colaborativo",
      "Integração entre front-end, back-end e banco de dados",
      "Deploy e execução de aplicações em ambiente de produção",
    ],
    technologies: [
      "HTML, CSS e JavaScript",
      "Git e GitHub",
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "APIs REST",
      "PostgreSQL",
      "Docker",
    ],
    color: "secondary",
  },
  {
    id: "datasanalytics",
    icon: ChartLine,
    title: "Data Analytics",
    subtitle: "Transforme dados em conhecimento!",
    description:
      "Nosso curso de Data Science te equipará com as ferramentas e técnicas necessárias para extrair insights valiosos de grandes volumes de dados. Descubra como utilizar algoritmos de machine learning, estatística e visualização.",
    skills: [
      "Coleta, organização e tratamento de dados",
      "Análise exploratória de dados (EDA)",
      "Criação de relatórios e dashboards interativos",
      "Interpretação de métricas e indicadores (KPIs)",
      "Análise de dados para apoio à tomada de decisão",
      "Manipulação de bases de dados estruturadas", 
      "Comunicação de resultados de forma clara e objetiva",
    ],
    technologies: [
      "Python",
      "Análise e visualização de dados",
      "SQL",
      "Web Scraping",
      "Machine Learning",
      "IA aplicada",
    ],
    color: "primary",
  },
];

const Courses = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <section className="py-20 bg-muted/30" id="cursos">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient-primary">cursos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o curso ideal para sua carreira em tecnologia. Todos com 600
            horas de formação e metodologia prática.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={cn(
                "border-2 transition-all duration-300 cursor-pointer hover:-translate-y-1",
                expandedCourse === course.id
                  ? "border-primary shadow-glow scale-[1.02]"
                  : "border-border hover:border-primary/50 hover:shadow-xl"
              )}
              onClick={() => toggleCourse(course.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "p-3 rounded-lg",
                        course.color === "primary"
                          ? "bg-gradient-primary"
                          : "bg-[#FF4000]"
                      )}
                    >
                      <course.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {course.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{course.subtitle}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "transition-transform",
                      expandedCourse === course.id && "rotate-180"
                    )}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>

              {expandedCourse === course.id && (
                <CardContent className="space-y-6 animate-in slide-in-from-top-2">
                  <p className="text-muted-foreground">{course.description}</p>

                  <div>
                    <h4 className="font-bold text-lg mb-3">
                      Habilidades Adquiridas
                    </h4>
                    <ul className="space-y-2">
                      {course.skills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium",
                            course.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary/10 text-secondary"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      variant="hero"
                      className="w-full md:w-auto"
                    >
                      <a href="#inscreva-se">Inscreva-se neste curso</a>
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-12">
          <Card className="border-2 border-primary/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Formação Soft Skills
              </h3>
              <p className="text-muted-foreground mb-6  text-center">
                30% da carga horária total focada no desenvolvimento das suas
                Soft Skills, incluindo Inglês Técnico, Formação Comportamental e
                Vivências com palestras, mentorias e Bootcamps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-primary mb-1 text-center">
                    9h/semana
                  </div>
                  <div className="text-muted-foreground text-center">
                    Inglês Técnico
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-secondary mb-1 text-center">
                    4h/semana
                  </div>
                  <div className="text-muted-foreground text-center">
                    Formação Comportamental
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-primary mb-1 text-center">
                    2h/semana
                  </div>
                  <div className="text-muted-foreground text-center">
                    Vivências e Mentorias
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
