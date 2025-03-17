import { StarFour } from "@/constants/image";
import React from "react";

const Label = ({title}: {title:string}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <StarFour className="size-5 md:size-7 text-light-blue" />
      <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-light-blue to-sky-blue text-transparent bg-clip-text">{title}</p>
    </div>
  );
};

export default Label;
