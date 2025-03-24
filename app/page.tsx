"use client";
import Hero from "@/sections/Hero";
import Tape from "@/sections/Tape";
import { useRef } from "react";
import dynamic from "next/dynamic";
import ProjectSection from "@/sections/ProjectSection";
const NavbarNoSSR = dynamic(() => import("@/sections/Navbar"), { ssr: false });
const TechSectionNoSSR = dynamic(() => import("@/sections/TechSection"), { ssr: false });
const FooterNoSSR = dynamic(() => import("@/sections/Footer"), { ssr: false });

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const sections = [
    { id: "home", name: "Home", ref: homeRef, component: <Hero /> },
    { id: "tech", name: "My Tech", ref: techRef, component: <TechSectionNoSSR /> },
    {
      id: "project",
      name: "My works",
      ref: projectRef,
      component: <ProjectSection />,
    },
    { id: "contact", name: "Contact", ref: contactRef, component: <FooterNoSSR /> },
  ];
  return (
    <div>
      <NavbarNoSSR
        links={sections.map((s) => ({ href: s.id, name: s.name }))}
        sectionRefs={sections.map((s) => s.ref) as React.RefObject<HTMLElement>[]}
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
