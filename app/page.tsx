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
      <Hero />
      <TechSection/>
      <Tape />
      <ProjectSection />
      <Footer />
    </div>
  );
}
