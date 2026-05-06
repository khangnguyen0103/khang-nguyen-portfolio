const AnimatedBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-60"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--warm) / 0.5), transparent 60%)" }}
        />
      </div>
      <div
        className="absolute top-1/3 -right-40 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-50"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.45), transparent 60%)" }}
        />
      </div>
      <div
        className="absolute bottom-0 left-1/3 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--warm-soft) / 0.6), transparent 60%)" }}
        />
      </div>
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
