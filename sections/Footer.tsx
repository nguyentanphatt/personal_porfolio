"use client";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Lottie from "lottie-react";
import { arrowLottie } from "@/constants/image";

const Footer = () => {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, transparent 50%, ${color})`;
  return (
    <div className="pt-40">
      <motion.div
        style={{
          backgroundImage,
        }}
        className="h-[100vh] flex flex-col justify-between pt-60"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2.5 border border-white rounded-xl px-2">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-blue opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-blue"></span>
            </span>
            <p className="text-white text-sm md:text-base">Available for next project</p>
          </div>
          <h1 className="text-xl md:text-4xl lg:text-[56px] text-white uppercase font-bold mt-5 md:mt-10">
            Let's work together
          </h1>
          <Lottie
            animationData={arrowLottie}
            loop
            autoPlay
            width={400}
            height={400}
            className="rotate-180 size-20 md:size-40"
          />
          <a href="mailto:nguyentanphattt0907@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-xl text-white font-bold">
            nguyentanphattt0907@gmail.com
          </a>
        </div>
        <div className="border border-t-white border-r-0 border-b-0 border-l-0 flex items-center justify-between  mx-auto w-[80%] h-10">
          <p className="text-white text-xs md:text-base">2025 © All rights reserved.</p>
          <div className="flex items-center justify-center gap-5 text-xs md:text-base">
            <a href="mailto:nguyentanphattt0907@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white">Email</a>
            <a href="https://github.com/nguyentanphatt" target="_blank" rel="noopener noreferrer" className="text-white">Github</a>
            <a href="https://www.linkedin.com/in/phat-nguyen-530140354/" target="_blank" rel="noopener noreferrer" className="text-white">Linkedin</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
