"use client";
import { useEffect, useState, useRef } from "react";

export default function StatCounter({
  endValue,
  duration = 1500,
  increment = 1,
  suffix = "",
}: any) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle counting animation
  const startCounting = () => {
    let start = 0;
    const steps = endValue / increment;
    const stepTime = Math.max(Math.floor(duration / steps), 10);

    // Clear previous timer if any
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timerRef.current!);
      }
      setCount(parseFloat(start.toFixed(1)));
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0); // reset to 0
          startCounting(); // restart count when visible
        } else {
          // optional: stop counting if the user scrolls away
          if (timerRef.current) clearInterval(timerRef.current);
        }
      },
      { threshold: 0.3 } // trigger when 30% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [endValue, duration, increment]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
