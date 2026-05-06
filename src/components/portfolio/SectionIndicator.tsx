import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const SectionIndicator = () => {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + window.innerHeight / 2;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative flex items-center justify-end gap-3"
        >
          <span
            className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
              active === s.id
                ? "opacity-100 text-warm"
                : "opacity-0 group-hover:opacity-70 text-foreground"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "w-3 h-3 bg-warm"
                : "w-1.5 h-1.5 bg-foreground/30 group-hover:bg-foreground/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default SectionIndicator;
