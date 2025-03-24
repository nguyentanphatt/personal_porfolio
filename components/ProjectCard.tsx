"use client"
import { project01, project02, project03 } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useFeatureStore } from "./ProjectScroll";

type FeatureProps = {
    children: React.ReactNode
} & CardProps

type CardProps = {
    id:string
}

const ProjectCard = ({children, id}: FeatureProps) => {
  const inViewFeature = useFeatureStore((state)=>state.inViewFeature)

  return <div className={twMerge(`absolute inset-0 h-[150px] md:h-[308px] lg:h-[400px] w-[200px] md:w-[400px] lg:w-[520px] rounded-2xl bg-red-300 transition-opacity ${inViewFeature === id ? "opacity-100": "opacity-0"}`)}>
    {children}
  </div>;
};

export const Project01 = ({id}:CardProps) => {
  return (
    <ProjectCard id={id}>
      <Image
        src={project01}
        alt="Project 01"
        width={600}
        height={600}
        className="w-full h-full"
      />
    </ProjectCard>
  );
};

export const Project02 = ({id}:CardProps) => {
    return (
      <ProjectCard id={id}>
        <Image
          src={project02}
          alt="Project 01"
          width={600}
          height={600}
          className="w-full h-full"
        />
      </ProjectCard>
    );
  };

  export const Project03 = ({id}:CardProps) => {
    return (
      <ProjectCard id={id}>
        <Image
          src={project03}
          alt="Project 01"
          width={600}
          height={600}
          className="w-full h-full"
        />
      </ProjectCard>
    );
  };

export default ProjectCard;
