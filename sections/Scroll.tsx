"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { planet01, planet02, planet03 } from "@/constants/image";

const sections = [
  { id: 1, text: "Info 1", image: planet01 },
  { id: 2, text: "Info 2", image: planet02 },
  { id: 3, text: "Info 3", image: planet03 },
];

export default function StickyScroll() {
  const [activeImage, setActiveImage] = useState(sections[0].image);

  return (
    <div className="flex h-[200vh] px-10 py-20 gap-24  items-center">
      {/* Left: Scrolling Info */}
      <div className="flex flex-col relative">
        {sections.map((section) => {
          const { ref, inView } = useInView({ threshold: 0.5 });

          // Update active image when section comes into view
          useEffect(() => {
            if (inView) {
              setActiveImage(section.image);
            }
          }, [inView]); // Runs only when `inView` changes

          return (
            <motion.div
              key={section.id}
              ref={ref}
              className="text-3xl font-bold bg-gray-200 p-10 rounded-lg shadow-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {section.text}
            </motion.div>
          );
        })}
      </div>

      {/* Right: Sticky Image */}
{/*       <div className=" sticky top-0 flex justify-center items-center">
        <motion.img
          key={activeImage.src} // Ensure a smooth transition
          src={activeImage.src}
          alt="Active Image"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div> */}
    </div>
  );
}
