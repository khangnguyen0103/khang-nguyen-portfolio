const words = ["Data", "Machine Learning", "Strategy", "Python", "SQL", "Insight", "Analytics", "Design", "Curiosity"];

const Marquee = () => {
  const items = [...words, ...words];
  return (
    <section aria-hidden className="py-10 md:py-14 border-y border-border/60 overflow-hidden bg-cream-deep/40">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {items.map((w, i) => (
          <span key={i} className="font-serif italic text-4xl md:text-6xl text-foreground/80">
            {w} <span className="text-warm">·</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
