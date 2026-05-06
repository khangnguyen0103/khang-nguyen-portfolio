import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const ScrambleText = ({ text, className = "", trigger = true }: ScrambleTextProps) => {
  const [output, setOutput] = useState(text);
  const frame = useRef(0);
  const raf = useRef<number>();

  useEffect(() => {
    if (!trigger) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOutput(text);
      return;
    }
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    const oldText = "";
    const length = Math.max(oldText.length, text.length);
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 30) + 10;
      queue.push({ from, to, start, end });
    }
    frame.current = 0;
    const update = () => {
      let out = "";
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frame.current >= q.end) {
          complete++;
          out += q.to;
        } else if (frame.current >= q.start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          out += q.char;
        } else {
          out += q.from;
        }
      }
      setOutput(out);
      if (complete === queue.length) return;
      frame.current++;
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, trigger]);

  return <span className={className}>{output}</span>;
};

export default ScrambleText;
