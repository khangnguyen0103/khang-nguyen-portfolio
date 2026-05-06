import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -180]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 60);
      my.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1, x: mx }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-60"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--warm) / 0.5), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: y2, x: my }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-50"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.45), transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 3000], [0, 100]) }}
        className="absolute bottom-0 left-1/3 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--warm-soft) / 0.6), transparent 60%)" }}
        />
      </motion.div>
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
