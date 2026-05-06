import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    n: "01",
    title: "AI Model Selection System",
    tag: "Machine Learning",
    description:
      "A machine learning idea that learns from metadata about datasets and recommends which algorithm may fit best — Logistic Regression, KNN, Decision Tree, Random Forest, or clustering.",
    accent: "from-[hsl(var(--warm)/0.4)] to-[hsl(var(--accent)/0.3)]",
  },
  {
    n: "02",
    title: "DataFest Patient Journey",
    tag: "Healthcare · Analytics",
    description:
      "Worked with 10M+ healthcare-style observations. Built tables, regressions, and visual insights to identify gaps in the patient journey.",
    accent: "from-[hsl(var(--accent)/0.4)] to-[hsl(var(--warm-soft)/0.4)]",
  },
  {
    n: "03",
    title: "Business Dashboard + ML Insight",
    tag: "Dashboards · Strategy",
    description:
      "A dashboard that turns raw CSV/database data into visual insight, variable importance, and strategy recommendations.",
    accent: "from-[hsl(var(--warm-soft)/0.45)] to-[hsl(var(--warm)/0.4)]",
  },
];

const ProjectCard = ({ p, i }: { p: typeof projects[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.1]);
  const numX = useTransform(scrollYProgress, [0, 0.5], [120, 0]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, ease: easeOut }}
      className="group relative overflow-hidden bg-card rounded-3xl border border-border/60 transition-all duration-500 hover:border-warm/50 hover:shadow-[0_50px_100px_-40px_hsl(var(--warm)/0.35)]"
    >
      <div className="grid md:grid-cols-12 gap-0 md:gap-6 items-stretch">
        {/* Visual panel */}
        <div className={`relative md:col-span-5 aspect-[5/4] md:aspect-auto overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
          <motion.div
            style={{ scale: imgScale }}
            className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          <motion.span
            style={{ x: numX }}
            className="absolute bottom-4 right-6 font-serif italic text-[7rem] md:text-[10rem] leading-none text-foreground/15 select-none pointer-events-none"
          >
            {p.n}
          </motion.span>
        </div>

        {/* Text panel */}
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
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm self-start relative pb-1"
          >
            <span className="relative">
              View project
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-warm origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
      <span className="absolute left-0 bottom-0 h-px w-0 bg-warm transition-all duration-700 group-hover:w-full" />
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
            03 / Featured
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
