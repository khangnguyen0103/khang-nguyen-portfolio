const skillGroups = [
  {
    title: "Analyze",
    skills: ["Insight", "Analytics", "Statistics", "Storytelling"],
  },
  {
    title: "Build",
    skills: ["Data", "Machine Learning", "Python", "R", "Excel", "Power BI", "Tableau"],
  },
  {
    title: "Decide",
    skills: ["Design", "Curiosity", "Strategy", "Dashboards"],
  },
];

const Marquee = () => {
  return (
    <section className="py-14 md:py-20 border-y border-border/60 bg-cream-deep/40">
      <div className="container-editorial">
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border/60 bg-card/70 p-6"
            >
              <h2 className="font-serif italic text-3xl text-warm">
                {group.title}
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/70 px-3 py-1.5 text-sm text-foreground/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl border-t border-border/70 pt-7 text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-warm">
            Working Method
          </p>
          <p className="mt-3 font-serif text-2xl md:text-4xl leading-tight text-foreground/85">
            From messy questions to{" "}
            <span className="italic text-warm">clear analysis</span>, useful
            models, and decisions people can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
