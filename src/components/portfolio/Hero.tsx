import { motion } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";

const headline = "I'm Khang Nguyen,";

const MagneticButton = ({ children, href, variant = "solid" }: { children: ReactNode; href: string; variant?: "solid" | "ghost" }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  const base = "inline-flex items-center px-6 py-3 rounded-full text-sm transition-colors duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border border-border hover:bg-secondary";
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`${base} ${styles}`}
      style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), background-color 0.3s" }}
    >
      {children}
    </a>
  );
};

const Hero = () => {
  const letters = headline.split("");
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
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
            {letters.map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom" style={{ lineHeight: 1.05 }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${i >= letters.indexOf("N") && i < letters.indexOf("N") + 7 ? "italic text-warm" : ""}`}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            Future Data Scientist · Machine Learning Builder · Business Strategy Thinker
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-6 text-foreground/85 max-w-lg leading-relaxed"
          >
            I design data-driven systems that transform raw data into insight,
            strategy, and smarter decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <MagneticButton href="#projects">See my work</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Get in touch</MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
