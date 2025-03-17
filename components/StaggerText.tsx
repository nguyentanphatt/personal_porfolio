"use client";
import React, { useEffect } from "react";
import {AnimationControls, motion, useAnimation, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
const StaggerText = ({
  text,
  delay = 0.3,
  className,
  staggerSpeed = 0.05,
  animate,
}: {
  text: string;
  delay?: number;
  staggerSpeed?: number;
  className?: string;
  animate?: AnimationControls | Variants;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  const textVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: staggerSpeed,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: staggerSpeed,
        delayChildren: delay,
        when: "beforeChildren",
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut"
      },
    },
  };
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate={animate as AnimationControls || controls}
      variants={textVariants}
      className={twMerge("overflow-hidden", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
          {index !== words.length - 1 && "\u00A0"}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggerText;
