import { useEffect, useState } from "react";

export default function useScrollSpy(selectors: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Ensure this code only runs on the client side
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `-${offset}px 0px -80% 0px` }
    );

    selectors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectors, offset]);

  return activeId;
}