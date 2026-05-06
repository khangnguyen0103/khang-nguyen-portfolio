import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

const buttons = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/khang-nguyen-1a97aa2b0" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: FileText, label: "Resume", href: `${import.meta.env.BASE_URL}resume-tran-tuan-khang-nguyen.pdf` },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 border-t border-border/60">
      <div className="container-editorial text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          className="text-xs uppercase tracking-[0.25em] text-warm mb-5"
        >
          — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          className="font-serif text-4xl md:text-6xl leading-tight"
        >
          Let's build something <span className="italic text-warm">meaningful</span>.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          href="mailto:nkhang.work@gmail.com"
          className="mt-10 inline-flex items-center gap-3 text-lg md:text-xl font-serif underline decoration-warm/60 underline-offset-8 hover:decoration-foreground transition-colors"
        >
          <Mail size={20} />
          nkhang.work@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={quickReveal}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target={b.href.startsWith("http") ? "_blank" : undefined}
              rel={b.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <b.icon size={16} />
              {b.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
