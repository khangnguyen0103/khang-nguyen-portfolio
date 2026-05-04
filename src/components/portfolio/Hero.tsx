import { motion } from "framer-motion";

const headline = "I'm Khang Nguyen,";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden bg-background">
      <div className="container-editorial">
        <div className="max-w-4xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-4"
          >
            Hi,
          </motion.p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
            {headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block mr-3 ${word === "Nguyen," ? "italic text-warm" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            Future Data Scientist · Machine Learning Builder · Business Strategy Thinker
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-6 text-foreground/85 max-w-lg leading-relaxed"
          >
            I design data-driven systems that transform raw data into insight,
            strategy, and smarter decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm hover:bg-foreground/85 transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
