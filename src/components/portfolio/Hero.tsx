import { motion } from "framer-motion";
import { ReactNode } from "react";
import profileImage from "@/assets/khang-profile.png";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

const MagneticButton = ({ children, href, variant = "solid" }: { children: ReactNode; href: string; variant?: "solid" | "ghost" }) => {
  const base = "inline-flex items-center px-6 py-3 rounded-full text-sm transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border border-border hover:bg-secondary";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden"
    >
      <div className="container-editorial">
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-2"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.08] tracking-normal"
            >
              <span className="italic text-warm whitespace-nowrap">Khang Nguyen.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed"
            >
              Future Data Scientist · ML Builder · Business Strategy Thinker.
              I design data-driven systems that turn raw data into insight,
              strategy, and smarter decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-10 flex items-center gap-4"
            >
              <MagneticButton href="#projects">See my work</MagneticButton>
              <MagneticButton href="#contact" variant="ghost">Get in touch</MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { n: "10M+", l: "rows analyzed" },
                { n: "1.5", l: "yrs in data" },
                { n: "∞", l: "questions asked" },
              ].map((s) => (
                <div key={s.l} className="border-l border-border/70 pl-4">
                  <div className="font-serif text-2xl md:text-3xl text-warm">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={quickReveal}
            className="lg:col-span-5 relative mx-auto w-full max-w-[360px] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 bg-cream-deep shadow-[0_30px_80px_-45px_hsl(var(--foreground)/0.45)]">
              <img
                src={profileImage}
                alt="Khang Nguyen"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <span
              aria-hidden
              className="absolute -left-4 -bottom-4 px-3 py-1.5 rounded-full bg-foreground text-background text-[10px] uppercase tracking-[0.25em]"
            >
              Available · 2026
            </span>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
