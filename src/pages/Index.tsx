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
        <AboutCards />
        <Marquee />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
