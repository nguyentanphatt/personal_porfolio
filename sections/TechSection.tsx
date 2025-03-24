"use client";
import Label from "@/components/Label";
import TechStack from "@/components/TechStack";
import { tech01, tech02, techCardData } from "@/constants/data";
import { useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StaggerText from "@/components/StaggerText";
import TechCard from "@/components/TechCard";

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="py-40">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-5"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Label title="My Tech" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <StaggerText
            text="I use various frontend and backend technologies to build functional and user-friendly websites."
            className="text-white text-xl md:text-2xl font-bold max-w-[450px] text-center"
            staggerSpeed={0.09}
            animate={mainControls}
          />
        </motion.div>
        <TechStack item={tech01} delay={1.2} />
        <TechStack item={tech02} delay={2.2} right />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 4.2 }}
        >
          {techCardData.map((item, index) => (
            <TechCard
              key={index}
              title={item.title}
              content={item.content}
              lottie={item.lottie}
              bgColor={item.bgColor}
              style={{
                top: `calc(150px + ${index * 100}px)`
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechSection;
