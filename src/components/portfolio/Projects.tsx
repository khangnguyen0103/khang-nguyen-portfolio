import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "AI Model Selection System",
    tag: "Machine Learning",
    description:
      "A machine learning idea that learns from metadata about datasets and recommends which algorithm may fit best — Logistic Regression, Linear Regression, KNN, Decision Tree, Random Forest, or clustering methods.",
  },
  {
    n: "02",
    title: "DataFest Patient Journey Analysis",
    tag: "Healthcare · Analytics",
    description:
      "Worked with large healthcare-style datasets with more than 10 million observations. Built tables, graphs, regression analysis, and visual insights to help identify gaps in the patient journey.",
  },
  {
    n: "03",
    title: "Business Dashboard with ML Insight",
    tag: "Dashboards · Strategy",
    description:
      "A dashboard concept that turns raw CSV/database data into visual insight, variable importance, and strategy recommendations for business decision-making.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/60">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-warm mb-4">
              — Selected work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Projects
            </h2>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-card rounded-2xl border border-border/60 p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_hsl(var(--warm)/0.35)] hover:border-warm/50"
            >
              <span className="absolute left-0 bottom-0 h-px w-0 bg-warm transition-all duration-700 group-hover:w-full" />
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 font-serif text-3xl text-warm transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {p.n}
                </div>
                <div className="md:col-span-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    {p.tag}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-4">
                    {p.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed max-w-2xl">
                    {p.description}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
                  >
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
