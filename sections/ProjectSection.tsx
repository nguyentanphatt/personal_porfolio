"use client";
import Label from "@/components/Label";
import ProjectDetail from "@/components/ProjectDetail";
import { features } from "@/constants/data";
import { useAnimation, useInView, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="mx-auto max-w-6xl px-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Label title="My Project" />
      </motion.div>

      <div className="flex w-full items-start gap-5 md:gap-10 lg:gap-20">
        <div className="w-full py-[20vh] md:py-[30vh]">
          <div>
            {features.map((f) => (
              <ProjectDetail key={f.id} id={f.id}>
                <div className="flex flex-col gap-1 md:gap-5">
                  <h1 className="text-lg md:text-3xl font-bold">{f.title}</h1>
                  <p className="text-xs md:text-base line-clamp-5 md:line-clamp-none">
                    {f.description}
                  </p>
                  <p className="text-xs md:text-lg">
                    <span className="font-bold">Tech Stack:</span>{" "}
                    {f.tech.join(", ")}
                  </p>
                  <Link href={f.link} target="_blank" rel="noopener noreferrer">
                    <div className="p-1.5 lg:p-2 mt-1 md:mt-3 text-xs md:text-base text-black text-center rounded-full bg-gradient-to-r from-light-blue to-sky-blue">
                      Live Demo
                    </div>
                  </Link>
                </div>
              </ProjectDetail>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-screen w-full flex items-center ">
          <div className="relative w-full aspect-square rounded-2xl h-[200px] md:h-[400px]">
            {features.map((f) => (
              <f.project key={f.id} id={f.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
