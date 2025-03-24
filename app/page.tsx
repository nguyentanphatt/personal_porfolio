import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import ProjectSection from "@/sections/ProjectSection";
import Tape from "@/sections/Tape";
import TechSection from "@/sections/TechSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="tech">
        <TechSection />
      </section>
      <Tape />
      <section id="project">
        <ProjectSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
