"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LegalComparison.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) return;

        const cards = gsap.utils.toArray<HTMLElement>("[data-comparison-card]", section);
        const headingTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: desktop ? "top 42%" : "top 62%",
            scrub: desktop ? 0.75 : 0.55,
            invalidateOnRefresh: true,
          },
        });

        headingTimeline
          .fromTo(
            "[data-comparison-heading]",
            { autoAlpha: 0, y: desktop ? 36 : 22 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
          )
          .fromTo(
            "[data-comparison-legend]",
            { autoAlpha: 0, x: desktop ? -28 : -18 },
            { autoAlpha: 1, x: 0, duration: 0.6 },
            0.35,
          );

        cards.forEach((card, index) => {
          const timeline = desktop
            ? headingTimeline
            : gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 56%",
                  scrub: 0.6,
                  invalidateOnRefresh: true,
                },
              });
          const position = desktop ? 0.78 + index * 0.3 : 0;

          timeline
            .fromTo(
              card,
              { autoAlpha: 0, y: desktop ? 42 : 24, scale: 0.975 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.62 },
              position,
            )
            .fromTo(
              card.querySelector("[data-comparison-traditional]"),
              { autoAlpha: 0, x: desktop ? -30 : -18 },
              { autoAlpha: 1, x: 0, duration: 0.58 },
              position + 0.12,
            )
            .fromTo(
              card.querySelector("[data-comparison-divider]"),
              { scaleX: 0, transformOrigin: "left center" },
              { scaleX: 1, duration: 0.42 },
              position + 0.34,
            )
            .fromTo(
              card.querySelector("[data-comparison-modern]"),
              { autoAlpha: 0, x: desktop ? 30 : 18 },
              { autoAlpha: 1, x: 0, duration: 0.62 },
              position + 0.42,
            );
        });
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="legal-comparison-title"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-comparison-heading>Why Legal Dhara</p>

        <div className={styles.intro} data-comparison-heading>
          <h2 id="legal-comparison-title">
            A clearer choice.
            <br />
            At every step.
          </h2>
          <p>Compare the fees, process and support behind your legal requirements.</p>
        </div>

        <p className={styles.legend} data-comparison-legend>
          <span>Traditional services</span>
          <img src="/assets/home1-comparison/arrow-right.svg" width="32" height="32" alt="to" />
          <strong>Legal Dhara</strong>
        </p>

        <div className={styles.grid}>
          {comparisons.map((comparison, index) => (
            <article
              key={comparison.key}
              className={styles.card}
              data-comparison-card
              aria-labelledby={`comparison-${comparison.key}`}
            >
              <h3 id={`comparison-${comparison.key}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {comparison.title}
              </h3>

              <div className={styles.pair}>
                <div className={`${styles.half} ${styles.traditional}`} data-comparison-traditional>
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

                <span className={styles.divider} data-comparison-divider aria-hidden="true">
                  <img src="/assets/home1-comparison/arrow-down.svg" width="24" height="24" alt="" />
                </span>

                <div className={`${styles.half} ${styles.modern}`} data-comparison-modern>
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
