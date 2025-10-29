import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Palette, Database, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    id: "backend",
    icon: Database,
    title: "Back-End",
    subtitle: "Domine a parte invisível da web!",
    description:
      "Nosso curso de Back-End te capacitará a construir a estrutura sólida e eficiente que sustenta as aplicações web. Você aprenderá a gerenciar dados, integrar sistemas e garantir a segurança das informações.",
    skills: [
      "Desenvolvimento de Software",
      "Bancos de dados relacionais e não relacionais",
      "Documentação de requisitos e especificações",
      "Criação de APIs",
      "Regras de negócio para engenharia de software",
    ],
    technologies: [
      "Linux",
      "Docker",
      "PostgreSQL",
      "JavaScript, Node.js e TypeScript",
      "NestJS",
      "Git e GitHub",
    ],
    color: "primary",
  },
  {
    id: "frontend",
    icon: Palette,
    title: "Front-End",
    subtitle: "Crie experiências digitais incríveis!",
    description:
      "Neste curso, você aprenderá a desenvolver interfaces web intuitivas e atraentes, utilizando as tecnologias mais modernas. Prepare-se para construir aplicações web eficientes e prontas para integração com o back-end.",
    skills: [
      "Tecnologias para interfaces intuitivas e eficientes",
      "Ciclo completo de desenvolvimento",
      "Soluções personalizadas para negócios",
      "Sites e apps com excelente UX",
      "Segurança e desempenho de aplicações",
    ],
    technologies: [
      "Linux",
      "Docker",
      "HTML, CSS e JavaScript",
      "React.js com TypeScript",
      "Git e GitHub",
    ],
    color: "secondary",
  },
  {
    id: "datascience",
    icon: Code,
    title: "Data Science",
    subtitle: "Transforme dados em conhecimento!",
    description:
      "Nosso curso de Data Science te equipará com as ferramentas e técnicas necessárias para extrair insights valiosos de grandes volumes de dados. Descubra como utilizar algoritmos de machine learning, estatística e visualização.",
    skills: [
      "Coleta, limpeza e análise de dados",
      "Algoritmos de machine learning",
      "Comunicação através de dashboards e gráficos",
      "Identificar oportunidades com dados",
    ],
    technologies: [
      "Python",
      "Pandas e NumPy",
      "Scikit-learn",
      "Power BI",
      "Hadoop e Spark",
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
            Nossos <span className="text-gradient-primary">Cursos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o curso ideal para sua carreira em tecnologia. 
            Todos com 600 horas de formação e metodologia prática.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={cn(
                "border-2 transition-all duration-300 cursor-pointer",
                expandedCourse === course.id
                  ? "border-primary shadow-xl"
                  : "border-border hover:border-primary/50"
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
                          : "bg-gradient-secondary"
                      )}
                    >
                      <course.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
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
                    <h4 className="font-bold text-lg mb-3">Habilidades Adquiridas</h4>
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
                    <Button asChild size="lg" variant="hero" className="w-full md:w-auto">
                      <a href="#inscreva-se">Inscreva-se Neste Curso</a>
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto border-2 border-primary/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Formação Soft Skills</h3>
              <p className="text-muted-foreground mb-6">
                30% da carga horária total focada no desenvolvimento das suas Soft Skills, 
                incluindo Inglês Técnico, Formação Comportamental e Vivências com palestras, 
                mentorias e Bootcamps.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-primary mb-1">9h/semana</div>
                  <div className="text-muted-foreground">Inglês Técnico</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-secondary mb-1">4h/semana</div>
                  <div className="text-muted-foreground">Formação Comportamental</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-bold text-lg text-primary mb-1">2h/semana</div>
                  <div className="text-muted-foreground">Vivências e Mentorias</div>
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
