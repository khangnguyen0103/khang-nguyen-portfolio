import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import AboutCards from "@/components/portfolio/AboutCards";
import AboutMe from "@/components/portfolio/AboutMe";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutCards />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
