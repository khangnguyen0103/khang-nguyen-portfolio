import { ArrowLeft, ArrowUpRight, BarChart3, FileText, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import { projects } from "@/data/projects";

const projectVisuals = {
  "ai-model-selection": {
    panel:
      "bg-[radial-gradient(circle_at_18%_18%,hsl(var(--warm)/0.42),transparent_34%),linear-gradient(135deg,hsl(var(--cream-deep)),hsl(var(--card))_48%,hsl(var(--accent)/0.28))]",
    pattern:
      "bg-[linear-gradient(90deg,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-[size:34px_34px]",
    motif: "models",
    circuitAccent: "warm",
  },
  "datafest-patient-journey": {
    panel:
      "bg-[radial-gradient(circle_at_20%_25%,hsl(var(--accent)/0.42),transparent_32%),radial-gradient(circle_at_80%_20%,hsl(var(--warm)/0.28),transparent_28%),linear-gradient(135deg,hsl(var(--card)),hsl(var(--cream-deep))_58%,hsl(var(--warm-soft)/0.65))]",
    pattern:
      "bg-[radial-gradient(circle,hsl(var(--foreground)/0.11)_1px,transparent_1.5px)] bg-[size:22px_22px]",
    motif: "journey",
    circuitAccent: "accent",
  },
  "business-dashboard": {
    panel:
      "bg-[linear-gradient(135deg,hsl(var(--cream-deep)),hsl(var(--warm-soft)/0.55)_46%,hsl(var(--card))),radial-gradient(circle_at_78%_20%,hsl(var(--warm)/0.32),transparent_30%)]",
    pattern:
      "bg-[linear-gradient(90deg,hsl(var(--foreground)/0.07)_1px,transparent_1px)] bg-[size:28px_28px]",
    motif: "dashboard",
    circuitAccent: "warm",
  },
  "la-crime-analysis": {
    panel:
      "bg-[radial-gradient(circle_at_18%_20%,hsl(var(--warm)/0.35),transparent_32%),radial-gradient(circle_at_80%_75%,hsl(var(--accent)/0.32),transparent_34%),linear-gradient(135deg,hsl(var(--card)),hsl(var(--cream-deep))_54%,hsl(var(--warm-soft)/0.45))]",
    pattern:
      "bg-[linear-gradient(45deg,hsl(var(--foreground)/0.07)_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:30px_30px]",
    motif: "city",
    circuitAccent: "accent",
  },
  "military-spending-visualization": {
    panel:
      "bg-[radial-gradient(circle_at_72%_18%,hsl(var(--accent)/0.38),transparent_30%),linear-gradient(135deg,hsl(var(--cream-deep)),hsl(var(--card))_50%,hsl(var(--warm)/0.25))]",
    pattern:
      "bg-[linear-gradient(90deg,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:54px_36px]",
    motif: "global",
    circuitAccent: "warm",
  },
} as const;

const CircuitBackground = ({ accent = "warm" }: { accent?: string }) => {
  const glowClass =
    accent === "accent"
      ? "bg-accent/30 dark:bg-accent/20"
      : "bg-warm/30 dark:bg-warm/20";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--cream-deep)/0.92),hsl(var(--background)/0.78)_46%,hsl(var(--cream-deep)/0.88))] dark:bg-[linear-gradient(180deg,hsl(var(--card)/0.92),hsl(var(--background)/0.72)_46%,hsl(var(--card)/0.9))]" />
      <div className="absolute inset-0 opacity-[0.28] dark:opacity-[0.18] bg-[linear-gradient(90deg,hsl(var(--foreground)/0.16)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-[size:46px_46px]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.62] dark:opacity-[0.42]"
        viewBox="0 0 1000 560"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuitTrace" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="52%" stopColor="currentColor" stopOpacity="0.62" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        <g className="text-foreground" fill="none" stroke="url(#circuitTrace)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-20 86H145L188 42H326L374 92H488L534 44H680L726 92H1018" strokeWidth="4" />
          <path d="M20 132H174L215 174H330L382 128H520L570 174H718L760 132H980" strokeWidth="2.6" />
          <path d="M-10 436H142L190 394H342L386 438H520L575 388H732L780 438H1012" strokeWidth="4" />
          <path d="M68 488H218L265 526H424L468 488H620L670 526H838L902 474H1030" strokeWidth="2.8" />
          <path d="M120 0V74L164 118V198" strokeWidth="2.6" />
          <path d="M292 0V58L340 104V174" strokeWidth="2.2" />
          <path d="M634 0V70L592 112V188" strokeWidth="2.6" />
          <path d="M842 0V84L796 130V210" strokeWidth="2.2" />
          <path d="M174 560V488L228 436V360" strokeWidth="2.6" />
          <path d="M412 560V492L368 450V380" strokeWidth="2.2" />
          <path d="M690 560V484L740 434V354" strokeWidth="2.6" />
          <path d="M900 560V500L850 452V376" strokeWidth="2.2" />
          <path d="M0 258H176L220 220H352" strokeWidth="3.2" />
          <path d="M1000 286H812L770 244H630" strokeWidth="3.2" />
          <path d="M360 270H450L490 232H566L606 270H698" strokeWidth="2.4" />
        </g>
        <g className="text-foreground" fill="hsl(var(--background))" stroke="currentColor" strokeOpacity="0.38">
          {[145, 326, 534, 726, 174, 382, 570, 760, 142, 342, 575, 780, 218, 468, 670, 902].map((x, i) => (
            <circle key={`node-${x}-${i}`} cx={x} cy={i < 8 ? (i % 2 ? 132 : 86) : i < 12 ? 436 : 488} r={8} strokeWidth="3" />
          ))}
          <circle cx="220" cy="220" r="7" strokeWidth="2.5" />
          <circle cx="770" cy="244" r="7" strokeWidth="2.5" />
          <circle cx="490" cy="232" r="6" strokeWidth="2.5" />
          <circle cx="606" cy="270" r="6" strokeWidth="2.5" />
        </g>
      </svg>
      <div className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glowClass}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--background)/0.08),hsl(var(--background)/0.78)_56%,hsl(var(--background)/0.94))] dark:bg-[radial-gradient(circle_at_center,hsl(var(--background)/0.02),hsl(var(--background)/0.62)_58%,hsl(var(--background)/0.9))]" />
    </div>
  );
};

