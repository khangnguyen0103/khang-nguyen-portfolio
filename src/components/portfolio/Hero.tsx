import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent, ReactNode } from "react";
import profileImage from "@/assets/khang-profile.png";
import SplitText from "./SplitText";

const easeOut = [0.22, 1, 0.36, 1] as const;

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

const ParallaxPortrait = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.figure
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
      className="lg:col-span-5 relative mx-auto w-full max-w-[360px] lg:max-w-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 bg-cream-deep shadow-[0_30px_80px_-45px_hsl(var(--foreground)/0.45)]">
        <img
          src={profileImage}
          alt="Khang Nguyen"
          className="h-full w-full object-cover object-center"
          style={{ transform: "translateZ(40px)" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: useTransform(
              [glowX, glowY] as never,
              ([gx, gy]: string[]) =>
                `radial-gradient(380px circle at ${gx} ${gy}, hsl(var(--warm) / 0.35), transparent 60%)`
            ),
            mixBlendMode: "soft-light",
          }}
        />
      </div>
      <motion.span
        aria-hidden
        className="absolute -left-4 -bottom-4 px-3 py-1.5 rounded-full bg-foreground text-background text-[10px] uppercase tracking-[0.25em]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, ease: easeOut }}
      >
        Available · 2026
      </motion.span>
    </motion.figure>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const chips = ["Data Science", "Machine Learning", "Strategy", "Storytelling"];

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Floating background chips */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            className="absolute font-serif italic text-foreground/[0.04] text-7xl md:text-9xl whitespace-nowrap select-none"
            style={{
              top: `${15 + i * 18}%`,
              left: `${(i % 2 === 0 ? 5 : 55) + i * 3}%`,
            }}
            animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
            transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {c}
          </motion.span>
        ))}
      </div>

      <motion.div
        style={{ y: headlineY, scale: headlineScale, opacity: fade }}
        className="container-editorial"
      >
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-2"
            >
              Hi, I'm
            </motion.p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight">
              <SplitText text="Khang" italic className="text-warm" delay={0.15} />
              <br />
              <SplitText text="Nguyen." delay={0.45} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 1.1 }}
              className="mt-8 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed"
            >
              Future Data Scientist · ML Builder · Business Strategy Thinker.
              I design data-driven systems that turn raw data into insight,
              strategy, and smarter decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 1.3 }}
              className="mt-10 flex items-center gap-4"
            >
              <MagneticButton href="#projects">See my work</MagneticButton>
              <MagneticButton href="#contact" variant="ghost">Get in touch</MagneticButton>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut, delay: 1.5 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { n: "10M+", l: "rows analyzed" },
                { n: "3+", l: "yrs in data" },
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

          <ParallaxPortrait />
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
