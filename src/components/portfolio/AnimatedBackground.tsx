import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, hsl(var(--warm) / 0.45), transparent 60%)" }}
      />
      <motion.div
        animate={{ x: [0, -100, 60, 0], y: [0, 80, -40, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
