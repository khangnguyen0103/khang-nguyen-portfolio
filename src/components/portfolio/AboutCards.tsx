import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

const cards = [
  {
    title: "My Approach to Work",
    body:
      "I bring together data science, machine learning, and business thinking to tackle real-world challenges. My process begins with defining the right questions, working through the data pipeline, and building models that deliver clear, actionable outcomes.",
  },
  {
    title: "My Roles",
    body: "Data Scientist · Data Analyst · Business Analyst",
  },
  {
    title: "Education",
    body: "Pursuing a Bachelor's Degree in Data Science — Seattle Pacific University",
  },
];

const AboutCards = () => {
  return (
    <section className="about-cards-section py-20 md:py-28 relative">
      <div className="about-cards-backdrop fixed inset-0 z-30 bg-background/40 backdrop-blur-md pointer-events-none" />

      <div className="container-editorial grid md:grid-cols-3 gap-6 md:gap-8 relative">
        {cards.map((c, i) => {
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -24px 0px" }}
              transition={quickReveal}
              style={{ "--hover-shift": `${(1 - i) * 108}%` } as CSSProperties}
              className="about-card bg-cream-deep rounded-2xl p-8 border border-border/60 hover:border-warm/50 origin-center cursor-pointer relative z-10"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-warm mb-5">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl mb-4 leading-snug">{c.title}</h3>
              <p className="text-foreground/75 leading-relaxed text-[0.95rem]">
                {c.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutCards;
