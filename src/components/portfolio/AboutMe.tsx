import { motion } from "framer-motion";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border/60">
      <div className="container-editorial grid md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          className="md:col-span-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm mb-4">
            — About me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Contributing <span className="italic">meaningful</span> things to this world.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          className="md:col-span-7 md:col-start-6 space-y-6 text-foreground/80 leading-relaxed text-[1.05rem]"
        >
          <p>
            I want to contribute something meaningful to this world. As technology
            continues to reshape how we live and work, I want to be a part of
            that change — not just as an observer, but as someone who builds
            things that matter.
          </p>
          <p>
            I believe data is one of the most powerful tools of our generation.
            Behind every number is a story, and behind every insight is an
            opportunity to make something better — a business, a community, or
            even just someone's day.
          </p>
          <p>
            Born in Ho Chi Minh City, I am a passionate data scientist with a
            love for sports, travel, and time with family. I work in R, Python,
            and modern data tools, and I measure success by how useful the
            outcome is to the person who needs it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
