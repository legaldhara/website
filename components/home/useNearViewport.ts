"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export function useNearViewport<T extends HTMLElement>(): [RefObject<T>, boolean] {
  const containerRef = useRef<T>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    if (nearViewport) return;
    if (!("IntersectionObserver" in window)) {
      setNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [nearViewport]);

  return [containerRef, nearViewport];
}
