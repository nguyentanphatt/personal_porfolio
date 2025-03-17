"use client";
import Label from "@/components/Label";
import TechStack from "@/components/TechStack";
import { tech01, tech02 } from "@/constants/data";
import { useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StaggerText from "@/components/StaggerText";
import { animationLottie, performanceLottie, responsiveLottie } from "@/constants/image";
import TechCard from "@/components/TechCard";

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      console.log("in view");
      
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
        <TechStack item={tech01} delay={1.5}/>
        <TechStack item={tech02} delay={2.5} right/>

        <TechCard title="Responsive" content="I build websites that look great on any device. A responsive design ensures your website adapts to all screen sizes, providing the best user experience across desktops, tablets, and mobile phones" lottie={responsiveLottie} />
        <TechCard bgColor="bg-[#386CB0]" title="Animation" content="I create smooth and engaging animations to enhance user interactions. From subtle hover effects to complex motion graphics, animations make your website more dynamic and interactive." lottie={animationLottie} />
        <TechCard bgColor="bg-[#2D4F80]" title="Performance Optimization" content="I optimize websites for speed and efficiency. Fast-loading pages improve user experience and SEO rankings, ensuring visitors stay engaged and conversions increase." lottie={performanceLottie} />
      </div>
      
    </div>
  );
};

export default TechSection;
