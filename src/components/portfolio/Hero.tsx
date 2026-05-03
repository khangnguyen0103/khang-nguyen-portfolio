import { motion } from "framer-motion";
import heroShape from "@/assets/hero-shape.png";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      <div className="container-editorial grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-4"
          >
            Hi,
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
          >
            I'm Khang <br />
            <span className="italic text-warm">Nguyen,</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            Future Data Scientist · Machine Learning Builder · Business Strategy Thinker
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-foreground/85 max-w-lg leading-relaxed"
          >
            I design data-driven systems that transform raw data into insight,
            strategy, and smarter decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="md:col-span-5 relative flex justify-center"
        >
          <div className="absolute -inset-10 bg-warm/10 blur-3xl rounded-full" />
          <img
            src={heroShape}
            alt=""
            width={520}
            height={520}
            className="relative w-full max-w-md animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
