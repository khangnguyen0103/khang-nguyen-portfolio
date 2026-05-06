import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

const ProjectCard = ({ p, i }: { p: Project; i: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -24px 0px" }}
      transition={quickReveal}
      className="group relative overflow-hidden bg-card rounded-3xl border border-border/60 transition-all duration-200 hover:border-warm/50 hover:shadow-[0_50px_100px_-40px_hsl(var(--warm)/0.35)]"
    >
      <div className="grid md:grid-cols-12 gap-0 md:gap-6 items-stretch">
        <div className={`relative md:col-span-5 aspect-[5/4] md:aspect-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          <span
            className="absolute bottom-4 right-6 font-serif italic text-[7rem] md:text-[10rem] leading-none text-foreground/15 select-none pointer-events-none"
          >
            {p.n}
          </span>
        </div>

        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-warm mb-4">
            {p.tag}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl leading-snug mb-5">
            {p.title}
          </h3>
          <p className="text-foreground/75 leading-relaxed max-w-2xl mb-8">
            {p.description}
          </p>
          <Link
            to={`/projects/${p.slug}`}
            className="inline-flex items-center gap-2 text-sm self-start relative pb-1"
          >
            <span className="relative">
              View project
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-100 transition-transform duration-200 group-hover:scale-x-0" />
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-warm origin-right scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
      <span className="absolute left-0 bottom-0 h-px w-0 bg-warm transition-all duration-200 group-hover:w-full" />
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/60">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-warm mb-4">
              — Selected work
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Projects, <span className="italic text-warm">in motion</span>.
            </h2>
          </div>
          <span className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
            05 / Featured
          </span>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
