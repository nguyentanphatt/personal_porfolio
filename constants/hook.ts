import { useEffect, useState } from "react";

export default function useScrollSpy(selectors: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!selectors.length) return;

    let observer: IntersectionObserver | null = null;

    const handleObserve = () => {
      observer = new IntersectionObserver(
        (entries) => {
          let latestActiveId = activeId;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              latestActiveId = entry.target.id;
            }
          });
          if (latestActiveId !== activeId) {
            setActiveId(latestActiveId);
          }
        },
        { rootMargin: `-${offset}px 0px -80% 0px` }
      );

      selectors.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer!.observe(el);
      });
    };

    // Ensure the DOM is ready before running observer
    setTimeout(() => {
      if (typeof window !== "undefined") {
        handleObserve();
      }
    }, 100);

    return () => observer?.disconnect();
  }, [selectors, offset]);

  return activeId;
}
