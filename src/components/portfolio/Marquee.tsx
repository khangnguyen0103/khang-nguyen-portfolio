const rowA = ["Insight", "Analytics", "Curiosity", "Data", "Machine Learning", "Strategy"];
const rowB = ["Python", "R", "SQL", "Storytelling", "Models", "Decisions"];

const Row = ({ words, reverse = false, italic = false }: { words: string[]; reverse?: boolean; italic?: boolean }) => (
  <div className="marquee-track group relative flex overflow-hidden">
    <div
      className={`flex shrink-0 items-center gap-10 md:gap-14 pr-10 md:pr-14 ${
        reverse ? "animate-[marquee-r_38s_linear_infinite]" : "animate-[marquee-l_32s_linear_infinite]"
      } group-hover:[animation-play-state:paused]`}
    >
      {[...words, ...words, ...words].map((w, i) => (
        <span key={i} className="flex items-center gap-10 md:gap-14">
          <span
            className={`font-serif ${italic ? "italic" : ""} text-4xl md:text-6xl leading-none text-foreground/85 whitespace-nowrap`}
          >
            {w}
          </span>
          <span className="h-2 w-2 rounded-full bg-warm/70 shrink-0" aria-hidden />
        </span>
      ))}
    </div>
  </div>
);

const Marquee = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/60 bg-cream-deep/40 overflow-hidden">
      <div className="space-y-3 md:space-y-5">
        <Row words={rowA} italic />
        <Row words={rowB} reverse />
      </div>
      <p className="container-editorial mx-auto mt-8 max-w-2xl text-center text-sm md:text-base leading-relaxed text-muted-foreground">
        Turning questions into clean analysis, useful models, and decisions people can trust.
      </p>
    </section>
  );
};

export default Marquee;
