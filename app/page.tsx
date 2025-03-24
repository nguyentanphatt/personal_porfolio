"use client"
/* import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import ProjectSection from "@/sections/ProjectSection";
import Tape from "@/sections/Tape";
import TechSection from "@/sections/TechSection"; */
import dynamic from "next/dynamic";

const NavbarNoSSR = dynamic(() => import('@/sections/Navbar'), { ssr: false });
const HeroNoSSR = dynamic(() => import('@/sections/Hero'), { ssr: false });
const TechSectionNoSSR = dynamic(() => import('@/sections/TechSection'), { ssr: false });
const TapeNoSSR = dynamic(() => import('@/sections/Tape'), { ssr: false });
const ProjectSectionNoSSR = dynamic(() => import('@/sections/ProjectSection'), { ssr: false });
const FooterNoSSR = dynamic(() => import('@/sections/Footer'), { ssr: false });
export default function Home() {
  return (
    <div className="">
      <NavbarNoSSR />
      <HeroNoSSR />
      <TechSectionNoSSR />
      <TapeNoSSR />
      <ProjectSectionNoSSR />
      <FooterNoSSR />
    </div>
  );
}
