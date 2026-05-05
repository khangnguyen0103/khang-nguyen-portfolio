import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroShape from "@/assets/hero-shape.png";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-warm/60 border-dashed"
            />
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-cream-deep">
              <img src={heroShape} alt="Khang" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="font-serif text-lg tracking-tight">Khang Nguyen</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-foreground/80 hover:text-foreground hover:-translate-y-0.5 transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/60 bg-background"
          >
            <nav className="container-editorial flex flex-col py-6 gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-serif"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
