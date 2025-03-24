"use client";
import { tapeData } from "@/constants/data";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import quantumLogo from "@/public/test/quantum.svg";
import acmeLogo from "@/public/test/acme-corp.svg";
import echoValleyLogo from "@/public/test/echo-valley.svg";
import pulseLogo from "@/public/test/pulse.svg";
import outsideLogo from "@/public/test/outside.svg";
import apexLogo from "@/public/test/apex.svg";
import celestialLogo from "@/public/test/celestial.svg";
import twiceLogo from "@/public/test/twice.svg";
const Tape = () => {
  const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];
  return (
    <div className="py-40 lg:pb-80 overflow-x-clip">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-40 pr-20"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {tapeData.map((word, index) => (
                <div key={index} className="inline-flex gap-4 items-center">
                  <word.icon className="size-5 md:size-10 text-white" />
                  <span className="text-lg md:text-2xl text-white font-bold">
                    {word.content}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
    
  );
};

export default Tape;
