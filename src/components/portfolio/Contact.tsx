import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, Check, Copy } from "lucide-react";
import { useState } from "react";
import ScrambleText from "./ScrambleText";

const easeOut = [0.22, 1, 0.36, 1] as const;

const buttons = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/khang-nguyen-1a97aa2b0" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: FileText, label: "Resume", href: `${import.meta.env.BASE_URL}resume-tran-tuan-khang-nguyen.pdf` },
];

const Contact = () => {
  const [inView, setInView] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "nkhang.work@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-border/60">
      <div className="container-editorial text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-xs uppercase tracking-[0.25em] text-warm mb-5"
        >
          — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-serif text-4xl md:text-6xl leading-tight"
        >
          Let's build something{" "}
          <span className="italic text-warm">
            <ScrambleText text="meaningful" trigger={inView} />
          </span>
          .
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          onClick={copyEmail}
          className="group mt-12 inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border bg-card hover:border-warm/60 hover:bg-cream-deep transition-all"
        >
          <Mail size={18} className="text-warm" />
          <span className="text-base md:text-lg font-serif">{email}</span>
          <span className="ml-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {copied ? (
              <>
                <Check size={12} /> copied
              </>
            ) : (
              <>
                <Copy size={12} /> copy
              </>
            )}
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
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
