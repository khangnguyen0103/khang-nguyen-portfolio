import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useRef } from "react";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const btn = btnRef.current;
    if (!btn || typeof document === "undefined") {
      toggle();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggle();
      return;
    }

    // Circular wipe transition originating from the toggle.
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 9998; pointer-events: none;
      background: hsl(var(--background));
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 600ms cubic-bezier(0.22,1,0.36,1);
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    });
    setTimeout(() => {
      toggle();
      // fade overlay out after theme has switched
      overlay.style.transition = "opacity 250ms ease-out";
      requestAnimationFrame(() => {
        overlay.style.opacity = "0";
      });
      setTimeout(() => overlay.remove(), 350);
    }, 320);
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      aria-label="Toggle theme"
      className="relative w-14 h-7 rounded-full border border-border bg-secondary/60 hover:bg-secondary transition-colors flex items-center px-1 overflow-hidden"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-5 h-5 rounded-full bg-foreground text-background flex items-center justify-center ${
          isDark ? "ml-auto" : ""
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            {isDark ? <Moon size={12} /> : <Sun size={12} />}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
