"use client";
import React from "react";
import { easeInOut, motion, spring } from "framer-motion";
import { twMerge } from "tailwind-merge";
const StaggerText = ({
  text,
  delay = 0.3,
  className,
  staggerSpeed = 0.05,
}: {
  text: string;
  delay?: number;
  staggerSpeed?: number;
  className?: string;
}) => {
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
      spring:{
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5,
        velocity: 0,
        duration: 0.5,
        ease: easeInOut,
      }
    },
  };
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
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
