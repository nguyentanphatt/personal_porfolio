"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  delay: number;
  duration: number;
  tailLength: string;
}
const generateStars = (count: number):Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + "vh",
    delay: Math.random() * 10,
    duration: Math.random() * 6 + 4,
    tailLength: Math.random() * 3 + 3 + "em",
  }));
};

export default function FallingStars({ count = 10 }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(count));
  }, [count]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute w-full h-full transform -rotate-45">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: "150vw", opacity: 1 }}
            animate={{ x: "-30vw", opacity: [1, 0.6, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute left-0 bg-white shadow-lg"
            style={{
              top: star.top,
              width: star.tailLength,
              height: "2px",
              background: "linear-gradient(45deg, white, transparent)",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
    </div>
  );
}
