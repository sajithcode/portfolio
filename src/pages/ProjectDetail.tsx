import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main id="main-content" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" onClick={() => navigate("/#projects")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              {project.links.github && (
                <Button asChild variant="outline">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-xl overflow-hidden"
          >
            <img
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              className="w-full h-auto"
              loading="eager"
            />
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Problem */}
            {project.problem && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-primary">The Problem</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.problem}</p>
              </motion.section>
            )}

            {/* Approach */}
            {project.approach && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-primary">The Approach</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.approach}</p>
              </motion.section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-bold">{index + 1}</span>
                          </div>
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Result */}
            {project.result && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-primary">The Result</h2>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed">{project.result}</p>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Lessons */}
            {project.lessons && project.lessons.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4 text-primary">Lessons Learned</h2>
                <ul className="space-y-3">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent text-xl mt-1">→</span>
                      <span className="text-muted-foreground text-lg leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-border flex justify-between gap-4"
            aria-label="Project navigation"
          >
            {prevProject ? (
              <Link to={`/projects/${prevProject.slug}`} className="flex-1">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Project</span>
                    </div>
                    <h3 className="font-semibold">{prevProject.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextProject ? (
              <Link to={`/projects/${nextProject.slug}`} className="flex-1">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Next Project</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold">{nextProject.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </motion.nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
