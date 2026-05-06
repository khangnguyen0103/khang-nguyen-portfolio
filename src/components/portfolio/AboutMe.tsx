import { motion } from "framer-motion";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

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
            that change, not just as an observer, but as someone who builds
            things that matter.
          </p>
          <p>
            I believe data is one of the most powerful tools of our generation.
            Behind every number is a story, and behind every insight is an
            opportunity to make something better - a business, a community, or
            even just someone's day. That belief is what pushes me to keep
            learning, keep building, and keep asking better questions.
          </p>
          <p>
            I hold myself to a personal obligation - to not just exist in this
            world, but to add to it. Every project I take on, every problem I dig
            into, and every result I deliver is a small step toward that. I don't
            measure success by how complex the model is, but by how useful the
            outcome is to the person who needs it.
          </p>
          <p>
            Outside of work, I find inspiration in sports, travel, and helping
            people around me. Those experiences remind me that the best solutions
            are always built with people in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
