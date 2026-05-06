import { motion } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";
import profileImage from "@/assets/khang-profile.png";

const quickReveal = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

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
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      <div className="container-editorial">
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-4"
            >
              Hi,
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.08] tracking-normal"
            >
              I'm <span className="italic text-warm whitespace-nowrap">Khang Nguyen,</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
            >
              Future Data Scientist · Machine Learning Builder · Business Strategy Thinker
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-6 text-foreground/85 max-w-lg leading-relaxed"
            >
              I design data-driven systems that transform raw data into insight,
              strategy, and smarter decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={quickReveal}
              className="mt-5 text-foreground/75 max-w-2xl leading-relaxed"
            >
              Born in Ho Chi Minh City, Vietnam, I am a passionate data scientist
              with a love for sports, travel, and cherishing time with family.
              With a keen eye for detail and a robust background in business, I
              thrive on turning complex data into meaningful insights and
              innovative solutions. Over the years, I have honed my expertise in R
              and Python alongside a variety of modern data tools and technologies,
              enabling me to lead impactful projects and guide aspiring analysts.
              With a dedication to continuous learning and a commitment to
              excellence, I transform raw data into scalable, efficient, and
              actionable results.
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
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={quickReveal}
            className="lg:col-span-5 relative mx-auto w-full max-w-[360px] lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 bg-cream-deep shadow-[0_30px_80px_-45px_hsl(var(--foreground)/0.35)]">
              <img
                src={profileImage}
                alt="Khang Nguyen"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
