import { motion } from "framer-motion";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

const cards = [
  {
    title: "My Approach",
    body:
      "I bring together data science, machine learning, and business thinking. My process starts with the right questions, works through the pipeline, and ends in clear, actionable outcomes.",
  },
  {
    title: "My Roles",
    body: "Data Scientist · Data Analyst · Business Analyst — comfortable across the stack from raw data to recommendation.",
  },
  {
    title: "Education",
    body: "Pursuing a Bachelor's Degree in Data Science at Seattle Pacific University.",
  },
];

const AboutCards = () => {
  return (
    <section id="approach" className="py-20 md:py-28 relative">
      <div className="container-editorial grid md:grid-cols-3 gap-6 md:gap-10 relative">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -24px 0px" }}
            transition={quickReveal}
            className="group relative"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-2 md:-left-4 font-serif italic text-[7rem] md:text-[9rem] leading-none text-warm/15 group-hover:text-warm/30 transition-colors duration-200 select-none"
            >
              0{i + 1}
            </span>

            <div className="relative h-full bg-card rounded-2xl p-8 border border-border/60 group-hover:border-warm/60 transition-colors duration-200 overflow-hidden shadow-[0_20px_50px_-30px_hsl(var(--foreground)/0.2)]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-warm mb-5">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-[0.95rem]">
                {c.body}
              </p>
              <span className="absolute left-0 bottom-0 h-px w-0 bg-warm transition-all duration-200 group-hover:w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
