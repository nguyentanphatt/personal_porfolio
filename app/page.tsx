"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
const NavbarNoSSR = dynamic(() => import("@/sections/Navbar"), { ssr: false });
const HeroNoSSR = dynamic(() => import("@/sections/Hero"), { ssr: false });
const TechSectionNoSSR = dynamic(() => import("@/sections/TechSection"), { ssr: false });
const TapeNoSSR = dynamic(() => import("@/sections/Tape"), { ssr: false });
const ProjectSectionNoSSR = dynamic(() => import("@/sections/ProjectSection"), { ssr: false });
const FooterNoSSR = dynamic(() => import("@/sections/Footer"), { ssr: false });

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const sections = [
    { id: "home", name: "Home", ref: homeRef, component: <HeroNoSSR /> },
    { id: "tech", name: "My Tech", ref: techRef, component: <TechSectionNoSSR /> },
    {
      id: "project",
      name: "My works",
      ref: projectRef,
      component: <ProjectSectionNoSSR />,
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
          {s.id === "tech" && <TapeNoSSR />}
        </div>
      ))}
    </div>
  );
}
