import StaggerText from "@/components/StaggerText";
import { StarOrbit } from "@/components/StarOrbit";
import StarTrail from "@/components/StarTrail";
import {
  planet01,
  planet02,
  planet03,
  planet04,
  Star,
} from "@/constants/image";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="relative z-0 overflow-x-clip py-20 md:py-36 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <StarOrbit size={490} rotate={135} spin spinDuration="28s">
          <Image src={planet04} alt="planet" width={50} height={50} />
        </StarOrbit>
        <StarOrbit size={630} rotate={90} spin spinDuration="32s">
          <Image src={planet03} alt="planet" width={50} height={50} />
        </StarOrbit>
        <StarOrbit size={800} rotate={-45} spin spinDuration="36s">
          <Image src={planet01} alt="planet" className="size-20" />
        </StarOrbit>
        <StarOrbit size={940} rotate={-90} spin spinDuration="40s">
          <Image src={planet02} alt="planet" width={100} height={100} />
        </StarOrbit>
        <StarOrbit size={490} rotate={135}>
          <Star className="size-12 text-white" />
        </StarOrbit>
        <StarOrbit size={690} rotate={-75}>
          <Star className="size-14 text-white" />
        </StarOrbit>
        <StarOrbit size={890} rotate={125}>
          <Star className="size-14 text-white" />
        </StarOrbit>
        <StarOrbit size={990} rotate={-20}>
          <Star className="size-16 text-white" />
        </StarOrbit>
        <StarTrail />
      </div>
      <div className="flex flex-col items-center justify-center border gap-2.5 px-1 md:px-0">
        <StaggerText
          text="Hi, I AM PHAT"
          className="text-2xl md:text-3xl text-white"
        />
        <StaggerText
          text="A Frontend Developer Crafting Seamless Web Experiences"
          className="text-3xl md:text-4xl text-white text-center font-bold md:w-[600px] lg:w-[600px]"
          delay={0.8}
          staggerSpeed={0.1}
        />
        <StaggerText
          text="I can transform ideas into visually stunning, interactive, and fully responsive web experiences that captivate user across all platform."
          className="text-base md:text-xl text-white/50 text-center md:w-[500px]"
          delay={1.5}
          staggerSpeed={0.1}
        />
      </div>
    </div>
  );
};

export default Hero;
