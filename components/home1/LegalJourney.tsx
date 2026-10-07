"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./LegalJourney.module.css";

const steps = [
  {
    icon: "choose-service",
    title: "Choose a Service",
    description: "Browse our services and select the right support for your business.",
    benefits: ["100+ services", "Expert recommendations", "Instant quotes"],
  },
  {
    icon: "share-details",
    title: "Share Your Details",
    description: "Submit your details through a simple online form.",
    benefits: ["Secure details", "Auto-save progress", "Mobile friendly"],
  },
  {
    icon: "connect-expert",
    title: "Connect with an Expert",
    description: "An expert contacts you to understand your requirements and guide the next steps.",
    benefits: ["Certified experts", "Free consultation", "Personalised guidance"],
  },
  {
    icon: "file-for-you",
    title: "We File for You",
    description: "Our team handles the paperwork and filing formalities.",
    benefits: ["Complete documentation", "Regular updates"],
  },
];

export default function LegalJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.process} ${isRevealed ? styles.revealed : ""}`}
      aria-labelledby="legal-journey-title"
    >
      <header className={styles.header}>
        <div>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.eyebrow}>How It Works</p>
          <h2 id="legal-journey-title">
            Make your legal journey
            <br />
            <span>simple.</span>
          </h2>
        </div>
        <p className={styles.summary}>
          From choosing your service to completing the paperwork, our experts guide you through four clear steps.
        </p>
      </header>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li
            key={step.icon}
            className={styles.step}
            style={{ "--process-order": index } as CSSProperties}
          >
            <span className={styles.node} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={styles.content}>
              <svg className={styles.graphic} viewBox="0 0 180 180" aria-hidden="true">
                <use href={`/assets/home1-process/process-sprite.svg#${step.icon}`} />
              </svg>
              <h3>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <ul className={styles.benefits}>
                {step.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.baseline}>
        <span>Expert support, from enquiry to filing.</span>
      </div>
    </section>
  );
}
