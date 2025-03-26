"use client";
import { TechStackProps } from "@/constants/type";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TechStack = ({ item, delay, right = false }: TechStackProps) => {
  return (
    <div className="w-full overflow-hidden py-3">
      <motion.div
        animate={{
          opacity: 1,
          scale: 1,
          x: right ? [0, 10, 0] : [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2,
          ease: "linear",
          duration: 3,
        }}
        className="w-full flex items-center justify-center gap-2 md:gap-5"
      >
        {item.map((tech, index) => (
          <div
            key={tech.id}
            className="relative group flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 blur-xs rounded-full md:rounded-2xl bg-gradient-to-r from-blue-400 to-sky-600 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: delay + 1 + index * 0.2,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center gap-1 md:gap-2.5 lg:gap-4 p-3 bg-gradient-to-r from-light-blue to-sky-blue rounded-full md:rounded-2xl z-10"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                width={100}
                height={100}
                className="size-3 md:size-6"
              />
              <p className="text-[10px] md:text-base lg:text-xl font-medium">
                {tech.name}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
