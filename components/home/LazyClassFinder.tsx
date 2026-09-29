"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/components/home/useNearViewport";

const ClassFinderTool = dynamic(() => import("@/components/ClassFinderTool"), {
  ssr: false,
  loading: () => <LoadingPanel label="Preparing the trademark class finder" />,
});

export default function LazyClassFinder() {
  const [containerRef, nearViewport] = useNearViewport<HTMLElement>();

  return (
    <section ref={containerRef} aria-label="Trademark class finder" className="min-h-[30rem] bg-charcoal">
      {nearViewport ? <ClassFinderTool /> : <LoadingPanel label="Trademark class finder" />}
    </section>
  );
}

function LoadingPanel({ label }: { label: string }) {
  return (
    <div className="mx-auto flex min-h-[30rem] max-w-7xl items-center px-5 sm:px-8 lg:px-10" aria-busy="true">
      <p className="text-sm font-semibold text-white/60">{label}</p>
    </div>
  );
}
