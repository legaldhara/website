"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/components/home/useNearViewport";

const ContactForm = dynamic(() => import("@/components/Contactform"), {
  ssr: false,
  loading: () => <LoadingPanel />,
});

export default function LazyContactForm() {
  const [containerRef, nearViewport] = useNearViewport<HTMLElement>();

  return (
    <section ref={containerRef} aria-label="Contact Legal Dhara" className="min-h-[42rem] bg-white">
      {nearViewport ? <ContactForm /> : <LoadingPanel />}
    </section>
  );
}

function LoadingPanel() {
  return (
    <div className="mx-auto flex min-h-[42rem] max-w-7xl items-center px-5 sm:px-8 lg:px-10" aria-busy="true">
      <p className="text-sm font-semibold text-secondary-text">Preparing the contact form</p>
    </div>
  );
}
