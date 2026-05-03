import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border/60">
      <div className="container-editorial grid md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-warm mb-4">
            — About me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Building <span className="italic">useful</span> things with data.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-7 md:col-start-6 space-y-6 text-foreground/80 leading-relaxed text-[1.05rem]"
        >
          <p>
            Khang Nguyen is a future data scientist focused on building practical
            AI and data systems. I enjoy working with regression models,
            classification, clustering, dashboards, and business strategy. My
            goal is to create tools that help people understand data clearly and
            make better decisions.
          </p>
          <p>
            I like connecting technical models with real-world impact. Whether I
            am building a machine learning pipeline, analyzing millions of
            observations, or creating visual dashboards, I care about making the
            result useful, readable, and actionable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
