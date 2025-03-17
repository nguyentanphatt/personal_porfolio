import { TechCardProps } from "@/constants/type";
import Lottie from "lottie-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const TechCard = ({bgColor, lottie, title, content}: TechCardProps) => {
  return (
    <div className={twMerge("flex gap-32 mt-20 p-12 rounded-4xl bg-[#4580CC]", bgColor)}>
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-base text-balance max-w-[400px]">
          {content}
        </p>
      </div>
      <Lottie
        animationData={lottie}
        loop
        autoPlay
        width={400}
        height={400}
        className="size-40"
      />
    </div>
  );
};

export default TechCard;
