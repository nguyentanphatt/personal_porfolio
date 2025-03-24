import { useEffect, useState, RefObject } from "react";

export default function useScrollSpy(refs: RefObject<HTMLElement>[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || !refs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute("id") || "");
          }
        });
      },
      { rootMargin: `-${offset}px 0px -80% 0px` }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs, offset]);

  return activeId;
}