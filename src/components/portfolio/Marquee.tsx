const words = [
  "Insight",
  "Analytics",
  "Design",
  "Curiosity",
  "Data",
  "Machine Learning",
];

const Marquee = () => {
  return (
    <section className="py-10 md:py-14 border-y border-border/60 bg-cream-deep/40">
      <div className="container-editorial">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 md:gap-x-7">
          {words.map((word, i) => (
            <div key={word} className="flex items-center gap-x-5 md:gap-x-7">
              <span className="font-serif italic text-3xl md:text-5xl leading-none text-foreground/80">
                {word}
              </span>
              {i < words.length - 1 && (
                <span className="h-2 w-2 rounded-full bg-warm/70" aria-hidden />
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm md:text-base leading-relaxed text-muted-foreground">
          Turning questions into clean analysis, useful models, and decisions people can trust.
        </p>
      </div>
    </section>
  );
};

export default Marquee;