const ProjectMotif = ({ motif }: { motif: (typeof projectVisuals)[keyof typeof projectVisuals]["motif"] }) => {
  if (motif === "models") {
    return (
      <>
        <span className="absolute right-8 top-8 h-24 w-24 rounded-full border border-background/30" />
        <span className="absolute right-20 top-20 h-3 w-3 rounded-full bg-warm/80" />
        <span className="absolute right-44 top-28 h-px w-32 rotate-[-18deg] bg-background/35" />
        <span className="absolute right-56 top-40 h-4 w-4 rounded-full border border-background/45 bg-background/30" />
      </>
    );
  }

  if (motif === "journey") {
    return (
      <>
        <span className="absolute -right-10 top-8 h-48 w-48 rounded-full border border-background/20" />
        <span className="absolute right-12 top-28 h-28 w-28 rounded-full border border-background/30" />
        <span className="absolute right-40 top-20 h-2 w-32 rotate-12 rounded-full bg-background/30" />
        <span className="absolute right-36 top-16 h-4 w-4 rounded-full bg-warm/75" />
      </>
    );
  }

  if (motif === "dashboard") {
    return (
      <>
        <span className="absolute right-10 top-12 h-24 w-5 rounded-full bg-background/25" />
        <span className="absolute right-20 top-24 h-36 w-5 rounded-full bg-background/35" />
        <span className="absolute right-32 top-6 h-48 w-5 rounded-full bg-background/20" />
        <span className="absolute right-44 top-20 h-20 w-28 rounded-2xl border border-background/25" />
      </>
    );
  }

  if (motif === "city") {
    return (
      <>
        <span className="absolute right-8 top-8 h-36 w-36 rounded-[2rem] border border-background/25 rotate-12" />
        <span className="absolute right-28 top-20 h-2 w-44 rotate-[-22deg] rounded-full bg-background/30" />
        <span className="absolute right-48 top-16 h-5 w-5 rounded-full border-2 border-warm/80 bg-card/50" />
        <span className="absolute right-16 top-40 h-3 w-3 rounded-full bg-warm/80" />
      </>
    );
  }

  return (
    <>
      <span className="absolute -right-16 top-4 h-56 w-56 rounded-full border border-background/20" />
      <span className="absolute right-4 top-24 h-px w-56 rotate-12 bg-background/30" />
      <span className="absolute right-32 top-12 h-px w-44 rotate-[-20deg] bg-background/25" />
      <span className="absolute right-28 top-24 h-4 w-4 rounded-full bg-warm/80" />
    </>
  );
};

