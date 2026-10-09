"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LegalJourney.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const createTimeline = (pin: boolean) => {
      const stepElements = gsap.utils.toArray<HTMLElement>("[data-journey-step]", section);
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: pin ? "top top+=72" : "top 78%",
          end: pin ? "+=1800" : "bottom 24%",
          scrub: 0.7,
          pin,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      stepElements.forEach((step, index) => {
        const node = step.querySelector<HTMLElement>("[data-journey-node]");
        const content = step.querySelector<HTMLElement>("[data-journey-content]");

        timeline
          .fromTo(
            step,
            { "--step-progress": 0 },
            { "--step-progress": 1, duration: 0.72, ease: "none" },
            index,
          )
          .fromTo(
            node,
            { autoAlpha: 0, scale: 0.65 },
            { autoAlpha: 1, scale: 1, duration: 0.34, ease: "none" },
            index + 0.08,
          )
          .fromTo(
            content,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.54, ease: "none" },
            index + 0.18,
          );
      });
    };

    const media = gsap.matchMedia();
    media.add("(min-width: 900px)", () => createTimeline(true));
    media.add("(max-width: 899px)", () => createTimeline(false));

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={styles.process}
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
            data-journey-step
          >
            <span className={styles.node} data-journey-node aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={styles.content} data-journey-content>
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
