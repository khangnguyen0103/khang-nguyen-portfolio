import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const trail1 = useRef<HTMLDivElement>(null);
  const trail2 = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let t1x = 0, t1y = 0;
    let t2x = 0, t2y = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
    };
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      t1x += (rx - t1x) * 0.12;
      t1y += (ry - t1y) * 0.12;
      t2x += (t1x - t2x) * 0.1;
      t2y += (t1y - t2y) * 0.1;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (trail1.current) trail1.current.style.transform = `translate(${t1x}px, ${t1y}px)`;
      if (trail2.current) trail2.current.style.transform = `translate(${t2x}px, ${t2y}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={trail2} className="pointer-events-none fixed top-0 left-0 z-[97] -ml-1 -mt-1 w-2 h-2 rounded-full bg-warm/30 mix-blend-difference" />
      <div ref={trail1} className="pointer-events-none fixed top-0 left-0 z-[98] -ml-1 -mt-1 w-2 h-2 rounded-full bg-warm/60 mix-blend-difference" />
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[100] -ml-1 -mt-1 w-2 h-2 rounded-full bg-foreground mix-blend-difference" />
      <div
        ref={ring}
        className={`pointer-events-none fixed top-0 left-0 z-[99] rounded-full border border-foreground/60 mix-blend-difference transition-[width,height,margin] duration-200 ${
          hover ? "w-12 h-12 -ml-6 -mt-6" : "w-8 h-8 -ml-4 -mt-4"
        }`}
      />
    </>
  );
};

export default Cursor;
