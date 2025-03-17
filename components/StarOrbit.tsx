import { StarOrbitProps } from "@/constants/type";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const StarOrbit = ({
  children,
  size,
  rotate,
  spinDuration,
  spin = false,
  star = false,
  starDuration,
  animatedLoop = false,
}: PropsWithChildren<StarOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(spin === true && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className="flex items-start justify-start "
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div className={twMerge(star === true && "animate-spin")} style={{
            animationDuration: starDuration
          }}>
            <div
              className={twMerge(animatedLoop && "animate-blink")}
              style={{
                animationDuration: "5s",
                animationIterationCount: "infinite",
                transform: `rotate(${rotate * -1}deg)`,
                opacity: animatedLoop ? 0 : 1,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
