import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import AboutCards from "@/components/portfolio/AboutCards";
import AboutMe from "@/components/portfolio/AboutMe";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import Marquee from "@/components/portfolio/Marquee";
import SectionIndicator from "@/components/portfolio/SectionIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <SectionIndicator />
      <Header />
      <main>
        <Hero />
        <div className="relative bg-cream-deep/20 dark:bg-card/55">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden dark:block bg-[linear-gradient(180deg,hsl(var(--card)/0.15),hsl(var(--background)/0.18)_38%,hsl(var(--card)/0.28))]"
          />
          <div className="relative">
            <AboutCards />
            <Marquee />
            <AboutMe />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
