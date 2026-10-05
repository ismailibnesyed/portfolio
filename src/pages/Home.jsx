import PageLayout from "../components/PageLayout";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Qualification from "../components/Qualification";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <PageLayout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-lg focus:bg-card focus:px-4 focus:py-3 focus:text-main">
        Skip to content
      </a>
      <main>
        <Hero />
        <Technologies />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Reviews />
        <Contact />
        <About />
      </main>
    </PageLayout>
  );
}
