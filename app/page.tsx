"use client";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import ProjectSection from "@/sections/ProjectSection";
import Tape from "@/sections/Tape";
import TechSection from "@/sections/TechSection";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const sections = [
    { id: "home", name: "Home", ref: homeRef, component: <Hero /> },
    { id: "tech", name: "My Tech", ref: techRef, component: <TechSection /> },
    {
      id: "project",
      name: "My works",
      ref: projectRef,
      component: <ProjectSection />,
    },
    { id: "contact", name: "Contact", ref: contactRef, component: <Footer /> },
  ];
  return (
    <div className="">
      <Navbar
        links={sections.map((s) => ({ href: s.id, name: s.name }))}
        sectionRefs={
          sections.map((s) => s.ref) as React.RefObject<HTMLElement>[]
        }
      />
      {sections.map((s) => (
        <div key={s.id}>
          <section id={s.id} ref={s.ref}>
            {s.component}
          </section>
          {s.id === "tech" && <Tape />}
        </div>
      ))}
    </div>
  );
}
