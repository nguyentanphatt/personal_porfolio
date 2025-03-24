"use client";
import { useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./ProjectScroll";

type Props = {
    children: React.ReactNode
    id: string
}

const ProjectDetail = ({children, id}: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore(state => state.setInViewFeature)
  const isViewFeature = useFeatureStore((state)=>state.inViewFeature)
  useEffect(() => {
    if(isInView) setInViewFeature(id)
        if(!isInView && isViewFeature === id) setInViewFeature(null)
  }, [isInView, id, setInViewFeature, isViewFeature]);

  return (
    <div
      ref={ref}
      className={`py-10 md:py-16 transition-colors ${
        isInView ? "text-white" : "text-white/50"
      }`}
    >
      {children}
    </div>
  );
};

export default ProjectDetail;
