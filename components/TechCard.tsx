import { TechCardProps } from "@/constants/type";
import Lottie from "lottie-react";
import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

const TechCard = ({
  bgColor,
  lottie,
  title,
  content,
  ...other
}: TechCardProps & ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={twMerge(
        "flex flex-col-reverse items-center justify-center md:flex-row md:gap-8 lg:gap-32 mt-20 p-4 md:p-6 lg:p-12 rounded-4xl bg-[#4580CC] sticky",
        bgColor
      )}
      {...other}
    >
      <div className="flex flex-col items-center justify-center md:items-start gap-2 md:gap-5">
        <h1 className="text-white text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-white text-sm md:text-base text-center md:text-start max-w-[270px] md:max-w-[400px]">
          {content}
        </p>
      </div>
      <Lottie
        animationData={lottie}
        loop
        autoPlay
        width={400}
        height={400}
        className="size-20 md:size-40"
      />
    </div>
  );
};

export default TechCard;
