import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "My Approach to Work",
    body:
      "I combine data science, machine learning, business thinking, and visualization to solve real problems. My process starts with understanding the question, cleaning and exploring the data, choosing the right model, and turning the results into practical decisions.",
  },
  {
    title: "My Roles",
    body: "Data Scientist, ML Builder, Dashboard Designer, Business Problem Solver.",
  },
  {
    title: "Education",
    body: "Bachelor's Degree in Computer Science — Seattle Pacific University.",
  },
];

const AboutCards = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 relative">
      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/40 backdrop-blur-md pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="container-editorial grid md:grid-cols-3 gap-6 md:gap-8 relative">
        {cards.map((c, i) => {
          const isActive = hovered === i;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              animate={
                isActive
                  ? {
                      scale: 1.6,
                      x: `${(1 - i) * 108}%`,
                      zIndex: 50,
                      boxShadow: "0 30px 80px -20px hsl(var(--foreground) / 0.25)",
                    }
                  : { scale: 1, x: "0%", zIndex: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }
              }
              className="bg-cream-deep rounded-2xl p-8 border border-border/60 hover:border-warm/50 origin-center cursor-pointer relative"
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
