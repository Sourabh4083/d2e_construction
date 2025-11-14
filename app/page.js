import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solution from "./components/Solution";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solution />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
