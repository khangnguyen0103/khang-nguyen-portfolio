import { ArrowLeft, ArrowUpRight, BarChart3, FileText, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-editorial py-32">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-warm">
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <h1 className="mt-8 font-serif text-5xl">Project not found.</h1>
        </main>
      </div>
    );
  }

  const artifactSummary = [
    project.notebookUrl && "notebook",
    project.presentationUrl && "presentation",
    project.visualizationUrl && "visualization",
    "project notes",
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-editorial pb-14 md:pb-20">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.25em] text-warm mb-4">
                Project {project.n} · {project.tag}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              {project.comingSoon ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background">
                  Coming soon
                </span>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background hover:bg-foreground/85 transition-colors"
                >
                  <Github size={16} />
                  GitHub repo
                </a>
              )}
              {project.notebookUrl && (
                <a
                  href={project.notebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  Notebook
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.presentationUrl && (
                <a
                  href={project.presentationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  <FileText size={16} />
                  Presentation
                </a>
              )}
              {project.visualizationUrl && (
                <a
                  href={project.visualizationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  <BarChart3 size={16} />
                  Visualization
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-cream-deep/30 dark:bg-card/55">
          <div className="container-editorial py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-12">
              <article className="lg:col-span-8 rounded-3xl border border-border/60 bg-card/75 p-6 md:p-8">
                <div className={`relative min-h-[360px] overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} p-6 md:p-8`}>
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-35 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                    }}
                  />
                  <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {project.workflow.map((step, i) => (
                      <div
                        key={step}
                        className="h-full min-h-[128px] rounded-2xl border border-background/35 bg-background/70 p-4 backdrop-blur"
                      >
                          <span className="font-serif text-3xl text-warm">
                            0{i + 1}
                          </span>
                          <p className="mt-4 text-sm font-medium leading-snug">
                            {step}
                          </p>
                      </div>
                    ))}
                  </div>
                  <p className="relative mt-10 max-w-xl font-serif text-2xl md:text-3xl leading-tight text-foreground/85">
                    {project.viewTakeaway ?? `GitHub documentation path: ${artifactSummary}.`}
                  </p>
                </div>
              </article>

              <aside className="lg:col-span-4 space-y-6">
                <article className="rounded-3xl border border-border/60 bg-card/75 p-6">
                  <h2 className="font-serif text-3xl">Stack</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 px-3 py-1.5 text-sm text-foreground/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="rounded-3xl border border-border/60 bg-card/75 p-6">
                  <h2 className="font-serif text-3xl">README Notes</h2>
                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/75">
                    {project.highlights.map((item) => (
                      <li key={item} className="border-l border-warm/60 pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                {project.dataNote && (
                  <article className="rounded-3xl border border-border/60 bg-card/75 p-6">
                    <h2 className="font-serif text-3xl">Data Note</h2>
                    <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                      {project.dataNote}
                    </p>
                  </article>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
