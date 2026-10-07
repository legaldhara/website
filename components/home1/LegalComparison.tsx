"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./LegalComparison.module.css";

const comparisons = [
  {
    key: "cost",
    title: "Cost",
    traditionalValue: "₹5,000–₹25,000",
    traditionalDescription: "In service charges.",
    modernValue: "₹0 service charges",
    modernDescription: "Pay only applicable government fees.",
  },
  {
    key: "processing",
    title: "Processing",
    traditionalValue: "30–60 days",
    traditionalDescription: "Multiple follow-ups.",
    modernValue: "7–15 days",
    modernDescription: "Real-time updates.",
  },
  {
    key: "paperwork",
    title: "Paperwork",
    traditionalValue: "Confusing forms",
    traditionalDescription: "Manual processes.",
    modernValue: "Online forms",
    modernDescription: "Guided assistance.",
  },
  {
    key: "support",
    title: "Support",
    traditionalValue: "Basic support",
    traditionalDescription: "Extra charges.",
    modernValue: "24/7 expert help",
    modernDescription: "Dedicated experts at every step.",
  },
];

export default function LegalComparison() {
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
      className={`${styles.section} ${isRevealed ? styles.revealed : ""}`}
      aria-labelledby="legal-comparison-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Why Legal Dhara</p>

        <div className={styles.intro}>
          <h2 id="legal-comparison-title">
            A clearer choice.
            <br />
            At every step.
          </h2>
          <p>Compare the fees, process and support behind your legal requirements.</p>
        </div>

        <p className={styles.legend}>
          <span>Traditional services</span>
          <img src="/assets/home1-comparison/arrow-right.svg" width="32" height="32" alt="to" />
          <strong>Legal Dhara</strong>
        </p>

        <div className={styles.grid}>
          {comparisons.map((comparison, index) => (
            <article
              key={comparison.key}
              className={styles.card}
              style={{ "--comparison-order": index } as CSSProperties}
              aria-labelledby={`comparison-${comparison.key}`}
            >
              <h3 id={`comparison-${comparison.key}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {comparison.title}
              </h3>

              <div className={styles.pair}>
                <div className={`${styles.half} ${styles.traditional}`}>
                  <div className={styles.copy}>
                    <p className={styles.label}>Traditional</p>
                    <p className={styles.value}>{comparison.traditionalValue}</p>
                    <p className={styles.description}>{comparison.traditionalDescription}</p>
                  </div>
                  <img
                    className={styles.art}
                    src={`/assets/home1-comparison/traditional-${comparison.key}.svg`}
                    width="320"
                    height="180"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <span className={styles.divider} aria-hidden="true">
                  <img src="/assets/home1-comparison/arrow-down.svg" width="24" height="24" alt="" />
                </span>

                <div className={`${styles.half} ${styles.modern}`}>
                  <div className={styles.copy}>
                    <p className={styles.label}>Legal Dhara</p>
                    <p className={styles.value}>{comparison.modernValue}</p>
                    <p className={styles.description}>{comparison.modernDescription}</p>
                  </div>
                  <img
                    className={styles.art}
                    src={`/assets/home1-comparison/modern-${comparison.key}.svg`}
                    width="320"
                    height="180"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.footer}>Clear fees. Guided paperwork. Expert support.</p>
      </div>
    </section>
  );
}
