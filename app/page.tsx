"use client"
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ProjectSection from "@/sections/ProjectSection";
import Tape from "@/sections/Tape";
import TechSection from "@/sections/TechSection";
import dynamic from "next/dynamic";

const NavbarWithNoSSR = dynamic(()=> import("@/sections/Navbar"), {ssr: false})

export default function Home() {
  return (
    <div className="">
      <NavbarWithNoSSR />
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
