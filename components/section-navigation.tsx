"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Section = { title: string; id: string };
interface SectionNavigationProps {
  sections: Section[];
}

export default function SectionNavigation({ sections }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft = 0;
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sections]);

  useEffect(() => {
    const activeEl = itemRefs.current[activeSection];
    if (activeEl && scrollerRef.current) {
      const container = scrollerRef.current;
      const elRect = activeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      container.scrollTo({
        left:
          container.scrollLeft +
          elRect.left -
          containerRect.left -
          containerRect.width / 2 +
          elRect.width / 2,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const offsetTop = el.offsetTop - 80; // adjust this value to match your header height
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // or "auto" if you want it to jump instantly
    });
    setActiveSection(id);
  }
};


  return (
    <nav className="sticky top-16 z-40 bg-light-orange dark:bg-deep-blue border border-brand-orange dark:border-purple-800  shadow-md px-4">
      <div
        ref={scrollerRef}
        className="w-full overflow-x-auto whitespace-nowrap hide-scrollbar"
      >
        <ul
          className="flex items-center justify-between gap-2 min-w-max 
                     text-sm sm:text-base md:text-md font-medium
                     text-gray-700 dark:text-gray-300 py-2"
        >
          {sections.map((section) => (
            <li key={section.id} className="flex-shrink-0">
              <Link
                href={`#${section.id}`}
                scroll={false}
                ref={(el) => {
                  itemRefs.current[section.id] = el as HTMLAnchorElement;
                }}
                onClick={(e) => handleClick(e, section.id)}
                className={cn(
                  "block px-4 py-2 rounded-lg text-center transition-colors duration-200",
                  "max-w-[160px] sm:max-w-[180px] md:max-w-[200px] truncate",
                  activeSection === section.id
                    ? "bg-brand-orange dark:bg-purple-800 text-deep-blue dark:text-white font-bold"
                    : "hover:bg-brand-orange/20 dark:hover:bg-purple-800/20 hover:text-deep-blue dark:hover:text-brand-orange"
                )}
                title={section.title}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