const ProjectPageBackdrop = ({ motif }: { motif: (typeof projectVisuals)[keyof typeof projectVisuals]["motif"] }) => {
  if (motif === "models") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-[720px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,hsl(var(--warm)/0.42),transparent_34%),radial-gradient(circle_at_78%_22%,hsl(var(--accent)/0.30),transparent_30%),linear-gradient(180deg,hsl(var(--cream-deep)/0.72),transparent_72%)] dark:bg-[radial-gradient(circle_at_18%_28%,hsl(var(--warm)/0.34),transparent_34%),radial-gradient(circle_at_78%_22%,hsl(var(--accent)/0.24),transparent_30%),linear-gradient(180deg,hsl(var(--card)/0.72),transparent_72%)]" />
        <div className="absolute inset-0 opacity-[0.32] dark:opacity-[0.22] bg-[linear-gradient(90deg,hsl(var(--foreground)/0.26)_1px,transparent_1px),linear-gradient(0deg,hsl(var(--foreground)/0.20)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="absolute right-[12%] top-24 h-44 w-44 rounded-full border border-warm/45 dark:border-warm/30" />
        <div className="absolute right-[26%] top-48 h-px w-72 -rotate-12 bg-warm/45 dark:bg-warm/30" />
        <div className="absolute right-[40%] top-64 h-4 w-4 rounded-full bg-warm/70" />
      </div>
    );
  }

  if (motif === "journey") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-[720px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,hsl(var(--accent)/0.40),transparent_32%),radial-gradient(circle_at_78%_24%,hsl(var(--warm)/0.30),transparent_34%),linear-gradient(180deg,hsl(var(--cream-deep)/0.68),transparent_72%)] dark:bg-[radial-gradient(circle_at_18%_28%,hsl(var(--accent)/0.32),transparent_32%),radial-gradient(circle_at_78%_24%,hsl(var(--warm)/0.24),transparent_34%),linear-gradient(180deg,hsl(var(--card)/0.70),transparent_72%)]" />
        <div className="absolute right-[10%] top-20 h-72 w-72 rounded-full border border-warm/38 dark:border-warm/24" />
        <div className="absolute right-[18%] top-40 h-44 w-44 rounded-full border border-accent/40 dark:border-accent/28" />
        <div className="absolute right-[36%] top-56 h-3 w-56 rotate-12 rounded-full bg-warm/38 dark:bg-warm/24" />
        <div className="absolute right-[38%] top-48 h-4 w-4 rounded-full bg-warm/70" />
      </div>
    );
  }

  if (motif === "dashboard") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-[720px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,hsl(var(--warm)/0.42),transparent_34%),linear-gradient(115deg,transparent,hsl(var(--accent)/0.28),transparent),linear-gradient(180deg,hsl(var(--cream-deep)/0.70),transparent_72%)] dark:bg-[radial-gradient(circle_at_74%_24%,hsl(var(--warm)/0.34),transparent_34%),linear-gradient(115deg,transparent,hsl(var(--accent)/0.20),transparent),linear-gradient(180deg,hsl(var(--card)/0.72),transparent_72%)]" />
        <div className="absolute right-[12%] top-28 flex items-end gap-5 opacity-70">
          <span className="h-24 w-8 rounded-t-full bg-warm/55 dark:bg-warm/38" />
          <span className="h-40 w-8 rounded-t-full bg-accent/45 dark:bg-accent/32" />
          <span className="h-60 w-8 rounded-t-full bg-warm/42 dark:bg-warm/28" />
          <span className="h-32 w-8 rounded-t-full bg-background/35 dark:bg-background/20" />
        </div>
        <div className="absolute right-[26%] top-28 h-44 w-64 rounded-[2rem] border border-warm/36 dark:border-warm/20" />
      </div>
    );
  }

  if (motif === "city") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-[720px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,hsl(var(--warm)/0.38),transparent_34%),radial-gradient(circle_at_82%_28%,hsl(var(--accent)/0.30),transparent_30%),linear-gradient(180deg,hsl(var(--cream-deep)/0.70),transparent_72%)] dark:bg-[radial-gradient(circle_at_18%_34%,hsl(var(--warm)/0.30),transparent_34%),radial-gradient(circle_at_82%_28%,hsl(var(--accent)/0.22),transparent_30%),linear-gradient(180deg,hsl(var(--card)/0.72),transparent_72%)]" />
        <div className="absolute inset-0 opacity-[0.30] dark:opacity-[0.22] bg-[linear-gradient(45deg,hsl(var(--foreground)/0.26)_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--foreground)/0.20)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute right-[12%] top-28 h-56 w-56 rotate-12 rounded-[2.5rem] border border-warm/34 dark:border-warm/20" />
        <div className="absolute right-[22%] top-44 h-2 w-80 -rotate-[18deg] rounded-full bg-warm/42 dark:bg-warm/26" />
        <div className="absolute right-[40%] top-52 h-5 w-5 rounded-full border-2 border-warm/75 bg-background/30" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 h-[720px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,hsl(var(--accent)/0.42),transparent_34%),radial-gradient(circle_at_20%_34%,hsl(var(--warm)/0.30),transparent_30%),linear-gradient(180deg,hsl(var(--cream-deep)/0.70),transparent_72%)] dark:bg-[radial-gradient(circle_at_76%_22%,hsl(var(--accent)/0.34),transparent_34%),radial-gradient(circle_at_20%_34%,hsl(var(--warm)/0.23),transparent_30%),linear-gradient(180deg,hsl(var(--card)/0.72),transparent_72%)]" />
      <div className="absolute right-[8%] top-20 h-72 w-72 rounded-full border border-warm/34 dark:border-warm/20" />
      <div className="absolute right-[10%] top-56 h-px w-96 rotate-12 bg-warm/42 dark:bg-warm/25" />
      <div className="absolute right-[20%] top-36 h-px w-72 -rotate-[18deg] bg-accent/34 dark:bg-accent/22" />
      <div className="absolute right-[32%] top-48 h-4 w-4 rounded-full bg-warm/70" />
    </div>
  );
};

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
  const visual = projectVisuals[project.slug as keyof typeof projectVisuals] ?? projectVisuals["ai-model-selection"];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Header />
      <ProjectPageBackdrop motif={visual.motif} />
      <main className="relative pt-28 md:pt-36">
        <section className="container-editorial relative pb-14 md:pb-20">
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
                <div className={`relative min-h-[420px] overflow-hidden rounded-2xl ${visual.panel} p-6 md:p-8`}>
                  <CircuitBackground accent={visual.circuitAccent} />
                  <div aria-hidden className={`absolute inset-0 opacity-20 mix-blend-overlay ${visual.pattern}`} />
                  <ProjectMotif motif={visual.motif} />
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
