import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 overflow-x-clip py-20 md:py-36 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>
      <div className="flex flex-col items-center justify-center border gap-2.5 px-1 md:px-0">
        <h2 className="text-2xl md:text-3xl text-white">Hi, I AM PHAT</h2>
        <h1 className="text-3xl md:text-4xl text-white text-center font-bold md:w-[600px] lg:w-[600px]">
          A Frontend Developer Crafting Seamless Web Experiences
        </h1>
        <p className="text-base md:text-xl text-white/50 text-center md:w-[500px] lg:w-[600px]">
          I can transform ideas into visually stunning, interactive, and fully
          responsive web experiences that captivate user across all platform.
        </p>
      </div>
    </div>
  );
};

export default Hero;
